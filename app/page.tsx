import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Cleanest Coffee | Lab-Tested Coffee Purity Rankings',
  description:
    'Cleanest Coffee ranks exact coffee products by public lab receipts: heavy metals, mold toxins, COAs, sourcing transparency, roast freshness, taste, and value.',
}

const exactCoaProducts = PRODUCTS.filter((product) => product.proofTier === 'Exact public COA')
const rankedCoffeeProducts = exactCoaProducts.slice(0, 4)
const topCoffee = rankedCoffeeProducts[0]

const heroStats = [
  { value: `${PRODUCTS.length}`, label: 'PRODUCTS AUDITED' },
  { value: `${exactCoaProducts.length}`, label: 'LAB-VERIFIED' },
  { value: topCoffee?.purityScore ? `${topCoffee.purityScore}` : '94', label: 'MAX SCORE' },
]

const evidenceSnapshots = [
  { value: 'Pb <5', label: 'ppb lead on the current #1 public receipt' },
  { value: 'OTA <1', label: 'ppb ochratoxin A on Natural Force COA' },
  { value: 'Cd 5.58', label: 'ppb cadmium disclosed, not hidden' },
  { value: '<10', label: 'CFU/g yeast + mould on roasted beans' },
  { value: '4', label: 'exact public COA products currently ranked' },
  { value: '0', label: 'patience for “clean” claims without numbers' },
]

const confidenceRules = [
  { title: 'Exact product first', detail: 'The hero and rankings lead with actual coffee products, not generic clean-coffee theory.' },
  { title: 'Lab score first', detail: 'Public numeric COAs outrank certifications and generic “third-party tested” claims.' },
  { title: 'Lot + scope matter', detail: 'Heavy metals plus OTA/aflatoxins, tied to a visible sample or lot, beat a vague “mold-free” badge.' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8efe2] text-[#21150d]">
      <section className="relative overflow-hidden border-b border-[#e7d2b7] bg-[radial-gradient(circle_at_16%_8%,rgba(244,132,95,0.20),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(241,181,68,0.20),transparent_30%),linear-gradient(180deg,#fff8ec_0%,#f5e2c7_100%)] px-4 pb-8 pt-8 md:pb-10 md:pt-10">
        <div className="absolute inset-0 dot-grid-pattern opacity-28" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-black uppercase tracking-[0.22em] text-[#7a4f2a]">
            <span>best-coffee-ranked.com</span>
            <span>Lab-verified coffee purity rankings</span>
          </div>

          <div className="mt-10 max-w-4xl">
            <div className="inline-flex rounded-full border border-[#d58a54]/30 bg-white/70 px-4 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#a0522d] shadow-sm backdrop-blur">
              Updated 2026 · Exact product rankings
            </div>

            <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.88] tracking-tight text-[#24150b] sm:text-6xl md:text-7xl">
              Best Lab-Tested Coffees Ranked Scientifically
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6b4a31]">
              Exact coffee products ranked by public COA receipts: lead, cadmium, arsenic, mercury, ochratoxin A, aflatoxins, lot transparency, roast quality, taste, and value.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/shop" className="rounded-full bg-[#cf6f3d] px-6 py-3 text-sm font-black text-white shadow-[0_18px_40px_rgba(207,111,61,0.28)] transition hover:bg-[#b95e31]">
                See the top-ranked coffees
              </Link>
              <Link href="/rankings" className="rounded-full border border-[#d8b98f] bg-white/80 px-6 py-3 text-sm font-black text-[#3a2415] shadow-sm transition hover:border-[#c77947] hover:bg-white">
                How rankings work
              </Link>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.35rem] border border-white/80 bg-white/72 p-4 text-center shadow-[0_18px_40px_rgba(86,50,20,0.08)] backdrop-blur">
                  <p className="font-display text-4xl tracking-tight text-[#25160b]">{stat.value}</p>
                  <p className="mt-1 text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#8a5a34]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.3em] text-[#a0522d]">Top lab-tested coffee products</p>
            <h2 className="font-display mt-3 text-4xl tracking-tight text-[#24150b] md:text-5xl">The clean-coffee leaderboard starts here.</h2>
          </div>
          <Link href="/shop" className="rounded-full bg-[#21150d] px-5 py-3 text-sm font-black text-white hover:bg-[#3a2415]">Shop all rankings →</Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {rankedCoffeeProducts.map((product, index) => (
            <Link href="/shop" key={product.id} className={`group overflow-hidden rounded-[2rem] border bg-[#101b2e] shadow-[0_22px_54px_rgba(86,50,20,0.14)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(86,50,20,0.22)] ${index === 0 ? 'border-[#f3c274]' : 'border-[#e7d2b7]'}`}>
              <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.92),transparent_60%),linear-gradient(135deg,#fbf3e8,#caa36b)] p-7">
                <Image src={product.imageUrl} alt={product.name} width={1000} height={820} className="max-h-full w-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.30)] transition duration-700 group-hover:scale-[1.04]" />
                <span className={`absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl font-black shadow-[0_12px_28px_rgba(0,0,0,0.22)] ${index === 0 ? 'border-amber-200 bg-[#f3c274] text-[#24150b]' : 'border-white/60 bg-white/82 text-[#4b5563]'}`}>{index + 1}</span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101b2e] via-[#101b2e]/78 to-transparent px-5 pb-5 pt-24">
                  <p className="font-display text-5xl leading-none tracking-tight text-[#f3c274]">{product.purityScore}<span className="ml-1 text-sm font-bold text-white/80">/100</span></p>
                  <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/70">#{index + 1} lab-verified · Exact COA</p>
                </div>
              </div>
              <div className="p-5 text-white">
                <h3 className="font-display text-3xl leading-tight">{product.name}</h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-white/60">{product.brand}</p>
                <div className="mt-4 rounded-[1.2rem] border border-white/10 bg-white/[0.055] p-4">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#f3c274]/80">Heavy metals</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/84">{product.heavyMetalSummary}</p>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#1f7a4d] px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.16em] text-white">Lab verified</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.16em] text-white/70">View product →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e7d2b7] bg-[#21150d] py-8 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.3em] text-[#f3c274]/75">Proven coffee-purity receipts</p>
              <h2 className="font-display mt-2 text-3xl tracking-tight md:text-5xl">Exact products. Plain-English lab numbers.</h2>
            </div>
            <Link href="/shop" className="text-sm font-black text-[#f3c274] hover:text-white">Full product table →</Link>
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

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 lg:grid-cols-[0.72fr,1.28fr] lg:items-start">
        <div className="rounded-[2rem] border border-[#e7d2b7] bg-white p-7 shadow-[0_22px_54px_rgba(86,50,20,0.10)]">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.3em] text-[#a0522d]">How to choose with confidence</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-[#24150b]">Start with the highest proof score, then check the current bag.</h2>
          <p className="mt-4 leading-relaxed text-[#6b4a31]">The trick is not finding a clean-sounding brand. The trick is finding the exact product whose numbers are public enough to compare.</p>
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
    </main>
  )
}
