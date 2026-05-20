import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coffee Purity Research Overview | Cleanest Coffee',
  description: 'The clean coffee research framework: heavy metals, mycotoxins, pesticide residues, decaf solvents, freshness, sourcing, and testing transparency.',
}

const cards = [
  { title: 'Contaminants', detail: 'Heavy metals, mycotoxins, pesticide residues, and microbial quality are the core purity questions. Panic is useless; test results are useful.' },
  { title: 'Transparency', detail: 'A real claim names the lab, batch, date, analytes, limits, and numeric results. Anything less is marketing fog.' },
  { title: 'Cup quality', detail: 'Clean coffee still has to taste good. Roast date, whole bean storage, grind quality, and brew method all affect whether the purchase is worth repeating.' },
]

export default function ResearchOverviewPage() {
  return (
    <main className="min-h-screen bg-[#120c07] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#160d07] via-[#24150c] to-[#3a2110]">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-amber-300/70 transition hover:text-amber-200"><span>←</span>Back to research</Link>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Current state of coffee purity research</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">The field is simple when you stop letting brands hypnotize you: verify contaminants, verify sourcing, verify freshness, then decide whether the cup and price are good enough.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14"><div className="grid gap-4 md:grid-cols-3">{cards.map((card)=><div key={card.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"><h2 className="text-xl font-bold text-white">{card.title}</h2><p className="mt-3 text-sm leading-relaxed text-slate-300">{card.detail}</p></div>)}</div></section>
    </main>
  )
}
