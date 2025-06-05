export default function Header() {

    return (
        <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Portfolio
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a
                            href="#about"
                            className="text-slate-300 hover:text-blue-400 transition-colors duration-300 relative group"
                        >
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#skills"
                            className="text-slate-300 hover:text-blue-400 transition-colors duration-300 relative group"
                        >
                            Skills
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#projects"
                            className="text-slate-300 hover:text-blue-400 transition-colors duration-300 relative group"
                        >
                            Projects
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#contact"
                            className="text-slate-300 hover:text-blue-400 transition-colors duration-300 relative group"
                        >
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );

}