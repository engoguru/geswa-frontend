
import React, { useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import {
  ShieldCheck,
  CalendarDays,
  Wallet,
  HeartPulse,
  BadgeCheck,
  Hospital,
  ArrowRight,
  Phone,
  Activity,
  UserCheck,
  MapPin,
  Briefcase,
  CreditCard,
  Download,
  LogOut,
  Wifi,
  Headset
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../reduxStore/slice/userSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getPurchasePlan } from '../../reduxStore/slice/premiumPurchaseSlice'
import { getAllMembershipServiceUser } from '../../reduxStore/slice/premiumServiceSlice'

// icons cycled through for whatever benefits come back from the API
const benefitIcons = [Hospital, ShieldCheck, HeartPulse, BadgeCheck, Phone, Activity]

function formatDate(dateStr) {
  if (!dateStr) return '-'
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

function getDaysRemaining(endDate) {
  if (!endDate) return 0
  const diff = new Date(endDate).getTime() - Date.now()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return days > 0 ? days : 0
}

function Dashboard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loginUserData } = useSelector((state) => state?.user)
  const { purchaseData } = useSelector((state) => state?.memberPurchase)
  const { userServices } = useSelector((state) => state.memberService)

  useEffect(() => {
    if (loginUserData?.user?.id) {
      dispatch(getPurchasePlan(loginUserData.user.id))
    }
  }, [loginUserData?.user?.id])

  const membership = purchaseData?.membership
  const employeeAssignment = purchaseData?.employeeAssignment
  const assistedByEmployee = employeeAssignment?.employee
  const assistedByUser = assistedByEmployee?.user

  const daysRemaining = getDaysRemaining(purchaseData?.endDate)
  const memberName = purchaseData?.user?.name || loginUserData?.user?.name
  const isActive = purchaseData?.status === 'ACTIVE'

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap()
      toast.success('Logged out successfully')
      window.location.reload()
      navigate('/', { replace: true })
    } catch (error) {
      toast.error(error || 'Failed to logout')
    }
  }

  useEffect(() => {
    if (purchaseData?.id) {
      dispatch(getAllMembershipServiceUser(purchaseData.id))
    }
  }, [purchaseData?.id, dispatch])

  const totalServices = userServices?.length || 0

  const totalBill = userServices?.reduce((sum, item) => sum + Number(item.actualBillAmount), 0) || 0
  const totalSaved = userServices?.reduce((sum, item) => sum + Number(item.offerAmount), 0) || 0
  const totalPaid = userServices?.reduce((sum, item) => sum + Number(item.finalAmount), 0) || 0

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F5F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          {/* ===================== HERO: DIGITAL MEMBERSHIP CARD ===================== */}
          <div className="relative">

            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 px-1">
              <p className="text-sm text-gray-500">
                Welcome back, <span className="font-semibold text-black">{memberName}</span>
              </p>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${
                  isActive ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-green-500' : 'bg-yellow-500'}`} />
                {purchaseData?.status || 'Membership'}
              </span>
            </div>

            <div
              className="relative overflow-hidden rounded-[32px] p-8 sm:p-10 text-white shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #0F3D39 0%, #124A44 45%, #1F6F63 100%)'
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  background:
                    'repeating-linear-gradient(115deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 14px)'
                }}
              />
              <div className="absolute -right-20 -bottom-24 w-80 h-80 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute top-0 right-16 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-8 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-500/80 flex items-center justify-center shadow-inner">
                      <div className="w-7 h-4 rounded-sm border border-yellow-700/30" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">Digital Healthcare Card</p>
                      <p className="text-sm font-semibold">{membership?.name || 'Geswa Health Membership'}</p>
                    </div>
                  </div>
                  <Wifi size={20} className="text-white/50 rotate-90" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-10 gap-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Member Name</p>
                    <h1 className="text-3xl sm:text-4xl font-bold mt-1 leading-tight">{memberName || '-'}</h1>

                    <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Member ID</p>
                        <p className="font-mono text-base tracking-wider mt-1">{purchaseData?.memberId || '-'}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Valid From</p>
                        <p className="font-mono text-base tracking-wider mt-1">{formatDate(purchaseData?.startDate)}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Valid Till</p>
                        <p className="font-mono text-base tracking-wider mt-1">{formatDate(purchaseData?.endDate)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-3xl font-bold shrink-0">
                    {memberName?.charAt(0)?.toUpperCase() || 'G'}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-white/10">
                  {/* <button className="bg-white text-primary px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all flex items-center gap-2">
                    <Download size={16} />
                    Download Card
                  </button> */}
                  <button
                    onClick={handleLogout}
                    className="bg-white/10 border border-white/20 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== STATUS AT A GLANCE ===================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

            <div className="bg-white border border-primary-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Wallet size={20} />
              </div>
              <p className="text-gray-500 text-sm mt-5">Current Premium</p>
              <h2 className="text-3xl font-bold text-black mt-2">
                ₹{purchaseData?.amountPaid ?? membership?.price ?? '-'}
              </h2>
              <span
                className={`text-xs font-medium mt-2 block ${
                  purchaseData?.paymentStatus === 'SUCCESS' ? 'text-green-600' : 'text-yellow-600'
                }`}
              >
                {purchaseData?.paymentStatus === 'SUCCESS' ? 'Paid successfully' : purchaseData?.paymentStatus || 'Pending'}
              </span>
            </div>

            <div className="bg-white border border-primary-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green/10 text-green-700 flex items-center justify-center">
                <CalendarDays size={20} />
              </div>
              <p className="text-gray-500 text-sm mt-5">Membership Validity</p>
              <h2 className="text-3xl font-bold text-black mt-2">{daysRemaining}</h2>
              <span className="text-gray-500 text-xs mt-2 block">Days remaining</span>
            </div>

            <div className="bg-white border border-primary-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple/10 text-purple flex items-center justify-center">
                <BadgeCheck size={20} />
              </div>
              <p className="text-gray-500 text-sm mt-5">Current Plan</p>
              <h2 className="text-xl font-bold text-black mt-2 leading-snug">{membership?.name || '-'}</h2>
              <span className="text-green-600 text-xs font-medium mt-2 block">
                {membership?.durationValue} {membership?.durationUnit?.toLowerCase()}
                {membership?.durationValue > 1 ? 's' : ''} plan
              </span>
            </div>

            <div className="bg-white border border-primary-200 rounded-3xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-yellow/10 text-yellow-700 flex items-center justify-center">
                <Activity size={20} />
              </div>
              <p className="text-gray-500 text-sm mt-5">Health Support</p>
              <h2 className="text-3xl font-bold text-black mt-2">{isActive ? 'Active' : purchaseData?.status || '-'}</h2>
              <span className="text-gray-500 text-xs mt-2 block">Emergency assistance enabled</span>
            </div>
          </div>

          {/* ===================== ASSISTED BY + QUICK ACTIONS ===================== */}
          <div className="grid lg:grid-cols-3 gap-6 mt-6">

            <div className="lg:col-span-2 bg-white border border-primary-200 rounded-3xl p-7 shadow-sm">
              <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                Assisted By
              </span>

              {assistedByUser ? (
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-primary-200 flex items-center justify-center shrink-0">
                      {assistedByEmployee?.profileUrl ? (
                        <img
                          src={assistedByEmployee.profileUrl}
                          alt={assistedByUser.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <UserCheck size={26} className="text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">{assistedByUser.name}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">
                        {employeeAssignment?.role?.name || 'Field Coordinator'}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-8 gap-y-3 sm:ml-auto text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase size={15} className="text-primary shrink-0" />
                      <span>{employeeAssignment?.department?.name || '-'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={15} className="text-primary shrink-0" />
                      <span>
                        {[employeeAssignment?.taluka?.name, employeeAssignment?.district?.name]
                          .filter(Boolean)
                          .join(', ') || '-'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={15} className="text-primary shrink-0" />
                      <span>{assistedByUser.contact || '-'}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm mt-6 leading-7">
                  No employee is linked to this purchase yet.
                </p>
              )}
            </div>

            <div className="bg-black rounded-3xl p-7 text-white flex flex-col justify-between">
              <div>
                <span className="bg-white/10 px-4 py-1 rounded-full text-xs">Need Help?</span>
                <p className="text-white/70 text-sm mt-4 leading-6">
                  Reach our support team for hospital admissions or claim guidance.
                </p>
              </div>
              <button className="mt-6 bg-white text-black px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Headset size={16} />
                Contact Support
              </button>
            </div>
          </div>

          {/* ===================== USAGE + SERVICE HISTORY ===================== */}
          <div className="bg-white border border-primary-200 rounded-3xl p-7 shadow-sm mt-6 hidden md:block">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-semibold text-black">Service History</h2>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-gray-400">Services</span>{' '}
                  <span className="font-semibold text-black">{totalServices}</span>
                </div>
                <div>
                  <span className="text-gray-400">Billed</span>{' '}
                  <span className="font-semibold text-black">₹{totalBill.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-gray-400">Saved</span>{' '}
                  <span className="font-semibold text-green-600">₹{totalSaved.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-gray-400">Paid</span>{' '}
                  <span className="font-semibold text-purple">₹{totalPaid.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-gray-400 text-xs uppercase tracking-wide">
                    <th className="text-left py-3 font-medium">Hospital</th>
                    <th className="text-left py-3 font-medium">Service</th>
                    <th className="text-left py-3 font-medium">Bill</th>
                    <th className="text-left py-3 font-medium">Saved</th>
                    <th className="text-left py-3 font-medium">Paid</th>
                    <th className="text-left py-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {userServices?.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50/60 transition-colors">
                      <td className="py-3.5 font-medium text-black">{item.hospital?.name}</td>
                      <td className="text-gray-600">{item.serviceName}</td>
                      <td className="text-gray-600">₹{Number(item.actualBillAmount).toLocaleString()}</td>
                      <td className="text-green-600 font-medium">₹{Number(item.offerAmount).toLocaleString()}</td>
                      <td className="text-gray-800 font-medium">₹{Number(item.finalAmount).toLocaleString()}</td>
                      <td className="text-gray-500">{new Date(item.usedAt).toLocaleDateString('en-IN')}</td>
                    </tr>
                  ))}

                  {!userServices?.length && (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-400 text-sm">
                        No services used yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* ===================== BENEFITS ===================== */}
          <div className="mt-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-black">Your Membership Benefits</h2>
                <p className="text-gray-500 text-sm mt-2">Healthcare services currently active for your account</p>
              </div>
              <button className="bg-primary text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-primary-600 transition-all flex items-center gap-2">
                Explore Benefits
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
              {(membership?.benefits?.length ? membership.benefits : []).map((benefit, index) => {
                const Icon = benefitIcons[index % benefitIcons.length]
                return (
                  <div
                    key={index}
                    className="bg-white border border-primary-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-black mt-5 leading-snug">{benefit}</h3>
                  </div>
                )
              })}

              {!membership?.benefits?.length && (
                <div className="col-span-full text-gray-500 text-sm">No benefits found for this plan.</div>
              )}
            </div>
          </div>

          {/* ===================== EMERGENCY BAND ===================== */}
          <div className="mt-14 mb-6 bg-gradient-to-r from-primary to-purple rounded-[40px] p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="bg-white/20 px-4 py-1 rounded-full text-xs">Emergency Healthcare Support</span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mt-6">
                Need immediate healthcare assistance?
              </h2>
              <p className="text-white/90 text-sm leading-7 mt-5">
                Our support team is available 24/7 for hospital admissions, insurance coordination, and emergency
                guidance.
              </p>
              <button className="mt-8 bg-white text-primary hover:bg-gray-100 transition-all duration-300 px-6 py-3.5 rounded-2xl text-sm font-semibold shadow-lg flex items-center gap-2">
                Contact Support
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-white/10 rounded-full" />
            <div className="absolute top-10 right-10 w-28 h-28 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Dashboard