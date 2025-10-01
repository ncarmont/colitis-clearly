'use client'

import { useState } from 'react'
import Link from 'next/link'

type OliveOil = {
  id: number
  rank: number
  brand: string
  polyphenols: number
  origin: string
  harvestDate: string
  price: string
  notes: string
}

export default function RankingsPage() {
  // Sample data - you'll replace this with your actual rankings
  const [oils] = useState<OliveOil[]>([
    { id: 1, rank: 1, brand: "Premium EVOO", polyphenols: 850, origin: "Greece", harvestDate: "2024", price: "$$$", notes: "Exceptionally high polyphenol content" },
    { id: 2, rank: 2, brand: "Elite Olive Oil", polyphenols: 780, origin: "Italy", harvestDate: "2024", price: "$$$$", notes: "Award-winning certified organic" },
    { id: 3, rank: 3, brand: "Ultra Pure EVOO", polyphenols: 720, origin: "Spain", harvestDate: "2024", price: "$$$", notes: "Single estate, cold-pressed" },
    { id: 4, rank: 4, brand: "Mediterranean Gold", polyphenols: 680, origin: "Greece", harvestDate: "2024", price: "$$", notes: "Great value for polyphenol content" },
    { id: 5, rank: 5, brand: "Koroneiki Premium", polyphenols: 650, origin: "Greece", harvestDate: "2024", price: "$$$", notes: "Traditional Greek variety" },
    { id: 6, rank: 6, brand: "Tuscan Heritage", polyphenols: 620, origin: "Italy", harvestDate: "2024", price: "$$$$", notes: "Family-owned for 200 years" },
    { id: 7, rank: 7, brand: "Andalusian Reserve", polyphenols: 590, origin: "Spain", harvestDate: "2024", price: "$$$", notes: "Picual olive variety" },
    { id: 8, rank: 8, brand: "Sicilian Select", polyphenols: 570, origin: "Italy", harvestDate: "2024", price: "$$", notes: "Robust flavor profile" },
    { id: 9, rank: 9, brand: "Cretan Pure", polyphenols: 540, origin: "Greece", harvestDate: "2024", price: "$$", notes: "Protected designation of origin" },
    { id: 10, rank: 10, brand: "Kalamata Classic", polyphenols: 520, origin: "Greece", harvestDate: "2024", price: "$", notes: "Best budget option" },
  ])

  const [filterOrigin, setFilterOrigin] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'rank' | 'polyphenols'>('rank')

  const origins = ['all', ...Array.from(new Set(oils.map(oil => oil.origin)))]

  const filteredAndSortedOils = oils
    .filter(oil => filterOrigin === 'all' || oil.origin === filterOrigin)
    .sort((a, b) => {
      if (sortBy === 'polyphenols') {
        return b.polyphenols - a.polyphenols
      }
      return a.rank - b.rank
    })

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-green-100 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Complete EVOO Rankings
          </h1>
          <p className="text-green-100 text-lg">
            Ranked by verified polyphenol content • Updated regularly
          </p>
        </div>
      </header>

      {/* Filters & Controls */}
      <section className="bg-white border-b border-gray-200 py-6 px-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4 items-center flex-wrap">
            <div>
              <label className="text-sm font-semibold text-gray-700 mr-2">Filter by Origin:</label>
              <select
                value={filterOrigin}
                onChange={(e) => setFilterOrigin(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-900 font-medium"
              >
                {origins.map(origin => (
                  <option key={origin} value={origin}>
                    {origin === 'all' ? 'All Countries' : origin}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mr-2">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rank' | 'polyphenols')}
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-900 font-medium"
              >
                <option value="rank">Overall Rank</option>
                <option value="polyphenols">Polyphenol Content</option>
              </select>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            Showing <span className="font-bold text-green-600">{filteredAndSortedOils.length}</span> EVOOs
          </div>
        </div>
      </section>

      {/* Rankings Table */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Rank</th>
                    <th className="px-6 py-4 text-left font-semibold">Brand</th>
                    <th className="px-6 py-4 text-left font-semibold">Polyphenols (mg/kg)</th>
                    <th className="px-6 py-4 text-left font-semibold">Origin</th>
                    <th className="px-6 py-4 text-left font-semibold">Harvest</th>
                    <th className="px-6 py-4 text-left font-semibold">Price</th>
                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedOils.map((oil, idx) => (
                    <tr
                      key={oil.id}
                      className={`border-b border-gray-200 hover:bg-green-50 transition ${
                        idx < 3 ? 'bg-green-50/50' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                          oil.rank === 1 ? 'bg-yellow-500 text-white' :
                          oil.rank === 2 ? 'bg-gray-400 text-white' :
                          oil.rank === 3 ? 'bg-orange-600 text-white' :
                          'bg-green-600 text-white'
                        }`}>
                          {oil.rank}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{oil.brand}</td>
                      <td className="px-6 py-4">
                        <span className="text-green-700 font-bold text-lg">{oil.polyphenols}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{oil.origin}</td>
                      <td className="px-6 py-4 text-gray-600">{oil.harvestDate}</td>
                      <td className="px-6 py-4 text-gray-600">{oil.price}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{oil.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-green-900 mb-2 text-lg">About Our Rankings</h3>
              <p className="text-gray-800">
                Our rankings are based on verified third-party laboratory tests measuring total polyphenol content.
                We prioritize oils with polyphenol levels above 250 mg/kg, the threshold for high-quality EVOO.
              </p>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Why These Numbers Matter</h3>
              <p className="text-gray-800">
                Higher polyphenol content means stronger antioxidant properties, better anti-inflammatory effects,
                and greater cardiovascular benefits. Oils above 500 mg/kg are considered exceptional.
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">Price Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <span className="font-bold text-gray-900">$</span>
                <span className="text-gray-600 ml-2">Under $15</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">$$</span>
                <span className="text-gray-600 ml-2">$15-$25</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">$$$</span>
                <span className="text-gray-600 ml-2">$25-$40</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">$$$$</span>
                <span className="text-gray-600 ml-2">Over $40</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Dive into the science behind polyphenols and EVOO health benefits
          </p>
          <Link
            href="/research"
            className="inline-block bg-white text-green-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition"
          >
            Read Research & Articles
          </Link>
        </div>
      </section>
    </main>
  )
}
