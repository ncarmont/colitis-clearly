import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'Top 10 Highest Polyphenol Olive Oils in 2024 (Lab Verified)',
  description: 'Complete rankings of the highest polyphenol EVOO brands with verified lab test results. Compare mg/kg levels, prices, and where to buy the best olive oil in 2024.',
  keywords: 'top 10 olive oils, highest polyphenol EVOO, best olive oil 2024, lab tested olive oil, polyphenol content rankings',
  openGraph: {
    title: 'Top 10 Highest Polyphenol Olive Oils in 2024 (Lab Verified)',
    description: 'Lab-verified rankings of the best high polyphenol olive oils',
    type: 'article',
  }
}

export default function Top10PolyphenolOilsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Top 10 Highest Polyphenol Olive Oils</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-yellow-600 to-orange-500 text-white text-sm font-bold rounded-full">
              Rankings
            </span>
            <span className="text-gray-500 text-sm">18 min read</span>
            <span className="text-gray-500 text-sm">Oct 2, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Top 10 Highest Polyphenol Olive Oils in 2024 (Lab Verified)
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            The definitive ranking of the world's highest polyphenol extra virgin olive oils, backed by independent laboratory testing. These are the oils with proven health benefits.
          </p>
        </header>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Top 10 Highest Polyphenol Olive Oils in 2024 (Lab Verified)",
              "datePublished": "2024-10-02",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "description": "Lab-verified rankings of the best high polyphenol olive oils"
            })
          }}
        />

        {/* Quick Summary */}
        <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border border-yellow-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            Top 10 at a Glance
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-200 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">1.</span>
              <span><strong className="text-white">SP360 Organic</strong> - 1462 mg/kg (Greece)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">2.</span>
              <span><strong className="text-white">Pamako Premium</strong> - 1222 mg/kg (Greece)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">3.</span>
              <span><strong className="text-white">ONSURI Arbosana</strong> - 968 mg/kg (California)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">4.</span>
              <span><strong className="text-white">PJ KABOS</strong> - 858 mg/kg (Greece)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">5.</span>
              <span><strong className="text-white">November Ultra Premium</strong> - 847 mg/kg (Tunisia)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">6.</span>
              <span><strong className="text-white">Opus Oléa</strong> - 674 mg/kg (California)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">7.</span>
              <span><strong className="text-white">Zero Nutrition</strong> - 582 mg/kg (Greece)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">8.</span>
              <span><strong className="text-white">Vallesur</strong> - 554 mg/kg (Spain)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">9.</span>
              <span><strong className="text-white">Citizens of Soil</strong> - 526 mg/kg (Greece)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">10.</span>
              <span><strong className="text-white">Odysea</strong> - 480 mg/kg (Greece)</span>
            </div>
          </div>
          <p className="text-sm text-gray-300 mt-4 italic border-l-4 border-yellow-500 pl-4">
            All rankings verified by independent laboratories using HPLC, qNMR, or RSS testing methods
          </p>
        </div>

        {/* Why Polyphenols Matter */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔬</span>
            Why Polyphenol Content Matters
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Not all extra virgin olive oils are created equal. The health benefits you've heard about—cardiovascular protection, anti-aging, anti-inflammatory effects—are directly proportional to polyphenol content.
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Polyphenol Levels Explained</h3>
              <div className="space-y-3">
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">Low Polyphenol</span>
                    <span className="text-xl font-bold text-red-400">&lt; 250 mg/kg</span>
                  </div>
                  <p className="text-sm text-gray-300">Most supermarket EVOOs. Minimal health benefits beyond monounsaturated fats. Often late harvest or improperly stored.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">Medium Polyphenol</span>
                    <span className="text-xl font-bold text-yellow-400">250-500 mg/kg</span>
                  </div>
                  <p className="text-sm text-gray-300">Good quality EVOOs. Some health benefits, but below EU health claim threshold (250 mg/kg hydroxytyrosol equivalents).</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">High Polyphenol (EU Health Claim)</span>
                    <span className="text-xl font-bold text-green-400">500+ mg/kg</span>
                  </div>
                  <p className="text-sm text-gray-300">Meets EU health claim for "protection of blood lipids from oxidative stress." Proven cardiovascular benefits in clinical trials.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">Ultra-High Polyphenol</span>
                    <span className="text-xl font-bold text-purple-400">800+ mg/kg</span>
                  </div>
                  <p className="text-sm text-gray-300">Elite category. Early harvest, ideal cultivars, optimal processing. Maximum anti-inflammatory and neuroprotective effects.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">The EU Health Claim</h3>
              <p className="text-green-50 mb-3">
                In 2012, the European Food Safety Authority (EFSA) authorized a health claim for olive oil polyphenols:
              </p>
              <blockquote className="border-l-4 border-white pl-4 italic text-green-50">
                "Olive oil polyphenols contribute to the protection of blood lipids from oxidative stress. The claim may be used only for olive oil which contains at least 5 mg of hydroxytyrosol and its derivatives per 20g of olive oil."
              </blockquote>
              <p className="text-sm text-green-50 mt-3">
                This translates to approximately <strong>250 mg/kg total polyphenols</strong> when consuming 20g (1.5 tablespoons) daily.
              </p>
            </div>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        {/* The Top 10 Rankings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📊</span>
            The Complete Top 10 Rankings
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            {/* Rank 1 */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-amber-800/20 border-2 border-yellow-600/60 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-yellow-400">#1</div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">SP360 Organic</h3>
                    <p className="text-gray-400">Greece • Koroneiki • Oct 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-yellow-400">1462 mg/kg</div>
                  <div className="text-sm text-gray-400">HPLC Verified</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Price</div>
                  <div className="text-xl font-bold text-white">$$$</div>
                  <div className="text-sm text-gray-400">~$79.99</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Harvest</div>
                  <div className="text-xl font-bold text-white">Oct 2024</div>
                  <div className="text-sm text-gray-400">Ultra-fresh</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Testing Method</div>
                  <div className="text-xl font-bold text-white">HPLC</div>
                  <div className="text-sm text-gray-400">Gold standard</div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                <strong className="text-white">The champion.</strong> SP360 consistently tests at the top of the polyphenol rankings with nearly 1500 mg/kg—almost 6x the EU health claim threshold. From Kalamata region, early October harvest of Koroneiki olives.
              </p>

              <div className="mb-4">
                <h4 className="font-bold text-white mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Highest verified polyphenol content globally</li>
                  <li>• Extremely high oleocanthal (strong peppery finish)</li>
                  <li>• Certified organic, single estate</li>
                  <li>• Cold extraction under 27°C</li>
                  <li>• Dark glass bottle, nitrogen flushed</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://sp360.co.uk/products/latest-october-harvest-sp360-500ml-extra-virgin-olive-oil-bottle-pre-order?ref=iejghiij"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all"
                >
                  <span>Buy SP360 →</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Rank 2 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-gray-400">#2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Pamako Premium</h3>
                    <p className="text-gray-400">Greece • Koroneiki • Nov 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">1222 mg/kg</div>
                  <div className="text-sm text-gray-400">HPLC Verified</div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Family-run estate in Kalamata producing exceptionally high polyphenol oil. 2024 harvest tested at 1222 mg/kg—nearly 5x EU health claim. Strong bitter and pungent notes indicate high oleocanthal and oleacein.
              </p>

              <div className="grid md:grid-cols-4 gap-3 mb-4">
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Price</div>
                  <div className="font-bold text-white">$$$</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Harvest</div>
                  <div className="font-bold text-white">Nov 2024</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Cultivar</div>
                  <div className="font-bold text-white">Koroneiki</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Method</div>
                  <div className="font-bold text-white">HPLC</div>
                </div>
              </div>

              <Link href="/" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                View in Rankings →
              </Link>
            </div>

            {/* Rank 3 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-gray-400">#3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">ONSURI Arbosana</h3>
                    <p className="text-gray-400">California, USA • Arbosana • Nov 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">968 mg/kg</div>
                  <div className="text-sm text-gray-400">qNMR Verified</div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                California's highest polyphenol EVOO, produced in Butte County from Arbosana olives. Tested by UC Davis Olive Center using quantitative NMR spectroscopy. Notable for exceptionally high oleocanthal-to-oleacein ratio (cardiovascular benefits).
              </p>

              <div className="grid md:grid-cols-4 gap-3 mb-4">
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Price</div>
                  <div className="font-bold text-white">$$$$</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Harvest</div>
                  <div className="font-bold text-white">Nov 2024</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Cultivar</div>
                  <div className="font-bold text-white">Arbosana</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Method</div>
                  <div className="font-bold text-white">qNMR</div>
                </div>
              </div>

              <Link href="/" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                View in Rankings →
              </Link>
            </div>

            {/* Rank 4 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-gray-400">#4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">PJ KABOS</h3>
                    <p className="text-gray-400">Greece (Crete) • Koroneiki • Oct 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">858 mg/kg</div>
                  <div className="text-sm text-gray-400">HPLC Verified</div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Certified organic Cretan oil from the Sitia region. Consistently high polyphenols due to early October harvest. Strong emphasis on oleocanthal content—this oil has a pronounced peppery throat kick.
              </p>

              <div className="grid md:grid-cols-4 gap-3 mb-4">
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Price</div>
                  <div className="font-bold text-white">$$$</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Harvest</div>
                  <div className="font-bold text-white">Oct 2024</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Cultivar</div>
                  <div className="font-bold text-white">Koroneiki</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Method</div>
                  <div className="font-bold text-white">HPLC</div>
                </div>
              </div>

              <Link href="/" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                View in Rankings →
              </Link>
            </div>

            {/* Rank 5 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-gray-400">#5</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">November Ultra Premium</h3>
                    <p className="text-gray-400">Tunisia • Chetoui • Nov 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">847 mg/kg</div>
                  <div className="text-sm text-gray-400">HPLC Verified</div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Rare Tunisian Chetoui cultivar known for unique polyphenol profile. Harvested in November from Sfax region. High in both oleocanthal (anti-inflammatory) and luteolin (neuroprotective). Distinctive flavor profile.
              </p>

              <div className="grid md:grid-cols-4 gap-3 mb-4">
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Price</div>
                  <div className="font-bold text-white">$$</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Harvest</div>
                  <div className="font-bold text-white">Nov 2024</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Cultivar</div>
                  <div className="font-bold text-white">Chetoui</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="text-xs text-gray-400">Method</div>
                  <div className="font-bold text-white">HPLC</div>
                </div>
              </div>

              <Link href="/" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                View in Rankings →
              </Link>
            </div>

            {/* Ranks 6-10 Condensed */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Rankings #6-10</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-gray-400">#6</span>
                    <div>
                      <div className="font-bold text-white">Opus Oléa</div>
                      <div className="text-sm text-gray-400">California • Arbequina/Koroneiki</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-400">674 mg/kg</div>
                    <div className="text-xs text-gray-400">HPLC</div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-gray-400">#7</span>
                    <div>
                      <div className="font-bold text-white">Zero Nutrition High Phenolic</div>
                      <div className="text-sm text-gray-400">Greece • Koroneiki</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-400">582 mg/kg</div>
                    <div className="text-xs text-gray-400">HPLC</div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-gray-400">#8</span>
                    <div>
                      <div className="font-bold text-white">Vallesur</div>
                      <div className="text-sm text-gray-400">Spain • Picual</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-400">554 mg/kg</div>
                    <div className="text-xs text-gray-400">HPLC</div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-gray-400">#9</span>
                    <div>
                      <div className="font-bold text-white">Citizens of Soil</div>
                      <div className="text-sm text-gray-400">Greece • Koroneiki</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-400">526 mg/kg</div>
                    <div className="text-xs text-gray-400">HPLC</div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-gray-400">#10</span>
                    <div>
                      <div className="font-bold text-white">Odysea</div>
                      <div className="text-sm text-gray-400">Greece • Koroneiki</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-400">480 mg/kg</div>
                    <div className="text-xs text-gray-400">HPLC</div>
                  </div>
                </div>
              </div>

              <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-500 transition-all mt-4">
                <span>View All Details</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📈</span>
            Side-by-Side Comparison
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 font-bold text-white">Rank</th>
                    <th className="text-left py-3 px-4 font-bold text-white">Brand</th>
                    <th className="text-left py-3 px-4 font-bold text-white">Origin</th>
                    <th className="text-left py-3 px-4 font-bold text-white">Polyphenols</th>
                    <th className="text-left py-3 px-4 font-bold text-white">Cultivar</th>
                    <th className="text-left py-3 px-4 font-bold text-white">Price</th>
                    <th className="text-left py-3 px-4 font-bold text-white">Method</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800 bg-yellow-900/10">
                    <td className="py-3 px-4 font-bold text-yellow-400">1</td>
                    <td className="py-3 px-4 font-semibold">SP360 Organic</td>
                    <td className="py-3 px-4">Greece</td>
                    <td className="py-3 px-4 font-bold text-green-400">1462 mg/kg</td>
                    <td className="py-3 px-4">Koroneiki</td>
                    <td className="py-3 px-4">$$$</td>
                    <td className="py-3 px-4">HPLC</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold text-gray-400">2</td>
                    <td className="py-3 px-4">Pamako Premium</td>
                    <td className="py-3 px-4">Greece</td>
                    <td className="py-3 px-4 font-bold text-green-400">1222 mg/kg</td>
                    <td className="py-3 px-4">Koroneiki</td>
                    <td className="py-3 px-4">$$$</td>
                    <td className="py-3 px-4">HPLC</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold text-gray-400">3</td>
                    <td className="py-3 px-4">ONSURI Arbosana</td>
                    <td className="py-3 px-4">California</td>
                    <td className="py-3 px-4 font-bold text-green-400">968 mg/kg</td>
                    <td className="py-3 px-4">Arbosana</td>
                    <td className="py-3 px-4">$$$$</td>
                    <td className="py-3 px-4">qNMR</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold text-gray-400">4</td>
                    <td className="py-3 px-4">PJ KABOS</td>
                    <td className="py-3 px-4">Greece</td>
                    <td className="py-3 px-4 font-bold text-green-400">858 mg/kg</td>
                    <td className="py-3 px-4">Koroneiki</td>
                    <td className="py-3 px-4">$$$</td>
                    <td className="py-3 px-4">HPLC</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold text-gray-400">5</td>
                    <td className="py-3 px-4">November Ultra Premium</td>
                    <td className="py-3 px-4">Tunisia</td>
                    <td className="py-3 px-4 font-bold text-green-400">847 mg/kg</td>
                    <td className="py-3 px-4">Chetoui</td>
                    <td className="py-3 px-4">$$</td>
                    <td className="py-3 px-4">HPLC</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold text-gray-400">6</td>
                    <td className="py-3 px-4">Opus Oléa</td>
                    <td className="py-3 px-4">California</td>
                    <td className="py-3 px-4 font-bold text-green-400">674 mg/kg</td>
                    <td className="py-3 px-4">Blend</td>
                    <td className="py-3 px-4">$$$</td>
                    <td className="py-3 px-4">HPLC</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold text-gray-400">7</td>
                    <td className="py-3 px-4">Zero Nutrition</td>
                    <td className="py-3 px-4">Greece</td>
                    <td className="py-3 px-4 font-bold text-green-400">582 mg/kg</td>
                    <td className="py-3 px-4">Koroneiki</td>
                    <td className="py-3 px-4">$$</td>
                    <td className="py-3 px-4">HPLC</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold text-gray-400">8</td>
                    <td className="py-3 px-4">Vallesur</td>
                    <td className="py-3 px-4">Spain</td>
                    <td className="py-3 px-4 font-bold text-green-400">554 mg/kg</td>
                    <td className="py-3 px-4">Picual</td>
                    <td className="py-3 px-4">$$</td>
                    <td className="py-3 px-4">HPLC</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold text-gray-400">9</td>
                    <td className="py-3 px-4">Citizens of Soil</td>
                    <td className="py-3 px-4">Greece</td>
                    <td className="py-3 px-4 font-bold text-green-400">526 mg/kg</td>
                    <td className="py-3 px-4">Koroneiki</td>
                    <td className="py-3 px-4">$$$</td>
                    <td className="py-3 px-4">HPLC</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold text-gray-400">10</td>
                    <td className="py-3 px-4">Odysea</td>
                    <td className="py-3 px-4">Greece</td>
                    <td className="py-3 px-4 font-bold text-green-400">480 mg/kg</td>
                    <td className="py-3 px-4">Koroneiki</td>
                    <td className="py-3 px-4">$</td>
                    <td className="py-3 px-4">HPLC</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm italic bg-gray-800/50 border-l-4 border-blue-500 pl-4 py-3 rounded-r">
              <strong className="text-white">Price Guide:</strong> $ = $20-40 | $$ = $40-60 | $$$ = $60-90 | $$$$ = $90+
            </p>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        {/* Testing Methods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔬</span>
            How These Oils Are Tested
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              All rankings are based on independent laboratory testing using validated methods:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-300 mb-3">HPLC</h3>
                <p className="text-sm text-gray-300 mb-3">
                  <strong className="text-white">High-Performance Liquid Chromatography</strong>
                </p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Gold standard for polyphenol analysis</li>
                  <li>• Identifies individual polyphenols</li>
                  <li>• Most accurate quantification</li>
                  <li>• Used in research studies</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-3">qNMR</h3>
                <p className="text-sm text-gray-300 mb-3">
                  <strong className="text-white">Quantitative Nuclear Magnetic Resonance</strong>
                </p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Advanced spectroscopic method</li>
                  <li>• Non-destructive analysis</li>
                  <li>• High precision</li>
                  <li>• Used by UC Davis Olive Center</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-3">RSS</h3>
                <p className="text-sm text-gray-300 mb-3">
                  <strong className="text-white">Rapid Spectrophotometric Screening</strong>
                </p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Faster, more affordable</li>
                  <li>• Measures total polyphenols</li>
                  <li>• Good for quality control</li>
                  <li>• Folin-Ciocalteu method</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Why Lab Testing Matters</h3>
              <p className="text-amber-50 mb-3">
                Marketing claims like "high polyphenol" are meaningless without third-party verification. Studies show that:
              </p>
              <ul className="text-amber-50 space-y-2">
                <li>• 69% of supermarket EVOOs fail quality tests (UC Davis 2010)</li>
                <li>• Polyphenol content varies 10x between brands</li>
                <li>• "Extra virgin" label doesn't guarantee polyphenol levels</li>
                <li>• Only lab-tested oils can verify health benefit claims</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🛒</span>
            How to Choose From the Top 10
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-gradient-to-br from-teal-900/30 to-cyan-800/20 border border-teal-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-teal-300 mb-4">Decision Framework</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">For Maximum Health Benefits</h4>
                  <p className="text-sm text-gray-300 mb-2">Choose: SP360 Organic (#1), Pamako Premium (#2), ONSURI (#3)</p>
                  <p className="text-sm text-gray-300">These ultra-high polyphenol oils (800+ mg/kg) provide maximum cardiovascular, anti-inflammatory, and neuroprotective effects.</p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">For Best Value</h4>
                  <p className="text-sm text-gray-300 mb-2">Choose: November Ultra Premium (#5), Zero Nutrition (#7), Vallesur (#8)</p>
                  <p className="text-sm text-gray-300">Still exceed EU health claim threshold but at more accessible price points ($40-60).</p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">For Freshness (USA-based)</h4>
                  <p className="text-sm text-gray-300 mb-2">Choose: ONSURI (#3), Opus Oléa (#6)</p>
                  <p className="text-sm text-gray-300">California oils arrive fresher (no international shipping), preserving polyphenols better.</p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">For Traditional Mediterranean</h4>
                  <p className="text-sm text-gray-300 mb-2">Choose: SP360 (#1), Pamako (#2), PJ KABOS (#4)</p>
                  <p className="text-sm text-gray-300">Greek Koroneiki oils from regions with centuries of olive cultivation.</p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">For Strong Peppery Flavor (High Oleocanthal)</h4>
                  <p className="text-sm text-gray-300 mb-2">Choose: SP360 (#1), PJ KABOS (#4)</p>
                  <p className="text-sm text-gray-300">Intense peppery throat sensation indicates high anti-inflammatory compounds.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-800/20 border border-purple-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">What to Look For On Labels</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-300 mb-2">✓ Good Signs</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Harvest date (within last 12 months)</li>
                    <li>• Lab certificate with mg/kg value</li>
                    <li>• Dark glass bottle</li>
                    <li>• Single cultivar listed</li>
                    <li>• Specific region/estate</li>
                    <li>• "Early harvest" or "October harvest"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-300 mb-2">✗ Red Flags</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• No harvest date</li>
                    <li>• Clear/plastic bottle</li>
                    <li>• "Light" or "mild" flavor claims</li>
                    <li>• Vague origin ("Mediterranean")</li>
                    <li>• "Blend of EU and non-EU oils"</li>
                    <li>• Unusually cheap for size</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">The Bottom Line</h2>
            <p className="text-green-50 text-lg leading-relaxed mb-4">
              These top 10 oils represent the gold standard in extra virgin olive oil. All have been independently lab-tested and verified to contain polyphenol levels that deliver real health benefits.
            </p>
            <p className="text-green-50 text-lg leading-relaxed mb-6">
              <strong>Our recommendation:</strong> Choose any oil with 500+ mg/kg polyphenols from this list. Store properly in a dark, cool place, and use within 6 months of opening. Consume 2-4 tablespoons daily for maximum benefits.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-xl"
            >
              <span>Explore Full Rankings & Buy Links</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog/how-to-choose-high-polyphenol-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                How to Choose High Polyphenol Olive Oil
              </h3>
              <p className="text-sm text-gray-400">Expert buying guide for selecting the best EVOO</p>
            </Link>

            <Link
              href="/blog/best-olive-cultivars-high-polyphenols"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🫒</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Best Olive Cultivars for Polyphenols
              </h3>
              <p className="text-sm text-gray-400">Which olive varieties produce the highest polyphenols</p>
            </Link>

            <Link
              href="/blog/best-affordable-high-polyphenol-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Best Affordable High Polyphenol Oils
              </h3>
              <p className="text-sm text-gray-400">Budget-friendly options with verified polyphenol content</p>
            </Link>
          </div>
        </section>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to All Articles</span>
          </Link>
        </div>
      </article>
    </main>
  )
}
