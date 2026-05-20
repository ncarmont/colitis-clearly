import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coffee Buyer Markers | Cleanest Coffee',
  description: 'The buyer markers that separate clean coffee from vague marketing: COAs, roast dates, origins, decaf process, packaging, and price per cup.',
}

const markers = [
  { title: 'COA quality', detail: 'A certificate should show lab, date, batch, analytes, detection limits, and numeric results. If the brand hides the report, downgrade the claim.' },
  { title: 'Roast date', detail: 'A roast date tells you freshness. A best-by date mostly tells you the brand owns a printer.' },
  { title: 'Origin transparency', detail: 'Country is the floor. Region, farm/co-op, process, altitude, and harvest context are stronger.' },
  { title: 'Decaf process', detail: 'Swiss Water and CO₂ are clean default signals. Mystery decaf is a transparency failure.' },
]

export default function BuyerMarkersPage() {
  return (
    <main className="min-h-screen bg-[#120c07] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#160d07] via-[#24150c] to-[#3a2110]"><div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16"><Link href="/research" className="inline-flex items-center gap-2 text-sm text-amber-300/70 transition hover:text-amber-200"><span>←</span>Back to research</Link><h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Buyer markers that actually matter</h1><p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">Clean coffee buying is a yes/no checklist. If the brand cannot answer basic questions, buy from someone less allergic to transparency.</p></div></section>
      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14"><div className="grid gap-4 md:grid-cols-2">{markers.map((marker)=><div key={marker.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"><h2 className="text-2xl font-bold text-white">{marker.title}</h2><p className="mt-3 text-sm leading-relaxed text-slate-300">{marker.detail}</p></div>)}</div></section>
    </main>
  )
}
