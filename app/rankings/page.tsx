import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import { TREATMENTS, type Treatment } from '@/lib/treatments'

export const metadata: Metadata = {
  title: 'UC Treatment Rankings | Colitis Clearly',
  description: 'Compare UC therapies across 5-ASA drugs, biologics, JAK inhibitors, S1P modulators, steroids, immunomodulators, rectal therapy, and surgery.',
}

const sections: { id: string; title: string; description: string; items: Treatment[] }[] = [
  {
    id: 'five-asa',
    title: '5-ASA / Aminosalicylates',
    description: 'First-line therapy for mild to moderate disease, especially when the goal is mucosal control without escalating immediately to systemic immunosuppression.',
    items: TREATMENTS.filter((item) => item.className === '5-ASA / Aminosalicylate'),
  },
  {
    id: 'biologics',
    title: 'Biologics',
    description: 'Advanced therapies for moderate to severe UC. Cross-trial comparisons are imperfect, but these studies set the modern benchmark for response and remission.',
    items: TREATMENTS.filter((item) => item.className.startsWith('Biologic')),
  },
  {
    id: 'small-molecules',
    title: 'Small Molecules',
    description: 'Oral advanced therapies with different tradeoffs around speed, systemic safety, and baseline monitoring.',
    items: TREATMENTS.filter((item) => item.className.startsWith('Small molecule')),
  },
  {
    id: 'steroids',
    title: 'Corticosteroids',
    description: 'Bridge therapy for induction. Useful when disease is active, but not a maintenance plan.',
    items: TREATMENTS.filter((item) => item.className === 'Corticosteroid'),
  },
  {
    id: 'immunomodulators',
    title: 'Immunomodulators',
    description: 'Older steroid-sparing tools with slower onset and a narrower role in the modern era.',
    items: TREATMENTS.filter((item) => item.className === 'Immunomodulator'),
  },
  {
    id: 'rectal',
    title: 'Rectal Therapies',
    description: 'Often underused, even though distal disease responds especially well to local treatment.',
    items: TREATMENTS.filter((item) => item.className === 'Rectal therapy'),
  },
  {
    id: 'surgery',
    title: 'Surgical Option',
    description: 'The curative pathway when medical therapy fails or dysplasia changes the risk-benefit equation.',
    items: TREATMENTS.filter((item) => item.className === 'Surgical'),
  },
]

const quickPicks = [
  {
    title: 'Mild to moderate first-line',
    detail: 'Mesalamine remains the anchor first-line therapy, often with rectal mesalamine when the distal colon is involved.',
  },
  {
    title: 'Best local therapy for proctitis',
    detail: 'Rectal mesalamine can reach about 65-75% remission for distal disease and deserves more attention than it gets.',
  },
  {
    title: 'Fastest oral advanced option in the brief',
    detail: 'Upadacitinib posts the highest week-8 response signal in the supplied dataset, but safety warnings remain central.',
  },
  {
    title: 'Definitive rescue pathway',
    detail: 'Proctocolectomy with IPAA is curative for colonic disease and belongs in every serious UC treatment discussion.',
  },
]

export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="relative overflow-hidden border-b border-white/8 bg-gradient-to-br from-[#071426] via-[#0b1830] to-[#0d2638]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.15),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
            <span>←</span>
            Back to home
          </Link>
          <div className="mt-6 max-w-4xl">
            <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
              Flagship Comparison
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              Evidence-based UC treatment rankings and comparison.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
              This page compares the treatments named in the brief across clinical role, route, pivotal trials, response data, remission data, side effects, approval timing, and practical notes. The ranking mirrors the supplied dataset, but cross-trial comparisons still need caution.
            </p>
          </div>
          <div className="mt-8 max-w-3xl">
            <MedicalDisclaimer compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="rounded-[28px] border border-cyan-300/15 bg-cyan-300/10 p-5 text-sm leading-relaxed text-cyan-50">
          <strong className="font-semibold">How to read this page:</strong> a 74% response rate in one advanced-therapy trial is not automatically &quot;better&quot; than a 45% remission rate in a different population. UC trials use different endpoints, time points, prior-exposure mixes, and maintenance designs. Use these numbers as structured context, not as a one-column leaderboard.
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 md:px-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickPicks.map((pick) => (
            <div key={pick.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
              <h2 className="text-lg font-bold text-white">{pick.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{pick.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
        <div className="flex flex-wrap gap-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08]"
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
        <SmallAd />
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 pb-14 md:px-6 md:pb-20">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{section.description}</p>
            </div>
            <div className="mt-6 grid gap-5">
              {section.items.map((treatment) => (
                <article key={treatment.id} className="rounded-[30px] border border-white/8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 md:p-7">
                  <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
                    <div className="max-w-2xl">
                      <div className="text-sm font-semibold text-slate-400">#{treatment.rank}</div>
                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {treatment.name}
                        {treatment.brandNames ? <span className="text-lg font-medium text-slate-400"> ({treatment.brandNames})</span> : null}
                      </h3>
                      <p className="mt-2 text-sm text-emerald-200/80">{treatment.className}</p>
                      <p className="mt-4 text-sm leading-relaxed text-slate-300">{treatment.notes}</p>
                    </div>
                    <div className="rounded-3xl border border-white/8 bg-[#091528] px-5 py-4 lg:w-[260px]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Best Use</p>
                      <p className="mt-3 text-sm leading-relaxed text-white">{treatment.severity}</p>
                      <div className="mt-5 text-sm text-slate-300">
                        <div>Route: {treatment.route}</div>
                        <div className="mt-2">Approved: {treatment.yearApproved}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <DetailCard label="Clinical trial(s)" value={treatment.trials} />
                    <DetailCard label="Response rate" value={treatment.responseRate} />
                    <DetailCard label="Remission rate" value={treatment.remissionRate} />
                    <DetailCard label="Key side effects" value={treatment.keySideEffects} />
                    <DetailCard label="Route" value={treatment.route} />
                    <DetailCard label="Year approved" value={treatment.yearApproved} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  )
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#091528] p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-200">{value}</p>
    </div>
  )
}
