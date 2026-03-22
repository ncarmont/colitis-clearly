import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'

export const metadata: Metadata = {
  title: 'UC Pathophysiology | Colitis Clearly',
  description: 'How ulcerative colitis works: mucosal immune dysregulation, epithelial barrier dysfunction, microbiome changes, and genetic susceptibility.',
}

const pillars = [
  {
    title: 'Mucosal immune dysregulation',
    detail: 'UC is driven by an overactive mucosal immune response that continues to recruit inflammatory cells into the colonic lining even when the initial trigger is no longer obvious.',
  },
  {
    title: 'Epithelial barrier dysfunction',
    detail: 'The colon is not just inflamed. The barrier that should separate luminal contents from the immune system is less resilient, allowing antigens and microbes to keep the loop active.',
  },
  {
    title: 'Microbiome alterations',
    detail: 'UC is associated with reduced microbial diversity, altered fermentation, and shifts in taxa that likely change metabolite signaling and barrier integrity.',
  },
  {
    title: 'Genetic susceptibility',
    detail: 'UC risk reflects many small genetic effects. IL23R and HLA-region signals matter; NOD2 is classically stronger in Crohn\'s disease but illustrates shared IBD susceptibility biology.',
  },
]

export default function PathophysiologyPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#071426] via-[#101733] to-[#0f2d33]">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
            <span>←</span>
            Back to research
          </Link>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">How ulcerative colitis works</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            UC is not explained by one broken pathway. It reflects a vulnerable barrier, an immune system that keeps overreacting, and a microbial environment that is no longer acting like a stable partner.
          </p>
          <div className="mt-8 max-w-3xl">
            <MedicalDisclaimer compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
              <h2 className="text-2xl font-bold text-white">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white">Why this matters clinically</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              Understanding pathophysiology clarifies why treatment classes look so different. Anti-TNF drugs blunt a central inflammatory cytokine. Vedolizumab changes immune-cell trafficking into the gut. IL-23 therapies target the upstream cytokine architecture that helps sustain chronic inflammation. JAK inhibitors act inside the signaling network itself.
            </p>
            <p>
              It also explains why symptoms alone can mislead. Barrier failure and low-grade inflammation may continue after urgency improves, which is why calprotectin and endoscopic healing targets have become so central to modern UC care.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
