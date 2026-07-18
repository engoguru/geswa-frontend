import React from 'react'
import { Bell, Search } from 'lucide-react'
import { useSelector } from 'react-redux'

function Header() {
const{loginUserData}=useSelector((state)=>state?.user)
// useSelector
  return (
    <div className="h-[90px] bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">

      {/* Search */}
      <div className="relative w-[400px]">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search members, hospitals..."
          className="w-full bg-[#f4f7fb] border border-gray-200 rounded-2xl pl-12 pr-4 py-3 text-sm outline-none focus:border-primary"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <button className="w-12 h-12 rounded-2xl bg-[#f4f7fb] flex items-center justify-center relative">

          <Bell size={20} />

          <span className="w-2.5 h-2.5 bg-red-500 rounded-full absolute top-3 right-3"></span>
        </button>

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-bold">
            {loginUserData?.user?.name[0]}
          </div>

          <div>

            <h3 className="text-sm font-semibold">
            {loginUserData?.user?.name}
            </h3>

            <p className="text-xs text-gray-500">
             {loginUserData?.user?.employee?.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header