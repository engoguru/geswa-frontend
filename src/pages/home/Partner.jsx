// this ise used show at home page

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllPartner } from '../../reduxStore/slice/partnerSlice'

function Partner() {
    const dispatch = useDispatch()

    const { partners } = useSelector((state) => state?.hospital)
    useEffect(() => {
        dispatch(fetchAllPartner())
    }, [])

    return (
        <section className="mt-24">

            {/* Heading */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

                <div>

                    <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-medium">
                        Trusted Healthcare Network
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-black mt-5 leading-tight">
                        Our Partner Hospitals
                    </h2>

                    <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl leading-7">
                        Access exclusive healthcare discounts and priority services
                        at India's leading hospitals with your Geswa membership card.
                    </p>
                </div>

                <Link className="bg-primary hover:opacity-90 transition text-white px-6 py-3 rounded-xl text-sm font-medium shadow-md" to={`/partners`}>
                    View All Hospitals
                </Link>
            </div>

            {/* Hospital Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
                {partners?.data?.map((hospital) => (
                    <div
                        key={hospital.id}
                        className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        {/* Image */}
                        <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
                            <img
                                src={hospital.imageUrl}
                                alt={hospital.name}
                                className="max-h-full max-w-full object-contain"
                            />

                            <div
                                className={`absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold ${hospital.color}`}
                            >
                                {hospital.letter}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {hospital.name}
                            </h3>

                            <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                                {hospital.tagline}
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                                {hospital.city}
                            </p>

                            {/* Rating */}
                            <div className="mt-5 flex items-center gap-3">
                                <div className="text-yellow-400">★★★★★</div>
                                <span className="text-sm text-gray-500">
                                    {hospital.rating} Rating
                                </span>
                            </div>

                            {/* Features */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {hospital?.services.map((data, index) => {
                                    return (
                                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                                            {data}
                                        </span>)
                                })}


                            
                            </div>

                            {/* Footer */}
                            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-400">
                                        Discount
                                    </p>

                                    <p className="mt-1 text-2xl font-bold text-primary">
                                        {hospital.discount}
                                    </p>
                                </div>

                                <Link
                                    to={`/partners-details/${hospital.id}`}
                                    className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="bg-gray-100 rounded-3xl p-8 sm:p-10 mt-16 flex flex-col lg:flex-row items-center justify-between gap-8">

                <div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-black">
                        18,000+ Hospitals Across India
                    </h3>

                    <p className="text-gray-500 mt-4 leading-7 max-w-2xl">
                        Join millions of members enjoying affordable healthcare
                        services and premium medical support nationwide.
                    </p>
                </div>

                <button className="bg-primary hover:opacity-90 transition text-white px-8 py-4 rounded-2xl text-sm font-semibold whitespace-nowrap shadow-lg">
                    Get Membership Card
                </button>
            </div>
        </section>
    )
}

export default Partner