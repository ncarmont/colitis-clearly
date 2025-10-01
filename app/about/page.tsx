import Link from 'next/link'

export default function Home() {
  // Sample data - you'll add your actual rankings later
  const topRankings = [
    { rank: 1, brand: "Premium EVOO", polyphenols: 850, origin: "Greece" },
    { rank: 2, brand: "Elite Olive Oil", polyphenols: 780, origin: "Italy" },
    { rank: 3, brand: "Ultra Pure EVOO", polyphenols: 720, origin: "Spain" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Highest Polyphenol<br />EVOO Rankings
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-50 max-w-3xl">
            Science-backed rankings of extra virgin olive oils by polyphenol content.
            Discover the most powerful antioxidant-rich EVOOs for optimal health.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/rankings"
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition"
            >
              View Full Rankings
            </Link>
            <Link
              href="/research"
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-900 transition border-2 border-green-600"
            >
              Read the Research
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
      </section>

      {/* Why Polyphenols Matter */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Polyphenol Content Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cellular Protection</h3>
              <p className="text-gray-700">
                High polyphenol EVOOs combat oxidative stress and protect cells from damage.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Heart Health</h3>
              <p className="text-gray-700">
                Proven to reduce inflammation and support cardiovascular function.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Brain Function</h3>
              <p className="text-gray-700">
                Powerful antioxidants that support cognitive health and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rankings Preview */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Top Ranked EVOOs
            </h2>
            <Link
              href="/rankings"
              className="text-green-600 font-semibold hover:text-green-700"
            >
              See All Rankings →
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Rank</th>
                    <th className="px-6 py-4 text-left font-semibold">Brand</th>
                    <th className="px-6 py-4 text-left font-semibold">Polyphenols (mg/kg)</th>
                    <th className="px-6 py-4 text-left font-semibold">Origin</th>
                  </tr>
                </thead>
                <tbody>
                  {topRankings.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-green-50 transition">
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold">
                          {item.rank}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.brand}</td>
                      <td className="px-6 py-4 text-green-700 font-bold text-lg">{item.polyphenols}</td>
                      <td className="px-6 py-4 text-gray-600">{item.origin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-green-100 border-l-4 border-green-600 p-6 rounded-r-lg">
            <p className="text-gray-800">
              <strong className="text-green-800">High-quality EVOO contains 250+ mg/kg polyphenols.</strong>
              {" "}Premium EVOOs can exceed 500 mg/kg. Our rankings feature only the highest-tested oils.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Latest Research & Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Understanding Polyphenol Levels in EVOO
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how polyphenol content is measured and why it varies between olive oils.
                </p>
                <Link href="/research" className="text-green-600 font-semibold hover:text-green-700">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  The Mediterranean Diet & Longevity
                </h3>
                <p className="text-gray-600 mb-4">
                  Scientific evidence linking high-polyphenol EVOO to increased lifespan.
                </p>
                <Link href="/research" className="text-green-600 font-semibold hover:text-green-700">
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Make Informed Choices for Your Health
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Not all extra virgin olive oils are created equal. Choose based on science.
          </p>
          <Link
            href="/rankings"
            className="inline-block bg-white text-green-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition"
          >
            Explore Complete Rankings
          </Link>
        </div>
      </section>
    </main>
  )
}
