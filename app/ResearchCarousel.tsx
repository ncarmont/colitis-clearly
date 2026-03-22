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
  Diet: 'border-amber-accent/30 bg-amber-accent/12 text-amber-100',
  'Diet & Microbiome': 'border-violet-400/30 bg-violet-400/12 text-violet-100',
  Microbiome: 'border-teal-accent/30 bg-teal-accent/12 text-teal-100',
  Environment: 'border-sky-400/30 bg-sky-400/12 text-sky-100',
  Guidelines: 'border-white/15 bg-white/[0.06] text-slate-100',
  Treatment: 'border-emerald-accent/30 bg-emerald-accent/12 text-emerald-100',
  Surgery: 'border-rose-400/30 bg-rose-400/12 text-rose-100',
  Pipeline: 'border-fuchsia-400/30 bg-fuchsia-400/12 text-fuchsia-100',
  Emerging: 'border-violet-400/30 bg-violet-400/12 text-violet-100',
  'Mental Health': 'border-indigo-400/30 bg-indigo-400/12 text-indigo-100',
}

export default function ResearchCarousel({ papers }: { papers: Paper[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="hero-shimmer glass-panel relative overflow-hidden p-6 md:p-8">
      <div className="pointer-events-none absolute inset-y-6 left-0 w-10 bg-gradient-to-r from-navy-950/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-6 right-0 w-10 bg-gradient-to-l from-navy-950/70 to-transparent" />

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/70">
            Latest UC Papers
          </p>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-4xl">
            Grab and scroll the latest treatment, diet, and monitoring literature.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            A smooth snap-scrolling strip built from the live research carousel dataset so the most useful UC papers stay
            close to the treatment conversation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-300 md:inline-flex">
            Grab to explore
          </span>
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
        className="horizontal-scroll mt-8 scroll-smooth pb-3"
      >
        {papers.map((paper) => (
          <Link
            key={paper.slug}
            href={paper.href || `/blog/${paper.slug}`}
            className="card-lift glass-panel group relative min-h-[290px] w-[320px] shrink-0 border border-white/8 p-5"
          >
            <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-emerald-accent/30 via-white/10 to-transparent" />

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

            <h3 className="mt-5 text-xl font-semibold leading-snug text-white group-hover:text-emerald-50">
              {paper.title}
            </h3>
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
