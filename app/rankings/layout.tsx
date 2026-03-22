import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "UC Treatment Rankings | Evidence-Based Comparison of Therapies",
  description: "Compare ulcerative colitis treatments by class, route, response data, remission rates, safety profile, and therapeutic role.",
  keywords: "ulcerative colitis treatment rankings, mesalamine, vedolizumab, infliximab, upadacitinib, ulcerative colitis biologics, UC JAK inhibitors",
  openGraph: {
    title: "UC Treatment Rankings",
    description: "Evidence-based comparison of ulcerative colitis therapies",
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
