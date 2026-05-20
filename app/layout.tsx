import type { Metadata } from 'next'
import { Fraunces, Geist_Mono, Nunito } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FeedbackBubble from '@/components/FeedbackBubble'
import { BASE_URL, SITE_NAME, SITE_TAGLINE } from '@/lib/site'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: `${SITE_NAME} | Coffee Without the Chemical Nonsense`,
  description:
    'A no-BS clean coffee guide ranking coffee by contaminant testing, sourcing transparency, roast quality, taste, and value.',
  keywords:
    'clean coffee, mold free coffee, mycotoxin tested coffee, organic coffee, coffee rankings, best clean coffee, low toxin coffee, specialty coffee',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | Clean Coffee Rankings`,
    description:
      'Clean coffee rankings, testing explainers, sourcing notes, and no-BS coffee buying guidance.',
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Clean Coffee Rankings`,
    description: 'Clean coffee rankings, contaminant testing explainers, sourcing notes, and brutally clear buying guidance.',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1361556625262612"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-1361556625262612" />

        {/* Google Analytics */}
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
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE_NAME,
              url: BASE_URL,
              logo: `${BASE_URL}/icon.svg`,
              description: `${SITE_TAGLINE}. Clean coffee rankings, testing explainers, and sourcing transparency.`,
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Editorial',
                email: 'contact@thecleanestcoffee.com',
              },
            })
          }}
        />
      </head>
      <body
        className={`${nunito.variable} ${fraunces.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        {/* Animated blob background — fixed behind everything */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="blob blob-4" />
          <div className="blob blob-5" />
          <div className="blob blob-6" />
        </div>

        <div className="relative z-10">
          <Navigation />
          {children}
          <Footer />
          <FeedbackBubble />
        </div>
      </body>
    </html>
  )
}
