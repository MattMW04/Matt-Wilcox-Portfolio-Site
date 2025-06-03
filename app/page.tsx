
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
    <div className="flex min-h-screen flex-col items-center justify-between p-2 bg-blackBackground text-whiteText">
      <h1 className="bg-redHeader w-full p-4 text-center">
        Hi there, I`&apos`m Matt Wilcox!
      </h1>
      Hello World!
    </div>
  );
}
