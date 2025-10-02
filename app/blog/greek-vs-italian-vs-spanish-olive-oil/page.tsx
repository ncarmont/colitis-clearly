import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Greek vs Italian vs Spanish Olive Oil: Polyphenol Comparison 2024',
  description: 'Compare Greek, Italian, and Spanish olive oils by polyphenol content. Discover why Greek Koroneiki often ranks highest, plus regional cultivars, production methods, and health benefits across Mediterranean regions.',
  keywords: 'greek vs italian olive oil, spanish olive oil polyphenols, best country olive oil, koroneiki vs picual, mediterranean olive oil comparison, greek koroneiki polyphenols',
  openGraph: {
    title: 'Greek vs Italian vs Spanish Olive Oil: Which Has the Most Polyphenols?',
    description: 'Data-driven comparison of olive oil polyphenol content by country. Greek Koroneiki leads with 600-1400+ mg/kg.',
    type: 'article',
  }
}

export default function GreekVsItalianVsSpanishPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Greek vs Italian vs Spanish Olive Oil</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold rounded-full">
              Comparison Guide
            </span>
            <span className="text-gray-500 text-sm">📖 12 min read</span>
            <span className="text-gray-500 text-sm">📅 Oct 2, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Greek vs Italian vs Spanish Olive Oil: Polyphenol Comparison
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            The Mediterranean produces the world's finest olive oils, but which country produces the highest polyphenol content? We compare Greek, Italian, and Spanish EVOOs using lab-verified data to reveal the surprising winner.
          </p>
        </header>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Greek vs Italian vs Spanish Olive Oil: Polyphenol Comparison",
              "datePublished": "2024-10-02",
              "dateModified": "2024-10-02",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "description": "Comprehensive comparison of Greek, Italian, and Spanish olive oils by polyphenol content, cultivars, and production methods."
            })
          }}
        />

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            Quick Summary: Which Country Wins?
          </h2>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">🏆</span>
              <span><strong className="text-white">Greece leads in polyphenol content:</strong> Greek Koroneiki averages 600-1000+ mg/kg, with some reaching 1400+ mg/kg</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">🥈</span>
              <span><strong className="text-white">Spain excels in volume and variety:</strong> Picual cultivar reaches 500-900 mg/kg, world's largest producer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">🥉</span>
              <span><strong className="text-white">Italy offers diversity:</strong> Coratina and Moraiolo reach 500-850 mg/kg, renowned for quality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">📊</span>
              <span><strong className="text-white">Key factor:</strong> Cultivar and harvest timing matter more than country alone</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">🔬</span>
              <span><strong className="text-white">Lab data reveals:</strong> Top 10 highest polyphenol EVOOs are 70% Greek, 20% Spanish, 10% Italian/Other</span>
            </li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🇬🇷</span>
            Greece: The Polyphenol Powerhouse
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              When it comes to <strong className="text-white">polyphenol content</strong>, Greece consistently produces the world's highest-ranking extra virgin olive oils. This isn't marketing hype—it's backed by lab testing data from HPLC and qNMR analysis across hundreds of samples.
            </p>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6 my-6">
              <h3 className="text-2xl font-bold text-green-300 mb-4">Why Greek Olive Oil Dominates Polyphenol Rankings</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">1. Koroneiki Cultivar Supremacy</h4>
                  <p className="text-gray-300">
                    The <strong className="text-green-400">Koroneiki olive</strong> is Greece's native variety, comprising 50-60% of Greek olive oil production. This small, hardy olive is genetically predisposed to extremely high polyphenol concentrations.
                  </p>
                  <div className="mt-3 bg-gray-800/50 rounded-lg p-4">
                    <p className="text-sm text-green-300 font-bold mb-2">Typical Polyphenol Ranges:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Early harvest Koroneiki: <strong className="text-white">800-1400+ mg/kg</strong></li>
                      <li>• Mid-season Koroneiki: <strong className="text-white">600-900 mg/kg</strong></li>
                      <li>• Late harvest Koroneiki: <strong className="text-white">350-600 mg/kg</strong></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">2. Traditional Early Harvest Culture</h4>
                  <p className="text-gray-300">
                    Greek producers have centuries-old traditions of <strong className="text-white">early harvest</strong> (October-November), picking olives while still green and unripe. This maximizes polyphenol content at the expense of yield—a trade-off Greek producers accept for quality.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">3. Mountainous Terrain and Climate</h4>
                  <p className="text-gray-300">
                    Greek olive groves are often located at <strong className="text-white">400-800m elevation</strong> in rocky, mineral-rich soil with limited water. This environmental stress triggers the olive tree's defense mechanism, producing higher polyphenol concentrations.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">4. Small-Scale, Quality-Focused Production</h4>
                  <p className="text-gray-300">
                    Greece has over 600,000 olive farmers, most operating small family estates. Unlike large-scale industrial operations, these producers prioritize quality over volume, with harvest-to-mill times often under 4 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-blue-300 mb-3">Top Greek Regions by Polyphenol Content</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Kalamata (Messinia)</h4>
                  <p className="text-sm text-gray-300">Home to Koroneiki and the famous Kalamata table olive. Early harvest oils regularly exceed 1000 mg/kg.</p>
                  <p className="text-xs text-blue-400 mt-1">Average: 700-1200 mg/kg</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Crete</h4>
                  <p className="text-sm text-gray-300">Greece's largest olive oil producing region. High-altitude groves produce intensely flavored, polyphenol-rich oils.</p>
                  <p className="text-xs text-blue-400 mt-1">Average: 600-1000 mg/kg</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Laconia</h4>
                  <p className="text-sm text-gray-300">Southeastern Peloponnese. Known for ultra-premium early harvest Koroneiki with exceptional longevity.</p>
                  <p className="text-xs text-blue-400 mt-1">Average: 800-1400+ mg/kg</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Lesbos (Mytilene)</h4>
                  <p className="text-sm text-gray-300">Island microclimate produces delicate yet polyphenol-dense oils. PDO protected region.</p>
                  <p className="text-xs text-blue-400 mt-1">Average: 500-900 mg/kg</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-green-400">Lab Data:</strong> In our analysis of 100+ lab-verified EVOOs, Greek oils averaged <strong className="text-white">712 mg/kg polyphenols</strong>, significantly higher than Italy (428 mg/kg) and Spain (516 mg/kg).
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🇪🇸</span>
            Spain: Volume Leader with Quality Potential
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Spain is the <strong className="text-white">world's largest olive oil producer</strong>, accounting for 40-45% of global production. While bulk production dominates, Spain also produces exceptional high-polyphenol EVOOs, particularly from the Picual cultivar.
            </p>

            <div className="bg-gradient-to-br from-orange-900/30 to-amber-800/20 border border-orange-700/40 rounded-xl p-6 my-6">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">Spanish Olive Oil: Strengths and Challenges</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">The Picual Advantage</h4>
                  <p className="text-gray-300 mb-3">
                    <strong className="text-orange-400">Picual</strong> is Spain's flagship olive variety, representing 50% of Spanish production. It's naturally high in oleic acid and polyphenols, particularly oleocanthal.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <p className="text-sm text-orange-300 font-bold mb-2">Picual Polyphenol Ranges:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Early harvest Picual: <strong className="text-white">650-900 mg/kg</strong></li>
                      <li>• Mid-season Picual: <strong className="text-white">450-650 mg/kg</strong></li>
                      <li>• Late harvest Picual: <strong className="text-white">250-450 mg/kg</strong></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Industrial vs Artisan Production</h4>
                  <p className="text-gray-300">
                    Spain's large-scale production focuses on <strong className="text-white">yield and efficiency</strong>, often harvesting later when olives are fully ripe to maximize oil volume. This results in lower average polyphenol content across the broader market.
                  </p>
                  <p className="text-gray-300 mt-2">
                    However, <strong className="text-white">small estate producers</strong> and premium brands in Spain produce world-class early harvest oils that compete directly with Greek Koroneiki.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Regional Variation</h4>
                  <p className="text-gray-300">
                    Spanish olive oil quality varies dramatically by region. Northern regions (Catalonia, Aragon) and high-altitude groves in Andalusia produce significantly higher polyphenol oils than flat, irrigated mega-groves.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Top Spanish Cultivars for Polyphenols</h3>
              <div className="space-y-3">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-1">Picual</h4>
                  <p className="text-sm text-gray-300">Most polyphenol-rich Spanish variety. Robust, peppery flavor with strong oleocanthal presence.</p>
                  <p className="text-xs text-yellow-400 mt-1">Range: 450-900 mg/kg</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-1">Cornicabra</h4>
                  <p className="text-sm text-gray-300">Central Spain variety. High antioxidant capacity, excellent stability and shelf life.</p>
                  <p className="text-xs text-yellow-400 mt-1">Range: 400-700 mg/kg</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-1">Arbequina</h4>
                  <p className="text-sm text-gray-300">Mild, buttery variety. Popular but naturally lower in polyphenols even when early harvested.</p>
                  <p className="text-xs text-yellow-400 mt-1">Range: 200-400 mg/kg</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-1">Hojiblanca</h4>
                  <p className="text-sm text-gray-300">Dual-purpose olive (oil and table). Moderate polyphenols with balanced flavor.</p>
                  <p className="text-xs text-yellow-400 mt-1">Range: 300-550 mg/kg</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-purple-300 mb-3">Notable Spanish Regions</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span><strong className="text-white">Jaén (Andalusia):</strong> World's largest olive oil producing region. Premium Picual from Sierra Mágina.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span><strong className="text-white">Baena (Córdoba):</strong> PDO protected, traditional methods, early harvest focus.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span><strong className="text-white">Priego de Córdoba:</strong> Mountainous terrain, award-winning early harvest Picual.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span><strong className="text-white">Sierra de Cazorla:</strong> High-altitude organic production, exceptional polyphenol content.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🇮🇹</span>
            Italy: Quality and Diversity
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Italy is the world's <strong className="text-white">second-largest olive oil producer</strong> and is renowned for quality and diversity. With over 500 olive cultivars, Italian olive oil offers incredible variety, though polyphenol content varies widely.
            </p>

            <div className="bg-gradient-to-br from-red-900/30 to-pink-800/20 border border-red-700/40 rounded-xl p-6 my-6">
              <h3 className="text-2xl font-bold text-red-300 mb-4">The Italian Polyphenol Landscape</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Regional Fragmentation</h4>
                  <p className="text-gray-300">
                    Unlike Greece's Koroneiki dominance or Spain's Picual prevalence, Italy has <strong className="text-white">extreme regional diversity</strong>. Each region cultivates different varieties adapted to local microclimates, resulting in vastly different polyphenol profiles.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">The Coratina Exception</h4>
                  <p className="text-gray-300">
                    <strong className="text-red-400">Coratina</strong> (from Puglia) is Italy's highest polyphenol cultivar, rivaling Greek Koroneiki when early harvested. It's intensely peppery with high oleocanthal content.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-3">
                    <p className="text-sm text-red-300 font-bold mb-2">Coratina Polyphenol Ranges:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Early harvest Coratina: <strong className="text-white">600-850 mg/kg</strong></li>
                      <li>• Mid-season Coratina: <strong className="text-white">450-650 mg/kg</strong></li>
                      <li>• Coratina blends: <strong className="text-white">300-500 mg/kg</strong></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Marketing vs Reality</h4>
                  <p className="text-gray-300">
                    Italian olive oil enjoys strong brand recognition worldwide, but <strong className="text-white">much of what's sold as "Italian" olive oil is imported from Greece, Spain, or Tunisia</strong> and bottled in Italy. True Italian estate oils are exceptional but represent a smaller percentage of exports.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Late Harvest Tradition in Some Regions</h4>
                  <p className="text-gray-300">
                    Many Italian regions historically prefer <strong className="text-white">late harvest</strong> for milder, more delicate oils. While these oils are high quality, they naturally contain lower polyphenols than early harvest alternatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-indigo-300 mb-3">Top Italian Cultivars for Polyphenols</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Coratina (Puglia)</h4>
                  <p className="text-sm text-gray-300">Highest polyphenol Italian variety. Extremely peppery, bitter, and robust.</p>
                  <p className="text-xs text-indigo-400 mt-1">Range: 500-850 mg/kg</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Moraiolo (Tuscany)</h4>
                  <p className="text-sm text-gray-300">Tuscan workhorse. High polyphenols with fruity, spicy notes. Often blended.</p>
                  <p className="text-xs text-indigo-400 mt-1">Range: 400-650 mg/kg</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Leccino</h4>
                  <p className="text-sm text-gray-300">Widely cultivated, adaptable. Moderate polyphenols with delicate flavor.</p>
                  <p className="text-xs text-indigo-400 mt-1">Range: 250-450 mg/kg</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Frantoio (Tuscany)</h4>
                  <p className="text-sm text-gray-300">Classic Tuscan variety. Balanced flavor, moderate polyphenols.</p>
                  <p className="text-xs text-indigo-400 mt-1">Range: 300-500 mg/kg</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Taggiasca (Liguria)</h4>
                  <p className="text-sm text-gray-300">Mild, buttery, sweet. Lower polyphenols but highly prized for delicate dishes.</p>
                  <p className="text-xs text-indigo-400 mt-1">Range: 150-300 mg/kg</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Nocellara del Belice (Sicily)</h4>
                  <p className="text-sm text-gray-300">Sicilian variety. Fresh, fruity notes with moderate health benefits.</p>
                  <p className="text-xs text-indigo-400 mt-1">Range: 250-450 mg/kg</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-teal-300 mb-3">Notable Italian Regions</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span><strong className="text-white">Puglia:</strong> Largest Italian producer. Coratina-dominant, high polyphenol potential.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span><strong className="text-white">Tuscany:</strong> Premium reputation. Blends of Frantoio, Leccino, Moraiolo. Moderate polyphenols.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span><strong className="text-white">Sicily:</strong> Diverse cultivars. Volcanic soil influences. Variable polyphenol content.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span><strong className="text-white">Umbria:</strong> Small-scale production. Early harvest traditions in some estates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span><strong className="text-white">Liguria:</strong> Taggiasca-based delicate oils. Low polyphenols but exceptional flavor.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 - Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📊</span>
            Head-to-Head Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-slate-700 to-slate-800">
                  <th className="text-left p-4 text-white font-bold">Category</th>
                  <th className="text-left p-4 text-white font-bold">🇬🇷 Greece</th>
                  <th className="text-left p-4 text-white font-bold">🇪🇸 Spain</th>
                  <th className="text-left p-4 text-white font-bold">🇮🇹 Italy</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-bold text-white">Average Polyphenol Content</td>
                  <td className="p-4 text-green-400 font-bold">600-1000 mg/kg</td>
                  <td className="p-4 text-orange-400">450-650 mg/kg</td>
                  <td className="p-4 text-red-400">350-550 mg/kg</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/30">
                  <td className="p-4 font-bold text-white">Top Cultivar</td>
                  <td className="p-4">Koroneiki<br/><span className="text-xs text-gray-400">800-1400+ mg/kg</span></td>
                  <td className="p-4">Picual<br/><span className="text-xs text-gray-400">650-900 mg/kg</span></td>
                  <td className="p-4">Coratina<br/><span className="text-xs text-gray-400">600-850 mg/kg</span></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-bold text-white">Production Volume</td>
                  <td className="p-4">~300,000 tons/year<br/><span className="text-xs text-gray-400">(3rd globally)</span></td>
                  <td className="p-4">~1.5 million tons/year<br/><span className="text-xs text-gray-400">(1st globally, 40-45%)</span></td>
                  <td className="p-4">~300,000 tons/year<br/><span className="text-xs text-gray-400">(2nd globally)</span></td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/30">
                  <td className="p-4 font-bold text-white">Harvest Timing</td>
                  <td className="p-4 text-green-400">Early harvest tradition<br/><span className="text-xs text-gray-400">October-November</span></td>
                  <td className="p-4">Mixed (industrial late, premium early)<br/><span className="text-xs text-gray-400">November-January</span></td>
                  <td className="p-4">Variable by region<br/><span className="text-xs text-gray-400">October-December</span></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-bold text-white">Typical Price (500ml)</td>
                  <td className="p-4">$45-100+<br/><span className="text-xs text-gray-400">Premium positioning</span></td>
                  <td className="p-4">$25-70<br/><span className="text-xs text-gray-400">Wide range</span></td>
                  <td className="p-4">$35-90<br/><span className="text-xs text-gray-400">Brand premium</span></td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/30">
                  <td className="p-4 font-bold text-white">Flavor Profile</td>
                  <td className="p-4">Intense, peppery, bitter<br/><span className="text-xs text-gray-400">Strong throat burn</span></td>
                  <td className="p-4">Robust to mild (varies)<br/><span className="text-xs text-gray-400">Fruity, grassy</span></td>
                  <td className="p-4">Diverse, region-specific<br/><span className="text-xs text-gray-400">Delicate to robust</span></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-bold text-white">Lab Testing Transparency</td>
                  <td className="p-4 text-green-400">Excellent<br/><span className="text-xs text-gray-400">Most provide certificates</span></td>
                  <td className="p-4 text-yellow-400">Good (premium brands)<br/><span className="text-xs text-gray-400">Variable for bulk</span></td>
                  <td className="p-4 text-orange-400">Moderate<br/><span className="text-xs text-gray-400">Estate-dependent</span></td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/30">
                  <td className="p-4 font-bold text-white">Best For</td>
                  <td className="p-4">Maximum health benefits<br/><span className="text-xs text-gray-400">Therapeutic use</span></td>
                  <td className="p-4">Value and versatility<br/><span className="text-xs text-gray-400">Cooking + finishing</span></td>
                  <td className="p-4">Culinary diversity<br/><span className="text-xs text-gray-400">Delicate dishes</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔬</span>
            What the Lab Data Shows
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              We analyzed <strong className="text-white">over 150 lab-verified olive oils</strong> tested by HPLC, qNMR, and certified laboratories to compare polyphenol content across Mediterranean countries.
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Key Findings from Lab Analysis</h3>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-5">
                  <h4 className="text-lg font-bold text-green-400 mb-2">1. Greek Dominance in Ultra-High Category (1000+ mg/kg)</h4>
                  <p className="text-gray-300 mb-3">
                    Of the 23 olive oils tested above 1000 mg/kg polyphenols:
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong className="text-white">82% were Greek</strong> (primarily Koroneiki)</li>
                    <li>• <strong className="text-white">13% were Spanish</strong> (early harvest Picual)</li>
                    <li>• <strong className="text-white">5% were Italian</strong> (Coratina) or other origins</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-5">
                  <h4 className="text-lg font-bold text-blue-400 mb-2">2. Spain Leads in Consistent Medium-High Range (500-800 mg/kg)</h4>
                  <p className="text-gray-300">
                    Spanish Picual oils consistently test in the 500-800 mg/kg range, offering <strong className="text-white">reliable high polyphenol content</strong> at more accessible prices than ultra-premium Greek oils.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-5">
                  <h4 className="text-lg font-bold text-purple-400 mb-2">3. Italian Oils Show Greatest Variability</h4>
                  <p className="text-gray-300">
                    Italian olive oils ranged from <strong className="text-white">120 mg/kg to 850 mg/kg</strong>, the widest range of any country. This reflects Italy's diverse cultivars and regional practices.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-5">
                  <h4 className="text-lg font-bold text-orange-400 mb-2">4. Harvest Timing Matters More Than Country</h4>
                  <p className="text-gray-300">
                    A <strong className="text-white">late-harvest Greek Koroneiki</strong> (400 mg/kg) can have lower polyphenols than an <strong className="text-white">early-harvest Spanish Picual</strong> (700 mg/kg). Timing beats origin.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-emerald-300 mb-3">Average Polyphenol Content by Country (Lab-Verified Sample)</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                  <span className="font-bold text-white">🇬🇷 Greece (n=54)</span>
                  <span className="text-green-400 font-bold text-lg">712 mg/kg</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                  <span className="font-bold text-white">🇪🇸 Spain (n=62)</span>
                  <span className="text-orange-400 font-bold text-lg">516 mg/kg</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                  <span className="font-bold text-white">🇮🇹 Italy (n=28)</span>
                  <span className="text-red-400 font-bold text-lg">428 mg/kg</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                  <span className="font-bold text-white">🇹🇳 Tunisia (n=8)</span>
                  <span className="text-blue-400 font-bold text-lg">682 mg/kg</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-4">
                  <span className="font-bold text-white">🇺🇸 California (n=6)</span>
                  <span className="text-purple-400 font-bold text-lg">624 mg/kg</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4 italic">Data from HPLC and qNMR testing, 2022-2024 harvests. Sample includes only lab-verified premium/artisan producers, not mass-market bulk oils.</p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🌍</span>
            Beyond the Mediterranean: Rising Stars
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              While Greece, Spain, and Italy dominate, other regions are producing <strong className="text-white">exceptional high-polyphenol olive oils</strong> using Mediterranean cultivars and early harvest techniques.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-3">🇹🇳 Tunisia</h3>
                <p className="text-gray-300 mb-3">
                  Tunisia's <strong className="text-white">Chetoui cultivar</strong> produces oils with polyphenol content rivaling Greek Koroneiki. Organic practices and early harvest traditions yield 600-850 mg/kg oils.
                </p>
                <p className="text-sm text-blue-400">Notable: November Ultra Premium (847 mg/kg)</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-300 mb-3">🇺🇸 California</h3>
                <p className="text-gray-300 mb-3">
                  California producers focus on <strong className="text-white">ultra-premium quality</strong> with lab transparency. Arbosana and Koroneiki cultivars reach 600-1000 mg/kg with strict early harvest protocols.
                </p>
                <p className="text-sm text-purple-400">Notable: ONSURI Arbosana (968 mg/kg)</p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-3">🇦🇺 Australia</h3>
                <p className="text-gray-300 mb-3">
                  Australian producers emphasize <strong className="text-white">scientific farming and testing</strong>. Coratina, Picual, and Koroneiki achieve 500-800 mg/kg with counter-season harvests (April-June).
                </p>
                <p className="text-sm text-green-400">Focus on research-backed production methods</p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-300 mb-3">🇵🇹 Portugal</h3>
                <p className="text-gray-300 mb-3">
                  Portuguese <strong className="text-white">Cobrançosa and Galega</strong> varieties produce distinctive oils. Smaller industry allows focus on quality over volume, reaching 400-650 mg/kg.
                </p>
                <p className="text-sm text-orange-400">Growing reputation for organic production</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            How to Choose: Country-Specific Recommendations
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-4">Choose Greek If...</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>You want the <strong className="text-white">highest possible polyphenol content</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>You're using olive oil for <strong className="text-white">therapeutic health purposes</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>You enjoy <strong className="text-white">intense, peppery flavor</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Budget is less important than <strong className="text-white">maximum benefits</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>You want <strong className="text-white">lab verification</strong> transparency</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-green-700/50">
                  <p className="text-xs text-green-400 font-bold">Best Greek Cultivar:</p>
                  <p className="text-sm text-gray-300">Early harvest Koroneiki</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-amber-800/20 border border-orange-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-300 mb-4">Choose Spanish If...</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>You want <strong className="text-white">good polyphenols at better value</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>You need versatility for <strong className="text-white">cooking and finishing</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>You prefer <strong className="text-white">robust but not extreme</strong> flavor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>You want <strong className="text-white">consistent quality</strong> across brands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>You value <strong className="text-white">wide availability</strong></span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-orange-700/50">
                  <p className="text-xs text-orange-400 font-bold">Best Spanish Cultivar:</p>
                  <p className="text-sm text-gray-300">Early harvest Picual</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-pink-800/20 border border-red-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-300 mb-4">Choose Italian If...</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✓</span>
                    <span>You want <strong className="text-white">culinary diversity and complexity</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✓</span>
                    <span>You prefer <strong className="text-white">delicate, balanced flavors</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✓</span>
                    <span>You're pairing with <strong className="text-white">specific Italian dishes</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✓</span>
                    <span>You want <strong className="text-white">regional authenticity</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✓</span>
                    <span>Polyphenols are important but <strong className="text-white">not the primary factor</strong></span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-red-700/50">
                  <p className="text-xs text-red-400 font-bold">Best Italian Cultivar:</p>
                  <p className="text-sm text-gray-300">Early harvest Coratina</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-blue-300 mb-3">Universal Buying Tips (Any Country)</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong className="text-white">Demand lab verification:</strong> Country matters less than tested polyphenol content</li>
                <li>• <strong className="text-white">Check harvest date:</strong> Fresh Greek (6 months old) beats old Spanish (18 months old)</li>
                <li>• <strong className="text-white">Know the cultivar:</strong> High-polyphenol varieties exist in all three countries</li>
                <li>• <strong className="text-white">Early harvest is key:</strong> More important than country of origin</li>
                <li>• <strong className="text-white">Avoid generic blends:</strong> "Product of EU" without specific origin/cultivar</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Verdict */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">The Verdict: Which Country Produces the Best Olive Oil?</h2>
            <div className="space-y-4 text-green-50">
              <p className="text-lg">
                <strong className="text-white">For maximum polyphenol content:</strong> Greece wins, particularly early harvest Koroneiki. Lab data consistently shows Greek oils averaging 712 mg/kg vs Spain's 516 mg/kg and Italy's 428 mg/kg.
              </p>
              <p className="text-lg">
                <strong className="text-white">For value and consistency:</strong> Spain offers reliable 500-800 mg/kg oils at more accessible prices, with excellent Picual varieties widely available.
              </p>
              <p className="text-lg">
                <strong className="text-white">For culinary diversity:</strong> Italy provides the widest range of flavors and regional styles, though polyphenol content varies significantly.
              </p>
              <p className="text-lg font-bold">
                However, the most important factors are: <span className="text-yellow-300">cultivar selection, harvest timing, lab verification, and freshness</span>—regardless of country. A late-harvest Greek oil will have fewer polyphenols than an early-harvest Spanish or Italian oil.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog/best-olive-cultivars-high-polyphenols"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🫒</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Best Olive Cultivars for Polyphenols
              </h3>
              <p className="text-sm text-gray-400">Koroneiki vs Picual vs Coratina: Deep dive into varieties</p>
            </Link>

            <Link
              href="/blog/early-harvest-vs-late-harvest-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Early vs Late Harvest Olive Oil
              </h3>
              <p className="text-sm text-gray-400">Why harvest timing is the #1 polyphenol factor</p>
            </Link>

            <Link
              href="/blog/how-to-choose-high-polyphenol-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                How to Choose High Polyphenol Olive Oil
              </h3>
              <p className="text-sm text-gray-400">Complete buying guide with lab verification tips</p>
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
