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
  suffix?: string
  label: string
  detail: string
}

type EvidenceSignal = {
  id: string
  badge: string
  badgeClass: string
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
    'A warm, evidence-first ulcerative colitis site featuring science-ranked treatments, flare-management guidance, diet explainers, and research snapshots.',
}

const heroStats: HeroStat[] = [
  {
    value: TREATMENTS.length,
    suffix: '+',
    label: 'science-ranked treatments',
    detail: 'From mesalamine and rectal therapy to biologics, small molecules, and surgery.',
  },
  {
    value: 5,
    label: 'decision categories',
    detail: '5-ASA, biologics, small molecules, steroids, and other rescue or structural options.',
  },
  {
    value: 75,
    suffix: '%',
    label: 'highest listed nonsurgical remission signal',
    detail: 'Rectal mesalamine leads the dataset for distal disease control.',
  },
] 

const evidenceSignals: EvidenceSignal[] = [
  {
    id: 'stress',
    badge: 'Flare Risk',
    badgeClass: 'border-rose-400/25 bg-rose-400/12 text-rose-100',
    value: 3.6,
    suffix: 'x',
    decimals: 1,
    title: 'higher flare odds with high perceived stress',
    detail: 'Stress keeps surfacing as one of the strongest reproducible UC triggers.',
  },
  {
    id: 'nsaids',
    badge: 'Medication Risk',
    badgeClass: 'border-amber-accent/25 bg-amber-accent/12 text-amber-100',
    value: 6.27,
    suffix: 'x',
    decimals: 2,
    title: 'incidence rate ratio after NSAID exposure',
    detail: 'The immediate post-NSAID window is one of the clearest flare-risk signals in the guide.',
  },
  {
    id: 'curcumin',
    badge: 'Adjunct Benefit',
    badgeClass: 'border-emerald-accent/25 bg-emerald-accent/12 text-emerald-100',
    value: 0.24,
    prefix: 'RR ',
    decimals: 2,
    title: 'relapse ratio with curcumin added to 5-ASA',
    detail: 'Curcumin shows one of the strongest low-cost add-on signals for mild-moderate UC.',
  },
  {
    id: 'omega3',
    badge: 'Protective Signal',
    badgeClass: 'border-teal-accent/25 bg-teal-accent/12 text-teal-100',
    value: 0.81,
    prefix: 'OR ',
    decimals: 2,
    title: 'lower IBD risk signal with higher DHA',
    detail: 'Omega-3 evidence is not magic, but the direction of effect is consistently favorable.',
  },
  {
    id: 'fmt',
    badge: 'Emerging Science',
    badgeClass: 'border-violet-400/25 bg-violet-400/12 text-violet-100',
    value: 2.25,
    prefix: 'OR ',
    decimals: 2,
    title: 'combined remission benefit with FMT',
    detail: 'FMT remains investigational, but the pooled RCT data are strong enough to watch closely.',
  },
  {
    id: 'probiotics',
    badge: 'Adjunct Evidence',
    badgeClass: 'border-cyan-400/25 bg-cyan-400/12 text-cyan-100',
    value: 21,
    suffix: '/25',
    title: 'probiotic studies showing UC benefit',
    detail: 'Specific strain choice matters more than generic “gut health” supplement marketing.',
  },
]

const navCardStyles: Record<string, string> = {
  Treatments: 'from-emerald-accent/16 to-emerald-accent/4',
  'Flare Management': 'from-amber-accent/16 to-amber-accent/4',
  'Diet & Lifestyle': 'from-teal-accent/16 to-teal-accent/4',
  Research: 'from-violet-400/16 to-violet-400/4',
}

const latestPapers = [...researchPapers].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(46,204,113,0.18),transparent_36%),linear-gradient(180deg,#08111c_0%,#0a1628_58%,#08111c_100%)]" />
        <div className="absolute inset-0 opacity-40 dot-grid-pattern" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-6 md:pb-20 md:pt-14">
          <div className="hero-shimmer glass-panel rounded-[42px] px-6 py-10 text-center md:px-10 md:py-14">
            <div className="mx-auto max-w-5xl">
              <div className="animate-fade-in-up">
                <div className="inline-flex rounded-full border border-emerald-accent/20 bg-emerald-accent/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/80">
                  Calm UC Science
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                <h1 className="font-display mt-6 text-4xl tracking-tight text-white md:text-7xl">
                  <span className="block">Best Ulcerative Colitis Treatments</span>
                  <span className="block bg-gradient-to-r from-emerald-100 via-emerald-accent to-teal-accent bg-clip-text text-transparent">
                    Ranked by Science
                  </span>
                </h1>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                  We rank the best by lab-tested efficacy content so you get the real health benefits.
                </p>
              </div>

              <div className="animate-fade-in-up mt-8 flex flex-wrap justify-center gap-3" style={{ animationDelay: '320ms' }}>
                <Link
                  href="/rankings"
                  className="rounded-full bg-emerald-accent px-5 py-3 text-sm font-semibold text-navy-950 shadow-glow-emerald hover:bg-[#2ed37a]"
                >
                  Explore treatment rankings
                </Link>
                <Link
                  href="/research"
                  className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white hover:border-emerald-accent/30 hover:bg-white/[0.08]"
                >
                  Browse UC research
                </Link>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stat-pill animate-fade-in-up px-5 py-5 text-left"
                    style={{ animationDelay: `${420 + index * 90}ms` }}
                  >
                    <p className="font-display text-4xl tracking-tight text-white md:text-5xl">
                      <CountUpMetric value={stat.value} suffix={stat.suffix} />
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
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/70">Proven Health Benefits</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-5xl">
              Outcome signals worth caring about before the next flare.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              The strongest UC signals are not random wellness tips. They point toward concrete risk multipliers, add-on therapies, and lifestyle pressures that repeatedly change outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {evidenceSignals.map((signal, index) => (
            <ScrollReveal key={signal.id} delay={Math.min(index * 50, 220)}>
              <div className="card-lift rounded-[30px] border border-white/8 bg-[linear-gradient(135deg,rgba(20,34,54,0.96),rgba(8,17,28,0.92))] p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className={`rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${signal.badgeClass}`}>
                    {signal.badge}
                  </span>
                </div>

                <p className="font-display mt-5 text-4xl tracking-tight text-white md:text-5xl">
                  <CountUpMetric
                    value={signal.value}
                    prefix={signal.prefix}
                    suffix={signal.suffix}
                    decimals={signal.decimals}
                  />
                </p>
                <p className="mt-3 text-base font-semibold leading-snug text-white">{signal.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{signal.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 md:px-6 md:pb-10">
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
                Jump in by the question you need answered next.
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
                className={`card-lift block rounded-[30px] border border-white/8 bg-gradient-to-br ${navCardStyles[card.title] || 'from-white/[0.06] to-white/[0.03]'} p-6`}
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
