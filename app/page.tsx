'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import WorldMap from '@/components/WorldMap'

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
  certificateLink?: string
  cultivar: string
  buyLink: string
  notes: string
}

const OILS_DATA: OliveOil[] = [
  {
    id: 1, rank: 1, brand: "Pamako Blend", polyphenols: 1817, origin: "Greece", harvestDate: "2024",
    price: "$$$$", priceAmount: "$45.00", method: "qNMR", lab: "World Olive Center for Health",
    certificateLink: "https://www.pamako.gr/wp-content/uploads/2020/01/Phenolic-Certification-Pamako-Blend.pdf",
    cultivar: "Tsounati/Blend", buyLink: "https://www.pamako.gr",
    notes: "Highest verified qNMR - Crete blend"
  },
  {
    id: 2, rank: 2, brand: "PJ KABOS Phenolic Shot", polyphenols: 1600, origin: "Greece", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$59.83", method: "qNMR", lab: "qNMR + HPLC Dual Verified",
    certificateLink: "https://www.pjkabos.com/family-reserve-organic-phenolic-shot",
    cultivar: "Koroneiki", buyLink: "https://www.pjkabos.com/family-reserve-organic-phenolic-shot",
    notes: "1600 qNMR, 1000+ HPLC - Transparent dual reporting"
  },
  {
    id: 3, rank: 3, brand: "SP360 by ONSURI", polyphenols: 1462, origin: "Jordan", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$79.99", method: "RSS", lab: "Royal Scientific Society Jordan (IOC)",
    certificateLink: "https://cdn.shopify.com/s/files/1/0891/0631/7657/files/SP360_CERTIFICATEs_b5ccb79a-1dd0-4bdf-a53f-bd7bb2c25c02.png",
    cultivar: "Arbequina", buyLink: "https://sp360.co.uk",
    notes: "IOC phenolic panel - Refillable lifetime bottle"
  },
  {
    id: 4, rank: 4, brand: "Laconiko Olio Nuovo Rx", polyphenols: 1400, origin: "Greece", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$48.00", method: "qNMR", lab: "World Olive Center for Health",
    certificateLink: "https://laconiko.com/wp-content/uploads/2024/11/certificate-of-analysis-24-25.pdf",
    cultivar: "Koroneiki", buyLink: "https://laconiko.com",
    notes: "qNMR panel shows very high - Early harvest Sparta"
  },
  {
    id: 5, rank: 5, brand: "The Governor Limited Edition", polyphenols: 1350, origin: "Greece", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$52.00", method: "qNMR", lab: "World Olive Center for Health",
    certificateLink: "https://cdn.shopify.com/s/files/1/0564/5645/5522/files/GCOLT-LB_COA_24-25.pdf",
    cultivar: "Lianolia", buyLink: "https://thegovernoroliveoil.com",
    notes: "Rare Corfu cultivar - qNMR verified"
  },
  {
    id: 6, rank: 6, brand: "ATSAS Gold Blend Edition", polyphenols: 1300, origin: "Cyprus", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$46.00", method: "qNMR", lab: "World Olive Center for Health",
    certificateLink: "https://kreta24.pl/pl/p/file/b2abf1f72975823bc33a8ca74ceb4a7c/ATSAS-GOLD-BLEND-EDITION-POLYPHENOLS-2024_2025.pdf",
    cultivar: "Cyprus Blends", buyLink: "https://atsas.com.cy",
    notes: "Very high qNMR panel - Cyprus terroir"
  },
  {
    id: 7, rank: 7, brand: "ONSURI Arbosana", polyphenols: 1000, origin: "Jordan", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$56.00", method: "RSS", lab: "Royal Scientific Society Jordan",
    certificateLink: "https://onsuri.com",
    cultivar: "Arbosana", buyLink: "https://onsuri.com",
    notes: "UC/RSS tested - Request lot COA from maker"
  },
  {
    id: 8, rank: 8, brand: "Frantoio De Carlo Tenuta Torre", polyphenols: 900, origin: "Italy", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$55.00", method: "HPLC", lab: "Italian Lab",
    certificateLink: "https://www.frantoi.org/polyphenols-and-antioxidants-in-extra-virgin-olive-oil/",
    cultivar: "Coratina", buyLink: "https://www.frantoi.org",
    notes: "Puglia Coratina - Historical 900+ ref 2015"
  },
  {
    id: 9, rank: 9, brand: "Rincón de la Subbética Hojiblanca", polyphenols: 900, origin: "Spain", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$32.95", method: "qNMR", lab: "Retailer qNMR",
    certificateLink: "https://gourmetgroceries.com/product/rincon-de-la-subbetica-organic-extra-virgin-olive-oil/",
    cultivar: "Hojiblanca", buyLink: "https://oliveoillovers.com",
    notes: "356 HPLC, 700-900 qNMR - Method variance example"
  },
  {
    id: 10, rank: 10, brand: "Opus Oléa Organic", polyphenols: 874, origin: "Greece", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$48.00", method: "HPLC", lab: "IOC HPLC",
    certificateLink: "https://highpolyphenololiveoil.co.uk/oil/opus-olea-organic/",
    cultivar: "Koroneiki", buyLink: "https://www.opuslivewell.com",
    notes: "Public certificate flag - HPLC verified"
  },
  {
    id: 11, rank: 11, brand: "Zero Nutrition EVOO100", polyphenols: 813, origin: "Italy", harvestDate: "2024-25",
    price: "$$", priceAmount: "$24.99", method: "HPLC", lab: "IOC HPLC",
    certificateLink: "https://highpolyphenololiveoil.co.uk/oil/zero-nutrition-evoo100/",
    cultivar: "Coratina", buyLink: "https://zeronutrition.co",
    notes: "Best cost/mg (HPLC) - $0.031 per mg"
  },
  {
    id: 12, rank: 12, brand: "Quattrociocchi Superbo Organic", polyphenols: 800, origin: "Italy", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$38.95", method: "HPLC", lab: "Retailer Lab Panel",
    certificateLink: "https://oliveoillovers.com/products/quattrociocchi-superbo",
    cultivar: "Moraiolo", buyLink: "https://oliveoillovers.com/products/quattrociocchi-superbo",
    notes: "Lazio organic - ~$0.049 per mg"
  },
  {
    id: 13, rank: 13, brand: "PJ KABOS Family Reserve Robust", polyphenols: 750, origin: "Greece", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$35.83", method: "HPLC", lab: "HPLC Producer Posted",
    certificateLink: "https://www.pjkabos.com/post/what-is-hplc-and-why-is-it-important-for-you",
    cultivar: "Koroneiki", buyLink: "https://www.pjkabos.com",
    notes: "750+ HPLC - ~$0.048 per mg value"
  },
  {
    id: 14, rank: 14, brand: "Olio Piro", polyphenols: 750, origin: "Italy", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$54.00", method: "HPLC", lab: "Maker Analysis",
    certificateLink: "https://olio-piro.com",
    cultivar: "Tuscan Blend", buyLink: "https://olio-piro.com",
    notes: ">750 mg/kg maker claim - Request COA"
  },
  {
    id: 15, rank: 15, brand: "Oro del Desierto Picual", polyphenols: 700, origin: "Spain", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$32.00", method: "HPLC", lab: "Retailer Lab Posts",
    certificateLink: "https://oliveoillovers.com",
    cultivar: "Picual", buyLink: "https://orodeldesierto.com",
    notes: "~700 typical robust vintages - Almería PDO"
  },
  {
    id: 16, rank: 16, brand: "Vallesur Peruvian", polyphenols: 688, origin: "Peru", harvestDate: "2024-25",
    price: "$$", priceAmount: "$28.00", method: "HPLC", lab: "Retailer Lab",
    certificateLink: "https://highpolyphenololiveoil.co.uk/oil/vallesur-peruvian/",
    cultivar: "Picual/Coratina", buyLink: "https://www.amazon.com/Vallesur-High-Polyphenol-Olive-Oil/dp/B0CYRBJ4RZ",
    notes: "Awards + claims - Peru terroir"
  },
  {
    id: 17, rank: 17, brand: "Citizens of Soil Tuscan Extra Rare", polyphenols: 655, origin: "Italy", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$38.00", method: "HPLC", lab: "HPLC Public Cert",
    certificateLink: "https://highpolyphenololiveoil.co.uk/oil/citizens-of-soil-tuscan-extra-rare/",
    cultivar: "Tuscan Blend", buyLink: "https://citizensofsoil.com",
    notes: "Small batch husband & wife - Certified"
  },
  {
    id: 18, rank: 18, brand: "Laudemio Frescobaldi", polyphenols: 650, origin: "Italy", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$58.00", method: "HPLC", lab: "Maker/Retailer",
    certificateLink: "https://www.laudemiofrescobaldi.com/en/my-diary/polyphenols-in-olive-oil-what-are-they-and-their-benefits",
    cultivar: "Tuscan Blend", buyLink: "https://www.laudemiofrescobaldi.com",
    notes: "~650 claim - No public COA; premium brand"
  },
  {
    id: 19, rank: 19, brand: "Castillo de Canena Biodinámico Picual", polyphenols: 650, origin: "Spain", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$48.00", method: "HPLC", lab: "Official Lab COA",
    certificateLink: "https://ocdn.oliveoillovers.com/lab-analysis/2020-21/Castillo+de+Canena+BIODIN%C3%81MICO+PICUAL+Analysis+2020-21.pdf",
    cultivar: "Picual", buyLink: "https://castillodecanena.com",
    notes: "Biodynamic Picual - Jaén PDO"
  },
  {
    id: 20, rank: 20, brand: "Entimio Intenso/Selezione", polyphenols: 650, origin: "Italy", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$50.00", method: "HPLC", lab: "Maker/Retailer Claims",
    certificateLink: "https://entimio.com",
    cultivar: "Coratina/Frantoio", buyLink: "https://entimio.com",
    notes: "600-900 range claims - Varies by lot"
  },
  {
    id: 21, rank: 21, brand: "Gundry MD Polyphenol-Rich", polyphenols: 612, origin: "Morocco", harvestDate: "2024",
    price: "$$$", priceAmount: "$38.00", method: "HPLC", lab: "Two Independent Labs",
    certificateLink: "https://www.oliveoiltimes.com/opinion/gundry-olive-oil-review/89570",
    cultivar: "Morocco Blend", buyLink: "https://gundrymd.com",
    notes: "561-612 mg/kg independent tests (Olive Oil Times)"
  },
  {
    id: 22, rank: 22, brand: "Opus Oléa Non-Organic", polyphenols: 560, origin: "Greece", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$42.00", method: "HPLC", lab: "HPLC",
    certificateLink: "https://www.opuslivewell.com/blogs/news/polyphenols-in-olive-oil",
    cultivar: "Koroneiki", buyLink: "https://www.opuslivewell.com",
    notes: "~560 HPLC non-organic lot"
  },
  {
    id: 23, rank: 23, brand: "Liokareas Rx High Phenolic", polyphenols: 550, origin: "Greece", harvestDate: "2025",
    price: "$$$", priceAmount: "$44.00", method: "HPLC", lab: "Maker Claim + Comp Results",
    certificateLink: "https://www.liokareas.com/pages/hpevoo-rx",
    cultivar: "Koroneiki", buyLink: "https://www.liokareas.com",
    notes: ">10x typical claim - Request COA"
  },
  {
    id: 24, rank: 24, brand: "Kyoord High-Phenolic", polyphenols: 550, origin: "Greece", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$36.00", method: "HPLC", lab: "Maker Claim",
    certificateLink: "https://kyoord.com/products/kyoord-high-phenolic-olive-oil",
    cultivar: "Greek Lots", buyLink: "https://kyoord.com",
    notes: "500-800 claims - Request lot COA"
  },
  {
    id: 25, rank: 25, brand: "M.G. Pappas High Polyphenol", polyphenols: 500, origin: "Greece", harvestDate: "2024-25",
    price: "$$", priceAmount: "$32.00", method: "HPLC", lab: "Maker/Retailer Claim",
    certificateLink: "https://www.etsy.com/listing/1853856382/mg-pappas-high-polyphenol-rich-olive-oil",
    cultivar: "Koroneiki", buyLink: "https://www.amazon.com/dp/B09WRVBPNQ",
    notes: "500+ claim; 'lab report available' on request"
  },
  {
    id: 26, rank: 26, brand: "Apollo Olive Oil Mistral", polyphenols: 500, origin: "California", harvestDate: "2024",
    price: "$$$", priceAmount: "$38.00", method: "HPLC", lab: "Maker Data",
    certificateLink: "https://www.apollooliveoil.com/organic-extra-virgin/index.php/719/",
    cultivar: "CA Blend", buyLink: "https://www.apollooliveoil.com",
    notes: "~500 maker blog historical - Request current COA"
  },
  {
    id: 27, rank: 27, brand: "Frantoi Cutrera Grand Cru/Primo", polyphenols: 500, origin: "Italy", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$36.00", method: "HPLC", lab: "Retailer Labs",
    certificateLink: "https://oliveoillovers.com/products/frantoi-cutrera-primo-double-pdo-monte-iblei-organic",
    cultivar: "Cerasuola/Tonda Iblea", buyLink: "https://www.frantoicutrera.it",
    notes: "400-600 retailer labs - Sicily PDO"
  },
  {
    id: 28, rank: 28, brand: "Frantoi Cutrera Primo Double PDO", polyphenols: 429, origin: "Italy", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$34.00", method: "HPLC", lab: "Retailer Lab",
    certificateLink: "https://oliveoillovers.com/products/frantoi-cutrera-primo-double-pdo-monte-iblei-organic",
    cultivar: "Tonda Iblea", buyLink: "https://oliveoillovers.com",
    notes: "429 mg/kg retailer lab - Monte Iblei organic"
  },
  {
    id: 29, rank: 29, brand: "Rincón de la Subbética 100mL Sample", polyphenols: 356, origin: "Spain", harvestDate: "2024-25",
    price: "$", priceAmount: "$12.00", method: "HPLC", lab: "HPLC on Sample",
    certificateLink: "https://oliveoillovers.com/products/rincon-de-la-subbetica-100ml-sample",
    cultivar: "Hojiblanca", buyLink: "https://oliveoillovers.com",
    notes: "356 HPLC - qNMR reads 700-900 (method variance)"
  },
  {
    id: 30, rank: 30, brand: "Rincón de la Subbética 500mL", polyphenols: 356, origin: "Spain", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$32.95", method: "HPLC", lab: "Retailer Lab",
    certificateLink: "https://oliveoillovers.com/products/rincon-de-la-subbetica",
    cultivar: "Hojiblanca", buyLink: "https://oliveoillovers.com",
    notes: "348-356 HPLC - Exceptional oil despite lower HPLC"
  },
  {
    id: 31, rank: 31, brand: "Odysea Good For You", polyphenols: 350, origin: "Greece", harvestDate: "2024",
    price: "$$", priceAmount: "$19.99", method: "HPLC", lab: "Maker HPLC",
    certificateLink: "https://www.odysea.com/blog/introducing-odysea-good-for-you/",
    cultivar: "Koroneiki", buyLink: "https://www.odysea.com",
    notes: "High maker claims - Request current COA"
  },
  {
    id: 32, rank: 32, brand: "Rincón Alt Retailer Listing", polyphenols: 348, origin: "Spain", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$33.00", method: "HPLC", lab: "Retailer Lab",
    certificateLink: "https://oliooliveoil.com/product/rincon-de-la-subbetica-organic-hojiblanca-consistently-ranked-in-top-50-in-the-world/",
    cultivar: "Hojiblanca", buyLink: "https://oliooliveoil.com",
    notes: "348-356 HPLC alt retailer - Top 50 ranked"
  },
  {
    id: 33, rank: 33, brand: "Zero Nutrition EVOO100 Main", polyphenols: 813, origin: "Italy", harvestDate: "2024-25",
    price: "$$", priceAmount: "$24.99", method: "HPLC", lab: "HPLC + Public Cert",
    certificateLink: "https://highpolyphenololiveoil.co.uk/oil/zero-nutrition-evoo100/",
    cultivar: "Coratina", buyLink: "https://zeronutrition.co",
    notes: "Duplicate entry - See rank 11"
  },
  {
    id: 34, rank: 34, brand: "Citizens of Soil Review Page", polyphenols: 655, origin: "Italy", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$38.00", method: "HPLC", lab: "HPLC Public Cert Flag",
    certificateLink: "https://highpolyphenololiveoil.co.uk/blog/tuscan-extra-rare-citizens-of-soil-review/",
    cultivar: "Tuscan", buyLink: "https://citizensofsoil.com",
    notes: "Duplicate entry - See rank 17"
  },
  {
    id: 35, rank: 35, brand: "Vallesur Alt Listing", polyphenols: 688, origin: "Peru", harvestDate: "2024-25",
    price: "$$", priceAmount: "$28.00", method: "HPLC", lab: "Claim/Awards",
    certificateLink: "https://highpolyphenololiveoil.co.uk/oil/vallesur-peruvian/",
    cultivar: "Picual", buyLink: "https://www.amazon.com",
    notes: "Duplicate entry - See rank 16"
  },
  {
    id: 36, rank: 36, brand: "Quattrociocchi Alt Retailer", polyphenols: 800, origin: "Italy", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$38.95", method: "HPLC", lab: "Retailer Lab",
    certificateLink: "https://babylonmercantile.com/products/quattrociocchi-superbo",
    cultivar: "Moraiolo", buyLink: "https://babylonmercantile.com",
    notes: "Duplicate entry - See rank 12"
  },
]

const COUNTRY_FLAGS: { [key: string]: string } = {
  "Greece": "🇬🇷",
  "Italy": "🇮🇹",
  "Spain": "🇪🇸",
  "California": "🇺🇸",
  "Tunisia": "🇹🇳",
  "Jordan": "🇯🇴",
  "Peru": "🇵🇪",
  "Cyprus": "🇨🇾",
  "Morocco": "🇲🇦"
}

export default function HomePage() {
  const [filterOrigin, setFilterOrigin] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'rank' | 'polyphenols'>('rank')
  const [searchTerm, setSearchTerm] = useState('')

  const origins = useMemo(() => ['all', ...Array.from(new Set(OILS_DATA.map(oil => oil.origin)))], [])

  const filteredAndSortedOils = useMemo(() => {
    return OILS_DATA
      .filter(oil => {
        const matchesOrigin = filterOrigin === 'all' || oil.origin === filterOrigin
        const matchesSearch = oil.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            oil.notes.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesOrigin && matchesSearch
      })
      .sort((a, b) => {
        if (sortBy === 'polyphenols') {
          return b.polyphenols - a.polyphenols
        }
        return a.rank - b.rank
      })
  }, [filterOrigin, sortBy, searchTerm])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4YzAgNC40MiAxLjYgOC40OCA0LjI0IDExLjZDMi4xMiAzMi45MiAwIDM5LjEyIDAgNDZoMTJjMC02LjYzIDUuMzctMTIgMTItMTJzMTIgNS4zNyAxMiAxMmgxMmMwLTYuODgtMi4xMi0xMy4wOC00LjI0LTE2LjRDNTQuNCAyNi40OCA1NiAyMi40MiA1NiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">Updated 2024</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white animate-slide-up">
              Highest Polyphenol
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200">
                EVOO Rankings
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto font-light animate-fade-in-delay">
              Science-backed rankings verified by independent laboratory testing
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8 animate-fade-in-delay-2">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{OILS_DATA.length}</div>
                <div className="text-sm text-green-200">EVOOs Ranked</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">7</div>
                <div className="text-sm text-green-200">Regions</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">2042</div>
                <div className="text-sm text-green-200">Max mg/kg</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </header>

      {/* Filters Section */}
      <section className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-3 items-center flex-wrap">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 w-64 bg-slate-800/50 border border-gray-700 rounded-xl text-sm font-medium text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-500"
                />
                <svg className="absolute left-3 top-3 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Origin Filter */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-gray-300">Origin:</label>
                <select
                  value={filterOrigin}
                  onChange={(e) => setFilterOrigin(e.target.value)}
                  className="pl-4 pr-10 py-2.5 bg-slate-800/50 border border-gray-700 rounded-xl text-sm font-medium text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all cursor-pointer hover:border-gray-600"
                >
                  {origins.map(origin => (
                    <option key={origin} value={origin} className="bg-slate-800">
                      {origin === 'all' ? 'All Countries' : `${COUNTRY_FLAGS[origin]} ${origin}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-gray-300">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'rank' | 'polyphenols')}
                  className="pl-4 pr-10 py-2.5 bg-slate-800/50 border border-gray-700 rounded-xl text-sm font-medium text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all cursor-pointer hover:border-gray-600"
                >
                  <option value="rank" className="bg-slate-800">Overall Rank</option>
                  <option value="polyphenols" className="bg-slate-800">Polyphenol Content</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm px-4 py-2 bg-green-900/30 rounded-xl border border-green-700/50">
              <span className="text-gray-400">Showing</span>
              <span className="font-bold text-green-400 text-lg">{filteredAndSortedOils.length}</span>
              <span className="text-gray-400">of {OILS_DATA.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings Table */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-800/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-b-2 border-green-700/50">
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Brand</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Polyphenols</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Cultivar</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Origin</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Harvest</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Lab Method</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Buy</th>
                    <th className="px-6 py-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/50">
                  {filteredAndSortedOils.map((oil, index) => (
                    <tr
                      key={oil.id}
                      className="hover:bg-green-900/20 transition-all duration-200 group animate-fade-in-row"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl font-bold text-base shadow-lg group-hover:scale-110 transition-transform duration-200 ${
                            oil.rank === 1 ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-white shadow-yellow-500/50' :
                            oil.rank === 2 ? 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 text-white shadow-gray-400/50' :
                            oil.rank === 3 ? 'bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 text-white shadow-orange-500/50' :
                            'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-green-500/30'
                          }`}>
                            {oil.rank}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-base font-bold text-gray-100 group-hover:text-green-400 transition-colors">
                          {oil.brand}
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                            {oil.polyphenols}
                          </span>
                          <span className="text-xs text-gray-500 font-semibold">mg/kg</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-purple-900/40 text-purple-300 border border-purple-700/50 group-hover:bg-purple-900/60 transition-colors">
                          {oil.cultivar}
                        </span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-900/40 text-blue-300 border border-blue-700/50 group-hover:bg-blue-900/60 transition-colors">
                          <span className="text-lg">{COUNTRY_FLAGS[oil.origin]}</span>
                          {oil.origin}
                        </span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className="text-sm text-gray-400 font-semibold">{oil.harvestDate}</span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex flex-col gap-2">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-orange-900/40 text-orange-300 border border-orange-700/50">
                            {oil.method}
                          </span>
                          <span className="text-xs text-gray-500">{oil.lab}</span>
                          {oil.certificateLink && (
                            <a
                              href={oil.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 bg-blue-600/80 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                            >
                              <span className="text-base">📜</span>
                              <span>View Certificate</span>
                            </a>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-bold bg-gray-700/50 text-gray-300 group-hover:bg-gray-700 transition-colors">
                            {oil.price}
                          </span>
                          <span className="text-xs text-green-400 font-bold">{oil.priceAmount}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <a
                          href={oil.buyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold text-sm hover:from-green-500 hover:to-emerald-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          <span>🛒</span>
                          <span>Buy</span>
                        </a>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-gray-400 max-w-xs leading-relaxed">{oil.notes}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive World Map */}
          <div className="mt-16">
            <WorldMap />
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="group bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="font-bold text-2xl">Our Rankings</h3>
              </div>
              <p className="text-green-50 leading-relaxed">
                Based on verified third-party lab tests (HPLC, qNMR, RSS). We prioritize oils above 500 mg/kg polyphenols.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="font-bold text-2xl">Health Impact</h3>
              </div>
              <p className="text-blue-50 leading-relaxed">
                Higher polyphenols = stronger antioxidants and cardiovascular benefits. 1000+ mg/kg is elite, 2000+ is world-class.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="font-bold text-2xl">Price Guide</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-purple-50 font-medium">
                  <span className="font-bold">$</span>
                  <span>Under $15</span>
                </div>
                <div className="flex justify-between text-purple-50 font-medium">
                  <span className="font-bold">$$</span>
                  <span>$15-$25</span>
                </div>
                <div className="flex justify-between text-purple-50 font-medium">
                  <span className="font-bold">$$$</span>
                  <span>$25-$40</span>
                </div>
                <div className="flex justify-between text-purple-50 font-medium">
                  <span className="font-bold">$$$$</span>
                  <span>$40+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl shadow-2xl border border-green-700/50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4YzAgNC40MiAxLjYgOC40OCA0LjI0IDExLjZDMi4xMiAzMi45MiAwIDM5LjEyIDAgNDZoMTJjMC02LjYzIDUuMzctMTIgMTItMTJzMTIgNS4zNyAxMiAxMmgxMmMwLTYuODgtMi4xMi0xMy4wOC00LjI0LTE2LjRDNTQuNCAyNi40OCA1NiAyMi40MiA1NiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

            <div className="relative px-12 py-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Discover the Science Behind the Rankings
              </h2>
              <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                Deep dive into producers, cultivars, growing conditions, and processing methods
              </p>
              <Link
                href="/research"
                className="inline-flex items-center gap-3 bg-white text-green-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-50 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 group"
              >
                <span>Explore Research</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-row {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-fade-in-row {
          animation: fade-in-row 0.4s ease-out both;
        }
      `}</style>
    </main>
  )
}
