export const BASE_URL = 'https://best-coffee-ranked.vercel.app'

export const SITE_NAME = 'Cleanest Coffee'

export const SITE_TAGLINE = 'Coffee without the chemical nonsense'

export const MEDICAL_DISCLAIMER =
  'Educational content only. Coffee, caffeine, pregnancy, reflux, anxiety, sleep, blood pressure, gut symptoms, and medication interactions should be discussed with a qualified professional when relevant.'

export const HOME_STATS = [
  {
    value: 0,
    suffix: '',
    label: 'mold hype tolerated',
    detail: 'Clean coffee means evidence, testing, and transparency — not wellness cosplay.',
  },
  {
    value: 3,
    suffix: '',
    label: 'things that matter',
    detail: 'Bean quality, contaminant testing, and roast freshness beat pretty bags.',
  },
  {
    value: 1,
    suffix: '',
    label: 'simple mission',
    detail: 'Find the cleanest coffee worth drinking and call out the garbage.',
  },
] as const

export const QUICK_NAV_CARDS = [
  {
    title: 'Rankings',
    href: '/rankings',
    description: 'Coffee brands ranked by cleanliness, transparency, testing, taste, and value.',
  },
  {
    title: 'Blog',
    href: '/blog',
    description: 'No-BS explainers on mold, mycotoxins, pesticides, decaf solvents, caffeine, and roast quality.',
  },
  {
    title: 'Research',
    href: '/research',
    description: 'Scientific context behind contaminants, coffee chemistry, and what actually matters.',
  },
  {
    title: 'Shop',
    href: '/shop',
    description: 'Shortlist of coffees and brewing gear that deserve your money.',
  },
] as const

export const RESOURCE_LIBRARY = [
  {
    title: 'FDA Food Guidance',
    href: 'https://www.fda.gov/food',
    description: 'Food safety, contaminants, and consumer protection guidance.',
  },
  {
    title: 'EFSA Chemical Contaminants',
    href: 'https://www.efsa.europa.eu/en/topics/topic/chemical-contaminants',
    description: 'European scientific opinions on contaminants in food and drink.',
  },
  {
    title: 'Specialty Coffee Association',
    href: 'https://sca.coffee',
    description: 'Coffee quality, brewing standards, and specialty coffee education.',
  },
  {
    title: 'PubMed Coffee Research',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=coffee',
    description: 'Primary research on coffee, caffeine, contaminants, and health outcomes.',
  },
] as const
