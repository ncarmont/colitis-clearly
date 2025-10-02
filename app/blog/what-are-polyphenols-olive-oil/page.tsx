import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Are Polyphenols in Olive Oil? Complete Guide 2024',
  description: 'Discover everything about polyphenols in EVOO: health benefits, daily intake, measurement methods, and why high polyphenol olive oil is essential for heart health and longevity.',
  keywords: 'polyphenols olive oil, what are polyphenols, hydroxytyrosol, oleocanthal, EVOO health benefits, polyphenol content',
  openGraph: {
    title: 'What Are Polyphenols in Olive Oil? Complete Science-Based Guide',
    description: 'Learn about polyphenols in olive oil, their health benefits, and how much you need daily for optimal health.',
  }
}

export default function PolyphenolsGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-green-400">What Are Polyphenols</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-green-400 uppercase tracking-wider bg-green-900/30 px-3 py-1 rounded-full">Health</span>
            <span className="text-xs text-gray-500">8 min read • Updated Oct 2024</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            What Are Polyphenols in Olive Oil?
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Polyphenols are natural antioxidant compounds that make extra virgin olive oil one of the healthiest foods on the planet. Here's everything you need to know.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-gray-700/50 mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Summary</h2>
            <ul className="space-y-2 text-gray-300">
              <li>✅ Polyphenols are powerful antioxidant compounds found in high-quality EVOO</li>
              <li>✅ Major types: oleocanthal, oleacein, hydroxytyrosol, tyrosol</li>
              <li>✅ EU health claim: 5mg hydroxytyrosol derivatives per 20g (≈250mg/kg minimum)</li>
              <li>✅ High polyphenol EVOO: 500+ mg/kg (exceptional: 1000+ mg/kg)</li>
              <li>✅ Health benefits: heart health, anti-inflammatory, neuroprotection, longevity</li>
            </ul>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Polyphenols in Olive Oil</h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Polyphenols are naturally occurring bioactive compounds found in plants, particularly abundant in olives and extra virgin olive oil. These micronutrients act as powerful antioxidants, protecting your cells from oxidative damage and inflammation.
              </p>
              <p>
                What makes polyphenols special is that they're <strong className="text-green-400">only found in significant amounts in extra virgin olive oil</strong> (EVOO). Refined olive oils, "light" olive oils, and vegetable oils contain virtually no polyphenols because the refining process strips them away.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">The 4 Main Types of Polyphenols in EVOO</h2>

            <div className="grid gap-6">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-700/50">
                <h3 className="text-2xl font-bold text-white mb-3">1. Oleocanthal</h3>
                <p className="text-gray-300 mb-3">
                  The compound responsible for the <strong className="text-green-400">"peppery throat"</strong> sensation in quality EVOO. Acts as a natural anti-inflammatory similar to ibuprofen.
                </p>
                <p className="text-sm text-green-400">
                  ⚡ Key benefit: Powerful anti-inflammatory, linked to reduced Alzheimer's risk
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-700/50">
                <h3 className="text-2xl font-bold text-white mb-3">2. Oleacein</h3>
                <p className="text-gray-300 mb-3">
                  Works synergistically with oleocanthal. Provides the <strong className="text-blue-400">"bitter"</strong> taste in fresh EVOO.
                </p>
                <p className="text-sm text-blue-400">
                  ⚡ Key benefit: Cardiovascular protection, antioxidant activity
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-700/50">
                <h3 className="text-2xl font-bold text-white mb-3">3. Hydroxytyrosol</h3>
                <p className="text-gray-300 mb-3">
                  The <strong className="text-purple-400">most powerful antioxidant</strong> in EVOO. Used in the EU health claim calculation.
                </p>
                <p className="text-sm text-purple-400">
                  ⚡ Key benefit: Protects LDL cholesterol from oxidation (heart disease prevention)
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-700/50">
                <h3 className="text-2xl font-bold text-white mb-3">4. Tyrosol</h3>
                <p className="text-gray-300 mb-3">
                  A simpler phenolic alcohol that contributes to overall antioxidant capacity.
                </p>
                <p className="text-sm text-amber-400">
                  ⚡ Key benefit: Antioxidant support, cardiovascular health
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How Much Polyphenols Do You Need?</h2>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-gray-700/50 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">EU Official Health Claim</h3>
              <p className="text-gray-300 mb-4">
                The European Food Safety Authority (EFSA) approved a health claim stating that olive oil polyphenols contribute to the protection of blood lipids from oxidative stress.
              </p>
              <div className="bg-green-900/30 rounded-xl p-6 border border-green-700/50">
                <p className="text-green-400 font-bold text-lg mb-2">Required Daily Intake:</p>
                <p className="text-white text-2xl font-bold">5 mg of hydroxytyrosol and derivatives per 20g of EVOO</p>
                <p className="text-sm text-gray-400 mt-3">This equals approximately 250 mg/kg minimum polyphenol content</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-bold text-white">Polyphenol Content Categories:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-xl">🔴</span>
                  <div>
                    <strong className="text-white">&lt;250 mg/kg:</strong> Does not meet EU health claim
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold text-xl">🟡</span>
                  <div>
                    <strong className="text-white">250-500 mg/kg:</strong> Meets minimum health claim
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">🟢</span>
                  <div>
                    <strong className="text-white">500-1000 mg/kg:</strong> High polyphenol (exceptional quality)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-xl">💚</span>
                  <div>
                    <strong className="text-white">1000+ mg/kg:</strong> Ultra-high polyphenol (world-class)
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Science-Backed Health Benefits</h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-3">❤️ Cardiovascular Health</h3>
                <p className="text-gray-300">
                  Polyphenols protect LDL cholesterol from oxidation, reduce inflammation in blood vessels, and improve endothelial function. Studies show regular consumption can reduce heart disease risk by up to 30%.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-3">🧠 Neuroprotection</h3>
                <p className="text-gray-300">
                  Oleocanthal has been shown to help clear beta-amyloid plaques associated with Alzheimer's disease. Mediterranean diet studies link high EVOO consumption with better cognitive function.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-3">🔥 Anti-Inflammatory</h3>
                <p className="text-gray-300">
                  Oleocanthal inhibits COX enzymes (same mechanism as ibuprofen) without side effects. 50g of high polyphenol EVOO ≈ 10% of ibuprofen dose in anti-inflammatory activity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-3">🛡️ Cancer Prevention</h3>
                <p className="text-gray-300">
                  Polyphenols have been shown to inhibit cancer cell growth and induce apoptosis (programmed cell death) in various cancer types. Strongest evidence for breast and colon cancer.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">What Affects Polyphenol Content?</h2>

            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-900/20 rounded-xl p-5 border border-green-700/50">
                  <h4 className="text-lg font-bold text-green-400 mb-3">✅ Increases Polyphenols</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Early harvest (green, unripe olives)</li>
                    <li>• Certain cultivars (Koroneiki, Picual, Coratina)</li>
                    <li>• Water stress during growing</li>
                    <li>• High altitude groves (400-800m)</li>
                    <li>• Fast milling (&lt;4 hours harvest-to-mill)</li>
                    <li>• Low temp extraction (&lt;25°C)</li>
                  </ul>
                </div>

                <div className="bg-red-900/20 rounded-xl p-5 border border-red-700/50">
                  <h4 className="text-lg font-bold text-red-400 mb-3">❌ Decreases Polyphenols</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Late harvest (ripe, black olives)</li>
                    <li>• Delayed milling (&gt;24 hours)</li>
                    <li>• High temperature extraction</li>
                    <li>• Refining process (removes all polyphenols)</li>
                    <li>• Poor storage (light, heat, oxygen)</li>
                    <li>• Age (degrades ~46%/year)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Identify High Polyphenol EVOO</h2>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Taste Test (Free!)</h3>
              <p className="text-gray-300 mb-4">
                High polyphenol EVOO should have:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">🌶️</span>
                  <div>
                    <strong className="text-white">Peppery/Spicy Throat:</strong> The "cough" sensation is oleocanthal. Stronger throat burn = higher polyphenols.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">😖</span>
                  <div>
                    <strong className="text-white">Bitterness:</strong> Fresh, quality EVOO should taste bitter (oleacein). Not pleasant, but healthy!
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">🌿</span>
                  <div>
                    <strong className="text-white">Grassy/Herbaceous:</strong> Fresh-cut grass, artichoke, or green tomato notes indicate high quality.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Look for Lab Certificates</h3>
              <p className="text-gray-300 mb-4">
                Reputable producers provide lab test results showing:
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Total polyphenol content (mg/kg)</li>
                <li>• Testing method (HPLC or qNMR preferred)</li>
                <li>• Harvest date (fresher = better)</li>
                <li>• Acidity level (&lt;0.3% is excellent)</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <Link href="/" className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors">
                  <span>View Our Lab-Verified Rankings</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-700/50">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span>Polyphenols are the primary reason EVOO is so healthy - they're powerful antioxidants and anti-inflammatories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span>Aim for 500+ mg/kg polyphenol content for significant health benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span>The "peppery throat" and "bitterness" are signs of high polyphenols - don't avoid them!</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span>Early harvest, certain cultivars (Koroneiki, Picual), and fast processing maximize polyphenols</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span>Store in dark glass, cool place, use within 12 months to preserve polyphenols</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-16 pt-12 border-t border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/how-to-choose-high-polyphenol-olive-oil" className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all group">
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors mb-2">
                  How to Choose High Polyphenol Olive Oil →
                </h3>
                <p className="text-sm text-gray-400">Complete buying guide with exact criteria</p>
              </Link>
              <Link href="/blog/health-benefits-high-polyphenol-evoo" className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all group">
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors mb-2">
                  7 Health Benefits of High Polyphenol EVOO →
                </h3>
                <p className="text-sm text-gray-400">Science-backed research on EVOO benefits</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What Are Polyphenols in Olive Oil? Complete Guide 2024",
            "description": "Comprehensive guide to polyphenols in extra virgin olive oil, including health benefits, daily intake recommendations, and how to identify high polyphenol EVOO.",
            "author": {
              "@type": "Organization",
              "name": "EVOO Rankings"
            },
            "datePublished": "2024-10-01",
            "dateModified": "2024-10-01"
          })
        }}
      />
    </main>
  )
}
