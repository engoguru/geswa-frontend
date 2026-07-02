import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

function PremiumMain() {

    const plans = [
        {
            id: 1,
            name: "Basic",
            price: "₹990",
            duration: "/year",
            desc: "Perfect healthcare membership for individuals.",
            color: "border-gray-200",
            button: "bg-black",
            features: [
                "1 Member Coverage",
                "Up to 20% Hospital Discount",
                "Digital Membership Card",
                "24/7 Customer Support",
                "Basic Health Assistance"
            ],
            details: {
                coverage: "Individual",
                hospitals: "5,000+ Hospitals",
                emergency: "Basic Emergency Support",
                consultation: "General Consultation",
                cashback: "5% Cashback"
            }
        },
        {
            id: 2,
            name: "Family",
            price: "₹1990",
            duration: "/year",
            desc: "Best value plan for complete family healthcare.",
            color: "border-primary border-2",
            button: "bg-primary",
            popular: true,
            features: [
                "5 Members Coverage",
                "Up to 60% Hospital Discount",
                "Priority Support",
                "Emergency Assistance",
                "Health Checkup Benefits"
            ],
            details: {
                coverage: "Family Coverage",
                hospitals: "18,000+ Hospitals",
                emergency: "24/7 Emergency Support",
                consultation: "Specialist Consultation",
                cashback: "15% Cashback"
            }
        },
        {
            id: 3,
            name: "Premium",
            price: "₹3990",
            duration: "/year",
            desc: "Advanced healthcare services with premium support.",
            color: "border-gray-200",
            button: "bg-black",
            features: [
                "Unlimited Family Members",
                "Maximum Discount Benefits",
                "Dedicated Health Advisor",
                "VIP Hospital Support",
                "Premium Wellness Services"
            ],
            details: {
                coverage: "Unlimited Family",
                hospitals: "All Premium Hospitals",
                emergency: "Dedicated Emergency Team",
                consultation: "VIP Specialist Access",
                cashback: "25% Cashback"
            }
        }
    ]

    const [selectedPlan, setSelectedPlan] = useState(plans[1])

    return (
        <>
        <Navbar/>
        <div className="bg-gray-50 min-h-screen py-16">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center">

                    <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-medium">
                        Premium Membership Plans
                    </span>

                    <h1 className="text-4xl sm:text-5xl font-bold text-black mt-6 leading-tight">
                        Choose Your Healthcare Plan
                    </h1>

                    <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
                        Select the perfect healthcare membership plan
                        designed for your medical and family needs.
                    </p>
                </div>

                {/* Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

                    {plans.map((plan) => (

                        <div
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan)}
                            className={`relative bg-white rounded-3xl p-8 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                                selectedPlan.id === plan.id
                                    ? 'border-2 border-primary shadow-2xl scale-[1.02]'
                                    : 'border border-gray-200'
                            }`}
                        >

                            {/* Popular */}
                            {plan.popular && (
                                <span className="absolute top-5 right-5 bg-primary text-white text-[10px] px-3 py-1 rounded-full">
                                    MOST POPULAR
                                </span>
                            )}

                            {/* Selected Badge */}
                            {selectedPlan.id === plan.id && (
                                <div className="absolute top-5 left-5 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                                    ✓
                                </div>
                            )}

                            <h2 className="text-3xl font-bold text-black mt-4">
                                {plan.name}
                            </h2>

                            <div className="mt-6">

                                <span className="text-5xl font-bold text-black">
                                    {plan.price}
                                </span>

                                <span className="text-gray-500 ml-2">
                                    {plan.duration}
                                </span>
                            </div>

                            <p className="text-gray-500 leading-7 mt-5">
                                {plan.desc}
                            </p>

                            {/* Features */}
                            <div className="space-y-4 mt-8">

                                {plan.features.map((feature, index) => (

                                    <div
                                        key={index}
                                        className="flex items-center gap-4"
                                    >

                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                                            ✓
                                        </div>

                                        <p className="text-sm text-gray-700">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full mt-10 py-4 rounded-2xl text-white text-sm font-medium transition ${
                                    selectedPlan.id === plan.id
                                        ? 'bg-primary'
                                        : 'bg-black hover:bg-gray-800'
                                }`}
                            >
                                {selectedPlan.id === plan.id
                                    ? 'Selected Plan'
                                    : 'Choose Plan'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Detailed Plan */}
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 mt-20 border border-gray-100">

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                        {/* Left */}
                        <div>

                            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-medium">
                                Selected Plan
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-6">
                                {selectedPlan.name} Membership
                            </h2>

                            <p className="text-gray-500 mt-5 leading-8 max-w-2xl">
                                {selectedPlan.desc}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="bg-gray-100 rounded-3xl px-10 py-8 text-center min-w-[240px]">

                            <h3 className="text-5xl font-bold text-primary">
                                {selectedPlan.price}
                            </h3>

                            <p className="text-gray-500 mt-3">
                                Per Year Membership
                            </p>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mt-14">

                        <div className="bg-gray-50 rounded-2xl p-6">

                            <p className="text-xs uppercase tracking-wide text-gray-400">
                                Coverage
                            </p>

                            <h3 className="text-lg font-semibold mt-3">
                                {selectedPlan.details.coverage}
                            </h3>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6">

                            <p className="text-xs uppercase tracking-wide text-gray-400">
                                Hospitals
                            </p>

                            <h3 className="text-lg font-semibold mt-3">
                                {selectedPlan.details.hospitals}
                            </h3>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6">

                            <p className="text-xs uppercase tracking-wide text-gray-400">
                                Emergency
                            </p>

                            <h3 className="text-lg font-semibold mt-3">
                                {selectedPlan.details.emergency}
                            </h3>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6">

                            <p className="text-xs uppercase tracking-wide text-gray-400">
                                Consultation
                            </p>

                            <h3 className="text-lg font-semibold mt-3">
                                {selectedPlan.details.consultation}
                            </h3>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6">

                            <p className="text-xs uppercase tracking-wide text-gray-400">
                                Cashback
                            </p>

                            <h3 className="text-lg font-semibold mt-3 text-primary">
                                {selectedPlan.details.cashback}
                            </h3>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-primary rounded-3xl p-8 sm:p-10 mt-16 text-white">

                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                            <div>

                                <h2 className="text-3xl font-bold">
                                    Need Specialized Assistance?
                                </h2>

                                <p className="text-white/80 mt-5 leading-8 max-w-2xl">
                                    Our healthcare advisors are available to help
                                    you choose the best membership plan according
                                    to your medical and family requirements.
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="bg-white text-black rounded-3xl p-8 min-w-[300px] shadow-2xl">

                                <h3 className="text-xl font-bold">
                                    Contact Specialist
                                </h3>

                                <div className="mt-6 space-y-5">

                                    <div>

                                        <p className="text-xs uppercase tracking-wide text-gray-400">
                                            Phone
                                        </p>

                                        <h4 className="font-semibold mt-2">
                                            +91 9973974560
                                        </h4>
                                    </div>

                                    <div>

                                        <p className="text-xs uppercase tracking-wide text-gray-400">
                                            Email
                                        </p>

                                        <h4 className="font-semibold mt-2">
                                           geswango2021@gmail.com
                                        </h4>
                                    </div>

                                    <button className="w-full bg-primary hover:opacity-90 transition text-white py-4 rounded-2xl text-sm font-medium mt-3">
                                        Request Callback
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default PremiumMain