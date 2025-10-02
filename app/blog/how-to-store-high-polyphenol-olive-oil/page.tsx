import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Store High Polyphenol Olive Oil (Prevent Oxidation) 2024',
  description: 'Complete guide to storing high polyphenol EVOO. Learn why polyphenols degrade 46% per year with poor storage, optimal temperature, light protection, container choices, and shelf life tips to preserve health benefits.',
  keywords: 'olive oil storage, EVOO shelf life, prevent oxidation polyphenols, how to store olive oil, olive oil degradation, preserve polyphenols, best olive oil container',
  openGraph: {
    title: 'How to Store High Polyphenol Olive Oil - Prevent 46% Annual Degradation',
    description: 'Science-backed storage methods to preserve polyphenols and prevent oxidation in extra virgin olive oil.',
    type: 'article',
  }
}

export default function StorageGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">How to Store High Polyphenol Olive Oil</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-bold rounded-full">
              Storage Guide
            </span>
            <span className="text-gray-500 text-sm">📖 11 min read</span>
            <span className="text-gray-500 text-sm">📅 Oct 2, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            How to Store High Polyphenol Olive Oil (Prevent Oxidation)
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            You spent $80 on premium high-polyphenol olive oil—don't let poor storage destroy its health benefits. Learn the science-backed methods to prevent the 46% annual polyphenol degradation and extend shelf life to maximize your investment.
          </p>
        </header>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Store High Polyphenol Olive Oil (Prevent Oxidation)",
              "datePublished": "2024-10-02",
              "dateModified": "2024-10-02",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "description": "Complete guide to storing high polyphenol extra virgin olive oil to prevent oxidation and preserve health benefits."
            })
          }}
        />

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 border border-red-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">⚠️</span>
            Critical: Polyphenol Degradation Facts
          </h2>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <span className="text-red-400 font-bold">📉</span>
              <span><strong className="text-white">46% loss per year:</strong> Polyphenols degrade 40-46% annually under typical storage conditions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">🌡️</span>
              <span><strong className="text-white">Temperature matters most:</strong> Every 10°C above 20°C doubles oxidation rate</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">💡</span>
              <span><strong className="text-white">Light destroys polyphenols:</strong> UV exposure can reduce content by 30% in just 3 months</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">🫙</span>
              <span><strong className="text-white">Oxygen is the enemy:</strong> Half-empty bottles oxidize 3x faster than full bottles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong className="text-white">Proper storage preserves:</strong> Optimal conditions maintain 80-90% of polyphenols for 12-18 months</span>
            </li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔬</span>
            The Science: Why Polyphenols Degrade
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Polyphenols are <strong className="text-white">highly reactive antioxidant compounds</strong>. The same properties that make them beneficial for human health also make them vulnerable to degradation through oxidation, heat, and light exposure.
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">The Three Enemies of Polyphenols</h3>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg flex items-center gap-2">
                    <span className="text-2xl">🫧</span>
                    1. Oxygen (Oxidation)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    When olive oil is exposed to oxygen, polyphenols act as <strong className="text-white">sacrificial antioxidants</strong>, oxidizing themselves to protect the oil's fatty acids. This is their job—but it means they get "used up" over time.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <p className="text-sm text-blue-300 font-bold mb-2">Oxidation Impact:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Sealed bottle: <strong className="text-white">~15-20% loss per year</strong></li>
                      <li>• Opened bottle (50% full): <strong className="text-white">~30-40% loss per year</strong></li>
                      <li>• Opened bottle (25% full): <strong className="text-white">~50-60% loss per year</strong></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 text-lg flex items-center gap-2">
                    <span className="text-2xl">🌡️</span>
                    2. Heat (Thermal Degradation)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    High temperatures accelerate chemical reactions. The <strong className="text-white">Arrhenius equation</strong> shows that reaction rates approximately double for every 10°C increase above optimal temperature.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <p className="text-sm text-orange-300 font-bold mb-2">Temperature Effects:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 14-18°C (57-64°F): <strong className="text-white">Optimal</strong> - minimal degradation</li>
                      <li>• 20-25°C (68-77°F): <strong className="text-white">Acceptable</strong> - moderate degradation</li>
                      <li>• 25-30°C (77-86°F): <strong className="text-white">Poor</strong> - 2x degradation rate</li>
                      <li>• 30°C+ (86°F+): <strong className="text-white">Destructive</strong> - 4x+ degradation rate</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 text-lg flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    3. Light (Photo-Oxidation)
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong className="text-white">UV and visible light</strong> trigger photo-oxidation reactions that break down polyphenols and create off-flavors. Clear glass bottles on store shelves can lose 30% of polyphenols in 3 months.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <p className="text-sm text-yellow-300 font-bold mb-2">Light Exposure Impact:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Direct sunlight: <strong className="text-white">Catastrophic</strong> - 40-50% loss in 1 month</li>
                      <li>• Bright indoor light: <strong className="text-white">Severe</strong> - 25-30% loss in 3 months</li>
                      <li>• Normal indoor light (clear glass): <strong className="text-white">Moderate</strong> - 15-20% loss in 6 months</li>
                      <li>• Dark storage (dark glass): <strong className="text-white">Minimal</strong> - &lt;5% loss in 12 months</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-red-400">Research Finding:</strong> A 2019 study in the <em>European Journal of Lipid Science and Technology</em> found that olive oil stored in clear glass at room temperature with moderate light exposure lost <strong className="text-white">46% of total polyphenols after 12 months</strong>, compared to only 18% loss when stored in dark glass at 15°C.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🏺</span>
            Container Choice: Dark Glass vs Tin vs Plastic
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              The container you store olive oil in is <strong className="text-white">critical</strong> for preserving polyphenol content. Not all bottles are created equal.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-6">
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-800/30 border-2 border-green-600/50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🏆</div>
                  <h3 className="text-xl font-bold text-green-300">Dark Glass</h3>
                  <p className="text-sm text-green-400 font-bold">BEST CHOICE</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-green-300 mb-1">✓ PROS:</p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Blocks 99% of UV light (dark green/brown)</li>
                      <li>• Inert material (no chemical interaction)</li>
                      <li>• Easy to clean and reuse</li>
                      <li>• Clear visibility when checking oil level</li>
                      <li>• Premium appearance</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-300 mb-1">✗ CONS:</p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Heavier and more fragile</li>
                      <li>• More expensive</li>
                      <li>• Can still allow some visible light</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-green-700/50">
                  <p className="text-xs text-green-400"><strong>Best for:</strong> Long-term storage, premium oils, daily use bottles</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 border-2 border-blue-600/50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🥈</div>
                  <h3 className="text-xl font-bold text-blue-300">Tin/Steel</h3>
                  <p className="text-sm text-blue-400 font-bold">EXCELLENT</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-green-300 mb-1">✓ PROS:</p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Blocks 100% of light (complete protection)</li>
                      <li>• Lightweight and unbreakable</li>
                      <li>• Excellent for bulk storage</li>
                      <li>• Often nitrogen-flushed at packaging</li>
                      <li>• Protects during shipping</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-300 mb-1">✗ CONS:</p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Can't see oil level</li>
                      <li>• Awkward pouring</li>
                      <li>• Should transfer to glass for daily use</li>
                      <li>• Rare risk of interior coating degradation</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-700/50">
                  <p className="text-xs text-blue-400"><strong>Best for:</strong> Bulk purchase storage, unopened reserves</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/40 to-red-800/30 border-2 border-red-600/50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">❌</div>
                  <h3 className="text-xl font-bold text-red-300">Clear Glass/Plastic</h3>
                  <p className="text-sm text-red-400 font-bold">AVOID</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-green-300 mb-1">✓ PROS:</p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Cheap and widely available</li>
                      <li>• Plastic is unbreakable</li>
                      <li>• Clear visibility</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-300 mb-1">✗ CONS:</p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Zero UV/light protection</li>
                      <li>• Plastic can leach chemicals into oil</li>
                      <li>• Plastic is oxygen-permeable</li>
                      <li>• Used for cheap, mass-market oils</li>
                      <li>• Accelerates polyphenol degradation</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-red-700/50">
                  <p className="text-xs text-red-400"><strong>Verdict:</strong> Never store high-polyphenol EVOO in clear or plastic containers</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-purple-300 mb-3">Pro Storage Hack: The Two-Bottle System</h3>
              <p className="text-gray-300 mb-4">
                Professional chefs and olive oil enthusiasts use a <strong className="text-white">two-bottle approach</strong> to minimize oxidation:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">🏺 Storage Bottle (Large)</h4>
                  <p className="text-sm text-gray-300">Keep the original large bottle (500-750ml) sealed in a cool, dark place. Open only to refill the daily use bottle.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">🫙 Daily Use Bottle (Small)</h4>
                  <p className="text-sm text-gray-300">Transfer 100-150ml to a small dark glass bottle with a pouring spout. Keep in kitchen cabinet, use within 2-3 weeks.</p>
                </div>
              </div>
              <p className="text-sm text-purple-300 mt-4">
                <strong>Benefit:</strong> This minimizes oxygen exposure in the main storage bottle while providing convenient access for cooking.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🌡️</span>
            Optimal Storage Temperature and Location
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Temperature is the <strong className="text-white">most important factor</strong> you can control in home storage. Even a few degrees make a significant difference in polyphenol preservation.
            </p>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6 my-6">
              <h3 className="text-2xl font-bold text-green-300 mb-4">Ideal Temperature Ranges</h3>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/30 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-emerald-300 mb-2">🌟 Optimal: 14-18°C (57-64°F)</h4>
                  <p className="text-sm text-gray-300">
                    Professional storage temperature. Preserves 85-95% of polyphenols for 18-24 months. Requires wine cooler, cellar, or climate-controlled storage.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-900/40 to-green-800/30 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-green-300 mb-2">✓ Good: 18-21°C (64-70°F)</h4>
                  <p className="text-sm text-gray-300">
                    Achievable in most homes (cool pantry, basement). Preserves 70-80% of polyphenols for 12-18 months. Acceptable for most users.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/30 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-yellow-300 mb-2">⚠️ Acceptable: 21-25°C (70-77°F)</h4>
                  <p className="text-sm text-gray-300">
                    Room temperature. Preserves 60-70% of polyphenols for 9-12 months. Use within 6-9 months of opening for best results.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-900/40 to-orange-800/30 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-orange-300 mb-2">❌ Poor: 25-30°C (77-86°F)</h4>
                  <p className="text-sm text-gray-300">
                    Warm kitchen, above stove. Preserves only 40-50% of polyphenols for 6-9 months. Degradation accelerates rapidly.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-900/40 to-red-800/30 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-red-300 mb-2">🔥 Destructive: 30°C+ (86°F+)</h4>
                  <p className="text-sm text-gray-300">
                    Near heat sources, hot attic, car trunk. Preserves &lt;30% of polyphenols. Rancidity develops quickly. Avoid completely.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Where to Store (and Where NOT to Store)</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                    <span>✓</span>
                    <span>GOOD Storage Locations</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Cool pantry/closet:</strong> Away from kitchen heat, consistent temperature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Lower kitchen cabinet:</strong> Floor-level stays cooler, avoid above-counter heat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Basement:</strong> Naturally cool and dark, ideal for long-term storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Wine cooler/cellar:</strong> Perfect temperature control (14-18°C)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span><strong className="text-white">Back of drawer:</strong> Protected from light and temperature fluctuations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                    <span>✗</span>
                    <span>BAD Storage Locations</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span><strong className="text-white">Above/next to stove:</strong> Heat from cooking accelerates degradation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span><strong className="text-white">Window sill:</strong> Direct sunlight and temperature fluctuations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span><strong className="text-white">Countertop (in light):</strong> Constant light exposure, ambient heat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span><strong className="text-white">Near oven/dishwasher:</strong> Radiant heat from appliances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span><strong className="text-white">Refrigerator (long-term):</strong> Condensation risk, solidification, off-flavors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span><strong className="text-white">Garage/attic:</strong> Extreme temperature fluctuations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-blue-400">Pro Tip:</strong> Use a small thermometer in your storage location. If the area consistently exceeds 22°C (72°F), find a cooler spot. Even a 3-5°C reduction significantly extends shelf life.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⏰</span>
            Shelf Life and Freshness Guidelines
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Even with perfect storage, olive oil polyphenols degrade over time. Understanding realistic timelines helps you <strong className="text-white">maximize health benefits</strong> and avoid consuming degraded oil.
            </p>

            <div className="bg-gradient-to-br from-orange-900/30 to-amber-800/20 border border-orange-700/40 rounded-xl p-6 my-6">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">Shelf Life Timeline (From Harvest Date)</h3>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-emerald-300 text-lg">0-6 Months: Peak Quality</h4>
                    <span className="text-emerald-400 font-bold text-2xl">★★★★★</span>
                  </div>
                  <p className="text-gray-300 mb-2">
                    Freshest period. Polyphenol content at or near lab-tested values. Maximum health benefits, intense flavor, strong throat burn.
                  </p>
                  <p className="text-sm text-emerald-400">
                    <strong>Recommended:</strong> Consume within this window for therapeutic use and maximum anti-inflammatory effects.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-green-300 text-lg">6-12 Months: Excellent Quality</h4>
                    <span className="text-green-400 font-bold text-2xl">★★★★☆</span>
                  </div>
                  <p className="text-gray-300 mb-2">
                    Retains 70-85% of original polyphenols (with good storage). Still provides significant health benefits. Flavor remains vibrant.
                  </p>
                  <p className="text-sm text-green-400">
                    <strong>Recommended:</strong> Ideal for daily finishing use, salads, and raw consumption. Still highly beneficial.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-yellow-300 text-lg">12-18 Months: Good Quality</h4>
                    <span className="text-yellow-400 font-bold text-2xl">★★★☆☆</span>
                  </div>
                  <p className="text-gray-300 mb-2">
                    Retains 50-70% of original polyphenols. Moderate health benefits remain. Flavor becomes milder, less peppery.
                  </p>
                  <p className="text-sm text-yellow-400">
                    <strong>Recommended:</strong> Use for low-heat cooking, dressings. Still acceptable but not optimal for health focus.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-orange-300 text-lg">18-24 Months: Declining Quality</h4>
                    <span className="text-orange-400 font-bold text-2xl">★★☆☆☆</span>
                  </div>
                  <p className="text-gray-300 mb-2">
                    Retains 30-50% of original polyphenols. Reduced health benefits. May develop flat or slightly rancid notes.
                  </p>
                  <p className="text-sm text-orange-400">
                    <strong>Caution:</strong> Use for cooking only. Not recommended for health-focused consumption.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-red-300 text-lg">24+ Months: Poor Quality</h4>
                    <span className="text-red-400 font-bold text-2xl">★☆☆☆☆</span>
                  </div>
                  <p className="text-gray-300 mb-2">
                    Retains &lt;30% of original polyphenols. Minimal health benefits. Likely rancid or musty. Unpleasant flavor.
                  </p>
                  <p className="text-sm text-red-400">
                    <strong>Recommendation:</strong> Discard. Not worth consuming for health or culinary purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-purple-300 mb-3">After Opening: Use-By Guidelines</h3>
              <p className="text-gray-300 mb-4">
                Once opened, olive oil oxidizes faster due to oxygen exposure. Follow these timelines from opening date:
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                  <span><strong className="text-white">Optimal use-by:</strong> 1-2 months after opening</span>
                  <span className="text-green-400 font-bold">Best</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                  <span><strong className="text-white">Good use-by:</strong> 2-3 months after opening</span>
                  <span className="text-yellow-400 font-bold">Good</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                  <span><strong className="text-white">Acceptable use-by:</strong> 3-6 months after opening</span>
                  <span className="text-orange-400 font-bold">Okay</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                  <span><strong className="text-white">Avoid after:</strong> 6+ months from opening</span>
                  <span className="text-red-400 font-bold">Discard</span>
                </div>
              </div>
              <p className="text-sm text-purple-300 mt-4">
                <strong>Tip:</strong> Write the opening date on the bottle with a marker to track freshness.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">👃</span>
            How to Tell If Your Olive Oil Has Gone Bad
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Recognizing rancid or degraded olive oil protects you from consuming oxidized fats and ensures you're getting the <strong className="text-white">health benefits you paid for</strong>.
            </p>

            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">Signs of Rancid or Degraded Olive Oil</h3>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-xl">👃</span>
                    Smell Test
                  </h4>
                  <p className="text-sm text-gray-300 mb-2"><strong className="text-red-400">Bad signs:</strong></p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong className="text-white">Crayons or putty:</strong> Classic rancidity smell (oxidized fats)</li>
                    <li>• <strong className="text-white">Musty/moldy:</strong> Poor quality olives or fermentation defects</li>
                    <li>• <strong className="text-white">Vinegar/wine-like:</strong> Fermentation, bacterial contamination</li>
                    <li>• <strong className="text-white">Metallic:</strong> Contact with metal or advanced oxidation</li>
                    <li>• <strong className="text-white">No aroma:</strong> Severely degraded or refined (no polyphenols)</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-xl">👅</span>
                    Taste Test
                  </h4>
                  <p className="text-sm text-gray-300 mb-2"><strong className="text-red-400">Bad signs:</strong></p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong className="text-white">Greasy/flat:</strong> Stale mouthfeel, lacks freshness</li>
                    <li>• <strong className="text-white">Rancid/off flavor:</strong> Unpleasant, waxy, or cardboard-like</li>
                    <li>• <strong className="text-white">No peppery sensation:</strong> Polyphenols have degraded significantly</li>
                    <li>• <strong className="text-white">No bitterness:</strong> Sign of lost polyphenol content</li>
                    <li>• <strong className="text-white">Sour or fermented taste:</strong> Defective olives or processing</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-xl">👁️</span>
                    Visual Check
                  </h4>
                  <p className="text-sm text-gray-300 mb-2"><strong className="text-yellow-400">Caution signs:</strong></p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong className="text-white">Cloudy or hazy:</strong> May indicate water contamination (check for mold)</li>
                    <li>• <strong className="text-white">Sediment at bottom:</strong> Natural in unfiltered oils, but excessive may indicate poor handling</li>
                    <li>• <strong className="text-white">Color fading:</strong> Fresh oils are vibrant green/gold; faded color suggests age</li>
                  </ul>
                  <p className="text-xs text-gray-400 mt-2 italic">Note: Color alone is not a reliable indicator of quality or rancidity.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-green-300 mb-3">What Fresh, High-Polyphenol EVOO Should Taste/Smell Like</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Aroma:</strong> Fresh-cut grass, green tomato, artichoke, herbs, fruity notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Taste:</strong> Complex, fruity, slightly bitter (pleasant, not harsh)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Throat sensation:</strong> Peppery burn/tingle that makes you cough (oleocanthal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Mouthfeel:</strong> Clean, not greasy. Leaves palate refreshed.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💡</span>
            Advanced Storage Tips and Hacks
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">🫙 Nitrogen Flushing</h3>
                <p className="text-sm text-gray-300 mb-3">
                  Some premium producers flush bottles with nitrogen gas before sealing, displacing oxygen. If you have access to food-grade nitrogen (homebrewers often do), you can flush partially empty bottles to reduce oxidation.
                </p>
                <p className="text-xs text-blue-400">Advanced technique for serious collectors</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3">🍷 Wine Preserver Sprays</h3>
                <p className="text-sm text-gray-300 mb-3">
                  Argon or nitrogen-based wine preservers (like Private Preserve) can be used to create an oxygen barrier on top of olive oil in partially empty bottles. Spray before sealing.
                </p>
                <p className="text-xs text-purple-400">Affordable option for home use (~$10)</p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">📦 Vacuum-Sealed Storage</h3>
                <p className="text-sm text-gray-300 mb-3">
                  Transfer oil to smaller bottles as you use it, minimizing headspace. Some enthusiasts use vacuum sealers on flexible containers, though this is impractical for liquids.
                </p>
                <p className="text-xs text-green-400">Focus on reducing bottle size instead</p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-700/40 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-300 mb-3">🎁 Buy Smaller Bottles</h3>
                <p className="text-sm text-gray-300 mb-3">
                  Instead of one 500ml bottle, buy two 250ml bottles. Keep one sealed while using the other. This ensures minimal oxygen exposure and maintains freshness longer.
                </p>
                <p className="text-xs text-orange-400">Simple and highly effective strategy</p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-700/40 rounded-xl p-6">
                <h3 className="text-lg font-bold text-pink-300 mb-3">🏷️ Label Everything</h3>
                <p className="text-sm text-gray-300 mb-3">
                  Use masking tape to mark the opening date on every bottle. Also note the harvest date if not already on the label. This prevents consuming degraded oil unknowingly.
                </p>
                <p className="text-xs text-pink-400">Low-tech but essential habit</p>
              </div>

              <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-700/40 rounded-xl p-6">
                <h3 className="text-lg font-bold text-teal-300 mb-3">📊 Track Inventory</h3>
                <p className="text-sm text-gray-300 mb-3">
                  If you buy multiple bottles, create a simple spreadsheet tracking harvest dates, opening dates, and estimated expiration. Use oldest bottles first (FIFO: First In, First Out).
                </p>
                <p className="text-xs text-teal-400">For bulk buyers and enthusiasts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Storage Checklist: Maximize Your Investment</h2>
            <p className="text-green-50 mb-6">
              You paid premium prices for high polyphenol olive oil—protect your investment with these essential storage practices:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Store in dark glass or tin containers only</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Keep in cool location (14-21°C / 57-70°F)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Protect from all light sources (cabinet/pantry)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Use two-bottle system (storage + daily use)</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Seal tightly after every use (minimize oxygen)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Consume within 6-12 months of harvest</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Label opening dates to track freshness</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">Smell and taste regularly to detect degradation</span>
                </div>
              </div>
            </div>
            <p className="text-green-50 mt-6 text-sm italic">
              Following these guidelines can preserve 80-90% of polyphenols for 12+ months, vs only 50-60% with typical storage.
            </p>
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
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                How to Choose High Polyphenol Olive Oil
              </h3>
              <p className="text-sm text-gray-400">Complete buying guide with lab verification criteria</p>
            </Link>

            <Link
              href="/blog/early-harvest-vs-late-harvest-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Early vs Late Harvest Olive Oil
              </h3>
              <p className="text-sm text-gray-400">Why harvest timing affects polyphenol content by 2-3x</p>
            </Link>

            <Link
              href="/blog/what-are-polyphenols-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🧬</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                What Are Polyphenols in Olive Oil?
              </h3>
              <p className="text-sm text-gray-400">Complete guide to polyphenol types and health benefits</p>
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
