//import { Github, ExternalLink, Code, Palette, Smartphone } from "lucide-react"
//import { Button } from "@/components/ui/button"
//import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
//import Image from "next/image"
//import ScrollReveal from "./components/scroll-reveal"

import HeroSection from "./components/hero-section"
import AboutMe from "./components/about-me"
import ContactDetails from "./components/contact"
import SkillsSection from "./components/skills"
import ProjectsSection from "./components/projects"

export const metadata = {
  title: "Matt Wilcox's Portfolio | Home",
  description: "Showcasing projects, Skills, and more.",
  url: "https://matt-wilcox-portfolio.vercel.app/",
  keywords: [
    "Matt Wilcox",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
    "Next.js",
    "Tailwind CSS",
    "React",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Matt Wilcox", }],
  creator: "Matt Wilcox",
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Matt Wilcox's Portfolio",
    description: "Showcasing projects, Skills, and more.",
    url: "https://matt-wilcox-portfolio.vercel.app/",
    siteName: "Matt Wilcox's Portfolio",
    locale: "en_UK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Wilcox's Portfolio",
    description: "Showcasing projects, Skills, and more.",
  },
};
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <AboutMe />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactDetails />
    </main>

  );
}
