import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/layout/dashboard/Sidebar'
import Header from '../../components/layout/dashboard/Header'

import {
  Users,
  Hospital,
  Wallet,
  TrendingUp,
  Download,
  BadgeCheck,
  Crown,
  IndianRupee
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { verifiedUser } from '../../reduxStore/slice/userSlice'
import { getMemberPlans } from '../../reduxStore/slice/memberplanSlice'

import { Copy } from "lucide-react";
import { toast } from "react-toastify";
import { getAllPurchasePlanByemployeeId } from '../../reduxStore/slice/premiumPurchaseSlice'

function Dashboard() {
  const dispatch = useDispatch()
  const { loginUserData } = useSelector((state) => state?.user)

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [searchPlan, setSearchPlan] = useState("");
  // useEffect
  // console.log(loginUserData, "n")


  const { plans, loading } = useSelector(
    (state) => state.memberPlan
  );


  const { purchaseEmployee } = useSelector(
    (state) => state.memberPurchase
  );
  useEffect(() => {
    dispatch(
      getMemberPlans({
        page: 1,
        limit: 20,
        searchPlan
      })
    );
  }, [dispatch, searchPlan]);
  const employee = loginUserData?.user?.employee;
  useEffect(() => {
    if (employee?.employeeId) {
      dispatch(getAllPurchasePlanByemployeeId(employee.employeeId));
    }
  }, [dispatch, employee?.employeeId]);

  // useSelector
 

  const coordinators = [
    {
      block: "Haveli",
      name: "Suresh Joshi",
      members: "16,420",
      hospitals: 112,
      savings: "₹80 L",
      status: "On Track"
    },
    {
      block: "Mushi",
      name: "Ananya Kale",
      members: "10,380",
      hospitals: 68,
      savings: "₹54 L",
      status: "On Track"
    },
    {
      block: "Maval",
      name: "Vikram Shinde",
      members: "8,720",
      hospitals: 52,
      savings: "₹42 L",
      status: "Behind"
    },
    {
      block: "Bhor",
      name: "Pooja Desai",
      members: "6,840",
      hospitals: 42,
      savings: "₹31 L",
      status: "On Track"
    }
  ]
  // const employee = loginUserData?.user?.employee;

  const handleCopyLink = () => {
    if (!selectedPlan) return;

    const employeeId = loginUserData?.employee?.employeeId
      ;

    if (!employeeId) {
      toast.error("Employee id not found");
      return;
    }

    const link = `${window.location.origin}/premium-purchase/${selectedPlan.id}?ref=${employeeId}`;

    navigator.clipboard.writeText(link);

    toast.success("Referral link copied");
  };

  const purchases = purchaseEmployee || [];

  // Stats calculation
  const stats = [
    {
      title: "Total Members",
      value: purchases.length,
      growth: "All time",
      icon: <Users size={25} />,
    },
    {
      title: "Active Membership",
      value: purchases.filter(
        (item) => item.status === "ACTIVE"
      ).length,
      growth: "Currently active",
      icon: <BadgeCheck size={25} />,
    },
    {
      title: "Total Revenue",
      value: `₹${purchases.reduce(
        (sum, item) => sum + Number(item.amountPaid),
        0
      )}`,
      growth: "Generated",
      icon: <IndianRupee size={25} />,
    },
    {
      title: "Plans Sold",
      value: new Set(
        purchases.map((item) => item.membershipId)
      ).size,
      growth: "Different plans",
      icon: <Crown size={25} />,
    },
  ];
  console.log(purchaseEmployee)
  return (
    <div className="flex bg-[#f4f7fb] min-h-screen">

      <Sidebar />

      <div className="flex-1 ml-[280px]">

        <Header />

        <div className="p-6">

          {/* Welcome */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">

            <h1 className="text-3xl font-bold text-black">
              Good Morning, {loginUserData?.user.name}
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Tuesday, 14 May 2026 •{" "}

              {employee?.role === "State-Coordinator" && employee?.state}

              {employee?.role === "District-Coordinator" && employee?.district}

              {employee?.role === "Taluka-Coordinator" && employee?.taluka}

              {employee?.role === "Village-Coordinator" && employee?.village}
            </p>
          </div>


          {/* Referral Link Generator */}

          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm mt-6">

            <h2 className="text-xl font-bold text-black">
              Generate Membership Referral Link
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Select membership plan and share link with customers
            </p>


            {/* Search */}
            <input
              type="text"
              value={searchPlan}
              onChange={(e) => setSearchPlan(e.target.value)}
              placeholder="Search plan..."
              className="w-full mt-5 border rounded-xl px-4 py-3 outline-none"
            />


            {/* Plan Options */}
            {searchPlan && (
              <div className="border rounded-xl mt-2 max-h-52 overflow-y-auto">

                {plans
                  ?.filter((plan) =>
                    plan.name
                      .toLowerCase()
                      .includes(searchPlan.toLowerCase())
                  )
                  .map((plan) => (

                    <div
                      key={plan.id}
                      onClick={() => {
                        setSelectedPlan(plan);
                        setSearchPlan(plan.name);
                      }}
                      className="p-4 hover:bg-gray-100 cursor-pointer"
                    >

                      <p className="font-semibold">
                        {plan.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        ₹{plan.price} • {plan.duration} Months
                      </p>

                    </div>

                  ))}

              </div>
            )}



            {/* Selected Plan */}
            {selectedPlan && (

              <div className="mt-5 bg-gray-50 rounded-2xl p-5">

                <h3 className="text-lg font-bold">
                  {selectedPlan.name}
                </h3>


                <p className="text-gray-600 mt-2">
                  {selectedPlan.description}
                </p>


                <div className="flex gap-10 mt-4">

                  <div>
                    <p className="text-sm text-gray-500">
                      Price
                    </p>

                    <p className="font-bold text-primary">
                      ₹{selectedPlan.price}
                    </p>
                  </div>


                  <div>
                    <p className="text-sm text-gray-500">
                      Duration
                    </p>

                    <p className="font-bold">
                      {selectedPlan.duration} Months
                    </p>
                  </div>

                </div>


                <button
                  onClick={handleCopyLink}
                  className="mt-5 bg-primary text-white px-5 py-3 rounded-xl"
                >
                  Copy Referral Link
                </button>

              </div>

            )}

          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-6 border shadow-sm"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <p className="text-sm text-gray-500">
                      {item.title}
                    </p>


                    <h2 className="text-3xl font-bold mt-3">
                      {item.value}
                    </h2>


                    <span className="text-green-600 text-sm">
                      {item.growth}
                    </span>

                  </div>


                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                    {item.icon}
                  </div>


                </div>

              </div>

            ))}

          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-3 gap-6 mt-6">

            {/* Chart */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-xl font-bold text-black">
                    Enrollments
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Last 12 weeks performance
                  </p>
                </div>

                <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-xs font-semibold">
                  +24%
                </span>
              </div>

              {/* Fake Graph */}
              <div className="mt-10 h-[300px] bg-gradient-to-b from-primary-200/40 to-primary-200/5 rounded-3xl relative overflow-hidden">

                <svg
                  viewBox="0 0 600 300"
                  className="absolute inset-0 w-full h-full"
                >
                  <polyline
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="4"
                    points="
                    20,240
                    90,220
                    150,250
                    220,190
                    290,160
                    360,120
                    430,140
                    500,90
                    580,60
                    "
                  />
                </svg>
              </div>
            </div>

            {/* Members */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">

              <h2 className="text-xl font-bold text-black">
                Members By Block
              </h2>

              <div className="flex items-center justify-center mt-10">

                <div className="w-48 h-48 rounded-full border-[30px] border-primary relative">

                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-[30px] border-transparent border-t-green-500 rotate-[40deg]"></div>

                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-[30px] border-transparent border-r-yellow-500 rotate-[120deg]"></div>

                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-[30px] border-transparent border-b-purple rotate-[220deg]"></div>
                </div>
              </div>

              <div className="space-y-4 mt-10">

                <div className="flex items-center justify-between text-sm">
                  <span>Haveli</span>
                  <span className="font-semibold">34%</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span>Mushi</span>
                  <span className="font-semibold">22%</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span>Maval</span>
                  <span className="font-semibold">18%</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span>Bhor</span>
                  <span className="font-semibold">14%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-3xl p-6 border shadow-sm mt-6">


            <div className="mb-6">

              <h2 className="text-xl font-bold">
                Members Purchased Membership
              </h2>

              <p className="text-sm text-gray-500">
                Customers onboarded by this employee
              </p>

            </div>



            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b">

                    <th className="text-left pb-4 text-gray-500">
                      Member
                    </th>


                    <th className="text-left pb-4 text-gray-500">
                      Plan
                    </th>


                    <th className="text-left pb-4 text-gray-500">
                      Amount
                    </th>


                    <th className="text-left pb-4 text-gray-500">
                      Payment
                    </th>


                    <th className="text-left pb-4 text-gray-500">
                      Validity
                    </th>


                    <th className="text-left pb-4 text-gray-500">
                      Status
                    </th>

                  </tr>

                </thead>


                <tbody>


                  {purchases.map((item) => (

                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50"
                    >


                      <td className="py-5">

                        <div>

                          <p className="font-semibold">
                            {item.user.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            {item.user.contact}
                          </p>


                          <p className="text-xs text-gray-400">
                            {item.user.email}
                          </p>


                        </div>

                      </td>



                      <td className="py-5">

                        <p className="font-semibold">
                          {item.membership.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          {item.membership.durationValue} {item.membership.durationUnit}
                        </p>


                      </td>



                      <td className="py-5">

                        <span className="font-bold text-green-600">
                          ₹{item.amountPaid}
                        </span>

                      </td>



                      <td className="py-5">


                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">

                          {item.paymentStatus}

                        </span>


                      </td>



                      <td className="py-5">

                        <p className="text-sm">

                          {new Date(
                            item.startDate
                          ).toLocaleDateString()}

                        </p>


                        <p className="text-xs text-gray-500">

                          to

                          {" "}

                          {new Date(
                            item.endDate
                          ).toLocaleDateString()}

                        </p>


                      </td>



                      <td className="py-5">


                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold
${item.status === "ACTIVE"
                              ?
                              "bg-blue-100 text-blue-600"
                              :
                              "bg-red-100 text-red-600"
                            }
`}
                        >

                          {item.status}

                        </span>


                      </td>



                    </tr>

                  ))}


                </tbody>


              </table>

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard