import Link from 'next/link'

export const metadata = {
  title: "Geographic & Climatic Patterns for High-Polyphenol EVOO | Region Analysis",
  description: "Analysis of regions, microclimates, altitude, soil composition, and environmental factors that produce the highest polyphenol extra virgin olive oils.",
}

export default function RegionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/research/overview" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Back to Overview
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Geographic & Climatic Patterns
          </h1>
          <p className="text-blue-100 text-xl">
            Why location, altitude, and climate determine polyphenol content
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Geography Matters</h2>
            <p className="text-gray-700 mb-4">
              Olive trees produce polyphenols as a <strong>defense mechanism</strong> against environmental stress.
              Harsh growing conditions—limited water, temperature extremes, high UV exposure—force trees to generate
              protective antioxidant compounds that become the health-promoting polyphenols in EVOO.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-800">
                <strong className="text-blue-800">Key Insight:</strong> The most stressful (but not deadly) environments
                produce the highest polyphenol olives. Comfortable, irrigated, low-altitude groves yield larger harvests
                but lower antioxidant content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Environmental Factors */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Critical Environmental Factors</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Altitude */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">⛰️</span>
                <h3 className="text-2xl font-bold text-gray-900">Altitude</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Optimal Range: 400-800m (1,300-2,600 ft)</h4>
                  <p className="text-gray-700 text-sm">
                    Higher altitude creates temperature stress and increased UV exposure, triggering polyphenol production.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-800">
                    <strong>Example:</strong> Cretan mountain groves at 600-800m consistently produce 700-1000 mg/kg polyphenols,
                    while coastal groves at &lt;200m average 300-500 mg/kg.
                  </p>
                </div>
              </div>
            </div>

            {/* Temperature */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🌡️</span>
                <h3 className="text-2xl font-bold text-gray-900">Temperature Variation</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Optimal: 15-20°C daily swings</h4>
                  <p className="text-gray-700 text-sm">
                    Hot days (28-32°C) and cool nights (10-15°C) during fruit development maximize polyphenol synthesis.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-800">
                    <strong>Why:</strong> Temperature stress activates olive defense mechanisms. Stable, mild climates
                    produce comfortable trees with lower polyphenol production.
                  </p>
                </div>
              </div>
            </div>

            {/* Rainfall */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">💧</span>
                <h3 className="text-2xl font-bold text-gray-900">Water Stress</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Optimal: 400-600mm annual rainfall</h4>
                  <p className="text-gray-700 text-sm">
                    Moderate water stress (dry-farmed, not irrigated) forces olives to concentrate defensive compounds.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-800">
                    <strong>Critical:</strong> Over-irrigation increases yield but dramatically reduces polyphenol content.
                    Top producers avoid irrigation except in extreme drought.
                  </p>
                </div>
              </div>
            </div>

            {/* Soil */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🪨</span>
                <h3 className="text-2xl font-bold text-gray-900">Soil Composition</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Optimal: Limestone-rich, well-drained</h4>
                  <p className="text-gray-700 text-sm">
                    Calcareous (limestone/chalk) soils with low fertility force olives to work harder for nutrients.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-800">
                    <strong>Mediterranean advantage:</strong> Thin, rocky, alkaline soils naturally limit water retention
                    and nutrient availability—ideal stress conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Regions */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">World&apos;s Elite Polyphenol Regions</h2>

          {/* Crete, Greece */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">🏔️</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Crete, Greece - The Global Leader</h3>
                <p className="text-green-600 font-semibold">Average Polyphenols: 700-1000+ mg/kg</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Environmental Factors:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Altitude:</strong> 400-800m mountain groves</li>
                  <li>• <strong>Climate:</strong> Hot, dry summers; mild winters</li>
                  <li>• <strong>Soil:</strong> Limestone-rich, extremely well-drained</li>
                  <li>• <strong>Rainfall:</strong> 400-500mm annually (minimal irrigation)</li>
                  <li>• <strong>Temperature:</strong> 15-25°C daily variation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Why Crete Dominates:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Koroneiki cultivar adapted to harsh conditions</li>
                  <li>• Ancient, low-yield trees (higher polyphenol concentration)</li>
                  <li>• Traditional dry-farming (no irrigation)</li>
                  <li>• Protected PDO regions (Kolymvari, Sitia)</li>
                  <li>• Early October harvest tradition</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-800 text-sm">
                <strong>Key Subregions:</strong> Kolymvari PDO (west), Sitia PDO (east), Messara Valley (south)
              </p>
            </div>
          </div>

          {/* Sierra de Cazorla, Spain */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">🏞️</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sierra de Cazorla, Spain - Mountain Excellence</h3>
                <p className="text-green-600 font-semibold">Average Polyphenols: 600-850 mg/kg</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Environmental Factors:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Altitude:</strong> 600-1200m (highest in Spain)</li>
                  <li>• <strong>Climate:</strong> Continental mountain (cold winters)</li>
                  <li>• <strong>Soil:</strong> Limestone and clay mix</li>
                  <li>• <strong>Rainfall:</strong> 600mm (higher than most Mediterranean)</li>
                  <li>• <strong>Temperature:</strong> Extreme seasonal variation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Unique Advantages:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Picual cultivar thrives in mountain stress</li>
                  <li>• Natural spring water (no irrigation needed)</li>
                  <li>• UNESCO Biosphere Reserve (minimal pollution)</li>
                  <li>• Sierra de Cazorla PDO protection</li>
                  <li>• November harvest for maximum maturity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Puglia, Italy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">🌳</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Puglia, Italy - Ancient Groves, Coratina Power</h3>
                <p className="text-green-600 font-semibold">Average Polyphenols: 550-750 mg/kg</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Environmental Factors:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Altitude:</strong> 200-500m rolling hills</li>
                  <li>• <strong>Climate:</strong> Hot, dry Mediterranean</li>
                  <li>• <strong>Soil:</strong> Red &quot;terra rossa&quot; (iron-rich clay)</li>
                  <li>• <strong>Rainfall:</strong> 500-600mm, irregular distribution</li>
                  <li>• <strong>Trees:</strong> Many 500+ year old specimens</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Puglia Strengths:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Coratina: naturally highest polyphenol variety</li>
                  <li>• Ancient trees = concentrated polyphenols</li>
                  <li>• Terra rossa soil unique mineral profile</li>
                  <li>• DOP Terre di Bari protection</li>
                  <li>• Strong peppery/bitter flavor profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Microclimate Patterns */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Microclimate Patterns</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Within high-quality regions, <strong>microclimates</strong> create dramatic polyphenol variation.
              Even within the same estate, north-facing vs. south-facing slopes can differ by 200+ mg/kg.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl">☀️</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sun Exposure</h4>
                  <p className="text-gray-700">South-facing slopes (northern hemisphere) receive maximum UV, increasing polyphenol synthesis by 15-25%.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl">💨</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Wind Exposure</h4>
                  <p className="text-gray-700">Coastal winds and mountain breezes create physical stress, elevating defensive compound production.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl">🏔️</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Slope Drainage</h4>
                  <p className="text-gray-700">Steep slopes (15-30% grade) prevent water pooling, naturally creating drought stress even with rainfall.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl">🌲</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Tree Density</h4>
                  <p className="text-gray-700">Widely-spaced trees (8-10m apart) force deeper roots and nutrient competition, concentrating polyphenols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Regions */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emerging High-Polyphenol Regions</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              While the Mediterranean dominates, producers in similar climates are achieving impressive polyphenol levels:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900">🇦🇺 Australia (Southern regions)</h4>
                <p className="text-gray-700 text-sm">Mediterranean-style climate, Koroneiki/Picual imports: 500-700 mg/kg</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900">🇦🇷 Argentina (Mendoza, La Rioja)</h4>
                <p className="text-gray-700 text-sm">High-altitude Andean foothills, Italian cultivars: 450-650 mg/kg</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900">🇺🇸 California (Central Coast)</h4>
                <p className="text-gray-700 text-sm">Small artisan producers using early harvest: 400-600 mg/kg</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-gray-900">🇵🇹 Portugal (Alentejo)</h4>
                <p className="text-gray-700 text-sm">Traditional varieties, organic farming: 450-650 mg/kg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Explore EVOOs from Elite Regions
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Browse our rankings filtered by geographic origin
          </p>
          <Link
            href="/rankings"
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
          >
            View Rankings by Region
          </Link>
        </div>
      </section>
    </main>
  )
}
