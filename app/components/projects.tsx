
import ScrollReveal from './scroll-reveal';
import Project from './projects/project';
import TimetablingProject from './projects/timetabling-project';
import EducationProject from './projects/education-webapp-project';

export default function ProjectsSection() {
    return (
        <ScrollReveal>
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Featured Projects</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-200 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-300">Some of my recent work that I&apos;m proud of</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TimetablingProject />
                        <EducationProject />
                        <Project
                            key={1}
                            projectNumber={1}
                            projectName="Project 1"
                        />



                    </div>
                </div>
            </section>
        </ScrollReveal>

    );
}   