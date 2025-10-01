import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "EVOO Research & Health Benefits | Polyphenol Science & Studies",
  description: "Evidence-based research on extra virgin olive oil polyphenols, cardiovascular health, anti-inflammatory properties, and Mediterranean diet benefits. Scientific articles and studies.",
  keywords: "EVOO research, polyphenol studies, olive oil health benefits, cardiovascular health, anti-inflammatory, Mediterranean diet research, oleocanthal studies",
  openGraph: {
    title: "EVOO Research & Health Benefits",
    description: "Evidence-based research on extra virgin olive oil polyphenols and health benefits",
    type: "website",
  },
}

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
