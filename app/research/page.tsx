import Link from 'next/link'
import type { Metadata } from 'next'
import researchArticles from '../research-carousel.json'
import findings from '../meta-analysis-findings.json'

export const metadata: Metadata = {
  title: 'Coffee Purity Research Hub | Cleanest Coffee',
  description: 'Research hub for coffee contaminants, heavy metals, mycotoxins, pesticides, decaf solvents, roasting, brewing, and buyer transparency.',
}

const topicCards = [
  { href: '/research/overview', title: 'Overview', description: 'The clean-coffee framework: test results, origin, freshness, process, taste, and value.' },
  { href: '/research/pathophysiology', title: 'Contaminants', description: 'Heavy metals, mycotoxins, pesticides, and where the real risk signals come from.' },
  { href: '/research/clinical-trials', title: 'Lab Testing', description: 'How COAs, detection limits, batch IDs, and third-party labs should be read.' },
  { href: '/research/biomarkers', title: 'Buyer Markers', description: 'Roast date, origin, decaf process, packaging integrity, and price per cup.' },
  { href: '/research/emerging', title: 'Brand Watch', description: 'The brands, testing claims, and transparency patterns worth tracking next.' },
]

export default function ResearchPage() {
  const sorted = [...researchArticles].sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime())
  return (
    <main className="min-h-screen bg-[#120c07] text-white">
      <section className="relative overflow-hidden border-b border-white/8 bg-gradient-to-br from-[#160d07] via-[#24150c] to-[#3a2110]"><div className="relative mx-auto max-w-6xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16"><Link href="/" className="inline-flex items-center gap-2 text-sm text-amber-300/70 transition hover:text-amber-200"><span>←</span>Back to home</Link><div className="mt-6 max-w-3xl"><div className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200/80">Research Hub</div><h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Coffee purity research without the toxin-theater fog machine.</h1><p className="mt-4 text-lg leading-relaxed text-slate-300">Track what matters: heavy metals, mycotoxins, pesticide standards, decaf solvents, roast freshness, sourcing transparency, and which claims deserve the side-eye.</p></div></div></section>
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{findings.map((finding)=><div key={`${finding.stat}-${finding.source}`} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 text-center"><div className="text-3xl font-black text-white">{finding.stat}</div><div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{finding.source}</div><p className="mt-3 text-sm leading-relaxed text-slate-300">{finding.label}</p></div>)}</div></section>
      <section className="mx-auto max-w-6xl px-4 pb-10 md:px-6 md:pb-14"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{topicCards.map((topic)=><Link key={topic.href} href={topic.href} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition hover:border-amber-300/30 hover:bg-white/[0.05]"><h2 className="text-xl font-bold text-white">{topic.title}</h2><p className="mt-3 text-sm leading-relaxed text-slate-300">{topic.description}</p></Link>)}</div></section>
      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6"><h2 className="text-3xl font-black tracking-tight">Latest clean-coffee findings</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{sorted.slice(0,8).map((item)=><Link key={item.slug} href={item.href} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition hover:border-amber-300/30"><p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">{item.category}</p><h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{item.finding}</p></Link>)}</div></section>
    </main>
  )
}
