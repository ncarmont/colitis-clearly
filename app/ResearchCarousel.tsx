'use client'

import Link from 'next/link'
import { useRef } from 'react'

type Paper = {
  slug: string
  href?: string
  title: string
  paper: string
  finding: string
  category: string
  date: string
}

const categoryStyles: Record<string, string> = {
  Biologics: 'border-emerald-accent/30 bg-emerald-accent/12 text-emerald-100',
  'Small Molecules': 'border-cyan-400/30 bg-cyan-400/12 text-cyan-100',
  Trials: 'border-violet-400/30 bg-violet-400/12 text-violet-100',
  Monitoring: 'border-amber-accent/30 bg-amber-accent/12 text-amber-100',
  Biomarkers: 'border-rose-400/30 bg-rose-400/12 text-rose-100',
}

export default function ResearchCarousel({ papers }: { papers: Paper[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="hero-shimmer glass-panel rounded-[34px] p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/70">
            Latest UC Papers
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-4xl">
            Scroll the recent treatment and monitoring literature.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            A snap-scrolling strip of pivotal UC papers so the clinical trial context stays close to the treatment conversation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollRef.current?.scrollBy({ left: -360, behavior: 'smooth' })}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white hover:border-emerald-accent/40 hover:bg-white/[0.08]"
            aria-label="Scroll research cards left"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollRef.current?.scrollBy({ left: 360, behavior: 'smooth' })}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white hover:border-emerald-accent/40 hover:bg-white/[0.08]"
            aria-label="Scroll research cards right"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scroll-smooth"
      >
        {papers.map((paper) => (
          <Link
            key={paper.slug}
            href={paper.href || `/blog/${paper.slug}`}
            className="card-lift glass-panel min-h-[280px] w-[310px] shrink-0 snap-start rounded-[30px] border border-white/8 p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={`rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${
                  categoryStyles[paper.category] || 'border-white/12 bg-white/[0.05] text-slate-200'
                }`}
              >
                {paper.category}
              </span>
              <span className="text-xs text-slate-400">
                {new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  year: 'numeric',
                }).format(new Date(paper.date))}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold leading-snug text-white">{paper.title}</h3>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500">{paper.paper}</p>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">{paper.finding}</p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-100">
              Open paper summary <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
