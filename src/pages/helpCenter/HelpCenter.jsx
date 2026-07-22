import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import {
    Search,
    HelpCircle,
    MessageCircle,
    PhoneCall,
    Mail,
    ShieldCheck,
    FileText,
    CreditCard,
    HeartPulse,
    ChevronRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

function HelpCenter() {

    const faqs = [
        {
            q: "How does Geswa healthcare membership work?",
            a: "You get access to 18,000+ partner hospitals with discounted healthcare services using your digital membership card."
        },
        {
            q: "How can I use my membership card?",
            a: "Show your digital card at partner hospitals to avail instant discounts and support."
        },
        {
            q: "Is emergency support available 24/7?",
            a: "Yes, our emergency assistance team is available 24/7 across India."
        },
        {
            q: "Can I add family members?",
            a: "Yes, family plans allow you to include your loved ones under one membership."
        }
    ]

    const topics = [
        { icon: HeartPulse, title: "Membership", desc: "Plans, benefits & usage" },
        { icon: CreditCard, title: "Payments", desc: "Billing & subscription" },
        { icon: ShieldCheck, title: "Security", desc: "Account safety & privacy" },
        { icon: FileText, title: "Claims", desc: "Insurance & hospital claims" }
    ]

    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">

                {/* Hero */}
                <div className="py-14 sm:py-20 text-center">

                    <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                        Help Center
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mt-7">
                        How Can We Help You?
                    </h1>

                    <p className="text-gray-500 text-sm sm:text-base leading-8 mt-6 max-w-2xl mx-auto">
                        Find answers, guides, and support for your Geswa healthcare membership.
                    </p>

                    {/* Search */}
                    <div className="mt-10 max-w-2xl mx-auto relative">

                        {/* <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

                        <input
                            type="text"
                            placeholder="Search for help topics..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:border-primary"
                        /> */}
                    </div>
                </div>

                {/* Topics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {topics.map((item, i) => (
                        <div key={i} className="bg-white border border-primary-200 rounded-[30px] p-6 shadow-sm hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <item.icon size={22} />
                            </div>

                            <h3 className="text-lg font-semibold mt-5">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-2">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="mt-24">

                    <div className="text-center max-w-2xl mx-auto">

                        <h2 className="text-4xl font-bold text-black">
                            Frequently Asked Questions
                        </h2>

                        <p className="text-gray-500 text-sm mt-5 leading-7">
                            Everything you need to know about Geswa healthcare services.
                        </p>
                    </div>

                    <div className="mt-12 space-y-5 max-w-4xl mx-auto">

                        {faqs.map((item, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">

                                <div className="flex items-start gap-4">

                                    <HelpCircle className="text-primary flex-shrink-0 mt-1" size={20} />

                                    <div>
                                        <h3 className="font-semibold text-black">
                                            {item.q}
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-2 leading-7">
                                            {item.a}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-24 mb-20 bg-gradient-to-r from-primary to-purple rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">

                    <div className="max-w-3xl">

                        <span className="bg-white/20 px-4 py-1 rounded-full text-xs">
                            Still Need Help?
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
                            Contact Our Support Team
                        </h2>

                        <p className="text-sm text-gray-100 leading-8 mt-6">
                            Our experts are available 24/7 to help you with memberships,
                            claims, and healthcare assistance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10">

                            <Link to={"/contact"} className="bg-white text-primary px-7 py-3 rounded-2xl text-sm font-semibold">
                                <PhoneCall className="inline mr-2" size={16} />
                                Call Support
                            </Link>

                            <Link to={"/contact"} className="border border-white/30 hover:bg-white/10 px-7 py-3 rounded-2xl text-sm">
                                <Mail className="inline mr-2" size={16} />
                                Email Us
                            </Link>
                        </div>
                    </div>

                    <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-white/10 rounded-full"></div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default HelpCenter