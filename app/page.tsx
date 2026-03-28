import Link from 'next/link'
import type { Metadata } from 'next'
import researchPapers from './research-carousel.json'
import metaFindings from './meta-analysis-findings.json'
import ResearchCarousel from './ResearchCarousel'
import MetaAnalysisTeaser from './MetaAnalysisTeaser'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import CountUpMetric from '@/components/CountUpMetric'
import ScrollReveal from '@/components/ScrollReveal'
import { QUICK_NAV_CARDS } from '@/lib/site'
import { TREATMENTS } from '@/lib/treatments'
import { TOP_RANKED_PROCEDURES } from '@/lib/rankedProcedures'
import FeaturedProcedures from '@/components/FeaturedProcedures'

type HeroStat = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  detail: string
}

type EvidenceSignal = {
  id: string
  badge: string
  tone: 'harmful' | 'protective'
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  title: string
  detail: string
}

export const metadata: Metadata = {
  title: 'Colitis Clearly | Best Ulcerative Colitis Treatments Ranked by Science',
  description:
    'An evidence-first ulcerative colitis site with clinical-trial-ranked treatments, research snapshots, diet guidance, and science-backed recommendations.',
}

const heroStats: HeroStat[] = [
  {
    value: TREATMENTS.length,
    suffix: '+',
    label: 'ranked therapies',
    detail: 'One board spanning 5-ASA drugs, biologics, oral small molecules, rescue therapy, and surgery.',
  },
  {
    value: 36,
    label: 'clinical trials in the 2025 network analysis',
    detail: 'The largest cross-trial comparison put upadacitinib first for remission, endoscopy, and histology.',
  },
  {
    value: 62,
    suffix: '%',
    label: 'remission rate with FMT in meta-analysis',
    detail: 'Fecal microbiota transplant is investigational, but the pooled remission signal across 15 trials is striking.',
  },
]

const evidenceSignals: EvidenceSignal[] = [
  {
    id: 'meat',
    badge: 'Harmful',
    tone: 'harmful',
    value: 5.2,
    suffix: 'x',
    decimals: 1,
    title: 'higher relapse risk from red and processed meat',
    detail: 'Eating red or processed meat raises UC relapse risk more than 5-fold — among the clearest dietary signals in the literature.',
  },
  {
    id: 'stress',
    badge: 'Harmful',
    tone: 'harmful',
    value: 2.8,
    suffix: 'x',
    decimals: 1,
    title: 'more flares linked to chronic stress',
    detail: 'Psychological stress is a measurable UC trigger. Patients under sustained stress experience nearly 3x more flares.',
  },
  {
    id: 'curcumin',
    badge: 'Protective',
    tone: 'protective',
    value: 2.3,
    suffix: 'x',
    decimals: 1,
    title: 'more patients reach remission with curcumin',
    detail: 'One of the strongest low-cost adjunct options in mild-to-moderate UC, recognized by ECCO 2025 guidelines.',
  },
  {
    id: 'appendectomy',
    badge: 'Protective',
    tone: 'protective',
    value: 69,
    suffix: '%',
    title: 'lower UC risk with early appendectomy',
    detail: 'A striking association — people who had appendectomies early in life show 69% lower UC risk in large population studies.',
  },
  {
    id: 'fmt',
    badge: 'Protective',
    tone: 'protective',
    value: 62,
    suffix: '%',
    title: 'of FMT patients achieve remission in trials',
    detail: 'Still investigational, but 62% remission across 15 randomized trials is one of the most dramatic pooled effects seen in UC.',
  },
]

const navCardStyles: Record<string, { gradient: string; accent: string }> = {
  Rankings: { gradient: 'from-coral-400/10 to-coral-400/3', accent: 'text-coral-500' },
  Blog:     { gradient: 'from-amber-400/10 to-amber-400/3', accent: 'text-amber-600' },
  Research: { gradient: 'from-teal-500/10 to-teal-500/3',  accent: 'text-teal-600' },
  Shop:     { gradient: 'from-violet-400/10 to-violet-400/3', accent: 'text-violet-500' },
}

const latestPapers = [...researchPapers].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

const highlightedTreatment = TREATMENTS.find((t) => t.name === 'Upadacitinib') ?? TREATMENTS[0]

const featuredTreatmentStats = [
  { label: 'Clinical response',   value: highlightedTreatment.responseRate },
  { label: 'Induction remission', value: highlightedTreatment.remissionRate },
  { label: 'Pivotal trials',      value: highlightedTreatment.trials },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-warm-200/50">
        <div className="absolute inset-0 dot-grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 md:px-6 md:pb-28 md:pt-16">
          <div className="hero-shimmer glass-panel px-6 py-12 text-center md:px-10 md:py-20">
            <div className="mx-auto max-w-5xl">

              <div className="animate-fade-in-up">
                <div className="inline-flex rounded-full border border-coral-400/25 bg-coral-50 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-coral-600">
                  Clinical Evidence, Distilled
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                <h1 className="font-display mt-6 text-5xl leading-[0.92] tracking-tight text-warm-950 md:text-[5.9rem] lg:text-[6.7rem]">
                  <span className="block">Best Ulcerative Colitis Treatments</span>
                  <span className="block bg-gradient-to-r from-coral-500 via-coral-400 to-amber-500 bg-clip-text text-transparent">
                    Ranked by Science
                  </span>
                </h1>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-warm-600 md:text-2xl">
                  Trial-ranked therapies, cleaner research context, and no fake certainty about what actually changes UC outcomes.
                </p>
              </div>

              <div className="animate-fade-in-up mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: '320ms' }}>
                <Link
                  href="/rankings"
                  className="btn-shimmer rounded-full bg-coral-400 px-6 py-3.5 text-sm font-bold text-white shadow-glow-emerald hover:bg-coral-500"
                >
                  Explore treatment rankings
                </Link>
                <Link
                  href="/shop"
                  className="rounded-full border border-warm-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-warm-700 hover:border-coral-400/40 hover:bg-white"
                >
                  Browse science-backed recommendations
                </Link>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stat-pill animate-fade-in-up px-5 py-5 text-left"
                    style={{ animationDelay: `${420 + index * 90}ms` }}
                  >
                    <p className="font-display text-4xl tracking-tight text-warm-900 md:text-5xl">
                      <CountUpMetric
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </p>
                    <p className="mt-2 text-sm font-bold text-coral-500">{stat.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-warm-500">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Evidence signals ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-coral-500/80">
              Proven Health Signals
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-warm-900 md:text-5xl">
              The outcome signals worth knowing before the next treatment decision.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-warm-600 md:text-base">
              Dramatic findings that keep resurfacing across relapse risk, microbiome strategy, surgery, and adjunct therapy.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {evidenceSignals.map((signal, index) => {
            const harmful = signal.tone === 'harmful'
            return (
              <ScrollReveal key={signal.id} delay={Math.min(index * 55, 240)}>
                <div
                  className={`card-lift relative overflow-hidden rounded-[34px] border p-6 bg-white ${
                    harmful
                      ? 'border-rose-200 shadow-[0_4px_24px_rgba(220,80,80,0.07)]'
                      : 'border-coral-200/60 shadow-[0_4px_24px_rgba(244,132,95,0.07)]'
                  }`}
                >
                  <div
                    className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r ${
                      harmful ? 'from-rose-400/40 via-rose-200/15 to-transparent'
                               : 'from-coral-400/40 via-coral-200/15 to-transparent'
                    }`}
                  />
                  <span
                    className={`rounded-full border px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] ${
                      harmful
                        ? 'border-rose-200 bg-rose-50 text-rose-600'
                        : 'border-coral-200 bg-coral-50 text-coral-600'
                    }`}
                  >
                    {signal.badge}
                  </span>

                  <p className={`font-display mt-6 text-4xl tracking-tight md:text-[3.2rem] ${
                    harmful ? 'text-rose-500' : 'text-coral-500'
                  }`}>
                    <CountUpMetric
                      value={signal.value}
                      prefix={signal.prefix}
                      suffix={signal.suffix}
                      decimals={signal.decimals}
                    />
                  </p>
                  <p className="mt-4 text-base font-bold leading-snug text-warm-900">{signal.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-warm-500">{signal.detail}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* ── Featured treatment ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-2 md:px-6 md:py-4">
        <ScrollReveal>
          <div className="hero-shimmer glass-panel relative overflow-hidden p-6 md:p-8">
            <div className="relative grid gap-6 lg:grid-cols-[1.2fr,0.85fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-coral-300/50 bg-coral-50 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-coral-600">
                    Featured Treatment
                  </span>
                  <span className="rounded-full border border-amber-300/50 bg-amber-50 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-amber-700">
                    #1 in 2025 NMA
                  </span>
                </div>

                <h2 className="font-display mt-5 text-3xl tracking-tight text-warm-900 md:text-5xl">
                  Upadacitinib keeps showing up at the top when fast remission matters.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-warm-600 md:text-lg">
                  {highlightedTreatment.name} ({highlightedTreatment.brandNames}) is a {highlightedTreatment.className.toLowerCase()}
                  with one of the strongest oral induction profiles in the entire board. It stands out for speed,
                  symptom relief, and cross-trial ranking strength.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/blog/jak-inhibitors-uc"
                    className="btn-shimmer rounded-full bg-coral-400 px-5 py-3 text-sm font-bold text-white shadow-glow-emerald hover:bg-coral-500"
                  >
                    Read the JAK guide
                  </Link>
                  <Link
                    href="/rankings"
                    className="rounded-full border border-warm-300 bg-white/70 px-5 py-3 text-sm font-bold text-warm-700 hover:border-coral-300 hover:bg-white"
                  >
                    View the rankings board
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-warm-200 bg-white/90 p-5 shadow-card-warm">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-warm-400">
                  Why It Stands Out
                </p>
                <div className="mt-5 grid gap-3">
                  {featuredTreatmentStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[18px] border border-warm-100 bg-warm-50 px-4 py-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warm-400">{stat.label}</p>
                      <p className="font-display mt-2 text-2xl tracking-tight text-warm-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-warm-500">{highlightedTreatment.notes}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Ranked Procedures ─────────────────────────────────────────────────── */}
      <FeaturedProcedures procedures={TOP_RANKED_PROCEDURES} />

      {/* ── Research carousel ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-6 pt-8 md:px-6 md:pb-10 md:pt-12">
        <ScrollReveal>
          <ResearchCarousel papers={latestPapers} />
        </ScrollReveal>
      </section>

      {/* ── Meta-analysis teaser ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
        <ScrollReveal>
          <MetaAnalysisTeaser findings={metaFindings} studyCount={researchPapers.length} />
        </ScrollReveal>
      </section>

      {/* ── Quick navigation ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-warm-400">Quick Navigation</p>
              <h2 className="font-display mt-3 text-3xl tracking-tight text-warm-900 md:text-5xl">
                Jump straight to rankings, articles, research, or product picks.
              </h2>
            </div>
            <Link href="/blog" className="text-sm font-bold text-coral-500 hover:text-coral-600">
              Open the full article library →
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {QUICK_NAV_CARDS.map((card, index) => {
            const style = navCardStyles[card.title] ?? { gradient: 'from-warm-100/50 to-warm-50/20', accent: 'text-warm-600' }
            return (
              <ScrollReveal key={card.title} delay={Math.min(index * 60, 220)}>
                <Link
                  href={card.href}
                  className={`card-lift block rounded-[32px] border border-warm-200/70 bg-gradient-to-br ${style.gradient} bg-white/70 p-6`}
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-warm-400">Section</p>
                  <h3 className="font-display mt-4 text-3xl tracking-tight text-warm-900">{card.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-warm-600">{card.description}</p>
                  <div className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${style.accent}`}>
                    Open section <span>→</span>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* ── Disclaimer ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-4 md:px-6 md:pb-20">
        <ScrollReveal>
          <MedicalDisclaimer />
        </ScrollReveal>
      </section>
    </main>
  )
}
