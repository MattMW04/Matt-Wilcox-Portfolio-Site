import ScrollReveal from "./scroll-reveal"
import OtherTools from "./skills-sections/tools-other-section";
import FrontendTools from "./skills-sections/frontend-tools";
import BackendTools from "./skills-sections/backend-tools";
import { getSkillsByCategory } from "@/data-access/skills-access";
import { Skill } from "@/app/types/types";

export default function SkillsSection() {
    // Example usage of getSkillsByCategory
    const frontendSkills: Skill[] = getSkillsByCategory("frontend");
    const backendSkills: Skill[] = getSkillsByCategory("backend");
    const otherSkills: Skill[] = getSkillsByCategory("tools");

    return (
        <ScrollReveal>
            <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Skills & Technologies</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-200 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-300">Technologies I work with to turn ideas and briefs into real-life software.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">

                        <FrontendTools tools={frontendSkills} />

                        <BackendTools tools={backendSkills} />

                        <OtherTools tools={otherSkills} />
                    </div>
                </div>
            </section>
        </ScrollReveal>
    )
};