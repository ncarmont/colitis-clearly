import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Spot Fake Olive Oil: 8 Tests That Actually Work (2026)',
  description: 'Up to 80% of "extra virgin" olive oil sold in supermarkets is adulterated or mislabeled. Learn 8 proven methods to detect fake olive oil and buy only the real thing.',
  keywords: 'fake olive oil, how to spot fake olive oil, olive oil fraud, adulterated olive oil, real EVOO test, olive oil refrigerator test, olive oil authentication, extra virgin olive oil mislabeling',
  openGraph: {
    title: 'How to Spot Fake Olive Oil: 8 Tests That Actually Work',
    description: 'Olive oil fraud is rampant. Learn the best methods to identify adulterated, mislabeled, or low-quality EVOO before you buy.',
    type: 'article',
  }
}

export default function FakeOliveOilPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">How to Spot Fake Olive Oil</span>
        </div>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-bold rounded-full">
              Buyer&apos;s Guide
            </span>
            <span className="text-gray-500 text-sm">📖 9 min read</span>
            <span className="text-gray-500 text-sm">📅 Feb 23, 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            How to Spot Fake Olive Oil: 8 Tests That Actually Work
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Studies show up to 80% of olive oil labeled &quot;extra virgin&quot; fails to meet the standard. Some is diluted with cheaper oils. Some is simply rancid. Here&apos;s how to protect yourself — and what to buy instead.
          </p>
        </header>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "How to Spot Fake Olive Oil: 8 Tests That Actually Work (2026)",
              "description": "Up to 80% of extra virgin olive oil sold in supermarkets is adulterated or mislabeled. Learn 8 proven methods to detect fake olive oil.",
              "datePublished": "2026-02-23",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "publisher": {
                "@type": "Organization",
                "name": "EVOO Rankings",
                "url": "https://www.best-olive-oil-ranked.com"
              }
            })
          }}
        />

        <div className="prose prose-lg prose-invert max-w-none space-y-12">

          {/* The Problem */}
          <section>
            <div className="bg-red-900/20 border border-red-700/40 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-red-400 mb-3">⚠️ The Scale of Olive Oil Fraud</h2>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-red-900/30 rounded-xl p-4">
                  <div className="text-3xl font-bold text-red-300">69%</div>
                  <div className="text-sm text-gray-400 mt-1">of imported EVOO failed UC Davis quality tests</div>
                </div>
                <div className="bg-red-900/30 rounded-xl p-4">
                  <div className="text-3xl font-bold text-red-300">$1.5B</div>
                  <div className="text-sm text-gray-400 mt-1">estimated annual fraud in the global olive oil market</div>
                </div>
                <div className="bg-red-900/30 rounded-xl p-4">
                  <div className="text-3xl font-bold text-red-300">Top 5</div>
                  <div className="text-sm text-gray-400 mt-1">most adulterated foods globally (Interpol / Europol)</div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Olive oil is consistently ranked among the world&apos;s most adulterated foods. The 2011 UC Davis study shocked the industry: 69% of imported extra virgin olive oils on US supermarket shelves failed international EVOO standards. The problem has improved somewhat since then — but fraud remains rampant, especially at the cheaper end of the market.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Common forms of fraud include blending real EVOO with cheaper refined olive oil, sunflower oil, or canola oil; mislabeling lower-grade olive oil as &quot;extra virgin&quot;; falsifying harvest dates; and misrepresenting geographic origin (e.g., labeling Spanish or Tunisian oil as &quot;Italian&quot;).
            </p>
          </section>

          {/* What Makes Real EVOO */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">What Does Real Extra Virgin Olive Oil Actually Mean?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              True extra virgin olive oil (EVOO) must meet strict standards: free acidity below 0.8%, peroxide value below 20 mEq O₂/kg, correct UV absorption levels, and sensory characteristics assessed by a trained tasting panel. It must be produced solely by mechanical means — no heat, no chemical solvents. Any oil that fails these tests legally cannot be called EVOO.
            </p>

            <div className="bg-green-900/20 border border-green-700/40 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">🏆 Key EVOO Standards (IOC / EU)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Free acidity', value: '≤ 0.8%', note: 'Higher = oxidation/poor quality' },
                  { label: 'Peroxide value', value: '≤ 20 mEq/kg', note: 'Measures rancidity' },
                  { label: 'Polyphenols', value: 'EU health claim: ≥250 mg/kg', note: 'Most supermarket EVOO fails this' },
                  { label: 'Sensory', value: 'No defects; positive fruitiness', note: 'Requires trained panel tasting' },
                ].map((item, i) => (
                  <div key={i} className="bg-green-900/30 rounded-lg p-3">
                    <div className="font-semibold text-white">{item.label}</div>
                    <div className="text-green-300 text-sm font-bold">{item.value}</div>
                    <div className="text-gray-400 text-xs mt-1">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8 Tests */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">8 Ways to Identify Fake or Low-Quality Olive Oil</h2>

            {[
              {
                num: 1,
                title: 'Check the Harvest Date (Not Just "Best By")',
                icon: '📅',
                color: 'from-blue-600 to-blue-700',
                content: `The single most important label check. Real quality producers always print the actual harvest date (e.g., "Harvest: Oct 2025") on the bottle. A "best by" date alone tells you very little — it's typically set 18–24 months after bottling, not after harvest. If there's no harvest date, that's a red flag. The best EVOOs are consumed within 12–18 months of harvest. Polyphenols degrade roughly 40–50% per year at room temperature.`,
                verdict: 'Red flag: No harvest date visible, or "best by" is more than 2 years from purchase',
              },
              {
                num: 2,
                title: 'Look for Lab-Verified Polyphenol Data',
                icon: '🔬',
                color: 'from-purple-600 to-purple-700',
                content: `The EU allows an olive oil health claim only if polyphenols (measured as hydroxytyrosol and derivatives) total ≥250 mg/kg. Most supermarket EVOOs contain 50–150 mg/kg — well below this threshold. Premium producers publish their HPLC or qNMR polyphenol certificates online. If a brand can't produce lab data, they're unlikely to meet the threshold. This is perhaps the clearest indicator of authentic, health-beneficial EVOO.`,
                verdict: 'Green flag: Certificate of Analysis (COA) available with HPLC/qNMR polyphenol values ≥250 mg/kg',
              },
              {
                num: 3,
                title: 'The Peppery Throat Test',
                icon: '🌶️',
                color: 'from-red-600 to-red-700',
                content: `Take a small sip of the oil and hold it on your tongue for a few seconds, then swallow. Real high-polyphenol EVOO will produce a noticeable peppery or burning sensation at the back of your throat — sometimes causing a cough. This is caused by oleocanthal, a polyphenol with ibuprofen-like anti-inflammatory properties. The stronger the burn, the higher the oleocanthal content. Mild tingling = moderate polyphenols. No sensation at all = likely low-quality, refined, or adulterated oil.`,
                verdict: 'Green flag: Distinct peppery bite in the throat (1–3 coughs = excellent); Red flag: Completely smooth with no sensation',
              },
              {
                num: 4,
                title: 'Smell and Taste for Freshness',
                icon: '👃',
                color: 'from-emerald-600 to-green-700',
                content: `Real fresh EVOO smells grassy, peppery, fruity, or herbaceous — think fresh-cut grass, artichoke, green tomato, or bitter almonds. It should taste slightly bitter and peppery, with a clean finish. Warning signs of poor quality or rancidity: a greasy, waxy, or crayon-like smell; a musty or winey/vinegary scent; or a flat, tasteless, "oily" flavour with no bitterness. These are sensory defects that automatically disqualify an oil from EVOO status.`,
                verdict: 'Green flag: Fresh, grassy, peppery, fruity aroma; Red flag: Rancid, waxy, musty, or flat/neutral taste',
              },
              {
                num: 5,
                title: 'The Refrigerator Test (Partially Useful)',
                icon: '🧊',
                color: 'from-cyan-600 to-blue-700',
                content: `You've probably heard: put the oil in the fridge — if it solidifies, it's real; if not, it's fake. The truth is more nuanced. Most olive oils do solidify or turn cloudy at refrigerator temperatures (4–7°C) due to their high monounsaturated fat content. However, some legitimate light olive oils or blends may not fully solidify. And some fake oils mixed with palm oil will also solidify. So a "pass" here is encouraging but not definitive. A "fail" (stays completely liquid and clear) is a stronger red flag.`,
                verdict: 'Partial indicator: Solidification/cloudiness is encouraging; staying fully liquid at fridge temp is suspicious',
              },
              {
                num: 6,
                title: 'Check for Certifications and Traceability',
                icon: '🏅',
                color: 'from-yellow-600 to-amber-700',
                content: `Legitimate premium EVOOs typically carry verifiable certifications: PDO (Protected Designation of Origin) or PGI status for European oils; IOC (International Olive Council) certification; USDA Organic; and increasingly, direct QR codes linking to batch lab results. Be cautious of vague claims like "product of multiple EU countries" — this is legally permitted blending language that often signals mixed-origin, commodity-grade oil. The best producers can trace every bottle to a specific farm, harvest date, and laboratory analysis.`,
                verdict: 'Green flag: PDO/PGI certification + specific origin + QR code to lab data; Red flag: "Product of multiple countries" with no further detail',
              },
              {
                num: 7,
                title: 'Know the Price Floor',
                icon: '💰',
                color: 'from-green-600 to-emerald-700',
                content: `Authentic, high-quality EVOO cannot be produced at rock-bottom prices. The cost of harvesting, cold-pressing, lab testing, and proper glass bottling means genuine premium EVOO rarely retails for under $15–20 per 500ml. If you're seeing "extra virgin" at $6–9 for a large bottle, something is almost certainly compromised — whether that's the quality, the origin claims, the freshness, or all three. Supermarket "own label" EVOOs costing £3–5 per litre are almost never meeting the true EVOO standard.`,
                verdict: 'Rule of thumb: Quality EVOO costs at least $15–25 per 500ml; very cheap "EVOO" is almost always mislabeled',
              },
              {
                num: 8,
                title: 'Research the Producer',
                icon: '🔍',
                color: 'from-indigo-600 to-violet-700',
                content: `The most reliable method: buy from producers you can verify. Search for the brand online. Do they show their farm? Their lab results? Their harvest records? Do they have reviews from verified olive oil experts? Awards from organizations like the New York International Olive Oil Competition (NYIOOC), World Olive Oil Exhibition, or the Olive Japan International Competition carry weight. Avoid brands that make vague health claims without data, have no digital presence, or can't tell you where specifically their olives were grown.`,
                verdict: 'Green flag: Named farm/region, published COA, recognized awards, active producer; Red flag: No origin detail, no lab data, generic branding',
              },
            ].map((test) => (
              <div key={test.num} className="bg-slate-800/50 border border-gray-700/50 rounded-2xl overflow-hidden mb-6">
                <div className={`bg-gradient-to-r ${test.color} px-6 py-4 flex items-center gap-4`}>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold text-white text-lg">
                    {test.num}
                  </div>
                  <span className="text-2xl">{test.icon}</span>
                  <h3 className="text-xl font-bold text-white">{test.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">{test.content}</p>
                  <div className="bg-slate-700/50 rounded-lg px-4 py-3 text-sm text-gray-300 border-l-4 border-green-500">
                    <span className="font-semibold text-green-400">Verdict: </span>{test.verdict}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* The Most Reliable Solution */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">The Most Reliable Solution: Buy Lab-Verified EVOO</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Home tests are useful — but the most reliable way to guarantee you&apos;re getting real, high-polyphenol EVOO is to buy from producers who publish their laboratory analysis. HPLC (High Performance Liquid Chromatography) and qNMR (quantitative Nuclear Magnetic Resonance) are the gold-standard methods for measuring polyphenol content and detecting adulteration.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The oils ranked on this site are chosen specifically because they have verifiable polyphenol data — not just marketing claims. Every top-ranked oil either has a published Certificate of Analysis (COA) or a cited independent lab value that can be cross-referenced.
            </p>

            <div className="bg-green-900/20 border border-green-700/40 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">✅ What Lab-Verified Oils Look Like</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  'Published COA (Certificate of Analysis) with HPLC or qNMR polyphenol values',
                  'Specific polyphenol breakdown (hydroxytyrosol, tyrosol, oleocanthal, oleacein)',
                  'Acidity and peroxide value listed',
                  'Named lab (e.g., University of Athens, IOC-certified facility)',
                  'Batch/lot traceable to specific harvest date and farm',
                  'Polyphenols above 250 mg/kg (EU health claim threshold)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Common Frauds */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">The Most Common Types of Olive Oil Fraud</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Blending with Cheaper Oils',
                  icon: '🪣',
                  desc: 'Mixing EVOO with refined olive oil, sunflower, canola, or hazelnut oil. This dilutes polyphenols while looking identical to real EVOO.',
                },
                {
                  title: 'Downgrading',
                  icon: '📉',
                  desc: 'Labeling lower-grade olive oil (virgin, lampante, or refined) as extra virgin. Very common in commodity markets.',
                },
                {
                  title: 'Origin Mislabeling',
                  icon: '🌍',
                  desc: '"Product of Italy" may contain Spanish, Greek, or Tunisian oil bottled in Italy. Legally grey, commercially misleading.',
                },
                {
                  title: 'Old Stock / Rancid Oil',
                  icon: '⌛',
                  desc: 'Using last year\'s oil without updating harvest dates, or selling post-expiry oil that has degraded beyond EVOO standards.',
                },
                {
                  title: 'Color Manipulation',
                  icon: '🎨',
                  desc: 'Adding chlorophyll or beta-carotene to make refined oil look like premium EVOO. Explains unusually vivid green color.',
                },
                {
                  title: 'Fake Certifications',
                  icon: '🏷️',
                  desc: 'Using PDO/PGI-style logos or lab imagery without actual certification. Always verify certifications directly with the issuing body.',
                },
              ].map((fraud, i) => (
                <div key={i} className="bg-slate-800/50 border border-gray-700/50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{fraud.icon}</span>
                    <h4 className="font-bold text-white">{fraud.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{fraud.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Reference */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Quick Reference: Red Flags vs Green Flags</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-900/20 border border-red-700/40 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">🚩 Red Flags</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    'No harvest date on label',
                    'Price under $12 per 500ml',
                    '"Product of multiple EU countries"',
                    'No lab data or COA available',
                    'Stored in clear plastic bottles',
                    'Stays fully liquid after 30 min in fridge',
                    'No peppery sensation when tasted',
                    'No named farm, estate, or region',
                    'Extremely green or golden-yellow color (may be dyed)',
                    'Brand with no web presence or producer story',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-900/20 border border-green-700/40 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">✅ Green Flags</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    'Harvest date within last 12–18 months',
                    'Published COA with HPLC/qNMR results',
                    'Polyphenols ≥250 mg/kg stated',
                    'Specific farm, village, or estate named',
                    'Dark glass bottle with UV protection',
                    'PDO/PGI certification or USDA Organic',
                    'Peppery/bitter taste with throat tingle',
                    'Recognized awards (NYIOOC, etc.)',
                    'QR code linking to batch lab data',
                    'Transparent producer with verifiable history',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Bottom Line</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Olive oil fraud is widespread, but it&apos;s not unavoidable. The combination of checking the harvest date, buying from producers with published lab results, and paying a fair price for genuine quality will protect you from the vast majority of fraudulent products.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The easiest shortcut: buy from ranked, lab-verified producers. Our rankings focus exclusively on oils where polyphenol content has been independently verified via HPLC or qNMR testing — the same standards used by the International Olive Council.
            </p>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>View Lab-Verified Rankings</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </section>

          {/* Related Posts */}
          <section className="pt-8 border-t border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: '/blog/how-to-choose-high-polyphenol-olive-oil', title: 'How to Choose High Polyphenol Olive Oil', icon: '🛒' },
                { href: '/blog/lab-testing-methods-polyphenol-measurement', title: 'HPLC vs qNMR: Lab Testing Methods Explained', icon: '⚗️' },
                { href: '/blog/olive-oil-polyphenol-myths-debunked', title: 'Olive Oil Polyphenol Myths Debunked', icon: '❌' },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="flex items-center gap-3 p-4 bg-slate-800/50 border border-gray-700/50 rounded-xl hover:border-green-500/50 hover:bg-slate-700/50 transition-all group"
                >
                  <span className="text-2xl">{post.icon}</span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-green-400 transition-colors">{post.title}</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </article>
    </main>
  )
}
