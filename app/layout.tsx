import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeedbackBubble from "@/components/FeedbackBubble";
import { BASE_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: `${SITE_NAME} | Evidence-Based Ulcerative Colitis Science`,
  description: "Evidence-based ulcerative colitis science, treatment rankings, flare management, biomarkers, and research summaries grounded in clinical trials and gastroenterology guidance.",
  keywords: "ulcerative colitis, UC treatments, ulcerative colitis science, colitis flare management, fecal calprotectin, IBD biomarkers, biologics for ulcerative colitis, JAK inhibitors UC",
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | Evidence-Based UC Treatment Guide`,
    description: "Treatment rankings, research explainers, and evidence-based UC education built around pivotal trials and guideline-informed care.",
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | UC Science and Treatment Rankings`,
    description: "Evidence-based ulcerative colitis science, treatment comparisons, and biomarker explainers.",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": SITE_NAME,
              "url": BASE_URL,
              "logo": `${BASE_URL}/icon.svg`,
              "description": `${SITE_TAGLINE}. Educational treatment comparisons and UC research summaries.`,
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Editorial",
                "email": "contact@colitisclearly.com"
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
