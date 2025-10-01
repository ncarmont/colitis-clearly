import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Highest Polyphenol EVOO Rankings | Science-Backed Olive Oil Reviews",
  description: "Discover the highest polyphenol extra virgin olive oils ranked by verified lab testing. Science-backed EVOO rankings for optimal health benefits, antioxidants, and cardiovascular protection.",
  keywords: "polyphenol olive oil, EVOO rankings, high polyphenol EVOO, best olive oil, antioxidant olive oil, extra virgin olive oil health benefits, Mediterranean diet, oleocanthal, olive oil polyphenols",
  openGraph: {
    title: "The Highest Polyphenol EVOO Rankings",
    description: "Science-backed rankings of extra virgin olive oils by polyphenol content for optimal health.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Highest Polyphenol EVOO Rankings",
    description: "Science-backed rankings of extra virgin olive oils by polyphenol content.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
