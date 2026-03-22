export type ProductCategory = 'Diet' | 'Supplements' | 'Gut Health' | 'Lifestyle'

export type EvidenceLevel = 'High' | 'Moderate' | 'Emerging'

export type RecommendedProduct = {
  name: string
  description: string
  why: string
  amazonUrl: string
  imageEmoji: string
  category: ProductCategory
  priceRange: string
  evidenceLevel: EvidenceLevel
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Diet',
  'Supplements',
  'Gut Health',
  'Lifestyle',
]

export const PRODUCTS: RecommendedProduct[] = [
  {
    name: 'Pamako Early Harvest Extra Virgin Olive Oil',
    description: 'High-polyphenol EVOO for salads, finishing, and Mediterranean-style meals.',
    why: 'AGA 2024 Mediterranean pattern: High-polyphenol extra virgin olive oil is the signature fat source in the best-supported long-term anti-inflammatory eating pattern for UC.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🫒',
    category: 'Diet',
    priceRange: '$$$',
    evidenceLevel: 'Moderate',
  },
  {
    name: 'Wild-Caught Omega-3 EPA + DHA Fish Oil',
    description: 'Salmon and sardine-derived omega-3 supplement focused on EPA and DHA intake.',
    why: 'OR 0.81 IBD risk reduction: Mendelian-randomization data linked higher omega-3 exposure, especially DHA, with lower inflammatory bowel disease risk.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🐟',
    category: 'Diet',
    priceRange: '$$',
    evidenceLevel: 'Moderate',
  },
  {
    name: 'Nuts and Seeds Variety Pack',
    description: 'Mediterranean-style pantry staple with walnuts, almonds, pistachios, pumpkin seeds, and chia.',
    why: 'Mediterranean diet core pattern: Nuts and seeds are a recurring anti-inflammatory staple in the dietary pattern most consistently recommended for UC-friendly long-term eating.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🥜',
    category: 'Diet',
    priceRange: '$$',
    evidenceLevel: 'Moderate',
  },
  {
    name: 'Curcumin with BioPerine 1500 mg',
    description: 'High-dose curcumin with piperine to improve absorption.',
    why: 'RR 2.33 for clinical remission: Curcumin showed one of the strongest adjunct signals across 8+ RCTs and was recognized in ECCO 2025 guidance discussions.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🟡',
    category: 'Supplements',
    priceRange: '$$',
    evidenceLevel: 'High',
  },
  {
    name: 'Vitamin D3 5000 IU',
    description: 'High-potency vitamin D3 for patients with low levels or limited sun exposure.',
    why: 'RR 0.64 relapse and 53% fewer hospitalizations: Meta-analytic relapse data plus VA 2025 outcomes make vitamin D one of the most practical deficiency targets in UC.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '☀️',
    category: 'Supplements',
    priceRange: '$',
    evidenceLevel: 'High',
  },
  {
    name: 'Visbiome High-Potency Probiotic',
    description: 'Multi-strain probiotic modeled on the VSL#3 / Visbiome evidence base.',
    why: '42.9% vs 15.7% remission and OR 3.85 in NMA: Multi-strain probiotic combinations have some of the strongest supportive microbiome trial data in UC.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🦠',
    category: 'Supplements',
    priceRange: '$$$',
    evidenceLevel: 'High',
  },
  {
    name: 'Psyllium Husk Fiber',
    description: 'Soluble fiber powder that can be titrated slowly based on symptom tolerance.',
    why: '60% maintenance comparable to mesalamine: Psyllium is the primary substrate for butyrate production and has RCT-level maintenance data in UC.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🌾',
    category: 'Supplements',
    priceRange: '$',
    evidenceLevel: 'Moderate',
  },
  {
    name: 'Delayed-Release Phosphatidylcholine',
    description: 'Colon-targeted phosphatidylcholine support aimed at the mucus barrier.',
    why: '53% vs 10% remission across 3 RCTs: Stremmel-led studies suggest delayed-release phosphatidylcholine may improve barrier function and remission rates.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🧫',
    category: 'Supplements',
    priceRange: '$$$',
    evidenceLevel: 'Moderate',
  },
  {
    name: 'Berberine Supplement',
    description: 'Plant alkaloid supplement studied as an anti-inflammatory gut support adjunct.',
    why: 'RR 1.22 clinical efficacy: A 2024 meta-analysis of 10 RCTs reported a favorable pooled efficacy signal for berberine in ulcerative colitis.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🌿',
    category: 'Gut Health',
    priceRange: '$$',
    evidenceLevel: 'Moderate',
  },
  {
    name: 'Zinc Chelate Supplement',
    description: 'Barrier-support mineral supplement for patients at risk of deficiency.',
    why: 'IBD deficiency signal: Zinc deficiency is common in inflammatory bowel disease and matters for epithelial repair, immune signaling, and intestinal barrier function.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🔩',
    category: 'Gut Health',
    priceRange: '$',
    evidenceLevel: 'Emerging',
  },
  {
    name: 'Methylfolate or Folate Complex',
    description: 'Folate support for patients with higher needs or impaired absorption.',
    why: 'Colon-cancer risk context: Folate status matters because UC raises long-term colorectal neoplasia risk and sulfasalazine can impair folate absorption.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🥬',
    category: 'Gut Health',
    priceRange: '$',
    evidenceLevel: 'Emerging',
  },
  {
    name: 'Iron Bisglycinate',
    description: 'Gentler iron form for iron deficiency support when tolerated.',
    why: 'Better tolerated than ferrous sulfate: Ferric maltol and bisglycinate-style iron options are often easier on the gut than standard ferrous sulfate in IBD patients.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🩸',
    category: 'Gut Health',
    priceRange: '$',
    evidenceLevel: 'Moderate',
  },
  {
    name: 'HEPA Air Purifier',
    description: 'Bedroom or office purifier that lowers indoor particulate exposure.',
    why: 'OR 3.6 UC risk signal for PM2.5 exposure: Air-quality data suggest particulate pollution is a meaningful inflammatory exposure worth reducing when possible.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🌬️',
    category: 'Lifestyle',
    priceRange: '$$$',
    evidenceLevel: 'Emerging',
  },
  {
    name: 'Blue Light Blocking Glasses',
    description: 'Evening-use lenses to protect sleep timing and circadian rhythm.',
    why: 'HR 2.05 sleep-related UC signal: Better sleep is consistently associated with better inflammatory control, making circadian support a pragmatic lifestyle lever.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🕶️',
    category: 'Lifestyle',
    priceRange: '$',
    evidenceLevel: 'Emerging',
  },
  {
    name: 'Non-Slip Yoga Mat',
    description: 'Home setup for low-impact exercise, stretching, and stress downshifting.',
    why: '10-study meta-analysis in 860K+ participants: Moderate exercise and stress reduction repeatedly track with better inflammatory and mental-health outcomes in UC.',
    amazonUrl: 'https://amazon.com/dp/PLACEHOLDER?tag=colitisclearly-20',
    imageEmoji: '🧘',
    category: 'Lifestyle',
    priceRange: '$$',
    evidenceLevel: 'Moderate',
  },
]
