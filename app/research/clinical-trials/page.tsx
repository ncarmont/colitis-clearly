import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coffee Lab Testing Guide | Cleanest Coffee',
  description: 'How to read coffee certificates of analysis, contaminant panels, detection limits, batch IDs, and third-party lab claims.',
}

const tests = [
  'Heavy metals: lead, cadmium, arsenic, and mercury should be listed with numeric results and limits.',
  'Mycotoxins: ochratoxin A and aflatoxins are the core mold-related claims to verify.',
  'Pesticides: organic certification helps, but residue testing is stronger when a brand claims ultra-clean status.',
  'Microbial quality: useful for storage and handling claims, especially when brands talk loudly about mold.',
  'Batch identity: the report should connect to the coffee being sold now, not a heroic ancient sample from a different lot.',
]

export default function LabTestingPage() {
  return (
    <main className="min-h-screen bg-[#120c07] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#160d07] via-[#24150c] to-[#3a2110]"><div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16"><Link href="/research" className="inline-flex items-center gap-2 text-sm text-amber-300/70 transition hover:text-amber-200"><span>←</span>Back to research</Link><h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">How to read coffee lab testing without getting played</h1><p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">“Third-party tested” is not enough. You want the boring details: lab, batch, date, analytes, methods, limits, and results.</p></div></section>
      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14"><div className="grid gap-4">{tests.map((test)=><div key={test} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 text-sm leading-relaxed text-slate-300">{test}</div>)}</div></section>
    </main>
  )
}
