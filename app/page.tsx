import Link from 'next/link'
import type { Metadata } from 'next'
import researchPapers from './research-carousel.json'
import metaFindings from './meta-analysis-findings.json'
import ResearchCarousel from './ResearchCarousel'
import MetaAnalysisTeaser from './MetaAnalysisTeaser'
import HeroBackground from './HeroBackground'
import ScrollReveal from './ScrollReveal'
import SmallAd from '@/components/SmallAd'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import { HOME_STATS, QUICK_NAV_CARDS } from '@/lib/site'
import { TREATMENTS } from '@/lib/treatments'

export const metadata: Metadata = {
  title: 'Colitis Clearly | Understanding Ulcerative Colitis Through Science',
  description: 'Colitis Clearly is an evidence-based ulcerative colitis website covering UC basics, treatment rankings, biomarkers, flare management, and pivotal clinical trials.',
}

const treatmentPreview = [
  TREATMENTS.find((t) => t.name === 'Mesalamine'),
  TREATMENTS.find((t) => t.name === 'Vedolizumab'),
  TREATMENTS.find((t) => t.name === 'Upadacitinib'),
  TREATMENTS.find((t) => t.name === 'Proctocolectomy with IPAA (J-pouch)'),
].filter(Boolean)

const ucExplainers = [
  {
    title: 'Chronic inflammatory disease',
    body: 'Ulcerative colitis is a chronic inflammatory bowel disease of the colon. Inflammation is usually continuous, begins in the rectum, and mainly affects the mucosal lining.',
  },
  {
    title: 'Relapsing-remitting course',
    body: 'Symptoms often come in flares and remissions. Blood in stool, urgency, diarrhea, fatigue, and abdominal cramping are common when inflammation is active.',
  },
  {
    title: 'Monitor beyond symptoms',
    body: 'Symptoms matter, but calprotectin, CRP, colonoscopy, and pathology often show whether inflammation is truly under control.',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_45%),linear-gradient(180deg,#071220_0%,#08111f_38%,#060e1a_100%)]" />
        <div className="absolute inset-0 opacity-40 dot-grid-pattern" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 md:px-6 md:pb-24 md:pt-20">
          <div className="relative overflow-hidden rounded-[36px] border border-white/8 bg-white/[0.03] px-6 py-10 md:px-10 md:py-14">
            <HeroBackground />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
                Colitis Clearly
              </div>
              <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
                Understanding ulcerative colitis through science.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                An evidence-based UC resource built around clinical trial data, biomarker interpretation, flare-management logic, and clear treatment comparisons.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/rankings"
                  className="rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
                >
                  View treatment rankings
                </Link>
                <Link
                  href="/research"
                  className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  Explore research
                </Link>
              </div>
              <div className="mt-8 max-w-2xl">
                <MedicalDisclaimer compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResearchCarousel papers={researchPapers} />

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <ScrollReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {ucExplainers.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/70">What is UC</p>
                <h2 className="mt-4 text-2xl font-bold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 md:pb-16">
        <ScrollReveal>
          <div className="rounded-[32px] border border-white/8 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200/70">Key Statistics</p>
                <h2 className="mt-3 text-3xl font-bold text-white">Why UC deserves a serious evidence library.</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  UC is common, increasingly global, and often diagnosed early in life. That means treatment decisions echo for decades, not weeks.
                </p>
              </div>
              <Link href="/blog/understanding-ulcerative-colitis" className="text-sm font-semibold text-emerald-200 transition hover:text-emerald-100">
                Start with the complete guide →
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {HOME_STATS.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/8 bg-[#091528] p-5">
                  <div className="text-4xl font-black text-white">{stat.value}</div>
                  <div className="mt-2 text-sm font-semibold text-emerald-100">{stat.label}</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
        <SmallAd />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/70">Flagship Page</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Treatment rankings that keep the trial context visible.</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Compare first-line 5-ASA therapy, advanced biologics, oral small molecules, short-term steroids, rectal therapy, and surgery without flattening them into marketing slogans.
              </p>
            </div>
            <Link href="/rankings" className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.06]">
              Full comparison →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {treatmentPreview.map((treatment) => (
              <div key={treatment?.name} className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5">
                <div className="text-sm font-semibold text-slate-400">#{treatment?.rank}</div>
                <h3 className="mt-3 text-xl font-bold text-white">{treatment?.name}</h3>
                <p className="mt-2 text-sm text-emerald-200/80">{treatment?.className}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{treatment?.notes}</p>
                <div className="mt-5 rounded-2xl border border-white/8 bg-[#091528] px-4 py-3 text-sm text-slate-300">
                  <div>Response: {treatment?.responseRate}</div>
                  <div className="mt-2">Remission: {treatment?.remissionRate}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <MetaAnalysisTeaser findings={metaFindings} studyCount={researchPapers.length} />

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200/70">Quick Navigation</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Use the site by the question you are trying to answer.</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {QUICK_NAV_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-[28px] border border-white/8 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 transition hover:border-emerald-300/30 hover:bg-white/[0.06]"
              >
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{card.description}</p>
                <div className="mt-5 text-sm font-semibold text-emerald-200">Open section →</div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
