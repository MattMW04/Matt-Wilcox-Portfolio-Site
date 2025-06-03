import type { Metadata } from "next";
import { geistSans, geistMono } from "./styles/fonts"; // Import fonts
import "./globals.css";
import Providers from "./components/providers";

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
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          id="root"
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
