import React, { useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { LockKeyhole, ArrowRight, CheckCircle2 } from 'lucide-react'
import { toast } from 'react-toastify'
import { resetPasswordUser } from '../../reduxStore/slice/userSlice'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function Reset() {
  // useDispatch
  // useNavigate
  // useLocation
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const email = location.state?.email;
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const email = sessionStorage.getItem("resetEmail");
      const passwordData = {
        email,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword
      }
      const response = await dispatch(resetPasswordUser(passwordData)).unwrap()
      if (response.success) {
        toast.success(response.message)
        navigate("/sign-in")
        setFormData({
          newPassword: "",
          confirmPassword: ""
        })
        sessionStorage.removeItem("resetEmail");
      }
    } catch (error) {
      toast.success(error.message)
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-primary-200/30 via-white to-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto">

            <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
              Reset Password
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mt-7">
              Create A New
              <span className="block text-primary mt-2">
                Secure Password
              </span>
            </h1>

            <p className="text-gray-500 text-sm sm:text-base leading-8 mt-8 max-w-2xl mx-auto">
              Choose a strong password to secure
              your account and continue safely.
            </p>
          </div>

          {/* Main Card */}
          <div className="max-w-5xl mx-auto mt-16 bg-white border border-primary-200 rounded-[40px] overflow-hidden shadow-xl">

            <div className="grid lg:grid-cols-2">

              {/* Left */}
              <div className="bg-gradient-to-br from-primary to-purple p-10 sm:p-14 text-white relative overflow-hidden">

                <div className="relative z-10">

                  <span className="bg-white/20 px-4 py-1 rounded-full text-xs">
                    Password Security
                  </span>

                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight mt-7">
                    Keep Your Account
                    Safe & Secure
                  </h2>

                  <p className="text-sm text-white/90 leading-8 mt-6">
                    Create a secure password with
                    strong protection for your
                    account and personal data.
                  </p>

                  <div className="space-y-5 mt-10">

                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} />
                      <span className="text-sm">
                        Strong password protection
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} />
                      <span className="text-sm">
                        Secure account access
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} />
                      <span className="text-sm">
                        Enhanced user security
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full"></div>

                <div className="absolute right-10 top-10 w-28 h-28 bg-white/10 rounded-full"></div>
              </div>

              {/* Right */}
              <div className="p-8 sm:p-14">

                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center">
                  <LockKeyhole size={28} />
                </div>

                <h3 className="text-3xl font-bold text-black mt-7">
                  Reset Password
                </h3>

                <p className="text-sm text-gray-500 leading-7 mt-4">
                  Create and confirm your new
                  secure password below.
                </p>

                <div className="mt-10 space-y-6">

                  <div>
                    <label className="text-sm font-medium text-black">
                      New Password
                    </label>

                    <input
                      type="password"
                      name="newPassword"
                      placeholder="Enter new password"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full border border-primary-200 rounded-2xl px-5 py-4 mt-3 outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full border border-primary-200 rounded-2xl px-5 py-4 mt-3 outline-none focus:border-primary"
                    />
                  </div>

                  <button className="w-full bg-primary hover:bg-primary-600 transition-all duration-300 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2" onClick={handleSubmit}>
                    Reset Password
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Reset