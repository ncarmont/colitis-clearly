'use client'

import Image from 'next/image'
import { startTransition, useDeferredValue, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import type { Treatment } from '@/lib/treatments'

type FilterId = 'all' | 'best' | 'organic' | 'decaf' | 'other'

const FILTERS: { id: FilterId; label: string; detail: string }[] = [
  { id: 'all', label: 'All', detail: 'Every coffee purity tier in the scoring model.' },
  { id: 'best', label: 'COA proof', detail: 'Coffee with the strongest heavy-metal and contaminant audit trail.' },
  { id: 'organic', label: 'Organic', detail: 'Organic and traceable coffees with a stronger pesticide-risk floor.' },
  { id: 'decaf', label: 'Decaf', detail: 'Solvent-transparent decaf options like Swiss Water and CO₂.' },
  { id: 'other', label: 'Other', detail: 'Freshness-first and marketing-risk tiers.' },
]

function matchesFilter(coffee: Treatment, filterId: FilterId) {
  if (filterId === 'all') {
    return true
  }

  if (filterId === 'best') return coffee.className.toLowerCase().includes('best') || coffee.trials.toLowerCase().includes('coa')
  if (filterId === 'organic') return coffee.name.toLowerCase().includes('organic')
  if (filterId === 'decaf') return coffee.name.toLowerCase().includes('decaf')
  return !(coffee.className.toLowerCase().includes('best') || coffee.name.toLowerCase().includes('organic') || coffee.name.toLowerCase().includes('decaf'))
}

function classLabel(className: string) {
  return className
}

export default function TreatmentRankingsBoard({ treatments }: { treatments: Treatment[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const deferredFilter = useDeferredValue(activeFilter)
  const displayedCoffees = treatments.filter((coffee) => matchesFilter(coffee, deferredFilter))
  const activeFilterMeta = FILTERS.find((filter) => filter.id === activeFilter) ?? FILTERS[0]
  const leadCoffee = displayedCoffees[0]
  const secondCoffee = displayedCoffees[1]
  const remainingCoffees = displayedCoffees.slice(2)

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
      <ScrollReveal>
        <div className="glass-panel rounded-[32px] p-5 md:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/70">
                Filter by Purity Signal
              </p>
              <h2 className="font-display mt-3 text-3xl tracking-tight text-white">Compare the heavy-metal ranking tiers.</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{activeFilterMeta.detail}</p>
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
              Showing <span className="font-semibold text-white">{displayedCoffees.length}</span> ranked options
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {FILTERS.map((filter) => {
              const active = filter.id === activeFilter

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => startTransition(() => setActiveFilter(filter.id))}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                    active
                      ? 'border-amber-accent/60 bg-amber-accent/12 text-amber-100'
                      : 'border-white/10 bg-white/[0.04] text-slate-200 hover:border-white/20 hover:bg-white/[0.07]'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-8 space-y-6">
        {leadCoffee ? (
          <div className="grid gap-6 xl:grid-cols-5">
            <ScrollReveal className="xl:col-span-3">
              <CoffeeCard coffee={leadCoffee} variant="hero" />
            </ScrollReveal>

            {secondCoffee ? (
              <ScrollReveal className="xl:col-span-2" delay={80}>
                <CoffeeCard coffee={secondCoffee} variant="feature" />
              </ScrollReveal>
            ) : null}
          </div>
        ) : null}

        {remainingCoffees.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {remainingCoffees.map((coffee, index) => (
              <ScrollReveal key={coffee.id} delay={Math.min(index * 45, 220)}>
                <CoffeeCard coffee={coffee} variant="standard" />
              </ScrollReveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

function CoffeeCard({
  coffee,
  variant,
}: {
  coffee: Treatment
  variant: 'hero' | 'feature' | 'standard'
}) {
  const cleanScoreSize =
    variant === 'hero' ? 'text-5xl md:text-6xl' : variant === 'feature' ? 'text-4xl md:text-5xl' : 'text-4xl'
  const descriptionWidth = variant === 'hero' ? 'max-w-3xl' : 'max-w-2xl'
  const toneBackground =
    variant === 'hero'
      ? 'bg-[radial-gradient(circle_at_top_left,rgba(241,181,68,0.18),transparent_38%),linear-gradient(180deg,rgba(54,34,20,0.98),rgba(28,17,8,0.94))]'
      : 'bg-[linear-gradient(180deg,rgba(20,34,54,0.95),rgba(8,17,28,0.9))]'

  return (
    <article className={`card-lift relative h-full overflow-hidden rounded-[34px] border border-white/8 ${toneBackground} p-6 md:p-7`}>
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-accent/10 blur-3xl" />
      <div className="relative flex h-full flex-col gap-6">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 shadow-[0_20px_55px_rgba(0,0,0,0.35)]">
          <Image
            src={coffee.imageUrl}
            alt={coffee.imageAlt}
            width={1200}
            height={760}
            className={`w-full object-cover ${variant === 'hero' ? 'h-72 md:h-80' : 'h-56'}`}
            sizes={variant === 'hero' ? '(min-width: 1280px) 60vw, 100vw' : '(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw'}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-100/85">Actual coffee visual</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div className={descriptionWidth}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-accent text-lg font-black text-navy-950 shadow-[0_12px_28px_rgba(241,181,68,0.28)]">
                #{coffee.rank}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-200">
                {classLabel(coffee.className)}
              </span>
            </div>

            <h3 className="font-display mt-5 text-3xl tracking-tight text-white md:text-4xl">{coffee.name}</h3>
            {coffee.brandNames ? <p className="mt-2 text-sm text-slate-400">{coffee.brandNames}</p> : null}
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{coffee.notes}</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[rgba(8,17,28,0.8)] px-5 py-4 shadow-[0_16px_42px_rgba(8,17,28,0.32)]">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-amber-100/70">Purity Score</p>
            <p className={`font-display mt-3 tracking-tight text-white ${cleanScoreSize}`}>{coffee.cleanScore}</p>
            <p className="mt-3 text-sm text-slate-300">Proof signal: {coffee.responseRate}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <DataPill label="Evidence" value={coffee.trials} />
          <DataPill label="Testing role" value={coffee.severity} />
          <DataPill label="Route" value={coffee.route} />
          <DataPill label="Tradeoffs" value={coffee.keySideEffects} />
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
            Updated: {coffee.yearApproved}
          </span>
          <span className="rounded-full border border-amber-accent/20 bg-amber-accent/10 px-3 py-1.5 text-amber-50">
            Keep batch differences in mind
          </span>
        </div>
      </div>
    </article>
  )
}

function DataPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[26px] border border-white/8 bg-white/[0.04] p-4">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-200">{value}</p>
    </div>
  )
}
