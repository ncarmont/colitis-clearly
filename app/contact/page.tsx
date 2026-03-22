import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Colitis Clearly',
  description: 'Contact Colitis Clearly for correction requests, citation updates, and editorial questions.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
          <span>←</span>
          Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-black tracking-tight">Contact</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
          Use the site feedback tool or email us for citation fixes, trial-data corrections, broken links, or editorial questions about ulcerative colitis coverage.
        </p>

        <div className="mt-8 rounded-[28px] border border-white/8 bg-white/[0.03] p-6">
          <p className="text-sm leading-relaxed text-slate-300">
            <strong className="text-white">Email:</strong>{' '}
            <a className="text-emerald-200 transition hover:text-emerald-100" href="mailto:contact@colitisclearly.com">
              contact@colitisclearly.com
            </a>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            <strong className="text-white">Best for:</strong> correction requests, editorial notes, or reports that a guideline, trial result, or approval date needs review.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            <strong className="text-white">Please include:</strong> the page URL, the specific sentence or number, and a source link when possible.
          </p>
        </div>
      </section>
    </main>
  )
}
