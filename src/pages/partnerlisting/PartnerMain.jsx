import React, { useEffect, useState } from 'react'
import PartnerFilter from './PartnerFilter'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPartner } from '../../reduxStore/slice/partnerSlice'
import { Star } from "lucide-react";
function PartnerMain() {
    const dispatch = useDispatch()
    const [openFilter, setOpenFilter] = useState(false)
    const filters = useSelector(
        (state) => state.partnerFilter
    );
    const [currentPage, setCurrentPage] = useState(1)
    const { page } = useSelector((state) => state.partnerFilter);

    console.log(filters);
    const { partners } = useSelector((state) => state?.hospital)
    useEffect(() => {
        dispatch(fetchAllPartner(filters))
    }, [filters])
    // useSelector
    const handlePrevious = () => {
        if (page > 1) {
            dispatch(setPage(page - 1));
        }
    };
    const handleNext = () => {
        if (page < partners?.totalPages) {
            dispatch(setPage(page + 1));
        }
    };
    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen">

                {/* Header */}
                <div className="bg-white border-b border-gray-200">

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                            <div>

                                <h1 className="text-3xl sm:text-4xl font-bold text-black">
                                    Partner Hospitals
                                </h1>

                                <p className="text-gray-500 mt-3 text-sm sm:text-base">
                                    Explore trusted hospitals across India with healthcare discounts.
                                </p>
                            </div>

                            {/* Mobile Filter Button */}
                            <button
                                onClick={() => setOpenFilter(true)}
                                className="lg:hidden bg-primary text-white px-5 py-3 rounded-xl text-sm font-medium shadow-md"
                            >
                                Open Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Layout */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                    <div className="flex gap-8">

                        {/* Desktop Sidebar */}
                        <div className="hidden lg:block w-[300px] flex-shrink-0">
                            <PartnerFilter />
                        </div>

                        {/* Mobile Sidebar Overlay */}
                        <div
                            className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${openFilter
                                ? 'visible bg-black/40'
                                : 'invisible bg-black/0'
                                }`}
                        >

                            {/* Sidebar */}
                            <div
                                className={`absolute top-0 left-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ${openFilter
                                    ? 'translate-x-0'
                                    : '-translate-x-full'
                                    }`}
                            >

                                <PartnerFilter setOpenFilter={setOpenFilter} />
                            </div>

                            {/* Close Area */}
                            <div
                                className="w-full h-full"
                                onClick={() => setOpenFilter(false)}
                            />
                        </div>

                        {/* Hospital Cards */}
                        <div className="flex-1">

                            {/* Top Bar */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

                                <p className="text-sm text-gray-500">
                                    Showing 18,000+ partner hospitals
                                </p>

                                <select className="border border-gray-200 bg-white px-4 py-3 rounded-xl text-sm outline-none">
                                    <option>Sort By</option>
                                    <option>Highest Rating</option>
                                    <option>Nearest</option>
                                    <option>Maximum Discount</option>
                                </select>
                            </div>

                            {/* Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {partners?.data?.map((hospital) => (
                                    <div
                                        key={hospital.id}
                                        className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        {/* Image */}
                                        <div className="h-56 bg-gray-50 flex items-center justify-center p-5">
                                            <img
                                                src={hospital.imageUrl}
                                                alt={hospital.name}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-1 flex-col p-6">
                                            {/* Name */}
                                            <div className="flex items-start justify-between gap-3">
                                                <h2 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2">
                                                    {hospital.name}
                                                </h2>

                                                <span className="whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700">
                                                    Available
                                                </span>
                                            </div>

                                            {/* Location */}
                                            <p className="mt-2 text-sm text-gray-500">
                                                {hospital.city}, {hospital.state}
                                            </p>

                                            {/* Rating */}
                                            <div className="mt-4 flex items-center gap-2">
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star
                                                            key={star}
                                                            size={16}
                                                            className={
                                                                hospital.rating >= star
                                                                    ? "fill-yellow-400 text-yellow-400"
                                                                    : "text-gray-300"
                                                            }
                                                        />
                                                    ))}
                                                </div>

                                                <span className="text-sm text-gray-500">
                                                    {hospital.rating}
                                                </span>
                                            </div>

                                            {/* Services */}
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {hospital?.services?.slice(0, 4).map((service, index) => (
                                                    <span
                                                        key={index}
                                                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                                                    >
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Footer */}
                                            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                                                <div>
                                                    <p className="text-xs text-gray-500">Discount</p>

                                                    <h4 className="text-2xl font-bold text-primary">
                                                        {hospital.discount}
                                                    </h4>
                                                </div>

                                                <Link
                                                    to={`/partners-details/${hospital.id}`}
                                                    className="rounded-xl bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className=" ">
                                <div className="flex gap-2 justify-center pt-5">

                                    <button
                                        onClick={handlePrevious}
                                        className="border border-gray-300 px-4 py-1 rounded"
                                    >
                                        Previous
                                    </button>

                                    <span className="px-4">
                                        Page {page} of {partners?.totalPages}
                                    </span>

                                    <button
                                        onClick={handleNext}
                                        className="border border-gray-300 px-4 py-1 rounded"
                                    >
                                        Next
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

export default PartnerMain