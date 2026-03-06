import Link from 'next/link'
import ArticleSchema from '@/components/ArticleSchema'
import FAQSchema from '@/components/FAQSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SmallAd from '@/components/SmallAd'

export const metadata = {
  title: 'Harvest Date Olive Oil: Why Freshness Determines Polyphenol Power',
  description: 'Harvest date is the #1 freshness signal for EVOO. Learn how polyphenols fade over time, how to read labels, and when to buy for maximum health benefits.',
  keywords: 'olive oil harvest date, EVOO freshness, polyphenol degradation, best harvest date olive oil, early harvest EVOO',
  alternates: {
    canonical: 'https://www.best-olive-oil-ranked.com/blog/harvest-date-olive-oil',
  },
}

const faqs = [
  {
    question: 'How old is too old for olive oil?',
    answer: 'For peak polyphenols, buy within 6–12 months of harvest. Many oils are still safe after 18 months, but polyphenols and flavor decline steadily after the first year.'
  },
  {
    question: 'Is a “best by” date enough?',
    answer: 'No. “Best by” is often set 18–24 months after bottling, which hides how old the oil really is. Harvest date is the most transparent freshness indicator.'
  },
  {
    question: 'Does early harvest mean higher polyphenols?',
    answer: 'Yes. Early harvest olives (greener fruit) typically contain 2–3x more polyphenols than late harvest oils, which is why they taste more peppery and bitter.'
  },
  {
    question: 'Can I still use older olive oil?',
    answer: 'Yes for cooking, but not for polyphenol benefits. Save fresher, high‑polyphenol EVOO for raw use like salads or finishing.'
  },
]

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Harvest Date & Freshness', url: '/blog/harvest-date-olive-oil' }
]

export default function HarvestDateOliveOil() {
  return (
    <>
      <ArticleSchema
        title="Harvest Date Olive Oil: Why Freshness Determines Polyphenol Power"
        description="Harvest date is the clearest signal of EVOO freshness and polyphenol potency"
        datePublished="2026-02-14"
        url="https://www.best-olive-oil-ranked.com/blog/harvest-date-olive-oil"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800 text-gray-100">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-emerald-900 to-teal-900">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-emerald-300 hover:text-emerald-200 mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200">
              Harvest Date: The #1 Freshness Signal for EVOO
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Polyphenols are fragile. If you want maximum health benefits, the harvest date matters more than the brand, price, or “best by” label.
            </p>
            <div className="mt-6 flex gap-4 text-sm text-gray-400">
              <span>📅 Published: February 14, 2026</span>
              <span>⏱️ 6 min read</span>
              <span>🫒 Freshness-first</span>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why it matters */}
            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-700/30 rounded-2xl p-8 mb-10">
              <h2 className="text-3xl font-bold text-emerald-200 mb-4">Why Harvest Date Beats “Best By”</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Polyphenols start degrading the moment olives are crushed. Heat, light, and oxygen accelerate the loss. A “best by” date is often
                calculated from bottling—not harvest—so it can hide oils that are already 12–18 months old.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                If your goal is anti‑inflammatory benefits, the harvest date is the most honest signal of potency. Fresher oil = more polyphenols.
              </p>
            </div>

            {/* Freshness timeline */}
            <h2 className="text-3xl font-bold text-white mb-6">🧭 Freshness Timeline (What to Expect)</h2>
            <div className="space-y-4 mb-10">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-300 mb-2">0–6 Months After Harvest</h3>
                <p className="text-gray-300">Peak flavor and polyphenol content. This is the sweet spot for raw use and health benefits.</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-teal-300 mb-2">6–12 Months</h3>
                <p className="text-gray-300">Still strong, but polyphenols begin to decline. Good for daily use if stored properly.</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-300 mb-2">12–18+ Months</h3>
                <p className="text-gray-300">Noticeable drop in bitterness and peppery “throat burn.” Use for cooking, not for polyphenol goals.</p>
              </div>
            </div>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


            {/* How to read labels */}
            <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-gray-700/40 rounded-2xl p-8 mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">🔎 How to Read a Label (Fast)</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span><strong className="text-white">Look for “Harvest Date”</strong> (not just “Best By”).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span><strong className="text-white">Prefer early harvest</strong> labels for higher polyphenols.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span><strong className="text-white">Check crop year</strong> (e.g., 2025/26). If it’s missing, skip.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span><strong className="text-white">Prefer dark glass or tin</strong> and store away from heat/light.</span>
                </li>
              </ul>
            </div>

            {/* Practical tips */}
            <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 border border-teal-700/40 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-teal-200 mb-4">🥄 Practical Buying Tips</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong className="text-white">Buy 2–3 smaller bottles</strong> instead of one large jug. You’ll finish them before polyphenols fade.</p>
                <p><strong className="text-white">Use the freshest oil raw</strong> (salads, drizzles), and older oil for cooking.</p>
                <p><strong className="text-white">Smell and taste:</strong> fresh high‑polyphenol EVOO is grassy, bitter, and peppery in the throat.</p>
              </div>
            </div>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


            {/* FAQ */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-700/40 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-blue-200 mb-6">❓ FAQ: Harvest Date & Freshness</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-300 mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Want the Freshest, Highest-Polyphenol Oils?</h3>
              <p className="text-emerald-50 mb-6 text-lg">
                See our lab-verified rankings—updated with the newest harvests and freshest bottlings.
              </p>
              <Link
                href="/rankings"
                className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition shadow-xl"
              >
                View Rankings
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
