import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Cleanest Coffee',
  description: 'About Cleanest Coffee, a no-BS clean coffee buyer guide focused on testing transparency, heavy metals, mycotoxins, sourcing, freshness, and value.',
}

const values = [
  { title: 'Proof before poetry', detail: 'We care about COAs, heavy-metal panels, mycotoxin screens, pesticide standards, roast dates, and origin transparency. Adjectives are not evidence.' },
  { title: 'Buyer guidance, not fear bait', detail: 'Coffee contaminants are real. So is wellness grift. We separate practical risk reduction from toxin theater.' },
  { title: 'Taste still matters', detail: 'Clean coffee that tastes like wet cardboard is not a win. Purity, freshness, brew performance, and price all count.' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#120c07] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#160d07] via-[#24150c] to-[#3a2110]">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-amber-300/70 transition hover:text-amber-200"><span>←</span>Back to home</Link>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">About Cleanest Coffee</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">We are building the no-BS buyer guide for coffee purity: heavy metals, mycotoxins, pesticide transparency, decaf solvents, sourcing, roast freshness, taste, and value. Not panic. Not cult nonsense. Just the cleanest coffee worth buying.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14"><div className="grid gap-4 md:grid-cols-3">{values.map((value)=><div key={value.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"><h2 className="text-2xl font-bold text-white">{value.title}</h2><p className="mt-3 text-sm leading-relaxed text-slate-300">{value.detail}</p></div>)}</div></section>
      <section className="mx-auto max-w-5xl px-4 pb-14 md:px-6 md:pb-20"><div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8"><h2 className="text-3xl font-bold text-white">What this site is and is not</h2><div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300"><p>This site is a research-backed editorial and affiliate-ready coffee buying project. We rank patterns and products by verifiable transparency, not wellness performance art.</p><p>This is not medical advice. Coffee and caffeine can interact with sleep, anxiety, reflux, blood pressure, pregnancy, and medications. See a professional when relevant.</p></div></div></section>
    </main>
  )
}
