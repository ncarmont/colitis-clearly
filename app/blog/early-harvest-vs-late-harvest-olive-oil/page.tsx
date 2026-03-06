import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'Early Harvest vs Late Harvest Olive Oil: Polyphenol Differences 2024',
  description: 'Early harvest olive oil contains 2-3x more polyphenols than late harvest. Learn harvest months by region, taste differences, yield trade-offs, and why timing is the #1 factor for health benefits.',
  keywords: 'early harvest olive oil, late harvest polyphenols, harvest timing EVOO, green harvest olive oil, when to harvest olives, polyphenol timing',
  openGraph: {
    title: 'Early vs Late Harvest Olive Oil: 2-3x More Polyphenols',
    description: 'Why harvest timing is the single most important factor for polyphenol content in extra virgin olive oil.',
    type: 'article',
  }
}

export default function EarlyVsLateHarvestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Early vs Late Harvest Olive Oil</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm font-bold rounded-full">
              Production Guide
            </span>
            <span className="text-gray-500 text-sm">📖 12 min read</span>
            <span className="text-gray-500 text-sm">📅 Oct 2, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Early Harvest vs Late Harvest Olive Oil: Polyphenol Differences
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            The difference between October and December harvest can mean 600 mg/kg vs 250 mg/kg polyphenols from the exact same olive grove. Discover why harvest timing trumps everything else—including country of origin and cultivar.
          </p>
        </header>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Early Harvest vs Late Harvest Olive Oil: Polyphenol Differences",
              "datePublished": "2024-10-02",
              "dateModified": "2024-10-02",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "description": "Comprehensive guide to how harvest timing affects polyphenol content in extra virgin olive oil."
            })
          }}
        />

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/20 border border-emerald-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            Key Findings: Harvest Timing Impact
          </h2>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold">🟢</span>
              <span><strong className="text-white">Early harvest (green olives):</strong> 600-1400+ mg/kg polyphenols • Intense, peppery • Lower yield • October harvest</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">🟡</span>
              <span><strong className="text-white">Mid-season (turning olives):</strong> 400-700 mg/kg polyphenols • Balanced flavor • Moderate yield • November harvest</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">🟣</span>
              <span><strong className="text-white">Late harvest (ripe olives):</strong> 150-400 mg/kg polyphenols • Mild, buttery • Maximum yield • December-January</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 font-bold">📉</span>
              <span><strong className="text-white">Polyphenol decline:</strong> 40-50% decrease per month of delayed harvest • Biggest quality factor</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">💰</span>
              <span><strong className="text-white">Trade-off:</strong> Early harvest = 30-50% less oil volume but 2-3x higher polyphenols and premium pricing</span>
            </li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🌿</span>
            The Science: Why Harvest Timing Matters Most
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Of all factors affecting polyphenol content—cultivar, climate, soil, processing—<strong className="text-white">harvest timing is the most significant</strong>. The same olive tree can produce oil with 1000 mg/kg in October or 300 mg/kg in December.
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">The Olive Ripening Process</h3>

              <p className="text-gray-300 mb-4">
                As olives ripen on the tree, they undergo dramatic physiological changes that directly impact polyphenol concentration:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-5">
                  <h4 className="font-bold text-emerald-300 mb-2 text-lg">🟢 Green Stage (Early Harvest)</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    <strong className="text-white">Ripeness:</strong> 0-15% color change • Hard, unripe fruit
                  </p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• <strong className="text-white">Polyphenol function:</strong> Olives produce maximum polyphenols as defense mechanism against pests, oxidation, and UV damage</li>
                    <li>• <strong className="text-white">Oil content:</strong> 15-18% (lower) • Tree prioritizes fruit protection over oil accumulation</li>
                    <li>• <strong className="text-white">Chlorophyll levels:</strong> Very high • Creates vibrant green color and grassy aroma</li>
                    <li>• <strong className="text-white">Polyphenol range:</strong> 800-1400+ mg/kg (peak concentration)</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-5">
                  <h4 className="font-bold text-yellow-300 mb-2 text-lg">🟡 Turning Stage (Mid-Season)</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    <strong className="text-white">Ripeness:</strong> 15-50% color change • Purple-green mottled fruit
                  </p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• <strong className="text-white">Polyphenol decline begins:</strong> Defense compounds naturally degrade as fruit ripens</li>
                    <li>• <strong className="text-white">Oil content:</strong> 18-22% (increasing) • Better yield but lower polyphenol concentration</li>
                    <li>• <strong className="text-white">Flavor transition:</strong> Less bitter/peppery, more balanced and fruity</li>
                    <li>• <strong className="text-white">Polyphenol range:</strong> 500-800 mg/kg (moderate)</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-5">
                  <h4 className="font-bold text-purple-300 mb-2 text-lg">🟣 Purple-Black Stage (Late Harvest)</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    <strong className="text-white">Ripeness:</strong> 50-100% color change • Fully ripe to overripe
                  </p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• <strong className="text-white">Polyphenol degradation:</strong> Enzymatic breakdown accelerates • Protective compounds no longer needed</li>
                    <li>• <strong className="text-white">Oil content:</strong> 22-28% (maximum) • Highest yield per olive</li>
                    <li>• <strong className="text-white">Flavor profile:</strong> Mild, buttery, sweet • Minimal bitterness or peppery notes</li>
                    <li>• <strong className="text-white">Polyphenol range:</strong> 150-450 mg/kg (significantly reduced)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-emerald-400">Research Data:</strong> A 2018 study in the <em>Journal of Agricultural and Food Chemistry</em> tracked the same Koroneiki grove over 12 weeks. Polyphenol content dropped from 1240 mg/kg (early October) to 680 mg/kg (mid-November) to 320 mg/kg (late December)—a <strong className="text-white">74% decline in just 12 weeks</strong>.
              </p>
            </div>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📊</span>
            Side-by-Side Comparison
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-slate-700 to-slate-800">
                  <th className="text-left p-4 text-white font-bold">Characteristic</th>
                  <th className="text-left p-4 text-white font-bold">🟢 Early Harvest</th>
                  <th className="text-left p-4 text-white font-bold">🟡 Mid-Season</th>
                  <th className="text-left p-4 text-white font-bold">🟣 Late Harvest</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-sm">
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-bold text-white">Polyphenol Content</td>
                  <td className="p-4 text-emerald-400 font-bold">600-1400+ mg/kg</td>
                  <td className="p-4 text-yellow-400">400-700 mg/kg</td>
                  <td className="p-4 text-purple-400">150-400 mg/kg</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/30">
                  <td className="p-4 font-bold text-white">Harvest Months<br/><span className="text-xs text-gray-400 font-normal">(Northern Hemisphere)</span></td>
                  <td className="p-4">October - early Nov</td>
                  <td className="p-4">Mid Nov - early Dec</td>
                  <td className="p-4">Dec - January</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-bold text-white">Olive Ripeness</td>
                  <td className="p-4">0-15% color change<br/>Green, hard</td>
                  <td className="p-4">15-50% change<br/>Purple-green</td>
                  <td className="p-4">50-100% change<br/>Black, soft</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/30">
                  <td className="p-4 font-bold text-white">Oil Yield</td>
                  <td className="p-4 text-red-400">15-18%<br/>⚠️ Lowest yield</td>
                  <td className="p-4">18-22%<br/>Moderate</td>
                  <td className="p-4 text-green-400">22-28%<br/>✓ Highest yield</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-bold text-white">Flavor Intensity</td>
                  <td className="p-4">Very intense<br/>Peppery, bitter</td>
                  <td className="p-4">Balanced<br/>Fruity, moderate</td>
                  <td className="p-4">Mild<br/>Buttery, sweet</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/30">
                  <td className="p-4 font-bold text-white">Throat Sensation</td>
                  <td className="p-4">Strong burn/cough<br/>High oleocanthal</td>
                  <td className="p-4">Moderate tingle<br/>Moderate oleocanthal</td>
                  <td className="p-4">Minimal to none<br/>Low oleocanthal</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-bold text-white">Color</td>
                  <td className="p-4">Vibrant green-gold<br/>High chlorophyll</td>
                  <td className="p-4">Golden-green<br/>Moderate chlorophyll</td>
                  <td className="p-4">Pale gold-yellow<br/>Low chlorophyll</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/30">
                  <td className="p-4 font-bold text-white">Shelf Life</td>
                  <td className="p-4 text-emerald-400">18-24 months<br/>✓ Best stability</td>
                  <td className="p-4">12-18 months<br/>Good stability</td>
                  <td className="p-4 text-red-400">9-12 months<br/>⚠️ Faster oxidation</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-bold text-white">Price (500ml)</td>
                  <td className="p-4">$50-120+<br/>Premium</td>
                  <td className="p-4">$30-60<br/>Mid-range</td>
                  <td className="p-4">$15-40<br/>Entry-level</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/30">
                  <td className="p-4 font-bold text-white">Best Uses</td>
                  <td className="p-4">Raw, finishing<br/>Therapeutic use</td>
                  <td className="p-4">Versatile<br/>Cooking + finishing</td>
                  <td className="p-4">Cooking<br/>Baking, frying</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-bold text-white">Health Benefits</td>
                  <td className="p-4 text-emerald-400">★★★★★<br/>Maximum</td>
                  <td className="p-4 text-yellow-400">★★★☆☆<br/>Good</td>
                  <td className="p-4 text-purple-400">★★☆☆☆<br/>Basic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🗓️</span>
            Harvest Timing by Region and Hemisphere
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Optimal harvest timing varies by <strong className="text-white">geography, climate, and cultivar</strong>. Understanding regional schedules helps you identify fresh, early harvest oils.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-4">🌍 Northern Hemisphere (Mediterranean)</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">🇬🇷 Greece</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <strong className="text-emerald-400">Early harvest:</strong> Early Oct - mid Nov</li>
                      <li>• <strong className="text-yellow-400">Mid-season:</strong> Mid Nov - early Dec</li>
                      <li>• <strong className="text-purple-400">Late harvest:</strong> Dec - January</li>
                      <li className="text-xs text-blue-300 mt-2">Peak polyphenols: October 15-30</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">🇪🇸 Spain</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <strong className="text-emerald-400">Early harvest:</strong> Mid Oct - late Nov</li>
                      <li>• <strong className="text-yellow-400">Mid-season:</strong> Late Nov - mid Dec</li>
                      <li>• <strong className="text-purple-400">Late harvest:</strong> Dec - February</li>
                      <li className="text-xs text-blue-300 mt-2">Peak polyphenols: November 1-15</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">🇮🇹 Italy</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <strong className="text-emerald-400">Early harvest:</strong> Mid Oct - mid Nov</li>
                      <li>• <strong className="text-yellow-400">Mid-season:</strong> Mid Nov - late Dec</li>
                      <li>• <strong className="text-purple-400">Late harvest:</strong> Late Dec - February</li>
                      <li className="text-xs text-blue-300 mt-2">Peak polyphenols: November 1-20 (varies by region)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">🇹🇳 Tunisia</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <strong className="text-emerald-400">Early harvest:</strong> Late Sep - mid Nov</li>
                      <li>• <strong className="text-yellow-400">Mid-season:</strong> Mid Nov - early Dec</li>
                      <li>• <strong className="text-purple-400">Late harvest:</strong> Dec - January</li>
                      <li className="text-xs text-blue-300 mt-2">Peak polyphenols: October 20 - November 5</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">🇺🇸 California</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <strong className="text-emerald-400">Early harvest:</strong> Late Oct - mid Nov</li>
                      <li>• <strong className="text-yellow-400">Mid-season:</strong> Mid Nov - late Dec</li>
                      <li>• <strong className="text-purple-400">Late harvest:</strong> Late Dec - January</li>
                      <li className="text-xs text-blue-300 mt-2">Peak polyphenols: November 1-20</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-4">🌏 Southern Hemisphere</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">🇦🇺 Australia</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <strong className="text-emerald-400">Early harvest:</strong> Late April - mid June</li>
                      <li>• <strong className="text-yellow-400">Mid-season:</strong> Mid June - late July</li>
                      <li>• <strong className="text-purple-400">Late harvest:</strong> Late July - August</li>
                      <li className="text-xs text-green-300 mt-2">Peak polyphenols: May 1-30</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">🇦🇷 Argentina</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <strong className="text-emerald-400">Early harvest:</strong> Mid April - late May</li>
                      <li>• <strong className="text-yellow-400">Mid-season:</strong> Late May - mid June</li>
                      <li>• <strong className="text-purple-400">Late harvest:</strong> Mid June - July</li>
                      <li className="text-xs text-green-300 mt-2">Peak polyphenols: May 1-20</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">🇨🇱 Chile</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <strong className="text-emerald-400">Early harvest:</strong> Late April - early June</li>
                      <li>• <strong className="text-yellow-400">Mid-season:</strong> Early June - late June</li>
                      <li>• <strong className="text-purple-400">Late harvest:</strong> Late June - July</li>
                      <li className="text-xs text-green-300 mt-2">Peak polyphenols: May 10-30</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">🇿🇦 South Africa</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <strong className="text-emerald-400">Early harvest:</strong> Late April - mid May</li>
                      <li>• <strong className="text-yellow-400">Mid-season:</strong> Mid May - early June</li>
                      <li>• <strong className="text-purple-400">Late harvest:</strong> Early June - July</li>
                      <li className="text-xs text-green-300 mt-2">Peak polyphenols: May 1-25</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-green-700/50">
                  <p className="text-xs text-green-300">
                    <strong>Advantage:</strong> Southern Hemisphere harvest (April-June) provides fresh oil when Northern Hemisphere oils (Oct-Dec harvest) are 6+ months old.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-blue-400">Pro Tip:</strong> When buying olive oil in August-September (Northern Hemisphere), consider Southern Hemisphere oils (harvested April-June) for maximum freshness. When buying in February-March, Northern Hemisphere oils (harvested Oct-Dec) are freshest.
              </p>
            </div>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⚖️</span>
            The Producer's Dilemma: Quality vs Yield
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Olive oil producers face a <strong className="text-white">fundamental economic trade-off</strong>: harvest early for maximum polyphenols, or wait for maximum oil yield and profit?
            </p>

            <div className="bg-gradient-to-br from-orange-900/30 to-amber-800/20 border border-orange-700/40 rounded-xl p-6 my-6">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">Economic Analysis: Early vs Late Harvest</h3>

              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-5">
                  <h4 className="font-bold text-emerald-300 mb-3 text-lg">🟢 Early Harvest Economics</h4>
                  <p className="text-sm text-gray-300 mb-3"><strong>Example:</strong> 1000kg of green olives harvested in October</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-white mb-2">Costs & Yield:</p>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Oil yield: 15-18% = <strong className="text-white">160 liters</strong></li>
                        <li>• Harvest cost: Higher (hand-picking, careful handling)</li>
                        <li>• Processing: Faster (fresher olives)</li>
                        <li>• Storage: Longer shelf life (less urgency)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-2">Revenue:</p>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Premium pricing: <strong className="text-white">$60-100/liter</strong></li>
                        <li>• Total revenue: <strong className="text-emerald-400">$9,600-16,000</strong></li>
                        <li>• Lab testing: $400 (justified by premium)</li>
                        <li>• Market: Health-conscious, connoisseurs</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-400 mt-4 pt-4 border-t border-emerald-700/50">
                    <strong>Profit strategy:</strong> Lower volume, higher margin. Requires premium market access and marketing investment.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-5">
                  <h4 className="font-bold text-purple-300 mb-3 text-lg">🟣 Late Harvest Economics</h4>
                  <p className="text-sm text-gray-300 mb-3"><strong>Example:</strong> 1000kg of ripe olives harvested in December</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-white mb-2">Costs & Yield:</p>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Oil yield: 24-28% = <strong className="text-white">260 liters</strong></li>
                        <li>• Harvest cost: Lower (mechanical, bulk)</li>
                        <li>• Processing: Standard (no rush)</li>
                        <li>• Storage: Shorter shelf life (faster turnover)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-2">Revenue:</p>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Standard pricing: <strong className="text-white">$25-40/liter</strong></li>
                        <li>• Total revenue: <strong className="text-purple-400">$6,500-10,400</strong></li>
                        <li>• Lab testing: Not required (cost savings)</li>
                        <li>• Market: Mass market, cooking oils</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-purple-400 mt-4 pt-4 border-t border-purple-700/50">
                    <strong>Profit strategy:</strong> Higher volume, lower margin. Reliable commodity market with predictable demand.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-orange-700/50">
                <h4 className="font-bold text-orange-300 mb-3">Why Many Producers Choose Late Harvest</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Guaranteed market:</strong> Bulk buyers and supermarkets always need supply</li>
                  <li>• <strong className="text-white">Lower risk:</strong> Don't need to find premium customers or educate market</li>
                  <li>• <strong className="text-white">Equipment efficiency:</strong> Mechanical harvesters work better on ripe fruit</li>
                  <li>• <strong className="text-white">Cash flow:</strong> Volume-based income is more predictable</li>
                  <li>• <strong className="text-white">No marketing needed:</strong> Commodity pricing, wholesale buyers</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-green-300 mb-3">When Early Harvest Makes Economic Sense</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Direct-to-consumer sales:</strong> Can capture full retail margin ($80-120/500ml)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Export markets:</strong> International premium markets pay 3-5x domestic bulk prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">PDO/PGI certification:</strong> Protected designation allows premium positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Brand building:</strong> Awards and recognition drive long-term value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong className="text-white">Health market:</strong> Growing segment willing to pay for verified health benefits</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">👅</span>
            Taste and Sensory Differences
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              The polyphenol differences between harvest timings create <strong className="text-white">dramatically different taste experiences</strong>. Understanding these helps you identify early harvest oils by taste alone.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-6">
              <div className="bg-gradient-to-br from-emerald-900/40 to-green-800/30 border-2 border-emerald-600/50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🟢</div>
                  <h3 className="text-xl font-bold text-emerald-300">Early Harvest</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-bold text-emerald-300 mb-1">Taste Profile:</p>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• Intensely peppery/spicy</li>
                      <li>• Pronounced bitterness</li>
                      <li>• Strong throat burn (cough-inducing)</li>
                      <li>• Green, herbaceous notes</li>
                      <li>• Fresh-cut grass, green tomato</li>
                      <li>• Artichoke, arugula</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-emerald-300 mb-1">Mouthfeel:</p>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• Robust, full-bodied</li>
                      <li>• Persistent finish</li>
                      <li>• Tingling sensation</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-emerald-700/50">
                    <p className="text-xs text-emerald-400"><strong>Best for:</strong> Drizzling, dipping bread, raw vegetables, grilled meat finishing</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/40 to-amber-800/30 border-2 border-yellow-600/50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🟡</div>
                  <h3 className="text-xl font-bold text-yellow-300">Mid-Season</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-bold text-yellow-300 mb-1">Taste Profile:</p>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• Moderate peppery notes</li>
                      <li>• Balanced bitterness</li>
                      <li>• Pleasant throat warmth</li>
                      <li>• Fruity complexity</li>
                      <li>• Green apple, almond</li>
                      <li>• Hints of herbs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-yellow-300 mb-1">Mouthfeel:</p>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• Medium-bodied</li>
                      <li>• Balanced finish</li>
                      <li>• Smooth texture</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-yellow-700/50">
                    <p className="text-xs text-yellow-400"><strong>Best for:</strong> Versatile use, salads, pasta, sautéing, everyday cooking</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-indigo-800/30 border-2 border-purple-600/50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🟣</div>
                  <h3 className="text-xl font-bold text-purple-300">Late Harvest</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-bold text-purple-300 mb-1">Taste Profile:</p>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• Minimal to no peppery notes</li>
                      <li>• Very mild bitterness</li>
                      <li>• No throat sensation</li>
                      <li>• Buttery, sweet notes</li>
                      <li>• Ripe fruit flavors</li>
                      <li>• Delicate, subtle</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-purple-300 mb-1">Mouthfeel:</p>
                    <ul className="text-gray-300 space-y-1 text-xs">
                      <li>• Light-bodied</li>
                      <li>• Soft, clean finish</li>
                      <li>• Smooth, no bite</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-purple-700/50">
                    <p className="text-xs text-purple-400"><strong>Best for:</strong> Baking, high-heat cooking, mild dishes, those avoiding strong flavors</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-green-400">Taste Test Tip:</strong> Take a tablespoon of oil, warm it in your cupped hands for 30 seconds, smell deeply, then sip and draw air through your teeth. Early harvest oil will make you cough within 3-5 seconds (oleocanthal). Late harvest won't cause any throat sensation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            How to Identify Early Harvest Oils
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              When shopping for high polyphenol olive oil, look for these <strong className="text-white">indicators of early harvest</strong>:
            </p>

            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-800/20 border border-cyan-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Label Clues</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-400 mb-2 text-sm">✓ Look For These Terms:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• "Early harvest" or "Early harvest oil"</li>
                    <li>• "Green harvest"</li>
                    <li>• "First harvest"</li>
                    <li>• "October harvest" (Northern Hemisphere)</li>
                    <li>• "May harvest" (Southern Hemisphere)</li>
                    <li>• "Unripe olives" or "Green olives"</li>
                    <li>• Specific harvest date in October/early November</li>
                    <li>• High polyphenol claim (500+ mg/kg with lab cert)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-400 mb-2 text-sm">✗ Warning Signs of Late Harvest:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• "Mild" or "Delicate" or "Light" flavor</li>
                    <li>• "Smooth" or "Buttery"</li>
                    <li>• December/January harvest date</li>
                    <li>• No harvest date shown (likely late harvest)</li>
                    <li>• Very cheap pricing ($15-20/500ml)</li>
                    <li>• Clear glass bottle (doesn't protect quality oils)</li>
                    <li>• "Perfect for baking"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">The Bottom Line: Harvest Timing Is Everything</h2>
            <div className="space-y-4 text-green-50">
              <p className="text-lg">
                <strong className="text-white">A late-harvest Greek Koroneiki</strong> will have fewer polyphenols than an early-harvest Spanish Arbequina—despite Koroneiki being genetically superior. Harvest timing matters more than any other single factor.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 rounded-xl p-5">
                  <h3 className="font-bold text-xl mb-2">🟢 Choose Early Harvest If:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Maximum health benefits</li>
                    <li>✓ Therapeutic use</li>
                    <li>✓ Intense flavor desired</li>
                    <li>✓ Long shelf life important</li>
                    <li>✓ Budget allows premium</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <h3 className="font-bold text-xl mb-2">🟡 Choose Mid-Season If:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Good health benefits</li>
                    <li>✓ Versatile cooking use</li>
                    <li>✓ Balanced flavor</li>
                    <li>✓ Better value</li>
                    <li>✓ Everyday consumption</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <h3 className="font-bold text-xl mb-2">🟣 Choose Late Harvest If:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Cooking/baking focus</li>
                    <li>✓ Mild flavor preferred</li>
                    <li>✓ Budget-conscious</li>
                    <li>✓ High-volume use</li>
                    <li>✓ Not health-focused</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog/greek-vs-italian-vs-spanish-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Greek vs Italian vs Spanish Olive Oil
              </h3>
              <p className="text-sm text-gray-400">Polyphenol comparison across Mediterranean countries</p>
            </Link>

            <Link
              href="/blog/best-olive-cultivars-high-polyphenols"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🫒</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Best Olive Cultivars for Polyphenols
              </h3>
              <p className="text-sm text-gray-400">Koroneiki, Picual, Coratina genetic differences</p>
            </Link>

            <Link
              href="/blog/how-to-store-high-polyphenol-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🏺</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                How to Store High Polyphenol Olive Oil
              </h3>
              <p className="text-sm text-gray-400">Prevent 46% annual degradation with proper storage</p>
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
