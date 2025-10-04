import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: "Verified High-Polyphenol EVOO Producers | Lab-Tested Rankings",
  description: "Comprehensive database of EVOO producers with verified laboratory testing showing highest polyphenol content. Quality control practices and transparency standards analyzed.",
  alternates: {
    canonical: 'https://evoo-rankings.com/research/producers',
  },
}

export default function ProducersPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Research', url: '/research' },
    { name: 'Producers', url: '/research/producers' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/research/overview" className="text-green-100 hover:text-white mb-4 inline-block">
            ← Back to Overview
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Verified High-Polyphenol Producers
          </h1>
          <p className="text-green-100 text-xl">
            Lab-tested EVOO brands with documented polyphenol content above 500 mg/kg
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Defines a High-Polyphenol Producer?</h2>
            <p className="text-gray-700 mb-4">
              Not all &quot;extra virgin&quot; olive oil producers are equal. The highest-quality producers share these characteristics:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span><strong>Third-party lab testing:</strong> Regular verification of polyphenol content by independent facilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span><strong>Transparency:</strong> Publicly available test results, harvest dates, and batch numbers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span><strong>Early harvest:</strong> Commitment to harvesting green olives for maximum polyphenol content</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span><strong>Cold extraction:</strong> Processing below 27°C to preserve antioxidants</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span><strong>Rapid processing:</strong> Milling within hours of harvest to prevent oxidation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Top Producers by Region */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Elite Producers by Region</h2>

          {/* Greece */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇷</span>
              <h3 className="text-2xl font-bold text-gray-900">Greece - Koroneiki Specialists</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Greek producers, particularly those using <strong>Koroneiki cultivar</strong> from Crete, Peloponnese, and Kalamata,
              consistently produce the world&apos;s highest polyphenol EVOOs. The combination of mountainous terrain, limestone-rich soil,
              and traditional farming creates exceptional oils.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Key Producer Characteristics:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Single-estate, organic cultivation</li>
                  <li>• Koroneiki olives from high-altitude groves</li>
                  <li>• Early October harvest (green olives)</li>
                  <li>• 2-4 hour harvest-to-mill time</li>
                  <li>• Cold extraction (&lt;25°C)</li>
                  <li>• Polyphenol range: 600-1000+ mg/kg</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Notable Regions:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Crete (Kolymvari PDO):</strong> 700-900 mg/kg average</li>
                  <li>• <strong>Laconia (Kalamata region):</strong> 650-850 mg/kg</li>
                  <li>• <strong>Messinia:</strong> 600-800 mg/kg</li>
                  <li>• <strong>Sitia PDO (East Crete):</strong> 650-900 mg/kg</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Spain */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇪🇸</span>
              <h3 className="text-2xl font-bold text-gray-900">Spain - Picual & Hojiblanca Leaders</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Spanish producers from <strong>Andalusia</strong> dominate global EVOO volume, but elite producers focus on
              <strong> Picual and Hojiblanca cultivars</strong> from Jaén and Córdoba provinces. These robust varieties
              naturally produce high polyphenol levels.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Key Producer Characteristics:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Picual variety focus (highest polyphenols)</li>
                  <li>• Mountain grove cultivation (Sierra de Cazorla)</li>
                  <li>• November harvest timing</li>
                  <li>• Modern continuous extraction systems</li>
                  <li>• Nitrogen-sealed storage tanks</li>
                  <li>• Polyphenol range: 500-800 mg/kg</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Notable Regions:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Jaén (Sierra de Cazorla):</strong> 550-800 mg/kg</li>
                  <li>• <strong>Córdoba (Priego PDO):</strong> 500-750 mg/kg</li>
                  <li>• <strong>Sierra de Segura PDO:</strong> 600-800 mg/kg</li>
                  <li>• <strong>Baena PDO:</strong> 500-700 mg/kg</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Italy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇮🇹</span>
              <h3 className="text-2xl font-bold text-gray-900">Italy - Coratina & Tuscan Excellence</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Italian high-polyphenol producers concentrate in <strong>Puglia (Coratina variety)</strong> and
              <strong> Tuscany (Frantoio, Moraiolo blends)</strong>. These producers emphasize artisanal quality and
              DOP (Protected Designation of Origin) certifications.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Key Producer Characteristics:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Coratina cultivar (southern Italy)</li>
                  <li>• Small-batch, estate production</li>
                  <li>• October-November harvest window</li>
                  <li>• Traditional stone mill or modern cold press</li>
                  <li>• Dark glass bottle packaging</li>
                  <li>• Polyphenol range: 500-750 mg/kg</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Notable Regions:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Puglia (Coratina):</strong> 600-750 mg/kg</li>
                  <li>• <strong>Tuscany (Chianti Classico):</strong> 500-650 mg/kg</li>
                  <li>• <strong>Umbria (Spoleto DOP):</strong> 500-700 mg/kg</li>
                  <li>• <strong>Sicily (Monti Iblei DOP):</strong> 550-700 mg/kg</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tunisia */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇹🇳</span>
              <h3 className="text-2xl font-bold text-gray-900">Tunisia - Chetoui Excellence</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Tunisian producers using <strong>Chetoui cultivar</strong> produce exceptional high-polyphenol oils.
              The Mediterranean climate combined with traditional farming creates oils with outstanding health benefits.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Key Producer Characteristics:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Chetoui variety focus</li>
                  <li>• Early harvest (October-November)</li>
                  <li>• Organic cultivation methods</li>
                  <li>• Cold extraction below 27°C</li>
                  <li>• Dark bottle packaging</li>
                  <li>• Polyphenol range: 800-1100+ mg/kg</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Notable Producers:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>November Early Harvest:</strong> ~1073 mg/kg</li>
                  <li>• Early harvest focus for maximum phenolics</li>
                  <li>• Transparent lab testing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cyprus */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇨🇾</span>
              <h3 className="text-2xl font-bold text-gray-900">Cyprus - Kalamon World Records</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Cyprus producers, particularly using <strong>Kalamon cultivar</strong>, have achieved some of the
              world's highest recorded polyphenol levels. The island's unique terroir and microclimate contribute
              to exceptional phenolic production.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Key Producer Characteristics:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Kalamon variety specialty</li>
                  <li>• Organic/biodynamic practices</li>
                  <li>• Ultra-early harvest</li>
                  <li>• qNMR/NMR testing</li>
                  <li>• Award-winning oils</li>
                  <li>• Polyphenol range: 1000-2000 mg/kg (NMR)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Notable Producers:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>ATSAS:</strong> World-record 1,978 mg/kg (2020 NMR)</li>
                  <li>• Peer-reviewed research backing</li>
                  <li>• Seasonally variable—request current COA</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Morocco */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇲🇦</span>
              <h3 className="text-2xl font-bold text-gray-900">Morocco - Emerging Excellence</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Moroccan producers are increasingly recognized for high-polyphenol production. The country's diverse
              microclimates and traditional olive cultivation create oils with strong antioxidant profiles.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Key Producer Characteristics:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Blend varieties from Atlas regions</li>
                  <li>• Independent lab verification</li>
                  <li>• Cold press extraction</li>
                  <li>• Growing international recognition</li>
                  <li>• Polyphenol range: 500-650 mg/kg (HPLC)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Notable Producers:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Gundry MD source:</strong> 561-612 mg/kg (independent testing)</li>
                  <li>• Third-party verification by Olive Oil Times</li>
                  <li>• Good value for polyphenol content</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Peru */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇵🇪</span>
              <h3 className="text-2xl font-bold text-gray-900">Peru - South American Leader</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Peruvian producers are gaining international recognition for high-polyphenol EVOOs. Using primarily
              <strong> Picual and Coratina</strong> cultivars transplanted from the Mediterranean, Peru's unique
              terroir creates distinctive flavor profiles with strong health benefits.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Key Producer Characteristics:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Picual and Coratina focus</li>
                  <li>• Award-winning at international competitions</li>
                  <li>• Modern extraction facilities</li>
                  <li>• Excellent value proposition</li>
                  <li>• Polyphenol range: 550-700 mg/kg</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Notable Producers:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Vallesur:</strong> ~688 mg/kg (retailer lab)</li>
                  <li>• Three-time World No.1 awards</li>
                  <li>• Good cost-to-polyphenol ratio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Certifications to Look For</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-4">European Certifications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold">PDO/DOP:</span>
                    <span>Protected Designation of Origin - guarantees geographic source</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">PGI/IGP:</span>
                    <span>Protected Geographical Indication</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">Organic EU:</span>
                    <span>Certified organic production standards</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-700 mb-4">International Standards</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold">USDA Organic:</span>
                    <span>U.S. organic certification</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">NYIOOC:</span>
                    <span>New York International Olive Oil Competition awards</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">Lab Reports:</span>
                    <span>Third-party polyphenol testing documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="text-gray-800">
                <strong>Important:</strong> Certifications verify production methods, but only laboratory testing confirms
                actual polyphenol content. Look for producers who provide batch-specific test results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Avoid */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Red Flags: What to Avoid</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl text-red-600">❌</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">No Harvest Date</h4>
                  <p className="text-gray-700">EVOO degrades over time. Legitimate producers prominently display harvest dates.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl text-red-600">❌</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">&quot;Light&quot; or &quot;Mild&quot; Marketing</h4>
                  <p className="text-gray-700">Marketing terms often indicate low polyphenol content (less bitter/pungent).</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl text-red-600">❌</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clear/Light Bottles</h4>
                  <p className="text-gray-700">UV light destroys polyphenols. Quality producers use dark glass or metal containers.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl text-red-600">❌</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Blended Origin Countries</h4>
                  <p className="text-gray-700">&quot;Product of Italy/Greece/Spain&quot; often indicates mixing of lower-quality oils.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl text-red-600">❌</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Suspiciously Low Prices</h4>
                  <p className="text-gray-700">High-polyphenol EVOO requires early harvest (lower yield) and premium processing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            See Our Complete Producer Rankings
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Browse verified EVOOs ranked by polyphenol content
          </p>
          <Link
            href="/rankings"
            className="inline-block bg-white text-green-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition"
          >
            View Rankings
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}
