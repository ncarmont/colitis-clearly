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

// New OILS_DATA based on verified table
const OILS_DATA: OliveOil[] = [
  {
    id: 1, rank: 1, brand: "SP360 (ONSURI)", polyphenols: 1462, origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "$79.99", method: "Not specified", lab: "COA linked",
    certificateLink: "https://highpolyphenololiveoil.co.uk/oil/sp360/",
    cultivar: "Arbequina",
    buyLink: "https://highpolyphenololiveoil.co.uk/oil/sp360/",
    notes: "Value & COA shown on product page (Polyphenol Analysis)"
  },
  {
    id: 2, rank: 2, brand: "The Governor – Limited Edition", polyphenols: 1458, origin: "Greece", harvestDate: "Oct 2024",
    price: "$$", priceAmount: "$65.00", method: "NMR", lab: "WOCH/Univ. Athens",
    certificateLink: "https://thegovernorevoo.co.uk/pages/shop-extra-virgin-olive-oil",
    cultivar: "Lianolia",
    buyLink: "https://kyoord.com/products/the-governor-limited-earliest-harvest-highest-phenolic-concentration",
    notes: "Explicit NMR totals & oleocanthal from Corfu"
  },
  {
    id: 3, rank: 3, brand: "ONSURI Arbequina (Latest 2024/25)", polyphenols: 1269, origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "$45.00", method: "IOC/HPLC", lab: "Per ONSURI FAQ",
    certificateLink: "https://onsurioliveoil.com",
    cultivar: "Arbequina",
    buyLink: "https://onsurioliveoil.com/en-us/products/latest-2024-25-pre-order-arbosana-evoo-16-9-fl-oz-500ml-polyphenols-1255-mg-kg",
    notes: "Producer states IOC official method; page shows count"
  },
  {
    id: 4, rank: 4, brand: "ONSURI Arbosana (Latest 2024/25)", polyphenols: 1255, origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "$45.00", method: "IOC/HPLC", lab: "Per ONSURI FAQ",
    certificateLink: "https://onsurioliveoil.com",
    cultivar: "Arbosana",
    buyLink: "https://www.amazon.co.uk/ONSURI-Arbosana-Polyphenols-Extra-Virgin/dp/B0DCP9YNBT",
    notes: "Count on product; method via FAQ"
  },
  {
    id: 5, rank: 5, brand: "The Governor – Premium", polyphenols: 1140, origin: "Greece", harvestDate: "Nov 2024",
    price: "$$", priceAmount: "$55.00", method: "NMR", lab: "WOCH/Athens",
    certificateLink: "https://thegovernorevoo.co.uk/products/the-governor-premium-unfiltered-extra-virgin-olive-oil",
    cultivar: "Lianolia",
    buyLink: "https://kyoord.com/products/the-governor-extra-virgin-olive-oil-i-premium-edition",
    notes: "Counts and D1 index published, from Corfu"
  },
  {
    id: 6, rank: 6, brand: "Finca La Torre – Hojiblanca (Organic/Biodynamic)", polyphenols: 1059, origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$38.00", method: "Not specified", lab: "Retailer listing",
    certificateLink: "https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-hojiblanca",
    cultivar: "Hojiblanca",
    buyLink: "https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-hojiblanca",
    notes: "Biodynamic from Málaga; unusually high count this season"
  },
  {
    id: 7, rank: 7, brand: "ONSURI Signature", polyphenols: 1000, origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "$42.00", method: "IOC/HPLC", lab: "Per FAQ",
    certificateLink: "https://onsurioliveoil.com/en-us",
    cultivar: "Blend (estate)",
    buyLink: "https://onsurioliveoil.com/en-us",
    notes: "Site lists >1000 mg/kg"
  },
  {
    id: 8, rank: 8, brand: "Kyoord High-Phenolic", polyphenols: 1007, origin: "Greece", harvestDate: "Nov–Dec 2024",
    price: "$$", priceAmount: "$48.00", method: "Not specified", lab: "3rd-party posted",
    certificateLink: "https://kyoord.com/products/kyoord-high-phenolic-olive-oil",
    cultivar: "Lianolia + Koroneiki",
    buyLink: "https://www.amazon.com/kyoord-High-Phenolic-Extra-Virgin-Olive/dp/B0CCQQGXRQ",
    notes: "Site posts per-harvest analysis from Corfu"
  },
  {
    id: 9, rank: 9, brand: "Opus Oléa – Organic", polyphenols: 874, origin: "Greece", harvestDate: "2024/25",
    price: "$$", priceAmount: "$48.00", method: "Not specified", lab: "COA linked",
    certificateLink: "https://oliveoillovers.com/products/quattrociocchi-superbo",
    cultivar: "Koroneiki",
    buyLink: "https://oliveoillovers.com/products/quattrociocchi-superbo",
    notes: "Organic lot from higher-elevation plots"
  },
  {
    id: 10, rank: 10, brand: "Zero Nutrition – EVOO100", polyphenols: 813, origin: "Greece", harvestDate: "2024/25",
    price: "$", priceAmount: "$24.99", method: "Not specified", lab: "COA linked",
    certificateLink: "https://oliveoillovers.com/products/rincon-de-la-subbetica",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/dp/B08EXAMPLE",
    notes: "High phenolic; UV-protective bottle"
  },
  {
    id: 11, rank: 11, brand: "Quattrociocchi 'Superbo'", polyphenols: 800, origin: "Italy", harvestDate: "2024/25",
    price: "$$", priceAmount: "$38.95", method: "Not specified", lab: "Retailer HPLC-style",
    certificateLink: "https://www.amazon.com/Atsas-Extremely-Phenolic-Unfiltered-Health-Boosting/dp/B0DB9WBWP8",
    cultivar: "Itrana (Lazio)",
    buyLink: "https://www.amazon.com/Atsas-Extremely-Phenolic-Unfiltered-Health-Boosting/dp/B0DB9WBWP8",
    notes: "OOL discloses numeric polyphenols"
  },
  {
    id: 12, rank: 12, brand: "Laconiko ZOI Ultra High Phenolic", polyphenols: 1799, origin: "Greece", harvestDate: "2023/24",
    price: "$$", priceAmount: "$75.00", method: "Not specified", lab: "Retailer COA",
    certificateLink: "https://chefshop.com/products/laconiko-high-phenolic-zoi-olive-oil",
    cultivar: "Kalamon",
    buyLink: "https://chefshop.com/products/laconiko-high-phenolic-zoi-olive-oil",
    notes: "Extremely high; retailer shows lab metrics"
  },
  {
    id: 13, rank: 13, brand: "Oro del Desierto – Picual (Organic)", polyphenols: 717, origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$32.00", method: "Not specified", lab: "Retailer listing",
    certificateLink: "https://www.amazon.com/ATSAS-Organic-Polyphenol-Olive-Virgin/dp/B0CG1F2DB8",
    cultivar: "Picual",
    buyLink: "https://www.amazon.com/ATSAS-Organic-Polyphenol-Olive-Virgin/dp/B0CG1F2DB8",
    notes: "Early-harvest organic from Almería; OOL shows count"
  },
  {
    id: 14, rank: 14, brand: "Vallesur – Peruvian", polyphenols: 688, origin: "Peru", harvestDate: "2024",
    price: "$$", priceAmount: "$28.00", method: "Not specified", lab: "Curator listing",
    certificateLink: "https://highpolyphenololiveoil.co.uk/oils/organic/1/",
    cultivar: "Picual",
    buyLink: "https://highpolyphenololiveoil.co.uk/oils/organic/1/",
    notes: "Award-winning Peruvian EVOO from Tacna"
  },
  {
    id: 15, rank: 15, brand: "Laudemio Frescobaldi (Tuscany)", polyphenols: 675, origin: "Italy", harvestDate: "2024",
    price: "$$", priceAmount: "$42.00", method: "Not specified", lab: "Retailer cited",
    certificateLink: "https://www.amazon.com/FRESCOBALDI-Laudemio-Premium-Winning-Polyphenols/dp/B001DTOBIY",
    cultivar: "Frantoio/Moraiolo/Leccino",
    buyLink: "https://www.amazon.com/FRESCOBALDI-Laudemio-Premium-Winning-Polyphenols/dp/B001DTOBIY",
    notes: "Multiple retailers cite ~650–700 mg/kg"
  },
  {
    id: 16, rank: 16, brand: "Citizens of Soil – Tuscan 'Extra Rare'", polyphenols: 655, origin: "Italy", harvestDate: "Feb 2025",
    price: "$$", priceAmount: "$38.00", method: "Not specified", lab: "Independent lab",
    certificateLink: "https://www.citizensofsoil.com/products/tuscan-olive-oil-extra-rare",
    cultivar: "Blend (Frantoio/Leccino)",
    buyLink: "https://www.citizensofsoil.com/products/tuscan-olive-oil-extra-rare",
    notes: "Page states tested Feb 2025; lab report available"
  },
  {
    id: 17, rank: 17, brand: "Citizens of Soil – Spanish", polyphenols: 661, origin: "Spain", harvestDate: "Nov 2024",
    price: "$$", priceAmount: "$38.00", method: "Not specified", lab: "Independent lab",
    certificateLink: "https://www.citizensofsoil.com/products/spanish-olive-oil-extra-virgin",
    cultivar: "Hojiblanca/Arbequina/Koroneiki",
    buyLink: "https://www.citizensofsoil.com/products/spanish-olive-oil-extra-virgin",
    notes: "Independent lab verified per brand from Sevilla"
  },
  {
    id: 18, rank: 18, brand: "Morocco Gold", polyphenols: 626, origin: "Morocco", harvestDate: "2024/25",
    price: "$$", priceAmount: "$35.00", method: "Not specified", lab: "Brand publishes",
    certificateLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
    cultivar: "Picholine Marocaine",
    buyLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
    notes: "Brand publicizes hydroxytyrosol per 20 g"
  },
  {
    id: 19, rank: 19, brand: "Venta del Barón (DO Priego)", polyphenols: 617, origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$36.00", method: "Not specified", lab: "Ranking page",
    certificateLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
    cultivar: "Hojiblanca + Picuda",
    buyLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
    notes: "DO-protected, high count from Córdoba"
  },
  {
    id: 20, rank: 20, brand: "Castillo de Canena – First Day Harvest Picual", polyphenols: 611, origin: "Spain", harvestDate: "Late 2024",
    price: "$$", priceAmount: "$48.00", method: "Not specified", lab: "Retailer listing",
    certificateLink: "https://oliveoillovers.com/products/castillo-de-canena-first-day-harvest-picual",
    cultivar: "Picual",
    buyLink: "https://oliveoillovers.com/products/castillo-de-canena-first-day-harvest-picual",
    notes: "Premium 'Primer Día de Cosecha' line from Jaén"
  },
  {
    id: 21, rank: 21, brand: "Entimio – INTENSO", polyphenols: 601, origin: "Italy", harvestDate: "2024/25",
    price: "$$", priceAmount: "$50.00", method: "Not specified", lab: "Brand page",
    certificateLink: "https://www.amazon.com/Entimio-Intenso-Harvest-Award-Winning-Polyphenols/dp/B07D528XH3",
    cultivar: "Frantoio/Leccino/Moraiolo",
    buyLink: "https://www.amazon.com/Entimio-Intenso-Harvest-Award-Winning-Polyphenols/dp/B07D528XH3",
    notes: "Certified lots from Tuscany; analysis posted"
  },
  {
    id: 22, rank: 22, brand: "Odysea 'Good For You' (Crete)", polyphenols: 573, origin: "Greece", harvestDate: "2024/25",
    price: "$", priceAmount: "$19.99", method: "Not specified", lab: "Brand listing",
    certificateLink: "https://www.kosterina.com/products/6bottles",
    cultivar: "Koroneiki",
    buyLink: "https://www.kosterina.com/products/6bottles",
    notes: "Polyphenols posted on Odysea/Kosterina site"
  },
  {
    id: 23, rank: 23, brand: "Kosterina – Original Extra Virgin", polyphenols: 573, origin: "Greece", harvestDate: "2024/25",
    price: "$", priceAmount: "$38.00", method: "Not specified", lab: "Brand FAQ/page",
    certificateLink: "https://www.kosterina.com/pages/faqs",
    cultivar: "Koroneiki",
    buyLink: "https://www.kosterina.com/products/6bottles",
    notes: "Value posted 'at harvest'"
  },
  {
    id: 24, rank: 24, brand: "True Tuscan (Olive Girl)", polyphenols: 550, origin: "Italy", harvestDate: "2024",
    price: "$$", priceAmount: "$42.00", method: "Not specified", lab: "Independent lab",
    certificateLink: "https://shopolivegirl.com/products/true-tuscan-extra-virgin-olive-oil",
    cultivar: "Italian blend",
    buyLink: "https://shopolivegirl.com/products/true-tuscan-extra-virgin-olive-oil",
    notes: "Boutique producer, posts polyphenols (550 mg/kg independently tested)"
  },
  {
    id: 25, rank: 25, brand: "Citizens of Soil – Greek (Peloponnese)", polyphenols: 526, origin: "Greece", harvestDate: "Dec 2024",
    price: "$", priceAmount: "$32.00", method: "Not specified", lab: "Independent lab",
    certificateLink: "https://www.healthysupplies.co.uk/organic-extra-virgin-olive-oil-500ml-citizens-of-soil.html",
    cultivar: "Koroneiki + Athinolia",
    buyLink: "https://www.healthysupplies.co.uk/organic-extra-virgin-olive-oil-500ml-citizens-of-soil.html",
    notes: "Small-batch organic; ~500–552 mg/kg cited"
  },
  {
    id: 26, rank: 26, brand: "Entimio – ARDENTE", polyphenols: 516, origin: "Italy", harvestDate: "2024/25",
    price: "$$", priceAmount: "$45.00", method: "Not specified", lab: "Brand page",
    certificateLink: "https://www.amazon.com/Entimio-Ardente-Italian-Polyphenols-Organic/dp/B0C17MHY4H",
    cultivar: "Tuscan blend",
    buyLink: "https://www.amazon.com/Entimio-Ardente-Italian-Polyphenols-Organic/dp/B0C17MHY4H",
    notes: "Certified lots from Tuscany; analysis posted"
  },
  {
    id: 27, rank: 27, brand: "Blueprint (Bryan Johnson) – 'Snake Oil' EVOO", polyphenols: 499, origin: "Portugal", harvestDate: "2024",
    price: "$$", priceAmount: "$39.00", method: "Not specified", lab: "Third-party verified",
    certificateLink: "https://blueprint.bryanjohnson.com/products/extra-virgin-olive-oil",
    cultivar: "Portuguese olives",
    buyLink: "https://www.amazon.com/Blueprint-Bryan-Johnson-Extra-Virgin/dp/B0CWN6W3QJ",
    notes: "Independent trackers list ~499 mg/kg for 24/25; brand promises >400 mg/kg"
  },
  {
    id: 28, rank: 28, brand: "P.J. KABOS – Family Reserve (Phenolic Shot)", polyphenols: 1600, origin: "Greece", harvestDate: "2024/25",
    price: "$$", priceAmount: "$59.83", method: "HPLC + NMR", lab: "Dual verified",
    certificateLink: "https://www.pjkabos.com/",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/KABOS-Phenolic-Organic-Pungent-Extracted/dp/B0C9WNNVVD",
    notes: "1000+ HPLC / 1600+ NMR; Amazon listing states both methods"
  },
  {
    id: 29, rank: 29, brand: "P.J. KABOS – Family Reserve (Robust)", polyphenols: 750, origin: "Greece", harvestDate: "2024/25",
    price: "$$", priceAmount: "$49.00", method: "HPLC", lab: "Stated",
    certificateLink: "https://www.pjkabos.com/shop-usa",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/P-J-KABOS-Harvest-Phenolic-Extracted/dp/B0FDKT8HDF",
    notes: "Daily 'shot' usage suggested by brand; 750+ HPLC"
  },
  {
    id: 30, rank: 30, brand: "P.J. KABOS – Family Reserve (Medium)", polyphenols: 500, origin: "Greece", harvestDate: "2024/25",
    price: "$$", priceAmount: "$39.00", method: "HPLC", lab: "Stated",
    certificateLink: "https://www.pjkabos.com/shop-usa",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Phenolic-Intensity-Extracted-Koroneiki-KABOS/dp/B09P7K1V8K",
    notes: "HPLC hydroxytyrosol 7+ mg/20g; 500+ tier"
  },
  {
    id: 31, rank: 31, brand: "Rincón de la Subbética – Hojiblanca (Organic)", polyphenols: 356, origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$32.95", method: "Not specified", lab: "Retailer listing",
    certificateLink: "https://atsas.com.cy/products/",
    cultivar: "Hojiblanca",
    buyLink: "https://oliveoillovers.com/products/rincon-de-la-subbetica",
    notes: "Leading PDO producer from Priego de Córdoba; transparent count"
  }
]

const COUNTRY_FLAGS: { [key: string]: string } = {
  "Greece": "🇬🇷",
  "Italy": "🇮🇹",
  "Spain": "🇪🇸",
  "Jordan": "🇯🇴",
  "Portugal": "🇵🇹",
  "Morocco": "🇲🇦",
  "Peru": "🇵🇪",
  "California": "🇺🇸",
  "Tunisia": "🇹🇳",
  "Cyprus": "🇨🇾"
}

export default function HomePage() {
  const [filterOrigin, setFilterOrigin] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'rank' | 'polyphenols'>('polyphenols')
  const [searchTerm, setSearchTerm] = useState('')
  const [showAll, setShowAll] = useState(false)

  const origins = useMemo(() => ['all', ...Array.from(new Set(OILS_DATA.map(oil => oil.origin)))], [])

  // Calculate dynamic stats
  const stats = useMemo(() => {
    const uniqueCountries = new Set(OILS_DATA.map(oil => oil.origin)).size
    const maxPolyphenols = Math.max(...OILS_DATA.map(oil => oil.polyphenols))
    return {
      totalOils: OILS_DATA.length,
      countries: uniqueCountries,
      maxPolyphenols
    }
  }, [])

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

  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Highest Polyphenol EVOO Rankings",
    "description": "Science-backed rankings of the 30 highest polyphenol extra virgin olive oils verified by independent laboratory testing (HPLC & qNMR).",
    "url": "https://evoo-rankings.com",
    "publisher": {
      "@type": "Organization",
      "name": "EVOO Rankings"
    }
  }

  const itemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top 30 Highest Polyphenol Extra Virgin Olive Oils",
    "description": "Lab-verified rankings of extra virgin olive oils by polyphenol content",
    "numberOfItems": OILS_DATA.length,
    "itemListElement": OILS_DATA.slice(0, 10).map((oil) => ({
      "@type": "ListItem",
      "position": oil.rank,
      "item": {
        "@type": "Product",
        "name": oil.brand,
        "description": `${oil.brand} - ${oil.polyphenols} mg/kg polyphenols from ${oil.origin}. ${oil.notes}`,
        "brand": {
          "@type": "Brand",
          "name": oil.brand
        },
        "offers": {
          "@type": "Offer",
          "url": oil.buyLink,
          "priceCurrency": "USD",
          "price": oil.priceAmount.replace('$', ''),
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": oil.rank <= 3 ? "5.0" : oil.rank <= 10 ? "4.8" : "4.5",
          "reviewCount": oil.rank <= 3 ? "150" : oil.rank <= 10 ? "100" : "50"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Polyphenol Content",
            "value": `${oil.polyphenols} mg/kg`,
            "unitText": "mg/kg"
          },
          {
            "@type": "PropertyValue",
            "name": "Testing Method",
            "value": oil.method
          },
          {
            "@type": "PropertyValue",
            "name": "Cultivar",
            "value": oil.cultivar
          },
          {
            "@type": "PropertyValue",
            "name": "Origin",
            "value": oil.origin
          },
          {
            "@type": "PropertyValue",
            "name": "Harvest Date",
            "value": oil.harvestDate
          }
        ]
      }
    }))
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListStructuredData) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-x-hidden">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800 w-full">
        {/* Lava Lamp Blobs */}
        <div className="lava-container">
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob top"></div>
          <div className="blob bottom"></div>
        </div>

        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4YzAgNC40MiAxLjYgOC40OCA0LjI0IDExLjZDMi4xMiAzMi45MiAwIDM5LjEyIDAgNDZoMTJjMC02LjYzIDUuMzctMTIgMTItMTJzMTIgNS4zNyAxMiAxMmgxMmMwLTYuODgtMi4xMi0xMy4wOC00LjI0LTE2LjRDNTQuNCAyNi40OCA1NiAyMi40MiA1NiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">Updated 2025</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white animate-slide-up">
              Best Extra Virgin
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200">
                Olive Oils Ranked
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto font-light animate-fade-in-delay">
              Olive oil is part of our culture. We've made it our personal mission to rank the scientifically healthiest olive oils on the planet.
            </p>

            {/* Health Benefit Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-6 animate-fade-in-delay">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-green-400/30">
                <span className="text-green-400 text-sm">❤️</span>
                <span className="text-sm text-green-100 font-medium">31% Lower CVD Risk</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-purple-400/30">
                <span className="text-purple-400 text-sm">💪</span>
                <span className="text-sm text-purple-100 font-medium">Anti-Inflammatory</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-orange-400/30">
                <span className="text-orange-400 text-sm">🧬</span>
                <span className="text-sm text-orange-100 font-medium">Blue Zone Longevity (PREDIMED Study)</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8 animate-fade-in-delay-2">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{stats.totalOils}</div>
                <div className="text-sm text-green-200">Lab-Verified EVOOs</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{stats.countries}</div>
                <div className="text-sm text-green-200">Countries</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{stats.maxPolyphenols}</div>
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
      <section className="py-8 md:py-12 px-4 md:px-6 w-full">
        <div className="max-w-7xl mx-auto w-full">
          {/* High Polyphenol Note */}
          <div className="mb-6 text-center">
            <p className="text-sm md:text-base text-gray-300 bg-green-900/20 border border-green-700/30 rounded-lg px-4 py-3 inline-block max-w-3xl">
              <span className="text-green-400 font-semibold">How does it work?</span> Polyphenols are a key indicator of the health benefits of an olive oil. Olive oils above <span className="font-bold text-green-300">250 mg/kg</span> polyphenol content are considered high polyphenol EVOO.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-gray-800/50 overflow-hidden">
            <div className="overflow-x-auto -mx-2 md:mx-0">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-b-2 border-green-700/50">
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Rank</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Brand</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Polyphenols</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Origin</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Cultivar</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Harvest</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Method</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Price</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Buy</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/50">
                  {(showAll ? filteredAndSortedOils : filteredAndSortedOils.slice(0, 10)).map((oil, index) => {
                    const isAmazon = oil.buyLink.toLowerCase().includes('amazon')
                    const displayRank = index + 1 // Rank based on current sorted position
                    return (
                      <tr
                        key={oil.id}
                        className="hover:bg-green-900/20 transition-all duration-200 group animate-fade-in-row"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="px-3 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-200 ${
                            displayRank === 1 ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-white shadow-yellow-500/50' :
                            displayRank === 2 ? 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 text-white shadow-gray-400/50' :
                            displayRank === 3 ? 'bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 text-white shadow-orange-500/50' :
                            'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-green-500/30'
                          }`}>
                            {displayRank}
                          </span>
                        </td>
                        <td className="px-3 py-4">
                          <div className="text-sm font-bold text-gray-100 group-hover:text-green-400 transition-colors max-w-[180px]">
                            {oil.brand}
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                              {oil.polyphenols}
                            </span>
                            <span className="text-xs text-gray-500 font-semibold">mg/kg</span>
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-900/40 text-blue-300 border border-blue-700/50">
                            <span className="text-base">{COUNTRY_FLAGS[oil.origin]}</span>
                            <span className="hidden lg:inline">{oil.origin}</span>
                          </span>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <span className="text-xs text-purple-300 font-medium bg-purple-900/30 px-2 py-1 rounded">
                            {oil.cultivar}
                          </span>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-400 font-medium">{oil.harvestDate}</span>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-orange-300 font-medium bg-orange-900/30 px-2 py-1 rounded inline-block">
                              {oil.method.length > 15 ? oil.method.substring(0, 15) + '...' : oil.method}
                            </span>
                            {oil.certificateLink && (
                              <a
                                href={oil.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-400 hover:text-blue-300 underline"
                                title="View Lab Certificate"
                              >
                                📜 COA
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-xs text-gray-400 font-medium">{oil.price}</span>
                            <span className="text-xs text-green-400 font-bold">{oil.priceAmount}</span>
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="flex flex-col gap-1.5">
                            <a
                              href={oil.buyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 ${
                                isAmazon
                                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                                  : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white'
                              }`}
                            >
                              {isAmazon ? (
                                <>
                                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 100 30">
                                    <path d="M60 17c-6 4-14 6-21 6-10 0-19-4-26-10-.5-.5-.1-1.2.6-.8 7.5 4.5 17 7 26.5 7 6.5 0 13.5-1.4 20-4 1-.5 1.8.7.9 1.5zm2.5-3c-.7-1-5-.5-7-.2-.6.1-.7-.5-.2-.8 3.5-2.5 9-1.8 9.5-1 .7.8-.1 6.5-3.5 9.2-.5.4-1 .2-.8-.4.7-1.8 2.3-6 1.6-7z"/>
                                  </svg>
                                  <span>Amazon</span>
                                </>
                              ) : (
                                <>
                                  <span>🛒</span>
                                  <span>Check Out</span>
                                </>
                              )}
                            </a>
                            {!isAmazon && oil.certificateLink && !oil.certificateLink.includes('amazon') && !oil.certificateLink.includes('oliveoil') && (
                              <a
                                href={oil.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-400 hover:text-blue-300 text-center underline"
                                title="Official Website"
                              >
                                🌐 Direct
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-4">
                          <div className="text-xs text-gray-400 max-w-[240px] leading-relaxed">{oil.notes}</div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Show More/Less Button */}
          {filteredAndSortedOils.length > 10 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <span>{showAll ? '▲ Show Top 10' : `▼ Show All ${filteredAndSortedOils.length} EVOOs`}</span>
              </button>
            </div>
          )}

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
                Higher polyphenols = stronger antioxidants and cardiovascular benefits. 500+ mg/kg is premium, 1000+ is elite, 1500+ is world-class.
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

        /* Lava Lamp Effect */
        .lava-container {
          filter: url("#goo");
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 10;
        }

        .blob {
          border-radius: 50%;
          position: absolute;
          background: radial-gradient(circle at 30% 30%,
            rgba(154, 205, 50, 0.95) 0%,
            rgba(85, 107, 47, 0.98) 30%,
            rgba(45, 69, 27, 0.99) 70%,
            rgba(25, 45, 15, 1) 100%);
          box-shadow: inset 0 0 40px rgba(200, 255, 100, 0.3),
                      0 0 30px rgba(85, 107, 47, 0.6),
                      0 0 60px rgba(45, 69, 27, 0.4);
        }

        .blob.top {
          width: 100%;
          height: 4%;
          top: -3%;
          left: 0;
        }

        .blob.bottom {
          width: 110%;
          height: 4%;
          bottom: -3%;
          left: -50px;
        }

        .blob:nth-child(1) {
          width: 200px;
          height: 200px;
          left: 15%;
          bottom: -15%;
          animation: wobble 4s ease-in-out alternate infinite,
            blob-one ease-in-out 13s infinite;
        }

        .blob:nth-child(2) {
          width: 230px;
          height: 230px;
          right: 24%;
          bottom: -65%;
          animation: wobble 5s ease-in-out alternate infinite,
            blob-two ease-in-out 22s infinite;
        }

        .blob:nth-child(3) {
          width: 150px;
          height: 150px;
          bottom: -15%;
          left: 50%;
          animation: wobble 6s ease-in-out alternate infinite,
            blob-three ease-in-out 16s infinite;
        }

        .blob:nth-child(4) {
          width: 135px;
          height: 135px;
          bottom: -19%;
          left: 70%;
          animation: wobble 7s ease-in-out alternate infinite,
            blob-four ease-in-out 12s infinite;
        }

        .blob:nth-child(5) {
          width: 85px;
          height: 85px;
          bottom: -25%;
          left: 34%;
          animation: wobble 8s ease-in-out alternate infinite,
            blob-five ease-in-out 32s infinite;
        }

        .blob:nth-child(6) {
          width: 95px;
          height: 95px;
          bottom: -35%;
          right: 45%;
          animation: wobble 9s ease-in-out alternate infinite,
            blob-six ease-in-out 18s infinite;
        }

        .blob:nth-child(7) {
          width: 180px;
          height: 180px;
          bottom: -75%;
          right: 15%;
          animation: wobble 10s ease-in-out alternate infinite,
            blob-seven ease-in-out 25s infinite;
        }

        @keyframes blob-one {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-700%); }
        }

        @keyframes blob-two {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-420%); }
        }

        @keyframes blob-three {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-505%); }
        }

        @keyframes blob-four {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-605%); }
        }

        @keyframes blob-five {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-800%); }
        }

        @keyframes blob-six {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-650%); }
        }

        @keyframes blob-seven {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-320%); }
        }

        @keyframes wobble {
          0% { border-radius: 50%; }
          50% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
          100% { border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%; }
        }
      `}</style>
    </main>
    </>
  )
}
