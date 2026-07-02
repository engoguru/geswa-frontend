import React, { useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { verifyOtpUser } from '../../reduxStore/slice/userSlice'

function Verify() {
  //  useLocation
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const [otp, setOtp] = useState("")
  const locationEmail = location.state?.email;
  const locationflow = location.state?.flow;


 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const email =
      sessionStorage.getItem("resetEmail") || locationEmail;

    const data = {
      email,
      otp,
      type: locationflow
        ? "EMAIL_VERIFICATION"
        : "FORGOT_PASSWORD",
    };

    const response = await dispatch(verifyOtpUser(data)).unwrap();

    if (!response.success) return;

    toast.success(response.message);

    if (locationflow) {
      navigate("/sign-in");
    } else {
      navigate("/reset-password", {
        state: { email },
      });
    }
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-primary-200/30 via-white to-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto">

            <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
              OTP Verification
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mt-7">
              Verify Your
              <span className="block text-primary mt-2">
                Identity
              </span>
            </h1>

            <p className="text-gray-500 text-sm sm:text-base leading-8 mt-8 max-w-2xl mx-auto">
              Enter the secure verification code sent
              to your registered email address.
            </p>
          </div>

          {/* Main Card */}
          <div className="max-w-5xl mx-auto mt-16 bg-white border border-primary-200 rounded-[40px] overflow-hidden shadow-xl">

            <div className="grid lg:grid-cols-2">

              {/* Left */}
              <div className="bg-gradient-to-br from-primary to-purple p-10 sm:p-14 text-white relative overflow-hidden">

                <div className="relative z-10">

                  <span className="bg-white/20 px-4 py-1 rounded-full text-xs">
                    Verification Security
                  </span>

                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight mt-7">
                    OTP Verification
                    Process
                  </h2>

                  <p className="text-sm text-white/90 leading-8 mt-6">
                    We verify your identity using a
                    one-time secure OTP to keep
                    your account protected.
                  </p>

                  <div className="space-y-5 mt-10">

                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} />
                      <span className="text-sm">
                        Encrypted verification
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} />
                      <span className="text-sm">
                        Time-based OTP security
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} />
                      <span className="text-sm">
                        Protected account access
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
                  <ShieldCheck size={28} />
                </div>

                <h3 className="text-3xl font-bold text-black mt-7">
                  Verify OTP
                </h3>

                <p className="text-sm text-gray-500 leading-7 mt-4">
                  Enter the OTP sent to your
                  registered email address.
                </p>

                <div className="mt-10">

                  <label className="text-sm font-medium text-black">
                    Verification Code
                  </label>

                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border border-primary-200 rounded-2xl px-5 py-4 mt-3 outline-none focus:border-primary"
                  />

                  <button className="w-full mt-8 bg-primary hover:bg-primary-600 transition-all duration-300 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2" onClick={handleSubmit}>
                    Verify OTP
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

export default Verify