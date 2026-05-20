'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import {
  PRODUCTS,
  type ProductCategory,
  type RecommendedProduct,
} from '@/lib/products'

const tabs: Array<'All' | ProductCategory> = ['All', 'Coffee', 'Decaf', 'Testing', 'Brewing', 'Watchlist']

const proofOrder: Record<NonNullable<RecommendedProduct['proofTier']>, number> = {
  'Exact public COA': 0,
  'CLP Clean 16': 1,
  'Public test claim': 2,
  'COA on request': 3,
  'Missing numbers': 4,
  'Buyer tool': 5,
}

const proofTone: Record<string, string> = {
  'Exact public COA': 'border-emerald-accent/70 bg-emerald-accent/90 text-navy-950 shadow-[0_0_28px_rgba(0,200,83,0.13)]',
  'CLP Clean 16': 'border-cyan-200/70 bg-cyan-200/90 text-navy-950',
  'Public test claim': 'border-amber-accent/70 bg-amber-accent/90 text-navy-950',
  'COA on request': 'border-violet-200/70 bg-violet-200/90 text-navy-950',
  'Missing numbers': 'border-coral-300/70 bg-coral-300/90 text-navy-950',
  'Buyer tool': 'border-slate-200/70 bg-slate-200/90 text-navy-950',
}

const categoryTone: Record<ProductCategory, string> = {
  Coffee: 'border-amber-accent/35 bg-amber-accent/12 text-amber-100',
  Decaf: 'border-emerald-accent/35 bg-emerald-accent/12 text-emerald-100',
  Testing: 'border-teal-accent/38 bg-teal-accent/12 text-teal-100',
  Brewing: 'border-violet-400/38 bg-violet-400/12 text-violet-100',
  Watchlist: 'border-slate-300/25 bg-slate-300/10 text-slate-200',
}

function score(product: RecommendedProduct) {
  return product.purityScore ?? 0
}

function sortProducts(products: RecommendedProduct[]) {
  return [...products].sort((a, b) => {
    const tierDelta = (proofOrder[a.proofTier ?? 'Buyer tool'] ?? 99) - (proofOrder[b.proofTier ?? 'Buyer tool'] ?? 99)
    if (tierDelta !== 0) return tierDelta
    return score(b) - score(a)
  })
}

function exactProducts() {
  return sortProducts(PRODUCTS.filter((product) => product.proofTier === 'Exact public COA'))
}

function compactEvidence(text: string) {
  const [lead, ...rest] = text.split(':')
  return { lead, rest: rest.join(':').trim() }
}

function ScoreBar({ value, max }: { value: number; max: number }) {
  const percent = Math.max(0, Math.min(100, (value / max) * 100))

  return (
    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
      <div className="h-full rounded-full bg-gradient-to-r from-emerald-accent via-amber-accent to-coral-400" style={{ width: `${percent}%` }} />
    </div>
  )
}

function ProofBadge({ product }: { product: RecommendedProduct }) {
  const tier = product.proofTier ?? product.evidenceLevel

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] backdrop-blur-xl ${proofTone[tier] ?? proofTone['Buyer tool']}`}>
      {tier}
    </span>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.055] px-4 py-3">
      <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-1 font-display text-2xl text-white">{value}</p>
    </div>
  )
}

function LeaderPanel() {
  const leaders = exactProducts()
  const winner = leaders[0]

  if (!winner) return null

  return (
    <ScrollReveal>
      <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,12,7,0.96),rgba(8,17,28,0.96))] shadow-[0_26px_80px_rgba(0,0,0,0.25)]">
        <div className="absolute inset-0 opacity-25 dot-grid-pattern" />
        <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-amber-accent/20 blur-3xl" />
        <div className="relative grid gap-0 lg:grid-cols-[0.82fr,1.18fr]">
          <div className="flex min-h-[340px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_58%),linear-gradient(135deg,#f8efe2,#caa36b)] p-6 lg:min-h-[430px]">
            <Image src={winner.imageUrl} alt={winner.name} width={1000} height={900} className="max-h-[390px] w-full object-contain drop-shadow-[0_28px_48px_rgba(0,0,0,0.32)]" priority />
          </div>

          <div className="relative flex flex-col justify-center border-t border-white/8 p-6 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <ProofBadge product={winner} />
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-slate-300">Current #1</span>
            </div>
            <h3 className="font-display mt-5 max-w-3xl text-4xl leading-[0.94] tracking-tight text-white md:text-6xl">
              {winner.brand} <span className="text-amber-accent">{winner.name}</span>
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
              {winner.bestFor}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <Metric label="Score" value={`${winner.purityScore}/100`} />
              <Metric label="Heavy metals" value="Pb/Hg <5 ppb" />
              <Metric label="Mould/yeast" value="<10 CFU/g" />
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {leaders.slice(0, 3).map((product, index) => (
                <div key={product.id} className="rounded-[22px] border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-slate-400">#{index + 1} exact COA</p>
                  <p className="mt-2 text-sm font-bold text-white">{product.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{product.heavyMetalSummary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

function ProofLadder() {
  const tiers = [
    { tier: 'Exact public COA', label: 'Publishes numeric PDFs', note: 'Lab/date/sample/units visible. This is the top shelf.' },
    { tier: 'CLP Clean 16', label: 'Independent certification', note: 'Strong third-party signal, but product numbers still hidden.' },
    { tier: 'Public test claim', label: 'Claims testing', note: 'Useful lead, not proof until values are public.' },
    { tier: 'Missing numbers', label: 'Red flags / broken proof', note: 'Marketing, broken PDFs, or no batch-level receipts.' },
  ]

  return (
    <ScrollReveal>
      <section className="mt-8 grid gap-3 md:grid-cols-4">
        {tiers.map((item, index) => {
          const count = PRODUCTS.filter((product) => product.proofTier === item.tier).length

          return (
            <div key={item.tier} className="rounded-[26px] border border-white/8 bg-white/[0.035] p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-slate-400">Tier {index + 1}</span>
                <span className="font-display text-3xl text-amber-accent">{count}</span>
              </div>
              <p className="mt-3 text-sm font-bold text-white">{item.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.note}</p>
            </div>
          )
        })}
      </section>
    </ScrollReveal>
  )
}

const researchQueue = [
  'Bulletproof Breakfast Blend / The Mentalist pods',
  'Fabula Dark Roast Pod',
  'Equal Exchange Organic Breakfast Blend',
  'Kicking Horse Three Sisters',
  'San Francisco Bay Organic Rainforest Blend Pod',
  'Groundwork Organic Ethiopia',
  'Counter Culture Forty-Six',
  'Death Wish Medium Roast',
]

function ResearchQueue() {
  return (
    <ScrollReveal>
      <section className="mt-8 rounded-[30px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-5 md:p-6">
        <div className="grid gap-6 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-amber-100/70">Research queue</p>
            <h3 className="font-display mt-2 text-3xl tracking-tight text-white">Checked next. Not promoted yet.</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              These brands/products surfaced through Clean Label Project category lists or clean-coffee claims, but no public product-level numeric COA was found in the latest pass. They stay below exact receipts until the lab values are visible.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {researchQueue.map((item) => (
              <div key={item} className="rounded-[18px] border border-white/8 bg-black/18 px-4 py-3">
                <p className="text-sm font-bold text-white">{item}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">Lead found; public numeric Pb/Cd/As/Hg + OTA/aflatoxin values not found yet.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

function ComparisonTable() {
  const rows = sortProducts(PRODUCTS.filter((product) => ['Coffee', 'Decaf', 'Watchlist'].includes(product.category))).slice(0, 10)

  return (
    <ScrollReveal>
      <section className="mt-8 overflow-hidden rounded-[32px] border border-white/8 bg-white/[0.035]">
        <div className="flex flex-col gap-3 border-b border-white/8 p-5 md:flex-row md:items-end md:justify-between md:p-6">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-100/70">Evidence leaderboard</p>
            <h3 className="font-display mt-2 text-3xl tracking-tight text-white">Receipts beat reputation.</h3>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            Promoted winners require exact public COAs or strong independent certification. Claims-only and missing-number rows are included for transparency — not recommendations.
          </p>
        </div>

        <div className="border-b border-white/8 px-5 py-4 md:px-6">
          <div className="flex flex-wrap gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em]">
            <span className="rounded-full border border-emerald-accent/35 bg-emerald-accent/10 px-3 py-1 text-emerald-100">Promoted: exact public COA</span>
            <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-cyan-100">Secondary: CLP / certification</span>
            <span className="rounded-full border border-coral-300/35 bg-coral-300/10 px-3 py-1 text-coral-100">Watchlist: checked, not promoted</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[980px] w-full text-left text-sm">
            <thead className="bg-black/20 text-[0.62rem] uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-5 py-4">Rank</th>
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">Proof</th>
                <th className="px-5 py-4">Heavy metals</th>
                <th className="px-5 py-4">Mycotoxins / mould</th>
                <th className="px-5 py-4">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/8">
              {rows.map((product, index) => (
                <tr key={product.id} className={`align-middle hover:bg-white/[0.025] ${['Public test claim', 'Missing numbers', 'COA on request'].includes(product.proofTier ?? '') ? 'bg-coral-400/[0.025]' : ''}`}>
                  <td className="px-5 py-4 font-display text-2xl text-slate-400">{['Public test claim', 'Missing numbers', 'COA on request'].includes(product.proofTier ?? '') ? 'Watch' : `#${index + 1}`}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#f8efe2]">
                        <Image src={product.imageUrl} alt="" width={120} height={120} className="h-full w-full object-contain p-1.5 mix-blend-multiply" />
                      </div>
                      <div>
                        <p className="font-bold text-white">{product.brand}</p>
                        <p className="text-slate-300">{product.name}</p>
                        {['Public test claim', 'Missing numbers', 'COA on request'].includes(product.proofTier ?? '') ? <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-coral-200">Checked, not promoted</p> : null}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4"><ProofBadge product={product} /></td>
                  <td className="px-5 py-4 leading-relaxed text-slate-200">{product.heavyMetalSummary ?? 'Not applicable'}</td>
                  <td className="px-5 py-4 leading-relaxed text-slate-200">{product.mycotoxinSummary ?? product.moldYeastSummary ?? 'Not applicable'}</td>
                  <td className="px-5 py-4"><span className="font-display text-2xl text-amber-accent">{product.purityScore ?? '—'}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </ScrollReveal>
  )
}

function ProductCard({ product, index }: { product: RecommendedProduct; index: number }) {
  const evidence = compactEvidence(product.why)
  const topLabRows = product.labResults?.slice(0, 6) ?? []

  return (
    <ScrollReveal key={product.name} delay={Math.min(index * 35, 180)}>
      <article className={`card-lift group relative h-full overflow-hidden rounded-[34px] border bg-[linear-gradient(180deg,rgba(11,20,34,0.96),rgba(8,17,28,0.98))] shadow-[0_22px_66px_rgba(0,0,0,0.28)] ${index === 0 ? 'border-amber-accent/80 shadow-[0_24px_76px_rgba(241,181,68,0.18)]' : 'border-white/8'}`}>
        <div className="grid min-h-full grid-rows-[auto,1fr]">
          <div className="relative flex h-[360px] items-center justify-center overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.92),transparent_58%),linear-gradient(135deg,#fbf3e8,#caa36b)] p-6 md:h-[420px]">
            <Image src={product.imageUrl} alt={product.name} width={1100} height={900} className="max-h-full w-full object-contain drop-shadow-[0_28px_46px_rgba(0,0,0,0.32)] transition duration-700 group-hover:scale-[1.045]" priority={index < 2} />
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl font-black shadow-[0_12px_28px_rgba(0,0,0,0.22)] ${index === 0 ? 'border-amber-200 bg-amber-accent text-navy-950' : 'border-white/55 bg-white/80 text-slate-700 backdrop-blur-xl'}`}>{index + 1}</span>
              <span className={`rounded-full border px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] backdrop-blur-xl ${categoryTone[product.category]}`}>{product.category}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/72 to-transparent px-5 pb-5 pt-24">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-amber-100/80">{product.rankLabel ?? `#${index + 1} ranked`}</p>
                  {product.purityScore ? <p className="font-display mt-1 text-6xl leading-none tracking-tight text-amber-accent">{product.purityScore}<span className="ml-1 text-base font-bold text-white/80">/100</span></p> : null}
                </div>
                <ProofBadge product={product} />
              </div>
            </div>
          </div>

          <div className="flex flex-col p-5 md:p-6">
            <div>
              <h3 className="font-display text-3xl leading-none tracking-tight text-white md:text-4xl">{product.name}</h3>
              {product.brand ? <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-300">{product.brand}</p> : null}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">{product.description}</p>

            {product.bestFor ? (
              <div className="mt-4 rounded-[20px] border border-emerald-accent/14 bg-emerald-accent/[0.055] p-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-emerald-100/70">Best for</p>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50/90">{product.bestFor}</p>
              </div>
            ) : null}

            {topLabRows.length ? (
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {topLabRows.map((row) => (
                  <div key={`${product.id}-${row.label}`} className="rounded-[16px] border border-white/8 bg-white/[0.04] px-3 py-2.5">
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-slate-400">{row.label}</p>
                    <p className="mt-1 text-sm font-bold text-white">{row.value}</p>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-5 rounded-[20px] border border-white/8 bg-black/16 p-4">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-slate-400">Proof read</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                <span className="font-bold text-white">{evidence.lead}</span>
                {evidence.rest ? `: ${evidence.rest}` : null}
              </p>
            </div>

            {product.reportName || product.reportDate || product.sample ? (
              <details className="mt-4 rounded-[20px] border border-cyan-400/14 bg-cyan-400/[0.045] p-4 open:bg-cyan-400/[0.065]">
                <summary className="cursor-pointer text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cyan-100/80">Lab anchor</summary>
                <div className="mt-3 space-y-2 text-xs leading-relaxed text-slate-300">
                  {product.labName ? <p><span className="font-bold text-white">Lab:</span> {product.labName}</p> : null}
                  {product.reportName ? <p><span className="font-bold text-white">Report:</span> {product.reportName}</p> : null}
                  {product.reportDate ? <p><span className="font-bold text-white">Date:</span> {product.reportDate}</p> : null}
                  {product.sample ? <p><span className="font-bold text-white">Sample:</span> {product.sample}</p> : null}
                </div>
              </details>
            ) : null}

            {product.scoreBreakdown?.length ? (
              <details className="mt-4 rounded-[20px] border border-white/8 bg-white/[0.035] p-4">
                <summary className="cursor-pointer text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-300">Score method</summary>
                <div className="mt-3 space-y-3">
                  {product.scoreBreakdown.map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between gap-3 text-xs">
                        <span className="font-bold text-white">{row.label}</span>
                        <span className="text-slate-400">{Math.min(row.value, row.max)}/{row.max}</span>
                      </div>
                      <ScoreBar value={Math.min(row.value, row.max)} max={row.max} />
                      <p className="mt-1 text-[0.7rem] leading-relaxed text-slate-400">{row.note}</p>
                    </div>
                  ))}
                </div>
              </details>
            ) : null}

            {product.disclosureGaps?.length ? (
              <div className="mt-4 rounded-[20px] border border-amber-accent/20 bg-amber-accent/[0.055] p-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-amber-100/75">Missing receipt</p>
                <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-amber-50/85">
                  {product.disclosureGaps.map((gap) => <li key={gap}>• {gap}</li>)}
                </ul>
              </div>
            ) : null}

            {product.testScope?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {product.testScope.slice(0, 7).map((test) => (
                  <span key={test} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-slate-300">{test}</span>
                ))}
              </div>
            ) : null}

            <div className="mt-auto pt-6">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-200">{product.priceRange}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Approx. price range</span>
              </div>

              {product.amazonUrl.startsWith('/') ? (
                <a href={product.amazonUrl} className="inline-flex w-full items-center justify-center rounded-full bg-emerald-accent px-5 py-3 text-sm font-bold text-navy-950 shadow-[0_16px_36px_rgba(0,200,83,0.18)] hover:bg-[#2ed37a]">
                  Read buyer checklist
                </a>
              ) : (
                <div className="grid gap-2 sm:grid-cols-2">
                  <a href={product.amazonUrl} target="_blank" rel="noreferrer sponsored" className="inline-flex w-full items-center justify-center rounded-full bg-amber-accent px-5 py-3 text-sm font-black text-navy-950 shadow-[0_16px_36px_rgba(241,181,68,0.18)] hover:bg-[#f7c863]">
                    Buy/Search Amazon US
                  </a>
                  {product.amazonUkUrl ? (
                    <a href={product.amazonUkUrl} target="_blank" rel="noreferrer sponsored" className="inline-flex w-full items-center justify-center rounded-full border border-amber-accent/45 bg-amber-accent/10 px-5 py-3 text-sm font-black text-amber-100 hover:bg-amber-accent/16">
                      Amazon UK
                    </a>
                  ) : null}
                </div>
              )}

              {product.sourceUrl ? (
                <a href={product.sourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white hover:border-cyan-300/30 hover:bg-white/[0.07]">
                  {product.sourceLabel ?? 'View lab source'}
                </a>
              ) : null}

              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Rankings favor public exact values over “tested” claims. Amazon buttons use affiliate tags; batch results can change, so check the current lot before buying.
              </p>
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}

export default function ShopRecommendationsClient() {
  const [activeCategory, setActiveCategory] = useState<'All' | ProductCategory>('All')

  const filteredProducts = useMemo(
    () => sortProducts(activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter((product) => product.category === activeCategory)),
    [activeCategory],
  )

  return (
    <div>
      <LeaderPanel />
      <ProofLadder />
      <ComparisonTable />
      <ResearchQueue />

      <div className="sticky top-[76px] z-20 -mx-4 mt-8 border-y border-white/8 bg-navy-950/88 px-4 py-3 shadow-[0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur-xl md:mx-0 md:rounded-full md:border md:bg-navy-950/76">
        <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0">
          {tabs.map((tab) => {
            const active = tab === activeCategory

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveCategory(tab)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition ${
                  active
                    ? 'border-amber-accent/60 bg-amber-accent/12 text-amber-100 shadow-[0_12px_32px_rgba(241,181,68,0.13)]'
                    : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/16 hover:bg-white/[0.07] hover:text-white'
                }`}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-7 xl:grid-cols-2">
        {filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
      </div>
    </div>
  )
}
