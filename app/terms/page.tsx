import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Cleanest Coffee',
  description: 'Terms of use for Cleanest Coffee.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#060e1a] text-white">
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-emerald-300/70 transition hover:text-emerald-200">
          <span>←</span>
          Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-black tracking-tight">Terms of Use</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated: March 22, 2026</p>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-300">
          <p>Content on Cleanest Coffee is provided for educational and informational purposes only.</p>
          <p>Nothing on this site is medical advice, diagnosis, or a guarantee that any specific bag is contaminant-free. Coffee, caffeine, pregnancy, reflux, anxiety, sleep, blood pressure, and medication concerns should be discussed with a qualified professional.</p>
          <p>We aim for accuracy, but food-safety evidence, lab reports, product formulas, sourcing, and prices change. We may update content, remove material, or revise interpretations without notice.</p>
          <p>External links are provided for context. We are not responsible for third-party content, pricing, availability, or policies.</p>
          <p>By using this site, you agree that Cleanest Coffee is not liable for losses arising from reliance on website content.</p>
        </div>
      </section>
    </main>
  )
}
