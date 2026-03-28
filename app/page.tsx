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

const evidencePills = [
  { value: '74%',  label: 'respond to upadacitinib',        tone: 'good', cite: 'U-ACHIEVE, NEJM 2023',  href: 'https://pubmed.ncbi.nlm.nih.gov/35644562/' },
  { value: '62%',  label: 'FMT remission (meta-analysis)',  tone: 'good', cite: '15 RCTs, PMID 41078065', href: 'https://pubmed.ncbi.nlm.nih.gov/41078065/' },
  { value: '95%',  label: 'J-pouch long-term success',      tone: 'good', cite: 'IPAA outcome studies',   href: 'https://pubmed.ncbi.nlm.nih.gov/19169164/' },
  { value: '82%',  label: 'better outcomes, Med diet',      tone: 'good', cite: '6 RCTs, PMID 40797000',  href: 'https://pubmed.ncbi.nlm.nih.gov/40797000/' },
  { value: '2.3×', label: 'more remissions, curcumin',      tone: 'good', cite: '8+ RCTs, ECCO 2025',     href: 'https://pubmed.ncbi.nlm.nih.gov/25688495/' },
  { value: '43%',  label: 'remission with VSL#3',           tone: 'good', cite: 'Meta-analysis, 20 RCTs', href: 'https://pubmed.ncbi.nlm.nih.gov/25270082/' },
  { value: '50%',  label: 'remission, mirikizumab 40 wks',  tone: 'good', cite: 'LUCENT-2, Lancet 2023',   href: 'https://pubmed.ncbi.nlm.nih.gov/36774166/' },
  { value: '44%',  label: 'remission, ustekinumab 52 wks',  tone: 'good', cite: 'UNIFI, NEJM 2019',        href: 'https://pubmed.ncbi.nlm.nih.gov/31553834/' },
  { value: '42%',  label: 'remission, vedolizumab 52 wks',  tone: 'good', cite: 'GEMINI 1, Lancet 2013',   href: 'https://pubmed.ncbi.nlm.nih.gov/23964932/' },
  { value: '5.2×', label: 'higher relapse risk, red meat',  tone: 'bad',  cite: 'Jowett et al. 2004',      href: 'https://pubmed.ncbi.nlm.nih.gov/14960471/' },
  { value: '2.8×', label: 'more flares, chronic stress',    tone: 'bad',  cite: 'Bernstein et al. 2010',   href: 'https://pubmed.ncbi.nlm.nih.gov/20070600/' },
  { value: '69%',  label: 'lower UC risk, appendectomy',    tone: 'good', cite: 'Andersson, Gut 2001',      href: 'https://pubmed.ncbi.nlm.nih.gov/11559638/' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* ── COMPACT HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-warm-200/50 py-5 text-center md:py-6">
        <div className="absolute inset-0 dot-grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-5xl px-4">

          <div className="spring-up inline-flex rounded-full border border-coral-400/25 bg-coral-50 px-3.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-coral-600" style={{ animationDelay: '0.05s' }}>
            Clinical Evidence, Distilled
          </div>

          <h1 className="spring-up font-display mt-2 text-[2rem] leading-[1.02] tracking-tight text-warm-950 sm:text-[2.5rem] md:text-[2.9rem] lg:text-[3.2rem]" style={{ animationDelay: '0.15s' }}>
            Best UC Treatments{' '}
            <span className="bg-gradient-to-r from-coral-500 via-coral-400 to-amber-500 bg-clip-text text-transparent">
              Ranked by Science
            </span>
          </h1>

          <p className="spring-up mx-auto mt-1.5 max-w-lg text-[0.78rem] leading-relaxed text-warm-500" style={{ animationDelay: '0.25s' }}>
            Trial-ranked therapies. No fake certainty — just what actually changes UC outcomes.
          </p>

          <div className="spring-up mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1" style={{ animationDelay: '0.33s' }}>
            <span className="text-[0.62rem] text-warm-500">
              <strong className="font-semibold text-warm-800">{TREATMENTS.length}+</strong> ranked therapies
            </span>
            <span className="text-warm-300">·</span>
            <span className="text-[0.62rem] text-warm-500">
              <strong className="font-semibold text-warm-800">36</strong> clinical trials
            </span>
            <span className="text-warm-300">·</span>
            <span className="text-[0.62rem] text-warm-500">
              <strong className="font-semibold text-warm-800">62%</strong> FMT remission rate
            </span>
          </div>

          <div className="spring-up mt-3 flex flex-wrap justify-center gap-2.5" style={{ animationDelay: '0.42s' }}>
            <Link
              href="/rankings"
              className="btn-shimmer rounded-full bg-coral-400 px-4.5 py-1.5 text-xs font-bold text-white hover:bg-coral-500"
            >
              Explore rankings
            </Link>
            <Link
              href="/shop"
              className="rounded-full border border-warm-300 bg-white/80 px-4.5 py-1.5 text-xs font-bold text-warm-700 hover:border-coral-400/40 hover:bg-white"
            >
              Science picks
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROVEN CLINICAL SIGNALS — auto-rotating ticker ───────────────────── */}
      <section className="spring-up border-b border-warm-200/50 bg-white/60 py-2" style={{ animationDelay: '0.52s' }}>
        <div className="ticker-wrap">
          <div className="ticker-track" style={{ gap: '8px', paddingInline: '8px' }}>
            {[...evidencePills, ...evidencePills].map((pill, i) => (
              <a
                key={i}
                href={pill.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-none w-[118px] rounded-lg border px-2.5 py-2 transition-opacity hover:opacity-80 ${
                  pill.tone === 'bad'
                    ? 'border-rose-200 bg-rose-50'
                    : 'border-warm-200 bg-white'
                }`}
              >
                <p className={`font-display text-[1rem] font-black leading-none tracking-tight ${
                  pill.tone === 'bad' ? 'text-rose-500' : 'text-warm-900'
                }`}>
                  {pill.value}
                </p>
                <p className="mt-0.5 text-[0.53rem] leading-snug text-warm-500">{pill.label}</p>
                <p className={`mt-0.5 text-[0.47rem] leading-none ${
                  pill.tone === 'bad' ? 'text-rose-400/70' : 'text-warm-400'
                }`}>
                  {pill.cite}
                </p>
              </a>
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
