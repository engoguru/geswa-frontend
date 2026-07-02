import React, { useEffect ,useState} from "react";
import Sidebar from "../../components/layout/dashboard/Sidebar";
import Header from "../../components/layout/dashboard/Header";
import axios from "axios";
import { base_Url } from "../../utils/baseUrl";

function CoordinatorData() {
  const coordinators = [
    {
      id: 1,
      name: "Amit Kumar",
      role: "State-Coordinator",
      state: "Uttar Pradesh",
      district: "-",
      taluka: "-",
      village: "-",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "District-Coordinator",
      state: "Uttar Pradesh",
      district: "Basti",
      taluka: "-",
      village: "-",
    },
  ];
const [teamData,setTeamData]=useState([])
  const fetchTeamData=async()=>{
    try {
      const res=await axios.get(`${base_Url}assigned/team`,{
        withCredentials:true
      })
      setTeamData(res?.data?.data)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }
useEffect(()=>{
fetchTeamData()
},[])
console.log(teamData)
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
                <h2 className="text-lg font-semibold">Coordinator Data</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Role</th>
                      <th className="p-3">Department</th>
                      <th className="p-3">District</th>
                      <th className="p-3">Taluka</th>
                      <th className="p-3">Village</th>
                    </tr>
                  </thead>

                  <tbody>
                    {teamData?.map((item) => (
                      <tr
                        key={item?.employee?.user.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-3">{item?.employee?.user.id}</td>
                        <td className="p-3">{item?.employee?.user.name}</td>
                        <td className="p-3">{item?.role?.name}</td>
                        <td className="p-3">{item?.department?.name}</td>
                        <td className="p-3">{item?.district?.name}</td>
                        <td className="p-3">{item?.taluka?.name}</td>
                        <td className="p-3">{item?.village?.name}</td>
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

export default CoordinatorData;