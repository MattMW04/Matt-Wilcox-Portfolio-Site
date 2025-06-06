"use client";
import { useState } from 'react';
import ScrollReveal from './scroll-reveal';
import Project from './projects/project';
import { getProjects } from '@/data-access/projects-access';

export default function ProjectsSection() {
    const projects = getProjects();
    const [visibleCount, setVisibleCount] = useState(3);

    const handleViewMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, projects.length));
    };

    const canViewMore = visibleCount < projects.length;

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
                        {projects.slice(0, visibleCount).map((project) => (
                            <Project
                                key={project.name}
                                project={project}
                            />
                        ))}
                    </div>
                    {canViewMore && (
                        <div className="flex justify-center mt-10">
                            <button
                                onClick={handleViewMore}
                                className="px-6 py-2 rounded bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
                            >
                                View More
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </ScrollReveal>
    );
}