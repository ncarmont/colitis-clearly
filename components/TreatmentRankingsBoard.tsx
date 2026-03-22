'use client'

import { startTransition, useDeferredValue, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import type { Treatment } from '@/lib/treatments'

type FilterId = 'all' | '5-asa' | 'biologics' | 'small-molecules' | 'other'

const FILTERS: { id: FilterId; label: string; detail: string }[] = [
  { id: 'all', label: 'All', detail: 'Every ranked treatment in the dataset.' },
  { id: '5-asa', label: '5-ASA', detail: 'First-line aminosalicylate therapy.' },
  { id: 'biologics', label: 'Biologics', detail: 'Anti-TNF, anti-integrin, IL-12/23, and IL-23 agents.' },
  { id: 'small-molecules', label: 'Small Molecules', detail: 'JAK inhibitors and S1P modulators.' },
  { id: 'other', label: 'Other', detail: 'Steroids, immunomodulators, local therapy, and surgery.' },
]

function matchesFilter(treatment: Treatment, filterId: FilterId) {
  if (filterId === 'all') {
    return true
  }

  if (filterId === '5-asa') {
    return treatment.className.includes('5-ASA')
  }

  if (filterId === 'biologics') {
    return treatment.className.startsWith('Biologic')
  }

  if (filterId === 'small-molecules') {
    return treatment.className.startsWith('Small molecule')
  }

  return !(
    treatment.className.includes('5-ASA') ||
    treatment.className.startsWith('Biologic') ||
    treatment.className.startsWith('Small molecule')
  )
}

function classLabel(className: string) {
  if (className.includes('5-ASA')) {
    return '5-ASA'
  }

  if (className.startsWith('Biologic')) {
    return 'Biologic'
  }

  if (className.startsWith('Small molecule')) {
    return 'Small Molecule'
  }

  if (className === 'Rectal therapy') {
    return 'Local Therapy'
  }

  return className
}

export default function TreatmentRankingsBoard({ treatments }: { treatments: Treatment[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const deferredFilter = useDeferredValue(activeFilter)
  const displayedTreatments = treatments.filter((treatment) => matchesFilter(treatment, deferredFilter))
  const activeFilterMeta = FILTERS.find((filter) => filter.id === activeFilter) ?? FILTERS[0]
  const leadTreatment = displayedTreatments[0]
  const secondTreatment = displayedTreatments[1]
  const remainingTreatments = displayedTreatments.slice(2)

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
      <ScrollReveal>
        <div className="glass-panel rounded-[32px] p-5 md:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/70">
                Filter by Treatment Class
              </p>
              <h2 className="font-display mt-3 text-3xl tracking-tight text-white">Compare within the right treatment lane.</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{activeFilterMeta.detail}</p>
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
              Showing <span className="font-semibold text-white">{displayedTreatments.length}</span> ranked options
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
                      ? 'border-emerald-accent/60 bg-emerald-accent/12 text-emerald-100'
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
        {leadTreatment ? (
          <div className="grid gap-6 xl:grid-cols-5">
            <ScrollReveal className="xl:col-span-3">
              <TreatmentCard treatment={leadTreatment} variant="hero" />
            </ScrollReveal>

            {secondTreatment ? (
              <ScrollReveal className="xl:col-span-2" delay={80}>
                <TreatmentCard treatment={secondTreatment} variant="feature" />
              </ScrollReveal>
            ) : null}
          </div>
        ) : null}

        {remainingTreatments.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {remainingTreatments.map((treatment, index) => (
              <ScrollReveal key={treatment.id} delay={Math.min(index * 45, 220)}>
                <TreatmentCard treatment={treatment} variant="standard" />
              </ScrollReveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

function TreatmentCard({
  treatment,
  variant,
}: {
  treatment: Treatment
  variant: 'hero' | 'feature' | 'standard'
}) {
  const remissionSize =
    variant === 'hero' ? 'text-5xl md:text-6xl' : variant === 'feature' ? 'text-4xl md:text-5xl' : 'text-4xl'
  const descriptionWidth = variant === 'hero' ? 'max-w-3xl' : 'max-w-2xl'
  const toneBackground =
    variant === 'hero'
      ? 'bg-[radial-gradient(circle_at_top_left,rgba(46,204,113,0.18),transparent_38%),linear-gradient(180deg,rgba(20,34,54,0.98),rgba(8,17,28,0.94))]'
      : 'bg-[linear-gradient(180deg,rgba(20,34,54,0.95),rgba(8,17,28,0.9))]'

  return (
    <article className={`card-lift relative h-full overflow-hidden rounded-[34px] border border-white/8 ${toneBackground} p-6 md:p-7`}>
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-accent/10 blur-3xl" />
      <div className="relative flex h-full flex-col gap-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div className={descriptionWidth}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-accent text-lg font-black text-navy-950 shadow-[0_12px_28px_rgba(0,200,83,0.28)]">
                #{treatment.rank}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-200">
                {classLabel(treatment.className)}
              </span>
            </div>

            <h3 className="font-display mt-5 text-3xl tracking-tight text-white md:text-4xl">{treatment.name}</h3>
            {treatment.brandNames ? <p className="mt-2 text-sm text-slate-400">{treatment.brandNames}</p> : null}
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{treatment.notes}</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[rgba(8,17,28,0.8)] px-5 py-4 shadow-[0_16px_42px_rgba(8,17,28,0.32)]">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-emerald-100/70">Remission Rate</p>
            <p className={`font-display mt-3 tracking-tight text-white ${remissionSize}`}>{treatment.remissionRate}</p>
            <p className="mt-3 text-sm text-slate-300">Response signal: {treatment.responseRate}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <DataPill label="Trial name" value={treatment.trials} />
          <DataPill label="Clinical role" value={treatment.severity} />
          <DataPill label="Route" value={treatment.route} />
          <DataPill label="Side effects" value={treatment.keySideEffects} />
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
            Approved: {treatment.yearApproved}
          </span>
          <span className="rounded-full border border-amber-accent/20 bg-amber-accent/10 px-3 py-1.5 text-amber-50">
            Keep cross-trial differences in mind
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
