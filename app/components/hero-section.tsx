import Link from "next/link"
import ScrollReveal from "./scroll-reveal"
import { Github, Linkedin, Mail, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
export default function HeroSection() {
    return (
        <ScrollReveal>
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center">
                        <div className="mb-8 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 animate-fade-in">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                                Matt Wilcox
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Graduate Software Engineer with a passion for building innovative software and a interest in Web Development and AI.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="/MatthewWilcoxResume.pdf" target="_blank" rel="noopener noreferrer" download>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Resume
                                </Button>
                            </a>
                            <div className="flex space-x-4">
                                <Link href="https://github.com/MattMW04" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                                    >
                                        <Github className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/matt-wilcox-73106a2ab/" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"

                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <a href="mailto:matt.wilcox24@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                                    >
                                        <Mail className="h-4 w-4" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
}