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

const baseUrl = 'https://colitis-clearly.vercel.app' // Update with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Colitis Clearly | Evidence-Based Ulcerative Colitis Guide",
  description: "Evidence-based ulcerative colitis information, treatment rankings, flare management, and remission strategies. Backed by clinical research and real patient data.",
  keywords: "ulcerative colitis, UC treatment, colitis remission, flare management, IBD, inflammatory bowel disease, biologics, mesalamine, colitis diet, gut health",
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Colitis Clearly | Evidence-Based UC Treatment Guide",
    description: "Evidence-based ulcerative colitis treatment rankings, flare management strategies, and remission guides backed by clinical research.",
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Colitis Clearly",
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
        {/* Google AdSense — auto ads enabled, controlled via adsense.google.com dashboard */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1361556625262612"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-1361556625262612" />

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
              "name": "Colitis Clearly",
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
                "email": "contact@best-olive-oil-ranked.com"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Navigation />
        {children}
        <Footer />
        <FeedbackBubble />
      </body>
    </html>
  );
}
