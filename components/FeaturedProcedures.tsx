'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import type { RankedProcedure } from '@/lib/rankedProcedures'

const EVIDENCE_COLORS = {
  High: { border: 'border-emerald-accent/30', bg: 'bg-emerald-accent/10', text: 'text-emerald-200' },
  Moderate: { border: 'border-amber-400/30', bg: 'bg-amber-400/10', text: 'text-amber-200' },
  Emerging: { border: 'border-violet-400/30', bg: 'bg-violet-400/10', text: 'text-violet-200' },
}

function ProcedureCard({ procedure, index }: { procedure: RankedProcedure; index: number }) {
  const ev = EVIDENCE_COLORS[procedure.evidenceLevel]

  return (
    <ScrollReveal delay={Math.min(index * 70, 280)}>
      <Link
        href={procedure.href}
        className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-navy-950 transition-all duration-500 hover:border-emerald-accent/20 hover:shadow-[0_20px_60px_rgba(0,200,83,0.08)]"
      >
        {/* Gradient visual area — styled like the polyphenol card hero */}
        <div className={`relative h-52 bg-gradient-to-br ${procedure.gradientClass} overflow-hidden`}>
          {/* Dot grid texture */}
          <div className="absolute inset-0 opacity-20 dot-grid-pattern" />
          {/* Bottom fade into card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />

          {/* Rank badge — top left */}
          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/40 backdrop-blur-md">
            <span className="text-xs font-bold text-white">#{procedure.rank}</span>
          </div>

          {/* Category badge — top right */}
          <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 backdrop-blur-md">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/75">
              {procedure.category}
            </span>
          </div>

          {/* Main stat — bottom left, large */}
          <div className="absolute bottom-4 left-4">
            <p className="font-display text-[3.2rem] font-bold leading-none tracking-tight text-white">
              {procedure.statDisplay}
            </p>
            <p className="mt-1 max-w-[190px] text-xs leading-snug text-white/60">{procedure.statLabel}</p>
          </div>
        </div>

        {/* Info area */}
        <div className="flex flex-1 flex-col p-5">
          <div>
            <span className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-400">
              {procedure.type}
            </span>
          </div>

          <h3 className="mt-3 text-[1.05rem] font-bold leading-tight text-white">{procedure.name}</h3>
          {procedure.brandName && (
            <p className="mt-0.5 text-xs text-slate-500">{procedure.brandName}</p>
          )}

          <p className="mt-2 text-xs leading-relaxed text-slate-500">{procedure.trialRef}</p>

          <div className="mt-auto flex items-center justify-between pt-4">
            <span className={`rounded-full border px-2.5 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] ${ev.border} ${ev.bg} ${ev.text}`}>
              {procedure.evidenceLevel} Evidence
            </span>
            <span className="text-sm font-semibold text-emerald-accent transition-colors duration-300 group-hover:text-emerald-200">
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
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-emerald-accent/[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[300px] w-[300px] rounded-full bg-teal-accent/[0.03] blur-[100px]" />

      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-accent/70">
            Clinical Trial Rankings
          </p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
            Most Effective Remission{' '}
            <span className="bg-gradient-to-r from-emerald-100 via-emerald-accent to-teal-accent bg-clip-text text-transparent">
              Procedures Ranked
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-accent/30 hover:bg-white/[0.08]"
          >
            View Full Rankings Board →
          </Link>
          <p className="mt-4 text-xs text-slate-500">
            Remission rates come from different trials and timepoints — always read the trial reference.
            Rankings are informational only; consult your gastroenterologist for treatment decisions.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
