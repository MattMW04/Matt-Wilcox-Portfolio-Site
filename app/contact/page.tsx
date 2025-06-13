import ContactForm from "../components/contact-form";

export const metadata = {
    title: "Contact | Matt Wilcox's Portfolio",
    description: "Contact Matt Wilcox via the form.",
    url: "https://matt-wilcox-portfolio.vercel.app/contact",
    keywords: [
        "Matt Wilcox",
        "Contact",
        "Portfolio",
        "Software Engineer",
        "Web Developer",
        "Next.js",
        "Tailwind CSS",
        "React",
        "JavaScript",
        "TypeScript",
    ],
    authors: [{ name: "Matt Wilcox" }],
    creator: "Matt Wilcox",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Contact | Matt Wilcox's Portfolio",
        description: "Contact Matt Wilcox via the form.",
        url: "https://matt-wilcox-portfolio.vercel.app/contact",
        siteName: "Matt Wilcox's Portfolio",
        locale: "en_UK",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | Matt Wilcox's Portfolio",
        description: "Contact Matt Wilcox via the form.",
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <ContactForm />
        </main>
    );
}
