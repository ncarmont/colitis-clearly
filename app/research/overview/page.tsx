import Link from 'next/link'

export const metadata = {
  title: "High-Polyphenol EVOO Research Overview | Complete Analysis",
  description: "Comprehensive research on the highest polyphenol extra virgin olive oils, including verified producers, growing conditions, cultivars, and processing practices that maximize health benefits.",
}

export default function ResearchOverview() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/research" className="text-green-100 hover:text-white mb-4 inline-block">
            ← Back to Research
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            High-Polyphenol EVOO Research Overview
          </h1>
          <p className="text-green-100 text-xl">
            Understanding what makes the world&apos;s healthiest extra virgin olive oils
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Objective</h2>
            <p className="text-lg text-gray-700 mb-4">
              This comprehensive analysis investigates which producers create the highest polyphenol extra virgin olive oils (EVOOs),
              and examines the specific growing conditions, cultivars, and regions that consistently yield the highest polyphenol
              content and health quality metrics.
            </p>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <p className="text-gray-800">
                <strong className="text-green-800">Why This Matters:</strong> Polyphenol content directly correlates with
                the cardiovascular, anti-inflammatory, and neuroprotective benefits of EVOO. Understanding what creates
                high-polyphenol oils empowers consumers to make scientifically-informed choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Research Areas */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Research Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <Link href="/research/producers" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-green-500 to-green-700 h-32 flex items-center justify-center">
                <span className="text-6xl opacity-40 group-hover:scale-110 transition">🏭</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
                  Verified High-Polyphenol Producers
                </h3>
                <p className="text-gray-700 mb-4">
                  Analysis of EVOO producers with verified lab data and certifications showing consistently high
                  polyphenol content (500+ mg/kg). Includes quality control practices and transparency standards.
                </p>
                <div className="text-green-600 font-semibold">
                  Explore Producers →
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/research/regions" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-32 flex items-center justify-center">
                <span className="text-6xl opacity-40 group-hover:scale-110 transition">🌍</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  Geographic & Climatic Patterns
                </h3>
                <p className="text-gray-700 mb-4">
                  Investigation of regions and microclimates that produce the highest polyphenol levels.
                  Analysis of altitude, soil composition, temperature, rainfall, and sunlight patterns.
                </p>
                <div className="text-blue-600 font-semibold">
                  Explore Regions →
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/research/cultivars" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 h-32 flex items-center justify-center">
                <span className="text-6xl opacity-40 group-hover:scale-110 transition">🌿</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                  Olive Cultivars & Varieties
                </h3>
                <p className="text-gray-700 mb-4">
                  Detailed analysis of olive varieties (Koroneiki, Picual, Coratina, etc.) and their inherent
                  polyphenol profiles. Genetic factors influencing antioxidant production.
                </p>
                <div className="text-purple-600 font-semibold">
                  Explore Cultivars →
                </div>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/research/processing" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 h-32 flex items-center justify-center">
                <span className="text-6xl opacity-40 group-hover:scale-110 transition">⚙️</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                  Processing & Production Methods
                </h3>
                <p className="text-gray-700 mb-4">
                  How harvest timing, extraction methods, temperature control, and storage practices impact
                  polyphenol retention. Best practices for maximum health benefit preservation.
                </p>
                <div className="text-orange-600 font-semibold">
                  Explore Processing →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Findings Summary */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Research Findings</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔬 Polyphenol Threshold</h3>
              <p className="text-gray-700">
                High-quality EVOO contains <strong>250+ mg/kg</strong> polyphenols. Premium oils exceed <strong>500 mg/kg</strong>.
                The highest verified oils reach <strong>800-1000+ mg/kg</strong> (HPLC) or <strong>1000-2000 mg/kg</strong> (qNMR),
                primarily from early harvest, specific cultivars, and optimal growing conditions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🧪 Testing Method Matters: HPLC vs qNMR</h3>
              <p className="text-gray-700 mb-3">
                <strong>Methodology significantly affects polyphenol measurements.</strong> qNMR/NMR often reports higher totals by
                quantifying secoiridoid derivatives (e.g., oleocanthal, oleacein) that classic HPLC protocols may under-estimate
                depending on standards and hydrolysis. <strong>Expect NMR &gt; HPLC for the same lot.</strong>
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Example:</strong> Rincón de la Subbética Fall 2024 shows <strong>HPLC ≈356 mg/kg</strong>, but some vendors
                advertise <strong>NMR ~700–900 mg/kg</strong> for the same product—both can be true for the same oil under different assays.
              </p>
              <p className="text-gray-700">
                When dosing to meet EU health claim (≥5 mg hydroxytyrosol+derivatives / 20 g oil), always check the <strong>lab method</strong>
                on the certificate you receive. Always prefer <strong>latest harvest</strong> with a recent COA and dark, oxygen-minimizing packaging.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌍 Geographic Concentration</h3>
              <p className="text-gray-700">
                The Mediterranean basin dominates high-polyphenol production, with <strong>Greece, Spain, and Italy</strong> leading.
                However, microclimates matter more than country—mountainous regions with temperature variation and
                mineral-rich soils consistently produce superior oils.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌿 Elite Cultivars</h3>
              <p className="text-gray-700">
                <strong>Koroneiki (Greece), Picual (Spain), and Coratina (Italy)</strong> consistently rank highest in polyphenol
                content. These varieties evolved in harsh Mediterranean climates, producing protective compounds that
                become health-promoting antioxidants.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⏰ Harvest Timing Critical</h3>
              <p className="text-gray-700">
                <strong>Early harvest (green/unripe olives)</strong> produces 2-3x higher polyphenol content than late harvest.
                However, yield is lower and flavor more bitter—explaining why most commercial oils prioritize volume over
                health benefits.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">❄️ Cold Extraction Essential</h3>
              <p className="text-gray-700">
                Processing at <strong>&lt;27°C (80°F)</strong> preserves maximum polyphenols. Higher temperatures increase yield
                but destroy antioxidants. Reputable producers maintain strict temperature control and process within
                hours of harvest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Methodology</h2>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Data Sources</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Third-party laboratory testing results from certified facilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Published peer-reviewed studies on olive cultivars and polyphenol content</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Producer transparency reports and quality certifications (PDO, PGI, organic)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Geographic and climatic data correlated with polyphenol measurements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Analysis of production methods from top-rated producers</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Quality Standards</h3>
            <p className="text-gray-700">
              All rankings prioritize producers who provide verifiable third-party lab testing. We focus on
              <strong> total polyphenol content (mg/kg)</strong>, with additional consideration for specific
              beneficial compounds like <strong>oleocanthal</strong> and <strong>oleacein</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to See the Rankings?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Explore our complete database of verified high-polyphenol EVOOs
          </p>
          <Link
            href="/rankings"
            className="inline-block bg-white text-green-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition"
          >
            View Complete Rankings
          </Link>
        </div>
      </section>
    </main>
  )
}
