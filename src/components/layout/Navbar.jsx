import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Links } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { loginUserData } = useSelector((state) => state?.user)
    // useSelector
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Partners", href: "/partners" },
        { name: "Plans", href: "/premium-plans" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "About", href: "/about-us" },
        { name: "Career", href: "/career" },
        { name: "Contact", href: "/contact" },
    ];
    console.log(loginUserData, "pp")
    return (


        <nav className="bg-white text-black sticky top-0 z-50 shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navbar */}
                <div className="flex items-center justify-between h-16">

                    {/* Left Section */}
                    <div className="flex items-center gap-10">

                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 flex-shrink-0"
                        >
                            <button className="bg-primary text-white text-sm px-3 py-1 rounded-xl font-medium hover:bg-primary-600 transition">
                                G
                            </button>

                            <span className="text-lg font-semibold">
                                Geswa
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-6 text-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="hover:text-primary transition duration-300 hover:underline"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="bg-black hover:bg-gray-800 text-white text-sm px-5 py-2 rounded-xl font-medium transition">
                            {loginUserData?.user ? (
                                <Link
                                    to={
                                        loginUserData.user.role === "MEMBER"
                                            ? "/user"
                                            : loginUserData.user.role === "EMPLOYEE"
                                                ? "/dashboard"
                                                : "/"
                                    }
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link to="/sign-in">
                                    Sign In
                                </Link>
                            )}
                        </button>

                        <button className="bg-primary hover:bg-primary-600 text-white text-sm px-5 py-2 rounded-xl font-medium transition">
                            <Link to={"/sign-up"}>
                                Get Card
                            </Link>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t bg-white shadow-lg">
                    <div className="px-4 py-5 space-y-5">

                        {/* Mobile Links */}
                        <div className="flex flex-col space-y-4 text-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-primary-500 transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Buttons */}
                        <div className="flex flex-col gap-3 pt-2">
                            <button className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-xl font-medium transition">
                                Sign In
                            </button>

                            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-xl font-medium transition">
                                Get Card
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>

    );
}