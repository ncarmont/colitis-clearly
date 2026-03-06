import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'How Much Polyphenol Olive Oil Should You Consume Daily? Dosage Guide',
  description: 'EU health claim requires 5mg hydroxytyrosol per 20g. Calculate your optimal daily EVOO intake based on polyphenol content for maximum health benefits.',
  keywords: 'how much olive oil per day, polyphenol dosage EVOO, daily olive oil intake, hydroxytyrosol daily dose, olive oil health benefits dosage',
  openGraph: {
    title: 'How Much Polyphenol Olive Oil Should You Consume Daily?',
    description: 'Science-based dosage guide for optimal polyphenol intake from EVOO',
    type: 'article',
  }
}

export default function DailyDosagePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Daily Polyphenol Dosage</span>
        </div>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm font-bold rounded-full">
              Health
            </span>
            <span className="text-gray-500 text-sm">📖 7 min read</span>
            <span className="text-gray-500 text-sm">📅 Sep 18, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            How Much Polyphenol Olive Oil Should You Consume Daily?
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            The EU health claim sets a minimum, but what's the optimal daily intake? Here's your complete dosage guide based on polyphenol content and health goals.
          </p>
        </header>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How Much Polyphenol Olive Oil Should You Consume Daily?",
              "datePublished": "2024-09-18",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              }
            })
          }}
        />

        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Quick Answer</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            <strong className="text-white">Minimum:</strong> 20g (1.5 tablespoons) daily with 250+ mg/kg polyphenols meets EU health claim threshold.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed">
            <strong className="text-white">Optimal:</strong> 30-40g (2-3 tablespoons) daily with 500+ mg/kg polyphenols provides maximum research-backed benefits.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🇪🇺</span>
            1. The EU Health Claim Standard
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              The European Food Safety Authority (EFSA) authorized a health claim for olive oil polyphenols in 2011, establishing the only regulatory standard for polyphenol intake.
            </p>

            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">EU Regulation 432/2012</h3>
              <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-300 italic mb-3">
                  "Olive oil polyphenols contribute to the protection of blood lipids from oxidative stress."
                </p>
                <p className="text-sm text-white font-bold">
                  Required dose: <span className="text-green-400">5mg of hydroxytyrosol and its derivatives per 20g of olive oil</span>
                </p>
              </div>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400">•</span>
                  <span><strong className="text-white">20g EVOO =</strong> approximately 1.5 tablespoons or 1.3 tbsp US measurement</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400">•</span>
                  <span><strong className="text-white">5mg hydroxytyrosol derivatives =</strong> roughly 250 mg/kg total polyphenol content</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400">•</span>
                  <span><strong className="text-white">Derivatives include:</strong> Hydroxytyrosol, tyrosol, oleocanthal, oleacein</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-4 rounded-r-lg text-sm">
              <strong className="text-blue-400">Translation to Real Products:</strong>
              <p className="text-gray-300 mt-2">
                If your EVOO has 250 mg/kg polyphenols, consuming 20g (1.5 tbsp) daily meets the EU standard for cardiovascular protection. Higher polyphenol oils mean you need less volume to achieve the same effect.
              </p>
            </div>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📊</span>
            2. Calculating Your Optimal Dose
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Your optimal intake depends on the polyphenol content of your EVOO and your health goals.
            </p>

            <div className="my-6">
              <h3 className="text-xl font-bold text-white mb-4">Dose Calculator by Polyphenol Content</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-800 border-b border-gray-700">
                      <th className="text-left p-3 text-white">EVOO Polyphenol Level</th>
                      <th className="text-left p-3 text-white">Minimum Daily (EU Standard)</th>
                      <th className="text-left p-3 text-white">Optimal Daily (Research-Based)</th>
                      <th className="text-left p-3 text-white">Total Polyphenols Intake</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800 bg-red-900/10">
                      <td className="p-3"><strong className="text-red-300">Low</strong> (150-250 mg/kg)</td>
                      <td className="p-3">25-30g (~2 tbsp)</td>
                      <td className="p-3">40-50g (~3-4 tbsp)</td>
                      <td className="p-3 text-red-300">6-12.5 mg</td>
                    </tr>
                    <tr className="border-b border-gray-800 bg-yellow-900/10">
                      <td className="p-3"><strong className="text-yellow-300">Moderate</strong> (250-400 mg/kg)</td>
                      <td className="p-3">20g (~1.5 tbsp)</td>
                      <td className="p-3">30-40g (~2-3 tbsp)</td>
                      <td className="p-3 text-yellow-300">7.5-16 mg</td>
                    </tr>
                    <tr className="border-b border-gray-800 bg-green-900/10">
                      <td className="p-3"><strong className="text-green-300">High</strong> (400-700 mg/kg)</td>
                      <td className="p-3">15g (~1 tbsp)</td>
                      <td className="p-3">25-35g (~2-2.5 tbsp)</td>
                      <td className="p-3 text-green-300">10-24.5 mg</td>
                    </tr>
                    <tr className="border-b border-gray-800 bg-emerald-900/10">
                      <td className="p-3"><strong className="text-emerald-300">Very High</strong> (700+ mg/kg)</td>
                      <td className="p-3">10-15g (~0.75-1 tbsp)</td>
                      <td className="p-3">20-30g (~1.5-2 tbsp)</td>
                      <td className="p-3 text-emerald-300">14-21 mg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-purple-300 mb-3">Example Calculations</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-gray-800/50 rounded p-4">
                  <h4 className="font-bold text-white mb-2">Scenario 1: Moderate EVOO (300 mg/kg)</h4>
                  <p className="text-gray-300 mb-2">To meet EU standard: 20g × 300 mg/kg = 6mg polyphenols ✓</p>
                  <p className="text-gray-300">For optimal benefits: 35g × 300 mg/kg = 10.5mg polyphenols</p>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <h4 className="font-bold text-white mb-2">Scenario 2: High EVOO (600 mg/kg)</h4>
                  <p className="text-gray-300 mb-2">To meet EU standard: 10g × 600 mg/kg = 6mg polyphenols ✓</p>
                  <p className="text-gray-300">For optimal benefits: 25g × 600 mg/kg = 15mg polyphenols</p>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <h4 className="font-bold text-white mb-2">Scenario 3: Premium EVOO (1000 mg/kg)</h4>
                  <p className="text-gray-300 mb-2">To meet EU standard: 6g × 1000 mg/kg = 6mg polyphenols ✓</p>
                  <p className="text-gray-300">For optimal benefits: 20g × 1000 mg/kg = 20mg polyphenols</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            3. Dosage by Health Goal
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-3">❤️ Cardiovascular Protection</h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <div><strong className="text-white">Goal:</strong> Reduce LDL oxidation, improve endothelial function</div>
                  <div><strong className="text-white">Dose:</strong> 20-30g daily (1.5-2 tbsp)</div>
                  <div><strong className="text-white">Polyphenol target:</strong> 250+ mg/kg</div>
                  <div><strong className="text-white">Evidence:</strong> PREDIMED study used ~40g/day</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">🔥 Anti-Inflammatory Effects</h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <div><strong className="text-white">Goal:</strong> COX enzyme inhibition, reduce chronic inflammation</div>
                  <div><strong className="text-white">Dose:</strong> 30-50g daily (2-3.5 tbsp)</div>
                  <div><strong className="text-white">Polyphenol target:</strong> 400+ mg/kg (high oleocanthal)</div>
                  <div><strong className="text-white">Evidence:</strong> 50g provides ~10% ibuprofen dose equivalent</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-300 mb-3">🧠 Cognitive Health / Neuroprotection</h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <div><strong className="text-white">Goal:</strong> Alzheimer's prevention, brain health</div>
                  <div><strong className="text-white">Dose:</strong> 30-40g daily (2-3 tbsp)</div>
                  <div><strong className="text-white">Polyphenol target:</strong> 500+ mg/kg</div>
                  <div><strong className="text-white">Evidence:</strong> Mediterranean diet studies with high EVOO intake</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-3">📉 Metabolic Health / Diabetes Prevention</h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <div><strong className="text-white">Goal:</strong> Improve insulin sensitivity, glucose control</div>
                  <div><strong className="text-white">Dose:</strong> 25-35g daily (2-2.5 tbsp)</div>
                  <div><strong className="text-white">Polyphenol target:</strong> 300+ mg/kg</div>
                  <div><strong className="text-white">Evidence:</strong> Replace saturated fats, not additional calories</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-300 mb-3">🛡️ Cancer Prevention (Preclinical)</h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <div><strong className="text-white">Goal:</strong> Anti-proliferative, apoptosis induction</div>
                  <div><strong className="text-white">Dose:</strong> 40-60g daily (3-4 tbsp)</div>
                  <div><strong className="text-white">Polyphenol target:</strong> 600+ mg/kg (high oleocanthal)</div>
                  <div><strong className="text-white">Evidence:</strong> Animal studies; human trials ongoing</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-teal-300 mb-3">⏳ Longevity / General Health</h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <div><strong className="text-white">Goal:</strong> Reduce all-cause mortality, healthy aging</div>
                  <div><strong className="text-white">Dose:</strong> 30-40g daily (2-3 tbsp)</div>
                  <div><strong className="text-white">Polyphenol target:</strong> 400+ mg/kg</div>
                  <div><strong className="text-white">Evidence:</strong> Harvard 92,000 participant study, Blue Zones data</div>
                </div>
              </div>
            </div>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⚠️</span>
            4. Important Considerations
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-300 mb-4">Calorie Management</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">EVOO is calorie-dense:</strong> 120 calories per tablespoon (14g). A 3-tablespoon daily dose = 360 calories.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Replace, don't add:</strong> Substitute EVOO for butter, margarine, seed oils, or other fats rather than adding it on top of existing intake.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Monitor total fat intake:</strong> Keep total dietary fat at 25-35% of calories (Mediterranean diet style).
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">Consumption Tips</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✓</span>
                  <span><strong className="text-white">Consume raw when possible:</strong> Polyphenols degrade with high heat. Use on salads, vegetables, bread.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✓</span>
                  <span><strong className="text-white">Split dose throughout day:</strong> 1 tbsp at breakfast, 1 tbsp at lunch, 1 tbsp at dinner for better absorption.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✓</span>
                  <span><strong className="text-white">With food, not alone:</strong> Fat-soluble polyphenols absorb better with meals containing vegetables.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✓</span>
                  <span><strong className="text-white">Moderate cooking OK:</strong> Low-medium heat (&lt;350°F) preserves most polyphenols. Avoid deep frying.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Individual Variation</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <strong className="text-white">Body weight:</strong> Larger individuals may need slightly higher doses. Calculate ~0.5g EVOO per kg body weight as starting point.
                </div>
                <div>
                  <strong className="text-white">Gut microbiome:</strong> Polyphenol metabolism varies by gut bacteria composition. Some people absorb polyphenols more efficiently.
                </div>
                <div>
                  <strong className="text-white">Existing conditions:</strong> Those with active inflammation or cardiovascular disease may benefit from higher doses. Consult physician.
                </div>
                <div>
                  <strong className="text-white">Medication interactions:</strong> High-dose EVOO has mild anticoagulant effects. Inform doctor if on blood thinners.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📅</span>
            5. Sample Daily Plans
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-4">Plan A: Moderate Intake (25g/day)</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="bg-gray-800/50 rounded p-3">
                    <strong className="text-white">Breakfast:</strong> 1 tbsp drizzled on avocado toast or in smoothie
                  </div>
                  <div className="bg-gray-800/50 rounded p-3">
                    <strong className="text-white">Lunch:</strong> 1 tbsp in salad dressing (mix with balsamic vinegar)
                  </div>
                  <div className="bg-gray-800/50 rounded p-3">
                    <strong className="text-white">Dinner:</strong> 0.5 tbsp drizzled on cooked vegetables or fish
                  </div>
                  <div className="text-green-300 text-center mt-3 font-bold">
                    Total: ~25g | 300 calories | 7.5-12.5mg polyphenols (300-500 mg/kg EVOO)
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-300 mb-4">Plan B: Optimal Intake (35g/day)</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="bg-gray-800/50 rounded p-3">
                    <strong className="text-white">Breakfast:</strong> 1.5 tbsp on bread or in Greek yogurt with berries
                  </div>
                  <div className="bg-gray-800/50 rounded p-3">
                    <strong className="text-white">Lunch:</strong> 1 tbsp in hummus or as salad base
                  </div>
                  <div className="bg-gray-800/50 rounded p-3">
                    <strong className="text-white">Dinner:</strong> 1 tbsp for sautéing vegetables + finishing drizzle
                  </div>
                  <div className="text-emerald-300 text-center mt-3 font-bold">
                    Total: ~35g | 420 calories | 10.5-21mg polyphenols (300-600 mg/kg EVOO)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">The Dosage Bottom Line</h2>
            <div className="space-y-3 text-green-50 text-lg">
              <p>
                <strong className="text-white">Minimum effective dose:</strong> 20g (1.5 tbsp) daily of 250+ mg/kg EVOO
              </p>
              <p>
                <strong className="text-white">Optimal for health:</strong> 30-40g (2-3 tbsp) daily of 500+ mg/kg EVOO
              </p>
              <p>
                <strong className="text-white">Key principle:</strong> Replace other fats with EVOO—don't add extra calories
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-xl"
              >
                <span>Find Your Perfect EVOO</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/what-are-polyphenols-olive-oil" className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-3">🧬</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                What Are Polyphenols?
              </h3>
              <p className="text-sm text-gray-400">Complete guide to polyphenol types and benefits</p>
            </Link>
            <Link href="/blog/health-benefits-high-polyphenol-evoo" className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                7 Health Benefits
              </h3>
              <p className="text-sm text-gray-400">Science-backed benefits of high polyphenol EVOO</p>
            </Link>
            <Link href="/blog/how-to-choose-high-polyphenol-olive-oil" className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                How to Choose EVOO
              </h3>
              <p className="text-sm text-gray-400">Expert buying guide for high polyphenol oils</p>
            </Link>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors">
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
