import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Olive Oil for Brain Health & Dementia Prevention (Research 2024)',
  description: 'Science-backed guide to olive oil for brain health, Alzheimer\'s prevention, and cognitive function. Latest research on oleocanthal, MIND diet, and neuroprotection.',
  keywords: 'olive oil brain health, dementia prevention EVOO, Alzheimer\'s olive oil, oleocanthal brain, MIND diet, cognitive function olive oil',
  openGraph: {
    title: 'Olive Oil for Brain Health & Dementia Prevention',
    description: 'Latest research on olive oil for neuroprotection and cognitive health',
    type: 'article',
  }
}

export default function BrainHealthOliveOilPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Olive Oil for Brain Health</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm font-bold rounded-full">
              Neuroscience
            </span>
            <span className="text-gray-500 text-sm">14 min read</span>
            <span className="text-gray-500 text-sm">Oct 2, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Olive Oil for Brain Health & Dementia Prevention
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Emerging research shows high polyphenol olive oil may be one of our best defenses against Alzheimer's and cognitive decline. Here's what the latest neuroscience reveals.
          </p>
        </header>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Olive Oil for Brain Health & Dementia Prevention",
              "datePublished": "2024-10-02",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "description": "Latest research on olive oil for neuroprotection and cognitive health"
            })
          }}
        />

        {/* Quick Summary */}
        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">🧠</span>
            Brain Benefits at a Glance
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong className="text-white">29% lower neurodegenerative death</strong> risk (Harvard study)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong className="text-white">Oleocanthal clears amyloid-β</strong> plaques in brain</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong className="text-white">MIND diet reduces Alzheimer's</strong> risk by 53%</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong className="text-white">Improves cognitive function</strong> in elderly adults</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong className="text-white">Protects blood-brain barrier</strong> from oxidative damage</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong className="text-white">Best: 500+ mg/kg polyphenols</strong> for neuroprotection</span>
            </div>
          </div>
        </div>

        {/* The Alzheimer's Crisis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🚨</span>
            The Alzheimer's Crisis & Why We Need Solutions
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Alzheimer's disease is the 6th leading cause of death in the US, affecting 6.7 million Americans. With no cure and limited pharmaceutical options, prevention through diet is critical.
            </p>

            <div className="bg-gradient-to-br from-red-900/30 to-orange-800/20 border border-red-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">The Sobering Statistics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-400 mb-2">1 in 3</div>
                  <p className="text-sm text-gray-300">Seniors die with Alzheimer's or dementia—more than breast and prostate cancer combined</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-400 mb-2">$345B</div>
                  <p className="text-sm text-gray-300">Annual cost of Alzheimer's care in US (2023)</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-400 mb-2">12.7M</div>
                  <p className="text-sm text-gray-300">Projected cases by 2050 if no prevention strategies</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-400 mb-2">0</div>
                  <p className="text-sm text-gray-300">FDA-approved drugs that reverse Alzheimer's</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">The Mediterranean Advantage</h3>
              <p className="text-green-50 mb-3">
                Mediterranean populations have significantly lower Alzheimer's rates than Western countries. Researchers have identified high polyphenol olive oil as a key protective factor.
              </p>
              <ul className="text-green-50 space-y-2 text-sm">
                <li>• Greek islands: 50% lower Alzheimer's prevalence vs. US</li>
                <li>• Southern Italy: Dementia rates half of Northern Europe</li>
                <li>• Correlation with 50-100ml daily EVOO consumption</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Oleocanthal Research */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔬</span>
            Oleocanthal: The Brain's Best Friend
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Oleocanthal—the polyphenol that causes the peppery throat sensation—has emerged as a star neuroprotective compound in recent research.
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Temple University Breakthrough (2017)</h3>
              <p className="text-gray-300 mb-4">
                Researchers at Temple University's Alzheimer's Center made a remarkable discovery: oleocanthal-rich olive oil reduced Alzheimer's pathology in mice.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Study Design</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Transgenic mice bred to develop Alzheimer's</li>
                    <li>• Fed oleocanthal-rich EVOO for 6 months</li>
                    <li>• Compared to control mice on regular diet</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Results</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong className="text-white">40% reduction</strong> in amyloid-β plaques</li>
                    <li>• <strong className="text-white">35% reduction</strong> in tau tangles</li>
                    <li>• <strong className="text-white">Improved memory</strong> in behavioral tests</li>
                    <li>• <strong className="text-white">Enhanced autophagy</strong> (cellular cleanup)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">How Oleocanthal Protects the Brain</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">1. Amyloid-β Clearance</h4>
                  <p className="text-sm text-gray-300">Oleocanthal enhances the brain's ability to clear toxic amyloid-β proteins—the hallmark of Alzheimer's. It stimulates proteins (P-glycoprotein and LRP1) that transport amyloid out of the brain.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">2. Tau Protein Reduction</h4>
                  <p className="text-sm text-gray-300">Reduces hyperphosphorylated tau tangles, another Alzheimer's pathology marker. Tau tangles disrupt neuronal transport and cause cell death.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">3. Blood-Brain Barrier Protection</h4>
                  <p className="text-sm text-gray-300">Strengthens BBB integrity, preventing toxic substances from entering brain tissue while allowing nutrient transport.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">4. Neuroinflammation Suppression</h4>
                  <p className="text-sm text-gray-300">Reduces microglial activation and inflammatory cytokines (IL-1β, TNF-α) that damage neurons.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">5. Autophagy Activation</h4>
                  <p className="text-sm text-gray-300">Stimulates cellular "recycling" that removes damaged proteins and organelles, keeping neurons healthy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Human Studies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">👥</span>
            Human Studies: Real-World Cognitive Benefits
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-gradient-to-br from-teal-900/30 to-cyan-800/20 border border-teal-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-teal-300 mb-4">PREDIMED-NAVARRA Study (2015)</h3>
              <p className="text-gray-300 mb-4">
                Sub-study of PREDIMED examining cognitive outcomes in 447 participants (average age 67) over 6.5 years.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-bold text-white mb-3">Results by Diet Group</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gray-900/50 rounded p-3">
                    <span className="text-sm"><strong className="text-white">Med Diet + High Polyphenol EVOO</strong></span>
                    <span className="text-green-400 font-bold">+13% cognitive improvement</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-900/50 rounded p-3">
                    <span className="text-sm"><strong className="text-white">Med Diet + Nuts</strong></span>
                    <span className="text-blue-400 font-bold">+5% cognitive improvement</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-900/50 rounded p-3">
                    <span className="text-sm"><strong className="text-white">Low-Fat Control</strong></span>
                    <span className="text-red-400 font-bold">-2% cognitive decline</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-800/20 border border-indigo-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-indigo-300 mb-4">Harvard Nurses' Health Study (2022)</h3>
              <p className="text-gray-300 mb-3">
                The same 92,000-person, 28-year study that showed cardiovascular benefits also tracked neurodegenerative outcomes.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">Key Finding</h4>
                <p className="text-gray-300 mb-3">
                  Consuming &gt;7g olive oil daily (1/2 tablespoon) was associated with <strong className="text-white">29% lower risk of dying from neurodegenerative disease</strong> including Alzheimer's and Parkinson's.
                </p>
                <p className="text-sm text-gray-400">
                  This was independent of overall diet quality, suggesting olive oil has specific neuroprotective effects beyond general healthy eating.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-orange-800/20 border border-amber-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-300 mb-4">MIND Diet Research</h3>
              <p className="text-gray-300 mb-4">
                The MIND diet (Mediterranean-DASH Intervention for Neurodegenerative Delay) specifically emphasizes olive oil as primary fat source.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Rush University Study</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 923 participants, ages 58-98</li>
                    <li>• Average 4.5 year follow-up</li>
                    <li>• <strong className="text-white">53% lower Alzheimer's risk</strong> for high adherence</li>
                    <li>• <strong className="text-white">35% lower risk</strong> even for moderate adherence</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">MIND Diet Components</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong className="text-white">Olive oil as primary fat</strong></li>
                    <li>• Leafy greens daily</li>
                    <li>• Berries 2+ times/week</li>
                    <li>• Nuts, beans, whole grains</li>
                    <li>• Fish weekly, poultry 2x/week</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Oils for Brain Health */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🏆</span>
            Best Olive Oils for Brain Health
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              For maximum neuroprotection, choose oils high in oleocanthal and total polyphenols (500+ mg/kg):
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-900/30 to-indigo-800/20 border-l-4 border-purple-500 rounded-r-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">SP360 Organic</h3>
                    <p className="text-gray-400">Greece • Koroneiki • 1462 mg/kg</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">HIGHEST OLEOCANTHAL</span>
                </div>
                <p className="text-gray-300 mb-3">
                  Exceptionally high oleocanthal content produces strong peppery finish. Ideal for amyloid-β clearance and neuroinflammation reduction.
                </p>
                <Link href="/" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                  View in Rankings →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-1">Pamako Premium</h3>
                <p className="text-gray-400 mb-3">Greece • Koroneiki • 1222 mg/kg</p>
                <p className="text-gray-300 mb-3">
                  From Kalamata region. High polyphenol diversity including oleocanthal, oleacein, and hydroxytyrosol for comprehensive brain protection.
                </p>
                <Link href="/" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                  View in Rankings →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-1">November Ultra Premium</h3>
                <p className="text-gray-400 mb-3">Tunisia • Chetoui • 847 mg/kg</p>
                <p className="text-gray-300 mb-3">
                  Tunisian Chetoui variety high in luteolin—a polyphenol with specific neuroprotective and anti-inflammatory properties.
                </p>
                <Link href="/" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                  View in Rankings →
                </Link>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-500 transition-all"
            >
              <span>View All High Polyphenol Oils</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Practical Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📋</span>
            How to Use Olive Oil for Brain Health
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">Optimal Dosage for Neuroprotection</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Minimum</div>
                  <div className="text-2xl font-bold text-blue-400">2 tbsp</div>
                  <p className="text-xs text-gray-300 mt-2">Shows benefits in observational studies</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border-2 border-green-500">
                  <div className="text-sm text-gray-400 mb-1">MIND Diet</div>
                  <div className="text-2xl font-bold text-green-400">3-4 tbsp</div>
                  <p className="text-xs text-gray-300 mt-2">Recommended for cognitive benefits</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Study Level</div>
                  <div className="text-2xl font-bold text-purple-400">4-6 tbsp</div>
                  <p className="text-xs text-gray-300 mt-2">Used in PREDIMED cognitive trials</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Complete MIND Diet for Brain Health</h3>
              <p className="text-gray-300 mb-4">Olive oil works best as part of comprehensive brain-healthy eating pattern:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Daily</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 3-4 tbsp high polyphenol EVOO</li>
                    <li>• 3+ servings vegetables (esp. leafy greens)</li>
                    <li>• Whole grains</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Weekly</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Berries 2+ times</li>
                    <li>• Fish 1+ time</li>
                    <li>• Beans, nuts, poultry regularly</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-orange-800/20 border border-amber-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-300 mb-4">Additional Brain-Healthy Practices</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">Consume raw when possible:</strong> Heat may degrade some neuroprotective polyphenols</li>
                <li>• <strong className="text-white">Choose high oleocanthal oils:</strong> Strong peppery finish indicates high levels</li>
                <li>• <strong className="text-white">Combine with berries:</strong> Synergistic antioxidant effects</li>
                <li>• <strong className="text-white">Start early:</strong> Alzheimer's pathology begins decades before symptoms</li>
                <li>• <strong className="text-white">Consistency matters:</strong> Daily consumption provides sustained neuroprotection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">The Bottom Line on Olive Oil & Brain Health</h2>
            <div className="text-purple-50 text-lg leading-relaxed space-y-4">
              <p>
                While more human trials are needed, the evidence for olive oil's neuroprotective effects is compelling. Oleocanthal's ability to clear amyloid-β plaques, combined with observational data showing lower dementia rates in Mediterranean populations, makes high polyphenol EVOO a smart choice for brain health.
              </p>
              <p>
                <strong>Evidence-based recommendations:</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Choose oils with 500+ mg/kg polyphenols, high in oleocanthal</li>
                <li>• Consume 3-4 tablespoons daily as part of MIND diet</li>
                <li>• Start early—don't wait for cognitive symptoms</li>
                <li>• Combine with other brain-healthy foods (berries, greens, fish)</li>
                <li>• Prioritize raw consumption to preserve polyphenols</li>
              </ul>
              <p className="pt-2">
                Olive oil alone won't prevent Alzheimer's, but as part of a Mediterranean diet pattern, it may be one of our best dietary defenses against cognitive decline.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all shadow-xl mt-6"
            >
              <span>View Brain-Healthy Oils</span>
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
              href="/blog/best-olive-oil-for-longevity"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">⏳</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Best Olive Oil for Longevity
              </h3>
              <p className="text-sm text-gray-400">Blue Zones data and anti-aging cellular mechanisms</p>
            </Link>

            <Link
              href="/blog/oleocanthal-oleacein-explained"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Oleocanthal & Oleacein Explained
              </h3>
              <p className="text-sm text-gray-400">Deep dive into brain-protective polyphenols</p>
            </Link>

            <Link
              href="/blog/health-benefits-high-polyphenol-evoo"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                7 Science-Backed Health Benefits
              </h3>
              <p className="text-sm text-gray-400">Complete health benefits beyond brain health</p>
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
