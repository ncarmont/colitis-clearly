'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { HARMFUL_FACTORS, type HarmfulFactor } from '@/lib/harmful-factors'

type TierFilter = 'all' | 'critical' | 'significant' | 'moderate' | 'low'

const TIER_CONFIG: Record<string, { label: string; color: string; bg: string; border: string }> = {
  critical: { label: 'Critical', color: 'text-red-300', bg: 'bg-red-500/12', border: 'border-red-500/30' },
  significant: { label: 'Significant', color: 'text-orange-300', bg: 'bg-orange-500/12', border: 'border-orange-500/30' },
  moderate: { label: 'Moderate', color: 'text-amber-300', bg: 'bg-amber-500/12', border: 'border-amber-500/30' },
  low: { label: 'Low / Individual', color: 'text-slate-400', bg: 'bg-slate-500/12', border: 'border-slate-500/30' },
}

const FILTERS: { id: TierFilter; label: string }[] = [
  { id: 'all', label: 'All 25 Factors' },
  { id: 'critical', label: 'Critical (1\u20135)' },
  { id: 'significant', label: 'Significant (6\u201310)' },
  { id: 'moderate', label: 'Moderate (11\u201320)' },
  { id: 'low', label: 'Low (21\u201325)' },
]

function TierBadge({ tier }: { tier: string }) {
  const config = TIER_CONFIG[tier] ?? TIER_CONFIG.low
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${config.color} ${config.bg} ${config.border}`}>
      {config.label}
    </span>
  )
}

function FactorCard({ factor, index }: { factor: HarmfulFactor; index: number }) {
  const tierConfig = TIER_CONFIG[factor.tier] ?? TIER_CONFIG.low

  return (
    <ScrollReveal delay={Math.min(index * 40, 200)}>
      <div className={`card-lift relative overflow-hidden rounded-[28px] border ${tierConfig.border} bg-[linear-gradient(180deg,rgba(20,34,54,0.95),rgba(8,17,28,0.9))] p-5 md:p-6`}>
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-red-500/8 blur-3xl" />
        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-base font-black text-navy-950 shadow-lg ${
                factor.tier === 'critical' ? 'bg-red-400' :
                factor.tier === 'significant' ? 'bg-orange-400' :
                factor.tier === 'moderate' ? 'bg-amber-400' : 'bg-slate-400'
              }`}>
                {factor.rank}
              </span>
              <h3 className="text-lg font-bold text-white">{factor.factor}</h3>
            </div>
            <TierBadge tier={factor.tier} />
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-[20px] border border-white/8 bg-white/[0.04] p-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-red-300/70">Effect Size</p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-white">{factor.effectSize}</p>
            </div>
            <div className="rounded-[20px] border border-white/8 bg-white/[0.04] p-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-slate-500">Evidence</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{factor.evidenceLevel}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function HarmfulFactorsTable() {
  const [filter, setFilter] = useState<TierFilter>('all')
  const displayed = filter === 'all' ? HARMFUL_FACTORS : HARMFUL_FACTORS.filter(f => f.tier === filter)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <ScrollReveal>
        <div className="text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-red-300/70">
            Evidence-Based Risk Factors
          </p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
            The 25 Worst Things for <span className="text-red-400">Ulcerative Colitis</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Ranked by combined strength of evidence and magnitude of effect. From dietary triggers to environmental exposures, these are the factors most strongly linked to UC flares and disease progression.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map(f => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                filter === f.id
                  ? 'border-red-400/60 bg-red-400/12 text-red-100'
                  : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.07]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {displayed.map((factor, i) => (
          <FactorCard key={factor.rank} factor={factor} index={i} />
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-10 rounded-[28px] border border-amber-accent/20 bg-[linear-gradient(135deg,rgba(241,181,68,0.1),rgba(20,34,54,0.8))] px-6 py-5 text-center">
          <p className="text-sm leading-relaxed text-amber-50/80">
            <strong className="text-amber-100">Important:</strong> These rankings reflect population-level evidence. Individual triggers vary — track your personal patterns with a food and symptom diary. Always discuss changes with your gastroenterologist.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
