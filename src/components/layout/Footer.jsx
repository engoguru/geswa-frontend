// import React from 'react'
// import { Link } from 'react-router-dom'

// function Footer() {
//     return (
//         <footer className="bg-black text-white shadow-lg">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

//                     {/* Logo Section */}
//                     <div>
//                         <div className="flex items-center gap-2 mb-3">
//                             <button className="bg-primary text-white text-sm px-3 py-1 rounded-xl font-medium hover:bg-primary-600 transition">
//                                 G
//                             </button>

//                             <span className="text-lg font-semibold">
//                                 Geswa
//                             </span>
//                         </div>

//                         <p className="text-xs text-gray-300 leading-5 mb-4">
//                             India's most trusted health membership platform
//                         </p>

//                         <span className="text-xs text-gray-400">
//                             {new Date().getFullYear()} © Geswa
//                         </span>
//                     </div>

//                     {/* Product */}
//                     <div>
//                         <h3 className="text-md font-medium mb-3">
//                             Product
//                         </h3>

//                         <ul className="space-y-2 text-sm text-gray-300">
//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 Hospitals
//                             </li>

//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 Insurance
//                             </li>

//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 <Link to={"/premium-plans"}>
//                                 Pricing
//                                 </Link>
//                             </li>

//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 Co-ordinator
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Company */}
//                     <div>
//                         <h3 className="text-md font-medium mb-3">
//                             Company
//                         </h3>

//                         <ul className="space-y-2 text-sm text-gray-300">
//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 About Us
//                             </li>

//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 <Link to={"/career"}>
//                                 Career
//                                 </Link>
//                             </li>

//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 <Link to={"/blog"}>
//                                 Blog
//                                 </Link>
//                             </li>

//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 Partners
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Support */}
//                     <div>
//                         <h3 className="text-md font-medium mb-3">
//                             Support
//                         </h3>

//                         <ul className="space-y-2 text-sm text-gray-300">
//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 Contact
//                             </li>

//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 <Link to={"/help-center"}>
//                                 Help Center
//                                 </Link>
//                             </li>

//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 <Link to={"/privacy"}>
//                                     Privacy Policy
//                                 </Link>
//                             </li>

//                             <li className="hover:text-primary-500 cursor-pointer transition">
//                                 <Link to={"/term-conditions"}>
//                                     Terms & Conditions
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Address */}
//                     <div>
//                         <h3 className="text-md font-medium mb-3">
//                             Address
//                         </h3>

//                         <ul className="space-y-2 text-sm text-gray-300 mb-5">
//                             <li>G-1, 2nd Floor</li>
//                             <li>Shivaji Nagar, Pune</li>
//                             <li>Maharashtra 411005</li>
//                         </ul>

//                         <h3 className="text-md font-medium mb-2">
//                             Toll Free Number
//                         </h3>

//                         <p className="text-sm text-gray-300">
//                             1234567890
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer





import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 font-semibold">
                G
              </div>
              <span className="text-xl font-semibold tracking-wide">
                Geswa
              </span>
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
              India’s most trusted health membership platform helping people access better care with ease.
            </p>

            <p className="mt-6 text-xs text-white/40">
              © {new Date().getFullYear()} Geswa. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-white transition cursor-pointer">Hospitals</li>
              <li className="hover:text-white transition cursor-pointer">Insurance</li>
              <li>
                <Link to="/premium-plans" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Co-ordinator
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-white transition cursor-pointer">About</li>
              <li>
                <Link to="/career" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Partners
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-white transition cursor-pointer">Contact</li>
              <li>
                <Link to="/help-center" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/term-conditions" className="hover:text-white transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Address / CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-4">
              Get in Touch
            </h3>

            <div className="text-sm text-white/60 space-y-2">
              <p>G-1, 2nd Floor</p>
              <p>Shivaji Nagar, Pune</p>
              <p>Maharashtra 411005</p>
            </div>

            <div className="mt-6">
              <p className="text-xs text-white/40">Toll Free</p>
              <p className="text-sm text-white/70 font-medium">1234567890</p>
            </div>

            {/* CTA */}
            <button className="mt-6 w-full py-2 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition">
              Contact Support
            </button>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>Built with care for better healthcare access</p>

          <div className="flex gap-5">
            <span className="hover:text-white transition cursor-pointer">Privacy</span>
            <span className="hover:text-white transition cursor-pointer">Terms</span>
            <span className="hover:text-white transition cursor-pointer">Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;