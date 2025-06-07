import Link from "next/link";
export default function ContactHeader() {
    return (
        <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800" aria-label="Main Navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">

                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            className=" text-gray-100 hover:text-blue-300 transition-colors duration-300 relative group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );

}