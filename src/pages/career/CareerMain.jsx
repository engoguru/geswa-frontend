import React, { useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import {
    Briefcase,
    Users,
    HeartPulse,
    Globe,
    BadgeCheck,
    ArrowRight,
    Laptop,
    PhoneCall,
    Building2,
    Clock3,
    ShieldCheck
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { viewAllJob } from '../../reduxStore/slice/careerSlice'

function CareerMain() {
    const dispatch = useDispatch()

    const { jobs } = useSelector((state) => state.jobData)


    useEffect(() => {
        dispatch(viewAllJob())
    }, [])

    // job- banner card
    const jobcard = jobs?.data?.[0]


    console.log(jobs)

    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">

                {/* Hero Section */}
                <div className="py-14 sm:py-20">

                    <div className="flex flex-col lg:flex-row items-center gap-14">

                        {/* Left */}
                        <div className="w-full lg:w-1/2">

                            <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                                Careers At Geswa
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mt-6">
                                Build The Future
                                <span className="block text-primary mt-2">
                                    Of Healthcare
                                </span>
                            </h1>

                            <p className="text-gray-500 text-sm sm:text-base leading-8 mt-8 max-w-xl">
                                Join a fast-growing healthcare platform helping
                                millions of Indian families access affordable
                                healthcare memberships, insurance support,
                                and emergency assistance.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-10">

                                <button className="bg-primary hover:bg-primary-600 transition-all duration-300 text-white px-7 py-3 rounded-2xl text-sm font-medium shadow-lg">
                                    Explore Jobs
                                </button>

                                <button className="border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-7 py-3 rounded-2xl text-sm font-medium">
                                    Learn More
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-14">

                                <div className="bg-white border border-primary-200 rounded-3xl p-5 shadow-sm">

                                    <h3 className="text-3xl font-bold text-primary">
                                        150+
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-2">
                                        Team Members
                                    </p>
                                </div>

                                <div className="bg-green/10 border border-green/20 rounded-3xl p-5 shadow-sm">

                                    <h3 className="text-3xl font-bold text-green">
                                        18+
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-2">
                                        Cities
                                    </p>
                                </div>

                                <div className="bg-purple/10 border border-purple/20 rounded-3xl p-5 shadow-sm col-span-2 sm:col-span-1">

                                    <h3 className="text-3xl font-bold text-purple">
                                        24/7
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-2">
                                        Innovation
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

                            <div className="w-full max-w-[420px]">

                                {/* Career Card */}
                                <div className="bg-black rounded-[32px] p-5 sm:p-7 shadow-2xl border border-white/10">

                                    {/* Top */}
                                    <div className="flex justify-between items-start gap-4">

                                        <div>

                                            <p className="text-primary-200 text-[11px] tracking-[2px] uppercase">
                                                We Are Hiring
                                            </p>

                                            <div className="mt-4">

                                                <h3 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
                                                    {jobcard?.title}
                                                </h3>

                                                <p className="text-green text-xs mt-2 tracking-wide">
                                                    {jobcard?.employmentType}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Icon */}
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg flex-shrink-0">
                                            <Briefcase className="text-white" size={26} />
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                                        <div className="bg-white/5 rounded-2xl p-4">

                                            <p className="text-gray-400 text-[11px]">
                                                Experience
                                            </p>

                                            <h4 className="text-white text-lg font-semibold mt-2">
                                                {jobcard?.experience}
                                            </h4>
                                        </div>

                                        <div className="bg-white/5 rounded-2xl p-4">

                                            <p className="text-gray-400 text-[11px]">
                                                Salary
                                            </p>

                                            <h4 className="text-green text-md font-semibold mt-2">
                                                {jobcard?.salaryRange}
                                            </h4>
                                        </div>
                                    </div>

                                    {/* Bottom */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">


                                        <span className="w-fit bg-green/20 text-green text-[10px] px-4 py-1 rounded-full border border-green/30 animate-pulse">
                                            OPEN
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Join */}
                <div className="mt-10">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                            Why Join Us
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-black mt-6 leading-tight">
                            A Team Focused On
                            Growth & Innovation
                        </h2>

                        <p className="text-gray-500 text-sm leading-8 mt-6">
                            We build meaningful healthcare products while creating
                            a culture of collaboration, learning, and ownership.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                        <div className="bg-white border border-primary-200 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <Laptop size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                Remote Friendly
                            </h3>

                            <p className="text-sm text-gray-500 leading-7 mt-4">
                                Flexible work environment with remote and hybrid roles.
                            </p>
                        </div>

                        <div className="bg-green/10 border border-green/20 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="w-14 h-14 rounded-2xl bg-green text-white flex items-center justify-center">
                                <Users size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                Strong Culture
                            </h3>

                            <p className="text-sm text-gray-600 leading-7 mt-4">
                                Work with supportive teams and passionate builders.
                            </p>
                        </div>

                        <div className="bg-purple/10 border border-purple/20 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="w-14 h-14 rounded-2xl bg-purple text-white flex items-center justify-center">
                                <HeartPulse size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                Health Benefits
                            </h3>

                            <p className="text-sm text-gray-600 leading-7 mt-4">
                                Healthcare membership and wellness support included.
                            </p>
                        </div>

                        <div className="bg-yellow/10 border border-yellow/20 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="w-14 h-14 rounded-2xl bg-yellow text-white flex items-center justify-center">
                                <BadgeCheck size={28} />
                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                Career Growth
                            </h3>

                            <p className="text-sm text-gray-600 leading-7 mt-4">
                                Learn fast and grow with high-impact opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Open Roles */}
                <div className="mt-28">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                        <div>

                            <span className="bg-green/10 text-green px-4 py-1 rounded-full text-xs font-medium">
                                Open Positions
                            </span>

                            <h2 className="text-4xl font-bold text-black mt-5">
                                Current Opportunities
                            </h2>
                        </div>


                    </div>

                    {/* Jobs */}
                    <div className="space-y-6 mt-14">

                        {/* Job 1 */}
                        {jobs?.data?.map((job, index) => {
                            return (
                            <div className="bg-white border border-primary-200 rounded-[32px] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                                    <div>

                                        <div className="flex flex-wrap gap-3">


                                            <span className="bg-green/10 text-green text-xs px-3 py-1 rounded-full">
                                                {job?.employmentType}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-semibold text-black mt-5">
                                            {job?.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-5 mt-5 text-sm text-gray-500">

                                            <div className="flex items-center gap-2">
                                                <Building2 size={16} />
                                                {job?.location}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Clock3 size={16} />
                                                {job?.experience}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Globe size={16} />
                                                India
                                            </div>
                                        </div>
                                    </div>

                                    <Link to={`/job-detail/${job?.id}`} className="bg-primary hover:bg-primary-600 transition-all duration-300 text-white px-7 py-3 rounded-2xl text-sm font-medium flex items-center gap-2">
                                        Apply Now
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                       ) })}




                    </div>
                </div>

                {/* CTA */}
                <div className="mt-28 mb-20 bg-gradient-to-r from-primary to-purple rounded-[40px] p-8 sm:p-12 md:p-16 text-white relative overflow-hidden">

                    <div className="max-w-3xl relative z-10">

                        <span className="bg-white/20 px-4 py-1 rounded-full text-xs">
                            Join Geswa
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-7">
                            Ready To Create Impact?
                        </h2>

                        <p className="text-sm text-gray-100 leading-8 mt-6 max-w-2xl">
                            Help us transform healthcare accessibility across India
                            while building a meaningful and rewarding career.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10">

                            <button className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 px-7 py-3 rounded-2xl text-sm font-semibold shadow-lg">
                                Apply Now
                            </button>

                            <button className="border border-white/30 hover:bg-white/10 transition-all duration-300 px-7 py-3 rounded-2xl text-sm">
                                Contact HR
                            </button>
                        </div>
                    </div>

                    {/* Decorative */}
                    <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full"></div>

                    <div className="absolute right-20 top-10 w-28 h-28 bg-white/10 rounded-full"></div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default CareerMain