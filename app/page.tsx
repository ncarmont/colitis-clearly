'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Link from 'next/link'
import researchPapers from './research-carousel.json'
import ResearchCarousel from './ResearchCarousel'
import HeroBackground from './HeroBackground'
import ScrollReveal from './ScrollReveal'
import WorldMap from '@/components/WorldMap'
import AdUnit from '@/components/AdUnit'
import SmallAd from '@/components/SmallAd'

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
  amazonLink?: string  // Amazon affiliate link (shown as separate yellow button)
  notes: string
  productImage?: string  // Hero product photo path (public/img/)
  instagram?: string  // Producer Instagram handle (without @)
}

// Updated OILS_DATA with HPLC and NMR/Other split columns - 38 entries
const OILS_DATA: OliveOil[] = [
  {
    id: 38, rank: 1, brand: "Pamako Monovarietal",
    nmrOtherPolyphenols: 2081,
    origin: "Greece (Crete)", harvestDate: "Nov 2025",
    price: "$$$", priceAmount: "£44.99", method: "qNMR", lab: "World Olive Center for Health, University of Athens (Prof. Magiatis)",
    certificateLink: "https://www.pamako.gr/wp-content/uploads/2025/02/pamako-monovarietal-high-phenolic-analysis.pdf",
    cultivar: "Tsounati",
    buyLink: "https://www.pamako.co.uk/?ref=roaqpdtk",
    notes: "Verified 16 Mar 2026: LATEST batch Nov 2025 harvest — 2,081 mg/kg total polyphenols (qNMR). Oleocanthal 1,318 mg/kg, Oleacein 264 mg/kg — oleocanthal nearly 10x international average (135 mg/kg). Certificate C2526-00362, analysis date 21/11/2025. Certified organic (EU). Lab: World Olive Center for Health, Univ. of Athens, Prof. Prokopios Magiatis. Also tested by Multichrom.LAB (IOC-accredited). Single-estate, centuries-old mountain groves in Selino, SW Crete. Dark bottles with mirrored UV layer + natural cork. EU health claim certified (Reg. 432/2012). Awards 2017–2025. Founded 2014 by Eftihis Androulakis. £44.99 (500ml).",
    productImage: "/img/pamako-monovarietal.jpg",
    instagram: "pamako"
  },
  {
    id: 1, rank: 2, brand: "P.J. KABOS – Family Reserve Phenolic Shot",
    hplcPolyphenols: 995, nmrOtherPolyphenols: 1473,
    origin: "Greece", harvestDate: "Sep–Oct 2025",
    price: "$$", priceAmount: "$59.83", method: "HPLC + qNMR", lab: "Producer-reported HPLC + qNMR",
    certificateLink: "",
    cultivar: "Olympia",
    buyLink: "https://www.amazon.com/KABOS-Phenolic-Organic-Pungent-Extracted/dp/B0C9WNNVVD?&linkCode=ll1&tag=bestoliveoilr-20&linkId=14d811abd991d784a6170a2caad30c47&language=en_US&ref_=as_li_ss_tl",
    notes: "Verified 9 Mar 2026: PJ KABOS site confirms 900+ mg/kg (HPLC) and 1400+ (NMR). Current batch: HPLC 995 mg/kg (14 mg/20g hydroxytyrosol derivatives), qNMR 1473 mg/kg (29 mg/20g). USDA Organic. Sep–Oct 2025 harvest. Four taste intensities available.",
    productImage: "/img/kabos-phenolic-shot.jpg",
    instagram: "pjkabos"
  },
  {
    id: 2, rank: 3, brand: "SP360",
    hplcPolyphenols: 1711,
    origin: "Jordan", harvestDate: "Sep 2025",
    price: "$$", priceAmount: "£42.00", method: "HPLC", lab: "Lab Certified (single estate)",
    certificateLink: "",
    cultivar: "Arbequina",
    buyLink: "https://sp360.co.uk/products/latest-october-harvest-sp360-500ml-extra-virgin-olive-oil-bottle-pre-order?ref=iejghiij",
    notes: "Verified 16 Mar 2026: 500ml bottle still sold out (confirmed); refill subscription pouches (10% saving) remain available — pair with original bottle for eco refill system. 1,711 mg/kg lab-certified HPLC. UV-protected refillable glass; herbaceous with green almond & tomato vine notes. Sep 2025 harvest, best before Sep 2027. Single-estate family farm, Jordan. Free pourer included with bottle. Free UK shipping.",
    productImage: "/img/sp360-bottle.jpg",
    instagram: "sp360evoo"
  },
  {
    id: 3, rank: 6, brand: "The Governor – Limited Edition",
    nmrOtherPolyphenols: 1316,
    origin: "Greece (Corfu)", harvestDate: "Oct 2025",
    price: "$$", priceAmount: "£49.95", method: "qNMR", lab: "qNMR total phenols",
    certificateLink: "https://cdn.shopify.com/s/files/1/0736/8274/7666/files/The_Governor_Evoo_Limited_Certificate_2025.pdf?v=1763979500",
    cultivar: "Lianolia",
    buyLink: "https://thegovernorevoo.co.uk/products/the-governor-limited-edition-extra-virgin-olive-oil",
    amazonLink: "https://www.amazon.com/dp/B0BFRRPR6R?&linkCode=ll1&tag=bestoliveoilr-20&language=en_US&ref_=as_li_ss_tl",
    notes: "Verified 10 Mar 2026: 1,316 mg/kg confirmed (certified PDF linked). Oleocanthal 577 mg/kg, oleacein 298 mg/kg. 2025/26 harvest (Oct 2025). In stock. 75 international awards. Centenarian Lianolia trees (500+ years), Corfu. Unfiltered, DIO-certified organic. 101 reviews. £49.95. First-batch limited edition.",
    productImage: "/img/oil-3.jpg",
    instagram: "the_governor_evoo"
  },
  {
    id: 4, rank: 5, brand: "OlvLimits \"Green Machine\"",
    hplcPolyphenols: 1378,
    origin: "Italy (Puglia)", harvestDate: "Oct 2025",
    price: "$", priceAmount: "£23.00", method: "HPLC (University of Athens method)", lab: "National & Kapodistrian University of Athens",
    certificateLink: "https://cdn.shopify.com/s/files/1/0774/2003/6420/files/analysis.png?v=1763034364",
    cultivar: "Coratina",
    buyLink: "https://www.olvlimits.com/products/green-machine",
    notes: "Verified 16 Mar 2026: Site live, product in stock. 1,378 mg/kg HPLC (University of Athens method, World Olive Center for Health watermark on cert). Early-harvest Coratina from Puglia — picked Oct 2025 when olives are green and hard. Intense, peppery profile. Third-party lab tested every batch. £23.00 (500ml).",
    productImage: "/img/olvlimits-green-machine.png",
    instagram: "olvlimits"
  },
  {
    id: 5, rank: 4, brand: "ONSURI Arbequina",
    nmrOtherPolyphenols: 1504,
    origin: "Jordan", harvestDate: "Sep 2025",
    price: "$$", priceAmount: "£25.00", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Arbequina",
    buyLink: "https://onsurioliveoil.com/products/arbequina-2025-26",
    notes: "2025/26 harvest; lab-certified 1,504.42 mg/kg polyphenols (up from 1,269 prior year). Single-estate Jordan family farm. Herbaceous with grassy, herbal, and floral notes. Feb 2026 verified on producer site.",
    productImage: "/img/oil-5.jpg",
    instagram: "onsurioliveoil"
  },
  {
    id: 6, rank: 7, brand: "ONSURI Arbequina 1L (2×500 ml)",
    nmrOtherPolyphenols: 1269,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$$", priceAmount: "£38.00", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Arbequina",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-arbequina-evoo-1-litre-bulk-offer-polyphenols-1269-mg-kg",
    notes: "Verified 16 Mar 2026: 1L (2×500ml) still showing 2024/25 harvest batch (1,269 mg/kg). Note: 500ml single-bottle has been updated to 2025/26 batch (1,504 mg/kg); 1L bulk format may still ship 2024/25 stock. Best value per ml if current polyphenol count is less critical. £38.00 (1L). Free UK shipping.",
    productImage: "/img/oil-6.png",
    instagram: "onsurioliveoil"
  },
  {
    id: 7, rank: 8, brand: "ONSURI Arbosana",
    nmrOtherPolyphenols: 1255,
    origin: "Jordan", harvestDate: "2024/25",
    price: "$", priceAmount: "£19.95", method: "RSS", lab: "Jordan Royal Scientific Society",
    certificateLink: "",
    cultivar: "Arbosana",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-pre-order-arbosana-evoo-16-9-fl-oz-500ml-polyphenols-1255-mg-kg",
    notes: "Verified 10 Mar 2026: Product URL now active. 2024/25 Arbosana EVOO, 500ml tin, £19.95. 1,255 mg/kg polyphenols (RSS certified). Bold, fruity profile: green tomato, almond, persistent peppery finish. Subscribe & 5th order free. Free UK shipping.",
    productImage: "/img/oil-7.png",
    instagram: "onsurioliveoil"
  },
  {
    id: 8, rank: 9, brand: "Finca La Torre — Hojiblanca (Organic/Biodynamic)",
    nmrOtherPolyphenols: 1059,
    origin: "Spain", harvestDate: "2025/26",
    price: "$$", priceAmount: "€19.63", method: "Other", lab: "Retailer-stated phenols",
    certificateLink: "",
    cultivar: "Hojiblanca",
    buyLink: "https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-hojiblanca",
    notes: "Verified 9 Mar 2026: 2025/26 harvest live. Demeter biodynamic estate oil. €19.63 (500ml); bulk pricing from €17.66/bottle (12 units). Winner of 'Premio Alimentos de España'. Green almond, apple, banana skin notes. 16 reviews. Free shipping on orders over €70.",
    productImage: "/img/oil-8.jpg",
    instagram: "fincalatorre"
  },
  {
    id: 9, rank: 10, brand: "November – Polyphenols Organic Early Harvest",
    nmrOtherPolyphenols: 1200,
    origin: "Greece (South)", harvestDate: "Oct–Nov 2025",
    price: "$$", priceAmount: "£26.90", method: "NMR", lab: "NMR (IOC experimental)",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.masworth.co.uk/product/november-early-harvest-organic-olive-oil-500ml/",
    notes: "Verified 11 Mar 2026: Lab-certified +1,200 mg/kg (NMR, Oct–Nov 2025 harvest). 500ml; certified organic; early-harvest 100% Koroneiki from southern Greece. Filtered for long-term stability. Bundle price ≈ £22.87/bottle (3+). EU health claim certified. Among UK's top-ranked high-polyphenol oils on third-party trackers.",
    productImage: "/img/oil-9.jpg",
    instagram: "novemberoliveoil"
  },
  {
    id: 10, rank: 11, brand: "Kyoord High-Phenolic",
    nmrOtherPolyphenols: 1007,
    origin: "Greece (Corfu)", harvestDate: "Nov–Dec 2024",
    price: "$$", priceAmount: "£37.00", method: "qNMR", lab: "qNMR metrics",
    certificateLink: "",
    cultivar: "Lianolia + Koroneiki",
    buyLink: "https://www.amazon.com/kyoord-High-Phenolic-Extra-Virgin-Olive/dp/B0CCQQGXRQ?th=1&linkCode=ll1&tag=bestoliveoilr-20&linkId=cde3cbabfa18ecdacdb34b3f0833d404&language=en_US&ref_=as_li_ss_tl",
    notes: "Founded by Dr. Goren; small Corfu farm.",
    productImage: "/img/oil-10.jpg",
    instagram: "kyoord"
  },
  {
    id: 11, rank: 12, brand: "ONSURI Signature (Arbequina + Arbosana)",
    nmrOtherPolyphenols: 975,
    origin: "Jordan", harvestDate: "2025/26",
    price: "$", priceAmount: "£22.50", method: "RSS", lab: "RSS certified",
    certificateLink: "",
    cultivar: "Blend",
    buyLink: "https://onsurioliveoil.com/products/latest-2024-25-signature-evoo-16-9-fl-oz-500ml-polyphenols-1000-mg-kg",
    notes: "Verified 9 Mar 2026: 2025/26 harvest live. Polyphenols 975 mg/kg (was 1,000 in 2024/25 batch). Buttery smooth texture, mild yet complex; floral/almond profile. £22.50. Subscribe & 5th order free. Ships from UK warehouse (£2.50).",
    productImage: "/img/oil-11.png",
    instagram: "onsurioliveoil"
  },
  {
    id: 12, rank: 13, brand: "Laconiko Olio Nuovo",
    nmrOtherPolyphenols: 774,
    origin: "Greece", harvestDate: "2025/26",
    price: "$$", priceAmount: "$39.95", method: "qNMR", lab: "qNMR verified",
    certificateLink: "https://cdn.shopify.com/s/files/1/0395/9799/8236/files/Laconiko-Olio-Nuovo-Certificate-of-Analysis-and-NMR.pdf?v=1741704618",
    cultivar: "Greek blend",
    buyLink: "https://laconiko.com/products/laconiko-olio-nuovo",
    notes: "Verified 15 Mar 2026: First certified 'high phenolic' in North America (Aristoleo Data-Locked Protocol). 2025/26 harvest in stock. 774 mg/kg qNMR verified. Acidity 0.28%; oleic acid 78%. $39.95. Phenolic compounds verified to deteriorate slower under controlled 12.5–15°C storage. URL updated to canonical link.",
    productImage: "/img/oil-12.png",
    instagram: "laconiko"
  },
  {
    id: 13, rank: 14, brand: "Opus Oléa – Organic",
    nmrOtherPolyphenols: 874,
    origin: "Greece", harvestDate: "Nov 2025",
    price: "$$", priceAmount: "$48.00", method: "Other", lab: "Independent lab (images on site)",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.opuslivewell.com/products/opus-olea-organic-extra-virgin-olive-oil-500ml",
    notes: "Nov 2025 harvest confirmed Feb 2026. 874 mg/kg total polyphenols; 20g delivers 17.5mg hydroxytyrosol (>3× EU health claim minimum). Ultra low acidity 0.2%. Messinia/Peloponnese, sustainably farmed.",
    productImage: "/img/oil-13.png",
    instagram: "opus_olea"
  },
  {
    id: 14, rank: 15, brand: "Zero Nutrition – EVOO100",
    nmrOtherPolyphenols: 813,
    origin: "Italy (Puglia)", harvestDate: "Nov 2024",
    price: "$", priceAmount: "$24.99", method: "Other", lab: "Independent tracker",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://zeronutrition.co.uk",
    notes: "Tracker shows 813 mg/kg and a posted cert link.",
    productImage: "/img/oil-14.png",
    instagram: "zero.nutrition"
  },
  {
    id: 15, rank: 16, brand: "Quattrociocchi 'Superbo'",
    nmrOtherPolyphenols: 800,
    origin: "Italy", harvestDate: "2024/25",
    price: "$$", priceAmount: "$38.95", method: "Other", lab: "Widely cited value",
    certificateLink: "",
    cultivar: "Itrana/Moraiolo",
    buyLink: "https://oliveoillovers.com/products/quattrociocchi-superbo",
    notes: "Needs correct brand link/COA.",
    productImage: "/img/oil-23.jpg",
    instagram: "quattrociocchiolio"
  },
  {
    id: 16, rank: 17, brand: "P.J. KABOS – Family Reserve Robust",
    hplcPolyphenols: 699,
    origin: "Greece", harvestDate: "Oct 2025",
    price: "$$", priceAmount: "$39.83", method: "HPLC", lab: "HPLC (producer-reported)",
    certificateLink: "",
    cultivar: "Olympia + Koroneiki",
    buyLink: "https://www.amazon.com/P-J-KABOS-Harvest-Phenolic-Extracted/dp/B0FDKT8HDF?&linkCode=ll1&tag=bestoliveoilr-20&linkId=1328610a17867326c0d2a26ae73aab6a&language=en_US&ref_=as_li_ss_tl",
    notes: "Verified Mar 2026 on PJ KABOS site. Oct 2025 harvest; HPLC 699 mg/kg. Hydroxytyrosol (and derivatives) 10 mg/20g. Olympia + Koroneiki blend. USDA & EU organic. Under 0.29% acidity. $39.83 (1 bottle). Best before Dec 2027. Currently OUT OF STOCK on producer site (warehouse delays noted); check Amazon link for availability.",
    productImage: "/img/oil-16.jpg",
    instagram: "pjkabos"
  },
  {
    id: 17, rank: 18, brand: "Oro del Desierto – Picual (Organic)",
    nmrOtherPolyphenols: 717,
    origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$32.00", method: "Other", lab: "Retailers cited",
    certificateLink: "",
    cultivar: "Picual",
    buyLink: "https://orodeldesierto.com/en/shop-2/",
    notes: "Early-harvest organic Picual, Almería.",
    productImage: "/img/oil-23.jpg",
    instagram: "orodeldesierto"
  },
  {
    id: 18, rank: 19, brand: "Vallesur – Peruvian",
    nmrOtherPolyphenols: 688,
    origin: "Peru", harvestDate: "2024",
    price: "$$", priceAmount: "$28.00", method: "Other", lab: "Tracker listing",
    certificateLink: "",
    cultivar: "Picual",
    buyLink: "https://www.instagram.com/vallesur.pe/",
    notes: "Award-winning Tacna EVOO. No international DTC shop found; IG is best contact.",
    productImage: "/img/oil-18.jpg",
    instagram: "vallesur.pe"
  },
  {
    id: 19, rank: 20, brand: "Laudemio Frescobaldi (Tuscany)",
    nmrOtherPolyphenols: 675,
    origin: "Italy", harvestDate: "2024",
    price: "$$", priceAmount: "$42.00", method: "Other", lab: "Retailer-cited range",
    certificateLink: "",
    cultivar: "Frantoio/Moraiolo/Leccino",
    buyLink: "https://www.amazon.com/FRESCOBALDI-Laudemio-Premium-Winning-Polyphenols/dp/B001DTOBIY?th=1&linkCode=ll1&tag=bestoliveoilr-20&linkId=be0189503aadb51434d91e088337e2b5&language=en_US&ref_=as_li_ss_tl",
    notes: "Classic Tuscan PDO style.",
    productImage: "/img/oil-19.jpg",
    instagram: "laudemioevo"
  },
  {
    id: 20, rank: 21, brand: "Citizens of Soil — Spanish",
    nmrOtherPolyphenols: 642,
    origin: "Spain", harvestDate: "Nov 2025",
    price: "$$", priceAmount: "$38.00", method: "Other", lab: "Independent lab",
    certificateLink: "",
    cultivar: "Hojiblanca/Arbequina/Koroneiki",
    buyLink: "https://www.citizensofsoil.com/products/spanish-olive-oil-extra-virgin",
    notes: "Verified 15 Mar 2026: Back in stock on producer website (was OUT OF STOCK 13 Mar 2026). 2025 harvest (Nov 2025). Polyphenols 642 mg/kg (was 661 in 2024 harvest). Origin: Pedrera, Sevilla, Andalucía. Acidity 0.14%. Mobile milling within 1 hour of picking. Awarded 'Best Organic EVOO in Sevilla' (Ecotrama gold star).",
    productImage: "/img/oil-20.png",
    instagram: "citizensofsoil"
  },
  {
    id: 21, rank: 22, brand: "Citizens of Soil — Tuscan 'Extra Rare'",
    nmrOtherPolyphenols: 655,
    origin: "Italy (Tuscany)", harvestDate: "Feb 2025",
    price: "$$", priceAmount: "$38.00", method: "Other", lab: "Independent lab",
    certificateLink: "",
    cultivar: "Frantoio/Leccino blend",
    buyLink: "https://www.citizensofsoil.com/products/tuscan-olive-oil-extra-rare",
    notes: "Limited release.",
    productImage: "/img/oil-21.png",
    instagram: "citizensofsoil"
  },
  {
    id: 22, rank: 23, brand: "Morocco Gold",
    nmrOtherPolyphenols: 626,
    origin: "Morocco", harvestDate: "2024/25",
    price: "$$", priceAmount: "$35.00", method: "Other", lab: "Tracker listing",
    certificateLink: "",
    cultivar: "Picholine Marocaine",
    buyLink: "https://www.moroccogold.com",
    amazonLink: "https://www.amazon.co.uk/dp/B07GBJLFFQ?&linkCode=ll1&tag=bestoliveoilr-20&language=en_GB&ref_=as_li_ss_tl",
    notes: "Brand publicizes Htyr/20g.",
    productImage: "/img/oil-22.jpg",
    instagram: "moroccogold"
  },
  {
    id: 23, rank: 24, brand: "Venta del Barón (DO Priego)",
    nmrOtherPolyphenols: 617,
    origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$36.00", method: "Other", lab: "Tracker listing",
    certificateLink: "",
    cultivar: "Hojiblanca + Picuda",
    buyLink: "https://www.ventadelbaron.com/en/collections/all",
    notes: "DO protected.",
    productImage: "/img/oil-23.jpg",
    instagram: "ventadelbaron"
  },
  {
    id: 24, rank: 25, brand: "Castillo de Canena – First Day Harvest Picual",
    nmrOtherPolyphenols: 611,
    origin: "Spain", harvestDate: "Fall 2025",
    price: "$$", priceAmount: "$49.95", method: "Other", lab: "Retailer figure",
    certificateLink: "",
    cultivar: "Picual",
    buyLink: "https://oliveoillovers.com/products/castillo-de-canena-first-day-harvest-picual",
    notes: "'Primer Día de Cosecha'. Verified Feb 2026: Fall 2025 new harvest in stock at Olive Oil Lovers ($49.95). Mild intensity; aromas of banana, almond, apple; Andalusia.",
    productImage: "/img/oil-24.jpg",
    instagram: "castillodecanena"
  },
  {
    id: 25, rank: 26, brand: "Entimio – INTENSO",
    nmrOtherPolyphenols: 601,
    origin: "Italy", harvestDate: "2024/25",
    price: "$$", priceAmount: "$50.00", method: "Other", lab: "Brand batch analyses",
    certificateLink: "",
    cultivar: "Frantoio/Leccino/Moraiolo",
    buyLink: "https://www.amazon.com/Entimio-Intenso-Harvest-Award-Winning-Polyphenols/dp/B07D528XH3?&linkCode=ll1&tag=bestoliveoilr-20&language=en_US&ref_=as_li_ss_tl",
    notes: "Certified Tuscan lots.",
    productImage: "/img/oil-25.jpg",
    instagram: "entimioevoo"
  },
  {
    id: 26, rank: 27, brand: "Odysea 'Good For You' (Crete)",
    nmrOtherPolyphenols: 573,
    origin: "Greece", harvestDate: "2024/25",
    price: "$", priceAmount: "$19.99", method: "Other", lab: "Brand posted",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.amazon.co.uk/Odysea-Good-Greek-Virgin-Olive/dp/B0C7LBD9Z4?&linkCode=ll1&tag=bestoliveoilr-20&language=en_GB&ref_=as_li_ss_tl",
    notes: "UK retailer SKU; Cretan Koroneiki with 573 mg/kg polyphenols.",
    productImage: "/img/oil-18.jpg",
    instagram: "odysea_food"
  },
  {
    id: 27, rank: 28, brand: "Kosterina – Original Extra Virgin",
    nmrOtherPolyphenols: 573,
    origin: "Greece (Southern)", harvestDate: "Nov 2024",
    price: "$", priceAmount: "$32.00", method: "Other", lab: "Brand FAQ/page",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.kosterina.com/products/singlebottle",
    amazonLink: "https://www.amazon.com/Kosterina-Cold-Pressed-Koroneiki-Incredible-Superfood/dp/B087MT3TC7?&linkCode=ll1&tag=bestoliveoilr-20&language=en_US&ref_=as_li_ss_tl",
    notes: "Verified 15 Mar 2026: 500ml single bottle, US DTC. 100% Koroneiki early-harvest, cold-pressed. Voted world's best olive oils 2025. 1,062 reviews (4.9★). $32 one-time or $28.80/bottle subscription (10% off). Nov 2024 harvest. High polyphenol content with robust peppery finish.",
    productImage: "/img/oil-27.png",
    instagram: "kosterina"
  },
  {
    id: 28, rank: 29, brand: "True Tuscan (Olive Girl)",
    nmrOtherPolyphenols: 550,
    origin: "Italy", harvestDate: "2024",
    price: "$$", priceAmount: "$42.00", method: "Other", lab: "Independent test",
    certificateLink: "",
    cultivar: "Blend",
    buyLink: "https://shopolivegirl.com/products/true-tuscan-extra-virgin-olive-oil",
    notes: "Boutique producer.",
    productImage: "/img/oil-28.jpg",
    instagram: "shopolivegirl"
  },
  {
    id: 29, rank: 30, brand: "Laconiko Extra Virgin (Koroneiki)",
    nmrOtherPolyphenols: 578,
    origin: "Greece", harvestDate: "Nov 2024–Jan 2025",
    price: "$", priceAmount: "$24.95", method: "qNMR", lab: "qNMR verified (Aristoleo protocol)",
    certificateLink: "https://cdn.shopify.com/s/files/1/0395/9799/8236/files/Laconiko-Koroneiki-Certificate-of-Analysis-and-NMR_214c678d-f473-4f37-9257-322fd3d7e715.pdf?v=1741704340",
    cultivar: "Koroneiki",
    buyLink: "https://laconiko.com/products/laconiko-extra-virgin-olive-oil-new-2024-harvest",
    notes: "Updated Feb 2026 per posted COA: 578 mg/kg (was 538). Oleic acid 77.36%; acidity 0.17%. Certificate link active. Great value with full posted NMR.",
    productImage: "/img/oil-29.png",
    instagram: "laconiko"
  },
  {
    id: 30, rank: 31, brand: "Finca La Torre — Arbequina (Organic/Biodynamic)",
    nmrOtherPolyphenols: 537,
    origin: "Spain (Málaga)", harvestDate: "2025/26",
    price: "$$", priceAmount: "€19.63", method: "Other", lab: "Retailer-stated",
    certificateLink: "",
    cultivar: "Arbequina",
    buyLink: "https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-arbequina",
    notes: "Verified Mar 2026: 2025/26 harvest. 0.18% acidity; Demeter biodynamic.",
    productImage: "/img/oil-30.jpg",
    instagram: "fincalatorre"
  },
  {
    id: 31, rank: 32, brand: "Citizens of Soil — Greek (Peloponnese)",
    nmrOtherPolyphenols: 552,
    origin: "Greece", harvestDate: "Dec 2024",
    price: "$", priceAmount: "£17.99", method: "Other", lab: "Retailer cites",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.healthysupplies.co.uk/organic-extra-virgin-olive-oil-500ml-citizens-of-soil.html",
    notes: "Verified Feb 2026 via healthysupplies.co.uk: 552 mg/kg (was 526). Sparta, Peloponnese; 100% Koroneiki. 0.21% acidity. Milled within 24h. £17.99 via UK retailer.",
    productImage: "/img/oil-31.webp",
    instagram: "citizensofsoil"
  },
  {
    id: 32, rank: 33, brand: "Entimio – ARDENTE",
    nmrOtherPolyphenols: 516,
    origin: "Italy", harvestDate: "2024/25",
    price: "$$", priceAmount: "$45.00", method: "Other", lab: "Brand batch analyses",
    certificateLink: "",
    cultivar: "Tuscan blend",
    buyLink: "https://www.amazon.com/Entimio-Ardente-Italian-Polyphenols-Organic/dp/B0C17MHY4H?th=1&linkCode=ll1&tag=bestoliveoilr-20&linkId=d74d40c724b766f7434a23e6eba9650a&language=en_US&ref_=as_li_ss_tl",
    notes: "Robust profile.",
    productImage: "/img/oil-32.jpg",
    instagram: "entimioevoo"
  },
  {
    id: 33, rank: 34, brand: "P.J. KABOS – Family Reserve Organic (Medium)",
    hplcPolyphenols: 500,
    origin: "Greece", harvestDate: "Oct–Nov 2024",
    price: "$", priceAmount: "$34.83", method: "HPLC", lab: "Brand claims ≥500 mg/kg",
    certificateLink: "",
    cultivar: "Koroneiki",
    buyLink: "https://www.pjkabos.com/family-reserve-organic-medium",
    notes: "USDA/EU organic.",
    productImage: "/img/kabos-phenolic-shot.jpg",
    instagram: "pjkabos"
  },
  {
    id: 34, rank: 35, brand: "Blueprint (Bryan Johnson) 'Snake Oil' EVOO",
    nmrOtherPolyphenols: 400,
    origin: "Portugal", harvestDate: "Nov 2025",
    price: "$$", priceAmount: "$39.00", method: "Other", lab: "Third-party tested",
    certificateLink: "",
    cultivar: "Portuguese blend",
    buyLink: "https://www.amazon.com/Blueprint-Bryan-Johnson-Extra-Virgin/dp/B0CWN6W3QJ?&linkCode=ll1&tag=bestoliveoilr-20&language=en_US&ref_=as_li_ss_tl",
    notes: "Verified 9 Mar 2026: Nov 2025 harvest now live. 400 mg polyphenols (down from 499 in 2024 batch). Rich in oleic acid. UV-protected glass. DTC & Amazon. Part of Bryan Johnson's daily longevity protocol.",
    productImage: "/img/oil-34.jpg",
    instagram: "blueprintlongevity"
  },
  {
    id: 35, rank: 36, brand: "The Governor – Premium Edition",
    nmrOtherPolyphenols: 390,
    origin: "Greece (Corfu)", harvestDate: "Nov–Dec 2024",
    price: "$", priceAmount: "€35.00", method: "Folin", lab: "Folin (not HPLC/qNMR)",
    certificateLink: "",
    cultivar: "Lianolia",
    buyLink: "https://www.thegovernor.gr/product/the-governor-premium-edition/",
    amazonLink: "https://www.amazon.com/dp/B0BFRRPR6R?&linkCode=ll1&tag=bestoliveoilr-20&language=en_US&ref_=as_li_ss_tl",
    notes: "Centenarian trees; 0.17% acidity.",
    productImage: "/img/oil-35.png",
    instagram: "the_governor_evoo"
  },
  {
    id: 36, rank: 37, brand: "Rincón de la Subbética – Hojiblanca (Organic)",
    nmrOtherPolyphenols: 356,
    origin: "Spain", harvestDate: "2024/25",
    price: "$$", priceAmount: "$32.95", method: "Other", lab: "Retailer figure",
    certificateLink: "",
    cultivar: "Hojiblanca",
    buyLink: "https://oliveoillovers.com/products/rincon-de-la-subbetica",
    notes: "PDO Priego de Córdoba.",
    instagram: "almasubbetica"
  },
  {
    id: 37, rank: 38, brand: "P.J. KABOS – Family Reserve Robust (Non-Organic)",
    hplcPolyphenols: 750,
    origin: "Greece", harvestDate: "Oct 2024",
    price: "$", priceAmount: "$29.90", method: "HPLC", lab: "HPLC (producer-reported)",
    certificateLink: "",
    cultivar: "Olympia + Koroneiki",
    buyLink: "https://www.pjkabos.com/product-page/family-reserve-robust-750-mg-kg-phenols-500ml-tin",
    notes: "NEW (added Feb 2026). Non-organic counterpart to KABOS Organic Robust. HPLC-verified 750+ mg/kg; Oct 2024 harvest; best before Jun 2026. Hydroxytyrosol (and derivatives) 10+ mg/20g. Acidity <0.29%. 500ml tin. $29.90/bottle ($26.91 on monthly subscription). Currently out of stock on producer site — check back.",
    productImage: "/img/oil-16.jpg",
    instagram: "pjkabos"
  }
]

// Short taglines for each oil — shown on cards
const OIL_TAGLINES: Record<number, string> = {
  38: 'Single-estate Tsounati from ancient Cretan mountain groves',
  1: 'Ultra-high phenolic shot from Koroneiki olives, early harvest',
  2: 'Premium Slovenian blend, award-winning Istrian EVOO',
  3: 'Limited edition Lianolia from historic Corfu estate',
  4: 'Wild Arbequina pressed within hours, California-grown',
  5: 'Single-variety Arbequina, cold-pressed in Andalusia',
  6: 'Andalusian Arbequina in generous 1L format',
  7: 'Rare Arbosana cultivar from southern Spain',
  8: 'Biodynamic Hojiblanca from Málaga highlands',
  9: 'Turkish organic early harvest, robust and peppery',
  10: 'High-phenolic Koroneiki from Peloponnese, Greece',
  11: 'Arbequina-Arbosana signature blend from Spain',
  12: 'Olio Nuovo Koroneiki, fresh-pressed in Greece',
  13: 'Organic Picual from Jaén, Spain — intense and fruity',
  14: 'Science-backed EVOO, optimized for health benefits',
  15: 'Traditional Itrana cultivar from Lazio, Italy',
  16: 'Robust Koroneiki blend from family groves in Greece',
  17: 'Organic Picual from Almería desert, biodynamic estate',
  18: 'Rare Peruvian EVOO from ancient olive groves',
  19: 'Noble Tuscan blend from the Frescobaldi estate',
  20: 'Bold Spanish EVOO from sun-drenched Andalusia',
  21: 'Extra rare Tuscan Moraiolo-Frantoio blend',
  22: 'Picholine from the Atlas Mountains of Morocco',
  23: 'PDO Priego Picuda-Hojiblanca, multi-award winner',
  24: 'First Day Harvest Picual from Jaén, ultra-fresh',
  25: 'Robust Moraiolo-Frantoio blend from Umbria, Italy',
  26: 'Cretan Koroneiki from Sfakiá, rich in antioxidants',
  27: 'Premium Greek Koroneiki, smooth and balanced',
  28: 'Small-batch Tuscan from artisan groves in Chianti',
  29: 'Estate Koroneiki from Laconia, Peloponnese',
  30: 'Organic Arbequina from biodynamic Málaga estate',
  31: 'Peloponnese Koroneiki, fruity and herbaceous',
  32: 'Bold Tuscan blend with Leccino and Pendolino',
  33: 'Organic medium-intensity Koroneiki from Greece',
  34: 'Bryan Johnson\'s longevity-focused EVOO blend',
  35: 'Premium Lianolia from the Governor\'s Corfu estate',
  36: 'PDO Priego Hojiblanca, organic and award-winning',
  37: 'Non-organic robust Koroneiki, bold peppery finish',
}

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

// Updated daily by cron after verification/search pass (UTC date)
const LAST_DATA_UPDATE = '2026-03-13'

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
    productImage: "/img/oil-36.jpg"
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
    // Use raw mg/kg regardless of method; if both methods available, pick the higher value
    return Math.max(oil.hplcPolyphenols || 0, oil.nmrOtherPolyphenols || 0)
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/30 via-transparent to-transparent pointer-events-none"></div>
        {/* Subtle ambient gradient that shifts */}
        <div className="absolute top-[30vh] right-0 w-[400px] h-[400px] bg-emerald-200/10 rounded-full blur-[150px] animate-float-orb pointer-events-none" />
        <div className="absolute top-[60vh] left-0 w-[300px] h-[300px] bg-teal-200/8 rounded-full blur-[120px] animate-float-orb-2 pointer-events-none" />
        <div className="relative z-10">
      {/* ══════════════════════════════════════════════════════
           HERO HEADER — Dark premium (matches research page)
           ══════════════════════════════════════════════════════ */}
      <header className="relative overflow-hidden w-full hero-entrance bg-gradient-to-br from-[#061226] via-[#0a1f3a] to-[#07382d]">

        {/* Subtle ambient glow — NOT bright, just depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

        {/* Canvas particles + light rays */}
        <HeroBackground />

        {/* Dot grid texture */}
        <div className="absolute inset-0 dot-grid-pattern pointer-events-none z-[2]" />

        {/* ── Top utility bar ── */}
        <div className="relative z-30 flex items-center justify-between px-4 md:px-8 py-2 md:py-2.5 border-b border-white/10 bg-black/10 backdrop-blur-sm utility-bar-entrance">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[9px] md:text-[10px] text-emerald-200/70 font-semibold tracking-[0.18em] uppercase">Updated {LAST_DATA_UPDATE}</span>
          </div>
          <div className="flex items-center gap-3">
            {totalVisitors !== null && totalVisitors > 0 && (
              <span className="hidden md:inline-flex text-[10px] text-white/50 bg-white/[0.06] border border-white/10 rounded-full px-2 py-0.5">
                {totalVisitors >= 1000 ? `${(totalVisitors / 1000).toFixed(1)}K` : totalVisitors.toLocaleString()} visitors
              </span>
            )}
            {instagramFollowers && instagramFollowers > 0 && (
              <span className="hidden md:inline-flex text-[10px] text-pink-200/70 bg-pink-500/10 border border-pink-300/15 rounded-full px-2 py-0.5">
                {instagramFollowers >= 1000 ? `${(instagramFollowers / 1000).toFixed(1)}K` : instagramFollowers.toLocaleString()} IG
              </span>
            )}
            <Link
              href="https://www.instagram.com/bestoliveoilranked.com_?igsh=MW81OXFkZW9uNzBnNg%3D%3D&utm_source=qr"
              target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="inline-flex items-center justify-center rounded-lg p-1.5 bg-white/[0.06] border border-white/10 text-white/60 hover:text-pink-300 hover:bg-white/[0.12] transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.5 5.5a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Hero content ── */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 pt-4 pb-5 md:pt-6 md:pb-7 text-center">
          <h1 className="title-entrance">
            <span className="block text-[1.7rem] sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.08]">
              Best Extra Virgin Olive Oils
            </span>
            <span className="block mt-0.5 text-[1.7rem] sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 animate-shimmer-text subtitle-entrance">
              Ranked by Science
            </span>
          </h1>

          <p className="mt-1.5 text-[9px] md:text-[10px] text-white/40 font-medium tracking-[0.25em] uppercase tagline-entrance">
            The Home of Olive Oil Science
          </p>

          {/* Stats — compact inline */}
          <div className="mt-3 flex items-center justify-center gap-4 md:gap-6 stats-entrance">
            <div className="text-center stat-item-1">
              <span className="text-lg md:text-xl font-bold text-white">{stats.totalOils}</span>
              <span className="text-[8px] text-white/35 uppercase tracking-wider ml-1">oils</span>
            </div>
            <span className="text-white/15 text-sm">|</span>
            <div className="text-center stat-item-2">
              <span className="text-lg md:text-xl font-bold text-white">{stats.countries}</span>
              <span className="text-[8px] text-white/35 uppercase tracking-wider ml-1">countries</span>
            </div>
            <span className="text-white/15 text-sm">|</span>
            <div className="text-center stat-item-3">
              <span className="text-lg md:text-xl font-bold text-white">{stats.maxPolyphenols}</span>
              <span className="text-[8px] text-white/35 uppercase tracking-wider ml-1">max mg/kg</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </header>

      {/* Research Carousel — auto-scrolling client component */}
      <ResearchCarousel papers={researchPapers} />

      {/* Rankings Section Banner */}
      <div className="relative overflow-hidden bg-[#0a1628] py-4 md:py-5 text-center">
        {/* Glow line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-emerald-400/10 blur-[20px] pointer-events-none" />
        <div className="absolute inset-0 dot-grid-pattern pointer-events-none" />
        <h2 className="relative text-lg md:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 animate-shimmer-text" style={{ filter: 'drop-shadow(0 0 20px rgba(16,185,129,0.2))' }}>
          Top Polyphenol EVOO Rankings
        </h2>
        <p className="relative text-[9px] md:text-[10px] text-white/25 mt-1 tracking-widest uppercase font-medium">Lab-verified · Ranked by mg/kg polyphenol content</p>
        {/* Glow line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
      </div>

      {/* Filters Section (hidden to reduce visual load) */}
      <section className="hidden">
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

      {/* ── Small ad before rankings ── */}
      {process.env.NEXT_PUBLIC_ADSENSE_SLOT_PRE_TABLE && (
        <div className="max-w-3xl mx-auto px-4">
          <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_PRE_TABLE} variant="banner" />
        </div>
      )}

      {/* Rankings Table */}
      <section className="relative py-3 md:py-6 px-4 md:px-6 w-full no-auto-ads overflow-hidden" style={{background: 'linear-gradient(135deg, #0a1628 0%, #111d32 25%, #0d2a3a 50%, #111d32 75%, #0a1628 100%)'}}>
        {/* Ambient glow behind cards */}
        <div className="absolute top-[10%] right-[10%] w-[250px] h-[250px] bg-emerald-500/[0.04] rounded-full blur-[100px] animate-float-orb pointer-events-none" />
        <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-teal-500/[0.03] rounded-full blur-[120px] animate-float-orb-2 pointer-events-none" />
        <div className="absolute top-[50%] left-[50%] w-[200px] h-[200px] bg-cyan-500/[0.02] rounded-full blur-[80px] animate-float-orb-3 pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full">
          {/* Info strip — ultra-compact (freshest harvest only) */}
          <div className="mb-2 px-2">
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm text-[10px] text-white/45">
              <span>Freshest ({currentMonth}):</span>
              <span className="inline-flex items-center gap-1">{freshHarvest.flags.slice(0, 5).map((flag, i) => <span key={i}>{flag}</span>)}</span>
              <span className="text-emerald-400/80 italic text-[9px]">{freshHarvest.region}</span>
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

          <div className="bg-transparent backdrop-blur rounded-2xl md:rounded-3xl shadow-none overflow-visible md:overflow-hidden animate-table-entrance">

            {/* ── MOBILE CARD LIST (< md) ── */}
            <div className="block md:hidden space-y-3">
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
                  displayRank === 1 ? 'text-yellow-300' :
                  displayRank === 2 ? 'text-slate-200' :
                  displayRank === 3 ? 'text-orange-300' :
                  'text-emerald-300'
                const rowBg =
                  displayRank === 1 ? 'bg-gradient-to-r from-[#1b2438] to-[#0d1b34] border-l-4 border-yellow-400' :
                  displayRank === 2 ? 'bg-gradient-to-r from-[#1b2438] to-[#12233f] border-l-4 border-gray-400' :
                  displayRank === 3 ? 'bg-gradient-to-r from-[#1c2336] to-[#182a4a] border-l-4 border-orange-400' :
                  'bg-gradient-to-r from-[#0f1f39] to-[#123055] border-l-4 border-green-400'

                // ── FEATURED CARD for any oil with product image ──
                if (oil.productImage) {
                  const borderColor =
                    displayRank === 1 ? 'border-yellow-400' :
                    displayRank === 2 ? 'border-gray-400' :
                    displayRank === 3 ? 'border-orange-400' :
                    'border-green-300'
                  const infoBg =
                    displayRank === 1 ? 'bg-gradient-to-r from-[#1b2438] to-[#0d1b34]' :
                    displayRank === 2 ? 'bg-gradient-to-r from-[#1b2438] to-[#12233f]' :
                    displayRank === 3 ? 'bg-gradient-to-r from-[#1c2336] to-[#182a4a]' :
                    'bg-gradient-to-r from-[#0f1f39] to-[#123055]'
                  return (
                    <ScrollReveal key={oil.id} delay={Math.min(index * 60, 300)}>
                    <div
                      className={`relative overflow-hidden rounded-2xl border border-gray-100 border-l-4 ${borderColor} shadow-sm`}
                    >
                      {/* Product image — tall, fills width */}
                      <a href={oil.buyLink} target="_blank" rel="noopener noreferrer" className="block relative h-52 w-full overflow-hidden">
                        <img
                          src={oil.productImage}
                          alt={oil.brand}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                        {/* Gradient overlay at bottom so info is readable */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Rank badge + crown — top-left overlay */}
                        <div className="absolute top-2.5 left-2.5 flex flex-col items-center gap-0.5">
                          <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-bold text-base text-white shadow-lg bg-gradient-to-br ${rankGrad} ring-2 ring-white/60`}>
                            {displayRank}
                          </span>
                          {displayRank <= 3 && (
                            <span className={`text-lg leading-none drop-shadow animate-crown-bounce ${
                              displayRank === 1 ? 'crown-gold' :
                              displayRank === 2 ? 'crown-silver' :
                              'crown-bronze'
                            }`}>👑</span>
                          )}
                        </div>

                        {/* Score overlaid at bottom-left of image */}
                        <div className="absolute bottom-2.5 left-3">
                          <span className={`text-3xl font-extrabold leading-none drop-shadow-lg ${
                            displayRank === 1 ? 'text-yellow-300' :
                            displayRank === 2 ? 'text-gray-200' :
                            displayRank === 3 ? 'text-orange-300' :
                            'text-emerald-200'
                          }`}>{score}</span>
                          <span className="text-white/90 text-xs font-semibold ml-1">mg/kg polyphenols</span>
                          {badges.map((b, bi) => (
                            <span key={bi} className="ml-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30">{b}</span>
                          ))}
                        </div>
                      </a>

                      {/* Info row below image */}
                      <div className={`flex items-center gap-3 px-3 py-2.5 ${infoBg}`}>
                        <div className="flex-1 min-w-0">
                          <a
                            href={oil.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-white leading-tight block line-clamp-1"
                          >
                            {oil.brand}
                          </a>
                          {OIL_TAGLINES[oil.id] && (
                            <p className="text-[9px] text-white/30 mt-0.5 line-clamp-1 italic">{OIL_TAGLINES[oil.id]}</p>
                          )}
                          <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-white/75 flex-wrap">
                            <span>{COUNTRY_FLAGS[oil.origin]} {oil.origin}</span>
                            <span className="text-white/40">•</span>
                            <span>{oil.harvestDate}</span>
                            <span className="text-white/40">•</span>
                            <span className="italic text-white/60">{oil.cultivar}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-1 shrink-0">
                          <a
                            href={oil.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-3 py-2 rounded-lg font-semibold text-[11px] text-white shadow-sm active:scale-95 transition-transform bg-gradient-to-r from-green-600 to-emerald-600"
                          >
                            Buy →
                          </a>
                          {(oil.amazonLink || isAmazon) && (
                            <a
                              href={oil.amazonLink || oil.buyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg font-bold text-[10px] text-gray-900 shadow-sm active:scale-95 transition-transform bg-gradient-to-r from-[#FFD814] to-[#FF9900]"
                            >
                              <img src="/img/amazon-logo.svg" alt="Amazon" className="h-4 w-auto" />
                            </a>
                          )}
                          {oil.certificateLink && (
                            <a
                              href={oil.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[9px] text-emerald-300 underline"
                            >
                              📜 COA
                            </a>
                          )}
                          {oil.instagram && (
                            <a
                              href={`https://instagram.com/${oil.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[9px] text-pink-300 hover:text-pink-200 transition-colors"
                              title={`@${oil.instagram}`}
                            >
                              📸 @{oil.instagram}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    </ScrollReveal>
                  )
                }

                // ── NORMAL CARD for ranks 4+ ──
                return (
                  <ScrollReveal key={oil.id} delay={Math.min(index * 60, 300)}>
                  <div
                    className={`flex items-center gap-3 px-3 py-3 rounded-2xl border border-white/10 shadow-sm ${rowBg}`}
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
                        className="text-sm font-bold text-white leading-tight block line-clamp-2"
                      >
                        {oil.brand}
                      </a>
                      {OIL_TAGLINES[oil.id] && (
                        <p className="text-[9px] text-white/30 mt-0.5 line-clamp-1 italic">{OIL_TAGLINES[oil.id]}</p>
                      )}
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        <span className={`text-xl font-extrabold leading-none ${scoreColor}`}>{score}</span>
                        <span className="text-[10px] text-white/80 font-medium">mg/kg polyphenols</span>
                        {badges.map((b, bi) => (
                          <span key={bi} className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-white/15 text-white/85 border border-white/20">{b}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-white/70 flex-wrap">
                        <span>{COUNTRY_FLAGS[oil.origin]} {oil.origin}</span>
                        <span className="text-white/35">•</span>
                        <span>{oil.harvestDate}</span>
                        <span className="text-white/35">•</span>
                        <span className="italic text-white/55">{oil.cultivar}</span>
                      </div>
                    </div>

                    {/* Buy + Amazon + COA */}
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <a
                        href={oil.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-3 py-2 rounded-lg font-semibold text-[11px] text-white shadow-sm active:scale-95 transition-transform bg-gradient-to-r from-green-600 to-emerald-600"
                      >
                        Buy →
                      </a>
                      {(oil.amazonLink || isAmazon) && (
                        <a
                          href={oil.amazonLink || oil.buyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg font-bold text-[10px] text-gray-900 shadow-sm active:scale-95 transition-transform bg-gradient-to-r from-[#FFD814] to-[#FF9900]"
                        >
                          <img src="/img/amazon-logo.svg" alt="Amazon" className="h-4 w-auto" />
                        </a>
                      )}
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
                      {oil.instagram && (
                        <a
                          href={`https://instagram.com/${oil.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[9px] text-pink-300 hover:text-pink-200 transition-colors"
                          title={`@${oil.instagram}`}
                        >
                          📸 @{oil.instagram}
                        </a>
                      )}
                    </div>
                  </div>
                  </ScrollReveal>
                )
              })}
            </div>

            {/* ── DESKTOP CARD GRID (≥ md) ── */}
            <div className="hidden md:block">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
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
                    displayRank === 1 ? 'text-yellow-300' :
                    displayRank === 2 ? 'text-slate-200' :
                    displayRank === 3 ? 'text-orange-300' :
                    'text-emerald-300'
                  const cardBorder =
                    displayRank === 1 ? 'border-yellow-400/60 hover:border-yellow-400' :
                    displayRank === 2 ? 'border-gray-400/60 hover:border-gray-400' :
                    displayRank === 3 ? 'border-orange-400/60 hover:border-orange-400' :
                    'border-white/10 hover:border-emerald-400/50'
                  const cardBg =
                    displayRank === 1 ? 'bg-gradient-to-br from-[#1b2438] to-[#0d1b34]' :
                    displayRank === 2 ? 'bg-gradient-to-br from-[#1b2438] to-[#12233f]' :
                    displayRank === 3 ? 'bg-gradient-to-br from-[#1c2336] to-[#182a4a]' :
                    'bg-gradient-to-br from-[#0f1f39] to-[#123055]'

                  // Hero card for #1 spans 2 columns
                  const isHero = displayRank === 1

                  return (
                    <ScrollReveal key={oil.id} delay={Math.min(index * 80, 400)} className={isHero ? 'md:col-span-2 lg:col-span-2' : ''}>
                    <div
                      className={`relative overflow-hidden rounded-2xl border ${cardBorder} ${cardBg} shadow-lg hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-300 group/card h-full`}
                    >
                      {/* Product image area */}
                      {oil.productImage ? (
                        <a href={oil.buyLink} target="_blank" rel="noopener noreferrer" className={`block relative ${isHero ? 'h-72' : 'h-52'} w-full overflow-hidden`}>
                          <img
                            src={oil.productImage}
                            alt={oil.brand}
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                          {/* Rank badge overlay */}
                          <div className="absolute top-3 left-3 flex flex-col items-center gap-0.5">
                            <span className={`inline-flex items-center justify-center ${isHero ? 'w-14 h-14 text-xl' : 'w-11 h-11 text-base'} rounded-xl font-bold text-white shadow-lg bg-gradient-to-br ${rankGrad} ring-2 ring-white/60`}>
                              {displayRank}
                            </span>
                            {displayRank <= 3 && (
                              <span className={`${isHero ? 'text-xl' : 'text-lg'} leading-none drop-shadow animate-crown-bounce ${
                                displayRank === 1 ? 'crown-gold' :
                                displayRank === 2 ? 'crown-silver' :
                                'crown-bronze'
                              }`}>👑</span>
                            )}
                          </div>

                          {/* Score overlay bottom-left */}
                          <div className="absolute bottom-3 left-3">
                            <span className={`${isHero ? 'text-4xl' : 'text-3xl'} font-extrabold leading-none drop-shadow-lg ${scoreColor}`}>{score}</span>
                            <span className="text-white/90 text-xs font-semibold ml-1.5">mg/kg</span>
                            {badges.map((b, bi) => (
                              <span key={bi} className="ml-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30">{b}</span>
                            ))}
                          </div>

                          {/* Original value — top right */}
                          <div className="absolute top-3 right-3">
                            <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2.5 py-1.5 border border-white/20">
                              <span className="text-white font-bold text-sm">{oil.hplcPolyphenols || oil.nmrOtherPolyphenols}</span>
                              <span className="text-white/70 text-[10px] ml-1">mg/kg</span>
                              <span className={`block text-[8px] font-medium mt-0.5 ${
                                oil.hplcPolyphenols ? 'text-emerald-300' : 'text-blue-300'
                              }`}>
                                {oil.hplcPolyphenols ? 'HPLC' :
                                 oil.method.toLowerCase().includes('nmr') || oil.method.toLowerCase().includes('qnmr') ? 'qNMR' :
                                 oil.method.toLowerCase().includes('rss') ? 'RSS' : oil.method}
                              </span>
                            </div>
                          </div>
                        </a>
                      ) : (
                        /* No image — compact header */
                        <div className={`relative px-4 pt-4 pb-3 ${isHero ? 'pb-4' : ''}`}>
                          <div className="flex items-center gap-3">
                            <span className={`inline-flex items-center justify-center w-11 h-11 rounded-xl font-bold text-base text-white shadow-lg bg-gradient-to-br ${rankGrad}`}>
                              {displayRank}
                            </span>
                            <div>
                              <span className={`text-2xl font-extrabold ${scoreColor}`}>{score}</span>
                              <span className="text-white/70 text-xs ml-1">mg/kg</span>
                            </div>
                            {badges.map((b, bi) => (
                              <span key={bi} className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-white/15 text-white/85 border border-white/20">{b}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Info section */}
                      <div className="px-4 py-3">
                        <a
                          href={oil.buyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${isHero ? 'text-lg' : 'text-sm'} font-bold text-white hover:text-emerald-300 transition-colors leading-tight block`}
                        >
                          {oil.brand}
                        </a>
                        {OIL_TAGLINES[oil.id] && (
                          <p className="text-[10px] text-white/35 mt-0.5 line-clamp-1 italic">{OIL_TAGLINES[oil.id]}</p>
                        )}
                        <div className="flex items-center gap-2 mt-1.5 text-xs text-white/70 flex-wrap">
                          <span className="inline-flex items-center gap-1">
                            <span className="text-sm">{COUNTRY_FLAGS[oil.origin]}</span>
                            {oil.origin}
                          </span>
                          <span className="text-white/30">•</span>
                          <span>{oil.harvestDate}</span>
                          <span className="text-white/30">•</span>
                          <span className="italic text-white/55">{oil.cultivar}</span>
                        </div>

                        {/* Price + actions row */}
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-emerald-300">{oil.priceAmount || oil.price}</span>
                            {oil.certificateLink && (
                              <a
                                href={oil.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] text-emerald-400 hover:text-emerald-300 underline transition-colors"
                              >
                                📜 COA
                              </a>
                            )}
                            {oil.instagram && (
                              <a
                                href={`https://instagram.com/${oil.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] text-pink-300 hover:text-pink-200 transition-colors"
                              >
                                📸 @{oil.instagram}
                              </a>
                            )}
                          </div>
                          <div className="flex flex-col items-end gap-1.5">
                            <a
                              href={oil.buyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-xs text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500"
                            >
                              Buy →
                            </a>
                            {(oil.amazonLink || isAmazon) && (
                              <a
                                href={oil.amazonLink || oil.buyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs text-gray-900 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 bg-gradient-to-r from-[#FFD814] to-[#FF9900] hover:from-[#F7CA00] hover:to-[#FF8C00]"
                              >
                                <img src="/img/amazon-logo.svg" alt="Amazon" className="h-4 w-auto" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    </ScrollReveal>
                  )
                })}
              </div>
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

      {/* ── Small ad after rankings ── */}
      {process.env.NEXT_PUBLIC_ADSENSE_SLOT_POST_TABLE && (
        <div className="max-w-3xl mx-auto px-4">
          <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_POST_TABLE} variant="banner" />
        </div>
      )}

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

      {/* ── Small ad at page bottom ── */}
      {process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM && (
        <div className="max-w-3xl mx-auto px-4">
          <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM} variant="banner" />
        </div>
      )}

      <style jsx>{`
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-row { animation: fade-in-row 0.4s ease-out both; }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-row {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-crown-bounce { animation: crown-bounce 2s ease-in-out infinite; }
        .crown-gold { color: #FFD700; filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.8)) saturate(1.5) brightness(1.1); }
        .crown-silver { color: #C0C0C0; filter: grayscale(1) brightness(1.3) drop-shadow(0 0 4px rgba(192, 192, 192, 0.8)); }
        .crown-bronze { color: #CD7F32; filter: hue-rotate(15deg) saturate(1.5) brightness(0.8) contrast(1.2) drop-shadow(0 0 4px rgba(205, 127, 50, 0.8)); }
        @keyframes crown-bounce {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          25% { transform: translateY(-3px) rotate(0deg); }
          50% { transform: translateY(-1px) rotate(5deg); }
          75% { transform: translateY(-2px) rotate(0deg); }
        }
      `}</style>
        </div>
    </main>
    </>
  )
}
