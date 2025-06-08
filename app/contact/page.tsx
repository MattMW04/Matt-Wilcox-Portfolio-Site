"use client";
import ScrollReveal from "../components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SuccessMessage from "../components/SuccessMessage";
import ErrorMessage from "../components/ErrorMessage";
import { sendEmail } from "@/lib/sendEmail";
import SpinnerOverlay from "../components/SpinnerOverlay";
import { Mail, Loader2 } from "lucide-react";

//export const metadata = {
//title: "Contact | Matt Wilcox's Portfolio",
//description: "Contact Matt Wilcox via the form.",
//};

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        content: "",
    });
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMsg(null);
        setErrorMsg(null);
        const res = await sendEmail(form);
        setLoading(false);
        if (res.success) {
            setSuccessMsg(res.message || "Email sent successfully!");
            setForm({ name: "", email: "", subject: "", content: "" });
        } else {
            setErrorMsg(res.error || "Failed to send email.");
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <ScrollReveal>
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
                    <div className="max-w-xl w-full bg-gray-900/50 border border-gray-700 rounded-xl shadow-2xl p-8 mx-auto relative">
                        <h1 className="text-4xl font-bold text-gray-100 mb-6 text-center">Contact Me</h1>
                        {successMsg && <SuccessMessage message={successMsg} />}
                        {errorMsg && <ErrorMessage error={errorMsg} />}
                        <form className="space-y-6" onSubmit={handleSubmit}>
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
                                    value={form.name}
                                    onChange={handleChange}
                                    required
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
                                    value={form.email}
                                    onChange={handleChange}
                                    required
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
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
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
                                    value={form.content}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                            >
                                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />}
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                        {loading && <SpinnerOverlay />}
                    </div>
                </section>
            </ScrollReveal>
        </main>
    );
}
