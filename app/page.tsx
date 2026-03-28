import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import { TREATMENTS } from '@/lib/treatments'
import { RANKED_PROCEDURES } from '@/lib/rankedProcedures'
import FeaturedProcedures from '@/components/FeaturedProcedures'

export const metadata: Metadata = {
  title: 'Colitis Clearly | Best Ulcerative Colitis Treatments Ranked by Science',
  description:
    'An evidence-first ulcerative colitis site with clinical-trial-ranked treatments, research snapshots, diet guidance, and science-backed recommendations.',
}

// Horizontal scroll pills — shown below the hero, exactly like the olive oil "Proven Health Benefits" strip
const evidencePills = [
  { value: '74%',   label: 'respond to upadacitinib',         tone: 'good' },
  { value: '62%',   label: 'FMT remission in meta-analysis',  tone: 'good' },
  { value: '95%',   label: 'J-pouch surgical success',        tone: 'good' },
  { value: '82%',   label: 'better outcomes, Mediterranean',   tone: 'good' },
  { value: '2.3×',  label: 'more remissions with curcumin',   tone: 'good' },
  { value: '43%',   label: 'remission with VSL#3 probiotic',  tone: 'good' },
  { value: '69%',   label: 'lower UC risk, appendectomy',     tone: 'good' },
  { value: '5.2×',  label: 'higher relapse risk, red meat',   tone: 'bad'  },
  { value: '2.8×',  label: 'more flares from chronic stress', tone: 'bad'  },
  { value: '50%',   label: 'remission — mirikizumab 40 wks',  tone: 'good' },
  { value: '44%',   label: 'remission — ustekinumab 52 wks',  tone: 'good' },
  { value: '42%',   label: 'remission — vedolizumab 52 wks',  tone: 'good' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* ── COMPACT HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-warm-200/50 py-5 text-center md:py-6">
        <div className="absolute inset-0 dot-grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4">

          <div className="inline-flex rounded-full border border-coral-400/25 bg-coral-50 px-3.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-coral-600">
            Clinical Evidence, Distilled
          </div>

          <h1 className="font-display mt-2.5 text-[1.9rem] leading-[1] tracking-tight text-warm-950 sm:text-[2.4rem] md:text-[3rem] lg:text-[3.4rem]">
            <span>Best UC Treatments </span>
            <span className="bg-gradient-to-r from-coral-500 via-coral-400 to-amber-500 bg-clip-text text-transparent">
              Ranked by Science
            </span>
          </h1>

          <p className="mx-auto mt-1.5 max-w-xl text-[0.8rem] leading-relaxed text-warm-500 sm:text-sm">
            Trial-ranked therapies. No fake certainty — just what actually changes UC outcomes.
          </p>

          {/* Inline stats */}
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            <span>
              <strong className="font-display text-lg text-warm-900">{TREATMENTS.length}+</strong>
              <span className="ml-1 text-[0.65rem] uppercase tracking-[0.14em] text-warm-500">ranked therapies</span>
            </span>
            <span className="hidden text-warm-300 sm:inline">|</span>
            <span>
              <strong className="font-display text-lg text-warm-900">36</strong>
              <span className="ml-1 text-[0.65rem] uppercase tracking-[0.14em] text-warm-500">clinical trials</span>
            </span>
            <span className="hidden text-warm-300 sm:inline">|</span>
            <span>
              <strong className="font-display text-lg text-warm-900">62%</strong>
              <span className="ml-1 text-[0.65rem] uppercase tracking-[0.14em] text-warm-500">FMT remission rate</span>
            </span>
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-2.5">
            <Link
              href="/rankings"
              className="btn-shimmer rounded-full bg-coral-400 px-4.5 py-2 text-xs font-bold text-white shadow-glow-emerald hover:bg-coral-500"
            >
              Explore treatment rankings
            </Link>
            <Link
              href="/shop"
              className="rounded-full border border-warm-300 bg-white/80 px-4.5 py-2 text-xs font-bold text-warm-700 hover:border-coral-400/40 hover:bg-white"
            >
              Science-backed picks
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROVEN CLINICAL SIGNALS — auto-rotating ticker ───────────────────── */}
      <section className="border-b border-warm-200/50 bg-white/60 py-3">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.28em] text-coral-500">
              Proven Clinical Signals
            </p>
            <Link href="/research" className="text-[0.68rem] font-semibold text-coral-400 hover:text-coral-600">
              All research →
            </Link>
          </div>
        </div>
        {/* Ticker — seamless loop via duplicated pills */}
        <div className="ticker-wrap">
          <div className="ticker-track" style={{ gap: '10px', paddingInline: '10px' }}>
            {[...evidencePills, ...evidencePills].map((pill, i) => (
              <div
                key={i}
                className={`flex-none w-[136px] rounded-2xl border px-3 py-2.5 ${
                  pill.tone === 'bad'
                    ? 'border-rose-200 bg-rose-50'
                    : 'border-warm-200 bg-white'
                }`}
              >
                <p className={`font-display text-[1.5rem] font-black leading-none tracking-tight ${
                  pill.tone === 'bad' ? 'text-rose-500' : 'text-warm-900'
                }`}>
                  {pill.value}
                </p>
                <p className="mt-0.5 text-[0.61rem] leading-snug text-warm-500">{pill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL RANKED PROCEDURES — all 15 with photos + filter ─────────────── */}
      <FeaturedProcedures procedures={RANKED_PROCEDURES} />

      {/* ── DISCLAIMER ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 pb-14 pt-2">
        <MedicalDisclaimer />
      </section>
    </main>
  )
}
