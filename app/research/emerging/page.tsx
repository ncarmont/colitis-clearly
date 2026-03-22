import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'

export const metadata: Metadata = {
  title: 'Emerging UC Therapies | Colitis Clearly',
  description: 'FMT, microbiome engineering, stem-cell approaches, nanomedicine, and next-generation ulcerative colitis therapeutics.',
}

const emergingAreas = [
  {
    title: 'Microbiome engineering',
    detail: 'More precise bacterial consortia and metabolite-targeted strategies aim to move beyond blunt probiotic claims or one-off fecal interventions.',
  },
  {
    title: 'FMT and live biotherapeutics',
    detail: 'Microbiome transfer remains biologically compelling, but consistency, donor effects, durability, and safety still limit routine UC use.',
  },
  {
    title: 'Stem-cell and regenerative strategies',
    detail: 'These are still exploratory in UC and should be treated as research programs, not near-term replacements for proven maintenance therapy.',
  },
  {
    title: 'Gut-targeted drug delivery',
    detail: 'Nanomedicine and local delivery concepts aim to concentrate drug effect where inflammation lives while reducing systemic exposure.',
  },
]

export default function EmergingTherapiesPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#071426] via-[#0e1730] to-[#16262f]">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
            <span>←</span>
            Back to research
          </Link>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Emerging therapies worth watching</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            The next UC wave is trying to deliver more targeted efficacy, less collateral immunosuppression, and better control over who actually benefits.
          </p>
          <div className="mt-8 max-w-3xl">
            <MedicalDisclaimer compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-4 md:grid-cols-2">
          {emergingAreas.map((area) => (
            <div key={area.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
              <h2 className="text-2xl font-bold text-white">{area.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{area.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white">The near-term reality</h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-300">
            The therapies most likely to change care soon are still the ones already moving through refined cytokine targeting and oral advanced-therapy development, especially within the IL-23 and next-generation selective immune-signaling space. The more futuristic strategies are exciting, but most remain research topics rather than practical clinic options.
          </p>
        </div>
      </section>
    </main>
  )
}
