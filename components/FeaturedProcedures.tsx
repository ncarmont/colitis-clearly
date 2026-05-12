'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { RankedProcedure } from '@/lib/rankedProcedures'

type Filter = 'All' | 'Medical' | 'Lifestyle'

const RANK_BADGE_COLORS: Record<number, string> = {
  1: 'bg-amber-400 text-white',
  2: 'bg-warm-500 text-white',
  3: 'bg-coral-500 text-white',
}

function rankBadge(rank: number) {
  return RANK_BADGE_COLORS[rank] ?? 'bg-coral-400 text-white'
}

function ProcedureCard({ p, index }: { p: RankedProcedure; index: number }) {
  const cardClass = 'spring-in card-lift group flex flex-col overflow-hidden rounded-[14px] border border-warm-200/70 bg-white shadow-card-warm hover:border-coral-300/60 hover:shadow-[0_12px_36px_rgba(244,132,95,0.12)]'
  const isExternal = p.href.startsWith('http')
  const Wrapper = isExternal
    ? ({ children }: { children: React.ReactNode }) => (
        <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ animationDelay: `${0.55 + index * 0.055}s` }} className={cardClass}>{children}</a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <Link href={p.href} style={{ animationDelay: `${0.55 + index * 0.055}s` }} className={cardClass}>{children}</Link>
      )
  return (
    <Wrapper>
      {/* Photo with overlaid rank + stat */}
      <div className="relative aspect-[16/7] overflow-hidden">
        <img
          src={p.imageUrl}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

        {/* Rank badge */}
        <div className={`absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-[7px] text-xs font-black shadow-lg ${rankBadge(p.rank)}`}>
          {p.rank}
        </div>

        {/* Filter category */}
        <div className={`absolute right-2 top-2 rounded-full border px-2 py-0.5 text-[0.52rem] font-bold uppercase tracking-[0.12em] backdrop-blur-sm ${
          p.filterCategory === 'Medical'
            ? 'border-blue-300/40 bg-blue-900/50 text-blue-100'
            : 'border-green-300/40 bg-green-900/50 text-green-100'
        }`}>
          {p.filterCategory}
        </div>

        {/* Main stat */}
        <div className="absolute bottom-2 left-2.5">
          <p className="font-display text-[1.85rem] font-black leading-none tracking-tight text-white drop-shadow-lg">
            {p.statDisplay}
          </p>
          <p className="mt-0.5 max-w-[160px] text-[0.6rem] leading-snug text-white/70">{p.statLabel}</p>
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col p-3">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-coral-500">{p.type}</p>
        <h3 className="mt-0.5 text-[0.85rem] font-bold leading-snug text-warm-900">{p.name}</h3>
        {p.brandName && (
          <p className="mt-0.5 text-[0.65rem] text-warm-400 line-clamp-1">{p.brandName}</p>
        )}
        <p className="mt-1 text-[0.62rem] leading-relaxed text-warm-500 line-clamp-2">{p.trialRef}</p>

        {p.subMethods && p.subMethods.length > 0 && (
          <ul className="mt-1.5 space-y-0.5 rounded-md bg-warm-50 px-2 py-1.5">
            {p.subMethods.slice(0, 2).map((method, i) => (
              <li key={i} className="flex items-start gap-1 text-[0.55rem] leading-snug text-warm-600">
                <span className="mt-px shrink-0 text-coral-400">›</span>
                <span className="line-clamp-1">{method}</span>
              </li>
            ))}
            {p.subMethods.length > 2 && (
              <li className="pt-0.5 text-[0.5rem] font-semibold text-warm-400">
                +{p.subMethods.length - 2} more
              </li>
            )}
          </ul>
        )}

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="rounded-full border border-coral-200 bg-coral-50 px-1.5 py-0.5 text-[0.52rem] font-bold uppercase tracking-[0.1em] text-coral-600">
            {p.evidenceLevel}
          </span>
          <span className="text-[0.72rem] font-bold text-coral-400 transition-colors group-hover:text-coral-600">
            {p.ctaLabel ?? 'Details →'}
          </span>
        </div>
      </div>
    </Wrapper>
  )
}

export default function FeaturedProcedures({ procedures }: { procedures: RankedProcedure[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filtered = activeFilter === 'All'
    ? procedures
    : procedures.filter((p) => p.filterCategory === activeFilter)

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: 'All',      label: 'All Procedures',        count: procedures.length },
    { key: 'Medical',  label: 'Medical Treatments',    count: procedures.filter(p => p.filterCategory === 'Medical').length },
    { key: 'Lifestyle',label: 'Lifestyle & Diet',      count: procedures.filter(p => p.filterCategory === 'Lifestyle').length },
  ]

  return (
    <section className="mx-auto max-w-[1500px] px-4 py-6 md:px-6 md:py-10">
      {/* Section header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-coral-500">
            Trial-Verified · Ranked by % Achieving Remission
          </p>
          <h2 className="font-display mt-1.5 text-3xl tracking-tight text-warm-900 md:text-4xl">
            Top Remission Procedure Rankings
          </h2>
        </div>
        <Link href="/rankings" className="text-sm font-bold text-coral-500 hover:text-coral-600 whitespace-nowrap">
          Full rankings board →
        </Link>
      </div>

      {/* Filter pills */}
      <div className="mt-3 flex flex-wrap gap-2">
        {filters.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
              activeFilter === key
                ? 'border-coral-400 bg-coral-400 text-white shadow-glow-emerald'
                : 'border-warm-200 bg-white text-warm-700 hover:border-coral-300 hover:text-coral-600'
            }`}
          >
            {label}
            <span className={`rounded-full px-1.5 py-0.5 text-[0.65rem] font-bold ${
              activeFilter === key ? 'bg-white/25 text-white' : 'bg-warm-100 text-warm-500'
            }`}>
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Card grid */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.map((p, i) => (
          <ProcedureCard key={p.rank} p={p} index={i} />
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-warm-400">
        Remission rates are from different trials and timepoints — always read the reference.
        Consult your gastroenterologist for personal treatment decisions.
      </p>
    </section>
  )
}
