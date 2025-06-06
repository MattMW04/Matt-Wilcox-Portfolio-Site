import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Smartphone } from "lucide-react";

interface OtherToolsProps {
    tools: string[];
}

export default function OtherTools({ tools }: OtherToolsProps) {
    return (
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
            <CardHeader>
                <CardTitle className="flex items-center text-gray-100">
                    <Smartphone className="mr-2 h-5 w-5 text-purple-400" />
                    Tools & Other
                </CardTitle>
                <CardDescription className="text-gray-400">
                    Development tools, techniques and technologies I use daily
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                        <span
                            key={tool}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-sm hover:bg-gray-700/50 transition-colors duration-300"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
};