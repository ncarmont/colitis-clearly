import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clean Coffee Brand Watch | Cleanest Coffee',
  description: 'Emerging clean coffee patterns worth watching: better COAs, heavy-metal panels, decaf transparency, freshness logistics, and brand audits.',
}

const areas = [
  { title: 'Better COA publishing', detail: 'The next serious brands will publish current batch reports instead of hiding behind “third-party tested.”' },
  { title: 'Heavy-metal accountability', detail: 'Lead, cadmium, arsenic, and mercury panels should become normal for brands claiming ultra-clean status.' },
  { title: 'Decaf transparency', detail: 'Swiss Water, CO₂, ethyl acetate, or methylene chloride — say the method clearly or accept the downgrade.' },
  { title: 'Freshness logistics', detail: 'Roasted-to-order, nitrogen flushing, valve bags, and clear roast dates separate serious coffee from stale shelf filler.' },
]

export default function BrandWatchPage() {
  return (
    <main className="min-h-screen bg-[#120c07] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#160d07] via-[#24150c] to-[#3a2110]"><div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16"><Link href="/research" className="inline-flex items-center gap-2 text-sm text-amber-300/70 transition hover:text-amber-200"><span>←</span>Back to research</Link><h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Clean coffee patterns worth watching</h1><p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">The market is moving toward proof. Good. The brands that publish real reports will make the vague “toxin free” crowd look unserious.</p></div></section>
      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14"><div className="grid gap-4 md:grid-cols-2">{areas.map((area)=><div key={area.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"><h2 className="text-2xl font-bold text-white">{area.title}</h2><p className="mt-3 text-sm leading-relaxed text-slate-300">{area.detail}</p></div>)}</div></section>
    </main>
  )
}
