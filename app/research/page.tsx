import Link from 'next/link'
import type { Metadata } from 'next'
import researchArticles from '../research-carousel.json'
import findings from '../meta-analysis-findings.json'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'

export const metadata: Metadata = {
  title: 'UC Research Hub | Project Remission UC',
  description: 'Track ulcerative colitis trials, biomarkers, pathophysiology, and emerging therapies in one evidence-first research hub.',
}

const topicCards = [
  {
    href: '/research/overview',
    title: 'Overview',
    description: 'The current UC treatment landscape, pipeline drugs, and where the field is moving next.',
  },
  {
    href: '/research/pathophysiology',
    title: 'Pathophysiology',
    description: 'Mucosal immune dysregulation, epithelial barrier dysfunction, microbiome shifts, and genetic susceptibility.',
  },
  {
    href: '/research/clinical-trials',
    title: 'Clinical Trials',
    description: 'ACT, ULTRA, GEMINI, UNIFI, OCTAVE, U-ACHIEVE, TRUE NORTH, LUCENT, and ELEVATE.',
  },
  {
    href: '/research/biomarkers',
    title: 'Biomarkers',
    description: 'Fecal calprotectin, CRP, ESR, lactoferrin, and how these tests help separate symptoms from inflammation.',
  },
  {
    href: '/research/emerging',
    title: 'Emerging Therapies',
    description: 'FMT, stem-cell approaches, microbiome engineering, nanomedicine, and the next IL-23 wave.',
  },
]

export default function ResearchPage() {
  const sorted = [...researchArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="relative overflow-hidden border-b border-white/8 bg-gradient-to-br from-[#071426] via-[#0b1830] to-[#0b2d2b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.16),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
            <span>←</span>
            Back to home
          </Link>
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
              Research Hub
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Ulcerative colitis research without the noise floor.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Follow the pivotal trials, learn how biomarkers are interpreted, and understand where new UC therapies are likely to change sequencing decisions.
            </p>
            <div className="mt-8 max-w-3xl">
              <MedicalDisclaimer compact />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {findings.map((finding) => (
            <div key={`${finding.stat}-${finding.source}`} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 text-center">
              <div className="text-3xl font-black text-white">{finding.stat}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{finding.source}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{finding.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 md:px-6 md:pb-14">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {topicCards.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="rounded-[24px] border border-white/8 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 transition hover:border-emerald-300/30 hover:bg-white/[0.06]"
            >
              <h2 className="text-2xl font-bold text-white">{topic.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{topic.description}</p>
              <div className="mt-4 text-sm font-semibold text-emerald-200">Open page →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Pivotal papers in the current site library</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            These entries anchor the treatment-ranking data and the blog explainers across advanced therapies.
          </p>
        </div>
        <div className="mt-8 grid gap-4">
          {sorted.map((article) => (
            <Link
              key={`${article.slug}-${article.date}`}
              href={article.href || `/blog/${article.slug}`}
              className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition hover:border-emerald-300/30 hover:bg-white/[0.05]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-slate-400">
                <span>{article.category}</span>
                <span>{new Date(article.date).getFullYear()}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-white">{article.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{article.finding}</p>
              <p className="mt-3 text-xs text-slate-400">{article.paper}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
