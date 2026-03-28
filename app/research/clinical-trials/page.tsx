import Link from 'next/link'
import type { Metadata } from 'next'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'

export const metadata: Metadata = {
  title: 'Major UC Clinical Trials | Project Remission UC',
  description: 'A concise guide to the pivotal ulcerative colitis trials that shaped modern therapy sequencing.',
}

const trials = [
  'ACT 1 and ACT 2: infliximab established anti-TNF rescue and maintenance credibility in UC.',
  'ULTRA 1 and ULTRA 2: adalimumab defined a self-injected anti-TNF pathway.',
  'GEMINI 1: vedolizumab validated gut-selective integrin blockade.',
  'UNIFI: ustekinumab showed that IL-12/23 inhibition worked in UC, not just Crohn\'s disease.',
  'OCTAVE: tofacitinib made fast oral JAK inhibition part of UC sequencing.',
  'U-ACHIEVE and related studies: upadacitinib raised expectations for oral induction efficacy.',
  'TRUE NORTH: ozanimod opened the S1P receptor modulator class.',
  'LUCENT: mirikizumab accelerated IL-23-specific biologic development.',
  'ELEVATE UC 12 and UC 52: etrasimod expanded oral S1P competition.',
]

export default function ClinicalTrialsPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="border-b border-white/8 bg-gradient-to-br from-[#071426] via-[#0f1733] to-[#0e2740]">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16">
          <Link href="/research" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
            <span>←</span>
            Back to research
          </Link>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">The trials that define modern UC treatment</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            UC treatment decisions are increasingly shaped by a recognizable set of pivotal trials. Knowing which trial belongs to which drug makes the therapy landscape much easier to read.
          </p>
          <div className="mt-8 max-w-3xl">
            <MedicalDisclaimer compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-4">
          {trials.map((trial) => (
            <div key={trial} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 text-sm leading-relaxed text-slate-300">
              {trial}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white">Why cross-trial humility matters</h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-300">
            These trials do not enroll identical populations. Some include more biologic-exposed patients, some use different remission definitions, and some emphasize maintenance differently. That means trial numbers should guide decisions, but never fully replace clinician judgment about disease severity, urgency, prior failures, and safety profile.
          </p>
        </div>
      </section>
    </main>
  )
}
