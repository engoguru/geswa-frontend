import React, { useEffect, useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { createApplication, viewOneJob } from '../../reduxStore/slice/careerSlice'
import { useParams } from 'react-router-dom'

function Jobdetail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        coverLetter: '',

        resume: null
    })

    const { jobOneDetail } = useSelector((state) => state?.jobData)
    useEffect(() => {
        dispatch(viewOneJob(id))
    }, [id])

    const handleChange = (e) => {
        const { name, value, files } = e.target

        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const form = new FormData()
            form.append("fullName", formData.fullName)
            form.append("email", formData.email)
            form.append("phone", formData.phone)
            form.append("experience", formData.experience)
            form.append("coverLetter", formData.coverLetter)
            form.append("jobId", id)
            form.append("resume", formData.resume)

            const res = await dispatch(createApplication(form)).unwrap()

            console.log(res)
            alert("Application Submitted Successfully!")
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                experience: '',
                coverLetter: '',
                resume: null
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />

            <div className="bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                    {/* Header */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <div>
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-200 text-primary text-sm font-medium mb-4">
                                    {jobOneDetail?.data?.employmentType}
                                </div>

                                <h1 className="text-4xl font-bold text-black mb-3">
                                    {jobOneDetail?.data?.title}
                                </h1>

                                <div className="flex flex-wrap gap-4 text-gray-600">
                                    <span>📍 {jobOneDetail?.data?.location}</span>
                                    <span>💰 {jobOneDetail?.data?.salaryRange}</span>
                                    <span>🕒 {jobOneDetail?.data?.experience}</span>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Job Description */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-bold text-black mb-4">
                                    Job Description
                                </h2>

                                <p className="text-gray-600 leading-8">
                                    {jobOneDetail?.data?.description}
                                </p>
                            </div>

                            {/* Responsibilities */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-bold text-black mb-6">
                                    Responsibilities
                                </h2>

                                <ul className="space-y-4">
                                    {jobOneDetail?.data?.responsibilities?.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="w-6 h-6 rounded-full bg-green text-white flex items-center justify-center text-sm mt-0.5">
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Requirements */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-bold text-black mb-6">
                                    Requirements
                                </h2>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {jobOneDetail?.data?.requirements?.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="bg-primary-200 text-primary px-4 py-3 rounded-xl font-medium"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-2xl font-bold text-black mb-6">
                                    Benefits
                                </h2>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {jobOneDetail?.data?.benefits.map((benefit, index) => {
                                        return (
                                            <div className="bg-green/10 p-5 rounded-xl">
                                                <h4 className="font-semibold text-green mb-2">
                                                    {benefit}
                                                </h4>

                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Right Side Apply Form */}
                        <div>
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
                                <h3 className="text-2xl font-bold text-black mb-2">
                                    Apply for this Job
                                </h3>

                                <p className="text-gray-500 mb-6">
                                    Submit your application and our team will
                                    contact you.
                                </p>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />

                                    <input
                                        type="text"
                                        name="experience"
                                        placeholder="Years of Experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />

                                    <textarea
                                        rows="5"
                                        name="coverLetter"
                                        placeholder="Cover Letter"
                                        value={formData.coverLetter}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    />

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Upload Resume
                                        </label>

                                        <input
                                            type="file"
                                            name="resume"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleChange}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                                    >
                                        Submit Application
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Jobdetail