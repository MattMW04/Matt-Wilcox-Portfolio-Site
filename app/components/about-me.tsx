import Image from 'next/image';
import ScrollReveal from './scroll-reveal';
export default function AboutMe() {
    return (
        <ScrollReveal>
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">About Me</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-200 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            I&apos;m a passionate developer, recently graduated with a degree in Software Engineering from Solent University. I specialize in creating dynamic and responsive web applications, with a keen interest in the latest technologies and trends in the industry. I have prior experience in full stack development, along with a strong foundation in collaborative development using Agile Methodologies.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed">
                                With Knowledge in both front-end and back-end development, along with understanding of the Software lifecycle, I enjoy tackling complex challenges and delivering high-quality solutions. My experience includes working with technologies such as React, Node.js, and various databases, allowing me to build robust applications that meet user needs.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                When I&apos;m not coding, you can find me exploring new technologies and advancements in the industry,
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm hover:scale-105 transition-transform duration-300">
                                    Problem Solver
                                </span>
                                <span className="px-4 py-2 bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30 text-green-300 rounded-full text-sm hover:scale-105 transition-transform duration-300">
                                    Team Player
                                </span>
                                <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm hover:scale-105 transition-transform duration-300">
                                    Continuous Learner
                                </span>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                            <Image
                                src="/AvatarCoding.png"
                                alt="About me image- Avatar of Matt Wilcox coding"
                                width={400}
                                height={400}
                                className="rounded-lg shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>

    );
}