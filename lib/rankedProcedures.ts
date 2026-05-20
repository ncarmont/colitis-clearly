export interface RankedProcedure {
  rank: number
  name: string
  brandName?: string
  type: string
  category: string
  filterCategory: 'Testing' | 'Freshness'
  statDisplay: string
  statLabel: string
  trialRef: string
  evidenceLevel: 'High' | 'Moderate' | 'Emerging'
  imageUrl: string
  href: string
  subMethods?: string[]
  ctaLabel?: string
}

export const RANKED_PROCEDURES: RankedProcedure[] = [
  { rank: 1, name: 'Batch-level heavy-metal COA', type: 'Lab proof', category: 'Heavy metals', filterCategory: 'Testing', statDisplay: '40 pts', statLabel: 'lead/cadmium/arsenic/mercury proof', trialRef: 'Current third-party COA with numeric heavy-metal results, batch ID, lab name, date, and detection limits.', evidenceLevel: 'High', imageUrl: '/images/coffee/coffee-lab-cupping.jpg', href: '/rankings', subMethods: ['Lead, cadmium, arsenic, mercury', 'Numeric result > vague pass/fail', 'Must connect to current lot'] },
  { rank: 2, name: 'Mycotoxin panel', type: 'Mold claim audit', category: 'Mycotoxins', filterCategory: 'Testing', statDisplay: '20 pts', statLabel: 'ochratoxin A + aflatoxin evidence', trialRef: 'A serious mold-free claim should show ochratoxin A and aflatoxin testing, not just a badge on a bag.', evidenceLevel: 'High', imageUrl: '/images/coffee/coffee-beans-close.jpg', href: '/blog/mycotoxin-free-coffee-marketing-bs', subMethods: ['Ochratoxin A', 'Aflatoxins', 'Lab/date/batch required'] },
  { rank: 3, name: 'Organic + pesticide controls', type: 'Residue control', category: 'Pesticides', filterCategory: 'Testing', statDisplay: '15 pts', statLabel: 'pesticide-risk floor', trialRef: 'Organic certification helps, but residue testing plus transparent sourcing is stronger than organic alone.', evidenceLevel: 'Moderate', imageUrl: '/images/coffee/espresso-pour.jpg', href: '/blog/clean-coffee-buying-checklist', subMethods: ['Organic certification', 'Residue testing when available', 'Origin transparency'] },
  { rank: 4, name: 'Traceable origin + process', type: 'Supply-chain clarity', category: 'Origin', filterCategory: 'Freshness', statDisplay: '15 pts', statLabel: 'origin/process transparency', trialRef: 'Country alone is thin. Region, farm/co-op, processing method, harvest context, and decaf method create a real audit trail.', evidenceLevel: 'Moderate', imageUrl: '/images/coffee/coffee-cup.jpg', href: '/research/biomarkers', subMethods: ['Region or farm/co-op', 'Washed/natural process', 'Decaf method if relevant'] },
  { rank: 5, name: 'Roast freshness + value', type: 'Cup quality', category: 'Freshness', filterCategory: 'Freshness', statDisplay: '10 pts', statLabel: 'freshness and price sanity', trialRef: 'Roast date, whole-bean format, packaging, taste, brew performance, and price per cup decide whether clean proof is worth buying again.', evidenceLevel: 'High', imageUrl: '/images/coffee/beans-roast.jpg', href: '/blog/clean-coffee-buying-checklist', subMethods: ['Roast date beats best-by date', 'Whole bean preferred', 'Price per cup matters'] },
]
