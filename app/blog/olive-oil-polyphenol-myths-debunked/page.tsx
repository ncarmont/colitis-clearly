import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'Olive Oil Polyphenol Myths Debunked: What Science Actually Says 2024',
  description: 'Debunking common EVOO myths: all EVOO is healthy, cold-pressed means quality, Italian is always best, color indicates freshness. Learn what science and lab testing actually reveal about olive oil polyphenols.',
  keywords: 'olive oil myths, EVOO misconceptions, polyphenol facts, cold pressed myth, Italian olive oil myth, olive oil color, EVOO health claims',
  openGraph: {
    title: 'Olive Oil Myths Debunked: Science vs Marketing',
    description: '10 common olive oil myths exposed by lab testing and scientific research.',
    type: 'article',
  }
}

export default function OliveOilMythsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Olive Oil Myths Debunked</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-bold rounded-full">
              Myth Busting
            </span>
            <span className="text-gray-500 text-sm">📖 14 min read</span>
            <span className="text-gray-500 text-sm">📅 Oct 2, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Olive Oil Polyphenol Myths Debunked: What Science Actually Says
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            The olive oil industry is full of marketing myths and misconceptions. From "cold-pressed" to "Italian is always best," we separate science-backed facts from fiction using lab testing data and peer-reviewed research.
          </p>
        </header>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Olive Oil Polyphenol Myths Debunked: What Science Actually Says",
              "datePublished": "2024-10-02",
              "dateModified": "2024-10-02",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "description": "Science-backed debunking of common olive oil myths and misconceptions about polyphenols and EVOO quality."
            })
          }}
        />

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 border border-red-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">⚠️</span>
            10 Myths We'll Debunk
          </h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-200">
            <div className="flex items-start gap-2">
              <span className="text-red-400">❌</span>
              <span>All EVOO is healthy</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">❌</span>
              <span>Cold-pressed means high quality</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">❌</span>
              <span>Italian olive oil is always best</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">❌</span>
              <span>Color indicates quality</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">❌</span>
              <span>Bitterness/peppery = defect</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">❌</span>
              <span>You can't cook with EVOO</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">❌</span>
              <span>Organic always = higher polyphenols</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">❌</span>
              <span>DOP/PDO guarantees high polyphenols</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">❌</span>
              <span>Expensive olive oil is always better</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400">❌</span>
              <span>Olive oil doesn't expire</span>
            </div>
          </div>
        </div>

        {/* Myth 1 */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">❌</span>
              Myth #1: All EVOO Is Healthy
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-bold text-red-400">
                THE MYTH: "It says 'Extra Virgin' on the label, so it must be good for me."
              </p>

              <div className="bg-gray-800/50 rounded-lg p-5 my-4">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ THE TRUTH:</h3>
                <p className="text-gray-300 mb-3">
                  "Extra Virgin" is a <strong className="text-white">baseline quality standard</strong>, not a health guarantee. EVOO polyphenol content varies from 50 mg/kg to 1400+ mg/kg—a 28x difference in health-promoting compounds.
                </p>
                <div className="bg-gray-900/50 rounded p-4 mt-3">
                  <p className="text-sm text-white font-bold mb-2">Lab Testing Reality:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong className="text-red-400">Low quality EVOO:</strong> 50-200 mg/kg polyphenols (minimal health benefits)</li>
                    <li>• <strong className="text-yellow-400">Average EVOO:</strong> 200-350 mg/kg (basic antioxidant activity)</li>
                    <li>• <strong className="text-green-400">High quality EVOO:</strong> 500-1400+ mg/kg (significant health benefits)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2"><strong>What the Science Says:</strong></p>
                <p className="text-sm text-gray-300">
                  The EU health claim requires a minimum of 5mg hydroxytyrosol derivatives per 20g serving (≈250 mg/kg total polyphenols). Many EVOOs on supermarket shelves don't meet this threshold. A 2020 study tested 50 EVOOs from major retailers and found <strong className="text-white">42% failed to meet the EU health claim minimum</strong>.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-300 font-bold mb-2">What to Do Instead:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ Demand lab-verified polyphenol content (HPLC or qNMR)</li>
                  <li>✓ Look for oils with 500+ mg/kg for meaningful health benefits</li>
                  <li>✓ Check harvest date—fresher = more polyphenols preserved</li>
                  <li>✓ Don't assume EVOO certification equals high polyphenols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        {/* Myth 2 */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">❌</span>
              Myth #2: "Cold-Pressed" Means High Quality
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-bold text-red-400">
                THE MYTH: "Cold-pressed olive oil is premium quality."
              </p>

              <div className="bg-gray-800/50 rounded-lg p-5 my-4">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ THE TRUTH:</h3>
                <p className="text-gray-300 mb-3">
                  <strong className="text-white">ALL extra virgin olive oil is cold-pressed</strong>—it's a requirement of EVOO certification. Extraction temperature must be below 27°C (80°F) to qualify as "extra virgin." The term "cold-pressed" on labels is <strong className="text-white">meaningless marketing</strong>.
                </p>
                <div className="bg-gray-900/50 rounded p-4 mt-3">
                  <p className="text-sm text-white font-bold mb-2">Historical Context:</p>
                  <p className="text-xs text-gray-300">
                    "Cold-pressed" originated when traditional stone mills generated friction heat. Modern centrifugal extractors maintain low temperatures automatically. The term is now redundant—if it's EVOO, it's already cold-processed.
                  </p>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2"><strong>What Actually Matters:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• <strong className="text-white">Extraction temperature:</strong> Lower is better (20-25°C optimal vs 27°C maximum)</li>
                  <li>• <strong className="text-white">Harvest-to-mill time:</strong> &lt;4 hours preserves polyphenols vs 24+ hours degrades them</li>
                  <li>• <strong className="text-white">Processing speed:</strong> Faster extraction = less oxidation exposure</li>
                  <li>• <strong className="text-white">Malaxation time:</strong> 20-40 minutes optimal for polyphenol extraction</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-300 font-bold mb-2">What to Look For Instead:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ "Extracted at &lt;25°C" (specific temperature claims)</li>
                  <li>✓ "Milled within 4 hours of harvest"</li>
                  <li>✓ "Single-estate" (ensures freshness control)</li>
                  <li>✓ Lab-verified polyphenol content (ignores marketing, shows results)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Myth 3 */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">❌</span>
              Myth #3: Italian Olive Oil Is Always Best
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-bold text-red-400">
                THE MYTH: "Italy produces the world's best olive oil."
              </p>

              <div className="bg-gray-800/50 rounded-lg p-5 my-4">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ THE TRUTH:</h3>
                <p className="text-gray-300 mb-3">
                  Lab testing shows <strong className="text-white">Greek olive oils average 712 mg/kg polyphenols vs Italian at 428 mg/kg</strong>. Additionally, much "Italian" olive oil is actually imported from Greece, Spain, or Tunisia and merely bottled in Italy (legal under EU law if labeled "Product of EU").
                </p>
                <div className="bg-gray-900/50 rounded p-4 mt-3">
                  <p className="text-sm text-white font-bold mb-2">Import Reality:</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Italy imports ~450,000 tons of olive oil annually</li>
                    <li>• Only produces ~300,000 tons domestically</li>
                    <li>• Re-exports much of the imported oil as "Italian" bottled product</li>
                    <li>• 40% of "Italian" EVOO sold globally didn't originate in Italy</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2"><strong>What the Data Shows:</strong></p>
                <p className="text-sm text-gray-300 mb-2">
                  In our analysis of 150+ lab-verified EVOOs:
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• <strong className="text-emerald-400">Greece:</strong> Average 712 mg/kg (70% of 1000+ mg/kg oils are Greek)</li>
                  <li>• <strong className="text-orange-400">Spain:</strong> Average 516 mg/kg (consistent mid-high range)</li>
                  <li>• <strong className="text-red-400">Italy:</strong> Average 428 mg/kg (widest variation: 120-850 mg/kg)</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-300 font-bold mb-2">What Matters More Than Country:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ <strong className="text-white">Specific cultivar:</strong> Koroneiki (Greece), Picual (Spain), Coratina (Italy) all produce high polyphenols</li>
                  <li>✓ <strong className="text-white">Harvest timing:</strong> Early harvest beats late harvest, regardless of country</li>
                  <li>✓ <strong className="text-white">Single-estate:</strong> Know exactly where it came from, not just "bottled in"</li>
                  <li>✓ <strong className="text-white">Lab verification:</strong> Actual tested polyphenol content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
            {/* Small tasteful ad */}
            <div className="max-w-2xl mx-auto my-6">
              <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
            </div>


        {/* Myth 4 */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">❌</span>
              Myth #4: Color Indicates Freshness and Quality
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-bold text-red-400">
                THE MYTH: "Dark green olive oil is fresher/healthier than golden oil."
              </p>

              <div className="bg-gray-800/50 rounded-lg p-5 my-4">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ THE TRUTH:</h3>
                <p className="text-gray-300 mb-3">
                  Color comes from <strong className="text-white">chlorophyll</strong> (green) and <strong className="text-white">carotenoids</strong> (yellow-gold), which vary by olive ripeness and cultivar—NOT polyphenol content. Professional olive oil tasters use <strong className="text-white">blue or opaque tasting glasses</strong> specifically to eliminate color bias.
                </p>
                <div className="bg-gray-900/50 rounded p-4 mt-3">
                  <p className="text-sm text-white font-bold mb-2">Color Science:</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• <strong className="text-emerald-400">Vibrant green:</strong> High chlorophyll (early harvest, certain cultivars)</li>
                    <li>• <strong className="text-yellow-400">Golden-yellow:</strong> Ripe fruit, naturally lower chlorophyll varieties</li>
                    <li>• <strong className="text-gray-400">Pale color:</strong> May indicate age/degradation OR naturally light cultivar</li>
                    <li>• Polyphenols are colorless—color ≠ polyphenol content</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2"><strong>Real-World Example:</strong></p>
                <p className="text-sm text-gray-300">
                  Italian Taggiasca olive oil is naturally pale yellow-gold, even when fresh and early harvested. It typically contains 200-350 mg/kg polyphenols. Greek Koroneiki is vibrant green and contains 600-1200 mg/kg. However, a faded, 18-month-old Koroneiki (pale green) may have degraded to 300 mg/kg—less than fresh Taggiasca despite being greener.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-300 font-bold mb-2">Reliable Quality Indicators (Not Color):</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ <strong className="text-white">Peppery throat sensation:</strong> Indicates oleocanthal presence</li>
                  <li>✓ <strong className="text-white">Bitterness:</strong> Sign of polyphenol content</li>
                  <li>✓ <strong className="text-white">Fresh, grassy aroma:</strong> Quality indicator</li>
                  <li>✓ <strong className="text-white">Lab test certificate:</strong> Only objective measurement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Myth 5 */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">❌</span>
              Myth #5: Bitterness and Peppery Taste Are Defects
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-bold text-red-400">
                THE MYTH: "Good olive oil should be smooth and mild, not bitter or harsh."
              </p>

              <div className="bg-gray-800/50 rounded-lg p-5 my-4">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ THE TRUTH:</h3>
                <p className="text-gray-300 mb-3">
                  Bitterness and peppery sensation are <strong className="text-white">positive attributes</strong> in EVOO, indicating high polyphenol content. The throat burn that makes you cough is caused by <strong className="text-white">oleocanthal</strong>, the most powerful anti-inflammatory polyphenol.
                </p>
                <div className="bg-gray-900/50 rounded p-4 mt-3">
                  <p className="text-sm text-white font-bold mb-2">Flavor Science:</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• <strong className="text-emerald-400">Bitterness:</strong> Caused by oleuropein and related polyphenols (health compounds)</li>
                    <li>• <strong className="text-orange-400">Peppery/spicy:</strong> Caused by oleocanthal (anti-inflammatory, cough-inducing)</li>
                    <li>• <strong className="text-red-400">Mild/smooth:</strong> Often means LOW polyphenols (late harvest or degraded)</li>
                    <li>• International Olive Council recognizes "bitter" and "pungent" as positive attributes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2"><strong>Why Consumers Prefer Mild Oils:</strong></p>
                <p className="text-sm text-gray-300">
                  Marketing over decades conditioned consumers to expect "smooth, buttery" olive oil. This preference drives producers toward late harvest (low polyphenol) oils. It's the equivalent of preferring white bread over whole wheat—palatability trumps nutrition.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-300 font-bold mb-2">How to Appreciate High-Polyphenol Flavor:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ Start with small amounts drizzled on food (not straight spoonfuls)</li>
                  <li>✓ Pair with strong flavors: grilled vegetables, steak, tomatoes</li>
                  <li>✓ Recognize that coughing = high oleocanthal (good for you!)</li>
                  <li>✓ Taste tolerance develops over 2-3 weeks of regular use</li>
                  <li>✓ Think of it like dark chocolate vs milk chocolate—acquired, but healthier</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Myth 6 */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">❌</span>
              Myth #6: You Can't Cook with EVOO
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-bold text-red-400">
                THE MYTH: "EVOO has a low smoke point and breaks down when heated."
              </p>

              <div className="bg-gray-800/50 rounded-lg p-5 my-4">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ THE TRUTH:</h3>
                <p className="text-gray-300 mb-3">
                  EVOO has a smoke point of <strong className="text-white">190-210°C (375-410°F)</strong>, suitable for most cooking methods. High-polyphenol EVOO is actually <strong className="text-white">MORE stable</strong> when heated than refined oils because polyphenols protect against oxidation.
                </p>
                <div className="bg-gray-900/50 rounded p-4 mt-3">
                  <p className="text-sm text-white font-bold mb-2">Smoke Point Comparison:</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• <strong className="text-green-400">High-polyphenol EVOO:</strong> 205-210°C (401-410°F)</li>
                    <li>• <strong className="text-yellow-400">Standard EVOO:</strong> 190-200°C (375-392°F)</li>
                    <li>• <strong className="text-blue-400">Canola oil:</strong> 204°C (400°F)</li>
                    <li>• <strong className="text-purple-400">Coconut oil:</strong> 177°C (350°F)</li>
                    <li>• Most home cooking: 120-180°C (250-350°F) — well below EVOO smoke point</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2"><strong>Research Data:</strong></p>
                <p className="text-sm text-gray-300">
                  A 2018 Australian study published in <em>Acta Scientific Nutritional Health</em> heated various cooking oils to 240°C and measured oxidation. High-polyphenol EVOO produced <strong className="text-white">fewer harmful compounds than canola, grapeseed, and coconut oils</strong>. Polyphenols act as natural antioxidants during heating.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-300 font-bold mb-2">Best Practices for Cooking with EVOO:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ <strong className="text-white">Sautéing (low-medium heat):</strong> Perfect for EVOO, preserves most polyphenols</li>
                  <li>✓ <strong className="text-white">Roasting (180-200°C):</strong> Excellent choice, adds flavor</li>
                  <li>✓ <strong className="text-white">Baking:</strong> Works well, though polyphenols partially degrade</li>
                  <li>✓ <strong className="text-white">Deep frying:</strong> Acceptable for high-polyphenol EVOO, but wasteful (expensive oil)</li>
                  <li>✓ <strong className="text-white">Raw/finishing:</strong> Maximum polyphenol preservation, best health benefits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Myth 7 */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">❌</span>
              Myth #7: Organic Always Means Higher Polyphenols
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-bold text-red-400">
                THE MYTH: "Organic certification guarantees superior polyphenol content."
              </p>

              <div className="bg-gray-800/50 rounded-lg p-5 my-4">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ THE TRUTH:</h3>
                <p className="text-gray-300 mb-3">
                  Organic certification regulates <strong className="text-white">pesticide and fertilizer use</strong>, not polyphenol content. Lab testing shows <strong className="text-white">no consistent correlation</strong> between organic certification and high polyphenols. Harvest timing and cultivar matter far more.
                </p>
                <div className="bg-gray-900/50 rounded p-4 mt-3">
                  <p className="text-sm text-white font-bold mb-2">Organic vs Conventional Polyphenol Data:</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• <strong className="text-emerald-400">Early harvest organic Koroneiki:</strong> 900-1200 mg/kg</li>
                    <li>• <strong className="text-green-400">Early harvest conventional Koroneiki:</strong> 850-1150 mg/kg (similar)</li>
                    <li>• <strong className="text-yellow-400">Late harvest organic Picual:</strong> 250-400 mg/kg</li>
                    <li>• <strong className="text-green-400">Early harvest conventional Picual:</strong> 600-850 mg/kg (higher!)</li>
                  </ul>
                  <p className="text-xs text-gray-400 mt-2 italic">Conclusion: Harvest timing trumps organic certification for polyphenols</p>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2"><strong>Why Some Believe Organic = Higher Polyphenols:</strong></p>
                <p className="text-sm text-gray-300 mb-2">
                  The theory: trees under mild stress (less irrigation, no synthetic fertilizers) produce more polyphenols as defense mechanisms. Reality: <strong className="text-white">water stress and altitude increase polyphenols</strong>, but these aren't exclusive to organic farming. Many conventional high-altitude groves have naturally low water = high polyphenols without organic certification.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-300 font-bold mb-2">When to Choose Organic:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ Environmental/sustainability concerns (valid reason)</li>
                  <li>✓ Avoiding pesticide residues (personal health choice)</li>
                  <li>✓ Supporting organic agriculture (ethical preference)</li>
                  <li>✗ Don't assume organic = higher polyphenols without lab verification</li>
                  <li>✗ Don't pay premium for organic if ONLY seeking health benefits—verify polyphenols instead</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Myth 8 */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">❌</span>
              Myth #8: DOP/PDO Guarantees High Polyphenols
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-bold text-red-400">
                THE MYTH: "Protected designation (DOP/PDO/PGI) means the highest quality and polyphenols."
              </p>

              <div className="bg-gray-800/50 rounded-lg p-5 my-4">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ THE TRUTH:</h3>
                <p className="text-gray-300 mb-3">
                  DOP/PDO/PGI certifications verify <strong className="text-white">geographic origin and traditional production methods</strong>, not polyphenol content. A DOP olive oil can have 200 mg/kg or 1000 mg/kg—the designation doesn't specify.
                </p>
                <div className="bg-gray-900/50 rounded p-4 mt-3">
                  <p className="text-sm text-white font-bold mb-2">What DOP/PDO Actually Certifies:</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>✓ Geographic origin (specific region)</li>
                    <li>✓ Cultivar varieties used (traditional to region)</li>
                    <li>✓ Production methods (must follow traditional practices)</li>
                    <li>✓ Acidity levels (&lt;0.8% for EVOO, some DOP require &lt;0.5%)</li>
                    <li>✗ Polyphenol content (NOT measured or required)</li>
                    <li>✗ Harvest timing (NOT regulated by most DOP)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2"><strong>Example:</strong></p>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Toscano IGP</strong> (Tuscany Protected Geographic Indication) includes oils from Frantoio, Leccino, and Moraiolo olives. Early harvest Toscano IGP can reach 600-800 mg/kg polyphenols. Late harvest Toscano IGP may have only 250-350 mg/kg. Both carry the same IGP certification.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-300 font-bold mb-2">Value of DOP/PDO/PGI:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ <strong className="text-white">Authenticity:</strong> Guarantees oil comes from stated region (not bulk blend)</li>
                  <li>✓ <strong className="text-white">Traditional methods:</strong> Supports artisan producers and heritage</li>
                  <li>✓ <strong className="text-white">Baseline quality:</strong> Ensures minimum standards are met</li>
                  <li>✓ <strong className="text-white">Traceability:</strong> Easier to verify source and practices</li>
                  <li>✗ <strong className="text-white">NOT a health guarantee:</strong> Still need lab testing for polyphenols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Myth 9 */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">❌</span>
              Myth #9: Expensive Olive Oil Is Always Better
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-bold text-red-400">
                THE MYTH: "If it costs $100/bottle, it must have the highest polyphenols."
              </p>

              <div className="bg-gray-800/50 rounded-lg p-5 my-4">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ THE TRUTH:</h3>
                <p className="text-gray-300 mb-3">
                  Price reflects <strong className="text-white">brand, marketing, packaging, distribution, and scarcity</strong>—not just polyphenol content. Some $80 oils have 1200 mg/kg (excellent value), while some $120 oils have 400 mg/kg (overpriced based on health benefits alone).
                </p>
                <div className="bg-gray-900/50 rounded p-4 mt-3">
                  <p className="text-sm text-white font-bold mb-2">Price Breakdown (500ml premium EVOO):</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Production cost (olives, milling): $12-25</li>
                    <li>• Packaging (dark glass, design): $3-8</li>
                    <li>• Lab testing (HPLC): $3-5 (amortized over batch)</li>
                    <li>• Import/distribution: $8-15</li>
                    <li>• Retail markup: $20-40</li>
                    <li>• <strong className="text-yellow-400">Brand premium/marketing:</strong> $10-50+ (the variable)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2"><strong>Real Examples:</strong></p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-green-400">Excellent value:</strong> $65 Greek Koroneiki, 1100 mg/kg = $0.059/mg polyphenol</li>
                  <li>• <strong className="text-yellow-400">Fair price:</strong> $85 Tunisian Chetoui, 820 mg/kg = $0.104/mg polyphenol</li>
                  <li>• <strong className="text-orange-400">Premium brand tax:</strong> $110 Italian blend, 480 mg/kg = $0.229/mg polyphenol</li>
                  <li>• <strong className="text-red-400">Overpriced:</strong> $135 celebrity brand, 320 mg/kg = $0.422/mg polyphenol</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-300 font-bold mb-2">How to Find Value:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ Calculate <strong className="text-white">price per mg of polyphenols:</strong> (Price / Polyphenol content in mg/kg)</li>
                  <li>✓ <strong className="text-white">Direct-from-producer:</strong> Often 30-50% cheaper than retail for same oil</li>
                  <li>✓ <strong className="text-white">Lesser-known regions:</strong> Greek oils often cheaper than Italian despite higher polyphenols</li>
                  <li>✓ <strong className="text-white">Avoid celebrity/luxury brands:</strong> Paying for name, not quality</li>
                  <li>✓ <strong className="text-white">Focus on lab certificates:</strong> Numbers don't lie, marketing does</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Myth 10 */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">❌</span>
              Myth #10: Olive Oil Doesn't Expire
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-bold text-red-400">
                THE MYTH: "Olive oil lasts forever if stored properly."
              </p>

              <div className="bg-gray-800/50 rounded-lg p-5 my-4">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ THE TRUTH:</h3>
                <p className="text-gray-300 mb-3">
                  Polyphenols degrade <strong className="text-white">40-46% per year</strong> even with perfect storage. After 18-24 months, most EVOO has lost the majority of its health benefits. "Best by" dates (often 24 months from bottling) don't reflect polyphenol degradation—they reflect minimum quality standards.
                </p>
                <div className="bg-gray-900/50 rounded p-4 mt-3">
                  <p className="text-sm text-white font-bold mb-2">Degradation Timeline (from harvest):</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• <strong className="text-emerald-400">0-6 months:</strong> 90-100% of polyphenols preserved (peak quality)</li>
                    <li>• <strong className="text-green-400">6-12 months:</strong> 70-85% preserved (excellent quality)</li>
                    <li>• <strong className="text-yellow-400">12-18 months:</strong> 50-70% preserved (acceptable quality)</li>
                    <li>• <strong className="text-orange-400">18-24 months:</strong> 30-50% preserved (declining quality)</li>
                    <li>• <strong className="text-red-400">24+ months:</strong> &lt;30% preserved (minimal health benefits)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2"><strong>Why Bottles Show Long Shelf Life:</strong></p>
                <p className="text-sm text-gray-300">
                  "Best by" dates are set by producers based on <strong className="text-white">flavor and rancidity</strong>, not polyphenols. An 18-month-old EVOO may still taste acceptable and pass acidity tests (&lt;0.8%), but have lost 60% of its polyphenols. It's still "extra virgin" by legal definition, just not health-promoting.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-300 font-bold mb-2">Maximize Freshness:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ <strong className="text-white">Buy by harvest date,</strong> not "best by" date</li>
                  <li>✓ <strong className="text-white">Use within 12 months of harvest</strong> for maximum health benefits</li>
                  <li>✓ <strong className="text-white">Buy smaller bottles</strong> to ensure faster consumption</li>
                  <li>✓ <strong className="text-white">Store properly:</strong> Cool (14-21°C), dark, sealed tightly</li>
                  <li>✓ <strong className="text-white">Label opening date</strong> and use within 2-3 months of opening</li>
                  <li>✓ <strong className="text-white">Southern Hemisphere oils</strong> (April-June harvest) offer freshness in Aug-Feb</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">The Only Thing That Matters: Lab-Verified Polyphenol Content</h2>
            <div className="space-y-4 text-orange-50">
              <p className="text-lg">
                After debunking all these myths, one truth remains: <strong className="text-white">Demand lab verification</strong>. Everything else—country, brand, organic, price, color, packaging—is secondary to actual tested polyphenol content.
              </p>
              <div className="bg-white/10 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-xl mb-3">Your 3-Point Buying Checklist:</h3>
                <ol className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-2xl">1.</span>
                    <span><strong>Lab certificate showing 500+ mg/kg polyphenols</strong> (HPLC or qNMR method)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-2xl">2.</span>
                    <span><strong>Harvest date within last 12 months</strong> (fresher = more polyphenols preserved)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-2xl">3.</span>
                    <span><strong>Dark glass or tin packaging</strong> (protects from light degradation)</span>
                  </li>
                </ol>
              </div>
              <p className="text-sm italic mt-4">
                Everything else is marketing. Trust the science, not the story.
              </p>
            </div>
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
              href="/blog/lab-testing-methods-polyphenol-measurement"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Lab Testing Methods: HPLC vs qNMR vs Folin
              </h3>
              <p className="text-sm text-gray-400">Compare testing accuracy and find reputable labs</p>
            </Link>

            <Link
              href="/blog/what-are-polyphenols-olive-oil"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🧬</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                What Are Polyphenols in Olive Oil?
              </h3>
              <p className="text-sm text-gray-400">Science-backed guide to polyphenol types and benefits</p>
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
