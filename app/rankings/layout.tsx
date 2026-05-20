import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clean Coffee Rankings | Cleanest Coffee',
  description: 'Compare clean coffee buying patterns by heavy-metal testing, mycotoxin screening, pesticide transparency, decaf process, freshness, sourcing, taste, and value.',
  keywords: 'clean coffee rankings, heavy metal tested coffee, mycotoxin tested coffee, organic coffee, Swiss Water decaf, low toxin coffee',
  openGraph: {
    title: 'Clean Coffee Rankings',
    description: 'No-BS comparison of clean coffee buying signals and transparency standards.',
    type: 'website',
  },
}

export default function RankingsLayout({ children }: { children: React.ReactNode }) {
  return children
}
