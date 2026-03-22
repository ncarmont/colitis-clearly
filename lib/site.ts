export const BASE_URL = 'https://colitis-clearly.vercel.app'

export const SITE_NAME = 'Colitis Clearly'

export const SITE_TAGLINE = 'Evidence-Based Ulcerative Colitis Science'

export const MEDICAL_DISCLAIMER =
  'This content is for educational purposes only. Consult your gastroenterologist.'

export const HOME_STATS = [
  {
    value: '~1M',
    label: 'Americans living with ulcerative colitis',
    detail: 'IBD estimates suggest UC accounts for a large share of the 3.1 million U.S. adults living with inflammatory bowel disease.',
  },
  {
    value: '3M+',
    label: 'People affected globally',
    detail: 'Prevalence continues to rise as newly industrialized countries adopt westernized environmental exposures.',
  },
  {
    value: '15-30',
    label: 'Typical age at diagnosis',
    detail: 'UC can begin at any age, but onset most often clusters in late adolescence and early adulthood.',
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
