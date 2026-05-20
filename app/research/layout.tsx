import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coffee Purity Research | Cleanest Coffee',
  description: 'Evidence-aware coffee purity research covering heavy metals, mycotoxins, pesticide residues, decaf solvents, lab testing, sourcing, roast freshness, and brand transparency.',
  keywords: 'coffee purity research, heavy metals coffee, mycotoxins coffee, pesticide tested coffee, decaf solvents, clean coffee COA',
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
