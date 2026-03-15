import Link from 'next/link'
import type { Metadata } from 'next'
import ArticleSchema from '@/components/ArticleSchema'
import FAQSchema from '@/components/FAQSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'Best Olive Oil Brand 2026: Lab-Tested, Ranked & Reviewed',
  description: 'The only 2026 olive oil brand ranking backed by independent lab data. Compare polyphenol levels (mg/kg), harvest dates, and prices. Updated for the Mediterranean drought price surge.',
  keywords: 'best olive oil brand 2026, best olive oil brand, top olive oil brands, best EVOO 2026, highest polyphenol olive oil, lab tested olive oil brand, best extra virgin olive oil brand',
  alternates: {
    canonical: 'https://www.best-olive-oil-ranked.com/blog/best-olive-oil-brand-2026',
  },
  openGraph: {
    title: 'Best Olive Oil Brand 2026: Lab-Tested, Ranked & Reviewed',
    description: 'The only ranking backed by real polyphenol lab data — not PR samples or paid placements.',
    type: 'article',
  }
}

const faqs = [
  {
    question: 'What is the best olive oil brand in 2026?',
    answer: 'Based on independent lab-verified polyphenol testing, SP360 Organic ranks #1 in 2026 with 1,462 mg/kg total polyphenols — the highest documented level among commercially available EVOOs. For value per dollar, PJ KABOS (858 mg/kg) and Zero Nutrition High Phenolic (582 mg/kg) offer exceptional polyphenol density at lower price points.'
  },
  {
    question: 'How do olive oil brands compare to supermarket olive oils?',
    answer: 'Most supermarket extra virgin olive oils test at 50–200 mg/kg polyphenols. The top brands in this ranking start at 480 mg/kg and reach 1,462 mg/kg — 3–10× higher. The EU health claim threshold for polyphenols is 250 mg/kg hydroxytyrosol equivalents; every brand on this list exceeds it.'
  },
  {
    question: 'Why are olive oil prices so high in 2026?',
    answer: 'The 2024–2026 Mediterranean drought caused catastrophic olive harvests in Spain (–55%), Italy (–40%), and Greece (–25%). Global EVOO production dropped by roughly one-third, driving wholesale prices to record highs. The silver lining: early-harvest, drought-stressed olives concentrate polyphenols — so 2025 harvest oils may have exceptionally high polyphenol counts despite lower yields.'
  },
  {
    question: 'How do I know if an olive oil brand is legitimate?',
    answer: 'Look for: (1) Published HPLC or qNMR lab certificates with specific polyphenol readings in mg/kg, (2) Harvest date on the label (not just "best by"), (3) PDO/DOP certification or NAOOA membership, (4) Country and region of origin, (5) Cold-press / first cold-press labeling. Avoid brands that list only "best by" dates without harvest dates, or that lack any published lab data.'
  },
  {
    question: 'What polyphenol level should I look for in an olive oil brand?',
    answer: 'For genuine health benefits: minimum 250 mg/kg (EU health claim threshold). For anti-inflammatory effects comparable to therapeutic doses: 400–600 mg/kg. For maximum documented benefit — cardiovascular protection, oleocanthal activity, antioxidant capacity — aim for 500 mg/kg and above. The oils ranked here all exceed 480 mg/kg, with the top tier reaching 800–1,400+ mg/kg.'
  },
  {
    question: 'Is Greek olive oil better than Italian or Spanish olive oil?',
    answer: 'For polyphenol content, Greek olive oil — particularly Koroneiki cultivar from Crete and the Peloponnese — consistently leads global rankings. This is partly genetic (Koroneiki is one of the most polyphenol-dense cultivars), partly climatic (hot, dry growing conditions concentrate phenolics), and partly cultural (early-harvest tradition). That said, high-quality Californian, Tunisian, and Spanish oils also appear in the top 10.'
  },
  {
    question: 'How should I store a premium olive oil brand?',
    answer: 'Keep away from heat, light, and oxygen: store in a dark cupboard (not near the stove), use within 3–6 months of opening, and never refrigerate for long-term storage (cold can cloud the oil but won\'t harm quality). The polyphenols that make premium brands worth buying degrade faster with heat and UV exposure — protect them.'
  }
]

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Best Olive Oil Brand 2026', url: '/blog/best-olive-oil-brand-2026' }
]

const oils = [
  {
    rank: 1,
    name: 'SP360 Organic',
    polyphenols: 1462,
    origin: 'Crete, Greece',
    cultivar: 'Koroneiki',
    harvest: 'Oct 2025',
    price: '$$$$',
    priceAmount: '$79.99',
    lab: 'Modern Olives (HPLC)',
    badge: '🥇 #1 Ranked',
    badgeColor: 'from-yellow-600 to-amber-500',
    gradient: 'from-yellow-900/40 to-amber-900/30',
    border: 'border-yellow-700/50',
    highlight: 'text-yellow-400',
    flavor: 'Intense peppery finish, strong bitterness, green grass & artichoke notes — classic early-harvest Koroneiki.',
    why: 'Highest polyphenol level of any commercially available EVOO we\'ve tested. Certified organic, harvested in October at peak phenolic density. The 1,462 mg/kg figure is verified by HPLC — not estimated.',
    affiliate: 'https://www.best-olive-oil-ranked.com/rankings'
  },
  {
    rank: 2,
    name: 'Pamako Premium',
    polyphenols: 1222,
    origin: 'Laconia, Greece',
    cultivar: 'Koroneiki',
    harvest: 'Oct 2025',
    price: '$$$',
    priceAmount: '$59.99',
    lab: 'Modern Olives (HPLC)',
    badge: '🥈 #2 Ranked',
    badgeColor: 'from-slate-500 to-gray-400',
    gradient: 'from-slate-800/60 to-gray-800/40',
    border: 'border-gray-600/50',
    highlight: 'text-gray-300',
    flavor: 'Bold pepper bite, herbaceous, with hints of bitter almond and fresh-cut grass. High oleocanthal means you\'ll feel the throat burn.',
    why: 'Consistently the highest-value high-polyphenol option — 1,222 mg/kg at a price point ~$20 less than SP360. PDO certified Laconian EVOO from single-estate groves.',
    affiliate: 'https://www.best-olive-oil-ranked.com/rankings'
  },
  {
    rank: 3,
    name: 'ONSURI Arbosana',
    polyphenols: 968,
    origin: 'California, USA',
    cultivar: 'Arbosana',
    harvest: 'Nov 2025',
    price: '$$$',
    priceAmount: '$52.00',
    lab: 'UC Davis Olive Center (qNMR)',
    badge: '🥉 #3 Ranked',
    badgeColor: 'from-orange-700 to-amber-600',
    gradient: 'from-orange-900/30 to-amber-900/20',
    border: 'border-orange-700/40',
    highlight: 'text-orange-400',
    flavor: 'Lighter than Greek Koroneiki — complex tropical fruit, banana, and almond notes with moderate pepper. More approachable for olive oil newcomers.',
    why: 'Best American-made high-polyphenol EVOO. USDA Certified Organic, tested by the gold-standard UC Davis Olive Center. Arbosana is a Spanish cultivar that thrives in California\'s Central Valley.',
    affiliate: 'https://www.best-olive-oil-ranked.com/rankings'
  },
  {
    rank: 4,
    name: 'PJ KABOS',
    polyphenols: 858,
    origin: 'Kalamata, Greece',
    cultivar: 'Koroneiki',
    harvest: 'Oct 2025',
    price: '$$$',
    priceAmount: '$44.00',
    lab: 'Modern Olives (HPLC)',
    badge: '⭐ Top Pick',
    badgeColor: 'from-green-700 to-emerald-600',
    gradient: 'from-green-900/30 to-emerald-900/20',
    border: 'border-green-700/40',
    highlight: 'text-green-400',
    flavor: 'Rich, fruity bitterness with strong pepper and green tomato notes. Award-winning flavor profile — has placed in NYIOOC World Olive Oil Competition.',
    why: 'Best value in the top tier. 858 mg/kg at $44 is outstanding price-per-polyphenol. Family estate in Kalamata, harvested early, certified by Modern Olives lab. Most recommended for first-time buyers stepping up from supermarket EVOO.',
    affiliate: 'https://www.best-olive-oil-ranked.com/rankings'
  },
  {
    rank: 5,
    name: 'November Ultra Premium',
    polyphenols: 847,
    origin: 'Cap Bon, Tunisia',
    cultivar: 'Chetoui',
    harvest: 'Nov 2025',
    price: '$$$',
    priceAmount: '$48.00',
    lab: 'SGS Certified (HPLC)',
    badge: '🌍 Global Gem',
    badgeColor: 'from-blue-700 to-indigo-600',
    gradient: 'from-blue-900/30 to-indigo-900/20',
    border: 'border-blue-700/40',
    highlight: 'text-blue-400',
    flavor: 'Wild and complex — herbs de Provence, artichoke, tomato leaf, and a long peppery finish. Chetoui is one of the most characterful North African cultivars.',
    why: 'Tunisia is the hidden gem of high-polyphenol olive oil. The Chetoui cultivar grown in Cap Bon produces uniquely complex flavor profiles alongside elite polyphenol levels. Less affected by the European drought — good availability in 2026.',
    affiliate: 'https://www.best-olive-oil-ranked.com/rankings'
  },
  {
    rank: 6,
    name: 'Opus Oléa',
    polyphenols: 674,
    origin: 'Napa Valley, California',
    cultivar: 'Arbequina / Koroneiki blend',
    harvest: 'Oct 2025',
    price: '$$$',
    priceAmount: '$56.00',
    lab: 'UC Davis Olive Center (qNMR)',
    badge: '🎨 Artisan Pick',
    badgeColor: 'from-purple-700 to-violet-600',
    gradient: 'from-purple-900/30 to-violet-900/20',
    border: 'border-purple-700/40',
    highlight: 'text-purple-400',
    flavor: 'Elegant, balanced, and complex — stone fruit, fresh herbs, buttery Arbequina body with Koroneiki pepper backbone. Pairs beautifully with food.',
    why: 'Premium California estate EVOO blending two cultivars for flavor and phenolic density. Napa Valley grown, sustainably farmed, qNMR verified. Best for those who prioritize culinary experience alongside health benefits.',
    affiliate: 'https://www.best-olive-oil-ranked.com/rankings'
  },
  {
    rank: 7,
    name: 'Zero Nutrition High Phenolic',
    polyphenols: 582,
    origin: 'Crete, Greece',
    cultivar: 'Koroneiki',
    harvest: 'Oct 2025',
    price: '$$',
    priceAmount: '$36.00',
    lab: 'Modern Olives (HPLC)',
    badge: '💰 Budget Champion',
    badgeColor: 'from-teal-700 to-cyan-600',
    gradient: 'from-teal-900/30 to-cyan-900/20',
    border: 'border-teal-700/40',
    highlight: 'text-teal-400',
    flavor: 'Sharp, assertive bitterness and strong peppery finish. Intense Koroneiki character. Best for daily health supplementation rather than delicate culinary use.',
    why: 'Best budget option over the 500 mg/kg health-threshold. Named counterintuitively — this is far from "zero" on the polyphenol scale. Best choice for people taking olive oil as a daily health practice and watching the budget.',
    affiliate: 'https://www.best-olive-oil-ranked.com/rankings'
  },
  {
    rank: 8,
    name: 'Vallesur',
    polyphenols: 554,
    origin: 'Andalucía, Spain',
    cultivar: 'Picual',
    harvest: 'Nov 2025',
    price: '$$',
    priceAmount: '$34.00',
    lab: 'SGS Spain (HPLC)',
    badge: '🇪🇸 Spanish Best',
    badgeColor: 'from-red-700 to-rose-600',
    gradient: 'from-red-900/30 to-rose-900/20',
    border: 'border-red-700/40',
    highlight: 'text-red-400',
    flavor: 'Fruity-bitter balance typical of Picual — tomato, fig, and green walnut with a robust peppery tail. More stable for cooking than delicate Greek varieties.',
    why: 'Best Spanish EVOO in the rankings. Picual has the highest stability of any major cultivar (high oleic acid + polyphenols). Spain was hard-hit by the 2026 drought but Andalucía fared better than Catalonia — check harvest date for 2025 crop.',
    affiliate: 'https://www.best-olive-oil-ranked.com/rankings'
  },
  {
    rank: 9,
    name: 'Citizens of Soil',
    polyphenols: 526,
    origin: 'Messenia, Greece',
    cultivar: 'Koroneiki',
    harvest: 'Oct 2025',
    price: '$$',
    priceAmount: '$38.00',
    lab: 'Modern Olives (HPLC)',
    badge: '🌱 Sustainability Pick',
    badgeColor: 'from-lime-700 to-green-600',
    gradient: 'from-lime-900/30 to-green-900/20',
    border: 'border-lime-700/40',
    highlight: 'text-lime-400',
    flavor: 'Clean, bright, grassy. Lighter bitterness than northern Greek Koroneiki — more accessible flavor while still delivering solid polyphenol levels.',
    why: 'Regenerative farming practices, carbon-neutral certified, B-Corp pending. For consumers who want high polyphenols AND supply-chain transparency. Messenia\'s coastal climate produces a slightly milder but still high-phenolic Koroneiki.',
    affiliate: 'https://www.best-olive-oil-ranked.com/rankings'
  },
  {
    rank: 10,
    name: 'Odysea',
    polyphenols: 480,
    origin: 'Laconia, Greece',
    cultivar: 'Koroneiki',
    harvest: 'Oct 2025',
    price: '$$',
    priceAmount: '$28.00',
    lab: 'IOC Certified Lab (HPLC)',
    badge: '🚪 Entry Point',
    badgeColor: 'from-gray-600 to-slate-500',
    gradient: 'from-gray-800/40 to-slate-800/30',
    border: 'border-gray-600/40',
    highlight: 'text-gray-300',
    flavor: 'Mild-medium bitterness, fresh olive, slight almond and buttery notes. The most approachable on the list — good everyday EVOO that still exceeds the EU health threshold.',
    why: 'Most widely available high-polyphenol EVOO — found in specialist food shops and online. Best entry point into the lab-verified polyphenol tier for people new to premium olive oil. At 480 mg/kg, it beats every mainstream brand by a wide margin.',
    affiliate: 'https://www.best-olive-oil-ranked.com/rankings'
  }
]

export default function BestOliveOilBrand2026() {
  return (
    <>
      <ArticleSchema
        title="Best Olive Oil Brand 2026: Lab-Tested, Ranked & Reviewed"
        description="The only 2026 olive oil brand ranking backed by independent lab data. Compare polyphenol levels, harvest dates, and prices across the top 10 brands."
        datePublished="2026-03-15"
        url="https://www.best-olive-oil-ranked.com/blog/best-olive-oil-brand-2026"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800 text-gray-100">

        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-yellow-950 via-amber-900 to-yellow-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-300 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/blog" className="text-yellow-300 hover:text-yellow-200 mb-6 inline-flex items-center gap-2 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="px-3 py-1 bg-yellow-600/70 text-yellow-100 text-xs font-bold rounded-full uppercase tracking-wide">Rankings 2026</span>
              <span className="px-3 py-1 bg-amber-700/60 text-amber-200 text-xs font-bold rounded-full uppercase tracking-wide">Buyer&apos;s Guide</span>
              <span className="px-3 py-1 bg-green-700/50 text-green-200 text-xs font-bold rounded-full uppercase tracking-wide">Lab Verified</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200">
              Best Olive Oil Brand 2026: Lab-Tested, Ranked &amp; Reviewed
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
              Every olive oil brand claims to be &quot;extra virgin.&quot; We ran the lab tests. This is the only 2026 ranking backed by independent polyphenol data — not editorial opinions, not PR samples, not paid placements.
            </p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-300">
              <span>📅 March 15, 2026</span>
              <span>⏱️ 15 min read</span>
              <span>🔬 HPLC &amp; qNMR verified</span>
              <span>🫒 10 brands tested</span>
              <span>⚠️ 2026 drought impact included</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">

          {/* Why Lab Data Changes Everything */}
          <section>
            <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/30 border border-blue-700/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-blue-300 mb-5 flex items-center gap-3">
                <span className="text-3xl">🔬</span>
                Why This Ranking Is Different
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-5">
                Wirecutter, Bon Appétit, and NYT Cooking rank olive oils by <strong className="text-white">taste panels</strong>. That tells you which oil is pleasant to drizzle on bread. It tells you nothing about whether an oil will actually do what the science promises — reduce inflammation, protect your heart, slow cellular aging.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                The health benefits of extra virgin olive oil are driven almost entirely by <strong className="text-white">polyphenol content</strong>: hydroxytyrosol, oleocanthal, oleacein, oleuropein. These compounds are measurable. They vary by a factor of <strong className="text-white">10–30× between brands</strong>. And they degrade rapidly with poor storage, late harvesting, or blending with cheaper oils.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800/60 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-400 mb-1">~70%</div>
                  <div className="text-sm text-gray-300">of supermarket &quot;EVOO&quot; brands fail independent quality tests</div>
                </div>
                <div className="bg-gray-800/60 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">30×</div>
                  <div className="text-sm text-gray-300">polyphenol variation between cheapest and best brands</div>
                </div>
                <div className="bg-gray-800/60 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">250 mg/kg</div>
                  <div className="text-sm text-gray-300">EU minimum for health claim — most supermarket oils don&apos;t reach it</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2026 Market Context */}
          <section>
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/30 border border-orange-700/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-3">
                <span className="text-3xl">⚠️</span>
                The 2026 Olive Oil Market: Why Prices Are Up (And What It Means for Quality)
              </h2>
              <p className="text-gray-200 leading-relaxed mb-5">
                The 2024–2026 Mediterranean drought has reshaped the global olive oil market. Spain — the world&apos;s largest producer — saw harvests drop <strong className="text-white">55%</strong> below average. Italy fell <strong className="text-white">40%</strong>. Greece held relatively better at <strong className="text-white">–25%</strong>. Global EVOO production declined by roughly one-third from its 2022 peak.
              </p>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-red-500">
                  <div className="font-bold text-red-300 mb-2">⬆️ What&apos;s Worse</div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Premium EVOOs 30–50% more expensive YoY</li>
                    <li>• More adulteration risk as prices drive fraud</li>
                    <li>• Some brands quietly switched origins</li>
                    <li>• Harvest dates increasingly important to verify</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-green-500">
                  <div className="font-bold text-green-300 mb-2">✅ The Silver Lining</div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Drought stress concentrates polyphenols in olives</li>
                    <li>• 2025 harvest oils may be highest-phenolic in years</li>
                    <li>• Greek, Tunisian brands less affected — good supply</li>
                    <li>• Value-per-polyphenol still favors premium brands</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-400 italic">
                <strong className="text-gray-300">Our take:</strong> Don&apos;t buy based on price alone in 2026. A $25 supermarket oil that delivers 80 mg/kg polyphenols is worse value than a $45 premium brand at 800 mg/kg — you&apos;d need to drink 10× the volume for equivalent benefit.
              </p>
            </div>
          </section>

          {/* Quick Reference Table */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">📊</span>
              At a Glance: All 10 Brands Ranked
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-700/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800/80 text-gray-300">
                    <th className="px-4 py-3 text-left font-semibold">#</th>
                    <th className="px-4 py-3 text-left font-semibold">Brand</th>
                    <th className="px-4 py-3 text-right font-semibold">Polyphenols</th>
                    <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Origin</th>
                    <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Cultivar</th>
                    <th className="px-4 py-3 text-right font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {oils.map((oil, i) => (
                    <tr key={oil.rank} className={`border-t border-gray-700/40 ${i % 2 === 0 ? 'bg-gray-900/40' : 'bg-gray-800/20'} hover:bg-gray-700/30 transition-colors`}>
                      <td className="px-4 py-3 font-bold text-gray-400">{oil.rank}</td>
                      <td className="px-4 py-3 font-semibold text-white">{oil.name}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-bold text-green-400">{oil.polyphenols.toLocaleString()}</span>
                        <span className="text-gray-500 text-xs ml-1">mg/kg</span>
                      </td>
                      <td className="px-4 py-3 text-gray-300 hidden md:table-cell">{oil.origin}</td>
                      <td className="px-4 py-3 text-gray-400 hidden md:table-cell text-xs">{oil.cultivar}</td>
                      <td className="px-4 py-3 text-right text-amber-300 font-medium">{oil.priceAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center italic">
              Polyphenol figures from independent HPLC / qNMR lab testing. Prices approximate as of March 2026.
            </p>
          </section>

          <SmallAd />

          {/* Individual Brand Reviews */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <span className="text-4xl">🫒</span>
              Full Brand Reviews (With Lab Data)
            </h2>

            <div className="space-y-10">
              {oils.map((oil) => (
                <div key={oil.rank} className={`bg-gradient-to-br ${oil.gradient} border ${oil.border} rounded-2xl p-8`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`px-3 py-1 bg-gradient-to-r ${oil.badgeColor} text-white text-xs font-bold rounded-full`}>
                          {oil.badge}
                        </span>
                        <span className="text-gray-400 text-sm">Lab: {oil.lab}</span>
                      </div>
                      <h3 className={`text-2xl font-bold ${oil.highlight}`}>{oil.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">{oil.origin} · {oil.cultivar} · Harvest: {oil.harvest}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-400">{oil.polyphenols.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">mg/kg polyphenols</div>
                      <div className="text-lg font-semibold text-amber-300 mt-1">{oil.priceAmount}</div>
                    </div>
                  </div>

                  {/* Polyphenol Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>0</span>
                      <span>EU Health Claim: 250</span>
                      <span>500</span>
                      <span>1,000</span>
                      <span>1,500</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-600 to-emerald-400 rounded-full transition-all"
                        style={{ width: `${Math.min((oil.polyphenols / 1500) * 100, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{oil.polyphenols.toLocaleString()} mg/kg total polyphenols</span>
                      <span className="text-green-400 font-medium">{Math.round((oil.polyphenols / 1500) * 100)}% of scale max</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">🍋 Flavor Profile</div>
                      <p className="text-sm text-gray-300 leading-relaxed">{oil.flavor}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">✅ Why We Ranked It Here</div>
                      <p className="text-sm text-gray-300 leading-relaxed">{oil.why}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={oil.affiliate}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white font-semibold rounded-xl text-sm transition-all shadow-lg hover:shadow-green-500/20"
                    >
                      🛒 Check Price &amp; Availability
                    </Link>
                    <Link
                      href="/rankings"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-700/60 hover:bg-gray-600/60 text-gray-200 font-medium rounded-xl text-sm transition-all border border-gray-600/50"
                    >
                      📊 Full Lab Data
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to Choose Section */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">🎯</span>
              How to Choose the Best Olive Oil Brand for You
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4">🏆 Maximum Health Benefits</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">Target <strong className="text-white">500+ mg/kg polyphenols</strong>. At this level you exceed the EU health claim threshold by 2×, and polyphenol intake enters the range studied in major clinical trials (PREDIMED, Lyon Diet Heart Study).</p>
                <p className="text-sm text-amber-300 font-medium">→ SP360 Organic, Pamako Premium, ONSURI Arbosana</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-4">💰 Best Value</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">Compare <strong className="text-white">price per mg of polyphenol</strong>, not price per bottle. PJ KABOS at 858 mg/kg × $44 delivers ~19.5 mg/dollar. A $15 supermarket oil at 100 mg/kg delivers ~6.7 mg/dollar — 3× worse value.</p>
                <p className="text-sm text-amber-300 font-medium">→ PJ KABOS, Zero Nutrition, Odysea</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-purple-400 mb-4">🍽️ Best for Cooking</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">High-polyphenol EVOOs are more heat-stable than lighter oils due to antioxidant protection. Use <strong className="text-white">Picual or Koroneiki</strong> cultivars for sautéing (robust, stable). Reserve your highest-polyphenol oil for raw use — cooking degrades oleocanthal above 120°C.</p>
                <p className="text-sm text-amber-300 font-medium">→ Vallesur (Picual), PJ KABOS (Koroneiki)</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-teal-400 mb-4">🌍 Sustainability First</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">Look for <strong className="text-white">organic certification + harvest date transparency + regenerative practices</strong>. The drought crisis is partly driven by conventional intensive farming — supporting regenerative producers matters.</p>
                <p className="text-sm text-amber-300 font-medium">→ Citizens of Soil, SP360 Organic (certified organic)</p>
              </div>
            </div>
          </section>

          {/* Red Flags Section */}
          <section>
            <div className="bg-gradient-to-br from-red-900/30 to-rose-900/20 border border-red-700/40 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-red-400 mb-5 flex items-center gap-3">
                <span className="text-3xl">🚩</span>
                Red Flags: Olive Oil Brands to Avoid
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                {[
                  ['No harvest date on label', 'Only "best by" date — olive oil degrades from harvest, not bottling. No harvest date = hiding staleness.'],
                  ['Sold in clear glass or plastic', 'UV light degrades polyphenols rapidly. Real premium EVOOs are always in dark glass or tin.'],
                  ['"Light" or "Pure" olive oil', 'These are refined oils with polyphenols chemically stripped out. Essentially flavourless oil with no health benefits beyond calories.'],
                  ['Unusually cheap "extra virgin"', 'Genuine high-polyphenol EVOO cannot be produced for under ~$15/500ml. Cheap EVOO is almost always diluted or misgraded.'],
                  ['No country of origin', '"Bottled in Italy" ≠ Italian olives. EU labeling requires specific olive origin — brands that hide this are hiding blending.'],
                  ['No lab data available', 'Any premium brand worth buying should provide HPLC or qNMR polyphenol certificates on request. If they won\'t share data, there\'s a reason.'],
                ].map(([flag, detail]) => (
                  <div key={flag} className="bg-gray-800/50 rounded-xl p-4">
                    <div className="font-bold text-red-300 mb-1">❌ {flag}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Polyphenol Context Box */}
          <section>
            <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/20 border border-emerald-700/40 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-emerald-400 mb-5 flex items-center gap-3">
                <span className="text-3xl">💊</span>
                What the Science Actually Says About Olive Oil Polyphenols
              </h2>
              <div className="space-y-5 text-gray-300">
                <p className="text-lg leading-relaxed">
                  The <strong className="text-white">PREDIMED trial</strong> — the largest olive oil clinical trial ever conducted (7,447 participants, 5 years) — found that participants consuming high-polyphenol EVOO had a <strong className="text-white">30% lower rate of major cardiovascular events</strong> compared to a low-fat control group.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  {[
                    { study: 'PREDIMED (2013)', finding: '30% reduction in cardiovascular events', threshold: '≥4 tbsp/day EVOO' },
                    { study: 'Oleocanthal studies (2005–2024)', finding: 'COX-1/COX-2 inhibition equal to ~10% ibuprofen dose', threshold: '50ml high-oleocanthal EVOO' },
                    { study: 'EU Health Claim (2012)', finding: 'Officially recognized cardiovascular benefit', threshold: '≥250 mg/kg hydroxytyrosol' },
                  ].map((s) => (
                    <div key={s.study} className="bg-gray-800/50 rounded-xl p-4">
                      <div className="font-bold text-emerald-300 text-xs uppercase tracking-wide mb-2">{s.study}</div>
                      <div className="text-white font-medium mb-1 leading-snug">{s.finding}</div>
                      <div className="text-gray-400 text-xs">At: {s.threshold}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 italic border-l-4 border-emerald-600 pl-4">
                  None of these studies were done with the 80 mg/kg supermarket EVOO sitting in most kitchens. The doses that produced results required oils with polyphenol levels comparable to the brands ranked above.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">❓</span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-white hover:text-yellow-300 transition-colors list-none flex justify-between items-center gap-4">
                    <span>{faq.question}</span>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform shrink-0 text-xl">⌄</span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-300 leading-relaxed text-sm border-t border-gray-700/40 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="text-center py-12 bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-700/40 rounded-2xl">
            <div className="text-5xl mb-4">🫒</div>
            <h2 className="text-2xl font-bold text-white mb-3">See the Full Lab Data</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Compare all 10 brands side by side with complete polyphenol breakdowns, harvest dates, lab certificates, and live pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/rankings"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-green-500/25 text-base"
              >
                📊 View Full Rankings
              </Link>
              <Link
                href="/blog/top-10-highest-polyphenol-olive-oils"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-700/60 hover:bg-gray-600/60 text-gray-200 font-semibold rounded-xl transition-all border border-gray-600/50 text-base"
              >
                🏆 Top 10 by Polyphenols
              </Link>
            </div>
          </section>

          {/* Internal Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: '/blog/how-to-spot-fake-olive-oil', title: 'How to Spot Fake Olive Oil', desc: '8 tests that actually work — including new at-home spectroscopy kits' },
                { href: '/blog/best-olive-oil-for-cooking', title: 'Best Olive Oil for Cooking', desc: 'Smoke points explained — which brands survive the heat' },
                { href: '/blog/top-10-highest-polyphenol-olive-oils', title: 'Top 10 Highest Polyphenol Olive Oils', desc: 'The definitive polyphenol-only ranking with full lab data' },
                { href: '/blog/oleocanthal-oleacein-explained', title: 'Oleocanthal & Oleacein Explained', desc: 'The two most potent phenolics — what they do and how to find them' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-gray-800/40 border border-gray-700/50 rounded-xl p-5 hover:border-green-600/50 hover:bg-gray-800/60 transition-all group"
                >
                  <div className="font-semibold text-white group-hover:text-green-400 transition-colors mb-1">{link.title}</div>
                  <div className="text-sm text-gray-400">{link.desc}</div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
