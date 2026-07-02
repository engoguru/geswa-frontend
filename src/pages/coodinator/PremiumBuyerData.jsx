import React from "react";
import Sidebar from "../../components/layout/dashboard/Sidebar";
import Header from "../../components/layout/dashboard/Header";

function PremiumBuyerData() {
  const buyers = [
    {
      id: 1,
      name: "Rohit Sharma",
      email: "rohit@gmail.com",
      plan: "Premium",
      state: "Uttar Pradesh",
      district: "Basti",
      status: "Active",
    },
    {
      id: 2,
      name: "Anjali Verma",
      email: "anjali@gmail.com",
      plan: "Gold",
      state: "Uttar Pradesh",
      district: "Lucknow",
      status: "Inactive",
    },
  ];

  return (
    <>
      <div className="flex bg-[#f4f7fb] min-h-screen">
        <Sidebar />

        <div className="flex-1 ml-[280px]">
          <Header />

          {/* TABLE SECTION */}
          <div className="p-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">
                  Premium Buyer Data
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Plan</th>
                      <th className="p-3">State</th>
                      <th className="p-3">District</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {buyers.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-3">{item.id}</td>
                        <td className="p-3">{item.name}</td>
                        <td className="p-3">{item.email}</td>
                        <td className="p-3">{item.plan}</td>
                        <td className="p-3">{item.state}</td>
                        <td className="p-3">{item.district}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              item.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
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
    </>
  );
}

export default PremiumBuyerData;