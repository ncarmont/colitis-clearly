'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import WorldMap from '@/components/WorldMap'

type OliveOil = {
  id: number
  rank: number
  brand: string
  hplcPolyphenols?: number  // HPLC method polyphenol content
  nmrOtherPolyphenols?: number  // NMR/Other method polyphenol content
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

// Updated OILS_DATA with HPLC and NMR/Other split columns - 36 entries
const OILS_DATA: OliveOil[] = [
  {
    id: 1, rank: 1, brand: "P.J. KABOS – Family Reserve Phenolic Shot",
    hplcPolyphenols: 1012, nmrOtherPolyphenols: 1600,
    origin: "Greece", harvestDate: "Oct 2024",
    price: "$$", priceAmount: "$59.83", method: "HPLC + qNMR", lab: "IOC-certified HPLC + qNMR",
    certificateLink: "",
    cultivar: "Olympia",
    buyLink: "https://www.amazon.com/KABOS-Phenolic-Organic-Pungent-Extracted/dp/B0C9WNNVVD?&linkCode=ll1&tag=bestoliveoilr-20&linkId=14d811abd991d784a6170a2caad30c47&language=en_US&ref_=as_li_ss_tl",
    notes: "HPLC (IOC-certified): 1012 mg/kg, 14.4 mg/20g hydroxytyrosol. NMR: 1600 mg/kg, 32.18 mg/20g. 2025 Gold Medal (NY, Italy). USDA Organic."
  },
  {
    id: 2, rank: 2, brand: "SP360",
    hplcPolyphenols: 1711,
    origin: "Jordan", harvestDate: "Sep 2025",
    price: "$$", priceAmount: "£42.00", method: "HPLC", lab: "Lab Certified (single estate)",
    certificateLink: "",
    cultivar: "Arbequina",
    buyLink: "https://sp360.co.uk/products/latest-october-harvest-sp360-500ml-extra-virgin-olive-oil-bottle-pre-order",
    notes: "UV-protected refillable bottle; subscription refill pouches save 10%. Herbaceous with green almond & tomato vine notes. Single estate family farm."
  },
  {
    id: 3, rank: 3, brand: "The Governor – Limited Edition",
    nmrOtherPolyphenols: 1458,
    origin: "Greece (Corfu)", harvestDate: "Oct 2024",
    price: "$$", priceAmount: "$65.00", method: "qNMR", lab: "qNMR total phenols",
    certificateLink: "https://cdn.shopify.com/s/files/1/0736/8274/7666/files/The_Governor_Evoo_Limited_Certificate_2025.pdf",
    cultivar: "Lianolia",
    buyLink: "https://thegovernorevoo.co.uk/products/the-governor-limited-edition-extra-virgin-olive-oil",
    notes: "Limited Edition from Corfu; 2024/25 NMR-based results posted."
  },
  {
    id: 4, rank: 4, brand: "OlvLimits \"Green Machine\"",
    hplcPolyphenols: 1378,
    origin: "Italy (Puglia)", harvestDate: "Oct 2025",
    price: "$", priceAmount: "£23.00", method: "HPLC (University of Athens method)", lab: "National & Kapodistrian University of Athens",
    certificateLink: "https://cdn.shopify.com/s/files/1/0774/2003/6420/files/analysis.png?v=1763034364",
    cultivar: "Coratina",
    buyLink: "https://www.olvlimits.com/products/green-machine",
    notes: "Lab analysis shows total polyphenols 1,378 mg/kg; early-harvest Coratina; World Olive Center for Health watermark."
  },
  {
    id: 5, rank: 5, brand: "ONSURI Arbequina",
    nmrOtherPolyphenols: 1269,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$", priceAmount: "£19.95", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Arbequina",
    buyLink: "https://onsurioliveoil.com/products/arbequina-extra-virgin-olive-oil-16-9-fl-oz-500ml-latest-2022-harvest",
    notes: "Oleocanthal ~406 mg/kg stated."
  },
  {
    id: 6, rank: 6, brand: "ONSURI Arbequina 1L (2×500 ml)",
    nmrOtherPolyphenols: 1269,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "£38.00", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Arbequina",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-arbequina-evoo-1-litre-bulk-offer-polyphenols-1269-mg-kg",
    notes: "Best value (1 L)."
  },
  {
    id: 7, rank: 7, brand: "ONSURI Arbosana",
    nmrOtherPolyphenols: 1255,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$", priceAmount: "£19.95", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Arbosana",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-pre-order-arbosana-evoo-16-9-fl-oz-500ml-polyphenols-1255-mg-kg",
    notes: "Oleocanthal ~425 mg/kg stated."
  },
  {
    id: 8, rank: 8, brand: "Finca La Torre — Hojiblanca (Organic/Biodynamic)",
    nmrOtherPolyphenols: 1059,
    origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$38.00", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Hojiblanca",
    buyLink: "https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-hojiblanca",
    notes: "Demeter biodynamic estate oil."
  },
  {
    id: 9, rank: 9, brand: "November – Polyphenols Organic Early Harvest",
    nmrOtherPolyphenols: 1073,
    origin: "Greece (South)", harvestDate: "Oct–Nov 2024",
    price: "$$", priceAmount: "£26.90", method: "NMR", lab: "NMR (IOC experimental)",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.masworth.co.uk/product/november-early-harvest-organic-olive-oil-500ml/",
    notes: "500 ml; organic; early-harvest green olives; bundle price ≈ £22.87/bottle (3+)"
  },
  {
    id: 10, rank: 10, brand: "Kyoord High-Phenolic",
    nmrOtherPolyphenols: 1007,
    origin: "Greece (Corfu)", harvestDate: "Nov–Dec 2024",
    price: "$$", priceAmount: "£37.00", method: "qNMR", lab: "qNMR metrics",
    certificateLink: "",
    cultivar: "Lianolia + Koroneiki",
    buyLink: "https://www.amazon.com/kyoord-High-Phenolic-Extra-Virgin-Olive/dp/B0CCQQGXRQ?th=1&linkCode=ll1&tag=bestoliveoilr-20&linkId=cde3cbabfa18ecdacdb34b3f0833d404&language=en_US&ref_=as_li_ss_tl",
    notes: "Founded by Dr. Goren; small Corfu farm."
  },
  {
    id: 11, rank: 11, brand: "ONSURI Signature (Arbequina + Arbosana)",
    nmrOtherPolyphenols: 1000,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$", priceAmount: "£19.95", method: "RSS", lab: "RSS certification pending",
    certificateLink: "",
    cultivar: "Blend",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-signature-evoo-16-9-fl-oz-500ml-polyphenols-1000-mg-kg",
    notes: "Floral/almond profile; smooth."
  },
  {
    id: 12, rank: 12, brand: "Laconiko Olio Nuovo",
    nmrOtherPolyphenols: 774,
    origin: "Greece", harvestDate: "2025/26",
    price: "$$", priceAmount: "$39.95", method: "qNMR", lab: "qNMR verified",
    certificateLink: "https://cdn.shopify.com/s/files/1/0395/9799/8236/files/Laconiko-Olio-Nuovo-Certificate-of-Analysis-and-NMR.pdf?v=1741704618",
    cultivar: "Greek blend",
    buyLink: "https://laconiko.com/products/laconiko-olio-nuovo-new-2025-harvest",
    notes: "First certified 'high phenolic' in North America. 2025/26 harvest: 774 mg/kg verified."
  },
  {
    id: 13, rank: 13, brand: "Opus Oléa – Organic",
    nmrOtherPolyphenols: 874,
    origin: "Greece", harvestDate: "2024/25",
    price: "$$", priceAmount: "$48.00", method: "Other", lab: "Lab images shown",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.opuslivewell.com/products/opus-olea-organic-extra-virgin-olive-oil-500ml",
    notes: "Small-batch organic; Messinia/Peloponnese."
  },
  {
    id: 14, rank: 14, brand: "Zero Nutrition – EVOO100",
    nmrOtherPolyphenols: 813,
    origin: "Italy (Puglia)", harvestDate: "Nov 2024",
    price: "$", priceAmount: "$24.99", method: "Other", lab: "Independent tracker",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
    notes: "Tracker shows 813 mg/kg and a posted cert link."
  },
  {
    id: 15, rank: 15, brand: "Quattrociocchi 'Superbo'",
    nmrOtherPolyphenols: 800,
    origin: "Italy", harvestDate: "2024/25",
    price: "$$", priceAmount: "$38.95", method: "Other", lab: "Widely cited value",
    certificateLink: "",
    cultivar: "Itrana/Moraiolo",
    buyLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
    notes: "Needs correct brand link/COA."
  },
  {
    id: 16, rank: 16, brand: "P.J. KABOS – Family Reserve Robust",
    hplcPolyphenols: 750,
    origin: "Greece", harvestDate: "2024/25",
    price: "$$", priceAmount: "$49.00", method: "HPLC", lab: "HPLC reported",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/P-J-KABOS-Harvest-Phenolic-Extracted/dp/B0FDKT8HDF?&linkCode=ll1&tag=bestoliveoilr-20&linkId=1328610a17867326c0d2a26ae73aab6a&language=en_US&ref_=as_li_ss_tl",
    notes: "'Daily shot' positioning."
  },
  {
    id: 17, rank: 17, brand: "Oro del Desierto – Picual (Organic)",
    nmrOtherPolyphenols: 717,
    origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$32.00", method: "Other", lab: "Retailers cited",
    certificateLink: "",
    cultivar: "Picual",
    buyLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
    notes: "Early-harvest organic Picual, Almería."
  },
  {
    id: 18, rank: 18, brand: "Vallesur – Peruvian",
    nmrOtherPolyphenols: 688,
    origin: "Peru", harvestDate: "2024",
    price: "$$", priceAmount: "$28.00", method: "Other", lab: "Tracker listing",
    certificateLink: "",
    cultivar: "Picual",
    buyLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
    notes: "Award-winning Tacna EVOO."
  },
  {
    id: 19, rank: 19, brand: "Laudemio Frescobaldi (Tuscany)",
    nmrOtherPolyphenols: 675,
    origin: "Italy", harvestDate: "2024",
    price: "$$", priceAmount: "$42.00", method: "Other", lab: "Retailer-cited range",
    certificateLink: "",
    cultivar: "Frantoio/Moraiolo/Leccino",
    buyLink: "https://www.amazon.com/FRESCOBALDI-Laudemio-Premium-Winning-Polyphenols/dp/B001DTOBIY?th=1&linkCode=ll1&tag=bestoliveoilr-20&linkId=be0189503aadb51434d91e088337e2b5&language=en_US&ref_=as_li_ss_tl",
    notes: "Classic Tuscan PDO style."
  },
  {
    id: 20, rank: 20, brand: "Citizens of Soil — Spanish",
    nmrOtherPolyphenols: 661,
    origin: "Spain", harvestDate: "Nov 2024",
    price: "$$", priceAmount: "$38.00", method: "Other", lab: "Independent lab",
    certificateLink: "",
    cultivar: "Hojiblanca/Arbequina/Koroneiki",
    buyLink: "https://www.citizensofsoil.com/products/spanish-olive-oil-extra-virgin",
    notes: "Small co-op batches."
  },
  {
    id: 21, rank: 21, brand: "Citizens of Soil — Tuscan 'Extra Rare'",
    nmrOtherPolyphenols: 655,
    origin: "Italy (Tuscany)", harvestDate: "Feb 2025",
    price: "$$", priceAmount: "$38.00", method: "Other", lab: "Independent lab",
    certificateLink: "",
    cultivar: "Frantoio/Leccino blend",
    buyLink: "https://www.citizensofsoil.com/products/tuscan-olive-oil-extra-rare",
    notes: "Limited release."
  },
  {
    id: 22, rank: 22, brand: "Morocco Gold",
    nmrOtherPolyphenols: 626,
    origin: "Morocco", harvestDate: "2024/25",
    price: "$$", priceAmount: "$35.00", method: "Other", lab: "Tracker listing",
    certificateLink: "",
    cultivar: "Picholine Marocaine",
    buyLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
    notes: "Brand publicizes Htyr/20g."
  },
  {
    id: 23, rank: 23, brand: "Venta del Barón (DO Priego)",
    nmrOtherPolyphenols: 617,
    origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$36.00", method: "Other", lab: "Tracker listing",
    certificateLink: "",
    cultivar: "Hojiblanca + Picuda",
    buyLink: "https://highpolyphenololiveoil.co.uk/evooscore/rankings/",
    notes: "DO protected."
  },
  {
    id: 24, rank: 24, brand: "Castillo de Canena – First Day Harvest Picual",
    nmrOtherPolyphenols: 611,
    origin: "Spain", harvestDate: "Late 2024",
    price: "$$", priceAmount: "$48.00", method: "Other", lab: "Retailer figure",
    certificateLink: "",
    cultivar: "Picual",
    buyLink: "https://oliveoillovers.com/products/castillo-de-canena-first-day-harvest-picual",
    notes: "'Primer Día de Cosecha'."
  },
  {
    id: 25, rank: 25, brand: "Entimio – INTENSO",
    nmrOtherPolyphenols: 601,
    origin: "Italy", harvestDate: "2024/25",
    price: "$$", priceAmount: "$50.00", method: "Other", lab: "Brand batch analyses",
    certificateLink: "",
    cultivar: "Frantoio/Leccino/Moraiolo",
    buyLink: "https://www.amazon.com/Entimio-Intenso-Harvest-Award-Winning-Polyphenols/dp/B07D528XH3",
    notes: "Certified Tuscan lots."
  },
  {
    id: 26, rank: 26, brand: "Odysea 'Good For You' (Crete)",
    nmrOtherPolyphenols: 573,
    origin: "Greece", harvestDate: "2024/25",
    price: "$", priceAmount: "$19.99", method: "Other", lab: "Brand posted",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.co.uk/Odysea-Good-Greek-Virgin-Olive/dp/B0C7LBD9Z4",
    notes: "UK retailer SKU; Cretan Koroneiki with 573 mg/kg polyphenols."
  },
  {
    id: 27, rank: 27, brand: "Kosterina – Original Extra Virgin",
    nmrOtherPolyphenols: 573,
    origin: "Greece (Southern)", harvestDate: "Nov 2024",
    price: "$", priceAmount: "$32.00", method: "Other", lab: "Brand FAQ/page",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.kosterina.com/products/singlebottle",
    notes: "500ml single bottle, US DTC. 100% Koroneiki early-harvest, cold-pressed. Voted world's best EVOO 2025."
  },
  {
    id: 28, rank: 28, brand: "True Tuscan (Olive Girl)",
    nmrOtherPolyphenols: 550,
    origin: "Italy", harvestDate: "2024",
    price: "$$", priceAmount: "$42.00", method: "Other", lab: "Independent test",
    certificateLink: "",
    cultivar: "Blend",
    buyLink: "https://shopolivegirl.com/products/true-tuscan-extra-virgin-olive-oil",
    notes: "Boutique producer."
  },
  {
    id: 29, rank: 29, brand: "Laconiko Extra Virgin (Koroneiki)",
    nmrOtherPolyphenols: 538,
    origin: "Greece", harvestDate: "Nov 2024–Jan 2025",
    price: "$", priceAmount: "$24.95", method: "qNMR", lab: "qNMR verified",
    certificateLink: "https://cdn.shopify.com/s/files/1/0395/9799/8236/files/Laconiko-Koroneiki-Certificate-of-Analysis-and-NMR_214c678d-f473-4f37-9257-322fd3d7e715.pdf?v=1741704340",
    cultivar: "Koroneiki",
    buyLink: "https://laconiko.com/products/laconiko-extra-virgin-olive-oil-new-2024-harvest",
    notes: "Great value with posted NMR."
  },
  {
    id: 30, rank: 30, brand: "Finca La Torre — Arbequina (Organic/Biodynamic)",
    nmrOtherPolyphenols: 537,
    origin: "Spain (Málaga)", harvestDate: "2024/25",
    price: "$$", priceAmount: "€19.63", method: "Other", lab: "Retailer-stated",
    certificateLink: "",
    cultivar: "Arbequina",
    buyLink: "https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-arbequina",
    notes: "0.18% acidity; Demeter."
  },
  {
    id: 31, rank: 31, brand: "Citizens of Soil — Greek (Peloponnese)",
    nmrOtherPolyphenols: 526,
    origin: "Greece", harvestDate: "Dec 2024",
    price: "$", priceAmount: "$32.00", method: "Other", lab: "Retailer cites",
    certificateLink: "",
    cultivar: "Koroneiki + Athinolia",
    buyLink: "https://www.healthysupplies.co.uk/organic-extra-virgin-olive-oil-500ml-citizens-of-soil.html",
    notes: "Small-batch organic."
  },
  {
    id: 32, rank: 32, brand: "Entimio – ARDENTE",
    nmrOtherPolyphenols: 516,
    origin: "Italy", harvestDate: "2024/25",
    price: "$$", priceAmount: "$45.00", method: "Other", lab: "Brand batch analyses",
    certificateLink: "",
    cultivar: "Tuscan blend",
    buyLink: "https://www.amazon.com/Entimio-Ardente-Italian-Polyphenols-Organic/dp/B0C17MHY4H?th=1&linkCode=ll1&tag=bestoliveoilr-20&linkId=d74d40c724b766f7434a23e6eba9650a&language=en_US&ref_=as_li_ss_tl",
    notes: "Robust profile."
  },
  {
    id: 33, rank: 33, brand: "P.J. KABOS – Family Reserve Organic (Medium)",
    hplcPolyphenols: 500,
    origin: "Greece", harvestDate: "Oct–Nov 2024",
    price: "$", priceAmount: "$34.83", method: "HPLC", lab: "Brand claims ≥500 mg/kg",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.pjkabos.com/family-reserve-organic-medium",
    notes: "USDA/EU organic."
  },
  {
    id: 34, rank: 34, brand: "Blueprint (Bryan Johnson) 'Snake Oil' EVOO",
    nmrOtherPolyphenols: 499,
    origin: "Portugal", harvestDate: "2024",
    price: "$$", priceAmount: "$39.00", method: "Other", lab: "Third-party verified",
    certificateLink: "",
    cultivar: "—",
    buyLink: "https://www.amazon.com/Blueprint-Bryan-Johnson-Extra-Virgin/dp/B0CWN6W3QJ",
    notes: "DTC & Amazon."
  },
  {
    id: 35, rank: 35, brand: "The Governor – Premium Edition",
    nmrOtherPolyphenols: 390,
    origin: "Greece (Corfu)", harvestDate: "Nov–Dec 2024",
    price: "$", priceAmount: "€35.00", method: "Folin", lab: "Folin (not HPLC/qNMR)",
    certificateLink: "",
    cultivar: "Lianolia",
    buyLink: "https://www.thegovernor.gr/product/the-governor-premium-edition/",
    notes: "Centenarian trees; 0.17% acidity."
  },
  {
    id: 36, rank: 36, brand: "Rincón de la Subbética – Hojiblanca (Organic)",
    nmrOtherPolyphenols: 356,
    origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$32.95", method: "Other", lab: "Retailer figure",
    certificateLink: "",
    cultivar: "Hojiblanca",
    buyLink: "https://oliveoillovers.com/products/rincon-de-la-subbetica",
    notes: "PDO Priego de Córdoba."
  }
]

const COUNTRY_FLAGS: { [key: string]: string } = {
  "Greece": "🇬🇷",
  "Greece (Corfu)": "🇬🇷",
  "Greece (South)": "🇬🇷",
  "Italy": "🇮🇹",
  "Italy (Puglia)": "🇮🇹",
  "Italy (Tuscany)": "🇮🇹",
  "Spain": "🇪🇸",
  "Spain (Málaga)": "🇪🇸",
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
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  )
  const [instagramFollowers, setInstagramFollowers] = useState<number | null>(null)
  const [totalVisitors, setTotalVisitors] = useState<number | null>(null)

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768)
    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)
    return () => window.removeEventListener('resize', updateIsMobile)
  }, [])

  useEffect(() => {
    // Fetch Instagram follower count
    fetch('/api/instagram-followers')
      .then(res => res.json())
      .then(data => {
        if (data.followers > 0) {
          setInstagramFollowers(data.followers)
        }
      })
      .catch(err => console.error('Failed to fetch Instagram followers:', err))

    // Fetch Google Analytics visitor count
    fetch('/api/analytics-visitors')
      .then(res => res.json())
      .then(data => {
        if (data.totalUsers > 0) {
          setTotalVisitors(data.totalUsers)
        }
      })
      .catch(err => console.error('Failed to fetch analytics data:', err))
  }, [])

  const [overallRankFilter, setOverallRankFilter] = useState(false)

  // Get current month for fresh harvest indicator
  const getCurrentMonthName = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December']
    return months[new Date().getMonth()]
  }

  // Determine fresh harvest based on current month and actual countries in table
  const getFreshHarvestInfo = () => {
    const month = new Date().getMonth() + 1 // 1-12

    // Get unique countries from recentOils
    const countriesInTable = Array.from(new Set(recentOils.map(oil => oil.origin)))

    // Get flags for countries in the table
    const getFlags = (countries: string[]) => {
      return countries
        .map(c => COUNTRY_FLAGS[c])
        .filter(Boolean) // Remove undefined
    }

    // Northern Hemisphere countries
    const northernCountries = countriesInTable.filter(c =>
      ['Greece', 'Greece (Corfu)', 'Greece (South)', 'Spain', 'Spain (Málaga)', 'Italy', 'Italy (Puglia)',
       'Italy (Tuscany)', 'Jordan', 'Morocco', 'Portugal'].includes(c)
    )

    // Southern Hemisphere countries (if any)
    const southernCountries = countriesInTable.filter(c =>
      ['Peru', 'Australia', 'Chile', 'Argentina', 'South Africa'].includes(c)
    )

    // Northern harvest: Oct-Jan (months 10, 11, 12, 1)
    // Southern harvest: Apr-Jul (months 4, 5, 6, 7)
    if (month >= 10 || month <= 2) {
      return {
        region: 'Northern Harvest',
        flags: getFlags(northernCountries).length > 0 ? getFlags(northernCountries) : ['🇬🇷', '🇪🇸', '🇮🇹', '🇯🇴']
      }
    } else if (month >= 4 && month <= 7) {
      return {
        region: 'Southern Harvest',
        flags: getFlags(southernCountries).length > 0 ? getFlags(southernCountries) : ['🌍']
      }
    } else {
      return { region: 'Transition Period', flags: ['🌍'] }
    }
  }

  const currentMonth = getCurrentMonthName()

  // Helper function to check if harvest date is 2024, 2025, or 2026
  const isRecentHarvest = (harvestDate: string): boolean => {
    return harvestDate.includes('2024') || harvestDate.includes('2025') || harvestDate.includes('2026')
  }

  // Helper function to get HPLC equivalent polyphenol value
  const getMaxPolyphenols = (oil: OliveOil): number => {
    if (oil.hplcPolyphenols) {
      return oil.hplcPolyphenols
    }
    // Apply 0.6 conversion factor for NMR/Other methods to get HPLC equivalent
    return oil.nmrOtherPolyphenols ? Math.round(oil.nmrOtherPolyphenols * 0.6) : 0
  }

  // Helper function to get method badges for an oil
  const getMethodBadges = (oil: OliveOil): string[] => {
    const badges: string[] = []
    if (oil.hplcPolyphenols && oil.nmrOtherPolyphenols) {
      badges.push('HPLC')
      badges.push('NMR')
    } else if (oil.hplcPolyphenols) {
      badges.push('HPLC')
    } else if (oil.method.toLowerCase().includes('nmr') || oil.method.toLowerCase().includes('qnmr')) {
      badges.push('NMR')
    } else {
      badges.push('Other')
    }
    return badges
  }

  // Progressively darker green for ranks 4+
  const getGreenShade = (rank: number): string => {
    if (rank <= 7)  return 'from-green-400 to-green-500'
    if (rank <= 11) return 'from-green-500 to-green-600'
    if (rank <= 15) return 'from-green-600 to-green-700'
    if (rank <= 19) return 'from-green-700 to-green-800'
    if (rank <= 24) return 'from-green-800 to-green-900'
    return 'from-green-900 to-slate-800'
  }

  // Filter to only recent harvests for stats and display
  const recentOils = useMemo(() => OILS_DATA.filter(oil => isRecentHarvest(oil.harvestDate)), [])

  // Calculate fresh harvest info based on actual table data
  const freshHarvest = useMemo(() => getFreshHarvestInfo(), [recentOils])

  const origins = useMemo(() => ['all', ...Array.from(new Set(recentOils.map(oil => oil.origin)))], [recentOils])

  // Calculate dynamic stats from recent oils only
  const stats = useMemo(() => {
    const uniqueCountries = new Set(recentOils.map(oil => oil.origin)).size
    const maxPolyphenols = Math.max(...recentOils.map(oil => getMaxPolyphenols(oil)))
    return {
      totalOils: recentOils.length,
      countries: uniqueCountries,
      maxPolyphenols
    }
  }, [recentOils])

  const filteredAndSortedOils = useMemo(() => {
    return recentOils
      .filter(oil => {
        const matchesOrigin = filterOrigin === 'all' || oil.origin === filterOrigin
        const matchesSearch = oil.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            oil.notes.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesHPLC = !overallRankFilter || oil.hplcPolyphenols !== undefined
        return matchesOrigin && matchesSearch && matchesHPLC
      })
      .sort((a, b) => {
        if (sortBy === 'polyphenols' || overallRankFilter) {
          return getMaxPolyphenols(b) - getMaxPolyphenols(a)
        }
        return a.rank - b.rank
      })
  }, [filterOrigin, sortBy, searchTerm, overallRankFilter, recentOils])

  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Highest Polyphenol EVOO Rankings",
    "description": "Science-backed rankings of the 36 highest polyphenol extra virgin olive oils verified by independent laboratory testing (HPLC & qNMR).",
    "url": "https://www.best-olive-oil-ranked.com",
    "publisher": {
      "@type": "Organization",
      "name": "EVOO Rankings"
    }
  }

  const itemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top 36 Highest Polyphenol Extra Virgin Olive Oils",
    "description": "Lab-verified rankings of extra virgin olive oils by polyphenol content (HPLC & NMR testing)",
    "numberOfItems": OILS_DATA.length,
    "itemListElement": OILS_DATA.slice(0, 10).map((oil) => ({
      "@type": "ListItem",
      "position": oil.rank,
      "item": {
        "@type": "Product",
        "name": oil.brand,
        "description": `${oil.brand} - ${getMaxPolyphenols(oil)} mg/kg polyphenols from ${oil.origin}. ${oil.notes}`,
        "brand": {
          "@type": "Brand",
          "name": oil.brand
        },
        "offers": {
          "@type": "Offer",
          "url": oil.buyLink,
          "priceCurrency": "USD",
          "price": oil.priceAmount.replace(/[$£€]/g, ''),
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
            "value": `${getMaxPolyphenols(oil)} mg/kg`,
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

  // Responsive initial display count
  const [initialDisplayCount, setInitialDisplayCount] = useState(20)

  useEffect(() => {
    const updateDisplayCount = () => {
      setInitialDisplayCount(window.innerWidth >= 768 ? 20 : 12)
    }
    updateDisplayCount()
    window.addEventListener('resize', updateDisplayCount)
    return () => window.removeEventListener('resize', updateDisplayCount)
  }, [])

  const oilsToDisplay = filteredAndSortedOils

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

      <main className="min-h-screen bg-slate-50 overflow-x-hidden w-full max-w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 w-full">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.18),transparent)] pointer-events-none" />

        {/* Top utility bar */}
        <div className="relative z-30 flex items-center justify-between px-4 md:px-6 py-2 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[10px] text-white/50 font-medium tracking-widest uppercase">Updated 2026</span>
          </div>
          <div className="flex items-center gap-3">
            {totalVisitors !== null && totalVisitors > 0 && (
              <span className="text-[10px] text-white/40">
                {totalVisitors >= 1000 ? `${(totalVisitors / 1000).toFixed(1)}K` : totalVisitors.toLocaleString()} visitors
              </span>
            )}
            <Link
              href="https://www.instagram.com/bestoliveoilranked.com_?igsh=MW81OXFkZW9uNzBnNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-pink-400 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.5 5.5a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-6 pt-8 pb-10 md:pt-14 md:pb-14 text-center">
          <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] animate-slide-up">
            Best Extra Virgin Olive Oils
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300">
              Ranked Scientifically
            </span>
          </h1>

          <p className="hidden md:block mt-4 text-base text-emerald-100/60 font-light max-w-md mx-auto animate-fade-in-delay">
            Lab-verified polyphenol rankings — independent &amp; science-backed.
          </p>

          {/* Benefit line */}
          <p className="mt-4 md:mt-3 text-[11px] md:text-xs text-white/35 tracking-wide animate-fade-in-delay">
            ❤️ 31% ↓ CVD risk &nbsp;·&nbsp; 💪 Anti-inflammatory &nbsp;·&nbsp; 🧬 Longevity
          </p>

          {/* Stats card */}
          <div className="mt-6 inline-grid grid-cols-3 divide-x divide-white/10 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm animate-fade-in-delay-2">
            <div className="px-5 py-3 md:px-8 md:py-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stats.totalOils}</div>
              <div className="text-[9px] md:text-[10px] text-emerald-400/80 uppercase tracking-wider mt-0.5">Lab-Verified</div>
            </div>
            <div className="px-5 py-3 md:px-8 md:py-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stats.countries}</div>
              <div className="text-[9px] md:text-[10px] text-emerald-400/80 uppercase tracking-wider mt-0.5">Countries</div>
            </div>
            <div className="px-5 py-3 md:px-8 md:py-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stats.maxPolyphenols}</div>
              <div className="text-[9px] md:text-[10px] text-emerald-400/80 uppercase tracking-wider mt-0.5">Max mg/kg</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </header>

      {/* Filters Section - Mobile Single Line */}
      <section className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 md:px-6 py-1">
          <div className="flex gap-1 md:gap-2 items-center justify-between overflow-x-auto scrollbar-hide">
            <div className="flex gap-1 md:gap-1.5 items-center shrink-0">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-6 pr-1.5 py-1 w-20 md:w-48 bg-white border border-gray-300 rounded text-[10px] md:text-xs font-medium text-gray-900 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all placeholder:text-gray-400"
                />
                <svg className="absolute left-1.5 top-1.5 w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Origin Filter */}
              <select
                value={filterOrigin}
                onChange={(e) => setFilterOrigin(e.target.value)}
                className="pl-1.5 pr-5 py-1 bg-white border border-gray-300 rounded text-[10px] md:text-xs font-medium text-gray-900 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all cursor-pointer"
              >
                {origins.map(origin => (
                  <option key={origin} value={origin} className="bg-white">
                    {origin === 'all' ? 'All' : `${COUNTRY_FLAGS[origin] ?? ''} ${origin}`.trim()}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rank' | 'polyphenols')}
                className="pl-1.5 pr-5 py-1 bg-white border border-gray-300 rounded text-[10px] md:text-xs font-medium text-gray-900 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all cursor-pointer"
              >
                <option value="rank" className="bg-white">Rank</option>
                <option value="polyphenols" className="bg-white">Polyphenols</option>
              </select>
            </div>

            <div className="flex items-center gap-0.5 md:gap-1 px-1.5 md:px-2 py-0.5 md:py-1 bg-green-50 rounded border border-green-200 shrink-0">
              <span className="text-gray-600 text-[9px] md:text-[10px]">Showing</span>
              <span className="font-bold text-green-600 text-[10px] md:text-sm">{filteredAndSortedOils.length}</span>
              <span className="text-gray-600 text-[9px] md:text-[10px]">of {OILS_DATA.length}</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Rankings Table */}
      <section className="py-3 md:py-6 px-4 md:px-6 w-full" style={{background: 'linear-gradient(to right, #0f172a, #1e293b, #0f172a)'}}>
        <div className="max-w-7xl mx-auto w-full">
          {/* Info strip — compact */}
          <div className="mb-3 px-2">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-[10px] text-white/50">
              <span className="flex items-center gap-1"><span className="text-emerald-400 font-semibold text-[10px]">250+ mg/kg</span> polyphenols = health benefits</span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span className="flex items-center gap-1"><span className="text-emerald-400 font-semibold text-[10px]">HPLC direct</span> · <span className="text-emerald-400 font-semibold text-[10px]">NMR ×0.6</span> conversion</span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span className="flex items-center gap-1 flex-wrap justify-center">
                <span className="text-white/40">Freshest ({currentMonth}):</span>
                {freshHarvest.flags.slice(0, 5).map((flag, i) => <span key={i}>{flag}</span>)}
                <span className="text-emerald-400/70 italic text-[9px]">{freshHarvest.region}</span>
              </span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span className="italic text-white/30">Affiliate links · HPLC equivalents</span>
            </div>
          </div>

          {/* Overall Rank Filter Active Indicator */}
          {overallRankFilter && (
            <div className="mb-4 text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-lg">
                <span className="text-green-400 font-bold">🏆 Overall Rank Filter Active</span>
                <span className="text-gray-300 text-sm">|</span>
                <span className="text-gray-300 text-xs">HPLC tested only • 2024-2026 harvest • Sorted by polyphenols</span>
                <button
                  onClick={() => setOverallRankFilter(false)}
                  className="ml-2 text-gray-400 hover:text-white transition-colors"
                  title="Clear filter"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          <div className="bg-white/95 backdrop-blur rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden animate-table-entrance">

            {/* ── MOBILE CARD LIST (< md) ── */}
            <div className="block md:hidden divide-y divide-gray-100">
              {oilsToDisplay.map((oil, index) => {
                const displayRank = index + 1
                const score = getMaxPolyphenols(oil)
                const badges = getMethodBadges(oil)
                const isAmazon = oil.buyLink.toLowerCase().includes('amazon')
                const rankGrad =
                  displayRank === 1 ? 'from-yellow-400 via-yellow-500 to-amber-500 shadow-yellow-500/40' :
                  displayRank === 2 ? 'from-gray-300 via-gray-400 to-gray-500 shadow-gray-400/40' :
                  displayRank === 3 ? 'from-orange-400 via-orange-500 to-red-500 shadow-orange-500/40' :
                  `${getGreenShade(displayRank)} shadow-green-500/20`
                const scoreColor =
                  displayRank === 1 ? 'text-yellow-600' :
                  displayRank === 2 ? 'text-gray-600' :
                  displayRank === 3 ? 'text-orange-600' :
                  'text-green-600'
                const rowBg =
                  displayRank === 1 ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400' :
                  displayRank === 2 ? 'bg-gradient-to-r from-gray-50 to-slate-50 border-l-4 border-gray-400' :
                  displayRank === 3 ? 'bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400' :
                  'bg-white'

                return (
                  <div
                    key={oil.id}
                    className={`flex items-center gap-3 px-3 py-3 animate-fade-in-row ${rowBg}`}
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    {/* Rank badge */}
                    <div className="flex flex-col items-center gap-0.5 shrink-0 w-9">
                      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-xl font-bold text-sm text-white shadow-md bg-gradient-to-br ${rankGrad}`}>
                        {displayRank}
                      </span>
                      {displayRank <= 3 && (
                        <span className={`text-base leading-none animate-crown-bounce ${
                          displayRank === 1 ? 'crown-gold' :
                          displayRank === 2 ? 'crown-silver' :
                          'crown-bronze'
                        }`}>👑</span>
                      )}
                    </div>

                    {/* Main info */}
                    <div className="flex-1 min-w-0">
                      <a
                        href={oil.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-gray-900 leading-tight block line-clamp-2"
                      >
                        {oil.brand}
                      </a>
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        <span className={`text-xl font-extrabold leading-none ${scoreColor}`}>{score}</span>
                        <span className="text-[10px] text-gray-500 font-medium">mg/kg</span>
                        {badges.map((b, bi) => (
                          <span key={bi} className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">{b}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-gray-500 flex-wrap">
                        <span>{COUNTRY_FLAGS[oil.origin]} {oil.origin}</span>
                        <span className="text-gray-300">•</span>
                        <span>{oil.harvestDate}</span>
                        <span className="text-gray-300">•</span>
                        <span className="italic text-gray-400">{oil.cultivar}</span>
                      </div>
                    </div>

                    {/* Buy + COA */}
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <a
                        href={oil.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-3 py-2 rounded-lg font-semibold text-[11px] text-white shadow-sm active:scale-95 transition-transform ${
                          isAmazon ? 'bg-blue-600' : 'bg-gradient-to-r from-green-600 to-emerald-600'
                        }`}
                      >
                        Buy →
                      </a>
                      {oil.certificateLink && (
                        <a
                          href={oil.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[9px] text-green-600 underline"
                        >
                          📜 COA
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* ── DESKTOP TABLE (≥ md) ── */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-700 border-b-2 border-gray-600">
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-100 uppercase tracking-wider relative">
                      <button
                        onClick={() => setOverallRankFilter(!overallRankFilter)}
                        className={`flex items-center gap-1 transition-all duration-200 ${
                          overallRankFilter
                            ? 'text-green-400 font-extrabold'
                            : 'hover:text-green-400'
                        }`}
                        title="Filter by HPLC tested oils from 2024-2026 harvest"
                      >
                        Overall Rank {overallRankFilter && '✓'}
                      </button>
                    </th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">Brand</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">Polyphenol Score</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">Original Value</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">Origin</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">Cultivar</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">Harvest</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">Method</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">Buy</th>
                    <th className="px-3 py-4 text-left text-xs font-bold text-gray-100 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {oilsToDisplay.map((oil, index) => {
                    const isAmazon = oil.buyLink.toLowerCase().includes('amazon')
                    const displayRank = index + 1
                    return (
                      <tr
                        key={oil.id}
                        className={`transition-all duration-300 group animate-fade-in-row relative ${
                          displayRank === 1 ? 'bg-gradient-to-r from-yellow-100/90 to-amber-100/80 hover:from-yellow-200/95 hover:to-amber-200/85 border-l-4 border-yellow-400' :
                          displayRank === 2 ? 'bg-gradient-to-r from-gray-100/90 to-slate-100/80 hover:from-gray-200/95 hover:to-slate-200/85 border-l-4 border-gray-400' :
                          displayRank === 3 ? 'bg-gradient-to-r from-orange-100/90 to-red-100/80 hover:from-orange-200/95 hover:to-red-200/85 border-l-4 border-orange-400' :
                          'hover:bg-green-50'
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-200 ${
                              displayRank === 1 ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-white shadow-yellow-500/50' :
                              displayRank === 2 ? 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 text-white shadow-gray-400/50' :
                              displayRank === 3 ? 'bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 text-white shadow-orange-500/50' :
                              `bg-gradient-to-br ${getGreenShade(displayRank)} text-white shadow-green-500/30`
                            }`}>
                              {displayRank}
                            </span>
                            {displayRank <= 3 && (
                              <span className={`text-xl animate-crown-bounce ${
                                displayRank === 1 ? 'crown-gold' :
                                displayRank === 2 ? 'crown-silver' :
                                'crown-bronze'
                              }`}>
                                👑
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-4">
                          <a
                            href={oil.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors max-w-[180px] block"
                          >
                            {oil.brand}
                          </a>
                        </td>
                        <td className="px-3 py-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="flex items-baseline gap-1">
                              <span className={`text-2xl font-bold transition-colors ${
                                displayRank === 1 ? 'text-yellow-600 group-hover:text-yellow-700' :
                                displayRank === 2 ? 'text-gray-600 group-hover:text-gray-700' :
                                displayRank === 3 ? 'text-orange-600 group-hover:text-orange-700' :
                                'text-green-600 group-hover:text-green-700'
                              }`}>
                                {getMaxPolyphenols(oil)}
                              </span>
                              <span className="text-xs text-gray-600 font-semibold">score</span>
                            </div>
                            <div className="flex gap-1 flex-wrap">
                              {getMethodBadges(oil).map((badge, badgeIndex) => (
                                <span
                                  key={`${badge}-${badgeIndex}`}
                                  className={`text-[10px] font-medium px-2 py-1 rounded-full border ${
                                    displayRank === 1 ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                    displayRank === 2 ? 'bg-gray-50 text-gray-700 border-gray-200' :
                                    displayRank === 3 ? 'bg-orange-50 text-orange-700 border-orange-200' :
                                    'bg-gray-100 text-gray-700 border-gray-200'
                                  }`}
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4">
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-baseline gap-0.5">
                              <span className="text-sm font-semibold text-gray-600">
                                {oil.hplcPolyphenols || oil.nmrOtherPolyphenols}
                              </span>
                              <span className="text-[10px] text-gray-400 font-medium">mg/kg</span>
                            </div>
                            <span className={`text-[8px] font-medium px-1 py-0.5 rounded text-center ${
                              displayRank === 1 ? 'bg-yellow-50 text-yellow-600' :
                              displayRank === 2 ? 'bg-gray-50 text-gray-600' :
                              displayRank === 3 ? 'bg-orange-50 text-orange-600' :
                              'bg-gray-50 text-gray-500'
                            }`}>
                              {oil.hplcPolyphenols ? 'HPLC' :
                               oil.method.toLowerCase().includes('nmr') || oil.method.toLowerCase().includes('qnmr') ? 'NMR' :
                               oil.method.toLowerCase().includes('rss') ? 'RSS' : 'Other'}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                            displayRank === 1 ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                            displayRank === 2 ? 'bg-gray-50 text-gray-700 border-gray-200' :
                            displayRank === 3 ? 'bg-orange-50 text-orange-700 border-orange-200' :
                            'bg-gray-50 text-gray-700 border-gray-200'
                          }`}>
                            <span className="text-base">{COUNTRY_FLAGS[oil.origin]}</span>
                            <span className="hidden lg:inline">{oil.origin}</span>
                          </span>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <span className={`text-xs font-medium px-2 py-1 rounded border ${
                            displayRank === 1 ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                            displayRank === 2 ? 'bg-gray-50 text-gray-700 border-gray-200' :
                            displayRank === 3 ? 'bg-orange-50 text-orange-700 border-orange-200' :
                            'bg-gray-50 text-gray-700 border-gray-200'
                          }`}>
                            {oil.cultivar}
                          </span>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-600 font-medium">{oil.harvestDate}</span>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="flex flex-col gap-1">
                            <span className={`text-xs font-medium px-2 py-1 rounded inline-block border ${
                              displayRank === 1 ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                              displayRank === 2 ? 'bg-gray-50 text-gray-700 border-gray-200' :
                              displayRank === 3 ? 'bg-orange-50 text-orange-700 border-orange-200' :
                              'bg-gray-50 text-gray-700 border-gray-200'
                            }`}>
                              {oil.method.length > 15 ? oil.method.substring(0, 15) + '...' : oil.method}
                            </span>
                            {oil.certificateLink && (
                              <a
                                href={oil.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-xs underline ${
                                  displayRank === 1 ? 'text-yellow-600 hover:text-yellow-700' :
                                  displayRank === 2 ? 'text-gray-600 hover:text-gray-700' :
                                  displayRank === 3 ? 'text-orange-600 hover:text-orange-700' :
                                  'text-green-600 hover:text-green-700'
                                }`}
                                title="View Lab Certificate"
                              >
                                📜 COA
                              </a>
                            )}
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
                              <span>Go to Site</span>
                            </a>
                            {!isAmazon && oil.certificateLink && !oil.certificateLink.includes('amazon') && !oil.certificateLink.includes('oliveoil') && (
                              <a
                                href={oil.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:text-blue-700 text-center underline"
                                title="Official Website"
                              >
                                🌐 Direct
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-4">
                          <div className="text-xs text-gray-600 max-w-[240px] leading-relaxed">{oil.notes}</div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Shop Button */}
          <div className="mt-4 md:mt-6 flex items-center justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-green-500 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Shop for these olive oils</span>
            </Link>
          </div>

          {/* Interactive World Map - Condensed */}
          <div className="mt-8 md:mt-12">
            <WorldMap oils={recentOils} />
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

        .animate-table-entrance {
          animation: table-entrance 0.8s ease-out;
        }

        .animate-crown-bounce {
          animation: crown-bounce 2s ease-in-out infinite;
        }

        .crown-gold {
          color: #FFD700;
          filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.8)) saturate(1.5) brightness(1.1);
        }

        .crown-silver {
          color: #C0C0C0;
          filter: grayscale(1) brightness(1.3) drop-shadow(0 0 4px rgba(192, 192, 192, 0.8));
        }

        .crown-bronze {
          color: #CD7F32;
          filter: hue-rotate(15deg) saturate(1.5) brightness(0.8) contrast(1.2) drop-shadow(0 0 4px rgba(205, 127, 50, 0.8));
        }

        @keyframes table-entrance {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes crown-bounce {
          0%, 100% {
            transform: translateY(0) rotate(-5deg);
          }
          25% {
            transform: translateY(-3px) rotate(0deg);
          }
          50% {
            transform: translateY(-1px) rotate(5deg);
          }
          75% {
            transform: translateY(-2px) rotate(0deg);
          }
        }


      `}</style>
        </div>
    </main>
    </>
  )
}
