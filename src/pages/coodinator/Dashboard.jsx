import React, { useEffect } from 'react'
import Sidebar from '../../components/layout/dashboard/Sidebar'
import Header from '../../components/layout/dashboard/Header'

import {
  Users,
  Hospital,
  Wallet,
  TrendingUp,
  Download
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { verifiedUser } from '../../reduxStore/slice/userSlice'

function Dashboard() {
  const dispatch = useDispatch()
  const { loginUserData } = useSelector((state) => state?.user)


  // useEffect
  console.log(loginUserData, "n")
  // useSelector
  const stats = [
    {
      title: "Total Members",
      value: "48,290",
      growth: "+8.2%",
      icon: <Users size={22} />
    },
    {
      title: "This Month Enroll",
      value: "1,284",
      growth: "+21%",
      icon: <TrendingUp size={22} />
    },
    {
      title: "Active Hospitals",
      value: "312",
      growth: "+9%",
      icon: <Hospital size={22} />
    },
    {
      title: "Member Savings",
      value: "₹2.84 Cr",
      growth: "+14%",
      icon: <Wallet size={22} />
    }
  ]

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
  const employee = loginUserData?.user?.employee;
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

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-500">
                      {item.title}
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-3">
                      {item.value}
                    </h2>

                    <span className="text-green-600 text-sm font-medium mt-2 block">
                      {item.growth} this month
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
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm mt-6">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold text-black">
                  Block Coordinator Performance
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  District healthcare performance overview
                </p>
              </div>

              <button className="border border-primary text-primary px-5 py-2 rounded-2xl text-sm font-medium flex items-center gap-2 hover:bg-primary hover:text-white transition">
                <Download size={16} />
                Export CSV
              </button>
            </div>

            <div className="overflow-x-auto mt-8">

              <table className="w-full">

                <thead>
                  <tr className="text-left border-b border-gray-200">

                    <th className="pb-4 text-sm font-semibold text-gray-500">
                      Block
                    </th>

                    <th className="pb-4 text-sm font-semibold text-gray-500">
                      Coordinator
                    </th>

                    <th className="pb-4 text-sm font-semibold text-gray-500">
                      Members
                    </th>

                    <th className="pb-4 text-sm font-semibold text-gray-500">
                      Hospitals
                    </th>

                    <th className="pb-4 text-sm font-semibold text-gray-500">
                      Savings
                    </th>

                    <th className="pb-4 text-sm font-semibold text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {coordinators.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition"
                    >

                      <td className="py-5 font-semibold">
                        {item.block}
                      </td>

                      <td className="py-5">
                        {item.name}
                      </td>

                      <td className="py-5">
                        {item.members}
                      </td>

                      <td className="py-5">
                        {item.hospitals}
                      </td>

                      <td className="py-5">
                        {item.savings}
                      </td>

                      <td className="py-5">

                        <span className={`px-4 py-1 rounded-full text-xs font-semibold ${item.status === "Behind"
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                          }`}>
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