import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import {
    ShieldCheck,
    Lock,
    Database,
    Eye,
    FileText,
    UserCheck
} from 'lucide-react'

function PrivacyMain() {
    return (
        <>
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="text-center mb-14">

                    <div className="w-20 h-20 rounded-3xl bg-primary text-white flex items-center justify-center mx-auto shadow-xl">
                        <ShieldCheck size={36} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mt-6">
                        Privacy Policy
                    </h1>

                    <p className="text-gray-500 mt-5 text-sm leading-7 max-w-2xl mx-auto">
                        Your privacy is important to us. This policy explains how
                        Geswa collects, uses, and protects your personal information.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-8">

                    {/* Data Collection */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <Database size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                Information We Collect
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-8 text-sm">
                            We may collect personal details such as your name,
                            phone number, email address, healthcare preferences,
                            and membership-related information during registration
                            and service usage.
                        </p>
                    </div>

                    {/* Data Usage */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <FileText size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                How We Use Your Information
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-8 text-sm">
                            Your information is used to manage memberships,
                            improve healthcare services, provide customer support,
                            process payments, and communicate important updates
                            related to your account.
                        </p>
                    </div>

                    {/* Security */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <Lock size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                Data Security
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-8 text-sm">
                            Geswa implements industry-standard security practices
                            to protect user information against unauthorized access,
                            misuse, or disclosure.
                        </p>
                    </div>

                    {/* Sharing */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <Eye size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                Information Sharing
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-8 text-sm">
                            We do not sell user data. Information may only be
                            shared with trusted healthcare partners and service
                            providers when necessary to deliver membership benefits.
                        </p>
                    </div>

                    {/* User Rights */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <UserCheck size={24} />
                            </div>

                            <h2 className="text-2xl font-semibold">
                                User Rights
                            </h2>
                        </div>

                        <ul className="space-y-4 text-sm text-gray-600 leading-7">

                            <li>
                                • Access and update your personal information.
                            </li>

                            <li>
                                • Request account or membership deactivation.
                            </li>

                            <li>
                                • Contact support for privacy-related concerns.
                            </li>

                            <li>
                                • Control communication preferences.
                            </li>
                        </ul>
                    </div>

                    {/* Notice */}
                    <div className="bg-primary rounded-3xl p-8 text-white shadow-xl">

                        <h2 className="text-2xl font-semibold mb-5">
                            Important Privacy Notice
                        </h2>

                        <p className="text-sm leading-8 text-gray-100">
                            By using Geswa services, you agree to the collection
                            and usage of information as described in this privacy
                            policy. Policies may be updated periodically to improve
                            transparency and user protection.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default PrivacyMain