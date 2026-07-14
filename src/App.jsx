import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeMain from './pages/home/HomeMain'
import ContactMain from './pages/contact/ContactMain'
import AboutMain from './pages/about/AboutMain'
import TermCondition from './pages/termCondition/TermCondition'
import PrivacyMain from './pages/privacypolicy/PrivacyMain'
import CareerMain from './pages/career/CareerMain'
import BlogMain from './pages/blog/BlogMain'
import Testimonials from './pages/testimonials/Testimonials'
import Register from './pages/users/Register'
import SignIn from './pages/users/SignIn'
import HelpCenter from './pages/helpCenter/HelpCenter'
import PartnerMain from './pages/partnerlisting/PartnerMain'
import PartnerDetail from './pages/partnerlisting/PartnerDetail'
import PremiumMain from './components/common/PremiumMain'
import Forget from './pages/users/Forget'
import Verify from './pages/users/Verify'
import Reset from './pages/users/Reset'
import BlogDetail from './pages/blog/BlogDetail'
import Dashboard from './pages/coodinator/Dashboard'
import UserDashboard from "./pages/users/Dashboard"
import ProtectRoute from './utils/ProtectRoute'
import Notfound from './pages/Notfound'

// chat
import Chat from './components/common/Chat'
import Jobdetail from './pages/career/Jobdetail'
import HospitalData from './pages/coodinator/HospitalData'
import CoordinatorData from './pages/coodinator/CoordinatorData'
import PremiumBuyerData from './pages/coodinator/PremiumBuyerData'
import { useDispatch, useSelector } from 'react-redux'
import { verifiedUser } from './reduxStore/slice/userSlice'

function App() {
const dispatch=useDispatch()

  const { loginUserData, isloginLoading, authChecked } = useSelector(
    (state) => state.user
  );
// useSelector

  useEffect(() => {
    if (!authChecked) {
      dispatch(verifiedUser());
    }
  }, [authChecked, dispatch]);

  // verifiedUser
  // loading
if (!authChecked || isloginLoading) {
  return (
    <div className="p-6 space-y-4">
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>

      <div className="h-40 w-full bg-gray-200 rounded-lg animate-pulse"></div>

      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
      <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
    </div>
  );
}

  return (
    <>
      <Chat />
      <Routes>
        <Route path='/' element={<HomeMain />} />
        <Route path='/contact' element={<ContactMain />} />
        <Route path='/about-us' element={<AboutMain />} />
        <Route path='/term-conditions' element={<TermCondition />} />
        <Route path='/privacy' element={<PrivacyMain />} />
        {/* career */}
        <Route path='/career' element={<CareerMain />} />
        <Route path='/job-detail/:id' element={<Jobdetail />} />

        {/* career */}
        <Route path='/blog' element={<BlogMain />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path='/partners' element={<PartnerMain />} />
        <Route path='/partners-details/:id' element={<PartnerDetail />} />
        <Route path='/premium-plans' element={<PremiumMain />} />
        <Route path='/forget-password' element={<Forget />} />
        <Route path='/verify-otp' element={<Verify />} />
        <Route path='/reset-password' element={<Reset />} />

        <Route path='/not-found' element={<Notfound />} />


        <Route element={<ProtectRoute allowedRoles={['EMPLOYEE']} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/hospital' element={<HospitalData />} />
          <Route path='/coodinator' element={<CoordinatorData />} />
          <Route path='/buyer' element={<PremiumBuyerData />} />

        </Route>

        <Route element={<ProtectRoute allowedRoles={['MEMBER']} />}>
          <Route path="/user" element={<UserDashboard />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
