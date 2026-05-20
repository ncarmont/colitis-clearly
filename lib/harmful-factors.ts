export interface HarmfulFactor {
  rank: number
  factor: string
  effectSize: string
  evidenceLevel: string
  tier: 'critical' | 'significant' | 'moderate' | 'low'
}

export const HARMFUL_FACTORS: HarmfulFactor[] = [
  { rank: 1, factor: 'No heavy-metal COA', effectSize: 'Unknown lead/cadmium/arsenic/mercury status', evidenceLevel: 'Critical buyer-transparency failure', tier: 'critical' },
  { rank: 2, factor: 'No mycotoxin testing', effectSize: 'Unknown ochratoxin A / aflatoxin status', evidenceLevel: 'Critical for clean-coffee claims', tier: 'critical' },
  { rank: 3, factor: 'Mystery decaf process', effectSize: 'Solvent ambiguity', evidenceLevel: 'Significant transparency failure', tier: 'significant' },
  { rank: 4, factor: 'No roast date', effectSize: 'Freshness impossible to verify', evidenceLevel: 'Significant quality signal', tier: 'significant' },
  { rank: 5, factor: 'Vague “toxin free” marketing', effectSize: 'Claims exceed evidence', evidenceLevel: 'Moderate-to-critical depending on missing documentation', tier: 'moderate' },
]
