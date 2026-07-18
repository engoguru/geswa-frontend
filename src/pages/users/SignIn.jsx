import React, { useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import { Mail, Lock, ShieldCheck, HeartPulse, Users, LogIn } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../../reduxStore/slice/userSlice'

function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [submit, setSubmit] = useState(false)
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSubmit(true)
            const response = await dispatch(loginUser(form)).unwrap();
            console.log(response, ";")
            if (response?.success) {
                toast.success(response.message);

                const role = response?.user?.role?.toUpperCase();

                if (role === "EMPLOYEE") {
                    navigate("/dashboard");
                } else if (role === "MEMBER") {

                    const redirectUrl = localStorage.getItem(
                        "purchaseUrlGS"
                    );

                    if (redirectUrl) {

                        localStorage.removeItem(
                            "purchaseUrlGS"
                        );

                        navigate(redirectUrl);

                    } else {

                        navigate("/user");

                    }
                }
                else if (role === "HOSPITAL") {
                    navigate("/hospital");
                } else {
                    navigate("/not-found");
                }
            }
            setForm({
                email: "",
                password: ""
            });

            setSubmit(false);
        } catch (error) {
            console.log(error);
            toast.error(error || "Something went wrong");
        }
    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-white overflow-hidden">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Left Section */}
                        <div>

                            <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                                Welcome Back
                            </span>

                            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight mt-6">
                                Access Your
                                <span className="text-primary block mt-2">
                                    Healthcare Account
                                </span>
                            </h1>

                            <p className="text-gray-500 text-sm sm:text-base leading-8 mt-7 max-w-xl">
                                Sign in to manage your healthcare membership,
                                hospital discounts, emergency support,
                                and insurance assistance.
                            </p>

                            {/* Features */}
                            <div className="space-y-5 mt-10">

                                <div className="flex items-start gap-4">

                                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                                        <HeartPulse size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-black">
                                            Smart Healthcare Access
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1 leading-7">
                                            View hospitals, benefits, and healthcare support instantly.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">

                                    <div className="w-12 h-12 rounded-2xl bg-green text-white flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-black">
                                            Secure Account
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1 leading-7">
                                            Your healthcare data stays protected and encrypted.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">

                                    <div className="w-12 h-12 rounded-2xl bg-purple text-white flex items-center justify-center flex-shrink-0">
                                        <Users size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-black">
                                            Family Dashboard
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1 leading-7">
                                            Manage healthcare plans for your entire family.
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
                                        18K+
                                    </h2>

                                    <p className="text-sm text-gray-600 mt-2">
                                        Hospitals
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sign In Form */}
                        <div>

                            <div className="bg-white border border-primary-200 rounded-[40px] p-8 sm:p-10 shadow-xl">

                                <div className="text-center">

                                    <div className="w-16 h-16 rounded-3xl bg-primary text-white flex items-center justify-center mx-auto">
                                        <LogIn size={30} />
                                    </div>

                                    <h2 className="text-3xl font-bold text-black mt-6">
                                        Sign In
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-3 leading-7">
                                        Access your healthcare membership account.
                                    </p>
                                </div>

                                {/* Form */}
                                <form className="space-y-6 mt-10" onSubmit={handleSubmit}>

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
                                                value={form.email}
                                                name="email"
                                                onChange={handleChange}
                                                autoComplete='email'
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <div className="flex items-center justify-between">

                                            <label className="text-sm font-medium text-black">
                                                Password
                                            </label>

                                            <Link to={"/forget-password"}
                                                type="button"
                                                className="text-xs text-primary hover:underline"
                                            >
                                                Forgot Password?
                                            </Link>
                                        </div>

                                        <div className="relative mt-3">

                                            <Lock
                                                size={18}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                            />

                                            <input
                                                type="password"
                                                placeholder="Enter your password"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3 text-sm outline-none focus:border-primary"
                                                value={form.password}
                                                name="password"
                                                onChange={handleChange}
                                                autoComplete='current-password'
                                            />
                                        </div>
                                    </div>

                                    {/* Remember */}
                                    <div className="flex items-center justify-between gap-4">

                                        {/* <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="accent-primary"
                                            />
                                            Remember me
                                        </label> */}

                                        <span className="text-xs bg-green/10 text-green px-3 py-1 rounded-full">
                                            Secure Login
                                        </span>
                                    </div>

                                    {/* Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary-600 transition-all duration-300 text-white py-3 rounded-2xl text-sm font-semibold"
                                    >
                                        {submit === true ? <>processing</> : <>Sign In</>}
                                    </button>
                                </form>

                                {/* Divider */}
                                <div className="flex items-center gap-4 my-8">

                                    <div className="flex-1 h-[1px] bg-gray-200"></div>

                                    <span className="text-xs text-gray-400">
                                        OR
                                    </span>

                                    <div className="flex-1 h-[1px] bg-gray-200"></div>
                                </div>

                                {/* Google */}
                                {/* <button className="w-full border border-gray-200 hover:border-primary transition-all duration-300 py-3 rounded-2xl text-sm font-medium">
                                    Continue with Google
                                </button> */}

                                {/* Footer */}
                                <div className="text-center mt-8">

                                    <Link to={"/sign-up"} className="text-sm text-gray-500">
                                        Don’t have an account?
                                        <span className="text-primary font-medium cursor-pointer ml-2">
                                            Register Now
                                        </span>
                                    </Link>
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

export default SignIn