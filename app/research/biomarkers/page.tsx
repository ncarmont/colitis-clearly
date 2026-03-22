import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'

export const metadata: Metadata = {
  title: 'UC Biomarkers | Colitis Clearly',
  description: 'How fecal calprotectin, CRP, ESR, and lactoferrin help monitor ulcerative colitis activity.',
}

const markers = [
  {
    title: 'Fecal calprotectin',
    detail: 'Best noninvasive stool biomarker for colonic inflammation. Trends are often more useful than one isolated value.',
  },
  {
    title: 'CRP',
    detail: 'Helpful when elevated, but less sensitive than calprotectin for some UC patients because not every flare produces a big systemic signal.',
  },
  {
    title: 'ESR',
    detail: 'A broader inflammatory marker. Useful context, but slower and less specific than stool-based monitoring.',
  },
  {
    title: 'Lactoferrin',
    detail: 'Another stool inflammatory marker that can support the interpretation of active intestinal inflammation.',
  },
]

export default function BiomarkersPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#071426] via-[#0e1730] to-[#102b2e]">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
            <span>←</span>
            Back to research
          </Link>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Biomarkers that help decode symptoms</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            Biomarkers matter because UC symptoms can improve before inflammation does, or worsen without major inflammatory change. Monitoring bridges that gap.
          </p>
          <div className="mt-8 max-w-3xl">
            <MedicalDisclaimer compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-4 md:grid-cols-2">
          {markers.map((marker) => (
            <div key={marker.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
              <h2 className="text-2xl font-bold text-white">{marker.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{marker.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white">Interpreting results carefully</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              Many clinicians treat a fecal calprotectin under about 50 mcg/g as reassuring, values above roughly 150 to 250 as more concerning for active intestinal inflammation, and rising trends as a reason to investigate even when a patient feels only mildly worse. The exact threshold still depends on the lab, recent infections, medications, and the clinical question being asked.
            </p>
            <p>
              CRP and ESR add context, especially in more systemic illness, but they should not overrule a convincing stool biomarker or endoscopic picture. The best biomarker interpretation is usually layered: symptoms, stool markers, blood work, and endoscopy when needed.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
