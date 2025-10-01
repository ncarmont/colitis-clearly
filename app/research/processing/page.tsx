import Link from 'next/link'

export const metadata = {
  title: "EVOO Processing Methods & Polyphenol Preservation | Production Guide",
  description: "How harvest timing, extraction methods, temperature control, and storage practices impact polyphenol retention in extra virgin olive oil. Best practices for maximum health benefits.",
}

export default function ProcessingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/research/overview" className="text-orange-100 hover:text-white mb-4 inline-block">
            ← Back to Overview
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Processing & Production Methods
          </h1>
          <p className="text-orange-100 text-xl">
            How harvest and extraction techniques preserve or destroy polyphenols
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Critical Window</h2>
            <p className="text-gray-700 mb-4">
              Even olives with the highest genetic potential can lose <strong>50-80% of their polyphenols</strong> through
              poor processing. The time between harvest and bottling is critical—every hour of delay, every degree above
              optimal temperature, and every exposure to oxygen degrades antioxidant content.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <p className="text-gray-800">
                <strong className="text-orange-800">Key Principle:</strong> High-quality producers treat olive oil extraction
                like <em>emergency medicine</em>—speed, precision, and sterile conditions are non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Harvest Timing - Most Critical */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">1. Harvest Timing - The Most Critical Decision</h2>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Early vs. Late Harvest Impact</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-lg border-t-4 border-green-600">
                <h4 className="font-bold text-green-800 mb-3 text-lg">Early Harvest (Green)</h4>
                <p className="text-sm text-gray-600 mb-3">October - Early November</p>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li>✓ <strong>Polyphenols:</strong> 600-1000+ mg/kg</li>
                  <li>✓ <strong>Chlorophyll:</strong> High (green color)</li>
                  <li>✓ <strong>Stability:</strong> Excellent (2+ year shelf life)</li>
                  <li>✓ <strong>Flavor:</strong> Intensely bitter/peppery</li>
                </ul>
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-800">
                    <strong>Trade-off:</strong> Only 10-15% oil yield. Expensive to produce.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-t-4 border-yellow-600">
                <h4 className="font-bold text-yellow-800 mb-3 text-lg">Mid Harvest (Turning)</h4>
                <p className="text-sm text-gray-600 mb-3">Late November</p>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li>✓ <strong>Polyphenols:</strong> 350-600 mg/kg</li>
                  <li>✓ <strong>Color:</strong> Yellow-green</li>
                  <li>✓ <strong>Stability:</strong> Good (18-month shelf life)</li>
                  <li>✓ <strong>Flavor:</strong> Moderate bitterness, fruity</li>
                </ul>
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-800">
                    <strong>Trade-off:</strong> 18-22% yield. Balanced approach.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-t-4 border-red-600">
                <h4 className="font-bold text-red-800 mb-3 text-lg">Late Harvest (Ripe/Black)</h4>
                <p className="text-sm text-gray-600 mb-3">December - January</p>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li>✗ <strong>Polyphenols:</strong> 150-350 mg/kg</li>
                  <li>✗ <strong>Color:</strong> Golden yellow</li>
                  <li>✗ <strong>Stability:</strong> Poor (6-12 month shelf life)</li>
                  <li>✗ <strong>Flavor:</strong> Mild, buttery, no pepper</li>
                </ul>
                <div className="bg-white p-3 rounded">
                  <p className="text-xs text-gray-800">
                    <strong>Why producers do it:</strong> 25-30% yield. Maximum profit.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Polyphenol Degradation During Ripening</h4>
              <p className="text-gray-700 text-sm mb-3">
                As olives ripen, enzymes break down polyphenols to make fruit palatable. This natural process
                happens <strong>whether olives stay on the tree or after harvest</strong>.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-gray-900 text-sm">
                  <strong>Critical Window:</strong> Green olives lose approximately <strong>50-100 mg/kg polyphenols
                  per week</strong> during late ripening stages. This is why harvest date matters more than any other factor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harvest to Mill Time */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Harvest-to-Mill Time - The Race Against Oxidation</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Once picked, olives begin to ferment and oxidize. Polyphenols degrade rapidly:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">0-4 Hours (Elite Standard)</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Polyphenol Retention:</strong> 95-100%<br/>
                    Premium producers mill immediately. Some have mobile mills in groves.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">4-12 Hours (Acceptable)</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Polyphenol Retention:</strong> 85-95%<br/>
                    Acceptable if olives kept cool and ventilated. Most quality producers meet this standard.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">12-24 Hours (Marginal)</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Polyphenol Retention:</strong> 70-85%<br/>
                    Fermentation begins. Noticeable quality loss. Common in mass-market production.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✗</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">24+ Hours (Poor Quality)</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Polyphenol Retention:</strong> &lt;70%<br/>
                    Significant oxidation and fermentation. May develop defects (musty, fermented flavors).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <p className="text-gray-800 text-sm">
                <strong>Red Flag:</strong> If a producer doesn&apos;t prominently display their harvest-to-mill time,
                assume it&apos;s longer than optimal. Transparency is a quality indicator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extraction Method */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">3. Extraction Method & Temperature Control</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Continuous Extraction (Preferred)</h3>
              <div className="mb-6">
                <img src="/api/placeholder/400/200" alt="Modern extraction" className="w-full h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4"/>
                <p className="text-gray-700 text-sm mb-4">
                  Two-phase or three-phase centrifugal systems. Crushes olives into paste, then separates oil via centrifuge.
                </p>
              </div>

              <h4 className="font-bold text-green-700 mb-3">Advantages:</h4>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li>✓ Continuous process (no batches, less oxidation)</li>
                <li>✓ Precise temperature control (digital monitoring)</li>
                <li>✓ Shorter processing time (30-45 minutes)</li>
                <li>✓ Nitrogen flushing capability</li>
                <li>✓ Easy cleaning (prevents cross-contamination)</li>
              </ul>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-800 text-sm">
                  <strong>Industry Standard:</strong> Most premium producers use continuous extraction kept below 25°C.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Stone Mill (Artisanal)</h3>
              <div className="mb-6">
                <img src="/api/placeholder/400/200" alt="Stone mill" className="w-full h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg mb-4"/>
                <p className="text-gray-700 text-sm mb-4">
                  Granite wheels crush olives, then paste is pressed between fiber mats. Centuries-old method.
                </p>
              </div>

              <h4 className="font-bold text-yellow-700 mb-3">Considerations:</h4>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li>± Slower process (1-2 hours)</li>
                <li>± More oxygen exposure</li>
                <li>± Temperature harder to control</li>
                <li>± Labor intensive</li>
                <li>+ Can produce exceptional oil when done correctly</li>
              </ul>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-800 text-sm">
                  <strong>Reality:</strong> Stone mill is romantic but <em>not inherently better</em>. Quality depends on
                  operator skill and temperature management.
                </p>
              </div>
            </div>
          </div>

          {/* Temperature Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Temperature: The Make-or-Break Factor</h3>

            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h4 className="font-bold text-green-800 mb-2">&lt;25°C (77°F) - Elite Standard</h4>
                <p className="text-gray-700 text-sm">
                  Maximum polyphenol preservation. Premium producers often target &lt;23°C. Lower oil yield but
                  maximum quality. Look for &quot;cold extracted&quot; or temperature certification on labels.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                <h4 className="font-bold text-yellow-800 mb-2">25-27°C (77-80°F) - Standard &quot;Cold Pressed&quot;</h4>
                <p className="text-gray-700 text-sm">
                  EU legal limit for &quot;cold pressed&quot; designation. Acceptable but near the edge. Some polyphenol loss
                  but still produces quality EVOO.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-red-800 mb-2">&gt;27°C (&gt;80°F) - Avoid</h4>
                <p className="text-gray-700 text-sm">
                  Significant polyphenol degradation. Enzymes denature. Cannot legally be called &quot;cold pressed&quot;.
                  Common in mass-market production to maximize yield.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800">
                <strong>Why Temperature Matters:</strong> Heat increases oil yield by 5-10% but destroys polyphenols
                and volatile aromatic compounds. Every degree above 25°C accelerates degradation exponentially.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Packaging */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Storage & Packaging</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Post-Extraction Protection</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Optimal Storage Conditions:</h4>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Temperature:</strong> 12-18°C (54-64°F) constant</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Light:</strong> Complete darkness or UV-blocking tanks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Oxygen:</strong> Nitrogen-flushed stainless steel tanks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Bottling:</strong> On-demand to minimize bottle age</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4">Packaging Best Practices:</h4>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Dark glass:</strong> Protects from UV light damage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Metal tins:</strong> Complete light and oxygen barrier</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Bag-in-box:</strong> Excellent for bulk, prevents oxidation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Clear glass:</strong> UV destroys polyphenols rapidly</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Plastic bottles:</strong> Allows oxygen permeation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
              <h4 className="font-bold text-orange-900 mb-2">Polyphenol Degradation Over Time</h4>
              <p className="text-gray-800 text-sm mb-3">
                Even in optimal conditions, EVOO loses approximately <strong>10-15% polyphenols per year</strong>:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• <strong>Year 1:</strong> 90-95% retention (excellent)</li>
                <li>• <strong>Year 2:</strong> 75-85% retention (good)</li>
                <li>• <strong>Year 3:</strong> 50-70% retention (acceptable for cooking only)</li>
              </ul>
              <p className="text-gray-800 text-sm mt-3">
                <strong>Takeaway:</strong> Buy current harvest only. Use within 12-18 months of harvest date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Indicators */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Processing Indicators - What to Look For</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              <div className="flex gap-4 items-start pb-4 border-b border-gray-200">
                <span className="text-2xl text-green-600">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Harvest Date on Label</h4>
                  <p className="text-gray-700 text-sm">
                    Premium producers prominently display harvest month/year. Absence is a red flag.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-4 border-b border-gray-200">
                <span className="text-2xl text-green-600">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">&quot;Cold Extracted&quot; or Temperature Certification</h4>
                  <p className="text-gray-700 text-sm">
                    Look for &lt;25°C or &lt;27°C certification. Some producers specify exact temperature.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-4 border-b border-gray-200">
                <span className="text-2xl text-green-600">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Harvest-to-Mill Time Statement</h4>
                  <p className="text-gray-700 text-sm">
                    Elite producers advertise &quot;2-hour harvest-to-press&quot; or similar. Shows quality commitment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-4 border-b border-gray-200">
                <span className="text-2xl text-green-600">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Polyphenol Test Results</h4>
                  <p className="text-gray-700 text-sm">
                    Best-in-class producers provide lab certificates with exact mg/kg polyphenol content.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-4 border-b border-gray-200">
                <span className="text-2xl text-green-600">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Dark Glass or Metal Packaging</h4>
                  <p className="text-gray-700 text-sm">
                    Protects from light. Clear bottles indicate producer doesn&apos;t understand polyphenol preservation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl text-green-600">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Single Estate or PDO/DOP Certification</h4>
                  <p className="text-gray-700 text-sm">
                    Indicates control over entire production chain from grove to bottle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find Producers with Optimal Processing
          </h2>
          <p className="text-xl text-orange-50 mb-8">
            Our rankings prioritize verified processing standards
          </p>
          <Link
            href="/rankings"
            className="inline-block bg-white text-orange-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition"
          >
            View Rankings
          </Link>
        </div>
      </section>
    </main>
  )
}
