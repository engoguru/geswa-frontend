import React, { useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOnePartner } from '../../reduxStore/slice/partnerSlice'

function PartnerDetail() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { partnerOne } = useSelector((state) => state?.hospital)
    useEffect(() => {
        dispatch(fetchOnePartner(id))
    }, [id])


    return (
        <>
            <Navbar />

            <div className="bg-gray-50 min-h-screen">

                {/* Hero Section */}
                <section className="relative">

                    {/* Banner */}
                    <div className="h-[260px] sm:h-[320px] lg:h-[380px] bg-gradient-to-r from-primary to-blue-500">

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">

                            <div className="flex flex-col justify-center h-full text-white">

                                <span className="bg-white/20 backdrop-blur-md w-fit px-4 py-2 rounded-full text-xs sm:text-sm">
                                    Partner Hospital
                                </span>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6">
                                    {partnerOne?.data?.name}
                                </h1>

                                <p className="mt-5 text-sm sm:text-base text-white/90 max-w-2xl leading-7">
                                    {partnerOne?.data?.tagline}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-4 mt-6">

                                    <div className="text-yellow-300 text-lg">
                                        ★★★★★
                                    </div>

                                    <p className="text-sm sm:text-base">
                                        {partnerOne?.data?.rating} Rating • {partnerOne?.data?.reviews} Reviews
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Card */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 -mt-16 relative z-10">

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                <div>

                                    <p className="text-xs uppercase tracking-wide text-gray-400">
                                        Location
                                    </p>

                                    <h3 className="text-lg font-semibold mt-2">
                                        {partnerOne?.data?.city},{partnerOne?.data?.state}
                                    </h3>
                                </div>

                                <div>

                                    <p className="text-xs uppercase tracking-wide text-gray-400">
                                        Discount
                                    </p>

                                    <h3 className="text-lg font-semibold text-primary mt-2">
                                        Up To 60%
                                    </h3>
                                </div>

                                <div>

                                    <p className="text-xs uppercase tracking-wide text-gray-400">
                                        Emergency
                                    </p>

                                    <h3 className="text-lg font-semibold mt-2">
                                        {partnerOne?.data?.availability}
                                    </h3>
                                </div>

                                <div className="flex items-center lg:justify-end">

                                    <button className="w-full lg:w-auto bg-primary hover:opacity-90 transition text-white px-8 py-4 rounded-2xl text-sm font-medium shadow-lg">
                                        <Link to={"/premium-plans"}>
                                            Book Appointment
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* About */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                                <h2 className="text-2xl font-bold text-black">
                                    About Hospital
                                </h2>

                                <p className="text-gray-600 leading-8 mt-6">
                                    {partnerOne?.data?.about},
                                </p>


                            </div>

                            {/* Services */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                                <h2 className="text-2xl font-bold text-black">
                                    Services & Facilities
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

                                    {partnerOne?.data?.services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5"
                                        >

                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                ✓
                                            </div>

                                            <p className="text-gray-700 font-medium">
                                                {service}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Doctors */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                                <div className="flex items-center justify-between">

                                    <h2 className="text-2xl font-bold text-black">
                                        Top Doctors
                                    </h2>

                                    <button className="text-primary text-sm font-medium">
                                        View All
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

                                    {partnerOne?.data?.doctors.map((doctor, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 rounded-3xl p-6 text-center hover:shadow-lg transition"
                                        >

                                            <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto">
                                                {/* {doctor.name.charAt(3)} */}
                                                <img
                                                    src={doctor?.imageUrl || "/default-doctor.png"}
                                                    alt={doctor?.name || "Doctor"}
                                                    width={100}
                                                    height={50}
                                                />
                                            </div>

                                            <h3 className="text-lg font-semibold mt-5">
                                                {doctor.name}
                                            </h3>

                                            <p className="text-sm text-gray-500 mt-2">
                                                {doctor.specialty} || {doctor?.experience} years
                                            </p>

                                            <button className="mt-6 bg-black hover:bg-gray-800 transition text-white px-5 py-2 rounded-xl text-sm">
                                                Consult
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="space-y-8">

                            {/* Membership Card */}
                            <div className="bg-black rounded-3xl p-7 text-white shadow-xl">

                                <p className="uppercase tracking-[3px] text-gray-400 text-[10px]">
                                    Geswa Membership
                                </p>

                                <div className="mt-8">

                                    <h3 className="text-2xl font-semibold">
                                        Save Up To 60%
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-7 mt-4">
                                        Use your membership card and unlock
                                        healthcare discounts instantly.
                                    </p>
                                </div>

                                <button className="w-full mt-8 bg-primary hover:opacity-90 transition text-white py-4 rounded-2xl text-sm font-medium">
                                    Get Membership
                                </button>
                            </div>

                            {/* Hospital Info */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                                <h2 className="text-xl font-bold text-black">
                                    Hospital Information
                                </h2>

                                <div className="space-y-6 mt-8">

                                    <div>

                                        <p className="text-xs uppercase tracking-wide text-gray-400">
                                            Address
                                        </p>

                                        <p className="text-gray-700 mt-2 leading-7">
                                            {partnerOne?.data?.address}
                                        </p>
                                    </div>

                                    <div>

                                        <p className="text-xs uppercase tracking-wide text-gray-400">
                                            Contact
                                        </p>

                                        <p className="text-gray-700 mt-2">
                                            {partnerOne?.data?.contact}
                                        </p>
                                    </div>

                                    <div>

                                        <p className="text-xs uppercase tracking-wide text-gray-400">
                                            Working Hours
                                        </p>

                                        <p className="text-gray-700 mt-2">
                                            {partnerOne?.data?.availability}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency */}
                            <div className="bg-red-500 rounded-3xl p-8 text-white">

                                <h3 className="text-2xl font-bold">
                                    Emergency Support
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/90">
                                    Immediate medical support available
                                    for Geswa members 24/7.
                                </p>

                                <button className="w-full mt-7 bg-white text-red-500 py-4 rounded-2xl text-sm font-semibold hover:bg-gray-100 transition">
                                    <Link to={'/contact'}>
                                      Call Emergency
                                    </Link>
                                  
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}

export default PartnerDetail