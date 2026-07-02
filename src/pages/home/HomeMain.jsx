import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import PremiumPlans from './PremiumPlans'
import Feedback from './Feedback'
import Faq from './Faq'
import Partner from './Partner'


function HomeMain() {
    return (
        <>
            <Navbar />

            <div className="max-w-7xl bg-white mx-auto px-4 sm:px-6 lg:px-8 pb-16 overflow-hidden">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 pt-10">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">

                        <span className="bg-primary px-4 py-1 text-[10px] text-white rounded-lg">
                            Trusted by 2.4M Members
                        </span>

                        <h1 className="text-2xl sm:text-5xl text-black font-semibold tracking-wide leading-tight [word-spacing:4px] mt-5">
                            Affordable Healthcare, <br />
                            in every city you live.
                        </h1>

                        <p className="text-xs text-gray-500 bg-gray-100 mt-6 p-4 rounded-2xl leading-6">
                            Get up to 60% discount at 18,000+ partner hospitals.
                            Instant QR membership card, 24/7 emergency helpline,
                            and family coverage starting at ₹990/month.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">

                            <button className="bg-primary hover:bg-primary px-6 py-1 rounded-xl text-white text-sm transition">
                                Get Card
                            </button>

                            <button className="bg-black hover:bg-gray-800 px-6 py-1 rounded-xl text-white text-sm transition">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Card Section */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

                        <div className="relative w-[280px] sm:w-[350px] h-[280px] sm:h-[320px]">

                            {/* Circle */}
                            <div className="w-52 h-52 sm:w-55 sm:h-55 rounded-full bg-primary absolute right-10 top-0"></div>

                            {/* Membership Card */}
                            <div className="absolute bottom-0 sm:left-8 left-0 w-[280px] sm:w-[340px] h-[180px] bg-black rounded-3xl shadow-2xl p-5 text-white">

                                {/* Top */}
                                <div className="flex justify-between items-start">

                                    <div>
                                        <p className="text-[10px] tracking-[2px] text-gray-400 uppercase">
                                            Geswa Membership
                                        </p>

                                        <div className="mt-3">
                                            <h3 className="text-lg font-semibold">
                                                Amit Chaudhary
                                            </h3>

                                            <p className="text-[10px] text-green mt-1 tracking-wide">
                                                FAMILY PLAN • ACTIVE
                                            </p>
                                        </div>
                                    </div>

                                    {/* Logo */}
                                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                                        <span className="text-xs font-bold">
                                            G
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom */}
                                <div className="mt-8">

                                    <h4 className="tracking-[3px] text-sm font-medium">
                                        ID: 1234 5678 9012
                                    </h4>

                                    <div className="flex items-center justify-between mt-4">

                                        <p className="text-[10px] text-gray-400">
                                            Valid Till: 31 Dec 2026
                                        </p>

                                        <span className="text-[8px] px-3 py-0.5 border border-red-500 rounded-full text-red-400 font-semibold animate-pulse">
                                            RE-NEW
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-5 mt-20">

                    <div className="flex-1 min-w-[220px] bg-gray-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
                        <h2 className="text-3xl font-bold text-primary-500">
                            18,000+
                        </h2>

                        <p className="text-sm text-gray-500 mt-2">
                            Hospitals
                        </p>
                    </div>

                    <div className="flex-1 min-w-[220px] bg-gray-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
                        <h2 className="text-3xl font-bold text-primary-500">
                            2.4M
                        </h2>

                        <p className="text-sm text-gray-500 mt-2">
                            Active Members
                        </p>
                    </div>

                    <div className="flex-1 min-w-[220px] bg-gray-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
                        <h2 className="text-3xl font-bold text-primary-500">
                            1,200+
                        </h2>

                        <p className="text-sm text-gray-500 mt-2">
                            Health Advisors
                        </p>
                    </div>

                    <div className="flex-1 min-w-[220px] bg-gray-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
                        <h2 className="text-3xl font-bold text-primary-500">
                            98%
                        </h2>

                        <p className="text-sm text-gray-500 mt-2">
                            Customer Satisfaction
                        </p>
                    </div>
                </div>

                {/* How its work */}
                <div className="mt-20 shadow-lg border border-gray-200">

                    {/* Heading */}
                    <div className=" mb-12 ">
                        <h2 className="text-3xl font-bold text-black">
                            How It Works!
                        </h2>

                        <p className="text-gray-500 text-sm mt-3">
                            Get your healthcare membership in 4 simple steps
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="flex flex-wrap gap-5">

                        {/* Card 1 */}
                        <div className="flex-1 min-w-[220px] bg-gray-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-lg font-bold">
                                1
                            </div>

                            <h3 className="text-lg font-semibold mt-5">
                                Choose Plan
                            </h3>

                            <p className="text-sm text-gray-500 mt-2 leading-6">
                                Select individual or family healthcare membership.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex-1 min-w-[220px] bg-gray-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-full bg-green text-white flex items-center justify-center mx-auto text-lg font-bold">
                                2
                            </div>

                            <h3 className="text-lg font-semibold mt-5">
                                Complete Registration
                            </h3>

                            <p className="text-sm text-gray-500 mt-2 leading-6">
                                Fill your details and activate your membership instantly.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex-1 min-w-[220px] bg-gray-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-full bg-purple text-white flex items-center justify-center mx-auto text-lg font-bold">
                                3
                            </div>

                            <h3 className="text-lg font-semibold mt-5">
                                Get Digital Card
                            </h3>

                            <p className="text-sm text-gray-500 mt-2 leading-6">
                                Receive your smart healthcare membership card instantly.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="flex-1 min-w-[220px] bg-gray-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-full bg-red text-white flex items-center justify-center mx-auto text-lg font-bold">
                                4
                            </div>

                            <h3 className="text-lg font-semibold mt-5">
                                Start Saving
                            </h3>

                            <p className="text-sm text-gray-500 mt-2 leading-6">
                                Enjoy discounts and healthcare benefits at partner hospitals.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="">
                  <Partner/>
                </div>
                {/* Premium Plan */}
                <div className="">
                    <PremiumPlans />
                </div>

                {/* Feed Back */}
                <div className="">
                    <Feedback />
                </div>
                {/* FAQ */}
                <div className="">
                    <Faq />
                </div>

            </div>

            <Footer />
        </>
    )
}

export default HomeMain