import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeedbackBubble from "@/components/FeedbackBubble";

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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LQ9T4462C0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LQ9T4462C0');
            `
          }}
        />

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.amazon.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.amazon.com" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EVOO Rankings",
              "url": baseUrl,
              "logo": `${baseUrl}/logo.png`,
              "description": "Science-backed rankings of the highest polyphenol extra virgin olive oils verified by independent laboratory testing.",
              "sameAs": [
                "https://twitter.com/EVOORankings",
                // Add other social profiles when created
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "contact@evoo-rankings.com"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
        <FeedbackBubble />
      </body>
    </html>
  );
}
