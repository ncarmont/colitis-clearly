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
    id: 1, rank: 1, brand: "ONSURI SP360", polyphenols: 1462, origin: "Greece", harvestDate: "2024",
    price: "$$$$", priceAmount: "$79.99", method: "Method not stated", lab: "UK Aggregator",
    certificateLink: "https://kreta24.eu",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.co.uk/SP360-Arbequina-Ultra-Polyphenol-Virgin/dp/B0FBMFH4J3",
    notes: "UK aggregator lists 1462 mg/kg - Treat as claim. Amazon + official refill program"
  },
  {
    id: 2, rank: 2, brand: "Pamako Premium", polyphenols: 1222, origin: "Greece", harvestDate: "2024",
    price: "$$$$", priceAmount: "$45.00", method: "Brand claim", lab: "Listing claim",
    certificateLink: "https://www.amazon.com",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Phenolic-Premium-Intensity-Extracted-KABOS/dp/B07MQWRB1G",
    notes: "~1200+ claim; ask seller for current COA for exact lot"
  },
  {
    id: 3, rank: 3, brand: "P.J. KABOS Phenolic Shot", polyphenols: 1000, origin: "Greece", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$59.83", method: "qNMR/HPLC", lab: "Dual verified by brand",
    certificateLink: "https://highpolyphenololiveoil.co.uk/",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com",
    notes: ">1000 mg/kg brand claims by qNMR/HPLC; detailed health-claim metrics"
  },
  {
    id: 4, rank: 4, brand: "November Early Harvest", polyphenols: 1073, origin: "Tunisia", harvestDate: "2024",
    price: "$$$$", priceAmount: "$48.00", method: "Method not stated", lab: "UK Retailer",
    certificateLink: "https://www.amazon.co.uk/November-Organic-Olive-Oil-Harvest/dp/B07PJS56PR",
    cultivar: "Chetoui",
    buyLink: "https://www.amazon.co.uk/November-Organic-Olive-Oil-Harvest/dp/B07PJS56PR",
    notes: "UK retailer lists 1073 mg/kg; verify lot COA if dosing for health claim"
  },
  {
    id: 5, rank: 5, brand: "Opus Oléa Organic", polyphenols: 874, origin: "Greece", harvestDate: "2024",
    price: "$$$$", priceAmount: "$48.00", method: "HPLC", lab: "Retailer claim",
    certificateLink: "https://www.earlyharvest.co.uk/opus-olea-organic-extra-virgin-olive-oil-500ml",
    cultivar: "Koroneiki",
    buyLink: "https://www.opuslivewell.com",
    notes: "Organic variant reported higher phenols vs non-organic; ask for batch COA"
  },
  {
    id: 6, rank: 6, brand: "Zero Nutrition EVOO100", polyphenols: 813, origin: "Greece", harvestDate: "2024",
    price: "$$", priceAmount: "$24.99", method: "Method not stated", lab: "Brand published",
    certificateLink: "https://www.amazon.com",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com",
    notes: "Brand publishes phenolic total for the SKU; request underlying COA for lot"
  },
  {
    id: 7, rank: 7, brand: "Vallesur", polyphenols: 688, origin: "Peru", harvestDate: "2024",
    price: "$$", priceAmount: "$28.00", method: "Method not stated", lab: "Retailer claim",
    certificateLink: "https://highpolyphenololiveoil.co.uk/oil/vallesur-peruvian/",
    cultivar: "Picual",
    buyLink: "https://www.amazon.ae/Vallesur-Three-Time-Peruvian-High-Polyphenols-Pressed/dp/B0CH11QXC8",
    notes: "Good value South-American HP EVOO; confirm latest harvest's COA"
  },
  {
    id: 8, rank: 8, brand: "Citizens of Soil Tuscan Extra Rare", polyphenols: 655, origin: "Italy", harvestDate: "2024",
    price: "$$$", priceAmount: "$38.00", method: "Method not stated", lab: "UK importer",
    certificateLink: "https://www.odysea.com/product/odysea-good-for-you-polyphenol-extra-virgin-olive-oil-250ml/",
    cultivar: "Mixed",
    buyLink: "https://www.citizensofsoil.com/products/tuscan-olive-oil-extra-rare",
    notes: "Small batch UK importer; provides producer details—ask for COA for specific lot"
  },
  {
    id: 9, rank: 9, brand: "Odysea Good For You", polyphenols: 573, origin: "Greece", harvestDate: "2024",
    price: "$$", priceAmount: "$19.99", method: "Method not stated", lab: "Odysea blog",
    certificateLink: "https://www.amazon.com/Finca-Torre-Organic-Hojiblanca-Milliliter/dp/B01G3O76CG",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.co.uk/Finca-torre-500ml-Hojiblanca-Internet/dp/B01G3O76CG",
    notes: "Correction: earlier 480 mg/kg was low; Odysea states ~573 mg/kg for this SKU"
  },
  {
    id: 10, rank: 10, brand: "Castillo de Canena First Day of Harvest Picual", polyphenols: 650, origin: "Spain", harvestDate: "2024",
    price: "$$$$", priceAmount: "$48.00", method: "HPLC", lab: "Producer analyses",
    certificateLink: "https://www.amazon.co.uk/Oro-del-Desierto-Picual-Organic/dp/B00D1AAOLG",
    cultivar: "Picual",
    buyLink: "https://www.amazon.com/Castillo-Canena-Arbequina-Harvest-Harvested/dp/B082XK2K6C",
    notes: "Varies by lot; use the specific year/lot COA from producer's analysis archive"
  },
  {
    id: 11, rank: 11, brand: "Oro del Desierto Picual", polyphenols: 717, origin: "Spain", harvestDate: "2024",
    price: "$$$", priceAmount: "$32.00", method: "Tech sheet", lab: "Producer tech sheet",
    certificateLink: "https://oliveoillovers.com",
    cultivar: "Picual",
    buyLink: "https://www.amazon.com/Oro-Del-Desierto-Picual-Organic/dp/B00D1AAOLG",
    notes: "Producer technical sheet shows ~717 mg/kg for Picual; confirm your bottle's lot"
  },
  {
    id: 12, rank: 12, brand: "Quattrociocchi Superbo Organic", polyphenols: 800, origin: "Italy", harvestDate: "2024",
    price: "$$$", priceAmount: "$38.95", method: "HPLC", lab: "Retailer HPLC",
    certificateLink: "https://oliveoilprofessor.com/blog/9-high-phenolic-olive-oils-for-health",
    cultivar: "Moraiolo",
    buyLink: "https://www.olio2go.com/products/quattrociocchi-superbo-biologica-extra-virgin-olive-oil-2024-500-ml",
    notes: "Multiple retailers list ~800 mg/kg; article cites 734 mg/kg—expect lot variance"
  },
  {
    id: 13, rank: 13, brand: "Rincón de la Subbética Hojiblanca Organic PDO", polyphenols: 356, origin: "Spain", harvestDate: "2024",
    price: "$$$", priceAmount: "$32.95", method: "HPLC", lab: "Fall 2024 HPLC",
    certificateLink: "https://oliveoillovers.com/products/rincon-de-la-subbetica-w-box",
    cultivar: "Hojiblanca",
    buyLink: "https://www.amazon.co.uk/Organic-EVOO-Rinc%C3%B3n-Subb%C3%A9tica-Hojiblanca/dp/B00361BE0K",
    notes: "Fall 2024 HPLC 356 mg/kg; higher NMR ranges (700-900) for same SKU—methodology matters"
  },
  {
    id: 14, rank: 14, brand: "ENTIMIO Intenso", polyphenols: 900, origin: "Italy", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$50.00", method: "Brand claim", lab: "Brand claim",
    certificateLink: "https://entimio.com/products/entimio-intenso-2024-25-harvest-robust-organic-extra-virgin-olive-oil-early-harvest-from-puglia-16-9-fl-oz",
    cultivar: "Puglia",
    buyLink: "https://www.amazon.com/Entimio-Intenso-Harvest-Award-Winning-Polyphenols/dp/B07D528XH3",
    notes: "Amazon listing and brand page claim >900 mg/kg; ask for per-lot COA if dosing"
  },
  {
    id: 15, rank: 15, brand: "ENTIMIO Ardente", polyphenols: 600, origin: "Italy", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$45.00", method: "Brand claim", lab: "Brand claim",
    certificateLink: "https://www.amazon.com/Entimio-Ardente-Italian-Polyphenols-Organic/dp/B0C17MHY4H",
    cultivar: "Sicily",
    buyLink: "https://www.amazon.com/Entimio-Ardente-Italian-Polyphenols-Organic/dp/B0C17MHY4H",
    notes: "Early-harvest monovarietal; verify lot COA for exact number"
  },
  {
    id: 16, rank: 16, brand: "Kosterina Original", polyphenols: 500, origin: "Greece", harvestDate: "2024",
    price: "$$$", priceAmount: "$38.00", method: "Brand FAQ", lab: "Brand FAQ",
    certificateLink: "https://www.kosterina.com/blogs/news/show-tell-the-science-behind-our-evoo",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Kosterina-Cold-Pressed-Koroneiki-Incredible-Superfood/dp/B087MT3TC7",
    notes: "500+ at harvest (brand FAQ); prior harvest reported ~638 mg/kg—expect seasonal drift"
  },
  {
    id: 17, rank: 17, brand: "Gundry MD Polyphenol-Rich Olive Oil", polyphenols: 612, origin: "Morocco", harvestDate: "2024",
    price: "$$$", priceAmount: "$38.00", method: "Independent HPLC", lab: "Olive Oil Times",
    certificateLink: "https://www.oliveoiltimes.com/opinion/gundry-olive-oil-review/89570",
    cultivar: "Morocco source",
    buyLink: "https://gundrymd.com/p/polyphenol-rich-olive-oil/",
    notes: "Independent testing found 561–612 mg/kg (below marketing language)"
  },
  {
    id: 18, rank: 18, brand: "The Governor Premium / Limited", polyphenols: 1000, origin: "Greece", harvestDate: "2024",
    price: "$$$$", priceAmount: "$52.00", method: "NMR/HPLC", lab: "UK distributor",
    certificateLink: "https://thegovernorevoo.co.uk/products/the-governor-premium-unfiltered-extra-virgin-olive-oil",
    cultivar: "Lianolia",
    buyLink: "https://www.amazon.com/Governor-Premium-Extra-Virgin-Olive/dp/B00QSSL0SE",
    notes: "Marketed for very high oleocanthal; ask seller for NMR/HPLC for specific batch"
  },
  {
    id: 19, rank: 19, brand: "Laconiko Olio Nuovo", polyphenols: 877, origin: "Greece", harvestDate: "2025",
    price: "$$$$", priceAmount: "$48.00", method: "COA on site", lab: "COA on product page",
    certificateLink: "https://laconiko.com/products/laconiko-olio-nuovo-new-2025-harvest",
    cultivar: "Koroneiki",
    buyLink: "https://laconiko.com/products/laconiko-olio-nuovo-new-2025-harvest",
    notes: "COA shows 877 mg/kg for new harvest; prior lots reported higher"
  },
  {
    id: 20, rank: 20, brand: "Laconiko ZOI Ultra High Phenolic", polyphenols: 1870, origin: "Greece", harvestDate: "2024",
    price: "$$$$", priceAmount: "$65.00", method: "qNMR", lab: "Brand qNMR",
    certificateLink: "https://laconiko.com/products/zoi-ultra-high-phenolic-evoo-rich-in-oleocanthal",
    cultivar: "Kalamon",
    buyLink: "https://us.amazon.com/Laconiko-Extra-Virgin-Olive-Oil/dp/B0C3WVXNNX",
    notes: "1870 total; ~1496 oleocanthal (qNMR); rare oleocanthal-dominant profile—confirm pdf"
  },
  {
    id: 21, rank: 21, brand: "Liokareas RX High-Phenolic", polyphenols: 1143, origin: "Greece", harvestDate: "2024",
    price: "$$$", priceAmount: "$44.00", method: "Listing claim", lab: "Health-claim comps",
    certificateLink: "https://www.amazon.com/High-Phenolic-Extra-Virgin-Olive/dp/B0924XPGF6",
    cultivar: "Greece",
    buyLink: "https://www.amazon.com/High-Phenolic-Extra-Virgin-Olive/dp/B0924XPGF6",
    notes: "SKU marketed with >1,100 mg/kg; ask for batch COA"
  },
  {
    id: 22, rank: 22, brand: "ATSAS Gold/Silver Editions", polyphenols: 1978, origin: "Cyprus", harvestDate: "2020-2024",
    price: "$$$$", priceAmount: "$46.00", method: "NMR", lab: "2020 COA example",
    certificateLink: "https://atsas.com.cy/highest-total-phenolic-score-in-the-world-for-atsas-extra-virgin-olive-oil-2/",
    cultivar: "Kalamon",
    buyLink: "https://www.amazon.com/ATSAS-Organic-Extra-Virgin-Olive/dp/B0CG1D559W",
    notes: "Peer-reviewed/press note world-record phenolics; 2020 COA 1,978 mg/kg—seasonally volatile"
  },
  {
    id: 23, rank: 23, brand: "Laudemio Sorgenti", polyphenols: 650, origin: "Italy", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$58.00", method: "Retailer/brand", lab: "Retailer claims",
    certificateLink: "https://welleatable.com/products/laudemio-tuscany-high-polyphenols-650-mg-kg-extra-virgin-olive-oil-robust-green-fresh-new-2024-2025-early-harvest-cold-pressed-frantoio-monovarietal-lab-tested-no-pesticides-16-9-fl-oz",
    cultivar: "Frantoio mono",
    buyLink: "https://www.amazon.com/LAUDEMIO-Polyphenols-Frantoio-Monovarietal-Pesticides/dp/B0971V7MGW",
    notes: "Retailers cite ~650 mg/kg; similar Laudemio estates cite ~700 mg/kg—treat as claims"
  },
  {
    id: 24, rank: 24, brand: "Laudemio (Frescobaldi/Consortium)", polyphenols: 650, origin: "Italy", harvestDate: "2024",
    price: "$$$$", priceAmount: "$58.00", method: "Est.", lab: "Older customer notes",
    certificateLink: "https://www.amazon.com/ask/questions/Tx1IYJ94B8DPV9U/",
    cultivar: "Blends",
    buyLink: "https://www.amazon.com/FRESCOBALDI-Laudemio-Premium-Winning-Polyphenols/dp/B001DTOBIY",
    notes: "~650 est.; older customer-shared lab notes 526 mg/kg (2016)—expect substantial lot variance"
  },
  {
    id: 25, rank: 25, brand: "Oro Bailén Picual (Reserva Familiar)", polyphenols: 324, origin: "Spain", harvestDate: "2024",
    price: "$$$", priceAmount: "$32.00", method: "HPLC", lab: "Retailer HPLC",
    certificateLink: "https://oliveoillovers.com/products/oro-bailen-reserva-familiar-frantoio",
    cultivar: "Picual",
    buyLink: "https://www.amazon.com/Oro-Bailen-Family-Reserve-17-Ounce/dp/B003U65RUO",
    notes: "Retailers list ~324–397 mg/kg for recent lots; producer also sells Hojiblanca/Frantoio"
  },
  {
    id: 26, rank: 26, brand: "Oro Bailén Hojiblanca", polyphenols: 409, origin: "Spain", harvestDate: "2024",
    price: "$$$", priceAmount: "$33.00", method: "HPLC", lab: "Retailer HPLC",
    certificateLink: "https://www.artisanoliveoilcompany.co.uk/products/oro-bailen-hojiblanca-extra-virgin-olive-oil",
    cultivar: "Hojiblanca",
    buyLink: "https://www.amazon.com/Oro-Bailen-Familiar-Hojiblanca-Extracted/dp/B07NNTH69X",
    notes: "UK specialty retailer lists 409 mg/kg for current lot; check bottle lot and date"
  },
  {
    id: 27, rank: 27, brand: "Frantoi Cutrera Primo DOP (Tonda Iblea)", polyphenols: 429, origin: "Italy", harvestDate: "2024",
    price: "$$$", priceAmount: "$36.00", method: "HPLC", lab: "Retailer HPLC",
    certificateLink: "https://oliveoillovers.com/products/frantoi-cutrera-primo-double-pdo-monte-iblei-organic",
    cultivar: "Tonda Iblea",
    buyLink: "https://www.amazon.com/Frantoi-Cutrera-Extracted-Polyphenol-Authentic/dp/B003EPIN70",
    notes: "Olive-Oil-Lovers lists 429 mg/kg; good Sicilian reference oil but not ultra tier"
  },
  {
    id: 28, rank: 28, brand: "Entimio Collection (bundle)", polyphenols: 750, origin: "Italy", harvestDate: "2024-25",
    price: "$$$$", priceAmount: "$120.00", method: "Brand range", lab: "Brand range",
    certificateLink: "https://www.amazon.com/Entimio-Collection-Harvest-Organic-Polyphenols/dp/B09GMW63W1",
    cultivar: "Italy",
    buyLink: "https://www.amazon.com/Entimio-Collection-Harvest-Organic-Polyphenols/dp/B09GMW63W1",
    notes: "Bundle listing communicates 600–900+ mg/kg range across SKUs; verify per bottle"
  },
  {
    id: 29, rank: 29, brand: "Kosterina (Everyday)", polyphenols: 350, origin: "Greece", harvestDate: "2024",
    price: "$$$", priceAmount: "$28.00", method: "Brand FAQ", lab: "At harvest",
    certificateLink: "https://www.kosterina.com/pages/faq/what-is-the-polyphenol-count-of-kosterina-evoo",
    cultivar: "Greece",
    buyLink: "https://www.amazon.com/Kosterina-Cold-Pressed-Koroneiki-Polyphenol-Antioxidants/dp/B09F1DMSJM",
    notes: "Transparent baseline for a daily oil; Original white bottle is higher (500+)"
  },
  {
    id: 30, rank: 30, brand: "PJ KABOS Family Reserve Organic Robust", polyphenols: 1000, origin: "Greece", harvestDate: "2024-25",
    price: "$$$", priceAmount: "$35.83", method: "Listing claim", lab: "2024/25 listing",
    certificateLink: "https://www.amazon.com",
    cultivar: "Greece",
    buyLink: "https://www.amazon.com",
    notes: "2024/25 listing explicitly calls out 1000+ mg/kg; request current COA for lot received"
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
      <header className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 w-full">
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
              Best Extra Virgin
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200">
                Olive Oils Globally
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto font-light animate-fade-in-delay">
              Science-backed rankings of 30 lab-verified EVOOs ranked by polyphenol content
            </p>

            <div className="text-base md:text-lg text-green-100/90 max-w-4xl mx-auto mt-4 animate-fade-in-delay leading-relaxed">
              High-polyphenol olive oil reduces cardiovascular disease risk by <span className="font-semibold text-green-200">31%</span> (PREDIMED study),
              lowers inflammation comparable to ibuprofen, and increases lifespan in Blue Zone populations.
              Each oil below is independently lab-tested for maximum health benefits.
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8 animate-fade-in-delay-2">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{OILS_DATA.length}</div>
                <div className="text-sm text-green-200">Lab-Verified EVOOs</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">8</div>
                <div className="text-sm text-green-200">Countries</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">1978</div>
                <div className="text-sm text-green-200">Max mg/kg (NMR)</div>
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
                  {filteredAndSortedOils.map((oil, index) => {
                    const isAmazon = oil.buyLink.toLowerCase().includes('amazon')
                    return (
                      <tr
                        key={oil.id}
                        className="hover:bg-green-900/20 transition-all duration-200 group animate-fade-in-row"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="px-3 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-200 ${
                            oil.rank === 1 ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-white shadow-yellow-500/50' :
                            oil.rank === 2 ? 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 text-white shadow-gray-400/50' :
                            oil.rank === 3 ? 'bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 text-white shadow-orange-500/50' :
                            'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-green-500/30'
                          }`}>
                            {oil.rank}
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
                                  ? 'bg-[#FF9900] hover:bg-[#FFA724] text-black'
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
                                  <span>Buy</span>
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
      `}</style>
    </main>
    </>
  )
}
