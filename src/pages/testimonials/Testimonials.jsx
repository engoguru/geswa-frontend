import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import {
    Star,
    Quote,
    HeartPulse,
    ShieldCheck,
    Users,
    Hospital
} from 'lucide-react'

function Testimonials() {

    const testimonials = [
        {
            name: "Amit Sharma",
            city: "Delhi",
            text: "Geswa helped my family save huge hospital expenses during emergency treatment. The support team was available instantly.",
            color: "bg-primary"
        },
        {
            name: "Priya Verma",
            city: "Pune",
            text: "The healthcare membership card is extremely useful. We received discounts at partner hospitals without hassle.",
            color: "bg-green"
        },
        {
            name: "Rahul Mehta",
            city: "Mumbai",
            text: "Very affordable plans and excellent insurance assistance. The onboarding process was smooth and quick.",
            color: "bg-purple"
        },
        {
            name: "Sneha Kapoor",
            city: "Bangalore",
            text: "The emergency coordination support was excellent during my father's treatment. Highly recommended healthcare platform.",
            color: "bg-yellow"
        },
        {
            name: "Vikas Singh",
            city: "Lucknow",
            text: "Affordable healthcare support for middle-class families. Their partner hospital network is very strong.",
            color: "bg-red"
        },
        {
            name: "Neha Joshi",
            city: "Jaipur",
            text: "Geswa’s digital healthcare card and support system make hospital visits stress-free and fast.",
            color: "bg-primary"
        }
    ]

    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">

                {/* Hero Section */}
                <div className="py-14 sm:py-20 text-center">

                    <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                        Real Member Experiences
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mt-7">
                        Trusted By
                        <span className="text-primary block mt-2">
                            Millions Of Families
                        </span>
                    </h1>

                    <p className="text-gray-500 text-sm sm:text-base leading-8 mt-8 max-w-2xl mx-auto">
                        Discover how Geswa is helping families across India
                        access affordable healthcare, insurance support,
                        and emergency assistance.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white border border-primary-200 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition">

                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                            <Users size={28} />
                        </div>

                        <h2 className="text-4xl font-bold text-primary mt-6">
                            2.4M+
                        </h2>

                        <p className="text-sm text-gray-500 mt-3">
                            Active Members
                        </p>
                    </div>

                    <div className="bg-green/10 border border-green/20 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition">

                        <div className="w-14 h-14 rounded-2xl bg-green text-white flex items-center justify-center">
                            <Hospital size={28} />
                        </div>

                        <h2 className="text-4xl font-bold text-green mt-6">
                            18K+
                        </h2>

                        <p className="text-sm text-gray-500 mt-3">
                            Partner Hospitals
                        </p>
                    </div>

                    <div className="bg-purple/10 border border-purple/20 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition">

                        <div className="w-14 h-14 rounded-2xl bg-purple text-white flex items-center justify-center">
                            <HeartPulse size={28} />
                        </div>

                        <h2 className="text-4xl font-bold text-purple mt-6">
                            98%
                        </h2>

                        <p className="text-sm text-gray-500 mt-3">
                            Satisfaction Rate
                        </p>
                    </div>

                    <div className="bg-yellow/10 border border-yellow/20 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition">

                        <div className="w-14 h-14 rounded-2xl bg-yellow text-white flex items-center justify-center">
                            <ShieldCheck size={28} />
                        </div>

                        <h2 className="text-4xl font-bold text-yellow mt-6">
                            24/7
                        </h2>

                        <p className="text-sm text-gray-500 mt-3">
                            Emergency Support
                        </p>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mt-24">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                            Testimonials
                        </span>

                        <h2 className="text-4xl font-bold text-black mt-6">
                            What Our Members Say
                        </h2>

                        <p className="text-gray-500 text-sm leading-8 mt-5">
                            Thousands of Indian families trust Geswa for
                            affordable healthcare and insurance support.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">

                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
                            >

                                <div className="flex items-center justify-between">

                                    <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center`}>
                                        <Quote size={26} />
                                    </div>

                                    <div className="flex items-center gap-1 text-yellow">

                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500 leading-8 mt-8">
                                    "{item.text}"
                                </p>

                                <div className="mt-8">

                                    <h3 className="text-lg font-semibold text-black">
                                        {item.name}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {item.city}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-28 mb-20 bg-gradient-to-r from-primary to-purple rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">

                    <div className="max-w-3xl relative z-10">

                        <span className="bg-white/20 px-4 py-1 rounded-full text-xs">
                            Join Geswa Today
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
                            Affordable Healthcare
                            <br />
                            For Every Family
                        </h2>

                        <p className="text-sm text-gray-100 leading-8 mt-6 max-w-2xl">
                            Become a member today and access healthcare
                            support, emergency assistance, and hospital discounts
                            across India.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10">

                            <button className="bg-white text-primary hover:bg-gray-100 transition px-7 py-3 rounded-2xl text-sm font-semibold">
                                Get Membership
                            </button>

                            <button className="border border-white/30 hover:bg-white/10 transition px-7 py-3 rounded-2xl text-sm">
                                Contact Support
                            </button>
                        </div>
                    </div>

                    {/* Decorative */}
                    <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-white/10 rounded-full"></div>

                    <div className="absolute right-16 top-10 w-28 h-28 bg-white/10 rounded-full"></div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Testimonials