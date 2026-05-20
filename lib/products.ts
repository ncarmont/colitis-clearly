export type ProductCategory = 'Coffee' | 'Decaf' | 'Testing' | 'Brewing' | 'Watchlist'
export type EvidenceLevel = 'High' | 'Moderate' | 'Emerging'

export interface LabResultRow {
  label: string
  value: string
}

export interface ScoreBreakdownRow {
  label: string
  value: number
  max: number
  note: string
}

export interface RecommendedProduct {
  id: string
  name: string
  brand?: string
  description: string
  why: string
  amazonUrl: string
  amazonUkUrl?: string
  sourceUrl?: string
  sourceLabel?: string
  imageUrl: string
  category: ProductCategory
  priceRange: string
  evidenceLevel: EvidenceLevel
  effectSize?: string
  labName?: string
  reportName?: string
  reportDate?: string
  sample?: string
  testScope?: string[]
  labResults?: LabResultRow[]
  disclosureGaps?: string[]
  rankLabel?: string
  proofTier?: 'Exact public COA' | 'CLP Clean 16' | 'Public test claim' | 'COA on request' | 'Missing numbers' | 'Buyer tool'
  purityScore?: number
  heavyMetalSummary?: string
  mycotoxinSummary?: string
  moldYeastSummary?: string
  bestFor?: string
  scoreBreakdown?: ScoreBreakdownRow[]
}

export const PRODUCT_CATEGORIES: ProductCategory[] = ['Coffee', 'Decaf', 'Testing', 'Brewing', 'Watchlist']

const AMAZON_US_TAG = 'bestoliveoilr-20'
const AMAZON_UK_TAG = 'bestoliveoi08-21'

function amazonSearch(query: string, market: 'us' | 'uk' = 'us') {
  const host = market === 'uk' ? 'www.amazon.co.uk' : 'www.amazon.com'
  const tag = market === 'uk' ? AMAZON_UK_TAG : AMAZON_US_TAG
  return `https://${host}/s?k=${encodeURIComponent(query)}&tag=${tag}`
}

export const PRODUCTS: RecommendedProduct[] = [
  {
    id: 'natural-force-clean-coffee-medium-2025',
    name: 'Clean Coffee Medium Roast',
    brand: 'Natural Force',
    rankLabel: '#1 best overall receipts',
    proofTier: 'Exact public COA',
    purityScore: 94,
    bestFor: 'Best balance of exact COA proof, low mycotoxins/mould, lower acrylamide, and buyer usefulness.',
    description:
      'The current clean-coffee benchmark: public Eurofins PDFs, exact numeric contaminant values, and a roasted-bean report instead of vague “tested” theater.',
    why:
      'Exact COA proof: 2025 Finca La Chirimoya green beans show arsenic <10.0 ppb, cadmium 5.58 ppb, lead <5.00 ppb, mercury <5.00 ppb, ochratoxin A <1.00 ppb, aflatoxins <0.500 ppb each, glyphosate 0.04 mg/kg, gluten <3.0 ppm; roasted beans show yeast/mould <10 CFU/g and acrylamide 185 mcg/kg.',
    amazonUrl: amazonSearch('Natural Force Clean Coffee Medium Roast'),
    amazonUkUrl: amazonSearch('Natural Force Clean Coffee Medium Roast', 'uk'),
    sourceUrl: 'https://support.naturalforce.com/hc/en-us/articles/360036582453-3rd-party-lab-test-results-for-Clean-Coffee-',
    sourceLabel: 'Eurofins 2025 COA PDFs',
    imageUrl: '/images/coffee-products/natural-force-clean-coffee-12oz.jpg',
    category: 'Coffee',
    priceRange: '$$–$$$',
    evidenceLevel: 'High',
    effectSize: 'Exact public COA',
    labName: 'Eurofins Food Integrity & Innovation',
    reportName: 'Report 5146799-0 green + 5123442-0 roasted',
    reportDate: 'Oct–Nov 2025',
    sample: '2025 Finca La Chirimoya GREEN / ROASTED',
    heavyMetalSummary: 'Pb <5.00 ppb, Cd 5.58 ppb, As <10.0 ppb, Hg <5.00 ppb',
    mycotoxinSummary: 'Ochratoxin A <1.00 ppb; aflatoxins <0.500 ppb each',
    moldYeastSummary: 'Yeast/mould <10 CFU/g roasted',
    testScope: ['Heavy metals', 'Mycotoxins', 'Pesticides', 'Glyphosate', 'Gluten', 'Yeast/mould', 'Acrylamide'],
    scoreBreakdown: [
      { label: 'Heavy metals', value: 38, max: 40, note: 'Full panel, current public PDF, low/ND except cadmium 5.58 ppb.' },
      { label: 'Mycotoxins', value: 20, max: 20, note: 'Ochratoxin A and aflatoxins below reporting limits.' },
      { label: 'Pesticides', value: 14, max: 15, note: 'Large pesticide panel plus glyphosate value disclosed.' },
      { label: 'Traceability', value: 13, max: 15, note: 'Named crop/sample, lab, report IDs, date.' },
      { label: 'Freshness/value', value: 9, max: 10, note: 'Roasted report included; still check bag roast date.' },
    ],
    labResults: [
      { label: 'Arsenic', value: '<10.0 ppb' },
      { label: 'Cadmium', value: '5.58 ppb' },
      { label: 'Lead', value: '<5.00 ppb' },
      { label: 'Mercury', value: '<5.00 ppb' },
      { label: 'Ochratoxin A', value: '<1.00 ppb' },
      { label: 'Aflatoxins B1/B2/G1/G2', value: '<0.500 ppb each' },
      { label: 'Glyphosate', value: '0.04 mg/kg' },
      { label: 'Yeast / mould', value: '<10 CFU/g roasted' },
      { label: 'Acrylamide', value: '185 mcg/kg roasted' },
    ],
    disclosureGaps: ['Roast date still must be checked on the bag before buying.'],
  },
  {
    id: 'natural-force-founders-dark-roast-2024',
    name: 'Founder’s Select Dark Roast',
    brand: 'Natural Force',
    rankLabel: '#2 lowest heavy-metal panel',
    proofTier: 'Exact public COA',
    purityScore: 91,
    bestFor: 'Best heavy-metal panel found publicly; downgraded because roasted acrylamide is much higher than the medium roast.',
    description:
      'A darker roast with unusually transparent 2024 Eurofins results: very clean heavy-metal panel, clean mycotoxins, but a higher acrylamide tradeoff.',
    why:
      'Exact COA proof: 2024 Finca La Chirimoya green beans show arsenic <10.0 ppb, cadmium <5.00 ppb, lead <5.00 ppb, mercury <5.00 ppb, copper 15.2 ppm, ochratoxin A <1.00 ppb, aflatoxins <0.500 ppb each, gluten <3.0 ppm, glyphosate 0.01 mg/kg; roasted beans show yeast/mould <10 CFU/g and acrylamide 502 mcg/kg.',
    amazonUrl: amazonSearch('Natural Force Founder Select Dark Roast'),
    amazonUkUrl: amazonSearch('Natural Force Founder Select Dark Roast', 'uk'),
    sourceUrl:
      'https://support.naturalforce.com/hc/en-us/articles/360051304694-3rd-party-lab-test-results-for-Clean-Coffee-Founder-s-Select-Dark-Roast',
    sourceLabel: 'Eurofins 2024 dark-roast COA PDFs',
    imageUrl: '/images/coffee-products/natural-force-founders-dark-12oz.jpg',
    category: 'Coffee',
    priceRange: '$$–$$$',
    evidenceLevel: 'High',
    effectSize: 'Lowest metals found',
    labName: 'Eurofins Microbiology Laboratories / Eurofins Food Chemistry Testing',
    reportName: 'AR-24-QK-029205-01 green + AR-24-QK-030873-01 roasted',
    reportDate: 'Aug–Sep 2024',
    sample: 'Clean Coffee - Finca La Chirimoya GREEN / ROASTED',
    heavyMetalSummary: 'Pb <5.00 ppb, Cd <5.00 ppb, As <10.0 ppb, Hg <5.00 ppb',
    mycotoxinSummary: 'Ochratoxin A <1.00 ppb; aflatoxins <0.500 ppb each',
    moldYeastSummary: 'Yeast/mould <10 CFU/g roasted',
    testScope: ['Heavy metals', 'Mycotoxins', 'Pesticides', 'Glyphosate', 'Gluten', 'Yeast/mould', 'Acrylamide'],
    scoreBreakdown: [
      { label: 'Heavy metals', value: 40, max: 40, note: 'All four priority metals below reporting limits.' },
      { label: 'Mycotoxins', value: 20, max: 20, note: 'Ochratoxin A and aflatoxins below reporting limits.' },
      { label: 'Pesticides', value: 14, max: 15, note: 'Pesticide panel plus glyphosate 0.01 mg/kg.' },
      { label: 'Traceability', value: 13, max: 15, note: 'Named sample, dated Eurofins reports.' },
      { label: 'Freshness/value', value: 4, max: 10, note: 'Acrylamide 502 mcg/kg roasted is the major downgrade.' },
    ],
    labResults: [
      { label: 'Arsenic', value: '<10.0 ppb' },
      { label: 'Cadmium', value: '<5.00 ppb' },
      { label: 'Lead', value: '<5.00 ppb' },
      { label: 'Mercury', value: '<5.00 ppb' },
      { label: 'Ochratoxin A', value: '<1.00 ppb' },
      { label: 'Aflatoxins B1/B2/G1/G2', value: '<0.500 ppb each' },
      { label: 'Glyphosate', value: '0.01 mg/kg' },
      { label: 'Yeast / mould', value: '<10 CFU/g roasted' },
      { label: 'Acrylamide', value: '502 mcg/kg roasted' },
    ],
    disclosureGaps: ['Dark roast acrylamide is meaningfully higher than the 2025 medium-roast report.'],
  },
  {
    id: 'natural-force-clean-decaf-2025',
    name: 'Clean Decaf',
    brand: 'Natural Force',
    rankLabel: '#3 best decaf receipts',
    proofTier: 'Exact public COA',
    purityScore: 86,
    bestFor: 'Best decaf option found with public numeric COA values; not as low in arsenic/cadmium as the caffeinated lots.',
    description:
      'A solvent-free decaf candidate with actual green-bean and roasted-bean Eurofins results. It wins on transparency, not on having the absolute lowest metals.',
    why:
      'Exact COA proof: 2025 Capucas Decaf green beans show arsenic 20.9 ppb, cadmium 8.04 ppb, lead <5.00 ppb, mercury <5.00 ppb, ochratoxin A <1.00 ppb, aflatoxins <0.500 ppb each, glyphosate 0.07 mg/kg, gluten <3.0 ppm; roasted beans show yeast/mould <10 CFU/g and acrylamide 302 mcg/kg.',
    amazonUrl: amazonSearch('Natural Force Clean Decaf Coffee'),
    amazonUkUrl: amazonSearch('Natural Force Clean Decaf Coffee', 'uk'),
    sourceUrl: 'https://support.naturalforce.com/hc/en-us/articles/360045176674-3rd-party-lab-test-results-for-Clean-Decaf-',
    sourceLabel: 'Eurofins 2025 decaf COA PDFs',
    imageUrl: '/images/coffee-products/natural-force-clean-decaf-12oz.jpg',
    category: 'Decaf',
    priceRange: '$$–$$$',
    evidenceLevel: 'High',
    effectSize: 'Best decaf COA',
    labName: 'Eurofins Food Integrity & Innovation',
    reportName: 'Report 5125567-0 green + 5123443-0 roasted',
    reportDate: 'Oct 2025',
    sample: '2025 Capucas Decaf GREEN / ROASTED',
    heavyMetalSummary: 'Pb <5.00 ppb, Cd 8.04 ppb, As 20.9 ppb, Hg <5.00 ppb',
    mycotoxinSummary: 'Ochratoxin A <1.00 ppb; aflatoxins <0.500 ppb each',
    moldYeastSummary: 'Yeast/mould <10 CFU/g roasted',
    testScope: ['Heavy metals', 'Mycotoxins', 'Pesticides', 'Glyphosate', 'Gluten', 'Yeast/mould', 'Acrylamide'],
    scoreBreakdown: [
      { label: 'Heavy metals', value: 32, max: 40, note: 'Lead/mercury ND; arsenic 20.9 ppb and cadmium 8.04 ppb are higher than the caffeinated lots.' },
      { label: 'Mycotoxins', value: 20, max: 20, note: 'Ochratoxin A and aflatoxins below reporting limits.' },
      { label: 'Pesticides', value: 13, max: 15, note: 'Pesticide panel plus glyphosate 0.07 mg/kg.' },
      { label: 'Traceability', value: 13, max: 15, note: 'Dated green and roasted Eurofins reports.' },
      { label: 'Freshness/value', value: 8, max: 10, note: 'Roasted report included; acrylamide 302 mcg/kg.' },
    ],
    labResults: [
      { label: 'Arsenic', value: '20.9 ppb' },
      { label: 'Cadmium', value: '8.04 ppb' },
      { label: 'Lead', value: '<5.00 ppb' },
      { label: 'Mercury', value: '<5.00 ppb' },
      { label: 'Ochratoxin A', value: '<1.00 ppb' },
      { label: 'Aflatoxins B1/B2/G1/G2', value: '<0.500 ppb each' },
      { label: 'Glyphosate', value: '0.07 mg/kg' },
      { label: 'Yeast / mould', value: '<10 CFU/g roasted' },
      { label: 'Acrylamide', value: '302 mcg/kg roasted' },
    ],
    disclosureGaps: ['Confirm current bag uses the same decaf lot/report year before buying.'],
  },

  {
    id: 'biodynamic-rise-shine-medium-2025',
    name: 'Rise & Shine Medium Roast',
    brand: 'Biodynamic Coffee',
    rankLabel: '#4 exact public COA',
    proofTier: 'Exact public COA',
    purityScore: 83,
    bestFor: 'Buyers who want another public numeric COA option, with clear lot IDs and PDFs, but not as complete a roasted-bean panel as Natural Force.',
    description:
      'A strong public-COA lead: Biodynamic Coffee publishes harvest-lot PDFs with heavy metals, mycotoxins, and microbiology. It earns exact-COA status, with a downgrade for no roasted acrylamide or yeast/mould count found in the latest PDFs.',
    why:
      'Exact COA proof: Dec 2025 Peru Biodynamic lot 030-1032-08160 PDFs show arsenic <0.02 mg/kg (<20 ppb), cadmium 0.015 mg/kg (15 ppb), mercury <0.01 mg/kg (<10 ppb), lead <0.017 mg/kg (<17 ppb), aflatoxins B1/B2/G1/G2 <1 ppb each, ochratoxin A <0.003 ppm (<3 ppb), mycophenolic acid 0.05 ppm, E. coli <10 CFU/g, and Listeria/Salmonella negative.',
    amazonUrl: amazonSearch('Biodynamic Coffee Rise and Shine Medium Roast'),
    amazonUkUrl: amazonSearch('Biodynamic Coffee Rise and Shine Medium Roast', 'uk'),
    sourceUrl: 'https://biodynamic.coffee/pages/lab-results',
    sourceLabel: 'Dec 2025 harvest-lot COA PDFs',
    imageUrl: '/images/coffee-products/biodynamic-rise-shine-medium.png',
    category: 'Coffee',
    priceRange: '$$–$$$',
    evidenceLevel: 'High',
    effectSize: 'Exact public harvest-lot COA',
    labName: 'Eurofins Essais Alimentaires Québec + Activation Laboratories',
    reportName: 'Eurofins M2589097 / M2589026 + Actlabs CA25-D-DEC03-024',
    reportDate: 'Dec 2025',
    sample: 'Peru Biodynamic 030-1032-08160',
    heavyMetalSummary: 'Pb <17 ppb, Cd 15 ppb, As <20 ppb, Hg <10 ppb',
    mycotoxinSummary: 'Aflatoxins <1 ppb each; OTA <3 ppb; mycophenolic acid 0.05 ppm',
    moldYeastSummary: 'E. coli <10 CFU/g; Listeria/Salmonella negative; no yeast/mould count found',
    testScope: ['Heavy metals', 'Mycotoxins', 'Microbiology', 'Demeter Biodynamic', 'USDA Organic', 'Lot ID visible'],
    scoreBreakdown: [
      { label: 'Heavy metals', value: 32, max: 40, note: 'Public metals panel, but reporting limits are less tight than the top Natural Force PDFs and cadmium is measurable at 15 ppb.' },
      { label: 'Mycotoxins', value: 17, max: 20, note: 'Aflatoxins and ochratoxin A below reporting limits; mycophenolic acid disclosed at 0.05 ppm.' },
      { label: 'Pesticides', value: 12, max: 15, note: 'Demeter/USDA/Ecocert signals, but no public pesticide or glyphosate table in the latest PDFs reviewed.' },
      { label: 'Traceability', value: 14, max: 15, note: 'Named lot, lab names, report IDs, dates, units, and reporting limits are visible.' },
      { label: 'Freshness/value', value: 8, max: 10, note: 'Current product/harvest receipts; verify the bag lot matches the public harvest lot.' },
    ],
    labResults: [
      { label: 'Arsenic', value: '<0.02 mg/kg (<20 ppb)' },
      { label: 'Cadmium', value: '0.015 mg/kg (15 ppb)' },
      { label: 'Lead', value: '<0.017 mg/kg (<17 ppb)' },
      { label: 'Mercury', value: '<0.01 mg/kg (<10 ppb)' },
      { label: 'Ochratoxin A', value: '<0.003 ppm (<3 ppb)' },
      { label: 'Aflatoxins B1/B2/G1/G2', value: '<1 ppb each' },
      { label: 'Mycophenolic acid', value: '0.05 ppm' },
      { label: 'E. coli', value: '<10 CFU/g' },
    ],
    disclosureGaps: ['Latest public files are harvest-lot PDFs; confirm the current bag lot matches 030-1032-08160.', 'No roasted acrylamide value, pesticide table, glyphosate value, or yeast/mould count found in the latest three PDFs reviewed.'],
  },

  {
    id: 'love-grown-medium-roast-whole-bean-clean-16',
    name: 'Medium Roast Whole Bean Coffee',
    brand: 'Love Grown',
    rankLabel: 'CLP Clean 16 winner',
    proofTier: 'CLP Clean 16',
    purityScore: 82,
    bestFor: 'Best third-party lowest-contaminant signal found outside Natural Force’s public numeric COAs.',
    description:
      'Clean Label Project lists this product in its coffee Clean 16 / certified products set — a stronger independent screen than brand-only “tested” copy, but still not a public numeric COA.',
    why:
      'Independent contaminant-screen proof: Clean Label Project says its Coffee Category study tested 57 products from 45 top-selling brands across 7,069 data points, including heavy metals, mycotoxins, pesticides, glyphosate/AMPA, phthalates, BPA/BPS, and more. Its Clean Sixteen highlights the 16 products with the lowest contaminant levels; Love Grown coffee products carry CLP certification. Exact lot-level Pb/Cd/As/Hg and mycotoxin values were not public in the CLP product page, so this ranks below public numeric COAs.',
    amazonUrl: amazonSearch('Love Grown Medium Roast Whole Bean Coffee'),
    amazonUkUrl: amazonSearch('Love Grown Medium Roast Whole Bean Coffee', 'uk'),
    sourceUrl: 'https://cleanlabelproject.org/coffee-category-tested-products/',
    sourceLabel: 'Clean Label Project Clean 16 / certification',
    imageUrl: '/images/coffee-products/love-grown-medium-whole-bean.webp',
    category: 'Coffee',
    priceRange: '$$–$$$',
    evidenceLevel: 'High',
    effectSize: 'Lowest-contaminant cohort',
    labName: 'Clean Label Project / Ellipse Analytics',
    reportName: 'Coffee Category Study + CLP Certification listing',
    reportDate: '2025 study / 2026 product listing',
    sample: 'Love Grown Medium Roast Whole Bean Coffee',
    heavyMetalSummary: 'CLP tested heavy metals; product is in certified/Clean 16 set; exact values not public',
    mycotoxinSummary: 'CLP study included mycotoxins; exact product values not public',
    moldYeastSummary: 'Independent contaminant screen; exact mould/yeast values not public',
    testScope: ['CLP Clean 16', 'Heavy metals', 'Mycotoxins', 'Pesticides', 'Glyphosate/AMPA', 'Phthalates', 'BPA/BPS'],
    scoreBreakdown: [
      { label: 'Heavy metals', value: 28, max: 40, note: 'Independent CLP screen, but exact Pb/Cd/As/Hg values not public.' },
      { label: 'Mycotoxins', value: 14, max: 20, note: 'CLP study includes mycotoxins; product-level values not public.' },
      { label: 'Pesticides', value: 14, max: 15, note: 'CLP study includes pesticides and glyphosate/AMPA.' },
      { label: 'Traceability', value: 14, max: 15, note: 'Named product in CLP certification/product listing.' },
      { label: 'Freshness/value', value: 8, max: 10, note: 'Whole bean format; still verify roast date and current lot.' },
    ],
    labResults: [
      { label: 'CLP status', value: 'Clean 16 / certified' },
      { label: 'Products tested', value: '57 coffees / 45 brands' },
      { label: 'Data points', value: '7,069 tests' },
      { label: 'Public exact metals', value: 'Not published' },
      { label: 'Public exact mycotoxins', value: 'Not published' },
    ],
    disclosureGaps: ['Strong independent certification, but still needs public numeric COA values to beat Natural Force exact public PDFs.'],
  },
  {
    id: 'love-grown-decaf-medium-whole-bean-clean-16',
    name: 'Decaf Medium Roast Whole Bean Coffee',
    brand: 'Love Grown',
    rankLabel: 'CLP Clean 16 decaf',
    proofTier: 'CLP Clean 16',
    purityScore: 80,
    bestFor: 'Decaf shoppers who want an independent lowest-contaminant certification signal, while accepting that exact values are not public.',
    description:
      'A decaf Love Grown product in Clean Label Project’s certified coffee set. Better than claim-only decaf, weaker than exact public lab PDFs.',
    why:
      'Independent contaminant-screen proof: Clean Label Project lists Love Grown Decaf Medium Roast Whole Bean Coffee in its certified product set and says the Coffee Category study tested heavy metals, mycotoxins, pesticides, glyphosate/AMPA, phthalates, and bisphenols. Product-level numeric values were not public on the CLP page reviewed.',
    amazonUrl: amazonSearch('Love Grown Decaf Medium Roast Whole Bean Coffee'),
    amazonUkUrl: amazonSearch('Love Grown Decaf Medium Roast Whole Bean Coffee', 'uk'),
    sourceUrl: 'https://cleanlabelproject.org/coffee-category-tested-products/',
    sourceLabel: 'Clean Label Project Clean 16 / certification',
    imageUrl: '/images/coffee-products/love-grown-decaf-whole-bean.webp',
    category: 'Decaf',
    priceRange: '$$–$$$',
    evidenceLevel: 'High',
    effectSize: 'Certified decaf signal',
    labName: 'Clean Label Project / Ellipse Analytics',
    reportName: 'Coffee Category Study + CLP Certification listing',
    reportDate: '2025 study / 2026 product listing',
    sample: 'Love Grown Decaf Medium Roast Whole Bean Coffee',
    heavyMetalSummary: 'CLP tested heavy metals; exact decaf values not public',
    mycotoxinSummary: 'CLP study included mycotoxins; exact decaf values not public',
    moldYeastSummary: 'Independent contaminant screen; exact mould/yeast values not public',
    testScope: ['CLP Clean 16', 'Heavy metals', 'Mycotoxins', 'Pesticides', 'Glyphosate/AMPA', 'Decaf watch'],
    scoreBreakdown: [
      { label: 'Heavy metals', value: 27, max: 40, note: 'Independent CLP screen; exact values not public.' },
      { label: 'Mycotoxins', value: 14, max: 20, note: 'CLP study includes mycotoxins; exact values not public.' },
      { label: 'Pesticides', value: 14, max: 15, note: 'CLP study includes pesticides/glyphosate/AMPA.' },
      { label: 'Traceability', value: 14, max: 15, note: 'Named product in CLP certification/product listing.' },
      { label: 'Freshness/value', value: 7, max: 10, note: 'Whole bean decaf; verify decaf process and roast date.' },
    ],
    labResults: [
      { label: 'CLP status', value: 'Clean 16 / certified' },
      { label: 'Public exact metals', value: 'Not published' },
      { label: 'Public exact mycotoxins', value: 'Not published' },
      { label: 'Decaf solvent info', value: 'Still verify' },
    ],
    disclosureGaps: ['Needs exact numeric COA and decaf-process disclosure on the product page.'],
  },
  {
    id: 'love-grown-dark-roast-whole-bean-clean-16',
    name: 'Dark Roast Whole Bean Coffee',
    brand: 'Love Grown',
    rankLabel: 'CLP certified dark roast',
    proofTier: 'CLP Clean 16',
    purityScore: 78,
    bestFor: 'A dark-roast watch pick with third-party certification, not exact public contaminant numbers.',
    description:
      'Clean Label Project certified Love Grown dark roast. It belongs above claim-only brands, but below products that publish exact lot-level lab PDFs.',
    why:
      'Independent contaminant-screen proof: Clean Label Project lists Love Grown Dark Roast Whole Bean Coffee with CLP certification. The study included heavy metals and mycotoxins, but product-level numeric values were not public on the reviewed listing.',
    amazonUrl: amazonSearch('Love Grown Dark Roast Whole Bean Coffee'),
    amazonUkUrl: amazonSearch('Love Grown Dark Roast Whole Bean Coffee', 'uk'),
    sourceUrl: 'https://cleanlabelproject.org/coffee-category-tested-products/',
    sourceLabel: 'Clean Label Project certification',
    imageUrl: '/images/coffee-products/love-grown-dark-whole-bean.webp',
    category: 'Coffee',
    priceRange: '$$–$$$',
    evidenceLevel: 'High',
    effectSize: 'Certified dark roast',
    labName: 'Clean Label Project / Ellipse Analytics',
    reportName: 'Coffee Category Study + CLP Certification listing',
    reportDate: '2025 study / 2026 product listing',
    sample: 'Love Grown Dark Roast Whole Bean Coffee',
    heavyMetalSummary: 'CLP tested heavy metals; exact dark-roast values not public',
    mycotoxinSummary: 'CLP study included mycotoxins; exact values not public',
    moldYeastSummary: 'Independent contaminant screen; exact mould/yeast values not public',
    testScope: ['CLP certified', 'Heavy metals', 'Mycotoxins', 'Pesticides', 'Glyphosate/AMPA'],
    scoreBreakdown: [
      { label: 'Heavy metals', value: 26, max: 40, note: 'Independent CLP certification; exact values not public.' },
      { label: 'Mycotoxins', value: 14, max: 20, note: 'CLP study includes mycotoxins.' },
      { label: 'Pesticides', value: 14, max: 15, note: 'CLP study includes pesticides/glyphosate/AMPA.' },
      { label: 'Traceability', value: 14, max: 15, note: 'Named product in CLP product listing.' },
      { label: 'Freshness/value', value: 6, max: 10, note: 'Dark roast; acrylamide number not public.' },
    ],
    labResults: [
      { label: 'CLP status', value: 'Certified' },
      { label: 'Public exact metals', value: 'Not published' },
      { label: 'Public exact mycotoxins', value: 'Not published' },
      { label: 'Acrylamide', value: 'Not published' },
    ],
    disclosureGaps: ['Needs public numeric COA and roasted acrylamide value.'],
  },

  {
    id: 'partners-brooklyn-mainstay-lab-claim-watch',
    name: 'Brooklyn Mainstay Blend',
    brand: 'Partners Coffee',
    rankLabel: 'lab-tested, no PDFs found',
    proofTier: 'Public test claim',
    purityScore: 58,
    bestFor: 'A mainstream specialty-roaster candidate with a public lab-testing statement, but not enough disclosure to outrank CLP or exact-COA products.',
    description:
      'Partners publicly says its Mainstay coffees were sent to a food-safety lab and that no heavy metals or mycotoxins were detected. Good signal, but still not a product-level COA with lab/date/limits.',
    why:
      'Disclosure check: Partners says all Mainstay coffees were lab-tested for lead, cadmium, arsenic, mercury, and certain mycotoxins, and reports “no heavy metals or mycotoxins were detected.” Public product-level PDFs, reporting limits, lab name, sample IDs, and dates were not found on the reviewed pages, so this stays in watchlist rather than the exact-COA tier.',
    amazonUrl: amazonSearch('Partners Coffee Brooklyn Mainstay Blend'),
    amazonUkUrl: amazonSearch('Partners Coffee Brooklyn Mainstay Blend', 'uk'),
    sourceUrl: 'https://www.partnerscoffee.com/blogs/education/heavy-metals-mycotoxins-in-coffee',
    sourceLabel: 'Partners lab-testing statement reviewed',
    imageUrl: '/images/coffee-products/partners-brooklyn.jpg',
    category: 'Watchlist',
    priceRange: '$$–$$$',
    evidenceLevel: 'Moderate',
    effectSize: 'Lab claim; ND reported',
    labName: 'Food-safety lab not named publicly on reviewed page',
    reportName: 'Mainstay heavy metals + mycotoxins test statement',
    reportDate: 'Date not public on reviewed page',
    sample: 'Partners Mainstay coffees, including Brooklyn line',
    heavyMetalSummary: 'Brand says no Pb/Cd/As/Hg detected; exact values/limits not public',
    mycotoxinSummary: 'Brand says no mycotoxins detected; exact analytes/limits not public',
    moldYeastSummary: 'No public mould/yeast CFU value found',
    testScope: ['Claims heavy metals tested', 'Claims mycotoxins tested', 'Mainstay lineup', 'No public COA PDF found'],
    scoreBreakdown: [
      { label: 'Heavy metals', value: 15, max: 40, note: 'ND claim for priority metals, but no PDF, lab name, date, or detection limits.' },
      { label: 'Mycotoxins', value: 9, max: 20, note: 'ND claim for certain mycotoxins, but no analyte table.' },
      { label: 'Pesticides', value: 4, max: 15, note: 'No pesticide/glyphosate panel found in reviewed statement.' },
      { label: 'Traceability', value: 10, max: 15, note: 'Lineup named, but product/batch-level traceability missing.' },
      { label: 'Freshness/value', value: 8, max: 10, note: 'Fresh specialty roaster; proof score capped by missing COA.' },
    ],
    labResults: [
      { label: 'Heavy metals', value: 'Brand says ND' },
      { label: 'Mycotoxins', value: 'Brand says ND' },
      { label: 'Public COA PDF', value: 'Not found' },
      { label: 'Detection limits', value: 'Not public' },
    ],
    disclosureGaps: ['Needs the actual lab PDF with lab name, report date, sample ID, analytes, values, and reporting limits.'],
  },
  {
    id: 'lifeboost-grata-medium-claim-watch',
    name: 'Grata Medium Roast',
    brand: 'Lifeboost Coffee',
    rankLabel: 'claim-only watchlist',
    proofTier: 'Public test claim',
    purityScore: 55,
    bestFor: 'A popular low-acid/organic option to investigate, but not an A-tier product until exact numbers are public.',
    description:
      'The product page claims third-party testing for mycotoxins, heavy metals, pesticides, glyphosate, and 450+ toxins — useful signal, but not the same as public numeric COAs.',
    why:
      'Disclosure check: Lifeboost Grata Medium Roast publicly claims third-party testing for mycotoxins, heavy metals, pesticides, glyphosate, and 450+ toxins, plus USDA organic, single-origin, shade-grown beans. Public exact lead/cadmium/arsenic/mercury or ochratoxin/aflatoxin numbers were not found on the product page reviewed.',
    amazonUrl: amazonSearch('Lifeboost Grata Medium Roast Coffee'),
    amazonUkUrl: amazonSearch('Lifeboost Grata Medium Roast Coffee', 'uk'),
    sourceUrl: 'https://lifeboostcoffee.com/products/medium-roast',
    sourceLabel: 'Public product claims reviewed',
    imageUrl: '/images/coffee-products/lifeboost-grata-medium.png',
    category: 'Watchlist',
    priceRange: '$$–$$$',
    evidenceLevel: 'Moderate',
    effectSize: 'Claims tests; no values',
    heavyMetalSummary: 'Claims tested; exact public values not found',
    mycotoxinSummary: 'Claims tested; exact public values not found',
    moldYeastSummary: 'Claims toxin-tested; exact public values not found',
    testScope: ['Claims heavy metals', 'Claims mycotoxins', 'Claims pesticides', 'Claims glyphosate', 'USDA Organic'],
    scoreBreakdown: [
      { label: 'Heavy metals', value: 12, max: 40, note: 'Testing claimed, numbers not public on reviewed page.' },
      { label: 'Mycotoxins', value: 7, max: 20, note: 'Testing claimed, numbers not public on reviewed page.' },
      { label: 'Pesticides', value: 10, max: 15, note: 'Organic plus pesticide/glyphosate testing claim.' },
      { label: 'Traceability', value: 11, max: 15, note: 'Single-origin/shade-grown claims.' },
      { label: 'Freshness/value', value: 7, max: 10, note: 'Low-acid/freshness positioning, but score capped by missing COA numbers.' },
    ],
    labResults: [
      { label: 'Public exact heavy metals', value: 'Not found' },
      { label: 'Public exact mycotoxins', value: 'Not found' },
      { label: 'Claims testing', value: '450+ toxins' },
      { label: 'Organic status', value: 'USDA Organic claimed' },
    ],
    disclosureGaps: ['Needs public batch COA with exact lead, cadmium, arsenic, mercury, ochratoxin A, aflatoxins, and reporting limits.'],
  },
  {
    id: 'purity-flow-medium-roast-disclosure-watch',
    name: 'FLOW Medium Roast',
    brand: 'Purity Coffee',
    rankLabel: 'public lab page, not COA',
    proofTier: 'Public test claim',
    purityScore: 61,
    bestFor: 'Buyers comparing clean-coffee claims who want acrylamide and roast-chemistry context, while still requiring a current batch COA before promotion.',
    description:
      'Purity publishes a useful independent-lab results page with numeric acrylamide, OTA, mould/yeast, lead, and cadmium context. That is stronger than vague “tested” copy — but still not the same as a downloadable current-lot COA.',
    why:
      'Disclosure check: Purity’s independent-laboratory-tests page says 14/25 roasted coffees in its survey were above 200 µg/kg acrylamide; its anonymized table includes 1053, 805, 718, 689, 374, 280, 260, and 220 µg/kg examples. The Purity row lists acrylamide 196 µg/kg, Agtron 59, ochratoxin A <0.2 µg/kg, mould/yeast <10/<10, lead 0.03 ppm, and cadmium 0.002 ppm. Useful public numbers, but competitors are anonymized and raw current batch PDFs were not public on the product page reviewed.',
    amazonUrl: amazonSearch('Purity Coffee FLOW Medium Roast Whole Bean'),
    amazonUkUrl: amazonSearch('Purity Coffee FLOW Medium Roast Whole Bean', 'uk'),
    sourceUrl: 'https://puritycoffee.com/pages/independent-laboratory-tests',
    sourceLabel: 'Public independent lab-results page reviewed',
    imageUrl: '/images/coffee-products/purity-flow-wholebean.png',
    category: 'Watchlist',
    priceRange: '$$–$$$',
    evidenceLevel: 'Moderate',
    effectSize: 'Public numbers; no raw COA',
    labName: 'Silliker-Merieux / University of Porto / UFRJ, via Purity lab page',
    reportName: 'Independent Laboratory Tests survey table',
    reportDate: '2016–present survey page; current lot not shown',
    sample: 'Purity Coffee 100% Organic / FLOW context, not batch-specific',
    heavyMetalSummary: 'Pb 0.03 ppm, Cd 0.002 ppm; As/Hg not public in reviewed page',
    mycotoxinSummary: 'OTA <0.2 µg/kg; aflatoxin values not product-level public in reviewed table',
    moldYeastSummary: 'Mould/yeast <10/<10; acrylamide 196 µg/kg; Agtron 59',
    testScope: ['Acrylamide', 'Agtron roast level', 'Ochratoxin A', 'Mould/yeast', 'Lead', 'Cadmium', 'Organic certification', 'Bird Friendly certification'],
    scoreBreakdown: [
      { label: 'Heavy metals', value: 18, max: 40, note: 'Lead and cadmium numbers are public; arsenic/mercury and current batch PDF were not found.' },
      { label: 'Mycotoxins', value: 12, max: 20, note: 'OTA and mould/yeast numbers are public; product-level aflatoxin values and raw COA still missing.' },
      { label: 'Pesticides', value: 12, max: 15, note: 'USDA Organic + Bird Friendly; pesticide testing discussed, but current lot table not public.' },
      { label: 'Traceability', value: 10, max: 15, note: 'Labs and methods are described, but the reviewed page is not a bag/lot-specific COA.' },
      { label: 'Freshness/value', value: 9, max: 10, note: 'Acrylamide 196 µg/kg and Agtron 59 add useful roast-specific context.' },
    ],
    labResults: [
      { label: 'Acrylamide', value: '196 µg/kg (Purity row)' },
      { label: 'Survey acrylamide flag', value: '14/25 roasted coffees >200 µg/kg' },
      { label: 'Agtron roast level', value: '59' },
      { label: 'Ochratoxin A', value: '<0.2 µg/kg' },
      { label: 'Mould / yeast', value: '<10 / <10' },
      { label: 'Lead', value: '0.03 ppm' },
      { label: 'Cadmium', value: '0.002 ppm' },
      { label: 'Organic status', value: 'USDA Organic claimed' },
      { label: 'Bird Friendly', value: 'Smithsonian claimed' },
    ],
    disclosureGaps: ['Needs a current downloadable batch COA before promotion.', 'Arsenic, mercury, aflatoxin, pesticide, glyphosate, report date, and lot-specific values were not public on the reviewed product page.', 'Competitor acrylamide examples are anonymized, so do not use them for direct brand ranking.'],
  },
  {
    id: 'buddha-beans-coa-request-watch',
    name: 'CBD / CBG Coffee COA Program',
    brand: 'Buddha Beans Coffee Co.',
    rankLabel: 'public COA page, broken PDFs',
    proofTier: 'Missing numbers',
    purityScore: 38,
    bestFor: 'A useful audit example: the public page claims per-batch COAs, but reviewed PDF links returned 404, so it gets downgraded hard until files resolve.',
    description:
      'Buddha Beans now claims an open COA archive and full contaminant panel, but the reviewed PDF links returned 404. That is not a verified receipt; it is a red-flag watchlist entry until fixed.',
    why:
      'Disclosure check: Buddha Beans says every batch is tested for heavy metals, pesticides, microbial contaminants, residual solvents, and mycotoxins, and lists public PDF links by batch. Verification problem: sampled PDF links such as coa-2026-05-costa-rica.pdf and coa-2026-04-colombia.pdf returned 404 during review, so the ranking treats the COA archive as unverified/broken rather than proven.',
    amazonUrl: amazonSearch('Buddha Beans Colombia CBD Coffee'),
    amazonUkUrl: amazonSearch('Buddha Beans Colombia CBD Coffee', 'uk'),
    sourceUrl: 'https://buddhabeanscoffee.com/pages/lab-results',
    sourceLabel: 'Lab-results page reviewed; PDF links failed',
    imageUrl: '/images/coffee-products/buddha-beans-colombia.jpg',
    category: 'Watchlist',
    priceRange: '$$–$$$',
    evidenceLevel: 'Emerging',
    effectSize: 'Broken COA archive',
    heavyMetalSummary: 'Claims Pb/As/Cd/Hg testing; sampled COA PDFs returned 404',
    mycotoxinSummary: 'Claims OTA + aflatoxins testing; sampled COA PDFs returned 404',
    moldYeastSummary: 'Claims microbials; sampled COA PDFs returned 404',
    testScope: ['Claims heavy metals', 'Claims pesticides', 'Claims microbials', 'Claims mycotoxins', 'Broken PDF verification'],
    labResults: [
      { label: 'Public exact heavy metals', value: 'PDF links 404' },
      { label: 'Public exact mycotoxins', value: 'PDF links 404' },
      { label: 'THC / cannabinoids', value: 'COA program claimed' },
      { label: 'Verification status', value: 'Unverified archive' },
    ],
    disclosureGaps: ['Fix public PDF links or publish downloadable COAs before this can compete with exact public COA coffees.'],
  },
  {
    id: 'coa-reading-checklist',
    name: 'COA Reading Checklist',
    brand: 'Cleanest Coffee',
    rankLabel: 'buyer tool',
    proofTier: 'Buyer tool',
    purityScore: 100,
    bestFor: 'Avoiding expensive “clean” coffee that cannot show exact lab receipts.',
    description:
      'A practical filter for shopping: if the brand cannot show the lab, batch, date, analytes, units, and limits, do not treat it like proof.',
    why:
      'Exact lab-test standard: require lead, cadmium, arsenic, mercury, ochratoxin A, aflatoxins, pesticide screen, glyphosate if claimed, yeast/mould, acrylamide for roasted coffee, sample/batch ID, report date, lab name, and units. “Tested” is not a result.',
    amazonUrl: '/blog/clean-coffee-buying-checklist',
    imageUrl: '/images/coffee/coffee-lab-cupping.jpg',
    category: 'Testing',
    priceRange: 'Free',
    evidenceLevel: 'High',
    effectSize: 'Buyer filter',
    testScope: ['Lab name', 'Batch/sample ID', 'Report date', 'Analytes', 'Units', 'Reporting limits', 'Current lot match'],
    labResults: [
      { label: 'Pass', value: 'PDF/COA with numeric values' },
      { label: 'Caution', value: 'Claims without exact numbers' },
      { label: 'Fail', value: 'No lab/date/batch/analytes' },
    ],
  },
  {
    id: 'whole-bean-burr-grinder',
    name: 'Whole-bean + burr grinder rule',
    brand: 'Brewing standard',
    rankLabel: 'freshness rule',
    proofTier: 'Buyer tool',
    purityScore: 70,
    bestFor: 'Protecting freshness and taste after you have already picked a clean, tested bag.',
    description:
      'Not a purity lab test, but it protects freshness once you pick a clean, tested bag. Pre-ground coffee is where good beans go to fade.',
    why:
      'Freshness standard: buy whole bean, check roast date, grind before brewing, and keep the bag sealed. A perfect COA does not rescue stale coffee.',
    amazonUrl: amazonSearch('conical burr coffee grinder'),
    amazonUkUrl: amazonSearch('conical burr coffee grinder', 'uk'),
    imageUrl: '/images/coffee/espresso-pour.jpg',
    category: 'Brewing',
    priceRange: '$–$$',
    evidenceLevel: 'Moderate',
    effectSize: 'Freshness upgrade',
    testScope: ['Roast date', 'Whole bean', 'Fresh grind', 'Storage'],
    labResults: [
      { label: 'Purity impact', value: 'Indirect' },
      { label: 'Taste impact', value: 'High' },
    ],
  },
]
