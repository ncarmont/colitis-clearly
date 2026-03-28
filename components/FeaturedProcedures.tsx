'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import type { RankedProcedure } from '@/lib/rankedProcedures'

const EVIDENCE_COLORS = {
  High:     { border: 'border-coral-300/40',  bg: 'bg-coral-50',  text: 'text-coral-600' },
  Moderate: { border: 'border-amber-300/40',  bg: 'bg-amber-50',  text: 'text-amber-700' },
  Emerging: { border: 'border-violet-300/40', bg: 'bg-violet-50', text: 'text-violet-600' },
}

function ProcedureCard({ procedure, index }: { procedure: RankedProcedure; index: number }) {
  const ev = EVIDENCE_COLORS[procedure.evidenceLevel]

  return (
    <ScrollReveal delay={Math.min(index * 70, 280)}>
      <Link
        href={procedure.href}
        className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-warm-200/60 bg-white shadow-card-warm transition-all duration-500 hover:border-coral-300/50 hover:shadow-[0_20px_60px_rgba(244,132,95,0.1)]"
      >
        {/* Gradient visual area — dark gradient card top (striking contrast) */}
        <div className={`relative h-52 bg-gradient-to-br ${procedure.gradientClass} overflow-hidden`}>
          <div className="absolute inset-0 opacity-15 dot-grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Rank badge — top left */}
          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/35 backdrop-blur-md">
            <span className="text-xs font-bold text-white">#{procedure.rank}</span>
          </div>

          {/* Category badge — top right */}
          <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 backdrop-blur-md">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/80">
              {procedure.category}
            </span>
          </div>

          {/* Main stat — bottom left */}
          <div className="absolute bottom-4 left-4">
            <p className="font-display text-[3.2rem] font-bold leading-none tracking-tight text-white">
              {procedure.statDisplay}
            </p>
            <p className="mt-1 max-w-[200px] text-xs leading-snug text-white/65">{procedure.statLabel}</p>
          </div>
        </div>

        {/* Light info area */}
        <div className="flex flex-1 flex-col p-5">
          <div>
            <span className="rounded-full border border-warm-200 bg-warm-50 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-warm-500">
              {procedure.type}
            </span>
          </div>

          <h3 className="mt-3 text-[1.05rem] font-bold leading-tight text-warm-900">{procedure.name}</h3>
          {procedure.brandName && (
            <p className="mt-0.5 text-xs text-warm-400">{procedure.brandName}</p>
          )}

          <p className="mt-2 text-xs leading-relaxed text-warm-500">{procedure.trialRef}</p>

          <div className="mt-auto flex items-center justify-between pt-4">
            <span className={`rounded-full border px-2.5 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] ${ev.border} ${ev.bg} ${ev.text}`}>
              {procedure.evidenceLevel} Evidence
            </span>
            <span className="text-sm font-bold text-coral-500 transition-colors duration-300 group-hover:text-coral-600">
              Details →
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  )
}

export default function FeaturedProcedures({ procedures }: { procedures: RankedProcedure[] }) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-coral-500/80">
            Clinical Trial Rankings
          </p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-warm-900 md:text-5xl">
            Most Effective Remission{' '}
            <span className="bg-gradient-to-r from-coral-500 via-coral-400 to-amber-500 bg-clip-text text-transparent">
              Procedures Ranked
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-warm-600">
            Every approach ranked by estimated percentage of patients achieving remission, based on published
            clinical trial data. Drugs, biologics, microbiome therapy, supplements, diet, and surgery — all compared.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {procedures.map((procedure, i) => (
          <ProcedureCard key={procedure.rank} procedure={procedure} index={i} />
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-10 text-center">
          <Link
            href="/rankings"
            className="inline-flex items-center gap-2 rounded-full border border-warm-300 bg-white/80 px-6 py-3 text-sm font-bold text-warm-700 transition-all duration-300 hover:border-coral-300 hover:bg-white"
          >
            View Full Rankings Board →
          </Link>
          <p className="mt-4 text-xs text-warm-400">
            Remission rates come from different trials and timepoints — always read the trial reference.
            Rankings are informational only; consult your gastroenterologist for treatment decisions.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
