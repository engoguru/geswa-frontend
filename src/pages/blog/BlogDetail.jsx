import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import {
  CalendarDays,
  User2,
  Clock3,
  ArrowLeft,
  ArrowRight,

  HeartPulse,
  ShieldCheck,
  Hospital
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { viewaAllBlog, viewOneBlog } from '../../reduxStore/slice/blogSlice'

function BlogDetail() {
  const dispatch = useDispatch()
  const { id } = useParams()



  const { singleBlog } = useSelector((state) => state?.blog)

  const { blogAll } = useSelector((state) => state?.blog)


  useEffect(() => {
    dispatch(viewaAllBlog({ search: "", page: 1 }));
  }, [])
  // viewaAllBlog
  useEffect(() => {
    dispatch(viewOneBlog(id))
  }, [id])
  console.log(singleBlog)
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-primary-200/20 via-white to-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

          {/* Back */}
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-all"
          >
            <ArrowLeft size={16} />
            Back To Blogs
          </Link>

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-14 items-center mt-10">

            {/* Left */}
            <div>

              <span className="bg-primary-200 text-primary px-4 py-1 rounded-full text-xs font-semibold">
                Featured Healthcare Article
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mt-7">
                {singleBlog?.title}
              </h1>

              <p className="text-gray-500 text-sm sm:text-base leading-8 mt-8 max-w-2xl">
                {singleBlog?.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mt-10">

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CalendarDays size={16} />
                  {new Date(singleBlog?.createdAt).toLocaleDateString()}
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <User2 size={16} />
                  Geswa Editorial Team
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock3 size={16} />
                  8 Min Read
                </div>
              </div>

              {/* Social */}
              {/* <div className="flex items-center gap-4 mt-10">

                <button className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <FacebookIcon size={18} />
                </button>

                <button className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <TwitterIcon size={18} />
                </button>

                <button className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <LinkedinIcon size={18} />
                </button>
              </div> */}
            </div>

            {/* Right */}
            <div className="relative">

              <div className="h-[520px] rounded-[45px] bg-gradient-to-br from-primary via-primary to-purple overflow-hidden relative shadow-2xl">

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="text-center text-white px-10 relative z-10">

                    <div className="w-28 h-28 rounded-[30px] bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center text-5xl font-bold shadow-lg">
                      G
                    </div>

                    <h3 className="text-4xl font-bold mt-8">
                      Geswa Healthcare
                    </h3>

                    <p className="text-sm leading-8 text-white/90 mt-6 max-w-md mx-auto">
                      Building affordable healthcare
                      ecosystems through memberships,
                      hospital partnerships, and
                      digital healthcare innovation.
                    </p>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>

                <div className="absolute top-10 right-10 w-36 h-36 bg-white/10 rounded-full"></div>

                <div className="absolute left-10 bottom-10 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-10 mt-24">

            {/* Article */}
            <div className="lg:col-span-2">

              <div className="bg-white border border-primary-200 rounded-[40px] p-8 sm:p-12 shadow-sm">

               <div
                  className="prose max-w-none prose-h2:text-2xl prose-p:text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: singleBlog?.content || "",
                  }}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Author */}
              <div className="bg-white border border-primary-200 rounded-[35px] p-8 shadow-sm">

                <div className="w-20 h-20 rounded-[28px] bg-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  G
                </div>

                <h3 className="text-2xl font-bold text-black mt-6">
                  Geswa Editorial
                </h3>

                <p className="text-sm text-gray-500 leading-7 mt-4">
                  Sharing healthcare insights,
                  insurance updates, membership
                  benefits, and wellness knowledge
                  for families across India.
                </p>
              </div>

              {/* Related Blogs */}
              <div className="bg-white border border-primary-200 rounded-[35px] p-8 shadow-sm">

                <h3 className="text-2xl font-bold text-black">
                  Related Articles
                </h3>

                <div className="space-y-6 mt-8">

                  {blogAll?.map((blog) => (
                    <Link
                      key={blog.id}
                      to={`/blog/${blog.id}`}
                      className="block border border-primary-200 rounded-[28px] p-5 hover:shadow-xl transition-all duration-300 group"
                    >

                      <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                        <img src={blog.imageUrl} alt={blog.title} />
                      </div>

                      {/* <span className="inline-block bg-primary-200 text-primary text-xs px-3 py-1 rounded-full mt-5">
                        {blog.category}
                      </span> */}

                      <h4 className="text-lg font-semibold text-black leading-snug mt-4 group-hover:text-primary transition">
                        {blog.title}
                      </h4>

                      <Link
                        to={`/blog/${blog?.id}`} className="text-primary flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                        Read
                        <ArrowRight size={16} />
                      </Link>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary to-purple rounded-[35px] p-8 text-white relative overflow-hidden">

                <div className="relative z-10">

                  <span className="bg-white/20 px-4 py-1 rounded-full text-xs">
                    Newsletter
                  </span>

                  <h3 className="text-3xl font-bold leading-tight mt-6">
                    Get Weekly
                    Healthcare Updates
                  </h3>

                  <p className="text-sm text-white/90 leading-8 mt-5">
                    Receive healthcare insights,
                    wellness tips, and industry
                    updates directly in your inbox.
                  </p>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 mt-8 text-sm outline-none placeholder:text-white/60"
                  />

                  <button className="w-full mt-5 bg-white text-primary hover:bg-gray-100 transition-all duration-300 py-4 rounded-2xl font-semibold">
                    Subscribe Now
                  </button>
                </div>

                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default BlogDetail