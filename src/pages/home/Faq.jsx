import React, { useState } from 'react'

function Faq() {

    const [open, setOpen] = useState(0)

    const faqs = [
        {
            question: "How does the healthcare membership work?",
            answer:
                "You receive a digital healthcare membership card that provides discounts and benefits at partner hospitals."
        },
        {
            question: "Can I add family members later?",
            answer:
                "Yes, you can upgrade or add family members anytime from your dashboard."
        },
        {
            question: "Is the membership valid across India?",
            answer:
                "Yes, the membership is accepted at 18,000+ hospitals across multiple cities in India."
        },
        {
            question: "How quickly is the card activated?",
            answer:
                "Your digital healthcare card gets activated instantly after payment confirmation."
        }
    ]

    return (
        <div className="mt-24 mb-10">

            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Frequently Asked Questions
                </h2>

                <p className="text-gray-500 mt-4">
                    Everything you need to know
                </p>
            </div>

            {/* FAQ */}
            <div className="max-w-4xl mx-auto mt-14 space-y-5">

                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-2xl p-5 shadow-sm"
                    >

                        <button
                            onClick={() => setOpen(open === index ? null : index)}
                            className="w-full flex items-center justify-between text-left"
                        >

                            <h3 className="font-semibold text-sm sm:text-base">
                                {faq.question}
                            </h3>

                            <span className="text-2xl">
                                {open === index ? "-" : "+"}
                            </span>
                        </button>

                        {open === index && (
                            <p className="text-sm text-gray-600 leading-7 mt-4">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq