'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import type { RecommendedProduct } from '@/lib/products'

const EVIDENCE_COLORS: Record<string, { border: string; bg: string; text: string }> = {
  High: { border: 'border-emerald-accent/40', bg: 'bg-emerald-accent/12', text: 'text-emerald-100' },
  Moderate: { border: 'border-amber-accent/40', bg: 'bg-amber-accent/12', text: 'text-amber-100' },
  Emerging: { border: 'border-violet-400/40', bg: 'bg-violet-400/12', text: 'text-violet-100' },
}

function ProductCard({ product, index }: { product: RecommendedProduct; index: number }) {
  const ev = EVIDENCE_COLORS[product.evidenceLevel] ?? EVIDENCE_COLORS.Moderate

  return (
    <ScrollReveal delay={Math.min(index * 70, 280)}>
      <a
        href={product.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-navy-800/60 to-navy-950/80 transition-all duration-500 hover:border-emerald-accent/20 hover:shadow-[0_16px_48px_rgba(0,200,83,0.1)]"
      >
        {/* Product Image */}
        <div className="relative h-48 w-full overflow-hidden bg-navy-800/50">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

          {/* Effect size badge */}
          {product.effectSize && (
            <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-navy-950/80 px-3 py-1.5 backdrop-blur-md">
              <span className="text-xs font-bold text-emerald-accent">{product.effectSize}</span>
            </div>
          )}

          {/* Evidence level */}
          <div className={`absolute right-3 top-3 rounded-full border ${ev.border} ${ev.bg} px-2.5 py-1 backdrop-blur-md`}>
            <span className={`text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${ev.text}`}>
              {product.evidenceLevel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
              {product.category}
            </span>
            <span className="text-[0.65rem] text-slate-500">{product.priceRange}</span>
          </div>

          <h3 className="mt-3 text-lg font-bold leading-tight text-white">{product.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{product.description}</p>

          <div className="mt-3 rounded-[16px] border border-emerald-accent/10 bg-emerald-accent/[0.04] px-3 py-2.5">
            <p className="text-xs leading-relaxed text-emerald-100/80">
              <span className="font-semibold text-emerald-accent">Science: </span>
              {product.why.split('.')[0]}.
            </p>
          </div>

          <div className="mt-auto pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-emerald-accent transition-all duration-300 group-hover:text-emerald-200">
                View on Amazon →
              </span>
            </div>
          </div>
        </div>
      </a>
    </ScrollReveal>
  )
}

export default function FeaturedProducts({ products }: { products: RecommendedProduct[] }) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-amber-accent/[0.04] blur-[100px]" />

      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-amber-accent/70">Science-Backed Picks</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight text-white md:text-5xl">
            Top Ranked <span className="bg-gradient-to-r from-amber-200 to-amber-accent bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300">
            Every recommendation backed by published clinical trial data. We only list products with real evidence behind them.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-amber-accent/30 hover:bg-white/[0.08]"
          >
            View All Recommendations →
          </Link>
          <p className="mt-4 text-xs text-slate-500">
            As an Amazon Associate we earn from qualifying purchases. This does not affect our evidence-based rankings.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
