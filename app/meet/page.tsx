
export const metadata = {
    title: "Matt Wilcox's Portfolio | Meet",
    description: "Schedule a meeting with Matt Wilcox, a software engineer and web developer.",
    url: "https://www.matt-wilcox.live/meet",
    keywords: [
        "Matt Wilcox",
        "Portfolio",
        "Meet",
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
        title: "Matt Wilcox's Portfolio | Meet",
        description: "Schedule a meeting with Matt Wilcox, a software engineer and web developer.",
        url: "https://www.matt-wilcox.live/meet",
        siteName: "Matt Wilcox's Portfolio",
        locale: "en_UK",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Matt Wilcox's Portfolio | Meet",
        description: "Schedule a meeting with Matt Wilcox, a software engineer and web developer.",
    },
};
export default function MeetPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-100 flex items-center justify-center">
            <h1>Meet Page</h1>
        </main>
    );
}