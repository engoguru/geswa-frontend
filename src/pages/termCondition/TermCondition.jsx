import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import {
    ShieldCheck,
    FileText,
    AlertTriangle,
    HeartPulse,
    CreditCard,
    Users,
    Hospital
} from 'lucide-react'

function TermCondition() {
    return (
        <>
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="text-center mb-14">

                    <div className="w-20 h-20 rounded-3xl bg-primary text-white flex items-center justify-center mx-auto shadow-xl">
                        <FileText size={36} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mt-6">
                        Terms & Conditions
                    </h1>

                    <p className="text-gray-500 mt-5 text-sm leading-7 max-w-2xl mx-auto">
                        Please read these terms and conditions carefully before
                        using the Geswa healthcare membership platform and services.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-8">

                    {/* Eligibility */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <Users size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                Membership Eligibility
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-8 text-sm">
                            Users must provide accurate personal information during
                            registration. Membership benefits are available only
                            to active members and registered family accounts.
                        </p>
                    </div>

                    {/* Healthcare Benefits */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <HeartPulse size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                Healthcare Benefits
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-8 text-sm">
                            Discounts and healthcare benefits may vary depending
                            on partner hospitals, locations, and service categories.
                            Geswa does not guarantee availability at all hospitals
                            at all times.
                        </p>
                    </div>

                    {/* Payments */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <CreditCard size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                Payment & Renewal
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-8 text-sm">
                            Membership plans must be renewed before expiration
                            to continue receiving healthcare benefits. Payments
                            once processed may be subject to company refund policies.
                        </p>
                    </div>

                    {/* Hospitals */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <Hospital size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                Partner Hospitals
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-8 text-sm">
                            Healthcare services are provided by independent
                            hospitals and healthcare partners. Service quality,
                            treatment availability, and pricing may differ
                            across hospitals and locations.
                        </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <ShieldCheck size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                User Responsibilities
                            </h2>
                        </div>

                        <ul className="space-y-4 text-sm text-gray-600 leading-7">

                            <li>
                                • Maintain confidentiality of membership details.
                            </li>

                            <li>
                                • Avoid misuse of healthcare membership services.
                            </li>

                            <li>
                                • Provide valid and updated contact information.
                            </li>

                            <li>
                                • Follow hospital and healthcare provider guidelines.
                            </li>
                        </ul>
                    </div>

                    {/* Notice */}
                    <div className="bg-primary rounded-3xl p-8 text-white shadow-xl">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                <AlertTriangle size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                Important Notice
                            </h2>
                        </div>

                        <p className="text-sm leading-8 text-gray-100">
                            Geswa acts as a healthcare membership platform and
                            does not directly provide medical treatment. All
                            medical services are provided by independent hospitals
                            and healthcare providers.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default TermCondition