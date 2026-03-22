import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import ScrollReveal from '@/components/ScrollReveal'
import TreatmentRankingsBoard from '@/components/TreatmentRankingsBoard'
import { TREATMENTS } from '@/lib/treatments'

export const metadata: Metadata = {
  title: 'UC Treatment Rankings | Colitis Clearly',
  description:
    'Warm, evidence-first ulcerative colitis treatment rankings with filterable cards for 5-ASA drugs, biologics, small molecules, and other therapies.',
}

const rankingStats = [
  {
    value: `${TREATMENTS.length}`,
    label: 'ranked treatments',
  },
  {
    value: '5',
    label: 'filter groups',
  },
  {
    value: '74%',
    label: 'highest response signal in the brief',
  },
]

export default function RankingsPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(46,204,113,0.16),transparent_40%),linear-gradient(180deg,#08111c_0%,#0a1628_55%,#08111c_100%)]" />
        <div className="absolute inset-0 opacity-40 dot-grid-pattern" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 md:px-6 md:pb-16 md:pt-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-100/75 hover:text-emerald-100">
            <span>←</span>
            Back to home
          </Link>

          <div className="hero-shimmer glass-panel mt-6 rounded-[38px] px-6 py-10 md:px-10 md:py-12">
            <div className="mx-auto max-w-4xl">
              <div className="animate-fade-in-up">
                <div className="inline-flex rounded-full border border-emerald-accent/20 bg-emerald-accent/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/80">
                  Ranked by Science
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                <h1 className="font-display mt-6 text-4xl tracking-tight text-white md:text-6xl">
                  Ulcerative colitis treatments, arranged for real decision-making.
                </h1>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
                  Mesalamine anchors the board, advanced therapies stay visible by mechanism, and every card keeps the trial name,
                  remission signal, and side-effect summary close by.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {rankingStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stat-pill animate-fade-in-up px-5 py-4"
                    style={{ animationDelay: `${280 + index * 80}ms` }}
                  >
                    <p className="font-display text-4xl tracking-tight text-white">{stat.value}</p>
                    <p className="mt-2 text-sm font-semibold text-emerald-100">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="animate-fade-in-up mt-8" style={{ animationDelay: '500ms' }}>
                <MedicalDisclaimer compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <ScrollReveal>
          <div className="rounded-[30px] border border-cyan-300/16 bg-cyan-300/10 p-5 text-sm leading-relaxed text-cyan-50">
            Cross-trial caution still applies. A remission rate from one week-8 induction study is not automatically superior to a maintenance result from a different population.
            This layout is for orientation, not a substitute for disease severity, prior exposure, safety screening, and clinician judgement.
          </div>
        </ScrollReveal>
      </section>

      <TreatmentRankingsBoard treatments={TREATMENTS} />
    </main>
  )
}
