import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editorial Policy | Colitis Clearly',
  description: 'How Colitis Clearly researches, reviews, updates, and corrects UC science content.',
}

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
          <span>←</span>
          Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-black tracking-tight">Editorial Policy</h1>
        <div className="mt-8 space-y-6">
          <PolicyCard
            title="Sources we prioritize"
            body="We prefer primary trial publications, systematic reviews, major guideline statements, and reputable medical organizations. We avoid turning unreplicated claims into conclusions."
          />
          <PolicyCard
            title="How pages are updated"
            body="Treatment pages and research summaries are revised when pivotal data, approval status, or interpretation materially changes. We aim to keep publication and approval timing explicit when it affects understanding."
          />
          <PolicyCard
            title="Corrections"
            body="If you find an error, send the page URL, the disputed statement, and the source you think should replace it. Medically significant corrections are prioritized."
          />
          <PolicyCard
            title="Editorial independence"
            body="Pages are written for educational clarity, not to sell a product or steer a patient toward a specific drug outside the context of evidence and clinician oversight."
          />
        </div>
      </section>
    </main>
  )
}

function PolicyCard({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{body}</p>
    </section>
  )
}
