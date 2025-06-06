import Link from "next/link"
import ScrollReveal from "./scroll-reveal"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
export default function HeroSection() {
    return (
        <ScrollReveal>
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-gray-600/10 animate-pulse"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center">
                        <div className="mb-8 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-cyan-600 to-blue-800 rounded-full blur-lg opacity-30 animate-pulse"></div>
                            <Image
                                src="/avatar.png"
                                alt="Matt Wilcox Avatar Picture"
                                width={150}
                                height={150}
                                className="rounded-full mx-auto border-4 border-gray-700 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-100 mb-6 animate-fade-in">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                                Matt Wilcox.
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Graduate Software Engineer with a passion for solving problems and creating innovative software solutions. Interests include Web Development and following the latest AI technologies/advancements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="/MatthewWilcoxResume.pdf" target="_blank" rel="noopener noreferrer" download>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Resume
                                </Button>
                            </a>
                            <div className="flex space-x-4">
                                <Link href="https://github.com/MattMW04" target="_blank" rel="noopener noreferrer" aria-label="Click to go to my GitHub Profile">
                                    <Button
                                        aria-label="Go to my GitHub Profile"
                                        variant="outline"
                                        size="icon"
                                        className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-400 transition-all duration-300"
                                    >
                                        <Github className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/matt-wilcox-73106a2ab/" target="_blank" rel="noopener noreferrer" aria-label="Click to go to my LinkedIn Profile">
                                    <Button
                                        aria-label="Go to my LinkedIn Profile"
                                        variant="outline"
                                        size="icon"
                                        className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-400 transition-all duration-300"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <a href="mailto:matt.wilcox24@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Click to email me">
                                    <Button
                                        aria-label="Email me"
                                        variant="outline"
                                        size="icon"
                                        className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-400 transition-all duration-300"
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