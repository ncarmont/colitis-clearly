import Link from 'next/link'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import TreatmentRankingsBoard from '@/components/TreatmentRankingsBoard'
import { TREATMENTS } from '@/lib/treatments'

export const metadata: Metadata = {
  title: 'Scientific Coffee Purity Rankings | Cleanest Coffee',
  description: 'Coffee purity ranked by heavy-metal certificates of analysis, mycotoxin screening, pesticide transparency, origin disclosure, roast freshness, taste, and value.',
}

const rankingStats = [
  { value: `${TREATMENTS.length}`, label: 'scientific purity tiers' },
  { value: '40%', label: 'score weight: heavy-metal COA' },
  { value: '0', label: 'points for vague toxin theater' },
]

const heavyMetalRubric = [
  { weight: '40 pts', signal: 'Heavy-metal COA', detail: 'Lead, cadmium, arsenic, and mercury results must be numeric, current, and tied to the lot being sold.' },
  { weight: '20 pts', signal: 'Mycotoxin panel', detail: 'Ochratoxin A and aflatoxins should be tested with lab name, date, detection limits, and pass/fail context.' },
  { weight: '15 pts', signal: 'Pesticide / organic control', detail: 'Organic certification helps, but residue testing or clear agricultural standards score higher.' },
  { weight: '15 pts', signal: 'Traceability', detail: 'Origin, farm/co-op or region, process, batch/lot, and decaf method if relevant.' },
  { weight: '10 pts', signal: 'Freshness and value', detail: 'Roast date, whole-bean format, packaging integrity, taste, and price per cup.' },
]

export default function RankingsPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#140c06_0%,#24150c_55%,#100a06_100%)]" />
        <div className="absolute inset-0 opacity-40 dot-grid-pattern" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-6 md:pb-20 md:pt-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-100/75 hover:text-amber-100"><span>←</span>Back to home</Link>
          <div className="hero-shimmer glass-panel mt-6 px-6 py-10 md:px-10 md:py-14">
            <div className="mx-auto max-w-5xl">
              <div className="inline-flex rounded-full border border-amber-accent/20 bg-amber-accent/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-amber-100/80">Scientific Ranking Framework</div>
              <h1 className="font-display mt-6 max-w-4xl text-5xl leading-none tracking-tight text-white md:text-7xl">Coffee Purity Rankings<span className="mt-2 block bg-gradient-to-r from-amber-100 via-amber-accent to-coral-400 bg-clip-text text-transparent">Heavy metals first. Marketing last.</span></h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">This ranking is built like a lab-minded buyer would build it: lead, cadmium, arsenic, mercury, mycotoxins, pesticides, traceability, roast freshness, taste, and value. No certificate of analysis, no top tier.</p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">{rankingStats.map((stat)=><div key={stat.label} className="stat-pill px-5 py-4"><p className="font-display text-4xl tracking-tight text-white">{stat.value}</p><p className="mt-2 text-sm font-semibold text-amber-100">{stat.label}</p></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <ScrollReveal><div className="rounded-[30px] border border-amber-300/16 bg-amber-300/10 p-5 text-sm leading-relaxed text-amber-50">No-BS caution: this is buyer guidance, not a medical claim. Caffeine can affect sleep, anxiety, reflux, blood pressure, pregnancy, and medications. See a professional when relevant.</div></ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
        <ScrollReveal>
          <div className="rounded-[34px] border border-white/8 bg-white/[0.04] p-6 md:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-amber-100/70">Heavy-metal scoring model</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-4xl">How a coffee gets ranked scientifically</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">The cleanest coffee is not the brand with the loudest “mold-free” claim. It is the coffee with the strongest audit trail for heavy metals and contaminants, then enough freshness and taste to justify buying again.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-5">
              {heavyMetalRubric.map((item) => (
                <div key={item.signal} className="rounded-[24px] border border-white/8 bg-black/15 p-4">
                  <p className="font-display text-2xl text-amber-100">{item.weight}</p>
                  <h3 className="mt-2 text-sm font-bold text-white">{item.signal}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <TreatmentRankingsBoard treatments={TREATMENTS} />
    </main>
  )
}
