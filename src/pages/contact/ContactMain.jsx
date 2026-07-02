import React, { useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import { PhoneCall, Mail, MapPin, Clock3, Send, Headphones, ShieldCheck, HeartPulse } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { createContact } from '../../reduxStore/slice/contactSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function ContactMain() {
const navigate=useNavigate()
    const dispatch = useDispatch()
    const [wait, setwaiting]=useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        contact: "",
        subject: "",
        message: ""
    })
    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setwaiting(true)
            const response = await dispatch(createContact(form)).unwrap()
            if (response?.success) {
                toast.success(response.message);
                // toast
                   navigate("/");
                       setForm({
                name: "",
                email: "",
                contact: "",
                subject: "",
                message: ""
            });
            setwaiting(false)
            }
        
         

        } catch (error) {
                setwaiting(false)
            console.log(error)
            toast.error(error.message);
        }
    }
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">

                {/* Hero */}
                <div className="py-14 sm:py-20">

                    <div className="text-center max-w-4xl mx-auto">

                        <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                            Contact Geswa
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mt-7">
                            We’re Here To Help
                            <span className="block text-primary mt-2">
                                Every Family
                            </span>
                        </h1>

                        <p className="text-gray-500 text-sm sm:text-base leading-8 mt-8 max-w-2xl mx-auto">
                            Reach out for healthcare memberships,
                            insurance assistance, hospital support,
                            or emergency coordination.
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left Info */}
                    <div>

                        <div className="bg-gradient-to-br from-primary to-purple rounded-[40px] p-8 sm:p-10 text-white h-full relative overflow-hidden">

                            <div className="relative z-10">

                                <span className="bg-white/20 px-4 py-1 rounded-full text-xs">
                                    Contact Information
                                </span>

                                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mt-6">
                                    Let’s Connect With
                                    Our Support Team
                                </h2>

                                <p className="text-sm text-gray-100 leading-8 mt-6">
                                    Our healthcare coordinators are available
                                    to assist you with memberships, claims,
                                    and emergency healthcare support.
                                </p>

                                {/* Contact Cards */}
                                <div className="space-y-5 mt-10">

                                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 flex items-start gap-4">

                                        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                                            <PhoneCall size={26} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                Toll Free Support
                                            </h3>

                                            <p className="text-sm text-gray-100 mt-2">
                                                +91 9973974560
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 flex items-start gap-4">

                                        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                                            <Mail size={26} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                Email Address
                                            </h3>

                                            <p className="text-sm text-gray-100 mt-2 break-all">
                                                geswango2021@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 flex items-start gap-4">

                                        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                                            <MapPin size={26} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                Office Address
                                            </h3>

                                            <p className="text-sm text-gray-100 mt-2 leading-7">
                                                G-1, 2nd Floor,
                                                Shivaji Nagar, Pune,
                                                Maharashtra 411005
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 flex items-start gap-4">

                                        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                                            <Clock3 size={26} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                Working Hours
                                            </h3>

                                            <p className="text-sm text-gray-100 mt-2">
                                                Monday - Sunday • 24/7 Support
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative */}
                            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full"></div>

                            <div className="absolute right-10 top-10 w-28 h-28 bg-white/10 rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div>

                        <div className="bg-white border border-primary-200 rounded-[40px] p-8 sm:p-10 shadow-sm">

                            <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                                Send Message
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-6">
                                Get In Touch
                            </h2>

                            <p className="text-gray-500 text-sm leading-7 mt-4">
                                Fill out the form and our support team
                                will contact you shortly.
                            </p>

                            {/* Form */}
                            <form className="space-y-6 mt-10" onSubmit={handleSubmit}>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                    <div>
                                        <label className="text-sm font-medium text-black">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full mt-3 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 text-sm outline-none focus:border-primary"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-black">
                                            Phone Number
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter phone number"
                                            className="w-full mt-3 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 text-sm outline-none focus:border-primary"
                                            name="contact"
                                            value={form.contact}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter email address"
                                        className="w-full mt-3 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 text-sm outline-none focus:border-primary"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter subject"
                                        className="w-full mt-3 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 text-sm outline-none focus:border-primary"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Message
                                    </label>

                                    <textarea
                                        rows="5"
                                        placeholder="Write your message..."
                                        className="w-full mt-3 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm outline-none resize-none focus:border-primary"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-primary hover:bg-red-200 transition-all duration-300 text-white px-7 py-3 rounded-2xl text-sm font-medium flex items-center gap-2"
                                >
                                   {    setwaiting==true?<>Wait...</>:<>Send Message</>} 
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Support Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 mb-20">

                    <div className="bg-white border border-primary-200 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                            <Headphones size={28} />
                        </div>

                        <h3 className="text-2xl font-semibold mt-6">
                            24/7 Support
                        </h3>

                        <p className="text-sm text-gray-500 leading-7 mt-4">
                            Emergency healthcare assistance available anytime.
                        </p>
                    </div>

                    <div className="bg-green/10 border border-green/20 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                        <div className="w-14 h-14 rounded-2xl bg-green text-white flex items-center justify-center">
                            <ShieldCheck size={28} />
                        </div>

                        <h3 className="text-2xl font-semibold mt-6">
                            Insurance Help
                        </h3>

                        <p className="text-sm text-gray-600 leading-7 mt-4">
                            Assistance for claims and healthcare guidance.
                        </p>
                    </div>

                    <div className="bg-purple/10 border border-purple/20 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300">

                        <div className="w-14 h-14 rounded-2xl bg-purple text-white flex items-center justify-center">
                            <HeartPulse size={28} />
                        </div>

                        <h3 className="text-2xl font-semibold mt-6">
                            Healthcare Network
                        </h3>

                        <p className="text-sm text-gray-600 leading-7 mt-4">
                            Access support across 18,000+ hospitals in India.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactMain