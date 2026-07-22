import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import {
    HeartPulse,
    ShieldCheck,
    BadgeCheck,
    Users,
    Hospital,
    Globe,
    PhoneCall,
    CreditCard,
    Stethoscope,
    Activity,
    Building2
} from 'lucide-react'
import { Link } from 'react-router-dom'

function AboutMain() {
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 overflow-hidden">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-14 items-center min-h-[80vh]">

                    {/* Left */}
                    <div className="w-full lg:w-1/2">

                        <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                            India’s Trusted Healthcare Membership Platform
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mt-7 leading-tight">
                            Healthcare should never be a privilege.
                            <span className="text-primary block mt-2">
                                It must be a right.
                            </span>
                        </h1>

                        <p className="text-gray-500 text-sm sm:text-base leading-8 mt-7 max-w-xl">
                            Founded in 2019, Geswa partners with 18,000+
                            hospitals across India to deliver affordable
                            healthcare memberships, emergency assistance,
                            insurance coordination, and family healthcare support.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-10">

                            <Link to={"/premium-plans/2"} className="bg-primary hover:bg-primary-600 transition-all duration-300 text-white px-7 py-3 rounded-2xl text-sm font-medium shadow-lg">
                                Get Membership
                            </Link>

                            <Link to={"/partners"} className="border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-7 py-3 rounded-2xl text-sm font-medium">
                                Explore Services
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-14">

                            <div className="bg-white border border-primary-200 rounded-3xl p-5 shadow-sm">
                                <h3 className="text-3xl font-bold text-primary">
                                    18K+
                                </h3>

                                <p className="text-sm text-gray-500 mt-2">
                                    Hospitals
                                </p>
                            </div>

                            <div className="bg-green/10 border border-green/20 rounded-3xl p-5 shadow-sm">
                                <h3 className="text-3xl font-bold text-green">
                                    2.4M
                                </h3>

                                <p className="text-sm text-gray-500 mt-2">
                                    Members
                                </p>
                            </div>

                            <div className="bg-purple/10 border border-purple/20 rounded-3xl p-5 shadow-sm col-span-2 sm:col-span-1">
                                <h3 className="text-3xl font-bold text-purple">
                                    24/7
                                </h3>

                                <p className="text-sm text-gray-500 mt-2">
                                    Support
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="w-full lg:w-1/2 relative">

                        {/* Main Circle */}
                        <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-gradient-to-br from-primary to-primary-600 rounded-full mx-auto relative">

                            {/* Card */}
                            <div className="absolute top-1/2 -left-4 sm:-left-14 -translate-y-1/2 w-[300px] sm:w-[380px] bg-black rounded-[36px] p-7 shadow-2xl border border-white/10">

                                {/* Top */}
                                <div className="flex justify-between items-start">

                                    <div>

                                        <p className="text-primary-200 text-[11px] tracking-[2px] uppercase">
                                            Geswa Healthcare+
                                        </p>

                                        <h3 className="text-white text-2xl font-semibold mt-4">
                                            Family Protection
                                        </h3>

                                        <p className="text-green text-xs mt-2 tracking-wide">
                                            ACTIVE MEMBERSHIP
                                        </p>
                                    </div>

                                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                                        <HeartPulse className="text-white" size={28} />
                                    </div>
                                </div>

                                {/* Middle */}
                                <div className="mt-10 space-y-4">

                                    <div className="flex items-center justify-between bg-white/5 rounded-2xl p-4">

                                        <div>
                                            <p className="text-gray-400 text-xs">
                                                Partner Hospitals
                                            </p>

                                            <h4 className="text-white text-lg font-semibold mt-1">
                                                18,000+
                                            </h4>
                                        </div>

                                        <Hospital className="text-primary" size={30} />
                                    </div>

                                    <div className="flex items-center justify-between bg-white/5 rounded-2xl p-4">

                                        <div>
                                            <p className="text-gray-400 text-xs">
                                                Emergency Support
                                            </p>

                                            <h4 className="text-white text-lg font-semibold mt-1">
                                                24/7 Active
                                            </h4>
                                        </div>

                                        <PhoneCall className="text-green" size={30} />
                                    </div>
                                </div>

                                {/* Bottom */}
                                <div className="mt-8 flex items-center justify-between">

                                    <div>
                                        <p className="text-gray-400 text-xs">
                                            Membership Status
                                        </p>

                                        <p className="text-white text-sm font-medium mt-1">
                                            Premium Family Plan
                                        </p>
                                    </div>

                                    <span className="bg-green/20 text-green text-[10px] px-4 py-1 rounded-full border border-green/30 animate-pulse">
                                        VERIFIED
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Vision Values */}
                <div className="mt-28">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="bg-yellow/10 text-yellow px-4 py-1 rounded-full text-xs font-medium">
                            Our Foundation
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-black mt-6 leading-tight">
                            Built Around Trust, Accessibility,
                            and Healthcare Support.
                        </h2>

                        <p className="text-gray-500 text-sm leading-8 mt-6">
                            We are creating India’s most trusted healthcare
                            ecosystem where families can access hospitals,
                            insurance assistance, and emergency healthcare support
                            without financial stress.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16">

                        {/* Mission */}
                        <div className="bg-white border border-primary-200 rounded-[36px] p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="w-16 h-16 rounded-3xl bg-primary text-white flex items-center justify-center shadow-lg">
                                <HeartPulse size={30} />
                            </div>

                            <h3 className="text-2xl font-semibold mt-7 text-black">
                                Our Mission
                            </h3>

                            <p className="text-sm text-gray-500 leading-8 mt-5">
                                Making quality healthcare affordable and
                                accessible for every family through smart
                                healthcare memberships.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-black rounded-[36px] p-8 shadow-2xl text-white">

                            <div className="w-16 h-16 rounded-3xl bg-primary flex items-center justify-center shadow-lg">
                                <ShieldCheck size={30} />
                            </div>

                            <h3 className="text-2xl font-semibold mt-7">
                                Our Vision
                            </h3>

                            <p className="text-sm text-primary-200 leading-8 mt-5">
                                Building India’s largest healthcare network
                                connecting hospitals, insurance, and members.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="bg-purple/10 border border-purple/20 rounded-[36px] p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="w-16 h-16 rounded-3xl bg-purple text-white flex items-center justify-center shadow-lg">
                                <BadgeCheck size={30} />
                            </div>

                            <h3 className="text-2xl font-semibold mt-7 text-black">
                                Our Values
                            </h3>

                            <p className="text-sm text-gray-600 leading-8 mt-5">
                                Transparency, trust, affordability, and
                                customer-first healthcare experiences guide us.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-28">

                    <div className="text-center">

                        <span className="bg-green/10 text-green px-4 py-1 rounded-full text-xs font-medium">
                            What We Provide
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-black mt-6">
                            Complete Healthcare Solutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">

                        <div className="bg-gray-50 rounded-[32px] p-8 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100">

                            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <CreditCard size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                Smart Membership
                            </h3>

                            <p className="text-sm text-gray-500 leading-7 mt-4">
                                Instant healthcare access with digital membership cards.
                            </p>
                        </div>

                        <div className="bg-green/10 rounded-[32px] p-8 hover:-translate-y-1 transition-all duration-300 border border-green/20">

                            <div className="w-14 h-14 rounded-2xl bg-green text-white flex items-center justify-center">
                                <Hospital size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                Hospital Network
                            </h3>

                            <p className="text-sm text-gray-600 leading-7 mt-4">
                                Access trusted hospitals across cities and towns.
                            </p>
                        </div>

                        <div className="bg-yellow/10 rounded-[32px] p-8 hover:-translate-y-1 transition-all duration-300 border border-yellow/20">

                            <div className="w-14 h-14 rounded-2xl bg-yellow text-white flex items-center justify-center">
                                <Stethoscope size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                Doctor Assistance
                            </h3>

                            <p className="text-sm text-gray-600 leading-7 mt-4">
                                Dedicated healthcare coordinators for every member.
                            </p>
                        </div>

                        <div className="bg-red/10 rounded-[32px] p-8 hover:-translate-y-1 transition-all duration-300 border border-red/20">

                            <div className="w-14 h-14 rounded-2xl bg-red text-white flex items-center justify-center">
                                <Activity size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                Emergency Care
                            </h3>

                            <p className="text-sm text-gray-600 leading-7 mt-4">
                                24/7 emergency support during hospital admissions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-28 bg-gradient-to-r from-primary to-purple rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">

                    <div className="max-w-3xl relative z-10">

                        <span className="bg-white/20 px-4 py-1 rounded-full text-xs">
                            Join The Healthcare Revolution
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-7">
                            Affordable Healthcare <br />
                            For Every Indian Family
                        </h2>

                        <p className="text-sm text-gray-100 leading-8 mt-6 max-w-2xl">
                            Join millions of members already saving on healthcare
                            expenses with Geswa’s healthcare membership ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10">

                            <Link to={"/premium-plans/2"} className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 px-7 py-3 rounded-2xl text-sm font-semibold shadow-lg">
                                Get Membership
                            </Link>

                            <Link to={"/contact"} className="border border-white/30 hover:bg-white/10 transition-all duration-300 px-7 py-3 rounded-2xl text-sm">
                                Contact Sales
                            </Link>
                        </div>
                    </div>

                    {/* Decorative */}
                    <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-white/10 rounded-full"></div>

                    <div className="absolute right-20 top-10 w-32 h-32 bg-white/10 rounded-full"></div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default AboutMain