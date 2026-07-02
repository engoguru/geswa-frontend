import React, { useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import {ShieldCheck,CalendarDays, Wallet, HeartPulse, BadgeCheck, Hospital, ArrowRight, Phone, Activity} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, verifiedUser } from '../../reduxStore/slice/userSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Dashboard() {
const dispatch=useDispatch()
const navigate=useNavigate()

const{loginUserData}=useSelector((state)=>state?.user)

  const benefits = [
    {
      title: 'Hospital Discounts',
      value: 'Up To 40%',
      icon: <Hospital size={22} />
    },
    {
      title: 'Insurance Support',
      value: '24/7 Help',
      icon: <ShieldCheck size={22} />
    },
    {
      title: 'Emergency Assistance',
      value: 'Active',
      icon: <Phone size={22} />
    },
    {
      title: 'Health Consultations',
      value: 'Unlimited',
      icon: <HeartPulse size={22} />
    }
  ]

const handleLogout = async () => {
  try {
    await dispatch(logoutUser()).unwrap();

    // Optional: show success toast
    toast.success("Logged out successfully");
// toast
    navigate("/", { replace: true });
  } catch (error) {
    console.error("Logout failed:", error);

    // Optional: show error toast
    toast.error(error || "Failed to logout");


  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-primary-200/20 via-white to-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* Welcome */}
          <div className="bg-gradient-to-r from-primary to-purple rounded-[40px] p-8 sm:p-12 text-white relative overflow-hidden">

            <div className="relative z-10">

              <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-medium">
                Active Membership
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold mt-7 leading-tight">
                Welcome Back,
                <span className="block mt-2">
                {loginUserData?.user?.name}
                </span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base leading-8 mt-6 max-w-2xl">
                Your healthcare membership is active and
                protecting your family with affordable
                healthcare benefits and emergency support.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <button className="bg-white text-primary px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-gray-100 transition-all">
                  Download Card
                </button>

                <button className="bg-white/10 border border-white/20 px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-white/20 transition-all" onClick={handleLogout}>
                   Logout
                </button>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-white/10 rounded-full"></div>

            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            {/* Premium */}
            <div className="bg-white border border-primary-200 rounded-[32px] p-7 shadow-sm">

              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                <Wallet size={22} />
              </div>

              <p className="text-gray-500 text-sm mt-6">
                Current Premium
              </p>

              <h2 className="text-4xl font-bold text-black mt-3">
                ₹990
              </h2>

              <span className="text-green-600 text-sm font-medium mt-3 block">
                Paid Successfully
              </span>
            </div>

            {/* Validity */}
            <div className="bg-white border border-primary-200 rounded-[32px] p-7 shadow-sm">

              <div className="w-14 h-14 rounded-2xl bg-green text-white flex items-center justify-center">
                <CalendarDays size={22} />
              </div>

              <p className="text-gray-500 text-sm mt-6">
                Membership Validity
              </p>

              <h2 className="text-4xl font-bold text-black mt-3">
                248
              </h2>

              <span className="text-gray-500 text-sm mt-3 block">
                Days Remaining
              </span>
            </div>

            {/* Savings */}
            <div className="bg-white border border-primary-200 rounded-[32px] p-7 shadow-sm">

              <div className="w-14 h-14 rounded-2xl bg-purple text-white flex items-center justify-center">
                <BadgeCheck size={22} />
              </div>

              <p className="text-gray-500 text-sm mt-6">
                Total Savings
              </p>

              <h2 className="text-4xl font-bold text-black mt-3">
                ₹18,400
              </h2>

              <span className="text-green-600 text-sm font-medium mt-3 block">
                Through Membership
              </span>
            </div>

            {/* Health Score */}
            <div className="bg-white border border-primary-200 rounded-[32px] p-7 shadow-sm">

              <div className="w-14 h-14 rounded-2xl bg-yellow text-white flex items-center justify-center">
                <Activity size={22} />
              </div>

              <p className="text-gray-500 text-sm mt-6">
                Health Support
              </p>

              <h2 className="text-4xl font-bold text-black mt-3">
                Active
              </h2>

              <span className="text-gray-500 text-sm mt-3 block">
                Emergency Assistance Enabled
              </span>
            </div>
          </div>

          {/* Membership Card + Savings */}
          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* Membership Card */}
            <div className="lg:col-span-2 bg-black rounded-[40px] p-8 sm:p-10 text-white relative overflow-hidden">

              <div className="relative z-10">

                <span className="bg-white/10 px-4 py-1 rounded-full text-xs">
                  Digital Healthcare Card
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-10 gap-6">

                  <div>

                    <h2 className="text-3xl sm:text-4xl font-bold">
                      Geswa Health Membership
                    </h2>

                    <p className="text-gray-300 text-sm mt-4 leading-7">
                      Affordable healthcare support for
                      your complete family with hospital
                      and insurance assistance.
                    </p>
                  </div>

                  <div className="w-24 h-24 rounded-[28px] bg-white/10 flex items-center justify-center text-4xl font-bold">
                    G
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-12">

                  <div>
                    <p className="text-gray-400 text-xs">
                      Member Name
                    </p>

                    <h3 className="text-xl font-semibold mt-2">
                      Rahul Sharma
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">
                      Membership ID
                    </p>

                    <h3 className="text-xl font-semibold mt-2">
                      GSWA-28493
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">
                      Expiry Date
                    </p>

                    <h3 className="text-xl font-semibold mt-2">
                      14 Jan 2027
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">
                      Family Members
                    </p>

                    <h3 className="text-xl font-semibold mt-2">
                      4 Active
                    </h3>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-white/5 rounded-full"></div>

              <div className="absolute top-10 right-10 w-28 h-28 bg-white/5 rounded-full"></div>
            </div>

            {/* Savings */}
            <div className="bg-white border border-primary-200 rounded-[40px] p-8 shadow-sm">

              <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                Estimated Savings
              </span>

              <h2 className="text-5xl font-bold text-black mt-8">
                ₹1.2L
              </h2>

              <p className="text-gray-500 text-sm leading-7 mt-5">
                Estimated yearly healthcare savings
                using your active membership benefits,
                discounts, and hospital partnerships.
              </p>

              <div className="space-y-5 mt-10">

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Hospital Discounts
                  </span>

                  <span className="font-semibold">
                    ₹48,000
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Consultation Benefits
                  </span>

                  <span className="font-semibold">
                    ₹22,000
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Insurance Assistance
                  </span>

                  <span className="font-semibold">
                    ₹50,000
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-12">

            <div className="flex items-center justify-between flex-wrap gap-4">

              <div>

                <h2 className="text-4xl font-bold text-black">
                  Your Membership Benefits
                </h2>

                <p className="text-gray-500 text-sm mt-3">
                  Healthcare services currently active for your account
                </p>
              </div>

              <button className="bg-primary text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-primary-600 transition-all flex items-center gap-2">
                Explore Benefits
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-primary-200 rounded-[32px] p-7 shadow-sm hover:shadow-xl transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-black mt-6">
                    {item.title}
                  </h3>

                  <p className="text-primary font-medium mt-4">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency */}
          <div className="mt-14 mb-10 bg-gradient-to-r from-primary to-purple rounded-[40px] p-8 sm:p-12 text-white relative overflow-hidden">

            <div className="relative z-10 max-w-3xl">

              <span className="bg-white/20 px-4 py-1 rounded-full text-xs">
                Emergency Healthcare Support
              </span>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mt-7">
                Need Immediate
                Healthcare Assistance?
              </h2>

              <p className="text-white/90 text-sm leading-8 mt-6">
                Our healthcare support team is available
                24/7 to assist with hospital admissions,
                insurance coordination, and emergency guidance.
              </p>

              <button className="mt-10 bg-white text-primary hover:bg-gray-100 transition-all duration-300 px-7 py-4 rounded-2xl text-sm font-semibold shadow-lg flex items-center gap-2">
                Contact Support
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Decorative */}
            <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-white/10 rounded-full"></div>

            <div className="absolute top-10 right-10 w-28 h-28 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Dashboard