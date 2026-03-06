import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'Best Olive Cultivars for High Polyphenols: Koroneiki vs Picual vs Coratina',
  description: 'Compare olive varieties by polyphenol content. Discover which cultivars produce the healthiest oil: Koroneiki, Picual, Coratina, Arbequina, Chetoui, or Arbosana.',
  keywords: 'koroneiki olive oil polyphenols, picual olive variety, coratina EVOO, best olive cultivar health, arbequina vs koroneiki, olive varieties polyphenol content',
  openGraph: {
    title: 'Best Olive Cultivars for High Polyphenols - Complete Comparison',
    description: 'Which olive variety produces the most polyphenols? Koroneiki vs Picual vs Coratina comparison',
    type: 'article',
  }
}

export default function CultivarsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Best Olive Cultivars</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-bold rounded-full">
              Research
            </span>
            <span className="text-gray-500 text-sm">📖 9 min read</span>
            <span className="text-gray-500 text-sm">📅 Sep 22, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Best Olive Cultivars for High Polyphenols
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
            Koroneiki vs Picual vs Coratina: Complete Comparison
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            Not all olive varieties produce the same polyphenol levels. Genetics matter. Here's your complete guide to choosing cultivars that deliver maximum health benefits.
          </p>
        </header>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Best Olive Cultivars for High Polyphenols: Koroneiki vs Picual vs Coratina",
              "datePublished": "2024-09-22",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              }
            })
          }}
        />

        {/* Rankings Summary */}
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            Cultivar Rankings by Polyphenol Content
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 border-2 border-yellow-500 rounded-xl p-6 text-center">
              <div className="text-5xl mb-2">🥇</div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-2">Koroneiki</h3>
              <div className="text-3xl font-bold text-white mb-1">600-1000+</div>
              <div className="text-sm text-gray-300 mb-3">mg/kg typical range</div>
              <div className="text-xs text-yellow-200">Greece • Small fruit • Intense flavor</div>
            </div>
            <div className="bg-gradient-to-br from-gray-600/20 to-gray-500/10 border-2 border-gray-400 rounded-xl p-6 text-center">
              <div className="text-5xl mb-2">🥈</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">Picual</h3>
              <div className="text-3xl font-bold text-white mb-1">500-900</div>
              <div className="text-sm text-gray-300 mb-3">mg/kg typical range</div>
              <div className="text-xs text-gray-200">Spain • Robust • High oleic acid</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600/20 to-orange-500/10 border-2 border-orange-500 rounded-xl p-6 text-center">
              <div className="text-5xl mb-2">🥉</div>
              <h3 className="text-2xl font-bold text-orange-300 mb-2">Coratina</h3>
              <div className="text-3xl font-bold text-white mb-1">500-850</div>
              <div className="text-sm text-gray-300 mb-3">mg/kg typical range</div>
              <div className="text-xs text-orange-200">Italy • Peppery • Oleocanthal-rich</div>
            </div>
          </div>
        </div>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        {/* Section 1: Koroneiki */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🇬🇷</span>
            1. Koroneiki: The Polyphenol Champion
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              If you're seeking maximum polyphenol content, <strong className="text-white">Koroneiki is your cultivar</strong>. This Greek variety consistently outperforms all others in independent lab testing.
            </p>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">Why Koroneiki Leads</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Genetic Advantage</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Naturally high in hydroxytyrosol and tyrosol</li>
                    <li>• Elevated oleocanthal production</li>
                    <li>• Resistant to polyphenol degradation</li>
                    <li>• Small fruit with high skin-to-flesh ratio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Environmental Factors</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Thrives in Greek microclimate</li>
                    <li>• Stress conditions boost polyphenols</li>
                    <li>• Early harvest tradition in Greece</li>
                    <li>• High-altitude groves common</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-blue-300 mb-3">Lab-Verified Examples</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-white">SP360 Organic (Messenia, Greece)</div>
                    <div className="text-2xl font-bold text-green-400">1462 mg/kg</div>
                  </div>
                  <div className="text-gray-400">HPLC tested • Early October harvest • Single estate</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-white">Pamako Premium (Messinia, Greece)</div>
                    <div className="text-2xl font-bold text-green-400">1222 mg/kg</div>
                  </div>
                  <div className="text-gray-400">HPLC tested • 100% Koroneiki • Certified organic</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-white">PJ KABOS (Kalamata, Greece)</div>
                    <div className="text-2xl font-bold text-green-400">858 mg/kg</div>
                  </div>
                  <div className="text-gray-400">qNMR tested • Ultra-premium • Award-winning</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-white mb-2">Flavor Profile</h4>
              <p className="text-sm text-gray-300 mb-3">
                Koroneiki produces intensely flavored oil with pronounced bitterness and peppery finish. Expect notes of:
              </p>
              <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-300">
                <div>🌿 Fresh cut grass</div>
                <div>🌶️ Black pepper</div>
                <div>🍃 Artichoke</div>
                <div>🫒 Green olive</div>
                <div>🥬 Arugula</div>
                <div>🌰 Almond</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Picual */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🇪🇸</span>
            2. Picual: Spain's Polyphenol Powerhouse
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Spain's most widely cultivated variety, <strong className="text-white">Picual combines high polyphenols with exceptional oxidative stability</strong>, making it ideal for both health and culinary applications.
            </p>

            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-amber-300 mb-4">Picual Strengths</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Polyphenol Composition</h4>
                  <p className="text-sm text-gray-300">Particularly high in oleocanthal and oleuropein derivatives. Early harvest Picual rivals Koroneiki in total polyphenol content (500-900 mg/kg).</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Oxidative Stability</h4>
                  <p className="text-sm text-gray-300">Among the highest in oleic acid (~80%) combined with polyphenols creates exceptional shelf life. Resists rancidity better than most cultivars.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Versatility</h4>
                  <p className="text-sm text-gray-300">More balanced flavor than Koroneiki—robust yet not overwhelmingly bitter. Works well raw and in moderate-heat cooking.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-orange-300 mb-3">Lab-Verified Picual EVOOs</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-white">Vallesur (Andalusia, Spain)</div>
                    <div className="text-2xl font-bold text-amber-400">554 mg/kg</div>
                  </div>
                  <div className="text-gray-400">RSS tested • Protected Origin • High oleocanthal</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-white">Castillo de Canena Picual Reserve</div>
                    <div className="text-2xl font-bold text-amber-400">~650 mg/kg</div>
                  </div>
                  <div className="text-gray-400">Early harvest • Single estate • Award-winning producer</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-white mb-2">Flavor Profile</h4>
              <p className="text-sm text-gray-300 mb-3">
                Picual delivers robust, slightly fruity oil with pronounced bitterness and strong peppery finish:
              </p>
              <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-300">
                <div>🍅 Green tomato</div>
                <div>🌰 Fig</div>
                <div>🌿 Herbs</div>
                <div>🌶️ White pepper</div>
                <div>🥒 Cucumber</div>
                <div>🌳 Wood</div>
              </div>
            </div>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        {/* Section 3: Coratina */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🇮🇹</span>
            3. Coratina: The Oleocanthal Specialist
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              An Italian cultivar from Puglia, <strong className="text-white">Coratina is legendary for its intense peppery bite</strong>—a telltale sign of exceptional oleocanthal content.
            </p>

            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">Coratina Characteristics</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Oleocanthal Dominance</h4>
                  <p className="text-sm text-gray-300">Coratina produces some of the highest oleocanthal levels (the anti-inflammatory polyphenol) among all cultivars. The throat-burning sensation is unmistakable.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Total Polyphenol Content</h4>
                  <p className="text-sm text-gray-300">Ranges 500-850 mg/kg when early harvested. Australian producers using Coratina often achieve 700+ mg/kg due to optimal growing conditions.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Oxidative Resistance</h4>
                  <p className="text-sm text-gray-300">Excellent shelf life due to high polyphenol content acting as natural preservatives. Can maintain quality for 18+ months with proper storage.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-purple-300 mb-3">Notable Coratina Producers</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">🇦🇺 Australian Coratina</div>
                  <p className="text-gray-300">Australian producers have mastered Coratina cultivation. Cobram Estate, Red Island, and Boundary Bend produce consistently high polyphenol Coratina EVOOs (600-800 mg/kg range).</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">🇮🇹 Italian Puglia Coratina</div>
                  <p className="text-gray-300">Traditional Italian Coratina from Puglia region. Intense, robust oils with PDO (Protected Designation of Origin) certification. Typically 500-700 mg/kg.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-white mb-2">Flavor Profile</h4>
              <p className="text-sm text-gray-300 mb-3">
                The most aggressive flavor profile—not for the faint of heart. Expect:
              </p>
              <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-300">
                <div>🌶️ Intense pepper</div>
                <div>🌿 Fresh herbs</div>
                <div>🍃 Bitter greens</div>
                <div>🥬 Radicchio</div>
                <div>🌰 Green almond</div>
                <div>🔥 Strong throat burn</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Other Notable Cultivars */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🫒</span>
            4. Other High-Polyphenol Cultivars
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-teal-300 mb-3">🇹🇳 Chetoui (Tunisia)</h3>
                <div className="text-lg font-bold text-white mb-2">600-850 mg/kg</div>
                <p className="text-sm text-gray-300 mb-3">
                  Tunisia's premium cultivar gaining global recognition. Early harvest Chetoui rivals Mediterranean classics in polyphenol content.
                </p>
                <div className="text-sm text-gray-400">
                  <strong className="text-white">Notable:</strong> November Ultra Premium (Tunisia) - 847 mg/kg HPLC tested
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-3">🇺🇸 Arbosana (California)</h3>
                <div className="text-lg font-bold text-white mb-2">500-950 mg/kg</div>
                <p className="text-sm text-gray-300 mb-3">
                  Spanish cultivar thriving in California. Super-high-density cultivation in California produces exceptional polyphenol levels.
                </p>
                <div className="text-sm text-gray-400">
                  <strong className="text-white">Notable:</strong> ONSURI Arbosana (California) - 968 mg/kg qNMR tested
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-300 mb-3">🇮🇹 Moraiolo (Tuscany)</h3>
                <div className="text-lg font-bold text-white mb-2">450-750 mg/kg</div>
                <p className="text-sm text-gray-300 mb-3">
                  Tuscan variety known for fruity complexity and solid polyphenol content. Often blended with Frantoio and Leccino in Italian premium blends.
                </p>
                <div className="text-sm text-gray-400">
                  Peppery finish, artichoke notes, high in oleocanthal
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-3">🇪🇸 Hojiblanca (Spain)</h3>
                <div className="text-lg font-bold text-white mb-2">350-600 mg/kg</div>
                <p className="text-sm text-gray-300 mb-3">
                  Balanced Spanish variety—moderate polyphenols but exceptional flavor complexity. Popular in Andalusian blends.
                </p>
                <div className="text-sm text-gray-400">
                  Sweet, almondy, less bitter than Picual
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Lower Polyphenol Cultivars */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⚠️</span>
            5. Lower Polyphenol Cultivars (Still Quality, But Not Optimal for Health)
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              These cultivars produce excellent culinary oils but typically have lower polyphenol content. If health benefits are your priority, choose the cultivars above.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">Arbequina (Spain/California)</h3>
                <div className="text-lg font-bold text-white mb-2">200-400 mg/kg</div>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>Mild, buttery, low bitterness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>Popular for mass production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>Good for cooking, not optimal for health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>Shorter shelf life than high-polyphenol cultivars</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-300 mb-3">Frantoio (Italy/California)</h3>
                <div className="text-lg font-bold text-white mb-2">300-500 mg/kg</div>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">•</span>
                    <span>Classic Italian flavor, balanced</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">•</span>
                    <span>Polyphenols vary widely by harvest timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">•</span>
                    <span>Early harvest can reach 500+ mg/kg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">•</span>
                    <span>Often blended with Moraiolo or Leccino</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="bg-gray-800/50 border-l-4 border-yellow-500 p-4 rounded-r-lg text-sm italic">
              <strong className="text-yellow-400">Note:</strong> Even "low polyphenol" cultivars like Arbequina (200-400 mg/kg) can meet the EU health claim threshold (250 mg/kg minimum). However, for maximum therapeutic benefits, target 500+ mg/kg cultivars.
            </p>
          </div>
        </section>

        {/* Section 6: Choosing Your Cultivar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            6. How to Choose: Your Polyphenol Strategy
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border-2 border-green-600 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-3">Maximum Health Benefits</h3>
                <p className="text-sm text-gray-300 mb-3"><strong className="text-white">Goal:</strong> Therapeutic polyphenol intake</p>
                <div className="text-sm text-gray-300 space-y-2">
                  <div><strong className="text-white">Choose:</strong> Koroneiki, early harvest Picual, or Arbosana</div>
                  <div><strong className="text-white">Target:</strong> 800+ mg/kg</div>
                  <div><strong className="text-white">Usage:</strong> Raw consumption (salads, finishing drizzle)</div>
                  <div><strong className="text-white">Expect:</strong> Intense bitterness, strong pepper</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-600 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-3">Balance: Health + Flavor</h3>
                <p className="text-sm text-gray-300 mb-3"><strong className="text-white">Goal:</strong> Solid polyphenols with versatility</p>
                <div className="text-sm text-gray-300 space-y-2">
                  <div><strong className="text-white">Choose:</strong> Picual, Coratina, or Chetoui</div>
                  <div><strong className="text-white">Target:</strong> 500-700 mg/kg</div>
                  <div><strong className="text-white">Usage:</strong> Raw + moderate cooking</div>
                  <div><strong className="text-white">Expect:</strong> Robust but balanced flavor</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-600 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-300 mb-3">Culinary Focus</h3>
                <p className="text-sm text-gray-300 mb-3"><strong className="text-white">Goal:</strong> Flavor-first with some health benefits</p>
                <div className="text-sm text-gray-300 space-y-2">
                  <div><strong className="text-white">Choose:</strong> Frantoio, Hojiblanca, or blends</div>
                  <div><strong className="text-white">Target:</strong> 300-500 mg/kg</div>
                  <div><strong className="text-white">Usage:</strong> All cooking applications</div>
                  <div><strong className="text-white">Expect:</strong> Mild to moderate flavor</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-amber-300 mb-3">🔍 Single Cultivar vs Blend</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Single Cultivar Advantages</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>✓ Know exactly what you're getting</li>
                    <li>✓ Consistent polyphenol profile</li>
                    <li>✓ Easier to compare lab results</li>
                    <li>✓ Traceability and transparency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Blend Advantages</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>✓ Balanced flavor complexity</li>
                    <li>✓ Year-to-year consistency</li>
                    <li>✓ Can combine strengths (e.g., Picual stability + Koroneiki polyphenols)</li>
                    <li>✓ Often more affordable</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-4 italic border-l-2 border-amber-500 pl-3">
                For health purposes, single cultivar high-polyphenol EVOOs are preferable because you can verify exact polyphenol content. Quality blends can work if the producer provides lab testing for the specific blend.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">The Cultivar Bottom Line</h2>
            <p className="text-green-50 text-lg mb-4">
              Cultivar choice matters—a lot. <strong>Koroneiki, Picual, and Coratina</strong> are your top picks for maximum polyphenol content. Look for early harvest, single-cultivar EVOOs with lab verification.
            </p>
            <p className="text-green-50 text-lg mb-6">
              Don't settle for generic "Mediterranean blend" oils with no cultivar disclosure. Demand transparency, seek named cultivars, and verify with lab testing.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-xl"
            >
              <span>View Rankings by Cultivar</span>
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
              <p className="text-sm text-gray-400">Expert buying guide: labels, certifications, and red flags</p>
            </Link>

            <Link
              href="/blog/greek-vs-italian-vs-spanish-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Greek vs Italian vs Spanish Olive Oil
              </h3>
              <p className="text-sm text-gray-400">Compare Mediterranean regions by polyphenol content</p>
            </Link>

            <Link
              href="/blog/early-harvest-vs-late-harvest-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Early vs Late Harvest Polyphenol Differences
              </h3>
              <p className="text-sm text-gray-400">Why harvest timing can double or halve polyphenol content</p>
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
