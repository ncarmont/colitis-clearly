import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'Best Olive Oil for Cooking: Smoke Point, Heat Stability & Safety (2024)',
  description: 'Debunking smoke point myths: Why high polyphenol EVOO is actually the best oil for cooking. Science-backed guide to heat stability, frying safety, and best uses.',
  keywords: 'best olive oil for cooking, EVOO smoke point, cooking with olive oil, frying with olive oil, heat stability, olive oil high heat',
  openGraph: {
    title: 'Best Olive Oil for Cooking: Smoke Point & Heat Stability',
    description: 'Science-backed guide to cooking with olive oil safely',
    type: 'article',
  }
}

export default function CookingOliveOilPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Best Olive Oil for Cooking</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-orange-600 to-red-500 text-white text-sm font-bold rounded-full">
              Cooking
            </span>
            <span className="text-gray-500 text-sm">13 min read</span>
            <span className="text-gray-500 text-sm">Oct 2, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Best Olive Oil for Cooking: Smoke Point Myths Debunked
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Contrary to popular belief, high polyphenol extra virgin olive oil is one of the most heat-stable cooking oils. Here's what the science actually says about smoke points, oxidation, and safety.
          </p>
        </header>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Best Olive Oil for Cooking: Smoke Point & Heat Stability",
              "datePublished": "2024-10-02",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "description": "Science-backed guide to cooking with olive oil safely"
            })
          }}
        />

        {/* Quick Summary */}
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">🍳</span>
            Key Takeaways
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">Smoke point is overrated</strong>—oxidative stability matters more</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">EVOO is safest for frying</strong> among all cooking oils (Australian study)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">Polyphenols protect oil</strong> from heat degradation</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">Safe up to 190°C (374°F)</strong> for extended cooking</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">Better than seed oils</strong> for high-heat cooking</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">High polyphenol EVOO best</strong>—more heat-resistant</span>
            </div>
          </div>
        </div>

        {/* The Smoke Point Myth */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔥</span>
            The Smoke Point Myth: Why You've Been Misled
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              For decades, we've been told: "Don't cook with olive oil—it has a low smoke point." This advice is not only wrong, it's dangerously misleading.
            </p>

            <div className="bg-gradient-to-br from-red-900/30 to-orange-800/20 border border-red-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">What They Say vs. What Science Shows</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-bold text-red-300 mb-2">❌ The Myth</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    "EVOO has a low smoke point (160°C/320°F), so it breaks down at high heat. Use refined oils like canola or grapeseed for cooking."
                  </p>
                  <p className="text-xs text-gray-400 italic">
                    Source: Food blogs, cooking shows, even some nutrition websites
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-300 mb-2">✓ The Science</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    EVOO smoke point is 190-207°C (374-405°F) for quality oils. More importantly, oxidative stability (resistance to degradation) is what matters—and EVOO wins.
                  </p>
                  <p className="text-xs text-gray-400 italic">
                    Source: Peer-reviewed studies, food chemistry research
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Why Smoke Point Doesn't Tell the Whole Story</h3>
              <p className="text-blue-50 mb-3">
                Smoke point is simply the temperature at which an oil visibly smokes. It's not a measure of safety or health. Here's what actually matters:
              </p>
              <ul className="text-blue-50 space-y-2">
                <li>• <strong>Oxidative stability:</strong> How well oil resists forming harmful compounds under heat</li>
                <li>• <strong>Polar compound formation:</strong> Toxic byproducts created during frying</li>
                <li>• <strong>Polyunsaturated fat ratio:</strong> Higher PUFA = more oxidation</li>
                <li>• <strong>Antioxidant content:</strong> Polyphenols protect oil from degradation</li>
              </ul>
            </div>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        {/* The Australian Study */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔬</span>
            The Australian Frying Study: EVOO Wins
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              In 2018, Australian researchers compared 10 cooking oils under realistic frying conditions. The results shocked the culinary world.
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Study Design</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• <strong className="text-white">10 oils tested:</strong> EVOO, virgin olive, refined olive, canola, grapeseed, coconut, avocado, peanut, rice bran, sunflower</li>
                <li>• <strong className="text-white">Temperature:</strong> 180°C (356°F) — typical frying temp</li>
                <li>• <strong className="text-white">Duration:</strong> 6 hours continuous heating</li>
                <li>• <strong className="text-white">Measurements:</strong> Polar compounds, oxidation products, smoke point</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">Results: Oxidative Stability Ranking</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-yellow-900/20 border border-yellow-700/40 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-yellow-400">🥇</span>
                    <span className="font-bold text-white">Extra Virgin Olive Oil</span>
                  </div>
                  <span className="text-sm text-green-400">Most Stable</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-400">2.</span>
                    <span className="text-white">Coconut Oil</span>
                  </div>
                  <span className="text-sm text-gray-400">Very Stable</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-400">3.</span>
                    <span className="text-white">Refined Olive Oil</span>
                  </div>
                  <span className="text-sm text-gray-400">Stable</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-400">4-6.</span>
                    <span className="text-white">Avocado, Peanut, Rice Bran</span>
                  </div>
                  <span className="text-sm text-gray-400">Moderate</span>
                </div>
                <div className="flex items-center justify-between bg-red-900/20 border border-red-700/40 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-red-400">7-10.</span>
                    <span className="text-white">Grapeseed, Sunflower, Canola</span>
                  </div>
                  <span className="text-sm text-red-400">Least Stable</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-gray-300">
                <strong className="text-white">Key finding:</strong> Despite having the lowest smoke point of oils tested, EVOO produced the fewest harmful polar compounds and oxidation products—making it the <strong className="text-white">safest oil for frying</strong>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Why EVOO Outperformed</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-white mb-2">1. High Polyphenol Content</h4>
                  <p className="text-sm text-gray-300">Antioxidants in EVOO neutralize free radicals that cause oxidation. The higher the polyphenols, the better the protection.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">2. Low Polyunsaturated Fat</h4>
                  <p className="text-sm text-gray-300">EVOO is 73% monounsaturated (oleic acid), which is much more stable than polyunsaturated fats in seed oils.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">3. Natural Tocopherols (Vitamin E)</h4>
                  <p className="text-sm text-gray-300">Additional antioxidants that work synergistically with polyphenols to prevent oxidation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smoke Point Facts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🌡️</span>
            Actual Smoke Points: The Real Numbers
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              The "160°C/320°F" smoke point cited for EVOO is outdated and inaccurate. Quality EVOO has a smoke point well above typical cooking temperatures.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 font-bold text-white">Oil Type</th>
                    <th className="text-left py-3 px-4 font-bold text-white">Smoke Point</th>
                    <th className="text-left py-3 px-4 font-bold text-white">Oxidative Stability</th>
                    <th className="text-left py-3 px-4 font-bold text-white">Best Use</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800 bg-green-900/10">
                    <td className="py-3 px-4 font-semibold">Extra Virgin Olive Oil</td>
                    <td className="py-3 px-4">190-207°C (374-405°F)</td>
                    <td className="py-3 px-4 text-green-400 font-bold">Excellent</td>
                    <td className="py-3 px-4">All cooking</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Refined Olive Oil</td>
                    <td className="py-3 px-4">220-242°C (428-468°F)</td>
                    <td className="py-3 px-4 text-blue-400">Good</td>
                    <td className="py-3 px-4">High heat (no polyphenols)</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Avocado Oil</td>
                    <td className="py-3 px-4">270°C (520°F)</td>
                    <td className="py-3 px-4 text-blue-400">Good</td>
                    <td className="py-3 px-4">Very high heat</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Coconut Oil</td>
                    <td className="py-3 px-4">177°C (350°F)</td>
                    <td className="py-3 px-4 text-green-400">Very Good</td>
                    <td className="py-3 px-4">Medium heat</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Canola Oil</td>
                    <td className="py-3 px-4">204°C (400°F)</td>
                    <td className="py-3 px-4 text-red-400">Poor</td>
                    <td className="py-3 px-4">Avoid frying</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Grapeseed Oil</td>
                    <td className="py-3 px-4">216°C (420°F)</td>
                    <td className="py-3 px-4 text-red-400">Poor</td>
                    <td className="py-3 px-4">Avoid frying</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Sunflower Oil</td>
                    <td className="py-3 px-4">227°C (440°F)</td>
                    <td className="py-3 px-4 text-red-400">Poor</td>
                    <td className="py-3 px-4">Avoid frying</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-orange-800/20 border border-amber-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-300 mb-3">Common Cooking Temperatures for Reference</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• <strong className="text-white">Sautéing:</strong> 120-150°C (250-300°F)</li>
                <li>• <strong className="text-white">Pan frying:</strong> 160-180°C (320-350°F)</li>
                <li>• <strong className="text-white">Deep frying:</strong> 175-190°C (350-375°F)</li>
                <li>• <strong className="text-white">Baking:</strong> 160-230°C (325-450°F)</li>
                <li>• <strong className="text-white">Roasting:</strong> 200-230°C (400-450°F)</li>
              </ul>
              <p className="text-sm text-gray-300 mt-4 italic">
                EVOO's smoke point (190-207°C) comfortably exceeds all typical cooking temperatures except very high-heat roasting.
              </p>
            </div>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        {/* Best Uses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">👨‍🍳</span>
            Best Uses for High Polyphenol EVOO
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border-l-4 border-green-500 rounded-r-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-3">✓ Excellent For</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <strong className="text-white">Raw/Finishing</strong>
                    <p className="text-sm mt-1">Preserves 100% of polyphenols. Salad dressings, drizzling, dipping.</p>
                  </li>
                  <li>
                    <strong className="text-white">Sautéing</strong>
                    <p className="text-sm mt-1">Low-medium heat (120-160°C). Perfect for vegetables, garlic, onions.</p>
                  </li>
                  <li>
                    <strong className="text-white">Pan Frying</strong>
                    <p className="text-sm mt-1">Medium heat (160-180°C). Chicken, fish, eggs safe and delicious.</p>
                  </li>
                  <li>
                    <strong className="text-white">Baking</strong>
                    <p className="text-sm mt-1">Up to 190°C. Substitute for butter/oil in cakes, breads.</p>
                  </li>
                  <li>
                    <strong className="text-white">Roasting</strong>
                    <p className="text-sm mt-1">Up to 200°C. Vegetables, potatoes, moderate-temp roasting.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-red-800/20 border-l-4 border-orange-500 rounded-r-xl p-6">
                <h3 className="text-xl font-bold text-orange-300 mb-3">⚠ Use Caution</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <strong className="text-white">Deep Frying</strong>
                    <p className="text-sm mt-1">While EVOO is safest, it's expensive for deep frying. Use refined olive oil or save premium EVOO for other uses.</p>
                  </li>
                  <li>
                    <strong className="text-white">Very High Heat Roasting</strong>
                    <p className="text-sm mt-1">Above 220°C (428°F), some polyphenol degradation occurs. Still safe, but not optimal.</p>
                  </li>
                  <li>
                    <strong className="text-white">Wok Cooking</strong>
                    <p className="text-sm mt-1">Traditional wok cooking reaches 250°C+. Consider refined olive or avocado oil for extreme heat.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Pro Tips for Cooking with EVOO</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">Don't wait for oil to smoke:</strong> Heat oil on medium, add food when it shimmers</li>
                <li>• <strong className="text-white">Higher polyphenols = more heat protection:</strong> Use premium EVOO for cooking too</li>
                <li>• <strong className="text-white">Reuse minimally:</strong> Polyphenols degrade with repeated heating (unlike oxidation resistance)</li>
                <li>• <strong className="text-white">Add food before oil overheats:</strong> Food cools oil temperature, preventing degradation</li>
                <li>• <strong className="text-white">Combine with spices:</strong> Turmeric, garlic add additional antioxidant protection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Oils for Cooking */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🏆</span>
            Best High Polyphenol Oils for Cooking
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              For cooking, choose robust, high-polyphenol oils that can handle heat while maintaining stability:
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-1">Vallesur (Spain)</h3>
                <p className="text-gray-400 mb-3">Picual • 554 mg/kg • Robust Flavor</p>
                <p className="text-gray-300 mb-3">
                  Spanish Picual variety is naturally high in polyphenols and handles heat excellently. Robust, peppery flavor complements cooked dishes.
                </p>
                <Link href="/" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                  View in Rankings →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-1">ONSURI Arbosana</h3>
                <p className="text-gray-400 mb-3">California • 968 mg/kg • Fruity & Peppery</p>
                <p className="text-gray-300 mb-3">
                  Very high polyphenols provide excellent heat protection. Fruity notes work well in both raw and cooked applications.
                </p>
                <Link href="/" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                  View in Rankings →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-1">SP360 Organic</h3>
                <p className="text-gray-400 mb-3">Greece • 1462 mg/kg • Intense Peppery</p>
                <p className="text-gray-300 mb-3">
                  Highest polyphenol content provides maximum oxidative resistance. Premium choice for health-focused cooking.
                </p>
                <Link href="/" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                  View in Rankings →
                </Link>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-500 transition-all mt-4"
            >
              <span>Browse All High Polyphenol Oils</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">The Bottom Line on Cooking with Olive Oil</h2>
            <div className="text-orange-50 text-lg leading-relaxed space-y-4">
              <p>
                The smoke point myth has led millions to cook with unstable seed oils while avoiding one of the healthiest, most heat-stable fats available. Science is clear: high polyphenol EVOO is excellent for cooking.
              </p>
              <p>
                <strong>Key recommendations:</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Use EVOO for everyday cooking up to 190°C (375°F)</li>
                <li>• Higher polyphenols = better heat protection</li>
                <li>• Avoid refined seed oils (canola, grapeseed, sunflower) for frying</li>
                <li>• Don't fear the smoke—EVOO is safest when it matters</li>
                <li>• Reserve ultra-premium oils for raw use, but mid-tier EVOO is great for cooking</li>
              </ul>
              <p className="pt-2">
                Cook with confidence: High polyphenol EVOO isn't just safe for cooking—it's the best choice for your health.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-xl mt-6"
            >
              <span>View Cooking-Friendly Oils</span>
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
              href="/blog/olive-oil-vs-other-oils"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Olive Oil vs Other Oils
              </h3>
              <p className="text-sm text-gray-400">Complete comparison of cooking oils</p>
            </Link>

            <Link
              href="/blog/how-to-store-high-polyphenol-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                How to Store Olive Oil
              </h3>
              <p className="text-sm text-gray-400">Preserving polyphenols and freshness</p>
            </Link>

            <Link
              href="/blog/top-10-highest-polyphenol-olive-oils"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Top 10 Highest Polyphenol Oils
              </h3>
              <p className="text-sm text-gray-400">Lab-verified rankings and reviews</p>
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
