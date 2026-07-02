import React from 'react'
import {
  LayoutDashboard,
  MapPinned,
  Users,
  Hospital,
  CreditCard,
  Wallet,
  Ticket,
  Settings
} from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Sidebar() {
const{loginUserData}=useSelector((state)=>state?.user)
// useSelector
 const menus = [
  {
    name: "Overview",
    to: "/dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  // {
  //   name: "Work Location",
  //   to: "/",
  //   icon: <MapPinned size={18} />,
  // },
  {
    name: " Primum Members",
    to: "/buyer",
    icon: <Users size={18} />,
  },
  // {
  //   name: "Hospitals",
  //   to: "/hospital",
  //   icon: <Hospital size={18} />,
  // },
  {
    name: "Team",
    to: "/coodinator",
    icon: <CreditCard size={18} />,
  },
  {
    name: "Payouts",
    to: "/dashboard",
    icon: <Wallet size={18} />,
  },
  {
    name: "Tickets",
    to: "/dashboard",
    icon: <Ticket size={18} />,
  },

];
  const employee = loginUserData?.user?.employee;
  return (
    <div className="w-[280px] h-screen bg-[#071120] fixed top-0 left-0 flex flex-col justify-between p-6">

      <div>

        {/* Logo */}
        <div>

          < Link to={"/"} className="text-2xl font-bold text-white">
            Geswa Micro+
          </Link>

          <p className="text-sm text-gray-400 mt-1">
            Coordinator Panel
          </p>
        </div>

        {/* Menu */}
        <div className="space-y-2 mt-12">

          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.to}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                index === 0
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >

              {menu.icon}

              {menu.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Profile */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

        <span className="bg-yellow-500 text-black text-[10px] px-3 py-1 rounded-full font-bold">
          {employee?.role === "State-Coordinator" && <>State</>}

              {employee?.role === "District-Coordinator" && <>District</>}

              {employee?.role === "Taluka-Coordinator" && <>Taluka</>}

              {employee?.role === "Village-Coordinator" && <>Village</>} TIER
        </span>

        <h5 className="text-white font-semibold mt-4">
         {employee?.role === "State-Coordinator" && employee?.state}

              {employee?.role === "District-Coordinator" && employee?.district}

              {employee?.role === "Taluka-Coordinator" && employee?.taluka}

              {employee?.role === "Village-Coordinator" && employee?.village} Region
        </h5>

        <p className="text-xs text-gray-400 mt-2 leading-6">
          12 Blocks • 184 Villages
          <br />
          Coord: {loginUserData?.user.name}
        </p>
      </div>
    </div>
  )
}

export default Sidebar