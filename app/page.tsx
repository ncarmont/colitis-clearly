import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cleanest Coffee | Coffee Without the Chemical Nonsense',
  description:
    'A no-BS clean coffee guide ranking coffee by contaminant testing, sourcing transparency, roast quality, taste, and value.',
}

const proofPoints = [
  { value: 'Tested', label: 'Look for third-party testing, not marketing fog machines.' },
  { value: 'Fresh', label: 'Stale beans are dead beans. Roast date beats “best by” theater.' },
  { value: 'Transparent', label: 'Origin, process, and lab standards should not require detective work.' },
  { value: 'No solvent BS', label: 'Decaf should disclose Swiss Water, CO₂, or the actual process.' },
]

const rankingCriteria = [
  'Mycotoxin and heavy-metal testing',
  'Pesticide and organic standards',
  'Roast freshness and packaging integrity',
  'Bean origin and supply-chain transparency',
  'Taste, brew performance, and price per cup',
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden border-b border-warm-200/50 px-4 py-16 text-center md:py-24">
        <div className="absolute inset-0 dot-grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-5xl">
          <div className="spring-up inline-flex rounded-full border border-coral-400/25 bg-coral-50 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-coral-600">
            Clean Coffee, No Cult Nonsense
          </div>

          <h1 className="spring-up font-display mt-5 text-5xl leading-[0.95] tracking-tight text-warm-950 sm:text-6xl md:text-7xl">
            Cleanest{' '}
            <span className="bg-gradient-to-r from-coral-500 via-amber-500 to-warm-800 bg-clip-text text-transparent">
              Coffee
            </span>
          </h1>

          <p className="spring-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-warm-600 md:text-lg">
            We rank coffee like adults: contaminant testing, transparent sourcing, roast freshness, taste, and value.
            Not vibes. Not influencer dust. Not “mold-free” claims screamed into a ring light.
          </p>

          <div className="spring-up mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/rankings" className="btn-shimmer rounded-full bg-coral-400 px-6 py-3 text-sm font-black text-white hover:bg-coral-500">
              See the rankings
            </Link>
            <Link href="/blog" className="rounded-full border border-warm-300 bg-white/80 px-6 py-3 text-sm font-black text-warm-800 hover:border-coral-400/40 hover:bg-white">
              Read the no-BS guide
            </Link>
          </div>

          <div className="spring-up mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {['beans-roast.jpg', 'espresso-pour.jpg', 'coffee-cup.jpg'].map((photo, index) => (
              <div key={photo} className={`overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-card-warm ${index === 1 ? 'sm:-mt-4' : ''}`}>
                <Image
                  src={`/images/coffee/${photo}`}
                  alt="Actual coffee photography for Cleanest Coffee"
                  width={1200}
                  height={760}
                  className="h-52 w-full object-cover"
                  priority={index === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-warm-200/50 bg-white/65 py-4">
        <div className="mx-auto grid max-w-6xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.value} className="rounded-2xl border border-warm-200 bg-white p-5 shadow-card-warm">
              <p className="font-display text-2xl font-black text-warm-950">{point.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-warm-600">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1fr,0.9fr] md:py-20">
        <div className="rounded-[2rem] border border-warm-200 bg-white/80 p-8 shadow-card-warm">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-coral-500">What gets ranked</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-warm-950">Clean is not a flavor. It is a standard.</h2>
          <p className="mt-4 leading-relaxed text-warm-600">
            The cleanest coffee is the stuff that survives scrutiny: what was tested, where it came from, how it was processed,
            whether it tastes good, and whether the price makes sense. If a brand hides behind wellness poetry, it gets the side-eye.
          </p>
          <div className="mt-7 grid gap-3">
            {rankingCriteria.map((item) => (
              <div key={item} className="rounded-2xl border border-warm-200 bg-warm-50 px-4 py-3 text-sm font-semibold text-warm-800">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-coral-400/20 bg-gradient-to-br from-coral-50 to-amber-50 p-8 shadow-card-warm">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-coral-600">The diagnosis</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-warm-950">Most coffee marketing is allergic to evidence.</h2>
          <p className="mt-4 leading-relaxed text-warm-700">
            So we are rebuilding this into a coffee ranking machine: brutally clear, evidence-aware, affiliate-capable, and allergic to nonsense.
          </p>
          <p className="mt-5 rounded-2xl bg-white/75 p-4 text-sm leading-relaxed text-warm-700">
            Medical footnote, because apparently lawyers also drink coffee: caffeine can worsen anxiety, reflux, sleep, palpitations,
            blood pressure, and some gut symptoms. See a professional if that is you.
          </p>
        </div>
      </section>
    </main>
  )
}
