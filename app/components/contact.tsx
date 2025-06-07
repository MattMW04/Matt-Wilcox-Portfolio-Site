import ScrollReveal from "./scroll-reveal"
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function ContactDetails() {
    return (
        <ScrollReveal>
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Contact Details</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-200 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 mb-12">
                        I&apos;m always interested in new opportunities and exciting projects, please get in touch via the details below. Whether you have a question, want to collaborate, or just want to say hi, I&apos;d love to hear from you!
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center group">
                            <a href="mailto:matt.wilcox24@gmail.com" target="_blank" rel="noopener noreferrer">
                                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                                    <Mail className="h-8 w-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="font-semibold text-gray-100 mb-2">Email</h3>
                                    <p className="text-gray-300">matt.wilcox24@gmail.com</p>
                                </div>
                            </a>
                        </div>
                        <div className="text-center group">
                            <Link href="https://www.linkedin.com/in/matt-wilcox-73106a2ab/" target="_blank" rel="noopener noreferrer" aria-label=" Click to go to myLinkedIn Profile">
                                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                                    <Linkedin className="h-8 w-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="font-semibold text-gray-100 mb-2">LinkedIn</h3>
                                    <p className="text-gray-300">matt-wilcox-73106a2ab</p>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center group">
                            <Link href="https://github.com/MattMW04" target="_blank" rel="noopener noreferrer" aria-label=" Click to go to my GitHub Profile">
                                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                                    <Github className="h-8 w-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="font-semibold text-gray-100 mb-2">GitHub</h3>
                                    <p className="text-gray-300">MattMW04</p>
                                </div>
                            </Link>
                        </div>

                    </div>
                    <Link href="/contact" className="inline-block">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Get In Touch
                        </Button>
                    </Link>
                </div>
            </section>
        </ScrollReveal>

    )
}