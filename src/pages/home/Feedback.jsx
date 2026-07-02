import React from 'react'

function Feedback() {

    const reviews = [
        {
            name: "Rohit Sharma",
            city: "Delhi",
            review:
                "Saved more than ₹12,000 on my father's treatment. Super smooth experience and instant support.",
        },
        {
            name: "Priya Verma",
            city: "Mumbai",
            review:
                "The family plan is amazing. Easy hospital access and excellent discounts.",
        },
        {
            name: "Aman Gupta",
            city: "Bangalore",
            review:
                "Best healthcare membership service I have used till now. Very affordable and useful.",
        }
    ]

    return (
        <div className="mt-24">

            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    What Our Members Say
                </h2>

                <p className="text-gray-500 mt-4">
                    Trusted by millions across India
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

                {reviews.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-3xl p-7 shadow-md hover:shadow-xl transition"
                    >

                        {/* Stars */}
                        <div className="flex gap-1 text-yellow-400">
                            ★★★★★
                        </div>

                        <p className="text-gray-600 text-sm leading-7 mt-5">
                            "{item.review}"
                        </p>

                        {/* User */}
                        <div className="flex items-center gap-4 mt-8">

                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                {item.name.charAt(0)}
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    {item.name}
                                </h4>

                                <p className="text-xs text-gray-500">
                                    {item.city}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feedback