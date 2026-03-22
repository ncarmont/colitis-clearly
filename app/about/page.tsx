import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'

export const metadata: Metadata = {
  title: 'About | Colitis Clearly',
  description: 'About Colitis Clearly, an evidence-based resource focused on making ulcerative colitis science accessible.',
}

const values = [
  {
    title: 'Evidence before hype',
    detail: 'We prioritize pivotal trials, systematic reviews, and gastroenterology guidance over anecdotes, influencer language, or miracle narratives.',
  },
  {
    title: 'Accessible, not watered down',
    detail: 'The goal is clarity. That means explaining the mechanisms and tradeoffs without flattening the science into oversimplified slogans.',
  },
  {
    title: 'Decision support, not personal care',
    detail: 'We help readers understand options, but diagnosis and treatment decisions still belong with the treating clinical team.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#071426] via-[#0b1830] to-[#0b2d2b]">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
            <span>←</span>
            Back to home
          </Link>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">About Colitis Clearly</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            Colitis Clearly is an evidence-based resource dedicated to making ulcerative colitis science accessible. We synthesize clinical trial data, systematic reviews, and gastroenterology guidelines to help patients, caregivers, and clinicians make informed decisions.
          </p>
          <div className="mt-8 max-w-3xl">
            <MedicalDisclaimer compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
              <h2 className="text-2xl font-bold text-white">{value.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{value.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white">What this site is and is not</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              This site is a science-first editorial project. We organize treatment data, biomarker interpretation, and disease-mechanism explainers so the logic of UC care is easier to follow.
            </p>
            <p>
              We are not doctors, and this site is not a substitute for individualized medical care. Always consult your gastroenterologist before starting, stopping, or changing treatment.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
