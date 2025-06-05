import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import ScrollReveal from "./components/scroll-reveal"
import Header from "./components/header"
import HeroSection from "./components/hero-section"

export const metadata = {
  title: "Matt Wilcox's Portfolio | Home",
  description: "Showcasing projects, blog posts, and more.",
  openGraph: {
    title: "Matt Wilcox's Portfolio",
    description: "Showcasing projects, blog posts, and more.",
    url: "",
    siteName: "Matt Wilcox's Portfolio",
    locale: "en_UK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Wilcox's Portfolio",
    description: "Showcasing projects, blog posts, and more.",
  },
};
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <Header />
      {/* Hero Section */}
      <HeroSection />




      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">© 2024 John Doe. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>

  );
}
