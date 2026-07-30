import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Check,
  X
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { calculateSalary, createAttendance, getAttendanceHistory } from "../../reduxStore/slice/hr/attendanceSlice";




const LEAVE_REASONS = [
  "Sick",
  "Fever",
  "Personal",
  "Family Emergency",
  "Sunday",
  "Holiday",
  "Other"
];


const STATUS_STYLES = {
  present: {
    label: "Present",
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
    ring: "ring-emerald-200"
  },

  absent: {
    label: "Absent",
    dot: "bg-rose-500",
    text: "text-rose-700",
    bg: "bg-rose-50",
    ring: "ring-rose-200"
  }
};


function pad(number) {
  return number < 10 ? `0${number}` : number;
}


function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}


function money(value) {
  return `₹${Number(value || 0).toLocaleString("en-IN", {
    maximumFractionDigits: 0
  })}`;
}


function EmployeeAttendance() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const location = useLocation();

  console.log(id)
  const {
    name,
    role,
    monthlyCtc,
    variablePay,
    deductions
  } = location.state || {};



  const {
    attendanceLoading,
    salaryLoading,
    salary,
    attendanceHistory
  } = useSelector(
    state => state.attendance
  );



  const employee = {
    id,
    name: name || "Employee",
    role: role || "-",
    monthlyCtc: Number(monthlyCtc) || 0,
    variablePay: Number(variablePay) || 0,
    deductions: Number(deductions) || 0
  };



  const today = new Date();

  const currentYear = today.getFullYear();

  const currentMonth = today.getMonth();



  const [monthOffset, setMonthOffset] = useState(0);

  const [attendance, setAttendance] = useState({});

  const [selectedDay, setSelectedDay] = useState(null);



  const viewedDate = new Date(
    currentYear,
    currentMonth + monthOffset,
    1
  );


  const viewedYear = viewedDate.getFullYear();

  const viewedMonth = viewedDate.getMonth();



  const monthLabel = viewedDate.toLocaleString(
    "default",
    {
      month: "long",
      year: "numeric"
    }
  );



  const totalDays = daysInMonth(
    viewedYear,
    viewedMonth
  );


  const firstDay = new Date(
    viewedYear,
    viewedMonth,
    1
  ).getDay();



  const isCurrentMonth = monthOffset === 0;



  function dateKey(year, month, day) {

    return `${year}-${pad(month + 1)}-${pad(day)}`;

  }



  const handleCreateAttendance = async (
    status,
    reason,
    type
  ) => {

    try {

      const payload = {
        employeeId: Number(employee.id),
        date: dateKey(
          currentYear,
          currentMonth,
          today.getDate()
        ),
        status,
        leaveReason: reason,
        leaveType: type
      };


      const result = await dispatch(
        createAttendance(payload)
      ).unwrap();

      // createAttendance
      setAttendance(prev => ({
        ...prev,
        [payload.date]: {
          status,
          leaveReason: reason,
          leaveType: type
        }
      }));


      toast.success(
        "Attendance marked successfully"
      );


      setSelectedDay(null);


    } catch (error) {

      toast.error(
        error || "Failed to mark attendance"
      );

    }

  };



  const handleCalculateSalary = async () => {

    try {

      await dispatch(
        calculateSalary(employee.id)
      ).unwrap();

      // calculateSalary
      toast.success(
        "Salary calculated"
      );


    } catch (error) {

      toast.error(
        error || "Salary calculation failed"
      );

    }

  };



  const currentMonthStats = useMemo(() => {

    let present = attendanceHistory?.summary?.present || 0;
    let paidAbsent = attendanceHistory?.summary?.paid || 0;
    let unpaidAbsent = attendanceHistory?.summary?.unpaid || 0;


    Object.entries(attendance).forEach(
      ([key, value]) => {

        if (
          !key.startsWith(
            `${currentYear}-${pad(currentMonth + 1)}`
          )
        ) {
          return;
        }


        if (value.status === "present") {
          present++;
        }


        if (value.status === "absent") {

          if (value.leaveType === "paid") {
            paidAbsent++;
          } else {
            unpaidAbsent++;
          }

        }

      }
    );


    return {
      present,
      paidAbsent,
      unpaidAbsent
    };


  }, [
    attendance,
    currentYear,
    currentMonth
  ]);



  const currentDays = daysInMonth(
    currentYear,
    currentMonth
  );


  const perDayRate = employee.monthlyCtc / currentDays;

  const deductionAmount = currentMonthStats.unpaidAbsent * perDayRate;

  const netSalaryAfter = Math.max(
    0,
    perDayRate * (currentMonthStats.present + currentMonthStats.paidAbsent) +
    employee.variablePay -
    deductionAmount -
    (employee.deductions || 0)
  );
  // console.log(netSalary,"lkl")
  const calendarDays = [];


  for (
    let i = 0;
    i < firstDay;
    i++
  ) {

    calendarDays.push(null);

  }


  for (
    let day = 1;
    day <= totalDays;
    day++
  ) {

    calendarDays.push(day);

  }

  useEffect(() => {
    if (id) {
      dispatch(getAttendanceHistory(id));
      dispatch(calculateSalary(id));
    }
  }, [id, dispatch]);

  console.log(attendanceHistory, "pp")
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 px-6 py-8">
        <div className="max-w-3xl mx-auto">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-sm text-slate-500 mb-4 hover:text-slate-700"
          >
            <ArrowLeft size={14} />
            Back
          </button>


          <div className="flex justify-between items-center mb-6">

            <div>
              <h1 className="text-lg font-semibold text-slate-900">
                {employee.name}
              </h1>

              <p className="text-sm text-slate-400">
                {employee.role}
              </p>
            </div>


            <button
              onClick={handleCalculateSalary}
              disabled={salaryLoading}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm disabled:opacity-50"
            >
              {salaryLoading ? "Calculating..." : "Calculate Salary"}
            </button>

          </div>



          <div className="flex items-center justify-between mb-4">

            <button
              onClick={() => setMonthOffset(prev => prev - 1)}
              className="flex items-center gap-1 border px-3 py-1.5 rounded-md text-sm"
            >
              <ChevronLeft size={14} />
              Previous
            </button>


            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <CalendarIcon size={14} />
              {monthLabel}
            </div>


            <button
              disabled={isCurrentMonth}
              onClick={() =>
                setMonthOffset(prev =>
                  Math.min(0, prev + 1)
                )
              }
              className={`flex items-center gap-1 border px-3 py-1.5 rounded-md text-sm ${isCurrentMonth
                ? "opacity-40 cursor-not-allowed"
                : ""
                }`}
            >
              Next
              <ChevronRight size={14} />
            </button>

          </div>



          <div className="bg-white border rounded-xl p-4 mb-6">

            <div className="grid grid-cols-7 gap-2 mb-2 text-xs text-slate-400 text-center">

              {
                [
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat"
                ].map(day => (
                  <div key={day}>
                    {day}
                  </div>
                ))
              }

            </div>


            <div className="grid grid-cols-7 gap-2">

              {
                calendarDays.map((day, index) => {

                  if (!day) {
                    return <div key={index} />
                  }


                  const key = dateKey(
                    viewedYear,
                    viewedMonth,
                    day
                  );


                  const record = attendance[key];

                  const style =
                    record
                      ? STATUS_STYLES[record.status]
                      : null;


                  const isToday =
                    isCurrentMonth &&
                    day === today.getDate();



                  return (

                    <button
                      key={index}
                      disabled={!isToday}
                      onClick={() =>
                        isToday &&
                        setSelectedDay(day)
                      }
                      className={`aspect-square rounded-lg border flex flex-col items-center justify-center text-sm gap-1

                      ${style
                          ? `${style.bg} ${style.text}`
                          : "border-slate-200"
                        }

                      ${isToday
                          ? "ring-2 ring-indigo-300"
                          : "opacity-70"
                        }
                      `}
                    >

                      <span>
                        {day}
                      </span>


                      {
                        style &&
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                        />
                      }


                    </button>

                  );

                })
              }

            </div>

          </div>



          {
            selectedDay &&
            <DayEditor
              day={selectedDay}
              monthLabel={monthLabel}
              loading={attendanceLoading}
              onCancel={() =>
                setSelectedDay(null)
              }
              onSave={
                (
                  status,
                  reason,
                  type
                ) =>
                  handleCreateAttendance(
                    status,
                    reason,
                    type
                  )
              }
            />
          }



          <div className="grid grid-cols-3 gap-3 mb-6">

            <MiniStat
              label="Present"
              value={currentMonthStats.present}
              tone="emerald"
            />


            <MiniStat
              label="Paid Absence"
              value={currentMonthStats.paidAbsent}
              tone="amber"
            />


            <MiniStat
              label="Unpaid Absence"
              value={currentMonthStats.unpaidAbsent}
              tone="rose"
            />

          </div>




          <div className="bg-white border rounded-xl p-5">

            <h2 className="font-semibold text-slate-800 mb-4">
              Net Payable
            </h2>


            <div className="space-y-3 text-sm">


              <SalaryRow
                label="Monthly CTC"
                value={money(employee.monthlyCtc)}
              />


              <SalaryRow
                label="Variable Pay"
                value={money(employee.variablePay)}
              />


              <SalaryRow
                label="Attendance Deduction"
                value={`- ${money(deductionAmount)}`}
                negative
              />


              <SalaryRow
                label="Other Deduction"
                value={` ${money(Number(employee.monthlyCtc || 0)+Number(employee.variablePay || 0) - Number(netSalaryAfter || 0))}`}
                negative
              />


            </div>


            <div className="border-t-2 mt-4 pt-3 flex justify-between font-bold text-lg">

              <span>
                Net Salary
              </span>


              <span>{money(netSalaryAfter)}</span>


            </div>


          </div>


        </div>

      </div>


      <Footer />

    </>
  );

}



function MiniStat({
  label,
  value,
  tone
}) {

  const colors = {

    emerald:
      "bg-emerald-50 text-emerald-700",

    amber:
      "bg-amber-50 text-amber-700",

    rose:
      "bg-rose-50 text-rose-700"

  };


  return (

    <div className="bg-white border rounded-xl p-3 text-center">

      <div
        className={`inline-block px-2 py-1 rounded text-xs ${colors[tone]}`}
      >
        {label}
      </div>


      <div className="text-lg font-semibold mt-1">
        {value}
      </div>

    </div>

  );

}



function SalaryRow({
  label,
  value,
  negative
}) {

  return (

    <div className="flex justify-between">

      <span className="text-slate-500">
        {label}
      </span>


      <span
        className={
          negative
            ? "text-rose-600 font-medium"
            : "font-medium"
        }
      >
        {value}
      </span>


    </div>

  );

}




function DayEditor({
  day,
  monthLabel,
  loading,
  onCancel,
  onSave
}) {


  const [status, setStatus] =
    useState("present");


  const [reason, setReason] =
    useState("Sick");


  const [leaveType, setLeaveType] =
    useState("unpaid");



  return (

    <div className="bg-white border rounded-xl p-5 mb-6">


      <div className="flex justify-between mb-4">

        <h3 className="font-semibold">
          {day} {monthLabel}
        </h3>


        <button
          onClick={onCancel}
        >
          <X size={16} />
        </button>

      </div>



      <div className="grid grid-cols-2 gap-3 mb-4">


        {
          [
            "present",
            "absent"
          ].map(item => (


            <button
              key={item}
              onClick={() =>
                setStatus(item)
              }
              className={`border rounded-md py-2 capitalize ${status === item
                ? "bg-indigo-600 text-white"
                : ""
                }`}
            >
              {item}
            </button>


          ))
        }


      </div>



      {
        status === "absent" && (

          <div className="space-y-3 mb-4">


            <select
              value={reason}
              onChange={e =>
                setReason(e.target.value)
              }
              className="border w-full rounded-md p-2"
            >

              {
                LEAVE_REASONS.map(item => (
                  <option key={item}>
                    {item}
                  </option>
                ))
              }

            </select>


            <div className="flex gap-2">

              {
                [
                  "paid",
                  "unpaid"
                ].map(item => (

                  <button
                    key={item}
                    onClick={() =>
                      setLeaveType(item)
                    }
                    className={`flex-1 border rounded-md py-2 ${leaveType === item
                      ? "bg-black text-white"
                      : ""
                      }`}
                  >
                    {item}
                  </button>

                ))
              }

            </div>


          </div>

        )
      }



      <button
        disabled={loading}
        onClick={() =>
          onSave(
            status,
            status === "absent"
              ? reason
              : null,
            status === "absent"
              ? leaveType
              : null
          )
        }
        className="w-full bg-indigo-600 text-white py-2 rounded-md flex justify-center gap-2"
      >

        <Check size={15} />

        {
          loading
            ? "Saving..."
            : "Save Attendance"
        }

      </button>


    </div>

  );

}


export default EmployeeAttendance;