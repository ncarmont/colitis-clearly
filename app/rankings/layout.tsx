import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Complete EVOO Rankings by Polyphenol Content | Olive Oil Health Database",
  description: "Full rankings of extra virgin olive oils sorted by polyphenol levels. Compare brands, origins, and health benefits. Updated regularly with verified lab test results.",
  keywords: "EVOO rankings, polyphenol content, olive oil comparison, best EVOO brands, highest antioxidant olive oil",
  openGraph: {
    title: "Complete EVOO Rankings by Polyphenol Content",
    description: "Full rankings of extra virgin olive oils sorted by polyphenol levels",
    type: "website",
  },
}

export default function RankingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
