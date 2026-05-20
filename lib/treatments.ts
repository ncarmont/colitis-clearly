export type Treatment = {
  id: number
  rank: number
  name: string
  brandNames?: string
  className: string
  route: string
  severity: string
  trials: string
  responseRate: string
  cleanScore: string
  keySideEffects: string
  yearApproved: string
  notes: string
  imageUrl: string
  imageAlt: string
}

export const TREATMENTS: Treatment[] = [
  {
    id: 1,
    rank: 1,
    name: 'A-tier: batch-level heavy-metal COA coffee',
    brandNames: 'Lead, cadmium, arsenic, mercury disclosed for the current lot',
    className: 'Best default buy',
    route: 'Whole bean; roast date and batch ID visible before purchase',
    severity: 'Best choice when coffee purity and heavy-metal accountability are the priority',
    trials: 'Current third-party certificate of analysis with numeric lead, cadmium, arsenic, mercury results; lab name; sample date; batch/lot link; detection limits; plus mycotoxin panel',
    responseRate: 'Highest confidence: results are numeric, current, batch-linked, and independently testable',
    cleanScore: '90–100 / A-tier',
    keySideEffects: 'Costs more; brands may rotate lots, so old COAs do not bless new bags',
    yearApproved: 'Re-check every batch',
    notes: 'This is the scientific gold standard. If a coffee claims purity but cannot show lead/cadmium/arsenic/mercury numbers for the lot being sold, it does not belong in A-tier. Period.',
    imageUrl: '/images/coffee/coffee-lab-cupping.jpg',
    imageAlt: 'Actual cups of coffee during a tasting and evaluation setup',
  },
  {
    id: 2,
    rank: 2,
    name: 'B-tier: published contaminant-tested coffee',
    brandNames: 'Heavy metals or mycotoxins disclosed, but not perfectly batch-linked',
    className: 'Strong practical option',
    route: 'Whole bean preferred; origin and roast date disclosed',
    severity: 'Good option when evidence exists but the reporting is not fully forensic',
    trials: 'Third-party testing is published, but may be periodic, brand-level, or missing one transparency field such as detection limit, batch ID, or exact sample date',
    responseRate: 'Moderate-to-high confidence: real testing exists, but not enough to audit every bag',
    cleanScore: '75–89 / B-tier',
    keySideEffects: 'Can still be good coffee; just not the cleanest scientific proof tier',
    yearApproved: 'Update when new reports publish',
    notes: 'This tier is for brands doing meaningful testing but not giving the full lab-report trail. Respectable, but not the crown.',
    imageUrl: '/images/coffee/beans-roast.jpg',
    imageAlt: 'Fresh roasted whole coffee beans',
  },
  {
    id: 3,
    rank: 3,
    name: 'C-tier: organic traceable specialty coffee',
    brandNames: 'Organic, single-origin, transparent sourcing — no full heavy-metal panel',
    className: 'Organic transparency tier',
    route: 'Whole bean; named origin; roast date visible',
    severity: 'Useful if pesticide reduction and freshness matter but heavy-metal certainty is unavailable',
    trials: 'Organic certification, traceable origin, freshness controls, and ideally periodic contaminant screening',
    responseRate: 'Moderate confidence: pesticide standards improve, heavy metals remain unproven',
    cleanScore: '60–74 / C-tier',
    keySideEffects: 'Organic does not prove low lead, cadmium, arsenic, or mercury',
    yearApproved: 'Certification and harvest change over time',
    notes: 'Organic is not a forcefield. Heavy metals come from soil and environment. Organic plus testing is science; organic alone is only a partial filter.',
    imageUrl: '/images/coffee/espresso-pour.jpg',
    imageAlt: 'Coffee being poured into a cup',
  },
  {
    id: 4,
    rank: 4,
    name: 'D-tier: fresh specialty coffee without contaminant reports',
    brandNames: 'Great roaster, good origin story, no COA',
    className: 'Freshness-first tier',
    route: 'Whole bean within roughly 2–21 days of roast',
    severity: 'Best for taste-first buyers who accept unknown contaminant status',
    trials: 'Roast date, origin transparency, processing details, and direct-trade claims; no published heavy-metal/mycotoxin proof',
    responseRate: 'High for flavor freshness; low for purity verification',
    cleanScore: '40–59 / D-tier',
    keySideEffects: 'Could be excellent coffee and still fail the purity-evidence test',
    yearApproved: 'Roast date matters every bag',
    notes: 'Fresh is good. Fresh is not the same as tested. Do not let a beautiful tasting note distract you from missing heavy-metal data.',
    imageUrl: '/images/coffee/coffee-cup.jpg',
    imageAlt: 'A real cup of coffee on a table',
  },
  {
    id: 5,
    rank: 5,
    name: 'F-tier: vague “clean” or “mold-free” coffee',
    brandNames: 'Loud purity claims, no lab receipts',
    className: 'Marketing-risk tier',
    route: 'Often pre-ground, old stock, or unclear lot history',
    severity: 'Avoid when buying for coffee purity',
    trials: 'No current COA, no numeric heavy-metal results, no lab name, no batch ID, no detection limits',
    responseRate: 'Low confidence: claim volume exceeds evidence',
    cleanScore: '0–39 / F-tier',
    keySideEffects: 'Stale beans, vague sourcing, inflated toxin language, no audit trail',
    yearApproved: 'Do not trust best-by dates',
    notes: 'If “clean” is printed bigger than the lab report, that is not a standard. That is packaging with a microphone.',
    imageUrl: '/images/coffee/coffee-beans-close.jpg',
    imageAlt: 'Close-up of whole roasted coffee beans',
  }
]
