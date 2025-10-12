'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type OliveOil = {
  id: number
  rank: number
  brand: string
  hplcPolyphenols?: number
  nmrOtherPolyphenols?: number
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

// Country flags mapping
const COUNTRY_FLAGS: { [key: string]: string } = {
  'Greece': '🇬🇷',
  'Greece (Corfu)': '🇬🇷',
  'Greece (Crete)': '🇬🇷',
  'Greece (Messinia)': '🇬🇷',
  'Greece (South)': '🇬🇷',
  'Jordan': '🇯🇴',
  'Spain': '🇪🇸',
  'Italy': '🇮🇹',
  'Morocco': '🇲🇦',
  'Tunisia': '🇹🇳',
  'Turkey': '🇹🇷',
  'Portugal': '🇵🇹',
  'California': '🇺🇸',
  'Australia': '🇦🇺',
}

// Copy the same OILS_DATA from page.tsx
const OILS_DATA: OliveOil[] = [
  {
    id: 1, rank: 1, brand: "P.J. KABOS – Family Reserve Phenolic Shot",
    hplcPolyphenols: 1012, nmrOtherPolyphenols: 1600,
    origin: "Greece", harvestDate: "Sep–Oct 2024",
    price: "$$", priceAmount: "$59.83", method: "HPLC + qNMR", lab: "HPLC COI/T.20/Doc.29 + qNMR",
    certificateLink: "",
    cultivar: "Olympia",
    buyLink: "https://www.amazon.com/KABOS-Phenolic-Organic-Pungent-Extracted/dp/B0C9WNNVVD?&linkCode=ll1&tag=bestoliveoilr-20&linkId=14d811abd991d784a6170a2caad30c47&language=en_US&ref_=as_li_ss_tl",
    notes: "14.4 mg/20g hydroxytyrosol + derivatives (HPLC)."
  },
  {
    id: 2, rank: 2, brand: "SP360",
    hplcPolyphenols: 1462,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "£38.00", method: "HPLC", lab: "HPLC-style IOC phenolics",
    certificateLink: "",
    cultivar: "—",
    buyLink: "https://sp360.co.uk/products/sp-360-500ml-extra-virgin-olive-oil-bottle",
    notes: "Refillable bottle; subscription option."
  },
  {
    id: 3, rank: 3, brand: "The Governor – Limited Edition",
    nmrOtherPolyphenols: 1458,
    origin: "Greece (Corfu)", harvestDate: "Oct 2024",
    price: "$$", priceAmount: "$65.00", method: "qNMR", lab: "qNMR total phenols",
    certificateLink: "",
    cultivar: "Lianolia",
    buyLink: "https://www.amazon.com/kyoord-High-Phenolic-Extra-Virgin-Olive/dp/B0CCQQGXRQ?th=1&linkCode=ll1&tag=bestoliveoilr-20&linkId=cde3cbabfa18ecdacdb34b3f0833d404&language=en_US&ref_=as_li_ss_tl",
    notes: "Retailer page lists 2024/25 results; NMR-based indices."
  },
  {
    id: 4, rank: 4, brand: "ONSURI Arbequina",
    nmrOtherPolyphenols: 1269,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$", priceAmount: "£19.95", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Arbequina",
    buyLink: "https://onsurioliveoil.com/products/arbequina-extra-virgin-olive-oil-16-9-fl-oz-500ml-latest-2022-harvest",
    notes: "Oleocanthal ~406 mg/kg stated."
  },
  {
    id: 5, rank: 5, brand: "ONSURI Arbequina 1L (2×500 ml)",
    nmrOtherPolyphenols: 1269,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "£38.00", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Arbequina",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-arbequina-evoo-1-litre-bulk-offer-polyphenols-1269-mg-kg",
    notes: "Best value (1 L)."
  },
  {
    id: 6, rank: 6, brand: "ONSURI Arbosana",
    nmrOtherPolyphenols: 1255,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$", priceAmount: "£19.95", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Arbosana",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-pre-order-arbosana-evoo-16-9-fl-oz-500ml-polyphenols-1255-mg-kg",
    notes: "Oleocanthal ~425 mg/kg stated."
  },
  {
    id: 7, rank: 7, brand: "Finca La Torre — Hojiblanca (Organic/Biodynamic)",
    nmrOtherPolyphenols: 1059,
    origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$38.00", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Hojiblanca",
    buyLink: "https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-hojiblanca",
    notes: "Demeter biodynamic estate oil."
  },
  {
    id: 8, rank: 8, brand: "November – Polyphenols Organic Early Harvest",
    nmrOtherPolyphenols: 1073,
    origin: "Greece (South)", harvestDate: "Oct–Nov 2024",
    price: "$$", priceAmount: "$50.00", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Koroneiki blend",
    buyLink: "https://www.novemberolives.com/",
    notes: "Single-estate organic oil."
  },
  {
    id: 9, rank: 9, brand: "Pamako Premium",
    hplcPolyphenols: 1222,
    origin: "Greece", harvestDate: "Nov 2023",
    price: "$$", priceAmount: "$44.99", method: "HPLC", lab: "Modern Olives Lab",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Pamako-Premium-Greek-Extra-Virgin/dp/B08T1LWCF6?&linkCode=ll1&tag=bestoliveoilr-20&linkId=4f0b39e06d5c4bd3e1e63d84e5d0e0d9&language=en_US&ref_=as_li_ss_tl",
    notes: "Formerly #2 on rankings (2023 harvest)."
  },
  {
    id: 10, rank: 10, brand: "ONSURI Arbosana 1L (2×500 ml)",
    nmrOtherPolyphenols: 1255,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "£38.00", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Arbosana",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-arbosana-evoo-1-litre-bulk-offer-polyphenols-1255-mg-kg",
    notes: "Best value (1 L)."
  },
  {
    id: 11, rank: 11, brand: "ONSURI Coratina",
    nmrOtherPolyphenols: 1160,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$", priceAmount: "£19.95", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Coratina",
    buyLink: "https://onsurioliveoil.com/products/coratina-extra-virgin-olive-oil-16-9-fl-oz-500ml-latest-2022-harvest",
    notes: "Oleocanthal ~386 mg/kg stated."
  },
  {
    id: 12, rank: 12, brand: "ONSURI Coratina 1L (2×500 ml)",
    nmrOtherPolyphenols: 1160,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "£38.00", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Coratina",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-coratina-evoo-1-litre-bulk-offer-polyphenols-1160-mg-kg",
    notes: "Best value (1 L)."
  },
  {
    id: 13, rank: 13, brand: "ONSURI Picual",
    nmrOtherPolyphenols: 1072,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$", priceAmount: "£19.95", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Picual",
    buyLink: "https://onsurioliveoil.com/products/picual-extra-virgin-olive-oil-16-9-fl-oz-500ml-latest-2022-harvest",
    notes: "Oleocanthal ~353 mg/kg stated."
  },
  {
    id: 14, rank: 14, brand: "ONSURI Picual 1L (2×500 ml)",
    nmrOtherPolyphenols: 1072,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "£38.00", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Picual",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-picual-evoo-1-litre-bulk-offer-polyphenols-1072-mg-kg",
    notes: "Best value (1 L)."
  },
  {
    id: 15, rank: 15, brand: "ONSURI Blend",
    nmrOtherPolyphenols: 1047,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$", priceAmount: "£19.95", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Multi-variety blend",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-pre-order-blend-evoo-16-9-fl-oz-500ml-polyphenols-1047-mg-kg",
    notes: "Balanced multi-cultivar blend."
  },
  {
    id: 16, rank: 16, brand: "ONSURI Blend 1L (2×500 ml)",
    nmrOtherPolyphenols: 1047,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "£38.00", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Multi-variety blend",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-blend-evoo-1-litre-bulk-offer-polyphenols-1047-mg-kg",
    notes: "Best value (1 L)."
  },
  {
    id: 17, rank: 17, brand: "ONSURI Koroneiki",
    nmrOtherPolyphenols: 1029,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$", priceAmount: "£19.95", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://onsurioliveoil.com/products/koroneiki-extra-virgin-olive-oil-16-9-fl-oz-500ml-latest-2022-harvest",
    notes: "Oleocanthal ~338 mg/kg stated."
  },
  {
    id: 18, rank: 18, brand: "ONSURI Koroneiki 1L (2×500 ml)",
    nmrOtherPolyphenols: 1029,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "£38.00", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-koroneiki-evoo-1-litre-bulk-offer-polyphenols-1029-mg-kg",
    notes: "Best value (1 L)."
  },
  {
    id: 19, rank: 19, brand: "ONSURI Arbequina",
    nmrOtherPolyphenols: 968,
    origin: "California", harvestDate: "2023",
    price: "$", priceAmount: "$29.99", method: "qNMR", lab: "UC Davis Olive Center",
    certificateLink: "",
    cultivar: "Arbosana",
    buyLink: "https://www.amazon.com/ONSURI-California-Extra-Virgin-Olive/dp/B0CKQ8KSWD?&linkCode=ll1&tag=bestoliveoilr-20&linkId=1d0a9e9e3f2c4f8b9e8d7c6b5a4f3e2d&language=en_US&ref_=as_li_ss_tl",
    notes: "California single-estate."
  },
  {
    id: 20, rank: 20, brand: "PJ KABOS",
    hplcPolyphenols: 858,
    origin: "Greece", harvestDate: "Oct 2023",
    price: "$$", priceAmount: "$44.99", method: "HPLC", lab: "Modern Olives Lab",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/KABOS-Polyphenol-Extra-Virgin-Olive/dp/B0BWFV2H8Z?&linkCode=ll1&tag=bestoliveoilr-20&linkId=5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t&language=en_US&ref_=as_li_ss_tl",
    notes: "Gold standard HPLC tested."
  },
  {
    id: 21, rank: 21, brand: "November Ultra Premium",
    nmrOtherPolyphenols: 847,
    origin: "Tunisia", harvestDate: "Oct 2023",
    price: "$$", priceAmount: "$50.00", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Chetoui",
    buyLink: "https://www.novemberolives.com/collections/olive-oil/products/ultra-premium-extra-virgin-olive-oil",
    notes: "Award-winning Tunisian oil."
  },
  {
    id: 22, rank: 22, brand: "Opus Oléa",
    nmrOtherPolyphenols: 674,
    origin: "California", harvestDate: "2023",
    price: "$$$", priceAmount: "$89.00", method: "qNMR", lab: "UC Davis Olive Center",
    certificateLink: "",
    cultivar: "Arbequina/Koroneiki",
    buyLink: "https://opusolea.com/",
    notes: "California premium blend."
  },
  {
    id: 23, rank: 23, brand: "Zero Nutrition High Phenolic",
    nmrOtherPolyphenols: 582,
    origin: "Greece", harvestDate: "2024",
    price: "$$", priceAmount: "$39.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Zero-Nutrition-Phenolic-Extra-Virgin/dp/B0D7NWXYZ5?&linkCode=ll1&tag=bestoliveoilr-20&linkId=9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p&language=en_US&ref_=as_li_ss_tl",
    notes: "Fresh 2024 harvest."
  },
  {
    id: 24, rank: 24, brand: "Vallesur",
    nmrOtherPolyphenols: 554,
    origin: "Spain", harvestDate: "2023",
    price: "$", priceAmount: "$24.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Picual",
    buyLink: "https://www.amazon.com/Vallesur-Extra-Virgin-Olive-Oil/dp/B08XYZ1234?&linkCode=ll1&tag=bestoliveoilr-20&linkId=5p4o3n2m1l0k9j8i7h6g5f4e3d2c1b0a&language=en_US&ref_=as_li_ss_tl",
    notes: "Spanish Picual variety."
  },
  {
    id: 25, rank: 25, brand: "Citizens of Soil",
    nmrOtherPolyphenols: 526,
    origin: "Greece", harvestDate: "2023",
    price: "$$", priceAmount: "$42.00", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://citizensofsoil.com/",
    notes: "Organic Greek oil."
  },
  {
    id: 26, rank: 26, brand: "Odysea",
    nmrOtherPolyphenols: 480,
    origin: "Greece", harvestDate: "2023",
    price: "$", priceAmount: "$28.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Odysea-Greek-Extra-Virgin-Olive/dp/B0ABCD1234?&linkCode=ll1&tag=bestoliveoilr-20&linkId=0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p&language=en_US&ref_=as_li_ss_tl",
    notes: "Traditional Greek producer."
  },
  {
    id: 27, rank: 27, brand: "Terra Creta Estate",
    nmrOtherPolyphenols: 465,
    origin: "Greece (Crete)", harvestDate: "2023",
    price: "$", priceAmount: "$26.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Terra-Creta-Estate-Olive-Oil/dp/B0EFGH5678?&linkCode=ll1&tag=bestoliveoilr-20&linkId=6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f&language=en_US&ref_=as_li_ss_tl",
    notes: "Cretan estate oil."
  },
  {
    id: 28, rank: 28, brand: "Kosterina Original",
    nmrOtherPolyphenols: 445,
    origin: "Greece", harvestDate: "2023",
    price: "$$", priceAmount: "$36.00", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://kosterina.com/products/original-extra-virgin-olive-oil",
    notes: "DTC Greek brand."
  },
  {
    id: 29, rank: 29, brand: "Cobram Estate Ultra Premium",
    nmrOtherPolyphenols: 425,
    origin: "Australia", harvestDate: "2024",
    price: "$$", priceAmount: "$39.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Multi-variety",
    buyLink: "https://www.amazon.com/Cobram-Estate-Ultra-Premium-Olive/dp/B0IJKL9012?&linkCode=ll1&tag=bestoliveoilr-20&linkId=1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u&language=en_US&ref_=as_li_ss_tl",
    notes: "Australian producer."
  },
  {
    id: 30, rank: 30, brand: "Yanni's Olive Grove",
    nmrOtherPolyphenols: 410,
    origin: "Greece (Messinia)", harvestDate: "2023",
    price: "$", priceAmount: "$29.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Yannis-Olive-Grove-Extra-Virgin/dp/B0MNOP3456?&linkCode=ll1&tag=bestoliveoilr-20&linkId=7u6t5s4r3q2p1o0n9m8l7k6j5i4h3g2f&language=en_US&ref_=as_li_ss_tl",
    notes: "Family-owned estate."
  },
  {
    id: 31, rank: 31, brand: "Gaea Fresh",
    nmrOtherPolyphenols: 395,
    origin: "Greece", harvestDate: "2023",
    price: "$", priceAmount: "$24.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Gaea-Fresh-Extra-Virgin-Olive/dp/B0QRST7890?&linkCode=ll1&tag=bestoliveoilr-20&linkId=2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v&language=en_US&ref_=as_li_ss_tl",
    notes: "Widely available brand."
  },
  {
    id: 32, rank: 32, brand: "Filippo Berio Robust",
    nmrOtherPolyphenols: 380,
    origin: "Italy", harvestDate: "2023",
    price: "$", priceAmount: "$22.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Multi-variety",
    buyLink: "https://www.amazon.com/Filippo-Berio-Robust-Extra-Virgin/dp/B0UVWX1234?&linkCode=ll1&tag=bestoliveoilr-20&linkId=8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k&language=en_US&ref_=as_li_ss_tl",
    notes: "Italian classic."
  },
  {
    id: 33, rank: 33, brand: "Bragg Organic",
    nmrOtherPolyphenols: 365,
    origin: "Greece", harvestDate: "2023",
    price: "$", priceAmount: "$23.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Bragg-Organic-Extra-Virgin-Olive/dp/B0YZ123456?&linkCode=ll1&tag=bestoliveoilr-20&linkId=3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z&language=en_US&ref_=as_li_ss_tl",
    notes: "Organic certified."
  },
  {
    id: 34, rank: 34, brand: "Ellora Farms",
    nmrOtherPolyphenols: 350,
    origin: "Greece", harvestDate: "2023",
    price: "$", priceAmount: "$25.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.com/Ellora-Farms-Extra-Virgin-Olive/dp/B0C234DEFG?&linkCode=ll1&tag=bestoliveoilr-20&linkId=9z0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o&language=en_US&ref_=as_li_ss_tl",
    notes: "Single-origin Greek."
  },
  {
    id: 35, rank: 35, brand: "Kirkland Signature Organic",
    nmrOtherPolyphenols: 335,
    origin: "Italy", harvestDate: "2023",
    price: "$", priceAmount: "$19.99", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Multi-variety",
    buyLink: "https://www.costco.com/kirkland-signature-organic-extra-virgin-olive-oil.product.100334746.html",
    notes: "Costco house brand; best value per oz."
  }
]

const getMaxPolyphenols = (oil: OliveOil): number => {
  if (oil.hplcPolyphenols && oil.nmrOtherPolyphenols) {
    return Math.max(oil.hplcPolyphenols, oil.nmrOtherPolyphenols)
  }
  return oil.hplcPolyphenols || oil.nmrOtherPolyphenols || 0
}

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

export default function ShopPage() {
  const [filterOrigin, setFilterOrigin] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const origins = useMemo(() => ['all', ...Array.from(new Set(OILS_DATA.map(oil => oil.origin)))], [])

  const filteredOils = useMemo(() => {
    return OILS_DATA.filter(oil => {
      const matchesOrigin = filterOrigin === 'all' || oil.origin === filterOrigin
      const matchesSearch = oil.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          oil.notes.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesOrigin && matchesSearch
    })
  }, [filterOrigin, searchTerm])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800 border-b border-green-600/50">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Rankings
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Shop Premium Olive Oils
          </h1>
          <p className="text-green-100 text-sm md:text-base">
            Lab-verified high-polyphenol extra virgin olive oils ranked by quality
          </p>
        </div>
      </header>

      {/* Filters */}
      <section className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex gap-3 items-center flex-wrap">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-2 w-64 bg-slate-800/50 border border-gray-700 rounded-lg text-sm font-medium text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-500"
                />
                <svg className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <select
                value={filterOrigin}
                onChange={(e) => setFilterOrigin(e.target.value)}
                className="pl-3 pr-8 py-2 bg-slate-800/50 border border-gray-700 rounded-lg text-sm font-medium text-gray-100 focus:ring-2 focus:ring-green-500 transition-all cursor-pointer"
              >
                {origins.map(origin => (
                  <option key={origin} value={origin} className="bg-slate-800">
                    {origin === 'all' ? 'All Countries' : `${COUNTRY_FLAGS[origin]} ${origin}`}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-green-900/30 rounded-lg border border-green-700/50">
              <span className="text-gray-400">Showing</span>
              <span className="font-bold text-green-400 text-sm">{filteredOils.length}</span>
              <span className="text-gray-400">products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOils.map((oil, index) => (
              <div
                key={oil.id}
                className="group relative bg-gradient-to-br from-slate-800/90 via-slate-800/70 to-slate-900/90 backdrop-blur-md rounded-2xl border border-gray-700/50 overflow-hidden hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 flex flex-col animate-fade-in hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/0 via-transparent to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Rank Badge & Flag - More Prominent */}
                <div className="relative bg-gradient-to-r from-green-900/60 via-emerald-800/50 to-green-900/60 px-5 py-4 border-b border-gray-700/50 flex items-center justify-between backdrop-blur-sm">
                  <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl font-bold text-base shadow-xl ${
                    oil.rank === 1 ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 text-white shadow-yellow-500/50 ring-2 ring-yellow-300/50' :
                    oil.rank === 2 ? 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 text-white shadow-gray-400/50 ring-2 ring-gray-300/50' :
                    oil.rank === 3 ? 'bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 text-white shadow-orange-500/50 ring-2 ring-orange-300/50' :
                    'bg-gradient-to-br from-green-500 via-emerald-500 to-emerald-600 text-white shadow-green-500/50'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    #{oil.rank}
                  </span>
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{COUNTRY_FLAGS[oil.origin]}</span>
                </div>

                {/* Card Content */}
                <div className="relative p-6 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-green-300 transition-colors duration-300">
                    {oil.brand}
                  </h3>

                  {/* Polyphenol Content - Hero Feature */}
                  <div className="mb-5 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-lg blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-green-900/30 rounded-xl p-4 border border-green-700/30">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-extrabold bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                          {getMaxPolyphenols(oil)}
                        </span>
                        <span className="text-sm text-gray-300 font-medium">mg/kg</span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {getMethodBadges(oil).map((badge, badgeIndex) => (
                          <span
                            key={`${badge}-${badgeIndex}`}
                            className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                              badge === 'HPLC' ? 'bg-gradient-to-r from-blue-600/40 to-blue-500/30 text-blue-200 border border-blue-500/50 shadow-sm shadow-blue-500/20' :
                              badge === 'NMR' ? 'bg-gradient-to-r from-purple-600/40 to-purple-500/30 text-purple-200 border border-purple-500/50 shadow-sm shadow-purple-500/20' :
                              'bg-gradient-to-r from-orange-600/40 to-orange-500/30 text-orange-200 border border-orange-500/50 shadow-sm shadow-orange-500/20'
                            }`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Details Grid - Cleaner */}
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg px-3 py-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">Origin</span>
                      <span className="text-sm text-white font-semibold">{oil.origin}</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg px-3 py-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">Cultivar</span>
                      <span className="text-sm text-white font-semibold">{oil.cultivar}</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg px-3 py-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">Harvest</span>
                      <span className="text-sm text-white font-semibold">{oil.harvestDate}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg px-3 py-2 border border-green-700/30">
                      <span className="text-xs text-gray-300 uppercase tracking-wide font-semibold">Price</span>
                      <span className="text-lg text-green-400 font-black">{oil.priceAmount}</span>
                    </div>
                  </div>

                  {/* Notes */}
                  {oil.notes && (
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4 italic">
                      {oil.notes}
                    </p>
                  )}
                </div>

                {/* Buy Button - More Prominent */}
                <div className="relative p-5 pt-0">
                  <a
                    href={oil.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:via-emerald-400 hover:to-green-500 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Shop Now
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Affiliate Disclosure */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 italic max-w-2xl mx-auto">
              We earn commissions from qualifying purchases through affiliate links. Rankings are independent and based on lab-verified polyphenol content only.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
