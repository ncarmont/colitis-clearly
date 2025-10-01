import Link from 'next/link'

export const metadata = {
  title: "Olive Cultivars with Highest Polyphenols | Variety Comparison Guide",
  description: "Comprehensive analysis of olive varieties and cultivars with the highest natural polyphenol content. Genetic factors and flavor profiles of Koroneiki, Picual, Coratina, and more.",
}

export default function CultivarsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/research/overview" className="text-purple-100 hover:text-white mb-4 inline-block">
            ← Back to Overview
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            High-Polyphenol Olive Cultivars
          </h1>
          <p className="text-purple-100 text-xl">
            Genetic differences that create the healthiest extra virgin olive oils
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Cultivar Matters</h2>
            <p className="text-gray-700 mb-4">
              Different olive varieties have evolved over millennia to produce varying levels of polyphenols.
              Some cultivars naturally generate <strong>2-3x more antioxidants</strong> than others, regardless
              of growing conditions or processing methods.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <p className="text-gray-800">
                <strong className="text-purple-800">Key Insight:</strong> The world's highest polyphenol EVOOs
                almost exclusively come from <strong>Koroneiki (Greece), Picual (Spain), and Coratina (Italy)</strong>—
                varieties adapted to harsh Mediterranean environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Cultivars Ranked */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Elite Polyphenol Cultivars - Ranked</h2>

          {/* #1 Koroneiki */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-t-4 border-yellow-500">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">🥇</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Koroneiki - The Polyphenol Champion</h3>
                <p className="text-gray-600">Origin: <strong>Greece</strong> (Crete, Peloponnese)</p>
                <p className="text-green-600 font-semibold text-lg">Typical Range: 600-1000+ mg/kg</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Characteristics:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Size:</strong> Very small fruit (1-2g)</li>
                  <li>• <strong>Oil yield:</strong> Low (15-20%)</li>
                  <li>• <strong>Climate:</strong> Thrives in harsh, dry conditions</li>
                  <li>• <strong>Flavor:</strong> Intensely bitter/pungent, grassy</li>
                  <li>• <strong>Harvest:</strong> October (early) for max polyphenols</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Why It Dominates:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Evolved in Crete's extreme microclimate</li>
                  <li>• Highest oleocanthal content of any variety</li>
                  <li>• Drought-resistant (produces more under stress)</li>
                  <li>• 90% of Greek EVOO production</li>
                  <li>• Protected PDO designations</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-gray-800 text-sm">
                <strong>Best Regions:</strong> Crete (Kolymvari, Sitia PDO), Laconia (Kalamata), Messinia
              </p>
            </div>
          </div>

          {/* #2 Coratina */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-t-4 border-gray-400">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">🥈</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Coratina - Italy's Powerhouse</h3>
                <p className="text-gray-600">Origin: <strong>Italy</strong> (Puglia - Corato region)</p>
                <p className="text-green-600 font-semibold text-lg">Typical Range: 550-800 mg/kg</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Characteristics:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Size:</strong> Medium fruit (3-4g)</li>
                  <li>• <strong>Oil yield:</strong> Moderate (18-22%)</li>
                  <li>• <strong>Climate:</strong> Hot, dry Mediterranean</li>
                  <li>• <strong>Flavor:</strong> Extremely bitter, peppery, herbaceous</li>
                  <li>• <strong>Harvest:</strong> Late October to early November</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Strengths:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Second-highest natural polyphenol content</li>
                  <li>• Exceptional oxidative stability (long shelf life)</li>
                  <li>• Thrives in ancient, low-fertility soils</li>
                  <li>• DOP Terre di Bari protected</li>
                  <li>• Often blended to add structure</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800 text-sm">
                <strong>Best Regions:</strong> Puglia (Corato, Andria, Barletta), some in Sicily
              </p>
            </div>
          </div>

          {/* #3 Picual */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-t-4 border-orange-600">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">🥉</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Picual - Spain's Mountain Warrior</h3>
                <p className="text-gray-600">Origin: <strong>Spain</strong> (Jaén, Andalusia)</p>
                <p className="text-green-600 font-semibold text-lg">Typical Range: 500-800 mg/kg</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Characteristics:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Size:</strong> Large fruit (5-7g)</li>
                  <li>• <strong>Oil yield:</strong> High (22-27%)</li>
                  <li>• <strong>Climate:</strong> Continental mountain (cold winters)</li>
                  <li>• <strong>Flavor:</strong> Bitter, fruity, tomato/fig notes</li>
                  <li>• <strong>Harvest:</strong> November for polyphenol peak</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Unique Qualities:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 50% of all Spanish olive production</li>
                  <li>• Cold-hardy (survives mountain winters)</li>
                  <li>• Excellent stability and shelf life</li>
                  <li>• Sierra de Cazorla/Segura PDO premium versions</li>
                  <li>• Balanced yield and polyphenol content</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-gray-800 text-sm">
                <strong>Best Regions:</strong> Sierra de Cazorla, Sierra de Segura, Jaén province mountains
              </p>
            </div>
          </div>

          {/* Honorable Mentions */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">High-Polyphenol Honorable Mentions</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900">Moraiolo (Italy - Tuscany)</h4>
                <p className="text-gray-700 text-sm mb-1"><strong>Polyphenols:</strong> 450-650 mg/kg</p>
                <p className="text-gray-700 text-sm">Small fruit, intensely bitter, often blended with Frantoio. Central Italy specialty.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900">Hojiblanca (Spain - Córdoba)</h4>
                <p className="text-gray-700 text-sm mb-1"><strong>Polyphenols:</strong> 400-600 mg/kg</p>
                <p className="text-gray-700 text-sm">Balanced flavor, good polyphenol content, dual-purpose (oil and table). Priego de Córdoba PDO.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900">Arbequina (Spain - Catalonia)</h4>
                <p className="text-gray-700 text-sm mb-1"><strong>Polyphenols:</strong> 200-400 mg/kg (Lower)</p>
                <p className="text-gray-700 text-sm">Mild, buttery flavor. Popular but <em>lower polyphenol content</em>—not recommended for health focus.</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-gray-900">Leccino (Italy - Central)</h4>
                <p className="text-gray-700 text-sm mb-1"><strong>Polyphenols:</strong> 300-500 mg/kg (Moderate)</p>
                <p className="text-gray-700 text-sm">Delicate, sweet flavor. Disease-resistant but moderate polyphenols. Often blended.</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-bold text-gray-900">Frantoio (Italy - Tuscany)</h4>
                <p className="text-gray-700 text-sm mb-1"><strong>Polyphenols:</strong> 400-600 mg/kg</p>
                <p className="text-gray-700 text-sm">Herbaceous, artichoke notes. Tuscan DOP backbone variety. Good but not elite.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavor vs. Polyphenols */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Flavor Profiles</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              High-polyphenol EVOOs have distinct, often intense flavors that signal their antioxidant content:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="font-bold text-green-800 mb-3">High Polyphenol Indicators</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ <strong>Bitter taste:</strong> Oleuropein compound</li>
                  <li>✓ <strong>Peppery throat burn:</strong> Oleocanthal (anti-inflammatory)</li>
                  <li>✓ <strong>Grassy/herbaceous:</strong> Fresh, green flavors</li>
                  <li>✓ <strong>Astringent:</strong> Mouth-drying sensation</li>
                </ul>
                <p className="text-gray-800 text-xs mt-4 italic">
                  These flavors may seem unpleasant if you're used to mild oils, but they indicate maximum health benefits.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="font-bold text-red-800 mb-3">Low Polyphenol Indicators</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✗ <strong>Buttery/mild:</strong> Often late-harvest or Arbequina</li>
                  <li>✗ <strong>Sweet/fruity only:</strong> No bitterness or pepper</li>
                  <li>✗ <strong>Smooth finish:</strong> No throat sensation</li>
                  <li>✗ <strong>"Light" marketing:</strong> Specifically bred for mildness</li>
                </ul>
                <p className="text-gray-800 text-xs mt-4 italic">
                  Pleasant flavor, but significantly lower antioxidant content and health benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genetic Research */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science of Cultivar Genetics</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Some Varieties Produce More Polyphenols</h3>
            <p className="text-gray-700 mb-6">
              Modern genetic research reveals that high-polyphenol cultivars evolved specific traits:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl">🧬</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Stress-Response Genes</h4>
                  <p className="text-gray-700 text-sm">
                    Koroneiki and Coratina have enhanced expression of genes encoding polyphenol biosynthesis enzymes,
                    activating more readily under environmental stress.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl">🌿</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Fruit Size Trade-Off</h4>
                  <p className="text-gray-700 text-sm">
                    Smaller fruits (Koroneiki) have higher skin-to-flesh ratio. Polyphenols concentrate in skin and pits,
                    resulting in higher mg/kg in final oil.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl">⏰</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Maturation Timing</h4>
                  <p className="text-gray-700 text-sm">
                    Elite cultivars maintain high polyphenols longer during ripening, allowing harvest window flexibility
                    without sacrificing antioxidant content.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl">🛡️</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Natural Pest Resistance</h4>
                  <p className="text-gray-700 text-sm">
                    High polyphenols protect fruit from olive fly and fungal infection, reducing need for pesticides
                    and allowing organic farming methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing by Cultivar */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying Guide: Choosing by Cultivar</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-purple-900 mb-3 text-lg">For Maximum Health Benefits:</h3>
                <p className="text-gray-800 mb-2">
                  Prioritize <strong>Koroneiki</strong> (Greek), <strong>Coratina</strong> (Italian), or <strong>Picual</strong> (Spanish)
                  from certified producers. Look for harvest dates, PDO/DOP labels, and polyphenol test results.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Expect robust, bitter, peppery flavors—this is a feature, not a flaw.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">For Balanced Flavor + Health:</h3>
                <p className="text-gray-800 mb-2">
                  Try <strong>Hojiblanca</strong>, <strong>Moraiolo</strong>, or <strong>Frantoio</strong> varieties.
                  Good polyphenol content (400-600 mg/kg) with more approachable flavor profiles.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Ideal for transitioning from mild commercial oils to health-focused EVOOs.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-3 text-lg">⚠️ Avoid for Health Focus:</h3>
                <p className="text-gray-800 mb-2">
                  <strong>Arbequina</strong> and other "mild" varieties marketed for "smooth" flavor typically contain
                  200-350 mg/kg polyphenols—below the threshold for significant health benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find High-Polyphenol Cultivars in Our Rankings
          </h2>
          <p className="text-xl text-purple-50 mb-8">
            Filter by olive variety to find the healthiest EVOOs
          </p>
          <Link
            href="/rankings"
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition"
          >
            Browse by Cultivar
          </Link>
        </div>
      </section>
    </main>
  )
}
