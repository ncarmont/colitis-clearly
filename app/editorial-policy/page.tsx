import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editorial Policy | Cleanest Coffee',
  description: 'How Cleanest Coffee researches, reviews, updates, and corrects coffee purity science content.',
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
            body="We prefer primary food-safety research, contaminant guidance, lab methods, systematic reviews, reputable agencies, and transparent certificates of analysis. We avoid turning unreplicated claims into conclusions."
          />
          <PolicyCard
            title="How pages are updated"
            body="Coffee pages and research summaries are revised when heavy-metal guidance, mycotoxin evidence, pesticide standards, decaf-solvent rules, lab reports, or brand transparency materially changes."
          />
          <PolicyCard
            title="Corrections"
            body="If you find an error, send the page URL, the disputed statement, and the source you think should replace it. Safety-relevant contaminant corrections are prioritized."
          />
          <PolicyCard
            title="Editorial independence"
            body="Pages are written for buyer clarity, not to reward vague wellness marketing. Affiliate potential never outranks heavy-metal evidence, lab transparency, freshness, and value."
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
