"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactHeader() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800" aria-label="Main Navigation">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">

                        </div>

                        <div className="hidden md:flex space-x-8">
                            <Link
                                aria-label="Home"
                                href="/"
                                className="text-gray-100 hover:text-blue-300 transition-colors duration-300 relative group"
                            >
                                Home
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link
                                aria-label="Contact Me"
                                href="/contact"
                                className="text-gray-100 hover:text-blue-300 transition-colors duration-300 relative group"
                            >
                                Contact Me
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link
                                aria-label="Meet with Me"
                                href="/meet"
                                className="text-gray-100 hover:text-blue-300 transition-colors duration-300 relative group"
                            >
                                Meet with Me
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </div>
                        {/* Hamburger Button for Mobile */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                            aria-label="Open menu"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="block w-6 h-0.5 bg-gray-100 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-100 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-100"></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar for Mobile */}
            <div className={`fixed inset-0 z-[100] pointer-events-none ${sidebarOpen ? "" : "hidden"}`}>
                {/* Overlay background */}
                <div
                    className={`absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 pointer-events-auto`}
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close menu"
                ></div>
                {/* Sidebar */}
                <div
                    className={`
                        absolute right-0 top-0 h-full w-64
                        bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
                        border-l border-gray-700
                        shadow-2xl
                        transform transition-transform duration-300 ease-in-out
                        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
                        flex flex-col p-6 z-[101] pointer-events-auto
                    `}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close sidebar"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <nav className="flex flex-col space-y-6 mt-10">
                        <Link
                            aria-label="Home"
                            href="/"
                            className="text-gray-100 hover:text-blue-300 transition-colors duration-300"
                            onClick={() => setSidebarOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            aria-label="Contact Me"
                            href="/contact"
                            className="text-gray-100 hover:text-blue-300 transition-colors duration-300 relative group"
                        >
                            Contact Me
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            aria-label="Meet with Me"
                            href="/meet"
                            className="text-gray-100 hover:text-blue-300 transition-colors duration-300 relative group"
                        >
                            Meet with Me
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );

}