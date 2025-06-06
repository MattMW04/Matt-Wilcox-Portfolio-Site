import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Project as ProjectType } from '@/app/types/types';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";


interface ProjectProps {
    project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
    return (
        <Card
            key={project.name}
            className="group bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
        >
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
                <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-gray-100">{project.name}</CardTitle>
                <CardDescription className="text-gray-400">
                    {project.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex space-x-2">
                        <TooltipProvider>
                            {project.github && (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            aria-label="Go to project GitHub repository"
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-gray-400 hover:border-gray-400 transition-all duration-300"
                                        >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name}  on GitHub`}>
                                                <Github className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        View on GitHub
                                    </TooltipContent>
                                </Tooltip>
                            )}
                            {project.link && (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            aria-label="View more information about the project"
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-gray-400 hover:border-gray-400 transition-all duration-300"
                                        >
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View more information about ${project.name}`}>
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        View More Information
                                    </TooltipContent>
                                </Tooltip>
                            )}
                        </TooltipProvider>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}