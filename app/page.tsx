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
      <section className="relative overflow-hidden border-b border-warm-200/50 py-10 text-center md:py-14">
        <div className="absolute inset-0 dot-grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4">

          <div className="inline-flex rounded-full border border-coral-400/25 bg-coral-50 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-coral-600">
            Clinical Evidence, Distilled
          </div>

          <h1 className="font-display mt-4 text-4xl leading-[0.95] tracking-tight text-warm-950 sm:text-5xl md:text-[4.5rem] lg:text-[5.5rem]">
            <span className="block">Best Ulcerative Colitis</span>
            <span className="block">Treatments</span>
            <span className="block bg-gradient-to-r from-coral-500 via-coral-400 to-amber-500 bg-clip-text text-transparent">
              Ranked by Science
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-warm-600 md:text-lg">
            Trial-ranked therapies, cleaner research context, and no fake certainty about what actually changes UC outcomes.
          </p>

          {/* Inline stats — olive oil style */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-warm-500">
            <span>
              <strong className="font-display text-xl text-warm-900">{TREATMENTS.length}+</strong>
              <span className="ml-1.5 text-[0.7rem] uppercase tracking-[0.16em]">ranked therapies</span>
            </span>
            <span className="hidden text-warm-300 sm:inline">|</span>
            <span>
              <strong className="font-display text-xl text-warm-900">36</strong>
              <span className="ml-1.5 text-[0.7rem] uppercase tracking-[0.16em]">clinical trials</span>
            </span>
            <span className="hidden text-warm-300 sm:inline">|</span>
            <span>
              <strong className="font-display text-xl text-warm-900">62%</strong>
              <span className="ml-1.5 text-[0.7rem] uppercase tracking-[0.16em]">FMT remission rate</span>
            </span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/rankings"
              className="btn-shimmer rounded-full bg-coral-400 px-5 py-2.5 text-sm font-bold text-white shadow-glow-emerald hover:bg-coral-500"
            >
              Explore treatment rankings
            </Link>
            <Link
              href="/shop"
              className="rounded-full border border-warm-300 bg-white/80 px-5 py-2.5 text-sm font-bold text-warm-700 hover:border-coral-400/40 hover:bg-white"
            >
              Science-backed picks
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROVEN CLINICAL SIGNALS — horizontal scroll pills ────────────────── */}
      <section className="border-b border-warm-200/50 bg-white/60 px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-coral-500">
              Proven Clinical Signals
            </p>
            <Link href="/research" className="text-[0.7rem] font-semibold text-coral-400 hover:text-coral-600">
              All research →
            </Link>
          </div>
          <div className="horizontal-scroll gap-2.5 pb-1">
            {evidencePills.map((pill) => (
              <div
                key={pill.value + pill.label}
                className={`flex-none w-[148px] rounded-2xl border px-3.5 py-3 ${
                  pill.tone === 'bad'
                    ? 'border-rose-200 bg-rose-50'
                    : 'border-warm-200 bg-white'
                }`}
              >
                <p className={`font-display text-[1.65rem] font-black leading-none tracking-tight ${
                  pill.tone === 'bad' ? 'text-rose-500' : 'text-warm-900'
                }`}>
                  {pill.value}
                </p>
                <p className="mt-1 text-[0.63rem] leading-snug text-warm-500">{pill.label}</p>
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
