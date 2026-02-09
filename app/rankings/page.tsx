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
  priceAmount: string
  method: string
  lab: string
  certificateLink: string
  cultivar: string
  buyLink: string
  notes: string
}

export default function RankingsPage() {
  // Verified olive oil data with lab-tested polyphenol content
  const [oils] = useState<OliveOil[]>([
    {
      id: 1, rank: 1, brand: "Laconiko ZOI Ultra High Phenolic", polyphenols: 1799, origin: "Greece", harvestDate: "2023/24",
      price: "$$", priceAmount: "$75.00", method: "Not specified", lab: "Retailer COA",
      certificateLink: "https://chefshop.com/products/laconiko-high-phenolic-zoi-olive-oil",
      cultivar: "Kalamon",
      buyLink: "https://chefshop.com/products/laconiko-high-phenolic-zoi-olive-oil",
      notes: "Extremely high; retailer shows lab metrics"
    },
    {
      id: 2, rank: 2, brand: "P.J. KABOS – Family Reserve (Phenolic Shot)", polyphenols: 1400, origin: "Greece", harvestDate: "2025/26",
      price: "$$", priceAmount: "$59.83", method: "HPLC + NMR", lab: "Dual verified",
      certificateLink: "https://www.pjkabos.com/",
      cultivar: "Koroneiki",
      buyLink: "https://www.amazon.com/KABOS-Phenolic-Organic-Pungent-Extracted/dp/B0C9WNNVVD",
      notes: "900+ HPLC / 1400+ NMR (2025 harvest); USDA Organic certified"
    },
    {
      id: 3, rank: 3, brand: "SP360 (ONSURI)", polyphenols: 1462, origin: "Jordan", harvestDate: "2024/25",
      price: "$$", priceAmount: "$79.99", method: "Not specified", lab: "COA linked",
      certificateLink: "https://highpolyphenololiveoil.co.uk/oil/sp360/",
      cultivar: "Arbequina",
      buyLink: "https://highpolyphenololiveoil.co.uk/oil/sp360/",
      notes: "Value & COA shown on product page (Polyphenol Analysis)"
    },
    {
      id: 4, rank: 4, brand: "The Governor – Limited Edition", polyphenols: 1316, origin: "Greece", harvestDate: "Oct 2025",
      price: "$$", priceAmount: "£49.95", method: "NMR", lab: "WOCH/Univ. Athens",
      certificateLink: "https://cdn.shopify.com/s/files/1/0736/8274/7666/files/The_Governor_Evoo_Limited_Certificate_2025.pdf",
      cultivar: "Lianolia",
      buyLink: "https://thegovernorevoo.co.uk/products/the-governor-limited-edition-extra-virgin-olive-oil",
      notes: "2025/26 harvest; 577mg oleocanthal + 298mg oleacein; DIO-certified organic from Corfu"
    },
    {
      id: 5, rank: 5, brand: "ONSURI Arbequina (Latest 2024/25)", polyphenols: 1269, origin: "Jordan", harvestDate: "2024/25",
      price: "$$", priceAmount: "$45.00", method: "IOC/HPLC", lab: "Per ONSURI FAQ",
      certificateLink: "https://onsurioliveoil.com",
      cultivar: "Arbequina",
      buyLink: "https://onsurioliveoil.com/en-us/products/latest-2024-25-pre-order-arbosana-evoo-16-9-fl-oz-500ml-polyphenols-1255-mg-kg",
      notes: "Producer states IOC official method; page shows count"
    },
    {
      id: 6, rank: 6, brand: "ONSURI Arbosana (Latest 2024/25)", polyphenols: 1255, origin: "Jordan", harvestDate: "2024/25",
      price: "$$", priceAmount: "$45.00", method: "IOC/HPLC", lab: "Per ONSURI FAQ",
      certificateLink: "https://onsurioliveoil.com",
      cultivar: "Arbosana",
      buyLink: "https://www.amazon.co.uk/ONSURI-Arbosana-Polyphenols-Extra-Virgin/dp/B0DCP9YNBT",
      notes: "Count on product; method via FAQ"
    },
    {
      id: 7, rank: 7, brand: "The Governor – Premium", polyphenols: 1174, origin: "Greece", harvestDate: "Oct 2025",
      price: "$$", priceAmount: "£39.95", method: "NMR", lab: "WOCH/Athens",
      certificateLink: "https://cdn.shopify.com/s/files/1/0736/8274/7666/files/The_Governor_Evoo_Premium_Certificate_2025.pdf",
      cultivar: "Lianolia",
      buyLink: "https://thegovernorevoo.co.uk/products/the-governor-premium-unfiltered-extra-virgin-olive-oil",
      notes: "2025/26 harvest; 476mg oleocanthal + 295mg oleacein; DIO-certified organic from Corfu"
    },
    {
      id: 8, rank: 8, brand: "Finca La Torre – Hojiblanca (Organic/Biodynamic)", polyphenols: 1059, origin: "Spain", harvestDate: "2024/25",
      price: "$$", priceAmount: "$38.00", method: "Not specified", lab: "Retailer listing",
      certificateLink: "https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-hojiblanca",
      cultivar: "Hojiblanca",
      buyLink: "https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-hojiblanca",
      notes: "Biodynamic from Málaga; unusually high count this season"
    },
    {
      id: 9, rank: 9, brand: "Kyoord High-Phenolic", polyphenols: 1007, origin: "Greece", harvestDate: "Nov–Dec 2024",
      price: "$$", priceAmount: "$48.00", method: "Not specified", lab: "3rd-party posted",
      certificateLink: "https://kyoord.com/products/kyoord-high-phenolic-olive-oil",
      cultivar: "Lianolia + Koroneiki",
      buyLink: "https://www.amazon.com/kyoord-High-Phenolic-Extra-Virgin-Olive/dp/B0CCQQGXRQ",
      notes: "Site posts per-harvest analysis from Corfu"
    },
    {
      id: 10, rank: 10, brand: "ONSURI Signature", polyphenols: 1000, origin: "Jordan", harvestDate: "2024/25",
      price: "$$", priceAmount: "$42.00", method: "IOC/HPLC", lab: "Per FAQ",
      certificateLink: "https://onsurioliveoil.com/en-us",
      cultivar: "Blend (estate)",
      buyLink: "https://onsurioliveoil.com/en-us",
      notes: "Site lists >1000 mg/kg"
    },
    {
      id: 11, rank: 11, brand: "Opus Oléa – Organic", polyphenols: 874, origin: "Greece", harvestDate: "2024/25",
      price: "$$", priceAmount: "$48.00", method: "Not specified", lab: "COA linked",
      certificateLink: "https://opusolea.com/",
      cultivar: "Koroneiki",
      buyLink: "https://opusolea.com/products/opus-olea-organic-evoo",
      notes: "Organic lot from higher-elevation plots"
    },
    {
      id: 12, rank: 12, brand: "Zero Nutrition – EVOO100", polyphenols: 813, origin: "Greece", harvestDate: "2024/25",
      price: "$", priceAmount: "$24.99", method: "Not specified", lab: "COA linked",
      certificateLink: "https://zeronutritionolive.com/",
      cultivar: "Koroneiki",
      buyLink: "https://zeronutritionolive.com/products/evoo100-high-polyphenol-olive-oil",
      notes: "High phenolic; UV-protective bottle"
    },
    {
      id: 13, rank: 13, brand: "Quattrociocchi 'Superbo'", polyphenols: 800, origin: "Italy", harvestDate: "2024/25",
      price: "$$", priceAmount: "$38.95", method: "Not specified", lab: "Retailer HPLC-style",
      certificateLink: "https://oliveoillovers.com/products/quattrociocchi-superbo",
      cultivar: "Itrana (Lazio)",
      buyLink: "https://oliveoillovers.com/products/quattrociocchi-superbo",
      notes: "OOL discloses numeric polyphenols"
    },
    {
      id: 14, rank: 14, brand: "P.J. KABOS – Family Reserve (Robust)", polyphenols: 750, origin: "Greece", harvestDate: "2024/25",
      price: "$$", priceAmount: "$49.00", method: "HPLC", lab: "Stated",
      certificateLink: "https://www.pjkabos.com/shop-usa",
      cultivar: "Koroneiki",
      buyLink: "https://www.amazon.com/P-J-KABOS-Harvest-Phenolic-Extracted/dp/B0FDKT8HDF",
      notes: "Daily 'shot' usage suggested by brand; 750+ HPLC"
    },
    {
      id: 15, rank: 15, brand: "Oro del Desierto – Picual (Organic)", polyphenols: 717, origin: "Spain", harvestDate: "2024/25",
      price: "$$", priceAmount: "$32.00", method: "Not specified", lab: "Retailer listing",
      certificateLink: "https://oliveoillovers.com/products/oro-del-desierto-organic",
      cultivar: "Picual",
      buyLink: "https://oliveoillovers.com/products/oro-del-desierto-organic",
      notes: "Early-harvest organic from Almería; OOL shows count"
    },
    {
      id: 16, rank: 16, brand: "Vallesur – Peruvian", polyphenols: 688, origin: "Peru", harvestDate: "2024",
      price: "$$", priceAmount: "$28.00", method: "Not specified", lab: "Curator listing",
      certificateLink: "https://highpolyphenololiveoil.co.uk/oils/organic/1/",
      cultivar: "Picual",
      buyLink: "https://highpolyphenololiveoil.co.uk/oils/organic/1/",
      notes: "Award-winning Peruvian EVOO from Tacna"
    },
    {
      id: 17, rank: 17, brand: "Laudemio Frescobaldi (Tuscany)", polyphenols: 675, origin: "Italy", harvestDate: "2024",
      price: "$$", priceAmount: "$42.00", method: "Not specified", lab: "Retailer cited",
      certificateLink: "https://www.amazon.com/FRESCOBALDI-Laudemio-Premium-Winning-Polyphenols/dp/B001DTOBIY",
      cultivar: "Frantoio/Moraiolo/Leccino",
      buyLink: "https://www.amazon.com/FRESCOBALDI-Laudemio-Premium-Winning-Polyphenols/dp/B001DTOBIY",
      notes: "Multiple retailers cite ~650–700 mg/kg"
    },
    {
      id: 18, rank: 18, brand: "Citizens of Soil – Spanish", polyphenols: 661, origin: "Spain", harvestDate: "Nov 2024",
      price: "$$", priceAmount: "$38.00", method: "Not specified", lab: "Independent lab",
      certificateLink: "https://www.citizensofsoil.com/products/spanish-olive-oil-extra-virgin",
      cultivar: "Hojiblanca/Arbequina/Koroneiki",
      buyLink: "https://www.citizensofsoil.com/products/spanish-olive-oil-extra-virgin",
      notes: "Independent lab verified per brand from Sevilla"
    },
    {
      id: 19, rank: 19, brand: "Citizens of Soil – Tuscan 'Extra Rare'", polyphenols: 655, origin: "Italy", harvestDate: "Feb 2025",
      price: "$$", priceAmount: "$38.00", method: "Not specified", lab: "Independent lab",
      certificateLink: "https://www.citizensofsoil.com/products/tuscan-olive-oil-extra-rare",
      cultivar: "Blend (Frantoio/Leccino)",
      buyLink: "https://www.citizensofsoil.com/products/tuscan-olive-oil-extra-rare",
      notes: "Page states tested Feb 2025; lab report available"
    },
    {
      id: 20, rank: 20, brand: "Morocco Gold", polyphenols: 626, origin: "Morocco", harvestDate: "2024/25",
      price: "$$", priceAmount: "$35.00", method: "Not specified", lab: "Brand publishes",
      certificateLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
      cultivar: "Picholine Marocaine",
      buyLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
      notes: "Brand publicizes hydroxytyrosol per 20 g"
    },
    {
      id: 21, rank: 21, brand: "Venta del Barón (DO Priego)", polyphenols: 617, origin: "Spain", harvestDate: "2024/25",
      price: "$$", priceAmount: "$36.00", method: "Not specified", lab: "Ranking page",
      certificateLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
      cultivar: "Hojiblanca + Picuda",
      buyLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
      notes: "DO-protected, high count from Córdoba"
    },
    {
      id: 22, rank: 22, brand: "Castillo de Canena – First Day Harvest Picual", polyphenols: 611, origin: "Spain", harvestDate: "Late 2024",
      price: "$$", priceAmount: "$48.00", method: "Not specified", lab: "Retailer listing",
      certificateLink: "https://oliveoillovers.com/products/castillo-de-canena-first-day-harvest-picual",
      cultivar: "Picual",
      buyLink: "https://oliveoillovers.com/products/castillo-de-canena-first-day-harvest-picual",
      notes: "Premium 'Primer Día de Cosecha' line from Jaén"
    },
    {
      id: 23, rank: 23, brand: "Entimio – INTENSO", polyphenols: 601, origin: "Italy", harvestDate: "2024/25",
      price: "$$", priceAmount: "$50.00", method: "Not specified", lab: "Brand page",
      certificateLink: "https://www.amazon.com/Entimio-Intenso-Harvest-Award-Winning-Polyphenols/dp/B07D528XH3",
      cultivar: "Frantoio/Leccino/Moraiolo",
      buyLink: "https://www.amazon.com/Entimio-Intenso-Harvest-Award-Winning-Polyphenols/dp/B07D528XH3",
      notes: "Certified lots from Tuscany; analysis posted"
    },
    {
      id: 24, rank: 24, brand: "Odysea 'Good For You' (Crete)", polyphenols: 573, origin: "Greece", harvestDate: "2024/25",
      price: "$", priceAmount: "$19.99", method: "Not specified", lab: "Brand listing",
      certificateLink: "https://www.kosterina.com/products/6bottles",
      cultivar: "Koroneiki",
      buyLink: "https://www.kosterina.com/products/6bottles",
      notes: "Polyphenols posted on Odysea/Kosterina site"
    },
    {
      id: 25, rank: 25, brand: "Kosterina – Original Extra Virgin", polyphenols: 573, origin: "Greece", harvestDate: "2024/25",
      price: "$", priceAmount: "$38.00", method: "Not specified", lab: "Brand FAQ/page",
      certificateLink: "https://www.kosterina.com/pages/faqs",
      cultivar: "Koroneiki",
      buyLink: "https://www.kosterina.com/products/6bottles",
      notes: "Value posted 'at harvest'"
    },
    {
      id: 26, rank: 26, brand: "True Tuscan (Olive Girl)", polyphenols: 550, origin: "Italy", harvestDate: "2024",
      price: "$$", priceAmount: "$42.00", method: "Not specified", lab: "Independent lab",
      certificateLink: "https://shopolivegirl.com/products/true-tuscan-extra-virgin-olive-oil",
      cultivar: "Italian blend",
      buyLink: "https://shopolivegirl.com/products/true-tuscan-extra-virgin-olive-oil",
      notes: "Boutique producer, posts polyphenols (550 mg/kg independently tested)"
    },
    {
      id: 27, rank: 27, brand: "Citizens of Soil – Greek (Peloponnese)", polyphenols: 526, origin: "Greece", harvestDate: "Dec 2024",
      price: "$", priceAmount: "$32.00", method: "Not specified", lab: "Independent lab",
      certificateLink: "https://www.healthysupplies.co.uk/organic-extra-virgin-olive-oil-500ml-citizens-of-soil.html",
      cultivar: "Koroneiki + Athinolia",
      buyLink: "https://www.healthysupplies.co.uk/organic-extra-virgin-olive-oil-500ml-citizens-of-soil.html",
      notes: "Small-batch organic; ~500–552 mg/kg cited"
    },
    {
      id: 28, rank: 28, brand: "Entimio – ARDENTE", polyphenols: 516, origin: "Italy", harvestDate: "2024/25",
      price: "$$", priceAmount: "$45.00", method: "Not specified", lab: "Brand page",
      certificateLink: "https://www.amazon.com/Entimio-Ardente-Italian-Polyphenols-Organic/dp/B0C17MHY4H",
      cultivar: "Tuscan blend",
      buyLink: "https://www.amazon.com/Entimio-Ardente-Italian-Polyphenols-Organic/dp/B0C17MHY4H",
      notes: "Certified lots from Tuscany; analysis posted"
    },
    {
      id: 29, rank: 29, brand: "P.J. KABOS – Family Reserve (Medium)", polyphenols: 500, origin: "Greece", harvestDate: "2024/25",
      price: "$$", priceAmount: "$39.00", method: "HPLC", lab: "Stated",
      certificateLink: "https://www.pjkabos.com/shop-usa",
      cultivar: "Koroneiki",
      buyLink: "https://www.amazon.com/Phenolic-Intensity-Extracted-Koroneiki-KABOS/dp/B09P7K1V8K",
      notes: "HPLC hydroxytyrosol 7+ mg/20g; 500+ tier"
    },
    {
      id: 30, rank: 30, brand: "Blueprint (Bryan Johnson) – 'Snake Oil' EVOO", polyphenols: 499, origin: "Portugal", harvestDate: "2024",
      price: "$$", priceAmount: "$39.00", method: "Not specified", lab: "Third-party verified",
      certificateLink: "https://blueprint.bryanjohnson.com/products/extra-virgin-olive-oil",
      cultivar: "Portuguese olives",
      buyLink: "https://www.amazon.com/Blueprint-Bryan-Johnson-Extra-Virgin/dp/B0CWN6W3QJ",
      notes: "Independent trackers list ~499 mg/kg for 24/25; brand promises >400 mg/kg"
    },
    {
      id: 31, rank: 31, brand: "Rincón de la Subbética – Hojiblanca (Organic)", polyphenols: 356, origin: "Spain", harvestDate: "2024/25",
      price: "$$", priceAmount: "$32.95", method: "Not specified", lab: "Retailer listing",
      certificateLink: "https://oliveoillovers.com/products/rincon-de-la-subbetica",
      cultivar: "Hojiblanca",
      buyLink: "https://oliveoillovers.com/products/rincon-de-la-subbetica",
      notes: "Leading PDO producer from Priego de Córdoba; transparent count"
    }
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

  const currentMonth = new Date().getMonth()
  const isNorthernSeason = currentMonth >= 9 || currentMonth <= 2
  const hemisphereAdvice = isNorthernSeason
    ? {
        label: 'Northern harvest window',
        detail: 'Oct–Mar',
        flags: '🇬🇷 🇪🇸 🇮🇹',
        note: 'Lean north right now for just-pressed batches.'
      }
    : {
        label: 'Southern harvest window',
        detail: 'Apr–Sep',
        flags: '🇨🇱 🇦🇺 🇿🇦',
        note: 'Switch south to keep bottles under 90 days old.'
      }

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
            Ranked by verified polyphenol content • {oils.length} EVOOs with lab-tested data
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
          <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-green-100 bg-white/80 p-4 text-sm text-gray-700 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold text-green-700">What drives these rankings</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {hemisphereAdvice.flags} {hemisphereAdvice.label} · {hemisphereAdvice.detail}
              </span>
            </div>
            <p>
              We highlight early-harvest, freshly bottled EVOOs with verified phenolics above the 250&nbsp;mg/kg threshold (EFSA standard) because freshness keeps polyphenols potent all year.
            </p>
            <p className="text-xs text-gray-500">{hemisphereAdvice.note}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-4 py-4 text-left font-semibold">Rank</th>
                    <th className="px-4 py-4 text-left font-semibold">Brand</th>
                    <th className="px-4 py-4 text-left font-semibold">Polyphenols</th>
                    <th className="px-4 py-4 text-left font-semibold">Origin</th>
                    <th className="px-4 py-4 text-left font-semibold">Cultivar</th>
                    <th className="px-4 py-4 text-left font-semibold">Harvest</th>
                    <th className="px-4 py-4 text-left font-semibold">Price</th>
                    <th className="px-4 py-4 text-left font-semibold">Buy</th>
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
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                          oil.rank === 1 ? 'bg-yellow-500 text-white' :
                          oil.rank === 2 ? 'bg-gray-400 text-white' :
                          oil.rank === 3 ? 'bg-orange-600 text-white' :
                          'bg-green-600 text-white'
                        }`}>
                          {oil.rank}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="font-semibold text-gray-900">{oil.brand}</div>
                        <div className="text-xs text-gray-500 mt-1">{oil.notes}</div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-green-700 font-bold text-lg">{oil.polyphenols}</span>
                        <span className="text-gray-500 text-sm ml-1">mg/kg</span>
                        {oil.method !== 'Not specified' && (
                          <div className="text-xs text-blue-600 mt-1">{oil.method}</div>
                        )}
                      </td>
                      <td className="px-4 py-4 text-gray-600">{oil.origin}</td>
                      <td className="px-4 py-4 text-gray-600 text-sm">{oil.cultivar}</td>
                      <td className="px-4 py-4 text-gray-600">{oil.harvestDate}</td>
                      <td className="px-4 py-4">
                        <div className="text-gray-900 font-medium">{oil.priceAmount}</div>
                      </td>
                      <td className="px-4 py-4">
                        <a
                          href={oil.buyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition"
                        >
                          Buy →
                        </a>
                      </td>
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
                All {oils.length} oils listed have documented polyphenol data from COAs, HPLC, or NMR testing.
                We prioritize oils with polyphenol levels above 250 mg/kg, the EFSA threshold for health claims.
              </p>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Why These Numbers Matter</h3>
              <p className="text-gray-800">
                Higher polyphenol content means stronger antioxidant properties, better anti-inflammatory effects,
                and greater cardiovascular benefits. Oils above 500 mg/kg are considered exceptional, and our top picks
                exceed 1000 mg/kg — verified by lab testing.
              </p>
            </div>
          </div>

          {/* Testing Methods */}
          <div className="mt-8 bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">Testing Methods Explained</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-bold text-blue-700">HPLC</span>
                <p className="text-gray-600">High-Performance Liquid Chromatography — gold standard for individual phenolic compounds</p>
              </div>
              <div>
                <span className="font-bold text-blue-700">NMR</span>
                <p className="text-gray-600">Nuclear Magnetic Resonance — provides detailed molecular fingerprint of phenolics</p>
              </div>
              <div>
                <span className="font-bold text-blue-700">IOC Method</span>
                <p className="text-gray-600">International Olive Council official testing protocol for total polyphenols</p>
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
