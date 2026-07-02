import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function Notfound() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-2xl font-semibold">Page Not Found</p>
        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>

      <Footer />
    </>
  )
}

export default Notfound