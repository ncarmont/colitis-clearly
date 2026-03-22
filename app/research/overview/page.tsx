import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'

export const metadata: Metadata = {
  title: 'UC Research Overview | Colitis Clearly',
  description: 'Current state of ulcerative colitis research, including pipeline drugs, treatment sequencing, and where biomarkers shape next-step decisions.',
}

const pipelineCards = [
  {
    title: 'IL-23 expansion',
    detail: 'Mirikizumab and risankizumab show how UC development is moving toward more selective cytokine targeting after anti-TNF and anti-IL-12/23 experience.',
  },
  {
    title: 'Oral advanced therapies',
    detail: 'JAK inhibitors and S1P modulators give faster oral options, but they force cleaner conversations about systemic safety and monitoring.',
  },
  {
    title: 'Tighter monitoring',
    detail: 'Calprotectin, CRP trends, drug levels, and more structured endoscopic goals are pushing care beyond symptom-only management.',
  },
]

export default function ResearchOverviewPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#071426] via-[#0b1830] to-[#0c2331]">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
            <span>←</span>
            Back to research
          </Link>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Current state of UC research</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            Modern UC research is less about whether inflammation exists and more about how quickly it can be suppressed, how safely remission can be maintained, and how precisely clinicians can monitor disease before symptoms spiral.
          </p>
          <div className="mt-8 max-w-3xl">
            <MedicalDisclaimer compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {pipelineCards.map((card) => (
            <div key={card.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
              <h2 className="text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{card.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white">Where the field is moving</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              The treatment pipeline is increasingly focused on mechanism selection rather than one-size-fits-all escalation. That means asking whether a patient needs the speed of a JAK inhibitor, the gut selectivity of vedolizumab, the cytokine profile of IL-23 blockade, or surgery because the disease biology is no longer yielding to medical therapy.
            </p>
            <p>
              At the same time, research is pushing toward tighter disease control targets. Biomarkers such as fecal calprotectin make it harder to mistake temporary symptom improvement for genuine mucosal recovery. That shift matters because long-term outcomes follow inflammation burden more than short-term comfort.
            </p>
            <p>
              Emerging work in microbiome engineering, local drug delivery, and precision monitoring is promising, but most of it is not yet ready to replace the proven therapies that anchor current UC care.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
