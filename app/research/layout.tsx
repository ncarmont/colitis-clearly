import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ulcerative Colitis Research | Trials, Biomarkers, and Emerging Therapies",
  description: "Evidence-based UC research covering pathophysiology, biomarkers, pivotal trials, and the next generation of ulcerative colitis therapies.",
  keywords: "ulcerative colitis research, UC clinical trials, fecal calprotectin, vedolizumab, ustekinumab, JAK inhibitors, IL-23 ulcerative colitis",
  openGraph: {
    title: "Ulcerative Colitis Research",
    description: "Evidence-based UC trials, biomarkers, and emerging treatment science",
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
