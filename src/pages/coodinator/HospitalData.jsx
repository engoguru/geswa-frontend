import React from "react";
import Sidebar from "../../components/layout/dashboard/Sidebar";
import Header from "../../components/layout/dashboard/Header";

function HospitalData() {
  const hospitals = [
    {
      id: 1,
      name: "City Care Hospital",
      type: "Private",
      state: "Uttar Pradesh",
      district: "Basti",
      contact: "9876543210",
    },
    {
      id: 2,
      name: "District Government Hospital",
      type: "Government",
      state: "Uttar Pradesh",
      district: "Lucknow",
      contact: "9123456780",
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
                <h2 className="text-lg font-semibold">Hospital Data</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">Hospital Name</th>
                      <th className="p-3">Type</th>
                      <th className="p-3">State</th>
                      <th className="p-3">District</th>
                      <th className="p-3">Contact</th>
                    </tr>
                  </thead>

                  <tbody>
                    {hospitals.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-3">{item.id}</td>
                        <td className="p-3">{item.name}</td>
                        <td className="p-3">{item.type}</td>
                        <td className="p-3">{item.state}</td>
                        <td className="p-3">{item.district}</td>
                        <td className="p-3">{item.contact}</td>
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

export default HospitalData;