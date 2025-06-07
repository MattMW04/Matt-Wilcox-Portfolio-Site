import ScrollReveal from "../components/scroll-reveal";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Contact | Matt Wilcox's Portfolio",
    description: "Contact Matt Wilcox via the form.",
};

export default function ContactPage() {
    return (
        <ScrollReveal>
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
                <div className="max-w-xl w-full bg-gray-900/50 border border-gray-700 rounded-xl shadow-2xl p-8 mx-auto">
                    <h1 className="text-4xl font-bold text-gray-100 mb-6 text-center">Contact Me</h1>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-200 mb-2 font-medium">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-blue-500 transition"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-200 mb-2 font-medium">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-blue-500 transition"
                                placeholder="you@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-200 mb-2 font-medium">
                                Subject
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-blue-500 transition"
                                placeholder="Subject"
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-gray-200 mb-2 font-medium">
                                Message
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                rows={5}
                                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-blue-500 transition resize-none"
                                placeholder="Type your message here..."
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled
                            className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                        >
                            Send Message (Coming Soon)
                        </Button>
                    </form>
                </div>
            </section>
        </ScrollReveal>
    );
}
