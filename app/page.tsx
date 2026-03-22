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
import HarmfulFactorsTable from '@/components/HarmfulFactorsTable'
import { TREATMENTS } from '@/lib/treatments'

export const metadata: Metadata = {
  title: 'Colitis Clearly | Best Ulcerative Colitis Treatments Ranked by Science',
  description:
    'Evidence-first UC science: ranked treatments, flare management, diet guidance, biomarkers, and research summaries from clinical trials and gastroenterology guidelines.',
}

const latestPapers = [...researchPapers].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden">
        {/* Layered background: radial emerald glow + subtle teal + deep navy base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,200,83,0.15),transparent),radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(0,191,165,0.08),transparent),radial-gradient(ellipse_50%_60%_at_20%_80%,rgba(241,181,68,0.06),transparent)]" />
        {/* Floating orbs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-accent/[0.07] blur-[120px] animate-float-slow" />
        <div className="pointer-events-none absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-teal-accent/[0.06] blur-[100px] animate-float-slow" style={{ animationDelay: '-4s' }} />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-amber-accent/[0.04] blur-[100px] animate-float-slow" style={{ animationDelay: '-8s' }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-emerald-accent/25 bg-emerald-accent/[0.08] px-5 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-accent animate-pulse" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-emerald-100/90">Evidence-Based UC Science</span>
            </div>

            {/* Headline */}
            <h1 className="font-display mt-8 text-5xl leading-[1.08] tracking-tight md:text-[5.5rem]">
              <span className="animate-fade-in-up block text-white" style={{ animationDelay: '100ms' }}>
                Best UC Treatments
              </span>
              <span className="animate-fade-in-up block mt-1" style={{ animationDelay: '200ms' }}>
                <span className="bg-gradient-to-r from-emerald-200 via-emerald-accent to-teal-accent bg-clip-text text-transparent">Ranked by Science</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300/90 md:text-xl" style={{ animationDelay: '300ms' }}>
              {TREATMENTS.length} treatments compared by clinical trial data. Every stat sourced from published RCTs, meta-analyses, and gastroenterology guidelines.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up mt-10 flex flex-wrap justify-center gap-4" style={{ animationDelay: '400ms' }}>
              <Link
                href="/rankings"
                className="group relative overflow-hidden rounded-full bg-emerald-accent px-7 py-3.5 text-sm font-bold text-navy-950 shadow-[0_0_32px_rgba(0,200,83,0.3)] transition-all duration-300 hover:shadow-[0_0_48px_rgba(0,200,83,0.45)] hover:scale-[1.02]"
              >
                <span className="relative z-10">Explore Treatment Rankings</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-accent via-teal-accent to-emerald-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
              <Link
                href="/research"
                className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-accent/30 hover:bg-white/[0.08] hover:shadow-[0_0_24px_rgba(0,200,83,0.1)]"
              >
                Browse UC Research
              </Link>
            </div>
          </div>

          {/* ═══ Hero Stats ═══ */}
          <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-5">
            {[
              { value: TREATMENTS.length, suffix: '+', label: 'Science-Ranked Treatments', detail: 'Mesalamine to biologics to surgery — every option with trial data.', icon: '💊' },
              { value: 54, suffix: '%', label: 'Top Maintenance Remission', detail: 'Upadacitinib — #1 in the 2025 NMA of 36 RCTs and 14,270 patients.', icon: '🏆' },
              { value: 28, suffix: '', label: 'Meta-Analysis Stats', detail: 'From PREdiCCt aHR 3.25 to curcumin RR 0.24 — all on one site.', icon: '📊' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up group relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-emerald-accent/20 hover:shadow-[0_12px_40px_rgba(0,200,83,0.08)]"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-accent/[0.06] blur-2xl transition-all duration-500 group-hover:bg-emerald-accent/[0.12]" />
                <div className="relative">
                  <span className="text-2xl">{stat.icon}</span>
                  <p className="font-display mt-3 text-4xl tracking-tight text-white md:text-5xl">
                    <CountUpMetric value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-bold text-emerald-100">{stat.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
      </section>

      {/* ═══════ KEY EVIDENCE SIGNALS ═══════ */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-accent/70">Clinical Evidence</p>
            <h2 className="font-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              The Numbers That <span className="bg-gradient-to-r from-emerald-200 to-teal-accent bg-clip-text text-transparent">Actually Matter</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              Not wellness noise — reproducible effect sizes from prospective cohorts, RCTs, and Cochrane reviews that change how you think about UC.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            { badge: '🔴 Flare Risk', value: 5.19, prefix: 'OR ', decimals: 2, title: 'relapse risk from red/processed meat', detail: 'The single most impactful dietary trigger. Sulfur amino acids → H₂S → colonocyte toxicity.', borderColor: 'border-red-500/20 hover:border-red-500/40', glowColor: 'bg-red-500/8' },
            { badge: '🧠 Stress', value: 2.8, prefix: 'HR ', decimals: 1, title: 'exacerbation risk from chronic stress', detail: 'Sustained perceived stress over months — not acute stress — drives disease activation via HPA axis.', borderColor: 'border-orange-500/20 hover:border-orange-500/40', glowColor: 'bg-orange-500/8' },
            { badge: '💊 #1 Treatment', value: 54, suffix: '%', title: 'upadacitinib maintenance remission (wk 52)', detail: 'Ranked #1 in 2025 NMA of 36 RCTs. Symptom relief from day 1. JAK1 selective.', borderColor: 'border-emerald-accent/20 hover:border-emerald-accent/40', glowColor: 'bg-emerald-accent/8' },
            { badge: '🟢 Curcumin', value: 2.33, prefix: 'RR ', decimals: 2, title: 'clinical remission with curcumin adjunct', detail: '8+ RCTs. ECCO 2025 recognized. 1.5–3g/day with piperine as add-on to mesalamine.', borderColor: 'border-amber-accent/20 hover:border-amber-accent/40', glowColor: 'bg-amber-accent/8' },
            { badge: '🦠 Microbiome', value: 2.25, prefix: 'OR ', decimals: 2, title: 'FMT remission benefit (14 RCTs)', detail: 'Multi-donor FMT OR 3.32. Investigational but the strongest non-pharma signal.', borderColor: 'border-violet-500/20 hover:border-violet-500/40', glowColor: 'bg-violet-500/8' },
            { badge: '✂️ Surgery', value: 0.65, prefix: 'RR ', decimals: 2, title: 'relapse reduction with appendectomy', detail: 'ACCURE RCT 2025. First surgical RCT for UC. OR 0.31 before age 20.', borderColor: 'border-teal-accent/20 hover:border-teal-accent/40', glowColor: 'bg-teal-accent/8' },
          ].map((signal, index) => (
            <ScrollReveal key={signal.title} delay={Math.min(index * 60, 250)}>
              <div className={`card-lift group relative h-full overflow-hidden rounded-[28px] border ${signal.borderColor} bg-gradient-to-b from-navy-800/60 to-navy-950/80 p-6 backdrop-blur-sm transition-all duration-500`}>
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${signal.glowColor} blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-150`} />
                <div className="relative">
                  <span className="inline-block rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-semibold">
                    {signal.badge}
                  </span>
                  <p className="font-display mt-5 text-5xl tracking-tight text-white md:text-6xl">
                    <CountUpMetric value={signal.value} prefix={signal.prefix} suffix={signal.suffix} decimals={signal.decimals} />
                  </p>
                  <p className="mt-3 text-base font-bold leading-snug text-white">{signal.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{signal.detail}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════ RESEARCH CAROUSEL ═══════ */}
      <section className="relative overflow-hidden border-y border-white/[0.04] bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950 py-16 md:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-accent/[0.04] blur-[100px]" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-teal-accent/70">Latest Research</p>
                <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-4xl">From the Journals</h2>
              </div>
              <Link href="/research" className="hidden text-sm font-semibold text-emerald-100 hover:text-emerald-50 md:block">
                All research →
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <ResearchCarousel papers={latestPapers} />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ META-ANALYSIS TEASER ═══════ */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <ScrollReveal>
          <MetaAnalysisTeaser findings={metaFindings} studyCount={researchPapers.length} />
        </ScrollReveal>
      </section>

      {/* ═══════ HARMFUL FACTORS ═══════ */}
      <HarmfulFactorsTable />

      {/* ═══════ QUICK NAVIGATION ═══════ */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-amber-accent/70">Explore</p>
            <h2 className="font-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
              What Do You Need to Know?
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {QUICK_NAV_CARDS.map((card, index) => {
            const gradients: Record<string, string> = {
              Treatments: 'from-emerald-accent/[0.12] via-transparent to-transparent hover:from-emerald-accent/[0.2]',
              'Flare Management': 'from-amber-accent/[0.12] via-transparent to-transparent hover:from-amber-accent/[0.2]',
              'Diet & Lifestyle': 'from-teal-accent/[0.12] via-transparent to-transparent hover:from-teal-accent/[0.2]',
              Research: 'from-violet-500/[0.12] via-transparent to-transparent hover:from-violet-500/[0.2]',
            }
            const icons: Record<string, string> = {
              Treatments: '💊',
              'Flare Management': '🔥',
              'Diet & Lifestyle': '🥗',
              Research: '🔬',
            }
            return (
              <ScrollReveal key={card.title} delay={Math.min(index * 70, 220)}>
                <Link
                  href={card.href}
                  className={`card-lift group block h-full rounded-[28px] border border-white/[0.06] bg-gradient-to-br ${gradients[card.title] || 'from-white/[0.06] to-transparent'} p-7 transition-all duration-500`}
                >
                  <span className="text-3xl">{icons[card.title] || '📋'}</span>
                  <h3 className="font-display mt-5 text-2xl tracking-tight text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-accent transition-all duration-300 group-hover:gap-3">
                    Explore <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* ═══════ DISCLAIMER ═══════ */}
      <section className="mx-auto max-w-4xl px-4 pb-20 md:px-6">
        <ScrollReveal>
          <MedicalDisclaimer />
        </ScrollReveal>
      </section>
    </main>
  )
}
