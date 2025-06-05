import type { Metadata } from "next";
import { geistSans, geistMono } from "./styles/fonts"; // Import fonts
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Header from "./components/header";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        id="root"
      >
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
          <Header />
          {children}
        </main>

      </body>
    </html>
  );
}
