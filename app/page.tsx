import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Cleanest Coffee | Lab-Tested Coffee Purity Rankings',
  description:
    'Cleanest Coffee ranks coffee by public lab receipts: heavy metals, mold toxins, COAs, sourcing transparency, roast freshness, taste, and value.',
}

const exactCoaProducts = PRODUCTS.filter((product) => product.proofTier === 'Exact public COA')
const topCoffee = exactCoaProducts[0]

const heroStats = [
  { value: `${PRODUCTS.length}`, label: 'PRODUCTS AUDITED' },
  { value: `${exactCoaProducts.length}`, label: 'EXACT PUBLIC COAS' },
  { value: topCoffee?.purityScore ? `${topCoffee.purityScore}` : '94', label: 'TOP PURITY SCORE' },
]

const evidenceSnapshots = [
  { value: 'Pb <5', label: 'ppb lead on the current #1 roasted/green receipt' },
  { value: 'OTA <1', label: 'ppb ochratoxin A on Natural Force public COA' },
  { value: 'Cd 5.58', label: 'ppb cadmium disclosed instead of hidden behind vibes' },
  { value: '<10', label: 'CFU/g yeast + mould on roasted beans' },
  { value: 'COA', label: 'lab, date, report ID, sample, units, detection limits' },
  { value: '0', label: 'patience for “clean” claims with no public numbers' },
]

const confidenceRules = [
  { title: 'Lab score first', detail: 'Exact public numeric COAs outrank certifications and generic “third-party tested” claims.' },
  { title: 'Lot matters', detail: 'A lab report only helps if the bag, harvest, sample, or batch is clear enough to verify.' },
  { title: 'Scope matters', detail: 'Heavy metals plus OTA/aflatoxins beat a vague “mold-free” badge every time.' },
]

const featuredPhotos = [
  '/images/coffee/coffee-beans-close.jpg',
  '/images/coffee/espresso-pour.jpg',
  '/images/coffee/coffee-lab-cupping.jpg',
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8efe2] text-[#21150d]">
      <section className="relative overflow-hidden border-b border-[#e7d2b7] bg-[radial-gradient(circle_at_16%_8%,rgba(244,132,95,0.24),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(241,181,68,0.22),transparent_30%),linear-gradient(180deg,#fff8ec_0%,#f5e2c7_100%)] px-4 pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="absolute inset-0 dot-grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-black uppercase tracking-[0.22em] text-[#7a4f2a]">
            <span>best-coffee-ranked.com</span>
            <span>Lab-verified coffee purity rankings</span>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-[#d58a54]/30 bg-white/70 px-4 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#a0522d] shadow-sm backdrop-blur">
                Updated 2026 · Mold-toxin + heavy-metal rankings
              </div>

              <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.88] tracking-tight text-[#24150b] sm:text-6xl md:text-7xl">
                Best Lab-Tested Coffees Ranked Scientifically
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6b4a31]">
                Public COA PDFs first. Certification second. “Tested” with no numbers goes to the watchlist. We rank coffee by heavy metals, mold toxins, lot transparency, roast quality, taste, and value.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/shop" className="rounded-full bg-[#cf6f3d] px-6 py-3 text-sm font-black text-white shadow-[0_18px_40px_rgba(207,111,61,0.28)] transition hover:bg-[#b95e31]">
                  See the top-ranked coffees
                </Link>
                <Link href="/rankings" className="rounded-full border border-[#d8b98f] bg-white/80 px-6 py-3 text-sm font-black text-[#3a2415] shadow-sm transition hover:border-[#c77947] hover:bg-white">
                  How rankings work
                </Link>
              </div>

              <div className="mt-9 grid max-w-2xl grid-cols-3 gap-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.35rem] border border-white/80 bg-white/72 p-4 text-center shadow-[0_18px_40px_rgba(86,50,20,0.08)] backdrop-blur">
                    <p className="font-display text-4xl tracking-tight text-[#25160b]">{stat.value}</p>
                    <p className="mt-1 text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#8a5a34]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.8rem] bg-gradient-to-br from-[#d87945]/25 via-[#efc980]/25 to-white blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.6rem] border border-white/80 bg-[#fffaf1]/86 p-5 shadow-[0_34px_90px_rgba(67,38,18,0.20)] backdrop-blur-xl">
                <div className="grid gap-5 md:grid-cols-[0.88fr,1.12fr]">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-[2rem] border border-[#ecd6b7] bg-white p-3 shadow-sm">
                      <Image src="/images/brand/cleanest-coffee-logo.jpg" alt="Cleanest Coffee logo" width={900} height={900} className="aspect-square rounded-[1.5rem] object-cover" priority />
                    </div>
                    <div className="rounded-[1.8rem] bg-[#21150d] p-5 text-white shadow-[0_20px_44px_rgba(33,21,13,0.22)]">
                      <p className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-[#f3c274]">Recommended shortcut</p>
                      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">#1 overall</p>
                      <h2 className="font-display mt-1 text-3xl leading-tight">{topCoffee?.brand ?? 'Natural Force'}</h2>
                      <p className="mt-1 text-white/78">{topCoffee?.name ?? 'Clean Coffee Medium Roast'}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-[2rem] border border-[#ecd6b7] bg-white p-5 shadow-sm">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#1f7a4d] px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.18em] text-white">Exact public COA</span>
                        <span className="rounded-full bg-[#f3c274] px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#2b1a0d]">Amazon-ready</span>
                      </div>
                      <p className="font-display mt-5 text-5xl tracking-tight text-[#24150b]">{topCoffee?.purityScore ?? 94}/100</p>
                      <p className="mt-3 text-sm leading-relaxed text-[#6b4a31]">{topCoffee?.bestFor ?? 'Best balance of public COA proof, low mycotoxins/mould, and buyer usefulness.'}</p>
                    </div>

                    <div className="mt-5 grid gap-2">
                      <div className="rounded-2xl bg-[#f8efe2] p-3">
                        <p className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-[#8a5a34]">Heavy metals</p>
                        <p className="font-bold text-[#24150b]">{topCoffee?.heavyMetalSummary ?? 'Pb <5 ppb · Cd 5.58 ppb'}</p>
                      </div>
                      <div className="rounded-2xl bg-[#f8efe2] p-3">
                        <p className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-[#8a5a34]">Mold toxins</p>
                        <p className="font-bold text-[#24150b]">{topCoffee?.mycotoxinSummary ?? 'OTA <1 ppb · aflatoxins <0.500 ppb'}</p>
                      </div>
                    </div>

                    <Link href="/shop" className="mt-5 inline-flex items-center justify-center rounded-full bg-[#cf6f3d] px-5 py-3 text-sm font-black text-white transition hover:bg-[#b95e31]">
                      View best price →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e7d2b7] bg-[#21150d] py-8 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.3em] text-[#f3c274]/75">Proof snapshots</p>
              <h2 className="font-display mt-2 text-3xl tracking-tight md:text-5xl">Plain-English lab receipts.</h2>
            </div>
            <Link href="/research" className="text-sm font-black text-[#f3c274] hover:text-white">All research →</Link>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {evidenceSnapshots.map((item) => (
              <div key={item.value} className="rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.16)]">
                <p className="font-display text-4xl tracking-tight text-[#f3c274]">{item.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-[0.72fr,1.28fr] lg:items-start">
        <div className="rounded-[2rem] border border-[#e7d2b7] bg-white p-7 shadow-[0_22px_54px_rgba(86,50,20,0.10)]">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.3em] text-[#a0522d]">How to choose with confidence</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-[#24150b]">Start with the highest proof score, then check the current bag.</h2>
          <p className="mt-4 leading-relaxed text-[#6b4a31]">The trick is not finding a clean-sounding brand. The trick is finding the brand whose numbers are public enough to compare.</p>
          <Link href="/shop" className="mt-6 inline-flex rounded-full bg-[#21150d] px-5 py-3 text-sm font-black text-white hover:bg-[#3a2415]">See ranking rules →</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {confidenceRules.map((rule, index) => (
            <div key={rule.title} className="rounded-[2rem] border border-[#e7d2b7] bg-white/84 p-5 shadow-[0_22px_54px_rgba(86,50,20,0.08)]">
              <p className="font-display text-5xl text-[#cf6f3d]">0{index + 1}</p>
              <h3 className="font-display mt-3 text-2xl tracking-tight text-[#24150b]">{rule.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b4a31]">{rule.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredPhotos.map((src, index) => (
            <div key={src} className={`overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_24px_60px_rgba(86,50,20,0.12)] ${index === 1 ? 'md:-mt-8' : ''}`}>
              <Image src={src} alt="Coffee purity ranking imagery" width={1400} height={950} className="h-72 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
