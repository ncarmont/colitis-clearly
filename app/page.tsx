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
  title: 'Project Remission UC | Best Ulcerative Colitis Treatments Ranked by Science',
  description:
    'A project to find the most effective methods for ulcerative colitis remission — clinical-trial-ranked treatments, research snapshots, diet guidance, and science-backed recommendations.',
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

const signalIcons: Record<string, string> = {
  meat: '🥩',
  stress: '⚡',
  nsaids: '💊',
  smoking: '🚬',
  curcumin: '🌿',
  appendectomy: '🔬',
  fmt: '🦠',
  omega3: '🐟',
  vitd: '☀️',
  exercise: '🏃',
  probiotics: '🧫',
}

const evidenceSignals: EvidenceSignal[] = [
  // ─── Harmful ────────────────────────────────────────────
  {
    id: 'meat',
    badge: 'Harmful',
    tone: 'harmful',
    value: 5.2,
    suffix: 'x',
    decimals: 1,
    title: 'higher relapse risk from red & processed meat',
    detail: 'The clearest dietary risk signal in UC. Red and processed meat raises relapse odds more than 5-fold across multiple cohort studies.',
  },
  {
    id: 'stress',
    badge: 'Harmful',
    tone: 'harmful',
    value: 2.8,
    suffix: 'x',
    decimals: 1,
    title: 'more flares linked to chronic psychological stress',
    detail: 'Sustained stress is a measurable UC amplifier — patients under high stress had nearly 3× more flares in longitudinal tracking.',
  },
  {
    id: 'nsaids',
    badge: 'Harmful',
    tone: 'harmful',
    value: 3.1,
    suffix: 'x',
    decimals: 1,
    title: 'higher flare risk from regular NSAID use',
    detail: 'Ibuprofen, naproxen, and other NSAIDs directly irritate gut mucosa. Even occasional use can trigger flares during remission.',
  },
  // ─── Protective ─────────────────────────────────────────
  {
    id: 'curcumin',
    badge: 'Protective',
    tone: 'protective',
    value: 2.3,
    suffix: 'x',
    decimals: 1,
    title: 'more patients reach remission with turmeric (curcumin)',
    detail: 'One of the strongest low-cost adjunct options in mild-to-moderate UC, recognized by ECCO 2025 guidelines.',
  },
  {
    id: 'appendectomy',
    badge: 'Protective',
    tone: 'protective',
    value: 69,
    suffix: '%',
    title: 'lower UC risk with early appendectomy',
    detail: 'A striking protective association — people with early appendectomies have 69% lower UC risk across multiple cohort studies.',
  },
  {
    id: 'fmt',
    badge: 'Protective',
    tone: 'protective',
    value: 62,
    suffix: '%',
    title: 'remission rate with FMT across 15 RCTs',
    detail: 'Still investigational, but 62% pooled remission across 15 randomized trials is one of the most dramatic pooled effects in IBD.',
  },
  {
    id: 'omega3',
    badge: 'Protective',
    tone: 'protective',
    value: 1.8,
    suffix: 'x',
    decimals: 1,
    title: 'better remission maintenance with omega-3 (fish oil)',
    detail: 'Fish oil supplementation shows a consistent remission-maintenance signal across multiple UC trials, especially for mild disease.',
  },
  {
    id: 'vitd',
    badge: 'Protective',
    tone: 'protective',
    value: 40,
    suffix: '%',
    title: 'lower flare frequency with optimal vitamin D',
    detail: 'Low vitamin D is strongly linked to higher UC severity. Correcting deficiency significantly reduces relapse frequency.',
  },
  {
    id: 'exercise',
    badge: 'Protective',
    tone: 'protective',
    value: 35,
    suffix: '%',
    title: 'fewer relapses with regular moderate exercise',
    detail: 'Moderate aerobic activity reduces systemic inflammation and is associated with 35% fewer relapses in observational UC data.',
  },
  {
    id: 'probiotics',
    badge: 'Protective',
    tone: 'protective',
    value: 1.9,
    suffix: 'x',
    decimals: 1,
    title: 'higher remission rate with probiotics as adjunct therapy',
    detail: 'VSL#3 and Lactobacillus rhamnosus GG show the strongest signals for maintaining remission alongside standard UC therapy.',
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
        <div className="hero-orb hero-orb-emerald orb-drift-slow left-[-10rem] top-[-4rem] h-[24rem] w-[24rem]" />
        <div className="hero-orb hero-orb-teal orb-drift-reverse right-[-6rem] top-8 h-[26rem] w-[26rem]" />
        <div className="hero-orb hero-orb-amber orb-drift-delayed bottom-[-5rem] left-[42%] h-52 w-52 opacity-40" />
        <div className="absolute inset-0 opacity-40 dot-grid-pattern" />

        {/* Floating particles */}
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <div className="particle h-[3px] w-[3px]" style={{ left: '12%', top: '55%', '--dur': '9s', '--delay': '0s', '--drift': '14px' } as any} />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <div className="particle h-[4px] w-[4px]" style={{ left: '33%', top: '68%', '--dur': '13s', '--delay': '2.5s', '--drift': '-10px' } as any} />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <div className="particle h-[2px] w-[2px]" style={{ left: '57%', top: '58%', '--dur': '11s', '--delay': '1s', '--drift': '18px' } as any} />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <div className="particle h-[5px] w-[5px]" style={{ left: '74%', top: '72%', '--dur': '10s', '--delay': '3.5s', '--drift': '-14px' } as any} />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <div className="particle h-[3px] w-[3px]" style={{ left: '88%', top: '50%', '--dur': '12s', '--delay': '0.8s', '--drift': '10px' } as any} />

        <div className="relative mx-auto max-w-7xl px-4 pb-4 pt-3 md:px-6 md:pb-5 md:pt-4">
          <div className="hero-shimmer glass-panel px-5 py-5 text-center md:px-8 md:py-7">
            <div className="mx-auto max-w-5xl">
              <div className="animate-fade-in-up">
                <div className="inline-flex rounded-full border border-emerald-accent/20 bg-emerald-accent/10 px-3.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-orange-100/80">
                  Project Remission UC — Clinical Evidence, Distilled
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                <h1 className="font-display mt-3 text-[2.2rem] leading-[0.94] tracking-tight text-white md:text-[3.8rem] lg:text-[4.4rem]">
                  <span className="block">Best Ulcerative Colitis Treatments</span>
                  <span className="animate-gradient-text block bg-gradient-to-r from-orange-100 via-emerald-accent to-teal-accent bg-clip-text text-transparent">
                    Ranked by Science
                  </span>
                </h1>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                <p className="mx-auto mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                  A project to find the most effective methods for UC remission — trial-ranked therapies, no fake certainty.
                </p>
              </div>

              <div className="animate-fade-in-up mt-4 flex flex-wrap justify-center gap-2.5" style={{ animationDelay: '320ms' }}>
                <Link
                  href="/rankings"
                  className="btn-shimmer rounded-full bg-emerald-accent px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-glow-emerald hover:bg-[#ff9d84]"
                >
                  Explore treatment rankings
                </Link>
                <Link
                  href="/shop"
                  className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white hover:border-emerald-accent/30 hover:bg-white/[0.08]"
                >
                  Browse science-backed picks
                </Link>
              </div>

              <div className="mt-4 grid gap-2.5 md:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stat-pill stat-pop px-4 py-3 text-left"
                    style={{ animationDelay: `${420 + index * 90}ms` }}
                  >
                    <p className="font-display text-2xl tracking-tight text-white md:text-3xl">
                      <CountUpMetric
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </p>
                    <p className="mt-1 text-xs font-semibold text-orange-100">{stat.label}</p>
                    <p className="mt-0.5 text-[0.7rem] leading-relaxed text-slate-400">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-5 md:px-6 md:py-7">
        <ScrollReveal>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-orange-100/70">
                Evidence Signals
              </p>
              <h2 className="font-display mt-2 text-2xl tracking-tight text-white md:text-4xl">
                What the data actually says — harmful and protective.
              </h2>
            </div>
            <p className="text-xs text-slate-400 md:text-sm">Effect sizes from peer-reviewed UC trials</p>
          </div>
        </ScrollReveal>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {evidenceSignals.map((signal, index) => {
            const harmful = signal.tone === 'harmful'

            return (
              <ScrollReveal key={signal.id} delay={Math.min(index * 40, 200)}>
                <div
                  className={`card-lift relative overflow-hidden rounded-xl border p-4 ${
                    harmful
                      ? 'border-rose-400/28 bg-[linear-gradient(180deg,rgba(127,29,29,0.18),rgba(20,34,54,0.82))]'
                      : 'border-emerald-accent/28 bg-[linear-gradient(180deg,rgba(255,140,107,0.10),rgba(20,34,54,0.82))]'
                  }`}
                >
                  <div
                    className={`absolute inset-x-4 top-0 h-px bg-gradient-to-r ${
                      harmful ? 'from-rose-300/40 via-rose-300/15 to-transparent' : 'from-emerald-accent/40 via-emerald-accent/15 to-transparent'
                    }`}
                  />

                  {/* Icon image */}
                  <div className={`mb-2.5 flex h-9 w-9 items-center justify-center rounded-2xl text-xl ${
                    harmful ? 'bg-rose-300/12' : 'bg-emerald-accent/12'
                  }`}>
                    {signalIcons[signal.id] ?? '📊'}
                  </div>

                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${
                      harmful
                        ? 'border-rose-300/24 bg-rose-300/10 text-rose-100'
                        : 'border-emerald-accent/24 bg-emerald-accent/10 text-orange-100'
                    }`}
                  >
                    {signal.badge}
                  </span>

                  <p className="font-display mt-3 text-3xl tracking-tight text-white md:text-4xl">
                    <CountUpMetric
                      value={signal.value}
                      prefix={signal.prefix}
                      suffix={signal.suffix}
                      decimals={signal.decimals}
                    />
                  </p>
                  <p className="mt-2.5 text-sm font-semibold leading-snug text-white">{signal.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{signal.detail}</p>
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
                  <span className="rounded-full border border-emerald-accent/24 bg-emerald-accent/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-orange-100">
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
                    className="rounded-full bg-emerald-accent px-5 py-3 text-sm font-semibold text-navy-950 shadow-glow-emerald hover:bg-[#ff9d84]"
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
                      className="rounded-xl border border-white/8 bg-[rgba(8,17,28,0.48)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
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

      {/* Ranked Procedures */}
      <FeaturedProcedures procedures={TOP_RANKED_PROCEDURES} />

      <section className="mx-auto max-w-7xl px-4 pb-4 pt-6 md:px-6 md:pb-6 md:pt-8">
        <ScrollReveal>
          <ResearchCarousel papers={latestPapers} />
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-6">
        <ScrollReveal>
          <MetaAnalysisTeaser findings={metaFindings} studyCount={researchPapers.length} />
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-5 md:px-6 md:py-8">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-teal-100/70">Quick Navigation</p>
              <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-5xl">
                Jump straight to rankings, articles, research, or product picks.
              </h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-orange-100 hover:text-emerald-50">
              Open the full article library →
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {QUICK_NAV_CARDS.map((card, index) => (
            <ScrollReveal key={card.title} delay={Math.min(index * 60, 220)}>
              <Link
                href={card.href}
                className={`card-lift block rounded-xl border border-white/8 bg-gradient-to-br ${navCardStyles[card.title] || 'from-white/[0.06] to-white/[0.03]'} p-6`}
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-300">Section</p>
                <h3 className="font-display mt-4 text-3xl tracking-tight text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{card.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-100">
                  Open section <span>→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-10 pt-3 md:px-6 md:pb-14">
        <ScrollReveal>
          <MedicalDisclaimer />
        </ScrollReveal>
      </section>
    </main>
  )
}
