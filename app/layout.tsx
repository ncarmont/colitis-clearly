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

const baseUrl = 'https://evoo-rankings.com' // Update with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Highest Polyphenol EVOO Rankings | 30 Lab-Verified Olive Oils",
  description: "Discover the 30 highest polyphenol extra virgin olive oils ranked by verified lab testing (HPLC & qNMR). Science-backed EVOO rankings for optimal health benefits, antioxidants, and cardiovascular protection.",
  keywords: "polyphenol olive oil, EVOO rankings, high polyphenol EVOO, best olive oil, antioxidant olive oil, extra virgin olive oil health benefits, Mediterranean diet, oleocanthal, olive oil polyphenols, HPLC testing, qNMR testing",
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "30 Highest Polyphenol EVOOs | Lab-Verified Rankings",
    description: "Science-backed rankings of 30 extra virgin olive oils by polyphenol content. Includes HPLC & qNMR lab data, Amazon links, and health benefits.",
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "EVOO Rankings",
  },
  twitter: {
    card: "summary_large_image",
    title: "30 Highest Polyphenol EVOOs | Lab-Verified",
    description: "Science-backed rankings of 30 extra virgin olive oils with verified polyphenol content.",
    site: "@EVOORankings", // Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
