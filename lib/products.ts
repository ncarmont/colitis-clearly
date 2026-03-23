export type ProductCategory = 'Diet' | 'Supplements' | 'Gut Health' | 'Lifestyle'
export type EvidenceLevel = 'High' | 'Moderate' | 'Emerging'

export interface RecommendedProduct {
  id: string
  name: string
  description: string
  why: string
  amazonUrl: string
  imageUrl: string
  category: ProductCategory
  priceRange: string
  evidenceLevel: EvidenceLevel
  effectSize?: string
}

export const PRODUCT_CATEGORIES: ProductCategory[] = ['Diet', 'Supplements', 'Gut Health', 'Lifestyle']

export const PRODUCTS: RecommendedProduct[] = [
  {
    id: 'curcumin',
    name: 'Curcumin with BioPerine 1500mg',
    description: 'Turmeric extract with piperine for enhanced absorption. The most evidence-backed UC supplement.',
    why: 'RR 2.33 for clinical remission in 8+ RCTs. ECCO 2025 recognized as adjunct to mesalamine. Cochrane: 4% relapse vs 18% placebo at 6 months.',
    amazonUrl: 'https://www.amazon.com/dp/B01DBTFO98?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop',
    category: 'Supplements',
    priceRange: '$$',
    evidenceLevel: 'High',
    effectSize: 'RR 2.33',
  },
  {
    id: 'vitamin-d3',
    name: 'Vitamin D3 5000 IU',
    description: 'High-dose cholecalciferol. 45-50% of UC patients are deficient.',
    why: 'RR 0.64 for IBD relapse with supplementation. VA study 2025: 53% fewer hospitalizations. Target serum 40-60 ng/mL.',
    amazonUrl: 'https://www.amazon.com/dp/B00GB85JR4?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    category: 'Supplements',
    priceRange: '$',
    evidenceLevel: 'High',
    effectSize: 'RR 0.64',
  },
  {
    id: 'vsl3',
    name: 'Visbiome High Potency Probiotic',
    description: '8-strain, 450 billion CFU. The most studied probiotic for UC.',
    why: '42.9% remission vs 15.7% placebo. OR 3.85 in NMA of 20 RCTs. ECCO guideline-recognized.',
    amazonUrl: 'https://www.amazon.com/dp/B003PSHMNI?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    category: 'Gut Health',
    priceRange: '$$$',
    evidenceLevel: 'High',
    effectSize: '42.9% remission',
  },
  {
    id: 'pamako-evoo',
    name: 'Pamako High Polyphenol EVOO',
    description: 'Early harvest extra virgin olive oil. Cornerstone of the Mediterranean diet pattern.',
    why: 'AGA 2024 + ECCO 2025 recommend Mediterranean diet as #1 dietary pattern for UC. Improved FC and microbiome in RCTs.',
    amazonUrl: 'https://www.amazon.com/dp/B0BXMVKJBH?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacdc50f1c?w=400&h=400&fit=crop',
    category: 'Diet',
    priceRange: '$$$',
    evidenceLevel: 'High',
    effectSize: 'AGA Recommended',
  },
  {
    id: 'omega3',
    name: 'Nordic Naturals Omega-3 EPA+DHA',
    description: 'Wild-caught fish oil with high EPA/DHA concentration.',
    why: 'OR 0.81 IBD risk reduction per Mendelian randomization. Systematic review of 15 studies: reduces intestinal inflammation and pro-inflammatory cytokines.',
    amazonUrl: 'https://www.amazon.com/dp/B002CQU564?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1535185384036-28bbc8035f28?w=400&h=400&fit=crop',
    category: 'Diet',
    priceRange: '$$',
    evidenceLevel: 'Moderate',
    effectSize: 'OR 0.81',
  },
  {
    id: 'psyllium',
    name: 'Psyllium Husk Fiber (Metamucil)',
    description: 'Soluble fiber powder. Primary substrate for butyrate-producing bacteria.',
    why: '60% maintenance remission — comparable to mesalamine in open-label RCT. Butyrate provides >70% of colonocyte energy.',
    amazonUrl: 'https://www.amazon.com/dp/B007QLKNX0?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1505576399279-0d06b4388d7e?w=400&h=400&fit=crop',
    category: 'Gut Health',
    priceRange: '$',
    evidenceLevel: 'Moderate',
    effectSize: '60% maintenance',
  },
  {
    id: 'phosphatidylcholine',
    name: 'Phosphatidylcholine (Delayed-Release)',
    description: 'Targeted colonic release. Restores the depleted mucus phospholipid layer in UC.',
    why: '53% vs 10% remission in 3 RCTs (Stremmel). 80% steroid withdrawal achieved.',
    amazonUrl: 'https://www.amazon.com/dp/B000NJEBWG?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&h=400&fit=crop',
    category: 'Supplements',
    priceRange: '$$',
    evidenceLevel: 'Moderate',
    effectSize: '53% remission',
  },
  {
    id: 'berberine',
    name: 'Berberine 500mg',
    description: 'Plant alkaloid with anti-inflammatory and antimicrobial properties.',
    why: 'RR 1.22 for clinical efficacy in meta-analysis of 10 RCTs (Li 2024). Modulates gut microbiome and NF-κB pathway.',
    amazonUrl: 'https://www.amazon.com/dp/B00OZEJ0GI?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop',
    category: 'Gut Health',
    priceRange: '$',
    evidenceLevel: 'Emerging',
    effectSize: 'RR 1.22',
  },
  {
    id: 'air-purifier',
    name: 'HEPA Air Purifier',
    description: 'Medical-grade HEPA filtration for home use.',
    why: 'PM2.5 air pollution: MR OR 3.6 for UC risk (UK Biobank 455,210 participants). Removing particulate matter reduces gut inflammation trigger.',
    amazonUrl: 'https://www.amazon.com/dp/B08R794ZMX?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop',
    category: 'Lifestyle',
    priceRange: '$$',
    evidenceLevel: 'Moderate',
    effectSize: 'MR OR 3.6',
  },
  {
    id: 'zinc',
    name: 'Zinc Picolinate 50mg',
    description: 'Highly bioavailable zinc for immune and barrier support.',
    why: 'Common deficiency in IBD. Supports intestinal barrier integrity and tight junction assembly. Essential cofactor for mucosal healing.',
    amazonUrl: 'https://www.amazon.com/dp/B000GFSVS2?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    category: 'Supplements',
    priceRange: '$',
    evidenceLevel: 'Moderate',
  },
  {
    id: 'iron',
    name: 'Iron Bisglycinate (Gentle Iron)',
    description: 'Non-constipating chelated iron. Better tolerated than ferrous sulfate.',
    why: 'Iron deficiency anemia is common in UC due to chronic bleeding. Ferric maltol/bisglycinate better tolerated than ferrous sulfate in IBD patients.',
    amazonUrl: 'https://www.amazon.com/dp/B001F0R4NO?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&h=400&fit=crop',
    category: 'Supplements',
    priceRange: '$',
    evidenceLevel: 'High',
  },
  {
    id: 'folate',
    name: 'Methylfolate (Active Folate)',
    description: 'Bioactive L-methylfolate. Bypasses MTHFR gene variants.',
    why: 'UC increases colon cancer risk; folate is protective. Sulfasalazine impairs folate absorption. Most GI doctors recommend supplementation.',
    amazonUrl: 'https://www.amazon.com/dp/B005VTPHLU?tag=colitisclearly-20',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    category: 'Supplements',
    priceRange: '$',
    evidenceLevel: 'Moderate',
  },
]

export const TOP_PRODUCTS = PRODUCTS.filter(p =>
  ['curcumin', 'vitamin-d3', 'vsl3', 'pamako-evoo', 'omega3', 'psyllium'].includes(p.id)
)
