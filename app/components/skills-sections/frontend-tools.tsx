import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";
export default function FrontendTools() {
    return (
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-500/10">
            <CardHeader>
                <CardTitle className="flex items-center text-gray-100">
                    <Code className="mr-2 h-5 w-5 text-blue-400" />
                    Frontend Development
                </CardTitle>
                <CardDescription className="text-gray-400">
                    Creating responsive and interactive user interfaces
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-sm hover:bg-gray-700/50 transition-colors duration-300">
                        React
                    </span>
                    <span className="px-3 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-sm hover:bg-gray-700/50 transition-colors duration-300">
                        Next.js
                    </span>
                    <span className="px-3 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-sm hover:bg-gray-700/50 transition-colors duration-300">
                        TypeScript
                    </span>
                    <span className="px-3 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-sm hover:bg-gray-700/50 transition-colors duration-300">
                        JavaScript
                    </span>
                    <span className="px-3 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-sm hover:bg-gray-700/50 transition-colors duration-300">
                        Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-sm hover:bg-gray-700/50 transition-colors duration-300">
                        Webpack
                    </span>
                    <span className="px-3 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-sm hover:bg-gray-700/50 transition-colors duration-300">
                        ShadCN/UI
                    </span>
                    <span className="px-3 py-1 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-md text-sm hover:bg-gray-700/50 transition-colors duration-300">
                        Fetch API
                    </span>

                </div>
            </CardContent>
        </Card>
    )
};