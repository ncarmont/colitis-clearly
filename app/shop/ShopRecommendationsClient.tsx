'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import {
  PRODUCTS,
  type EvidenceLevel,
  type ProductCategory,
} from '@/lib/products'

const tabs: Array<'All' | ProductCategory> = ['All', 'Diet', 'Supplements', 'Gut Health', 'Lifestyle']

const categoryStyles: Record<ProductCategory, string> = {
  Diet: 'border-amber-accent/30 bg-amber-accent/12 text-amber-100',
  Supplements: 'border-emerald-accent/30 bg-emerald-accent/12 text-emerald-100',
  'Gut Health': 'border-teal-accent/30 bg-teal-accent/12 text-teal-100',
  Lifestyle: 'border-violet-400/30 bg-violet-400/12 text-violet-100',
}

const evidenceStyles: Record<EvidenceLevel, string> = {
  High: 'border-emerald-accent/30 bg-emerald-accent/12 text-emerald-100',
  Moderate: 'border-cyan-400/30 bg-cyan-400/12 text-cyan-100',
  Emerging: 'border-amber-accent/30 bg-amber-accent/12 text-amber-100',
}

const categoryGlow: Record<ProductCategory, string> = {
  Diet: 'from-amber-accent/30 via-amber-accent/10 to-transparent',
  Supplements: 'from-emerald-accent/32 via-emerald-accent/10 to-transparent',
  'Gut Health': 'from-teal-accent/30 via-teal-accent/10 to-transparent',
  Lifestyle: 'from-violet-400/30 via-violet-400/10 to-transparent',
}

function splitEvidenceLead(text: string) {
  const separatorIndex = text.indexOf(':')

  if (separatorIndex === -1) {
    return { lead: text, rest: '' }
  }

  return {
    lead: text.slice(0, separatorIndex),
    rest: text.slice(separatorIndex + 1).trim(),
  }
}

export default function ShopRecommendationsClient() {
  const [activeCategory, setActiveCategory] = useState<'All' | ProductCategory>('All')

  const filteredProducts =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory)

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => {
          const active = tab === activeCategory

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveCategory(tab)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold ${
                active
                  ? 'border-emerald-accent/50 bg-emerald-accent/12 text-emerald-100 shadow-[0_12px_32px_rgba(0,200,83,0.16)]'
                  : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/16 hover:bg-white/[0.07] hover:text-white'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product, index) => {
          const evidence = splitEvidenceLead(product.why)

          return (
            <ScrollReveal key={product.name} delay={Math.min(index * 45, 220)}>
              <article className="card-lift glass-panel group relative h-full overflow-hidden border border-white/8 p-6">
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${categoryGlow[product.category]}`} />

                <div className="flex items-start justify-between gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-[22px] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>

                  <div className="flex flex-wrap justify-end gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${categoryStyles[product.category]}`}
                    >
                      {product.category}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${evidenceStyles[product.evidenceLevel]}`}
                    >
                      {product.evidenceLevel}
                    </span>
                  </div>
                </div>

                <h3 className="font-display mt-6 text-3xl leading-tight tracking-tight text-white">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{product.description}</p>

                <p className="mt-5 text-sm leading-relaxed text-slate-200">
                  <span className="font-semibold text-white">{evidence.lead}</span>
                  {evidence.rest ? `: ${evidence.rest}` : null}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                    {product.priceRange}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Approximate price range</span>
                </div>

                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noreferrer sponsored"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-emerald-accent px-5 py-3 text-sm font-semibold text-navy-950 shadow-[0_16px_36px_rgba(0,200,83,0.18)] hover:bg-[#2ed37a]"
                >
                  View on Amazon
                </a>

                <p className="mt-4 text-xs leading-relaxed text-slate-400">
                  As an Amazon Associate we earn from qualifying purchases.
                </p>
              </article>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  )
}
