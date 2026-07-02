import React, { useState, useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { User, Mail, Phone, Lock, ShieldCheck, HeartPulse, Users, CheckCircle2, Form } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../reduxStore/slice/userSlice'
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom'
function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [wait, setWait] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        contact: "",
        password: "",
        role: "MEMBER"

    })
    // useSelectore
    const { userInfo, loading, error } = useSelector((state) => state.user)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setWait(true)
            const response = await dispatch(registerUser(form)).unwrap();
            // console.log(response)
            // toast.success("User Registered");
            if (response?.success) {
                toast.success(response.message);

                navigate("/verify-otp", {
                    state: {
                        email: form.email,
                        flow:"EMAIL_VERIFICATION"
                    },
                });

                setForm({
                    name: "",
                    email: "",
                    contact: "",
                    password: "",
                    role: "MEMBER",
                });
            }
            setWait(false)
        } catch (error) {
            console.log(error);

            toast.error(error || "Something went wrong");
        }
    }
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-white overflow-hidden">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Left Content */}
                        <div>

                            <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                                Join Geswa
                            </span>

                            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight mt-6">
                                Affordable Healthcare
                                <span className="text-primary block mt-2">
                                    Starts Here
                                </span>
                            </h1>

                            <p className="text-gray-500 text-sm sm:text-base leading-8 mt-7 max-w-xl">
                                Create your healthcare membership account and
                                get instant access to hospital discounts,
                                emergency support, and insurance assistance.
                            </p>

                            {/* Features */}
                            <div className="space-y-5 mt-10">

                                <div className="flex items-start gap-4">

                                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                                        <HeartPulse size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-black">
                                            18,000+ Hospitals
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1 leading-7">
                                            Access partner hospitals across India.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">

                                    <div className="w-12 h-12 rounded-2xl bg-green text-white flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-black">
                                            Insurance Assistance
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1 leading-7">
                                            Fast claim support and healthcare guidance.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">

                                    <div className="w-12 h-12 rounded-2xl bg-purple text-white flex items-center justify-center flex-shrink-0">
                                        <Users size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-black">
                                            Family Membership
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1 leading-7">
                                            Protect your loved ones with one plan.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-5 mt-12">

                                <div className="bg-primary-200 rounded-3xl px-6 py-5 min-w-[150px]">
                                    <h2 className="text-3xl font-bold text-primary">
                                        2.4M+
                                    </h2>

                                    <p className="text-sm text-gray-600 mt-2">
                                        Active Members
                                    </p>
                                </div>

                                <div className="bg-green/10 rounded-3xl px-6 py-5 min-w-[150px]">
                                    <h2 className="text-3xl font-bold text-green">
                                        98%
                                    </h2>

                                    <p className="text-sm text-gray-600 mt-2">
                                        Satisfaction
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Register Form */}
                        <div>

                            <div className="bg-white border border-primary-200 rounded-[40px] p-8 sm:p-10 shadow-xl">

                                <div className="text-center">

                                    <div className="w-16 h-16 rounded-3xl bg-primary text-white flex items-center justify-center mx-auto">
                                        <User size={30} />
                                    </div>

                                    <h2 className="text-3xl font-bold text-black mt-6">
                                        Create Account
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-3 leading-7">
                                        Start your healthcare membership today.
                                    </p>
                                </div>

                                {/* Form */}
                                <form className="space-y-6 mt-10" onSubmit={handleSubmit}>

                                    {/* Name */}
                                    <div>
                                        <label className="text-sm font-medium text-black">
                                            Full Name
                                        </label>

                                        <div className="relative mt-3">

                                            <User
                                                size={18}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3 text-sm outline-none focus:border-primary"
                                                autoComplete="name"
                                                name='name'
                                                value={form.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="text-sm font-medium text-black">
                                            Email Address
                                        </label>

                                        <div className="relative mt-3">

                                            <Mail
                                                size={18}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                            />

                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3 text-sm outline-none focus:border-primary"
                                                autoComplete="email"
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="text-sm font-medium text-black">
                                            Phone Number
                                        </label>

                                        <div className="relative mt-3">

                                            <Phone
                                                size={18}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Enter phone number"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3 text-sm outline-none focus:border-primary"
                                                autoComplete="contact"
                                                name='contact'
                                                value={form.contact}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="text-sm font-medium text-black">
                                            Password
                                        </label>

                                        <div className="relative mt-3">

                                            <Lock
                                                size={18}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                            />

                                            <input
                                                type="password"
                                                placeholder="Create password"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3 text-sm outline-none focus:border-primary"
                                                autoComplete="password"
                                                name='password'
                                                value={form.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Checkbox */}
                                    <div className="flex items-start gap-3">

                                        <CheckCircle2
                                            size={18}
                                            className="text-primary mt-0.5"
                                        />

                                        <p className="text-xs text-gray-500 leading-6">
                                            By creating an account, you agree to
                                            Geswa’s Terms & Conditions and
                                            Privacy Policy.
                                        </p>
                                    </div>

                                    {/* Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary-600 transition-all duration-300 text-white py-3 rounded-2xl text-sm font-semibold"
                                    >
                                        {wait === false ? <>Create Account</> : <>Please Waiting</>}
                                    </button>
                                </form>

                                {/* Footer */}
                                <div className="text-center mt-8">

                                    <p className="text-sm text-gray-500">
                                        Already have an account?
                                        <Link to={"/sign-in"} className="text-primary font-medium cursor-pointer ml-2">
                                            Sign In
                                        </Link>
                                    </p>
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

export default Register