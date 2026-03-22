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
    suffix: ' RCTs',
    label: 'in the 2025 network meta-analysis',
    detail: 'The latest cross-trial ranking put upadacitinib first for remission, endoscopy, and histology.',
  },
  {
    value: 5,
    prefix: 'NNT ',
    label: 'for fecal microbiota transplant',
    detail: 'FMT remains investigational, but the pooled remission signal is too strong to ignore.',
  },
]

const evidenceSignals: EvidenceSignal[] = [
  {
    id: 'meat',
    badge: 'Harmful',
    tone: 'harmful',
    value: 5.19,
    prefix: 'OR ',
    decimals: 2,
    title: 'red and processed meat relapse signal',
    detail: 'Among the clearest dietary risk multipliers in the UC literature.',
  },
  {
    id: 'stress',
    badge: 'Harmful',
    tone: 'harmful',
    value: 2.8,
    prefix: 'HR ',
    decimals: 1,
    title: 'flare risk tied to sustained stress',
    detail: 'Psychological load is not background noise. It is a measurable disease amplifier.',
  },
  {
    id: 'curcumin',
    badge: 'Protective',
    tone: 'protective',
    value: 2.33,
    prefix: 'RR ',
    decimals: 2,
    title: 'clinical remission signal with curcumin',
    detail: 'One of the strongest low-cost adjunct options in mild-to-moderate UC.',
  },
  {
    id: 'appendectomy',
    badge: 'Protective',
    tone: 'protective',
    value: 0.31,
    prefix: 'OR ',
    decimals: 2,
    title: 'lower UC risk with early appendectomy',
    detail: 'A striking protective association that now has RCT-level follow-up in relapse prevention.',
  },
  {
    id: 'fmt',
    badge: 'Protective',
    tone: 'protective',
    value: 5,
    prefix: 'NNT ',
    title: 'patients needed for one extra FMT remission',
    detail: 'Investigational, but still one of the most dramatic pooled treatment effects on the site.',
  },
]

const navCardStyles: Record<string, string> = {
  Rankings: 'from-emerald-accent/18 to-emerald-accent/4',
  Blog: 'from-amber-accent/18 to-amber-accent/4',
  Research: 'from-teal-accent/18 to-teal-accent/4',
  Shop: 'from-violet-400/18 to-violet-400/4',
}

const latestPapers = [...researchPapers].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

const highlightedTreatment = TREATMENTS.find((treatment) => treatment.name === 'Upadacitinib') ?? TREATMENTS[0]

const featuredTreatmentStats = [
  {
    label: 'Clinical response',
    value: highlightedTreatment.responseRate,
  },
  {
    label: 'Induction remission',
    value: highlightedTreatment.remissionRate,
  },
  {
    label: 'Pivotal trials',
    value: highlightedTreatment.trials,
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-navy-950 text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#08111c_0%,#0a1628_58%,#08111c_100%)]" />
        <div className="hero-orb hero-orb-emerald orb-drift-slow left-[-12rem] top-[-6rem] h-[28rem] w-[28rem]" />
        <div className="hero-orb hero-orb-teal orb-drift-reverse right-[-8rem] top-10 h-[30rem] w-[30rem]" />
        <div className="hero-orb hero-orb-amber orb-drift-delayed bottom-[-8rem] left-[42%] h-64 w-64 opacity-45" />
        <div className="absolute inset-0 opacity-40 dot-grid-pattern" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 md:px-6 md:pb-28 md:pt-16">
          <div className="hero-shimmer glass-panel px-6 py-12 text-center md:px-10 md:py-20">
            <div className="mx-auto max-w-5xl">
              <div className="animate-fade-in-up">
                <div className="inline-flex rounded-full border border-emerald-accent/20 bg-emerald-accent/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/80">
                  Clinical Evidence, Distilled
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                <h1 className="font-display mt-6 text-5xl leading-[0.92] tracking-tight text-white md:text-[5.9rem] lg:text-[6.7rem]">
                  <span className="block">Best Ulcerative Colitis Treatments</span>
                  <span className="block bg-gradient-to-r from-emerald-100 via-emerald-accent to-teal-accent bg-clip-text text-transparent">
                    Ranked by Science
                  </span>
                </h1>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-2xl">
                  Trial-ranked therapies, cleaner research context, and no fake certainty about what actually changes UC outcomes.
                </p>
              </div>

              <div className="animate-fade-in-up mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: '320ms' }}>
                <Link
                  href="/rankings"
                  className="rounded-full bg-emerald-accent px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow-emerald hover:bg-[#2ed37a]"
                >
                  Explore treatment rankings
                </Link>
                <Link
                  href="/shop"
                  className="rounded-full border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white hover:border-emerald-accent/30 hover:bg-white/[0.08]"
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
                    <p className="font-display text-4xl tracking-tight text-white md:text-5xl">
                      <CountUpMetric
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </p>
                    <p className="mt-2 text-sm font-semibold text-emerald-100">{stat.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/70">
              Proven Health Benefits
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-5xl">
              The outcome signals worth knowing before the next treatment decision.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              These are the dramatic findings that keep resurfacing across relapse risk, microbiome strategy, surgery,
              and adjunct therapy. The effect sizes are what make them memorable.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {evidenceSignals.map((signal, index) => {
            const harmful = signal.tone === 'harmful'

            return (
              <ScrollReveal key={signal.id} delay={Math.min(index * 55, 240)}>
                <div
                  className={`card-lift relative overflow-hidden rounded-[34px] border p-6 ${
                    harmful
                      ? 'border-rose-400/28 bg-[linear-gradient(180deg,rgba(127,29,29,0.18),rgba(20,34,54,0.82))]'
                      : 'border-emerald-accent/28 bg-[linear-gradient(180deg,rgba(0,200,83,0.12),rgba(20,34,54,0.82))]'
                  }`}
                >
                  <div
                    className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r ${
                      harmful ? 'from-rose-300/40 via-rose-300/15 to-transparent' : 'from-emerald-accent/40 via-emerald-accent/15 to-transparent'
                    }`}
                  />
                  <span
                    className={`rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${
                      harmful
                        ? 'border-rose-300/24 bg-rose-300/10 text-rose-100'
                        : 'border-emerald-accent/24 bg-emerald-accent/10 text-emerald-100'
                    }`}
                  >
                    {signal.badge}
                  </span>

                  <p className="font-display mt-6 text-4xl tracking-tight text-white md:text-[3.2rem]">
                    <CountUpMetric
                      value={signal.value}
                      prefix={signal.prefix}
                      suffix={signal.suffix}
                      decimals={signal.decimals}
                    />
                  </p>
                  <p className="mt-4 text-base font-semibold leading-snug text-white">{signal.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{signal.detail}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 md:px-6 md:py-4">
        <ScrollReveal>
          <div className="hero-shimmer glass-panel relative overflow-hidden p-6 md:p-8">
            <div className="hero-orb hero-orb-emerald orb-drift-delayed right-[-8rem] top-[-5rem] h-56 w-56 opacity-40" />

            <div className="relative grid gap-6 lg:grid-cols-[1.2fr,0.85fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-emerald-accent/24 bg-emerald-accent/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-emerald-100">
                    Featured Treatment
                  </span>
                  <span className="rounded-full border border-cyan-400/24 bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-100">
                    #1 in 2025 NMA
                  </span>
                </div>

                <h2 className="font-display mt-5 text-3xl tracking-tight text-white md:text-5xl">
                  Upadacitinib keeps showing up at the top when fast remission matters.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                  {highlightedTreatment.name} ({highlightedTreatment.brandNames}) is a {highlightedTreatment.className.toLowerCase()}
                  with one of the strongest oral induction profiles in the entire board. It stands out for speed,
                  symptom relief, and cross-trial ranking strength.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/blog/jak-inhibitors-uc"
                    className="rounded-full bg-emerald-accent px-5 py-3 text-sm font-semibold text-navy-950 shadow-glow-emerald hover:bg-[#2ed37a]"
                  >
                    Read the JAK guide
                  </Link>
                  <Link
                    href="/rankings"
                    className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white hover:border-emerald-accent/30 hover:bg-white/[0.08]"
                  >
                    View the rankings board
                  </Link>
                </div>
              </div>

              <div className="glass-panel border border-white/10 bg-white/[0.04] p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Why It Stands Out
                </p>

                <div className="mt-5 grid gap-3">
                  {featuredTreatmentStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[24px] border border-white/8 bg-[rgba(8,17,28,0.48)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{stat.label}</p>
                      <p className="font-display mt-2 text-2xl tracking-tight text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-300">{highlightedTreatment.notes}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 pt-8 md:px-6 md:pb-10 md:pt-12">
        <ScrollReveal>
          <ResearchCarousel papers={latestPapers} />
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
        <ScrollReveal>
          <MetaAnalysisTeaser findings={metaFindings} studyCount={researchPapers.length} />
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-teal-100/70">Quick Navigation</p>
              <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-5xl">
                Jump straight to rankings, articles, research, or product picks.
              </h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-emerald-100 hover:text-emerald-50">
              Open the full article library →
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {QUICK_NAV_CARDS.map((card, index) => (
            <ScrollReveal key={card.title} delay={Math.min(index * 60, 220)}>
              <Link
                href={card.href}
                className={`card-lift block rounded-[32px] border border-white/8 bg-gradient-to-br ${navCardStyles[card.title] || 'from-white/[0.06] to-white/[0.03]'} p-6`}
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-300">Section</p>
                <h3 className="font-display mt-4 text-3xl tracking-tight text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{card.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-100">
                  Open section <span>→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 pt-4 md:px-6 md:pb-20">
        <ScrollReveal>
          <MedicalDisclaimer />
        </ScrollReveal>
      </section>
    </main>
  )
}
