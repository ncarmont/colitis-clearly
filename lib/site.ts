export const BASE_URL = 'https://colitis-clearly.vercel.app'

export const SITE_NAME = 'Colitis Clearly'

export const SITE_TAGLINE = 'Evidence-Based UC Science'

export const MEDICAL_DISCLAIMER =
  'Educational science summaries only. Ulcerative colitis symptoms, medication changes, and flare decisions should be reviewed with your gastroenterologist or treating clinician.'

export const HOME_STATS = [
  {
    value: 22,
    suffix: '+',
    label: 'science-ranked treatments',
    detail: 'From mesalamine and rectal therapy to biologics, small molecules, and surgery.',
  },
  {
    value: 5,
    suffix: '',
    label: 'decision categories',
    detail: '5-ASA, biologics, small molecules, steroids, and other rescue or structural options.',
  },
  {
    value: 74,
    suffix: '%',
    label: 'top response rate (upadacitinib week 8)',
    detail: 'The highest clinical response signal from a pivotal RCT in moderate-to-severe UC.',
  },
] as const

export const QUICK_NAV_CARDS = [
  {
    title: 'Treatments',
    href: '/rankings',
    description: 'Compare 5-ASA drugs, biologics, JAK inhibitors, S1P modulators, steroids, and surgery in one evidence table.',
  },
  {
    title: 'Flare Management',
    href: '/blog/uc-flare-management',
    description: 'What to track during a flare, when to call your team, and which red flags need urgent care.',
  },
  {
    title: 'Diet & Lifestyle',
    href: '/blog/uc-diet-guide',
    description: 'See where diet can improve symptoms, where evidence is weak, and how to avoid overpromising food cures.',
  },
  {
    title: 'Research',
    href: '/research',
    description: 'Follow pivotal trials, biomarkers, pathophysiology, and the next wave of UC therapies.',
  },
] as const

export const RESOURCE_LIBRARY = [
  {
    title: 'Crohn’s & Colitis Foundation',
    href: 'https://www.crohnscolitisfoundation.org',
    description: 'Patient education, support resources, and practical medication guides.',
  },
  {
    title: 'American Gastroenterological Association',
    href: 'https://gastro.org',
    description: 'Professional guidance and evidence summaries that shape modern UC care.',
  },
  {
    title: 'ECCO e-Guide',
    href: 'https://www.e-guide.ecco-ibd.eu',
    description: 'A clinician-oriented reference for IBD drugs, monitoring, and treatment sequencing.',
  },
  {
    title: 'Mayo Clinic UC Overview',
    href: 'https://www.mayoclinic.org/diseases-conditions/ulcerative-colitis',
    description: 'A broad medical overview useful for newly diagnosed patients and families.',
  },
] as const
