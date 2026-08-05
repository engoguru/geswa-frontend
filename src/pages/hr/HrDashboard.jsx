import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    FileDown, Users, Wallet, TrendingUp,
    Plus, ArrowUpRight, ArrowDownRight, Printer
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../reduxStore/slice/hr/attendanceSlice";
import { createTransaction, getAllTransaction } from "../../reduxStore/slice/hr/expanseSlice";
import { toast } from "react-toastify";
import { logoutUser } from "../../reduxStore/slice/userSlice";



const seedEmployees = [
    { id: "e1", name: "Aditi Sharma", role: "Frontend Engineer", yearlyCtc: 1200000, monthlyCtc: 100000, variablePay: 5000, deductions: 2500 },
    { id: "e2", name: "Rohan Verma", role: "Backend Engineer", yearlyCtc: 1500000, monthlyCtc: 125000, variablePay: 8000, deductions: 3200 },
    { id: "e3", name: "Priya Nair", role: "HR Manager", yearlyCtc: 900000, monthlyCtc: 75000, variablePay: 0, deductions: 1800 },
    { id: "e4", name: "Karan Mehta", role: "Product Designer", yearlyCtc: 1080000, monthlyCtc: 90000, variablePay: 4000, deductions: 2100 },
];

const seedTransactions = [
    { id: "t1", type: "inflow", from: "Client - Nimbus Corp", who: "Priya Nair", forWhat: "Invoice #204 payment", amount: 250000, date: todayStr() },
    { id: "t2", type: "outflow", from: "Office Account", who: "Karan Mehta", forWhat: "Adobe Creative Cloud renewal", amount: 4200, date: todayStr() },
    { id: "t3", type: "outflow", from: "Office Account", who: "Admin", forWhat: "Office rent - July", amount: 85000, date: shiftDate(0) },
    { id: "t4", type: "inflow", from: "Client - Alto Retail", who: "Rohan Verma", forWhat: "Milestone 2 payment", amount: 180000, date: shiftDate(-3) },
];

function todayStr() {
    return new Date().toISOString().slice(0, 10);
}
function shiftDate(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
}
function daysInMonth(dateStr) {
    const d = new Date(dateStr);
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}
function sameMonth(dateStr, ref) {
    return dateStr.slice(0, 7) === ref.slice(0, 7);
}
function money(n) {
    return "₹" + Number(n || 0).toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

export default function HrDashboard() {
    const [tab, setTab] = useState("hr"); // 'hr' | 'expense'

    // useSelector
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-section { display: block !important; }
          body { background: white !important; }
        }
        .print-section { display: none; }
        .tabular { font-variant-numeric: tabular-nums; }
      `}</style>

            <Navbar />

            {/* Tab switcher */}
            <div className="no-print border-b border-slate-200 bg-white">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="font-semibold tracking-tight text-slate-800">HR & Finance</h1>
                    <div className="flex gap-1 bg-slate-100 rounded-lg p-1">
                        <button
                            onClick={() => setTab("hr")}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${tab === "hr" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
                        >
                            Attendance & Payroll
                        </button>
                        <button
                            onClick={() => setTab("expense")}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${tab === "expense" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
                        >
                            Expense Manager
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-8">
                {tab === "hr" ? <HrPayroll /> : <ExpenseManager />}
            </div>

            <Footer />
        </div>
    );
}

/* ============================================================================
   HR / PAYROLL TAB
   ============================================================================ */
function HrPayroll() {
    const navigate = useNavigate();
    //   const [employees] = useState(seedEmployees);
    const [printTarget, setPrintTarget] = useState(null); // 'all' | employeeId | null
    const currentMonth = todayStr();
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    const {
        employees,
        pagination,
        loading,
        error
    } = useSelector((state) => state.attendance);

    useEffect(() => {
        dispatch(
            getEmployees({
                page,
                limit: 20,
                search
            })
        );
    }, [dispatch, page, search]);

    useEffect(() => {

        dispatch(getAllTransaction());
    }, [dispatch]);
    // getEmployees

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };


    // TODO: replace with GET /api/attendance/summary?month=YYYY-MM
    // Shape: { [employeeId]: { present, absentPaid, absentUnpaid } }
    const [attendanceSummary] = useState({});

    useEffect(() => {
        const handler = () => setPrintTarget(null);
        window.addEventListener("afterprint", handler);
        return () => window.removeEventListener("afterprint", handler);
    }, []);

    function summaryFor(empId) {
        return attendanceSummary[empId] || { present: 0, absentPaid: 0, absentUnpaid: 0 };
    }

    function calcNetPayable(emp) {
        const { absentUnpaid } = summaryFor(emp.id);
        const dim = daysInMonth(currentMonth);
        const perDayRate = (emp.monthlyCtc || 0) / dim;
        const deduction = absentUnpaid * perDayRate;
        const net = (emp.monthlyCtc || 0) - deduction - (emp.deductions || 0) + (emp.variablePay || 0);
        return { net: Math.max(0, net), deduction, unpaidDays: absentUnpaid, perDayRate };
    }

    const totals = useMemo(() => {
        let totalCtc = 0, totalPayable = 0;
        employees.forEach((e) => {
            // console.log(e.monthlyCtc )
            totalCtc += Number(e.monthlyCtc || 0);
            totalPayable += calcNetPayable(e).net;
        });
        return { totalCtc, totalPayable };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [employees, attendanceSummary]);

    function triggerPrint(target) {
        setPrintTarget(target);
        setTimeout(() => window.print(), 80);
    }

    function goToAttendance(emp) {
        navigate(`/attendance/${emp.id}`, {
            state: {
                name: emp.name,
                role: emp.role,
                monthlyCtc: emp.monthlyCtc,
                variablePay: emp.monthlyVariablePay,
                deductions: emp.monthlyDeductions,
            },
        });
    }
    const handleLogout = async () => {
        try {
            // logoutUser
            // logoutUser
            await dispatch(logoutUser()).unwrap();
            toast.success("Logged out successfully");
            navigate("/sign-in", { replace: true });
        } catch (error) {
            toast.error(error || "Failed to logout");
        }
    };
    return (
        <div>
            {/* Summary cards */}
            <div className="no-print grid grid-cols-3 gap-4 mb-6">
                <SummaryCard icon={<Users size={16} />} label="Employees" value={employees.length} />
                <SummaryCard icon={<Wallet size={16} />} label="Total Monthly CTC" value={money(totals.totalCtc)} />
                <SummaryCard icon={<TrendingUp size={16} />} label="Est. Payable This Month" value={money(totals.totalPayable)} accent="indigo" />
            </div>

            <div className="no-print flex items-center justify-between mb-3">
                <h2 className="font-semibold text-slate-800">Employees</h2>
                <button
                    onClick={() => triggerPrint("all")}
                    className="flex items-center gap-1.5 text-sm font-medium bg-slate-900 text-white px-3 py-1.5 rounded-md hover:bg-slate-700 transition"
                >
                    <FileDown size={14} /> Generate Payroll PDF (All)
                </button>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-5 py-1 my-2 rounded-lg hover:bg-red-900"
                >
                    Logout
                </button>
            </div>

            <div className="no-print bg-white border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                            <th className="text-left px-4 py-3 font-medium">Employee</th>
                            <th className="text-center px-4 py-3 font-medium">Present</th>
                            <th className="text-center px-4 py-3 font-medium">Absent (Paid/Unpaid)</th>
                            <th className="text-right px-4 py-3 font-medium">Monthly CTC</th>
                            <th className="text-right px-4 py-3 font-medium">Net Payable</th>
                            <th className="px-4 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees?.map((emp) => {
                            const s = summaryFor(emp.id);
                            const { net } = calcNetPayable(emp);
                            return (
                                <tr key={emp.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                                    <td className="px-4 py-3">
                                        <div className="font-medium text-slate-800">{emp?.user.name}</div>
                                        <div className="text-xs text-slate-400">{emp?.role}</div>
                                    </td>
                                    <td className="px-4 py-3 text-center tabular text-slate-700">{s.present}</td>
                                    <td className="px-4 py-3 text-center tabular text-rose-600">{s.absentPaid}/{s.absentUnpaid}</td>
                                    <td className="px-4 py-3 text-right tabular text-slate-700">{money(emp.monthlyCtc)}</td>
                                    <td className="px-4 py-3 text-right tabular font-semibold text-slate-900">{money(net)}</td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => goToAttendance(emp)}
                                                className="text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-100"
                                            >
                                                Mark
                                            </button>
                                            <button
                                                onClick={() => triggerPrint(emp.id)}
                                                className="text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-100 flex items-center gap-1"
                                            >
                                                <Printer size={12} /> Payslip
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Printable report(s) - hidden on screen, shown only in print via CSS */}
            <div className="print-section">
                {printTarget === "all" && (
                    <PayrollReport employees={employees} calcNetPayable={calcNetPayable} summaryFor={summaryFor} totals={totals} month={currentMonth} />
                )}
                {printTarget && printTarget !== "all" && (
                    <Payslip employee={employees.find((e) => e.id === printTarget)} calcNetPayable={calcNetPayable} summaryFor={summaryFor} month={currentMonth} />
                )}
            </div>
        </div>
    );
}




function SummaryCard({ icon, label, value, accent }) {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className={`flex items-center gap-1.5 text-xs mb-2 ${accent === "indigo" ? "text-indigo-600" : "text-slate-400"}`}>
                {icon} {label}
            </div>
            <div className="text-xl font-semibold tabular text-slate-900">{value}</div>
        </div>
    );
}

function PayrollReport({ employees, calcNetPayable, summaryFor, totals, month }) {
    return (
        <div className="p-8 text-sm text-slate-900">
            <h1 className="text-lg font-bold mb-1">Payroll Report — {month.slice(0, 7)}</h1>
            <p className="text-slate-500 mb-4">Generated {new Date().toLocaleString()}</p>
            <table className="w-full border-collapse text-xs">
                <thead>
                    <tr className="border-b-2 border-slate-800">
                        <th className="text-left py-2">Employee</th>
                        <th className="text-left py-2">Role</th>
                        <th className="text-center py-2">Present</th>
                        <th className="text-center py-2">Absent P/U</th>
                        <th className="text-right py-2">Monthly CTC</th>
                        <th className="text-right py-2">Net Payable</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((e) => {
                        const s = summaryFor(e.id);
                        const { net } = calcNetPayable(e);
                        return (
                            <tr key={e.id} className="border-b border-slate-200">
                                <td className="py-2">{e.name}</td>
                                <td className="py-2">{e.role}</td>
                                <td className="py-2 text-center">{s.present}</td>
                                <td className="py-2 text-center">{s.absentPaid}/{s.absentUnpaid}</td>
                                <td className="py-2 text-right">{money(e.monthlyCtc)}</td>
                                <td className="py-2 text-right font-semibold">{money(net)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="mt-4 flex justify-end gap-8 font-semibold">
                <div>Total CTC: {money(totals.totalCtc)}</div>
                <div>Total Payable: {money(totals.totalPayable)}</div>
            </div>
        </div>
    );
}

function Payslip({ employee, calcNetPayable, summaryFor, month }) {
    if (!employee) return null;
    const s = summaryFor(employee.id);
    const { net, deduction, unpaidDays, perDayRate } = calcNetPayable(employee);
    return (
        <div className="p-8 text-sm text-slate-900 max-w-lg">
            <h1 className="text-lg font-bold mb-1">Payslip — {month.slice(0, 7)}</h1>
            <p className="text-slate-500 mb-4">{employee.name} · {employee.role}</p>
            <table className="w-full text-xs">
                <tbody>
                    <Row label="Yearly CTC" val={money(employee.yearlyCtc)} />
                    <Row label="Monthly CTC" val={money(employee.monthlyCtc)} />
                    <Row label="Variable Pay" val={money(employee.variablePay)} />
                    <Row label="Standard Deductions" val={money(employee.deductions)} />
                    <Row label="Per-day rate" val={money(perDayRate)} />
                    <Row label="Unpaid days" val={unpaidDays} />
                    <Row label="Attendance deduction" val={money(deduction)} />
                    <Row label="Present days" val={s.present} />
                    <Row label="Paid absence days" val={s.absentPaid} />
                </tbody>
            </table>
            <div className="mt-4 pt-3 border-t-2 border-slate-800 flex justify-between font-bold text-base">
                <span>Net Payable</span><span>{money(net)}</span>
            </div>
        </div>
    );
}
function Row({ label, val }) {
    return (
        <tr className="border-b border-slate-100">
            <td className="py-1.5 text-slate-500">{label}</td>
            <td className="py-1.5 text-right tabular">{val}</td>
        </tr>
    );
}

/* ============================================================================
   EXPENSE MANAGER TAB
   ============================================================================ */
// function ExpenseManager() {
//     const dispatch=useDispatch()
//     const [transactions, setTransactions] = useState(seedTransactions);
//     const [showForm, setShowForm] = useState(false);
//     const today = todayStr();

//     const stats = useMemo(() => {
//         let todayIn = 0, todayOut = 0, monthIn = 0, monthOut = 0;
//         transactions.forEach((t) => {
//             const amt = Number(t.amount) || 0;
//             if (t.date === today) t.type === "inflow" ? (todayIn += amt) : (todayOut += amt);
//             if (sameMonth(t.date, today)) t.type === "inflow" ? (monthIn += amt) : (monthOut += amt);
//         });
//         return { todayIn, todayOut, monthIn, monthOut };
//     }, [transactions, today]);

//     function addTransaction(tx) {
//         setTransactions((prev) => [{ id: "t" + Date.now(), ...tx }, ...prev]);
//         setShowForm(false);
//     }

//     const sorted = [...transactions].sort((a, b) => (a.date < b.date ? 1 : -1));

// useEffect(()=>{

// await dispatch(getAllTransaction())

// },[])

//     return (
//         <div>
//             <div className="grid grid-cols-4 gap-4 mb-6">
//                 <StatCard icon={<ArrowDownRight size={16} />} label="Today's Inflow" value={money(stats.todayIn)} color="emerald" />
//                 <StatCard icon={<ArrowUpRight size={16} />} label="Today's Outflow" value={money(stats.todayOut)} color="rose" />
//                 <StatCard icon={<ArrowDownRight size={16} />} label="Month Inflow" value={money(stats.monthIn)} color="emerald" />
//                 <StatCard icon={<ArrowUpRight size={16} />} label="Month Outflow" value={money(stats.monthOut)} color="rose" />
//             </div>

//             <div className="flex items-center justify-between mb-3">
//                 <h2 className="font-semibold text-slate-800">Transactions</h2>
//                 <button
//                     onClick={() => setShowForm(true)}
//                     className="flex items-center gap-1.5 text-sm font-medium bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700"
//                 >
//                     <Plus size={14} /> Add Transaction
//                 </button>
//             </div>

//             {showForm && <TransactionForm onCancel={() => setShowForm(false)} onSave={addTransaction} />}

//             <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
//                 <table className="w-full text-sm">
//                     <thead>
//                         <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
//                             <th className="text-left px-4 py-3 font-medium">Date</th>
//                             <th className="text-left px-4 py-3 font-medium">Type</th>
//                             <th className="text-left px-4 py-3 font-medium">From</th>
//                             <th className="text-left px-4 py-3 font-medium">Who</th>
//                             <th className="text-left px-4 py-3 font-medium">For What</th>
//                             <th className="text-right px-4 py-3 font-medium">Amount</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {sorted.map((t) => (
//                             <tr key={t.id} className="border-t border-slate-100 hover:bg-slate-50/60">
//                                 <td className="px-4 py-3 text-slate-500 tabular">{t.date}</td>
//                                 <td className="px-4 py-3">
//                                     <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${t.type === "inflow" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
//                                         }`}>
//                                         {t.type === "inflow" ? <ArrowDownRight size={10} /> : <ArrowUpRight size={10} />}
//                                         {t.type === "inflow" ? "Inflow" : "Outflow"}
//                                     </span>
//                                 </td>
//                                 <td className="px-4 py-3 text-slate-700">{t.from}</td>
//                                 <td className="px-4 py-3 text-slate-700">{t.who}</td>
//                                 <td className="px-4 py-3 text-slate-500">{t.forWhat}</td>
//                                 <td className={`px-4 py-3 text-right tabular font-medium ${t.type === "inflow" ? "text-emerald-700" : "text-rose-700"}`}>
//                                     {t.type === "inflow" ? "+" : "-"}{money(t.amount)}
//                                 </td>
//                             </tr>
//                         ))}
//                         {sorted.length === 0 && (
//                             <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-400">No transactions yet.</td></tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

function ExpenseManager() {
    const dispatch = useDispatch();

    const { transactions, loading } = useSelector((state) => state.expanse);

    const [showForm, setShowForm] = useState(false);

    const today = todayStr();

    useEffect(() => {
        dispatch(getAllTransaction());
    }, []);
    console.log(transactions, "op")

    const stats = useMemo(() => {

        let todayIn = 0;
        let todayOut = 0;
        let monthIn = 0;
        let monthOut = 0;

        transactions?.forEach((t) => {

            const amount = Number(t.amount) || 0;

            if (t.date?.slice(0, 10) === today) {

                if (t.type === "inflow") {
                    todayIn += amount;
                } else {
                    todayOut += amount;
                }

            }


            if (sameMonth(t.date?.slice(0, 10), today)) {

                if (t.type === "inflow") {
                    monthIn += amount;
                } else {
                    monthOut += amount;
                }

            }

        });


        return {
            todayIn,
            todayOut,
            monthIn,
            monthOut
        };


    }, [transactions, today]);



    const sorted = [...(transactions || [])].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );



    return (
        <div>

            <div className="grid grid-cols-4 gap-4 mb-6">

                <StatCard
                    icon={<ArrowDownRight size={16} />}
                    label="Today's Inflow"
                    value={money(stats.todayIn)}
                    color="emerald"
                />


                <StatCard
                    icon={<ArrowUpRight size={16} />}
                    label="Today's Outflow"
                    value={money(stats.todayOut)}
                    color="rose"
                />


                <StatCard
                    icon={<ArrowDownRight size={16} />}
                    label="Month Inflow"
                    value={money(stats.monthIn)}
                    color="emerald"
                />


                <StatCard
                    icon={<ArrowUpRight size={16} />}
                    label="Month Outflow"
                    value={money(stats.monthOut)}
                    color="rose"
                />

            </div>



            <div className="flex items-center justify-between mb-3">

                <h2 className="font-semibold text-slate-800">
                    Transactions
                </h2>


                <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center gap-1.5 text-sm font-medium bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700"
                >

                    <Plus size={14} />
                    Add Transaction

                </button>


            </div>



            {
                showForm &&
                <TransactionForm
                    onCancel={() => setShowForm(false)}
                    onSuccess={() => {
                        setShowForm(false);
                        dispatch(getAllTransaction());
                    }}
                />
            }




            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">


                {
                    loading ? (

                        <div className="p-5 text-center">
                            Loading...
                        </div>

                    ) : (


                        <table className="w-full text-sm">

                            <thead>

                                <tr className="bg-slate-50 text-slate-500 text-xs uppercase">

                                    <th className="text-left px-4 py-3">
                                        Date
                                    </th>

                                    <th className="text-left px-4 py-3">
                                        Type
                                    </th>

                                    <th className="text-left px-4 py-3">
                                        From
                                    </th>


                                    <th className="text-left px-4 py-3">
                                        Who
                                    </th>


                                    <th className="text-left px-4 py-3">
                                        For What
                                    </th>


                                    <th className="text-right px-4 py-3">
                                        Amount
                                    </th>


                                </tr>

                            </thead>



                            <tbody>


                                {
                                    sorted.map((t) => (

                                        <tr
                                            key={t.id}
                                            className="border-t border-slate-100"
                                        >


                                            <td className="px-4 py-3 text-slate-500">
                                                {t.date?.slice(0, 10)}
                                            </td>



                                            <td className="px-4 py-3">


                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs ${t.type === "inflow"
                                                            ? "bg-emerald-50 text-emerald-700"
                                                            : "bg-rose-50 text-rose-700"
                                                        }`}
                                                >

                                                    {
                                                        t.type === "inflow"
                                                            ? "Inflow"
                                                            : "Outflow"
                                                    }

                                                </span>


                                            </td>



                                            <td className="px-4 py-3">
                                                {t.from}
                                            </td>



                                            <td className="px-4 py-3">
                                                {t.who}
                                            </td>



                                            <td className="px-4 py-3">
                                                {t.forWhat}
                                            </td>



                                            <td
                                                className={`px-4 py-3 text-right font-medium ${t.type === "inflow"
                                                        ? "text-emerald-700"
                                                        : "text-rose-700"
                                                    }`}
                                            >

                                                {t.type === "inflow" ? "+" : "-"}
                                                {money(t.amount)}

                                            </td>


                                        </tr>


                                    ))
                                }



                            </tbody>


                        </table>


                    )
                }


            </div>


        </div>
    );
}

function StatCard({ icon, label, value, color }) {
    const colorMap = {
        emerald: "text-emerald-600 bg-emerald-50",
        rose: "text-rose-600 bg-rose-50",
    };
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className={`inline-flex items-center gap-1.5 text-xs mb-2 px-2 py-0.5 rounded-full ${colorMap[color]}`}>
                {icon} {label}
            </div>
            <div className="text-xl font-semibold tabular text-slate-900">{value}</div>
        </div>
    );
}

// function TransactionForm({ onCancel, onSave }) {
//     const dispatch=useDispatch()
//     const [type, setType] = useState("outflow");
//     const [from, setFrom] = useState("");
//     const [who, setWho] = useState("");
//     const [forWhat, setForWhat] = useState("");
//     const [amount, setAmount] = useState("");
//     const [date, setDate] = useState(todayStr());

//     function submit() {
//         if (!from || !who || !forWhat || !amount) return;
//         onSave({ type, from, who, forWhat, amount: Number(amount), date });
//     }

//     const handleCreateTransaction=async()=>{
//         try {
//             const res= await dispatch(createTransaction())
//             toast.s
//         } catch (error) {

//         }
//     }
//     return (
//         <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">
//             <div className="grid grid-cols-2 gap-3 mb-3">
//                 <div className="col-span-2 flex gap-2">
//                     {["inflow", "outflow"].map((t) => (
//                         <button
//                             key={t}
//                             onClick={() => setType(t)}
//                             className={`flex-1 py-1.5 rounded-md text-sm font-medium capitalize border ${type === t
//                                     ? t === "inflow" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"
//                                     : "border-slate-200 text-slate-500"
//                                 }`}
//                         >
//                             {t}
//                         </button>
//                     ))}
//                 </div>
//                 <Field label="From (source / account)" value={from} onChange={setFrom} placeholder="e.g. Client - Nimbus Corp" />
//                 <Field label="Who (handled by)" value={who} onChange={setWho} placeholder="e.g. Priya Nair" />
//                 <Field label="For what" value={forWhat} onChange={setForWhat} placeholder="e.g. Office rent - July" />
//                 <Field label="Amount (₹)" value={amount} onChange={setAmount} type="number" placeholder="0" />
//                 <div>
//                     <label className="text-xs font-medium text-slate-500">Date</label>
//                     <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 w-full border border-slate-200 rounded-md px-2 py-1.5 text-sm" />
//                 </div>
//             </div>
//             <div className="flex gap-2 justify-end">
//                 <button onClick={onCancel} className="px-3 py-1.5 text-sm rounded-md border border-slate-200 text-slate-500">Cancel</button>
//                 <button onClick={submit} className="px-3 py-1.5 text-sm rounded-md bg-indigo-600 text-white font-medium">Save</button>
//             </div>
//         </div>
//     );
// }

function TransactionForm({ onCancel, onSuccess }) {

    const dispatch = useDispatch();

    const [type, setType] = useState("outflow");
    const [from, setFrom] = useState("");
    const [who, setWho] = useState("");
    const [forWhat, setForWhat] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(todayStr());


    const handleSubmit = async () => {

        if (!from || !who || !forWhat || !amount || !date) {
            toast.error("All fields are required");
            return;
        }


        const payload = {
            type,
            from,
            who,
            forWhat,
            amount: Number(amount),
            date
        };


        try {

            const result = await dispatch(
                createTransaction(payload)
            );


            if (result.meta.requestStatus === "fulfilled") {

                toast.success(
                    "Transaction created successfully"
                );

                onSuccess();

            } else {

                toast.error(
                    result.payload || "Something went wrong"
                );

            }


        } catch (error) {

            toast.error(
                error.message
            );

        }

    };



    return (

        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">


            <div className="grid grid-cols-2 gap-3 mb-3">


                <div className="col-span-2 flex gap-2">


                    {
                        ["inflow", "outflow"].map((item) => (

                            <button

                                key={item}

                                onClick={() => setType(item)}

                                className={`flex-1 py-2 rounded-md text-sm font-medium border capitalize ${type === item
                                        ? item === "inflow"
                                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                            : "bg-rose-50 text-rose-700 border-rose-200"
                                        : "border-slate-200 text-slate-500"
                                    }`}

                            >

                                {item}

                            </button>

                        ))
                    }


                </div>




                <Field
                    label="From"
                    value={from}
                    onChange={setFrom}
                    placeholder="Source / Account"
                />


                <Field
                    label="Who"
                    value={who}
                    onChange={setWho}
                    placeholder="Handled by"
                />



                <Field
                    label="For What"
                    value={forWhat}
                    onChange={setForWhat}
                    placeholder="Purpose"
                />



                <Field
                    label="Amount"
                    value={amount}
                    onChange={setAmount}
                    type="number"
                    placeholder="Amount"
                />



                <div>

                    <label className="text-xs font-medium text-slate-500">
                        Date
                    </label>


                    <input

                        type="date"

                        value={date}

                        onChange={(e) => setDate(e.target.value)}

                        className="mt-1 w-full border border-slate-200 rounded-md px-2 py-1.5 text-sm"

                    />


                </div>


            </div>




            <div className="flex justify-end gap-2">


                <button

                    onClick={onCancel}

                    className="px-3 py-1.5 text-sm border rounded-md text-slate-500"

                >

                    Cancel

                </button>



                <button

                    onClick={handleSubmit}

                    className="px-3 py-1.5 text-sm rounded-md bg-indigo-600 text-white"

                >

                    Save

                </button>


            </div>


        </div>

    );

}


function Field({ label, value, onChange, placeholder, type = "text" }) {
    return (
        <div>
            <label className="text-xs font-medium text-slate-500">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="mt-1 w-full border border-slate-200 rounded-md px-2 py-1.5 text-sm"
            />
        </div>
    );
}