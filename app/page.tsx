import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cleanest Coffee | Mold-Toxin + Heavy-Metal Coffee Rankings',
  description:
    'Cleanest Coffee ranks coffee by public lab receipts: heavy metals, mold toxins, COAs, sourcing transparency, roast freshness, taste, and value.',
}

const proofPoints = [
  { value: 'Heavy metals', label: 'Lead, cadmium, arsenic, and mercury numbers beat “trust us” labels.' },
  { value: 'Mold toxins', label: 'Ochratoxin A and aflatoxin scope matters more than mold-free marketing.' },
  { value: 'COA receipts', label: 'Lab, date, sample, units, and detection limits should be visible.' },
  { value: 'Daily habit', label: 'Coffee is daily. Invisible traces deserve public numbers, not vibes.' },
]

const rankingCriteria = [
  'Public numeric COAs before clean-sounding labels',
  'Heavy-metal + mycotoxin scope shown clearly',
  'Exact bag, lot, or harvest tied to the report',
  'Roast freshness, sourcing, taste, and value still counted',
]

const photoCards = [
  { src: '/images/coffee/coffee-beans-close.jpg', label: 'Beans', note: 'Actual coffee photos, not text-only filler.' },
  { src: '/images/coffee/espresso-pour.jpg', label: 'Brew', note: 'Readable buyer rules, not lab-person jargon.' },
  { src: '/images/coffee/coffee-lab-cupping.jpg', label: 'Receipts', note: 'Rankings built around proof quality.' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf3e8]">
      <section className="relative overflow-hidden border-b border-warm-200/60 px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,132,95,0.22),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(241,181,68,0.22),transparent_28%),linear-gradient(180deg,#fff9f0_0%,#f7e6cf_100%)]" />
        <div className="absolute inset-0 dot-grid-pattern opacity-35" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.03fr,0.97fr] lg:items-center">
          <div>
            <div className="spring-up inline-flex rounded-full border border-coral-400/25 bg-white/70 px-4 py-1.5 text-[0.66rem] font-black uppercase tracking-[0.28em] text-coral-700 shadow-card-warm backdrop-blur">
              Mold-toxin + heavy-metal coffee rankings
            </div>

            <h1 className="spring-up font-display mt-6 max-w-4xl text-5xl leading-[0.9] tracking-tight text-warm-950 sm:text-6xl md:text-7xl">
              Cleanest Coffee ranks the bags with actual receipts.
            </h1>

            <p className="spring-up mt-6 max-w-2xl text-base leading-relaxed text-warm-700 md:text-lg">
              Coffee is a daily habit. Heavy metals and mold toxins are invisible on the bag. So we rank public lab numbers — not wellness poetry, pretty packaging, or “third-party tested” fog.
            </p>

            <div className="spring-up mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-shimmer rounded-full bg-coral-500 px-6 py-3 text-sm font-black text-white shadow-[0_18px_42px_rgba(244,132,95,0.28)] hover:bg-coral-600">
                See best coffees
              </Link>
              <Link href="/rankings" className="rounded-full border border-warm-300 bg-white/75 px-6 py-3 text-sm font-black text-warm-900 shadow-card-warm hover:border-coral-400/50 hover:bg-white">
                How we rank proof
              </Link>
            </div>

            <div className="spring-up mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div key={point.value} className="rounded-[1.4rem] border border-white/80 bg-white/70 p-4 shadow-card-warm backdrop-blur">
                  <p className="font-display text-2xl tracking-tight text-warm-950">{point.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-warm-600">{point.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="spring-up relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-coral-300/35 via-amber-200/35 to-white blur-2xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/75 bg-white/70 p-4 shadow-[0_34px_90px_rgba(77,45,18,0.22)] backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-[0.9fr,1.1fr]">
                <div className="flex flex-col gap-4">
                  <div className="overflow-hidden rounded-[2rem] border border-warm-100 bg-[#f8efe2] p-5 text-center shadow-card-warm">
                    <Image src="/images/brand/cleanest-coffee-logo.jpg" alt="Cleanest Coffee logo" width={900} height={900} className="mx-auto aspect-square w-full rounded-[1.4rem] object-cover" priority />
                  </div>
                  <div className="rounded-[2rem] bg-warm-950 p-5 text-white shadow-card-warm">
                    <p className="text-[0.64rem] font-black uppercase tracking-[0.26em] text-amber-200/80">Buyer rule</p>
                    <p className="font-display mt-2 text-3xl leading-tight">Pretty bag ≠ purity proof.</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {photoCards.map((card) => (
                    <div key={card.src} className="group overflow-hidden rounded-[2rem] border border-white bg-white shadow-card-warm">
                      <div className="relative h-44 overflow-hidden">
                        <Image src={card.src} alt={card.label} width={1200} height={760} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="font-display text-2xl text-white">{card.label}</p>
                          <p className="mt-1 text-xs leading-relaxed text-white/78">{card.note}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-7 px-4 py-14 md:grid-cols-[0.85fr,1.15fr] md:py-20">
        <div className="rounded-[2rem] border border-warm-200 bg-white/82 p-8 shadow-card-warm">
          <p className="text-[0.7rem] font-black uppercase tracking-[0.28em] text-coral-600">What gets ranked</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-warm-950">Clean is not a flavor. It is a standard.</h2>
          <p className="mt-4 leading-relaxed text-warm-700">
            The cleanest coffee is the coffee that survives scrutiny: what was tested, where it came from, how it was processed, whether it tastes good, and whether the price makes sense.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {rankingCriteria.map((item, index) => (
            <div key={item} className="rounded-[1.6rem] border border-warm-200 bg-white p-5 shadow-card-warm">
              <p className="font-display text-3xl text-coral-500">0{index + 1}</p>
              <p className="mt-2 text-sm font-bold leading-relaxed text-warm-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="overflow-hidden rounded-[2.4rem] border border-warm-200 bg-[linear-gradient(135deg,#1a1009,#3a2110)] shadow-[0_30px_90px_rgba(38,20,9,0.22)]">
          <div className="grid gap-0 lg:grid-cols-[1fr,0.9fr]">
            <div className="p-8 md:p-10">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.28em] text-amber-200/80">The diagnosis</p>
              <h2 className="font-display mt-3 max-w-2xl text-4xl tracking-tight text-white md:text-5xl">Most coffee marketing is allergic to evidence.</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-white/72">
                So Cleanest Coffee is becoming a ranking machine: premium visuals, exact receipts, Amazon-ready buyer links, and zero patience for vague “clean” claims.
              </p>
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-relaxed text-white/70">
                Not medical advice. Coffee and caffeine can affect anxiety, reflux, sleep, blood pressure, palpitations, pregnancy, medications, and gut symptoms. See a professional when relevant.
              </p>
            </div>
            <div className="relative min-h-[320px] overflow-hidden">
              <Image src="/images/coffee/beans-roast.jpg" alt="Roasted coffee beans" width={1400} height={1000} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3a2110] via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
