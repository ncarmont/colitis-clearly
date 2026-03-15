import Link from 'next/link'
import researchArticles from '../research-carousel.json'

export const metadata = {
  title: 'Olive Oil Research — Peer-Reviewed Studies & Meta-Analysis | EVOO Rankings',
  description: 'Evidence-based olive oil research: peer-reviewed studies on polyphenols, health benefits, and the science behind high-quality EVOO. Updated with new papers weekly.',
  keywords: 'olive oil research, EVOO studies, polyphenol research, olive oil health benefits science, oleocanthal studies, hydroxytyrosol research',
  alternates: { canonical: 'https://www.best-olive-oil-ranked.com/research' },
}

const CAT_ICON: Record<string, string> = {
  Heart: '❤️', Brain: '🧠', Gut: '🦠', Cancer: '🔬',
  Inflammation: '🔥', Metabolism: '⚡', Longevity: '🧬', Skin: '✨',
  Comparison: '⚖️', Rankings: '🏆',
}

const CAT_GRADIENT: Record<string, string> = {
  Heart: 'from-rose-500 to-red-600',
  Brain: 'from-violet-500 to-purple-600',
  Gut: 'from-amber-400 to-orange-500',
  Cancer: 'from-blue-500 to-indigo-600',
  Inflammation: 'from-orange-400 to-red-500',
  Metabolism: 'from-teal-400 to-cyan-600',
  Longevity: 'from-emerald-400 to-green-600',
  Skin: 'from-pink-400 to-rose-500',
  Comparison: 'from-indigo-400 to-blue-600',
  Rankings: 'from-amber-400 to-yellow-500',
}

const CAT_BG: Record<string, string> = {
  Heart: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  Brain: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  Gut: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Cancer: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Inflammation: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Metabolism: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  Longevity: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Skin: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Comparison: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  Rankings: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

export default function ResearchPage() {
  const sorted = [...researchArticles].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Group by month
  const grouped: Record<string, typeof sorted> = {}
  sorted.forEach((a) => {
    const d = new Date(a.date)
    const key = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(a)
  })

  const keyFindings = [
    { stat: '31%', label: 'CVD risk reduction', source: 'PREDIMED Trial' },
    { stat: '28%', label: 'lower dementia risk', source: 'Harvard 28-yr study' },
    { stat: '30min', label: 'cancer cell apoptosis', source: 'Celano et al.' },
    { stat: '10×', label: 'antioxidant power vs green tea', source: 'Visioli et al.' },
    { stat: '7.1', label: 'mmHg blood pressure drop', source: 'Doménech et al.' },
    { stat: '30%', label: 'hepatic fat reduction', source: 'Priore et al.' },
  ]

  return (
    <main className="min-h-screen bg-[#060e1a]">
      {/* ── Hero ── */}
      <header className="relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-teal-900/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-4 pt-6 pb-10 md:pt-8 md:pb-14">
          <Link href="/" className="inline-flex items-center gap-1.5 text-emerald-400/50 hover:text-emerald-400 text-xs transition-colors mb-6 group">
            <svg className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to Rankings
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/40 to-transparent" />
            <span className="text-[10px] font-bold text-emerald-400/60 uppercase tracking-[0.2em]">Peer-Reviewed Research</span>
            <div className="h-px flex-1 bg-gradient-to-l from-emerald-500/40 to-transparent" />
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-center tracking-tight text-white">
            The Science of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
              Olive Oil
            </span>
          </h1>
          <p className="text-center text-white/30 text-sm mt-2 max-w-md mx-auto">
            {sorted.length} studies · {Object.keys(CAT_ICON).length} health areas · Updated weekly
          </p>
        </div>
      </header>

      {/* ── Meta-Analysis Hero Card ── */}
      <section className="max-w-5xl mx-auto px-4 -mt-2">
        <Link href="/blog/health-benefits-high-polyphenol-evoo" className="block group">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-sm hover:border-emerald-500/20 transition-all duration-300">
            {/* Subtle gradient accent top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

            <div className="p-6 md:p-8 lg:p-10">
              {/* Badge row */}
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 uppercase tracking-wider">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  Living Meta-Analysis
                </span>
                <span className="text-[10px] text-white/25">Continuously updated as new papers are published</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                What {sorted.length} Peer-Reviewed Studies Reveal About<br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                  Olive Oil &amp; Human Health
                </span>
              </h2>
              <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-2xl">
                Synthesising evidence across cardiovascular, neurological, oncological, inflammatory, metabolic,
                and gastrointestinal research to build the most complete picture of EVOO&apos;s impact on longevity.
              </p>

              {/* Key findings grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                {keyFindings.map((f, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 py-3 text-center hover:bg-white/[0.05] transition-colors">
                    <div className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">{f.stat}</div>
                    <div className="text-[9px] text-white/40 leading-tight mt-1">{f.label}</div>
                    <div className="text-[7px] text-emerald-400/40 mt-0.5 uppercase tracking-wider">{f.source}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold group-hover:gap-3 transition-all">
                Read full meta-analysis
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Category Pills ── */}
      <section className="max-w-5xl mx-auto px-4 mt-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {Object.entries(CAT_ICON).map(([cat, icon]) => {
            const count = sorted.filter(a => a.category === cat).length
            if (count === 0) return null
            return (
              <span key={cat} className={`inline-flex items-center gap-1 text-[10px] font-medium px-2.5 py-1 rounded-full border ${CAT_BG[cat] || 'bg-white/5 text-white/40 border-white/10'}`}>
                {icon} {cat} <span className="opacity-50">({count})</span>
              </span>
            )
          })}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[10px] text-white/20 uppercase tracking-widest font-medium">{sorted.length} Studies · Newest First</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
      </div>

      {/* ── Articles by Month ── */}
      <section className="max-w-5xl mx-auto px-4 mt-6 pb-16">
        {Object.entries(grouped).map(([month, articles]) => (
          <div key={month} className="mb-8">
            {/* Month header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{month}</span>
              <div className="h-px flex-1 bg-white/[0.04]" />
              <span className="text-[10px] text-white/15">{articles.length} {articles.length === 1 ? 'paper' : 'papers'}</span>
            </div>

            {/* Article cards — grid: featured first if 3+, else list */}
            {articles.length >= 3 ? (
              <div className="grid md:grid-cols-2 gap-3">
                {/* Featured card (first article) */}
                <Link href={`/blog/${articles[0].slug}`} className="md:col-span-2 block group">
                  <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-200">
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${CAT_GRADIENT[articles[0].category] || 'from-gray-400 to-gray-500'}`} />
                    <div className="p-5 md:p-6 flex gap-5">
                      <div className="hidden md:flex shrink-0 w-14 h-14 items-center justify-center rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] text-2xl">
                        {CAT_ICON[articles[0].category] || '📄'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${CAT_BG[articles[0].category] || 'bg-white/5 text-white/40 border-white/10'} uppercase tracking-wider`}>
                            {articles[0].category}
                          </span>
                          <span className="text-[10px] text-white/20">
                            {new Date(articles[0].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                          {articles[0].title}
                        </h3>
                        <p className="mt-1.5 text-xs text-white/30 leading-relaxed line-clamp-2">{articles[0].finding}</p>
                        <p className="mt-2 text-[10px] text-white/15 italic">{articles[0].paper}</p>
                      </div>
                      <div className="hidden md:flex items-center shrink-0">
                        <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all">
                          <svg className="w-3.5 h-3.5 text-white/30 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Remaining cards */}
                {articles.slice(1).map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-3">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Bottom */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-[10px] text-white/15 mb-6">
            <div className="h-px w-12 bg-white/[0.06]" />
            New papers added weekly from PubMed and peer-reviewed journals
            <div className="h-px w-12 bg-white/[0.06]" />
          </div>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              View Oil Rankings
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ── Article Card Component ── */
function ArticleCard({ article }: { article: { slug: string; title: string; paper: string; finding: string; category: string; date: string } }) {
  return (
    <Link href={`/blog/${article.slug}`} className="block group">
      <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-200 h-full">
        <div className={`absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r ${CAT_GRADIENT[article.category] || 'from-gray-400 to-gray-500'}`} />
        <div className="p-4 md:p-5">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-base">{CAT_ICON[article.category] || '📄'}</span>
              <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border ${CAT_BG[article.category] || 'bg-white/5 text-white/40 border-white/10'} uppercase tracking-wider`}>
                {article.category}
              </span>
            </div>
            <span className="text-[10px] text-white/15">
              {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
            </span>
          </div>
          <h3 className="text-sm font-bold text-white/90 leading-snug group-hover:text-emerald-300 transition-colors">
            {article.title}
          </h3>
          <p className="mt-1.5 text-[11px] text-white/25 leading-relaxed line-clamp-2">{article.finding}</p>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-[9px] text-white/15 italic truncate max-w-[200px]">{article.paper}</p>
            <span className="text-[10px] text-emerald-500/60 font-medium group-hover:text-emerald-400 transition-colors shrink-0 ml-2">
              Read →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
