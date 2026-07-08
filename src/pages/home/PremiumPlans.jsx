
import React from 'react'
import { Link } from 'react-router-dom'

function PremiumPlans() {

    const plans = [
        {
            name: "Basic",
            price: "₹990",
            desc: "Perfect for individuals starting healthcare savings.",
            color: "border-gray-200",
            button: "bg-black",
            features: [
                "1 Member Coverage",
                "Up to 20% Hospital Discount",
                "Digital Membership Card",
                "24/7 Support"
            ]
        },
        {
            name: "Family",
            price: "₹1990",
            desc: "Best value for complete family protection.",
            color: "border-primary border-2",
            button: "bg-primary",
            popular: true,
            features: [
                "5 Members Coverage",
                "Up to 60% Hospital Discount",
                "Priority Support",
                "Emergency Assistance"
            ]
        },
        {
            name: "Premium",
            price: "₹3990",
            desc: "Advanced healthcare support with premium services.",
            color: "border-gray-200",
            button: "bg-black",
            features: [
                "Unlimited Members",
                "Maximum Discount Access",
                "Dedicated Health Advisor",
                "VIP Hospital Support"
            ]
        }
    ]

    return (
        <div className="mt-20 ">

            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Premium Healthcare Plans
                </h2>

                <p className="text-gray-500 mt-4 text-sm sm:text-base">
                    Affordable healthcare membership for every family
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-3xl bg-white shadow-lg p-8 hover:-translate-y-2 transition duration-300 ${plan.color}`}
                    >

                        {plan.popular && (
                            <span className="absolute top-4 right-4 bg-primary text-white text-[10px] px-3 py-1 rounded-full">
                                MOST POPULAR
                            </span>
                        )}

                        <h3 className="text-2xl font-bold">
                            {plan.name}
                        </h3>

                        <div className="mt-5">
                            <span className="text-4xl font-bold">
                                {plan.price}
                            </span>

                            <span className="text-gray-500 text-sm">
                                /year
                            </span>
                        </div>

                        <p className="text-gray-500 text-sm leading-6 mt-5">
                            {plan.desc}
                        </p>

                        <div className="mt-8 space-y-4">

                            {plan.features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                        <span className="text-green-600 text-xs">
                                            ✓
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-700">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>

                  <Link
  to="/premium-plans"
  className={`block w-full mt-10 py-3 rounded-xl text-center text-white text-sm font-medium transition hover:opacity-90 ${plan.button}`}
>
  Choose Plan
</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PremiumPlans