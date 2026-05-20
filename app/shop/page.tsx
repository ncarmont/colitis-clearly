import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import ScrollReveal from '@/components/ScrollReveal'
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/lib/products'
import ShopRecommendationsClient from './ShopRecommendationsClient'

export const metadata: Metadata = {
  title: 'Clean Coffee Product Lab Rankings | Cleanest Coffee',
  description:
    'Clean coffee product rankings built from exact published lab-test values, COA links, heavy-metal/mycotoxin evidence, and disclosure gaps.',
}

const heroStats = [
  {
    value: `${PRODUCTS.length}`,
    label: 'products audited',
  },
  {
    value: `${PRODUCT_CATEGORIES.length}`,
    label: 'recommendation categories',
  },
  {
    value: 'COA',
    label: 'numbers before hype',
  },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-navy-950 text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#08111c_0%,#0a1628_55%,#08111c_100%)]" />
        <div className="absolute hero-orb hero-orb-emerald orb-drift-slow left-[-7rem] top-[-2rem] h-72 w-72" />
        <div className="absolute hero-orb hero-orb-teal orb-drift-reverse right-[-5rem] top-10 h-80 w-80" />
        <div className="absolute hero-orb hero-orb-amber orb-drift-delayed bottom-[-7rem] left-[36%] h-56 w-56 opacity-45" />
        <div className="absolute inset-0 opacity-35 dot-grid-pattern" />

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 md:px-6 md:pb-14 md:pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-100/75 hover:text-emerald-100"
          >
            <span>←</span>
            Back to home
          </Link>

          <div className="mt-5 overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(12,22,34,0.96),rgba(17,11,6,0.94))] px-5 py-8 shadow-[0_24px_72px_rgba(0,0,0,0.28)] md:px-8 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-end">
              <div>
                <div className="animate-fade-in-up inline-flex rounded-full border border-emerald-accent/20 bg-emerald-accent/10 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-100/80">
                  Exact Lab-Tested Recommendations
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                  <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.92] tracking-tight text-white md:text-7xl">
                    Clean coffee rankings, rebuilt around receipts.
                  </h1>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                  <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                    Public COA PDFs first. Clean Label Project certification second. “Third-party tested” copy with no values goes to the watchlist. No mercy for missing numbers.
                  </p>
                </div>
              </div>

              <div>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {heroStats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="animate-fade-in-up rounded-[24px] border border-white/10 bg-white/[0.055] px-5 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
                      style={{ animationDelay: `${300 + index * 90}ms` }}
                    >
                      <p className="font-display text-4xl tracking-tight text-white">{stat.value}</p>
                      <p className="mt-2 text-sm font-semibold text-emerald-100">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up mt-7" style={{ animationDelay: '520ms' }}>
              <MedicalDisclaimer compact />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/70">
              Receipts over reputation
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-5xl">
              Lowest heavy metals only counts when the numbers are public.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              Public exact COAs outrank “third-party tested” copy. Claim-only brands stay on the watchlist until they publish batch-level values.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8">
          <ShopRecommendationsClient />
        </div>
      </section>
    </main>
  )
}
