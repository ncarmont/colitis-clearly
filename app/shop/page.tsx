import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import ScrollReveal from '@/components/ScrollReveal'
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/lib/products'
import ShopRecommendationsClient from './ShopRecommendationsClient'

export const metadata: Metadata = {
  title: 'Science-Backed Recommendations | Project Remission UC',
  description:
    'Evidence-guided product recommendations for ulcerative colitis covering Mediterranean diet staples, supplements, gut health support, and lifestyle upgrades.',
}

const heroStats = [
  {
    value: `${PRODUCTS.length}`,
    label: 'science-backed picks',
  },
  {
    value: `${PRODUCT_CATEGORIES.length}`,
    label: 'recommendation categories',
  },
  {
    value: '100%',
    label: 'published-evidence filter',
  },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-navy-950 text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#08111c_0%,#0a1628_55%,#08111c_100%)]" />
        <div className="hero-orb hero-orb-emerald orb-drift-slow left-[-7rem] top-[-2rem] h-72 w-72" />
        <div className="hero-orb hero-orb-teal orb-drift-reverse right-[-5rem] top-10 h-80 w-80" />
        <div className="hero-orb hero-orb-amber orb-drift-delayed bottom-[-7rem] left-[36%] h-56 w-56 opacity-45" />
        <div className="absolute inset-0 opacity-35 dot-grid-pattern" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-6 md:pb-20 md:pt-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-100/75 hover:text-emerald-100"
          >
            <span>←</span>
            Back to home
          </Link>

          <div className="hero-shimmer glass-panel mt-6 px-6 py-10 md:px-10 md:py-14">
            <div className="mx-auto max-w-5xl">
              <div className="animate-fade-in-up">
                <div className="inline-flex rounded-full border border-emerald-accent/20 bg-emerald-accent/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/80">
                  Science-Backed Recommendations
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                <h1 className="font-display mt-6 max-w-4xl text-5xl leading-none tracking-tight text-white md:text-7xl">
                  Every product backed by published clinical evidence.
                </h1>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                  No random wellness clutter. These recommendations stay focused on Mediterranean diet foundations,
                  supplements with actual UC data, gut-health support, and lifestyle tools tied to published risk signals.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stat-pill animate-fade-in-up px-5 py-4"
                    style={{ animationDelay: `${300 + index * 90}ms` }}
                  >
                    <p className="font-display text-4xl tracking-tight text-white">{stat.value}</p>
                    <p className="mt-2 text-sm font-semibold text-emerald-100">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="animate-fade-in-up mt-8" style={{ animationDelay: '520ms' }}>
                <MedicalDisclaimer compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-100/70">
              Curated by Evidence Strength
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-white md:text-5xl">
              Filter by the kind of support you actually want to add.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              Each card shows the evidence anchor, the product role, an approximate price band, and an affiliate link
              if you want to compare retail options.
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
