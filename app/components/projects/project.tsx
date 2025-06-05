import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
    key?: string | number;
    projectNumber: number;
    projectName: string;
}
export default function Project({ key, projectNumber, projectName }: ProjectProps) {
    return (
        <Card
            key={key ?? `project-${projectNumber}`}
            className="group bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
        >
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
                <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Project ${projectName}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-gray-100">{projectName}</CardTitle>
                <CardDescription className="text-gray-400">
                    A brief description of what this project does and the technologies used to build it.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <span className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded text-xs">
                            React
                        </span>
                        <span className="px-2 py-1 bg-green-600/20 border border-green-500/30 text-green-300 rounded text-xs">
                            Node.js
                        </span>
                    </div>
                    <div className="flex space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-gray-400 hover:border-gray-400 transition-all duration-300"
                        >
                            <Github className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-gray-400 hover:border-gray-400 transition-all duration-300"
                        >
                            <ExternalLink className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}