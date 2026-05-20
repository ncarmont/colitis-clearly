export type ArticleSection = { title: string; paragraphs: string[]; bullets?: string[]; callout?: string }
export type ArticleReference = { label: string; href: string }
export type ArticleFaq = { question: string; answer: string }
export type BlogArticle = {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  datePublished: string
  intro: string
  keyPoints: string[]
  sections: ArticleSection[]
  faqs: ArticleFaq[]
  references: ArticleReference[]
  relatedSlugs: string[]
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'heavy-metals-in-coffee-what-actually-matters',
    title: 'Heavy Metals in Coffee: What Actually Matters Before You Panic-Buy Beans',
    description: 'Lead, cadmium, arsenic, and mercury can show up in food systems. The serious clean-coffee question is not fear — it is whether the brand tests and discloses results.',
    category: 'Heavy Metals',
    readTime: '7 min read',
    datePublished: '2026-05-19',
    intro: 'Heavy metals are the perfect wellness-marketing weapon: scary enough to sell anything, technical enough that most people stop asking questions. Coffee can contain trace contaminants because plants grow in soil and food supply chains are not fairy tales. The adult response is not panic. It is batch testing, transparent limits, and refusing to reward brands that hide behind clean-sounding adjectives.',
    keyPoints: ['Ask for current COAs, not screenshots of vibes.', 'Organic reduces pesticide exposure risk; it does not prove low heavy metals.', 'Batch, origin, and roast date matter more than a pretty “toxins” landing page.'],
    sections: [
      { title: 'The contaminants to ask about', paragraphs: ['For coffee purity, the useful panel is boring: lead, cadmium, arsenic, mercury, mycotoxins, pesticide residues, and microbial contamination. If a brand only talks about “mold free” but cannot show the testing scope, you are looking at marketing, not verification.'], bullets: ['Lead and cadmium: soil/environmental signals', 'Ochratoxin A and aflatoxins: mycotoxin screen', 'Pesticide residues: especially relevant for non-organic lots', 'Microbial contamination: handling/storage hygiene'] },
      { title: 'What a good COA looks like', paragraphs: ['A serious certificate of analysis names the lab, sample/batch, test date, analytes, methods or limits, and results. “Third-party tested” without the actual report is like saying “trust me bro” with a lab coat on.'], callout: 'Clean-coffee rule: if the claim is loud, the evidence should be louder.' },
      { title: 'The practical buying rule', paragraphs: ['Buy fresh whole beans from brands that disclose origin, roast date, decaf process when relevant, and contaminant testing. If you cannot get all four, pick the brand that is most transparent and least theatrical.'] },
    ],
    faqs: [
      { question: 'Is coffee dangerous because of heavy metals?', answer: 'Usually no, but “usually” is not a testing strategy. Coffee is one exposure source among many foods. Prefer brands that verify low contaminant levels with current testing.' },
      { question: 'Does organic coffee solve heavy metals?', answer: 'No. Organic standards address synthetic pesticide/fertilizer rules; heavy metals can come from soil and environment. Organic plus testing is stronger.' },
    ],
    references: [
      { label: 'FDA — Metals and Your Food', href: 'https://www.fda.gov/food/environmental-contaminants-food/metals-and-your-food' },
      { label: 'EFSA — Chemical contaminants', href: 'https://www.efsa.europa.eu/en/topics/topic/chemical-contaminants' },
    ],
    relatedSlugs: ['mycotoxin-free-coffee-marketing-bs', 'clean-coffee-buying-checklist'],
  },
  {
    slug: 'mycotoxin-free-coffee-marketing-bs',
    title: '“Mold-Free Coffee” Is Not Enough: The Mycotoxin Claim Audit',
    description: 'Mycotoxin-tested coffee can be useful. Mycotoxin fear-mongering without batch reports is just wellness cosplay with beans.',
    category: 'Mycotoxins',
    readTime: '6 min read',
    datePublished: '2026-05-19',
    intro: 'Mold and mycotoxins are real. So is marketing hysteria. The clean-coffee question is whether a brand tests for relevant mycotoxins, stores green coffee properly, roasts fresh, and publishes enough detail to be audited by someone with a functioning frontal lobe.',
    keyPoints: ['Look for ochratoxin A and aflatoxin testing.', 'Storage and supply chain matter before roasting ever starts.', 'A “mold-free” badge without limits, lab, and batch is weak evidence.'],
    sections: [
      { title: 'What to verify', paragraphs: ['Ask which mycotoxins were tested, what detection limits were used, when the lot was tested, and whether the result belongs to the coffee currently being sold. One ancient clean report does not bless every future bag.'] },
      { title: 'What not to fall for', paragraphs: ['Do not confuse dramatic toxin language with better coffee. Some brands sell fear harder than they sell beans. That does not make them fraudulent, but it should make you slower to buy.'], bullets: ['No batch ID', 'No lab name', 'No date', 'No numeric result', 'No roast date'] },
    ],
    faqs: [{ question: 'Should I only buy mycotoxin-tested coffee?', answer: 'It is a strong positive signal, especially for clean-coffee buyers. But testing should sit next to freshness, sourcing, taste, and value.' }],
    references: [{ label: 'PubMed — Coffee mycotoxin research', href: 'https://pubmed.ncbi.nlm.nih.gov/?term=coffee+mycotoxins' }],
    relatedSlugs: ['heavy-metals-in-coffee-what-actually-matters', 'clean-coffee-buying-checklist'],
  },
  {
    slug: 'clean-coffee-buying-checklist',
    title: 'The Clean Coffee Buying Checklist: 9 Questions Before You Pay',
    description: 'A no-BS checklist for buying coffee based on testing, sourcing, freshness, processing, and price per cup.',
    category: 'Buying Guide',
    readTime: '8 min read',
    datePublished: '2026-05-19',
    intro: 'Clean coffee is not a personality. It is a procurement checklist. If the brand cannot answer basic questions, you do not need to become a private investigator. You need a different bag.',
    keyPoints: ['Batch-level testing beats brand-level slogans.', 'Roast date beats best-by date.', 'Swiss Water/CO₂ decaf beats mystery decaf.'],
    sections: [
      { title: 'The nine questions', paragraphs: ['Use these before buying. If a brand fails one, that is not always fatal. If it fails five, stop donating money to typography.'], bullets: ['Is there a roast date?', 'Is origin disclosed?', 'Is the coffee whole bean?', 'Are heavy metals tested?', 'Are mycotoxins tested?', 'Are pesticides addressed?', 'Is decaf process disclosed?', 'Is packaging freshness-protective?', 'Is price per cup sane?'] },
      { title: 'The ranking formula', paragraphs: ['The best coffee is not automatically the cleanest claim. It is the best combination of evidence, transparency, taste, freshness, and value. That is the board we are building.'] },
    ],
    faqs: [{ question: 'What is the fastest red flag?', answer: 'A brand that screams “toxin free” but will not show current test results.' }],
    references: [{ label: 'Specialty Coffee Association', href: 'https://sca.coffee' }],
    relatedSlugs: ['heavy-metals-in-coffee-what-actually-matters', 'decaf-solvents-swiss-water-co2'],
  },
  {
    slug: 'decaf-solvents-swiss-water-co2',
    title: 'Decaf Solvents: Swiss Water, CO₂, Ethyl Acetate, and the Mystery-Decaf Problem',
    description: 'If a decaf coffee will not disclose how caffeine was removed, that silence is part of the product.',
    category: 'Decaf',
    readTime: '6 min read',
    datePublished: '2026-05-19',
    intro: 'Decaf buyers get treated like they should be grateful for brown water. No. The process matters, the beans matter, and the roast date still matters. Swiss Water and CO₂ decaf are the cleanest default signals because they are easy to disclose and easy to understand.',
    keyPoints: ['Mystery decaf is a transparency failure.', 'Swiss Water and CO₂ avoid the solvent question.', 'Freshness still matters because decaf can taste stale fast.'],
    sections: [
      { title: 'The process hierarchy', paragraphs: ['For clean-coffee buyers, Swiss Water and CO₂ are easiest to trust. Ethyl acetate can be naturally derived or synthetic depending on supply chain; methylene chloride is the process many cautious buyers prefer to avoid. The minimum standard is disclosure.'] },
      { title: 'How to buy decaf without getting played', paragraphs: ['Look for whole bean, roast date, disclosed process, and contaminant testing. If the brand hides the decaf method, buy from someone less allergic to transparency.'] },
    ],
    faqs: [{ question: 'Is Swiss Water always best?', answer: 'It is one of the cleanest default choices. But stale Swiss Water decaf is still stale coffee.' }],
    references: [{ label: 'FDA — Decaffeinated coffee references', href: 'https://www.fda.gov/food' }],
    relatedSlugs: ['clean-coffee-buying-checklist', 'heavy-metals-in-coffee-what-actually-matters'],
  },
]

export const BLOG_ARTICLE_MAP = BLOG_ARTICLES.reduce<Record<string, BlogArticle>>((acc, article) => {
  acc[article.slug] = article
  return acc
}, {})
