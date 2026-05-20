import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coffee Contaminants | Cleanest Coffee',
  description: 'Where coffee purity risks come from: soil, storage, processing, decaf methods, roasting, packaging, and vague brand claims.',
}

const pillars = [
  { title: 'Soil and origin', detail: 'Heavy metals such as lead, cadmium, arsenic, and mercury can reflect soil and environmental exposure. Origin transparency matters because geography is part of the risk map.' },
  { title: 'Storage and mold', detail: 'Mycotoxin risk is shaped before the beans hit your grinder: harvesting, drying, storage, shipping, and humidity control all matter.' },
  { title: 'Processing and decaf', detail: 'Washed/natural processing, decaf solvents, and handling standards can all change the buyer question. Disclosure is the minimum standard.' },
  { title: 'Marketing distortion', detail: 'The biggest contaminant in clean coffee is often the claim itself: “toxin free” without a COA, lab, batch, and numeric result.' },
]

export default function ContaminantsPage() {
  return (
    <main className="min-h-screen bg-[#120c07] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#160d07] via-[#24150c] to-[#3a2110]"><div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16"><Link href="/research" className="inline-flex items-center gap-2 text-sm text-amber-300/70 transition hover:text-amber-200"><span>←</span>Back to research</Link><h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Where coffee purity risk actually comes from</h1><p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">Coffee is an agricultural product, not a sacred object. The purity question is soil, storage, processing, testing, and honesty.</p></div></section>
      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14"><div className="grid gap-4 md:grid-cols-2">{pillars.map((pillar)=><div key={pillar.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"><h2 className="text-2xl font-bold text-white">{pillar.title}</h2><p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.detail}</p></div>)}</div></section>
    </main>
  )
}
