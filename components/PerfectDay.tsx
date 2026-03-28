import Link from 'next/link'

const protocol = [
  {
    time: 'Morning',
    steps: [
      {
        action: 'Vitamin D3 + K2',
        detail: '2,000–4,000 IU with water — most UC patients are deficient',
        stat: '2× remission odds',
        href: '/rankings',
      },
      {
        action: 'VSL#3 probiotic',
        detail: '1 sachet on empty stomach, 30 min before eating',
        stat: '43% vs 16% placebo',
        href: '/shop',
      },
      {
        action: 'Mediterranean breakfast',
        detail: 'Greek yogurt + berries + 1 tbsp EVOO — no processed grains',
        stat: '82% better outcomes',
        href: '/blog',
      },
    ],
  },
  {
    time: 'With meals',
    steps: [
      {
        action: 'High-polyphenol EVOO',
        detail: '30–40 ml/day total drizzled on food — SP360 or Pamako grade',
        stat: '38% less calprotectin',
        href: 'https://www.best-olive-oil-ranked.com',
        external: true,
      },
      {
        action: 'Curcumin supplement',
        detail: 'Theracumin or Meriva form alongside mesalamine — not plain turmeric powder',
        stat: '2.3× more remissions',
        href: '/blog/curcumin-qingdai-uc-remission',
      },
      {
        action: 'No red or processed meat',
        detail: 'Replace with salmon, sardines, lentils — heme iron damages colonocytes',
        stat: '~35% lower relapse',
        href: '/rankings',
      },
    ],
  },
  {
    time: 'Afternoon',
    steps: [
      {
        action: '30 min aerobic movement',
        detail: 'Brisk walk, cycling, or yoga at 60–70% max HR — skip during active flares',
        stat: '~30% disease activity ↓',
        href: '/rankings',
      },
      {
        action: '10 min MBSR meditation',
        detail: 'Body scan or box breathing — activates vagus nerve anti-inflammatory pathway',
        stat: '~25% fewer flares',
        href: '/rankings',
      },
    ],
  },
  {
    time: 'Evening',
    steps: [
      {
        action: 'Close eating by 8 pm',
        detail: '16:8 intermittent fast — gut microbiome rest, autophagy, CRP reduction',
        stat: '~25% CRP reduction',
        href: '/rankings',
      },
      {
        action: 'Psyllium husk in water',
        detail: '10 g before bed — butyrate production restores mucosal barrier overnight',
        stat: 'Equiv. to mesalamine maintenance',
        href: '/rankings',
      },
    ],
  },
]

const impactStats = [
  { label: 'Mediterranean diet', value: '82%', sub: 'better clinical outcomes', href: '/blog' },
  { label: 'Curcumin add-on', value: '2.3×', sub: 'more remissions vs placebo', href: '/blog/curcumin-qingdai-uc-remission' },
  { label: 'VSL#3 probiotic', value: '43%', sub: 'remission vs 16% control', href: '/shop' },
  { label: 'Exercise + MBSR', value: '~45%', sub: 'combined flare risk ↓', href: '/rankings' },
]

export default function PerfectDay() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-10">
      {/* Header */}
      <div className="mb-5">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-coral-500">
          Lifestyle Stack · Evidence-Only
        </p>
        <h2 className="font-display mt-1 text-2xl tracking-tight text-warm-900 md:text-3xl">
          The Perfect UC Day
        </h2>
        <p className="mt-1 max-w-xl text-[0.78rem] text-warm-500">
          Every step below has RCT evidence. Combined, they address five independent inflammatory pathways — safe to stack on top of any medical treatment.
        </p>
      </div>

      {/* Timeline grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {protocol.map((block) => (
          <div key={block.time} className="rounded-2xl border border-warm-200/70 bg-white/80 p-3.5 shadow-card-warm">
            <p className="mb-2.5 text-[0.58rem] font-black uppercase tracking-[0.22em] text-coral-400">
              {block.time}
            </p>
            <ul className="space-y-2.5">
              {block.steps.map((step) => (
                <li key={step.action} className="flex flex-col gap-0.5">
                  <div className="flex items-start justify-between gap-1.5">
                    <p className="text-[0.75rem] font-bold leading-snug text-warm-900">{step.action}</p>
                    {step.external ? (
                      <a
                        href={step.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 rounded-full bg-coral-50 px-1.5 py-0.5 text-[0.48rem] font-bold text-coral-500 hover:bg-coral-100"
                      >
                        {step.stat}
                      </a>
                    ) : (
                      <Link
                        href={step.href}
                        className="shrink-0 rounded-full bg-coral-50 px-1.5 py-0.5 text-[0.48rem] font-bold text-coral-500 hover:bg-coral-100"
                      >
                        {step.stat}
                      </Link>
                    )}
                  </div>
                  <p className="text-[0.6rem] leading-snug text-warm-400">{step.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Combined impact strip */}
      <div className="mt-4 rounded-2xl border border-coral-200/60 bg-coral-50/60 p-4">
        <p className="mb-3 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-coral-500">
          Stack impact — independent pathways, partially additive
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {impactStats.map((s) => (
            <Link key={s.label} href={s.href} className="group">
              <p className="font-display text-[1.5rem] font-black leading-none tracking-tight text-warm-900 group-hover:text-coral-600">
                {s.value}
              </p>
              <p className="mt-0.5 text-[0.58rem] font-semibold text-coral-600">{s.label}</p>
              <p className="text-[0.55rem] text-warm-500">{s.sub}</p>
            </Link>
          ))}
        </div>
        <p className="mt-3 text-[0.58rem] italic text-warm-400">
          Stacking these does not replace biologics or 5-ASA — it reduces the inflammatory load they have to fight.
          Always discuss supplements with your gastroenterologist.
        </p>
      </div>
    </section>
  )
}
