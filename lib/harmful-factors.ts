export interface HarmfulFactor {
  rank: number
  factor: string
  effectSize: string
  evidenceLevel: string
  tier: 'critical' | 'significant' | 'moderate' | 'low'
}

export const HARMFUL_FACTORS: HarmfulFactor[] = [
  { rank: 1, factor: 'Red and processed meat', effectSize: 'OR 5.19 for relapse (highest tertile)', evidenceLevel: 'Prospective cohort; dose-response meta-analysis', tier: 'critical' },
  { rank: 2, factor: 'Chronic psychological stress', effectSize: 'HR 2.8 for exacerbation (long-term stress)', evidenceLevel: 'Prospective cohort (Levenstein 2000)', tier: 'critical' },
  { rank: 3, factor: 'Alcohol consumption', effectSize: 'OR 2.71 for relapse', evidenceLevel: 'Prospective cohort (Jowett 2004)', tier: 'critical' },
  { rank: 4, factor: 'Sulfur/sulfate-rich foods', effectSize: 'OR 2.6\u20132.76 for relapse', evidenceLevel: 'Prospective cohort; mechanistic studies', tier: 'critical' },
  { rank: 5, factor: 'Sleep deprivation or excess', effectSize: 'HR 1.51 (short); HR 2.05 (>9h) for UC risk', evidenceLevel: 'NHS I & II prospective cohort', tier: 'critical' },
  { rank: 6, factor: 'Ultra-processed foods', effectSize: 'HR 1.82 for IBD (\u22655 servings/day)', evidenceLevel: 'PURE study (116,087 adults); Manitoba study', tier: 'significant' },
  { rank: 7, factor: 'Smoking cessation', effectSize: 'Triggers UC onset; former smokers highest risk', evidenceLevel: 'Multiple meta-analyses; highest-tier evidence', tier: 'significant' },
  { rank: 8, factor: 'Emulsifiers (CMC, polysorbate 80)', effectSize: 'Disrupts mucus layer, shifts microbiota; human RCT confirming harm', evidenceLevel: 'Chassaing et al. Nature 2015; human RCT 2022', tier: 'significant' },
  { rank: 9, factor: 'Air pollution (PM2.5, NO\u2082)', effectSize: 'HR 1.06\u20131.20 per IQR; MR OR 3.6 for PM2.5', evidenceLevel: 'UK Biobank; Mendelian randomization', tier: 'significant' },
  { rank: 10, factor: 'High omega-6 fatty acid intake', effectSize: 'Increased flare risk on aminosalicylates', evidenceLevel: 'Cohort + Mendelian randomization', tier: 'significant' },
  { rank: 11, factor: 'Western/high-fat dietary pattern', effectSize: 'Mucosal barrier dysfunction via NF-\u03BAB', evidenceLevel: 'EPIC cohort; mechanistic animal studies', tier: 'moderate' },
  { rank: 12, factor: 'Childhood antibiotic exposure', effectSize: 'UC RR 1.23; IBD RR 1.42', evidenceLevel: 'Meta-analysis of 10 studies (St\u00F8rdal 2026)', tier: 'moderate' },
  { rank: 13, factor: 'Refined sugars and SSBs', effectSize: 'HR 1.51 for IBD (>1 SSB/day)', evidenceLevel: 'UK Biobank; animal models', tier: 'moderate' },
  { rank: 14, factor: 'Frequent NSAID use', effectSize: 'HR 1.87 (\u226515 days/month)', evidenceLevel: 'NHS; conflicting overall evidence', tier: 'moderate' },
  { rank: 15, factor: 'Artificial sweeteners', effectSize: 'Promote Proteobacteria, disrupt tight junctions', evidenceLevel: 'Strong preclinical; IOIBD guidelines recommend limiting', tier: 'moderate' },
  { rank: 16, factor: 'Oral contraceptives', effectSize: 'OR ~1.30 for UC risk (current users)', evidenceLevel: 'Meta-analysis of 12 studies', tier: 'moderate' },
  { rank: 17, factor: 'Food additives (carrageenan, maltodextrin, TiO\u2082)', effectSize: 'Mucosal disruption, bacterial translocation', evidenceLevel: 'Moderate preclinical; IOIBD guidelines', tier: 'moderate' },
  { rank: 18, factor: 'C. difficile/CMV superinfection', effectSize: 'Triggers severe flares, worsens prognosis', evidenceLevel: 'Clinical cohort data', tier: 'moderate' },
  { rank: 19, factor: 'Anxiety and depression', effectSize: 'Brain-gut axis dysfunction; reduced treatment adherence', evidenceLevel: 'Cross-sectional; meta-analyses', tier: 'moderate' },
  { rank: 20, factor: 'Psychological trauma/PTSD', effectSize: '4.3\u00D7 exacerbation; 13\u00D7 flare risk in IBD-PTSD', evidenceLevel: 'Population-based (Fuller-Thomson 2015; Taft 2022)', tier: 'moderate' },
  { rank: 21, factor: 'Sedentary behavior', effectSize: 'Inverse association with IBD risk', evidenceLevel: 'Systematic reviews (indirect)', tier: 'low' },
  { rank: 22, factor: 'Shift work/circadian disruption', effectSize: 'Increased colitis severity in animal models', evidenceLevel: 'Animal + observational human data', tier: 'low' },
  { rank: 23, factor: 'Dairy', effectSize: 'Individual-dependent; no consistent population harm', evidenceLevel: 'Mixed; Jowett found no association', tier: 'low' },
  { rank: 24, factor: 'Spicy foods, carbonated beverages', effectSize: 'Patient-reported triggers', evidenceLevel: 'Very low evidence', tier: 'low' },
  { rank: 25, factor: 'Gluten (non-celiac)', effectSize: 'No RCTs; likely reflects FODMAP sensitivity', evidenceLevel: 'Very low evidence', tier: 'low' },
]
