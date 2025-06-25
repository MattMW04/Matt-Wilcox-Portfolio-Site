import type { Metadata } from "next";

import "../globals.css";
import { Analytics } from '@vercel/analytics/next';
import ContactHeader from "../components/contact-page-header";


export const metadata: Metadata = {
    title: "Matt Wilcox's Portfolio",
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
        description: "Showcasing projects, blog posts, and more."
    },
};

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Analytics />

            <ContactHeader />
            {children}
        </>
    );
}