import Link from 'next/link'
import researchArticles from '../research-carousel.json'

export const metadata = {
  title: 'Olive Oil Research — Peer-Reviewed Studies & Meta-Analysis | EVOO Rankings',
  description: 'Evidence-based olive oil research: peer-reviewed studies on polyphenols, health benefits, and the science behind high-quality EVOO. Updated with new papers weekly.',
  keywords: 'olive oil research, EVOO studies, polyphenol research, olive oil health benefits science, oleocanthal studies, hydroxytyrosol research',
  alternates: {
    canonical: 'https://www.best-olive-oil-ranked.com/research',
  },
}

const CATEGORY_ICONS: Record<string, string> = {
  Heart: '❤️', Brain: '🧠', Gut: '🦠', Cancer: '🔬',
  Inflammation: '🔥', Metabolism: '⚡', Longevity: '🧬', Skin: '✨',
  Comparison: '⚖️', Rankings: '🏆',
}

const CATEGORY_COLORS: Record<string, string> = {
  Heart: 'bg-red-50 text-red-700 border-red-200',
  Brain: 'bg-purple-50 text-purple-700 border-purple-200',
  Gut: 'bg-amber-50 text-amber-700 border-amber-200',
  Cancer: 'bg-blue-50 text-blue-700 border-blue-200',
  Inflammation: 'bg-orange-50 text-orange-700 border-orange-200',
  Metabolism: 'bg-teal-50 text-teal-700 border-teal-200',
  Longevity: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Skin: 'bg-pink-50 text-pink-700 border-pink-200',
  Comparison: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Rankings: 'bg-yellow-50 text-yellow-700 border-yellow-200',
}

export default function ResearchPage() {
  // Sort by date, newest first
  const sortedArticles = [...researchArticles].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header — compact */}
      <header className="bg-gradient-to-br from-[#061226] via-[#0a1f3a] to-[#07382d] text-white py-8 md:py-10 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-emerald-300/60 hover:text-emerald-300 text-xs mb-3 inline-block transition-colors">
            ← Back to Rankings
          </Link>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Olive Oil Research
          </h1>
          <p className="text-white/40 text-sm mt-1.5 max-w-lg mx-auto">
            Peer-reviewed studies and evidence-based analysis. Updated with new papers weekly.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">

        {/* Meta-Analysis Summary Card */}
        <div className="mb-8">
          <Link href="/blog/health-benefits-high-polyphenol-evoo">
            <div className="bg-gradient-to-br from-[#0a1628] via-[#0d2b3d] to-[#0a2e1f] rounded-xl p-6 md:p-8 text-white border border-white/10 hover:border-emerald-500/30 transition-all duration-200 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                  📊 Meta-Analysis
                </span>
                <span className="text-[10px] text-white/30">Continuously updated</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold leading-tight mb-3">
                What {sortedArticles.length} Studies Tell Us About Olive Oil &amp; Health
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-2xl">
                A living summary of the peer-reviewed evidence on high-polyphenol extra virgin olive oil.
                Covering cardiovascular protection, neurodegeneration, cancer, inflammation, gut health,
                and metabolic function — distilled from the studies below.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-white/5 rounded-lg px-3 py-2 text-center">
                  <div className="text-lg font-bold text-emerald-300">{sortedArticles.length}</div>
                  <div className="text-[8px] text-white/30 uppercase tracking-wider">Studies Reviewed</div>
                </div>
                <div className="bg-white/5 rounded-lg px-3 py-2 text-center">
                  <div className="text-lg font-bold text-emerald-300">8</div>
                  <div className="text-[8px] text-white/30 uppercase tracking-wider">Health Areas</div>
                </div>
                <div className="bg-white/5 rounded-lg px-3 py-2 text-center">
                  <div className="text-lg font-bold text-emerald-300">38</div>
                  <div className="text-[8px] text-white/30 uppercase tracking-wider">Oils Tested</div>
                </div>
                <div className="bg-white/5 rounded-lg px-3 py-2 text-center">
                  <div className="text-lg font-bold text-emerald-300">2026</div>
                  <div className="text-[8px] text-white/30 uppercase tracking-wider">Latest Data</div>
                </div>
              </div>

              <div className="text-xs text-white/40">
                <strong className="text-white/60">Key findings:</strong> 31% CVD risk reduction (PREDIMED) · 28% lower dementia mortality (Harvard) · COX-2 inhibition comparable to ibuprofen (Nature) · 250mg/kg EU health claim threshold · Oleocanthal triggers cancer cell apoptosis within 30 min
              </div>

              <div className="mt-4 text-emerald-400 text-xs font-semibold">
                Read full meta-analysis →
              </div>
            </div>
          </Link>
        </div>

        {/* Articles List — chronological, newest first */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-700">All Research Articles</h2>
          <span className="text-[10px] text-gray-400">{sortedArticles.length} studies · newest first</span>
        </div>

        <div className="space-y-3">
          {sortedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block group"
            >
              <div className="bg-white border border-gray-100 rounded-lg px-4 py-3 hover:border-gray-200 hover:shadow-sm transition-all duration-150">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[article.category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                        {CATEGORY_ICONS[article.category] || '📄'} {article.category}
                      </span>
                      <span className="text-[10px] text-gray-300">
                        {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-emerald-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-[11px] text-gray-400 leading-relaxed line-clamp-1">
                      {article.finding}
                    </p>
                  </div>
                  <div className="shrink-0 pt-1">
                    <p className="text-[9px] text-gray-300 italic text-right max-w-[140px] truncate">
                      {article.paper}
                    </p>
                    <span className="text-[10px] text-emerald-600 font-medium mt-1 block text-right group-hover:text-emerald-500">
                      Read →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 mb-3">New research articles added weekly from peer-reviewed journals</p>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold rounded-lg hover:from-emerald-500 hover:to-teal-500 transition-all"
          >
            ← View Oil Rankings
          </Link>
        </div>
      </div>
    </main>
  )
}
