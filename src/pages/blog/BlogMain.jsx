import React, { useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import {
    Calendar,
    ArrowRight,
    User,
    HeartPulse,
    ShieldCheck,
    Hospital,
    BadgeCheck
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { viewaAllBlog } from '../../reduxStore/slice/blogSlice'

function BlogMain() {
    const dispatch = useDispatch()

  
    // useSelector
    const { blogAll } = useSelector((state) => state?.blog)
    useEffect(() => {
        dispatch(viewaAllBlog({ search: "", page: 1 }));
    }, [])
    // console.log(blogAll)
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">

                {/* Hero */}
                <div className="py-10 sm:py-15">

                    <div className="text-center max-w-4xl mx-auto">

                        <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-medium">
                            Geswa Blog
                        </span>

                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mt-5">
                            Healthcare Insights
                            <span className="block text-primary mt-2">
                                For Every Family
                            </span>
                        </h1>

                        <p className="text-gray-500 text-sm sm:text-base leading-8 mt-5 max-w-2xl mx-auto">
                            Explore healthcare tips, insurance guides,
                            membership benefits, and industry updates
                            from the Geswa healthcare ecosystem.
                        </p>
                    </div>

                    {/* Featured Blog */}
                    <div className="mt-8 bg-gradient-to-r from-primary to-purple rounded-[40px] p-8 sm:p-12 md:p-16 text-white relative overflow-hidden">

                        <div className="max-w-3xl relative z-10">

                            <span className="bg-white/20 px-4 py-1 rounded-full text-xs">
                                Featured Article
                            </span>

                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-5">
                                {blogAll[0]?.title}
                            </h2>

                            <p className="text-sm text-gray-100 leading-8 mt-5 max-w-2xl">
                                {blogAll[0]?.excerpt}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 mt-5 text-sm text-white/90">

                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    {new Date(blogAll?.[0]?.createdAt).toLocaleDateString()}
                                </div>

                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    Geswa Editorial Team
                                </div>
                            </div>

                            <Link
                                to={`/blog/${blogAll?.[0]?.id}`}
                                className="mt-8 inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 transition-all duration-300 px-5 py-2 rounded-2xl text-sm font-semibold shadow-lg"
                            >
                                Read Article
                                <ArrowRight size={15} />
                            </Link>
                        </div>

                        {/* Decorative */}
                        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full"></div>

                        <div className="absolute right-20 top-10 w-28 h-28 bg-white/10 rounded-full"></div>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-4">
                    <button className="rounded-full bg-primary px-5 py-2 text-sm text-white transition hover:opacity-90">
                        All Blogs
                    </button>
                </div>

                {/* Blogs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">

                    {blogAll?.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white border border-primary-200 rounded-[32px] p-7 shadow-sm hover:shadow-2xl transition-all duration-300 group"
                        >

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                                <img src={blog.imageUrl} alt={blog.title} />
                            </div>

                            {/* Category */}
                            {/* <span className="inline-block bg-primary-200 text-primary text-xs px-3 py-1 rounded-full mt-6">
                                {blog.category}
                            </span> */}

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-black mt-5 leading-snug group-hover:text-primary transition">
                                {blog.title}
                            </h3>

                            {/* Desc */}
                            <p className="text-sm text-gray-500 leading-7 mt-5">
                                {blog.excerpt}
                            </p>

                            {/* Bottom */}
                            <div className="flex items-center justify-between mt-8">

                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <Calendar size={15} />
                                    {new Date(blog?.createdAt).toLocaleDateString()}
                                </div>
                                <Link
                                    to={`/blog/${blog?.id}`} className="text-primary flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                                    Read
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="mt-28 mb-20 bg-black rounded-[40px] p-8 sm:p-12 md:p-16 text-white relative overflow-hidden">

                    <div className="max-w-3xl relative z-10">

                        <span className="bg-white/10 px-4 py-1 rounded-full text-xs">
                            Subscribe Newsletter
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-7">
                            Get Healthcare Updates
                            Delivered Weekly
                        </h2>

                        <p className="text-sm text-gray-300 leading-8 mt-6 max-w-2xl">
                            Receive healthcare tips, insurance insights,
                            and Geswa updates directly in your inbox.
                        </p>

                        {/* Input */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-10">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-5 py-3 text-sm outline-none placeholder:text-gray-400"
                            />

                            <button className="bg-primary hover:bg-primary-600 transition-all duration-300 px-7 py-3 rounded-2xl text-sm font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Decorative */}
                    <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/5 rounded-full"></div>

                    <div className="absolute right-20 top-10 w-28 h-28 bg-white/5 rounded-full"></div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BlogMain 