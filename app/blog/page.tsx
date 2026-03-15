import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'EVOO Health & Research Blog | High Polyphenol Olive Oil Guides',
  description: 'Expert guides on high polyphenol olive oil, health benefits, buying guides, and the latest research on polyphenol-rich EVOOs. Learn how to choose the healthiest olive oil.',
  keywords: 'high polyphenol olive oil, EVOO health benefits, polyphenol rich olive oil, olive oil buying guide, healthiest olive oil, oleocanthal, hydroxytyrosol',
  openGraph: {
    title: 'EVOO Health & Research Blog - Expert Guides',
    description: 'Comprehensive guides on choosing high polyphenol olive oil for maximum health benefits',
    type: 'website',
  }
}

const blogPosts = [
  {
    slug: 'best-olive-oil-brand-2026',
    title: 'Best Olive Oil Brand 2026: Lab-Tested, Ranked & Reviewed',
    excerpt: 'The only 2026 olive oil brand ranking backed by independent polyphenol lab data. We tested 10 brands with HPLC and qNMR — here\'s who actually delivers on the health claims, plus 2026 drought impact on prices and availability.',
    category: 'Rankings',
    readTime: '15 min read',
    date: '2026-03-15',
    image: '🏆'
  },
  {
    slug: 'oleocanthal-vs-ibuprofen',
    title: 'Oleocanthal vs. Ibuprofen: Olive Oil\'s Natural Anti-Inflammatory Explained',
    excerpt: 'A phenolic compound in fresh-pressed EVOO inhibits the exact same COX-1 and COX-2 enzymes as ibuprofen — discovered by accident in 2005 at the Monell Chemical Senses Center. Here\'s the dosage math, safety comparison, and which oils deliver the most.',
    category: 'Science',
    readTime: '12 min read',
    date: '2026-03-14',
    image: '🌶️'
  },
  {
    slug: 'olive-oil-for-cancer-prevention',
    title: 'Olive Oil for Cancer Prevention: Oleocanthal, Polyphenols & the Research (2026)',
    excerpt: 'High-polyphenol EVOO contains oleocanthal — a compound that selectively kills cancer cells via lysosomal rupture. PREDIMED showed a 62% breast cancer risk reduction. Here\'s what the peer-reviewed science says.',
    category: 'Health',
    readTime: '11 min read',
    date: '2026-03-13',
    image: '🛡️'
  },
  {
    slug: 'olive-oil-for-hair',
    title: 'Olive Oil for Hair: Does It Actually Grow Hair? (Science & Tips)',
    excerpt: 'Hydroxytyrosol in high-polyphenol EVOO inhibits 5-alpha reductase — the enzyme that produces DHT, the hormone behind pattern hair loss. Plus oleuropein, squalene, and deep conditioning science.',
    category: 'Hair Health',
    readTime: '9 min read',
    date: '2026-03-12',
    image: '💆'
  },
  {
    slug: 'olive-oil-for-skin',
    title: 'Olive Oil for Skin: Benefits, How to Use & Best EVOO for Your Face',
    excerpt: 'High-polyphenol EVOO contains hydroxytyrosol, squalene, and oleocanthal — proven to fight UV damage, stimulate collagen, reduce inflammation, and slow aging both topically and from within.',
    category: 'Skin Health',
    readTime: '10 min read',
    date: '2026-03-11',
    image: '✨'
  },
  {
    slug: 'olive-oil-for-liver-health',
    title: 'Olive Oil for Liver Health: Can EVOO Help Fatty Liver Disease?',
    excerpt: '1 in 4 adults has fatty liver disease. High-polyphenol EVOO reduces liver fat, lowers ALT/AST enzymes, and activates AMPK fat oxidation in liver cells. Science, dosage, and best oils.',
    category: 'Health',
    readTime: '9 min read',
    date: '2026-03-09',
    image: '🫀'
  },
  {
    slug: 'hydroxytyrosol-olive-oil',
    title: 'Hydroxytyrosol: The Most Powerful Antioxidant in Olive Oil',
    excerpt: 'Hydroxytyrosol is the #1 reason EVOO has an EU health claim — with an ORAC score 15× higher than green tea. Learn its benefits, dosage, and which oils have the most.',
    category: 'Science',
    readTime: '10 min read',
    date: '2026-02-25',
    image: '⚡'
  },
  {
    slug: 'olive-oil-for-weight-loss',
    title: 'Olive Oil for Weight Loss: Does EVOO Help You Lose Weight?',
    excerpt: 'High-polyphenol EVOO is calorie-dense yet linked to lower body weight. Learn how it suppresses appetite, boosts fat oxidation, and improves insulin sensitivity.',
    category: 'Health',
    readTime: '8 min read',
    date: '2026-02-24',
    image: '⚖️'
  },
  {
    slug: 'how-to-spot-fake-olive-oil',
    title: 'How to Spot Fake Olive Oil: 8 Tests That Actually Work (2026)',
    excerpt: 'Up to 80% of "extra virgin" olive oil sold in supermarkets is adulterated or mislabeled. Learn 8 proven methods to detect fake olive oil and buy only the real thing.',
    category: 'Buyer\'s Guide',
    readTime: '9 min read',
    date: '2026-02-23',
    image: '🕵️'
  },
  {
    slug: 'olive-oil-for-joint-pain',
    title: 'Olive Oil for Joint Pain: Inflammation Relief, Dosage & Best EVOO',
    excerpt: 'High-polyphenol EVOO can calm inflammatory signaling and support joint comfort. Dosage, timing, and how to choose the right oil.',
    category: 'Health',
    readTime: '6 min read',
    date: '2026-02-20',
    image: '🦴'
  },
  {
    slug: 'olive-oil-for-gut-health',
    title: 'Olive Oil for Gut Health: Microbiome Benefits & Best EVOO Choices',
    excerpt: 'How high-polyphenol EVOO supports a healthier microbiome, calmer digestion, and stronger gut barrier integrity.',
    category: 'Health',
    readTime: '7 min read',
    date: '2026-02-20',
    image: '🦠'
  },
  {
    slug: 'olive-oil-for-blood-sugar',
    title: 'Olive Oil for Blood Sugar: EVOO, Insulin Sensitivity & Glycemic Control',
    excerpt: 'High-polyphenol EVOO can help reduce post-meal glucose spikes and improve insulin sensitivity. Dosage, timing, and best oils inside.',
    category: 'Health',
    readTime: '6 min read',
    date: '2026-02-18',
    image: '🧪'
  },
  {
    slug: 'olive-oil-for-blood-pressure',
    title: 'Olive Oil for Blood Pressure: How EVOO Supports Healthy BP',
    excerpt: 'High-polyphenol EVOO improves endothelial function and nitric oxide. Learn dosage, timing, and how to choose the right oil.',
    category: 'Health',
    readTime: '6 min read',
    date: '2026-02-18',
    image: '🫀'
  },
  {
    slug: 'olive-oil-for-cholesterol',
    title: 'Olive Oil for Cholesterol: LDL Reduction, HDL Boost & Best Dosage',
    excerpt: 'How high-polyphenol EVOO improves LDL quality, raises HDL function, and reduces oxidation for better heart health.',
    category: 'Health',
    readTime: '6 min read',
    date: '2026-02-17',
    image: '❤️'
  },
  {
    slug: 'harvest-date-olive-oil',
    title: 'Harvest Date Olive Oil: Why Freshness Determines Polyphenol Power',
    excerpt: 'Harvest date is the #1 freshness signal for EVOO. Learn how polyphenols fade over time and how to buy the freshest oil.',
    category: 'Tips',
    readTime: '6 min read',
    date: '2026-02-14',
    image: '🗓️'
  },
  {
    slug: 'best-time-to-take-olive-oil',
    title: 'Best Time to Take Olive Oil: Morning vs Night for Polyphenol Benefits',
    excerpt: 'Timing matters less than consistency. Learn the best time to take EVOO, ideal dosage, and how to maximize polyphenol absorption.',
    category: 'Tips',
    readTime: '6 min read',
    date: '2026-02-14',
    image: '⏰'
  },
  {
    slug: 'top-10-highest-polyphenol-olive-oils',
    title: 'Top 10 Highest Polyphenol Olive Oils in 2024 (Lab Verified)',
    excerpt: 'Complete rankings of the highest polyphenol EVOOs with lab verification. From 1462 mg/kg SP360 to premium Greek Koroneiki oils.',
    category: 'Rankings',
    readTime: '10 min read',
    date: '2024-01-20',
    image: '🏆'
  },
  {
    slug: 'best-olive-oil-for-longevity',
    title: 'Best Olive Oil for Longevity: Blue Zones & Anti-Aging Benefits',
    excerpt: 'Harvard 28-year study shows EVOO reduces mortality by 19%. Discover which oils centenarians use and why polyphenols extend lifespan.',
    category: 'Health',
    readTime: '11 min read',
    date: '2024-01-18',
    image: '⏳'
  },
  {
    slug: 'best-olive-oil-for-heart-health',
    title: 'Best Olive Oil for Heart Health: Cardiologist Recommendations',
    excerpt: 'PREDIMED study: 30% lower cardiovascular events with high polyphenol EVOO. Expert picks for heart disease prevention.',
    category: 'Health',
    readTime: '10 min read',
    date: '2024-01-16',
    image: '💓'
  },
  {
    slug: 'olive-oil-vs-other-oils',
    title: 'Olive Oil vs Other Oils: Which is Healthiest? Complete Comparison',
    excerpt: 'EVOO vs coconut, avocado, canola, seed oils. Compare polyphenols, omega ratios, oxidation resistance. The definitive guide.',
    category: 'Comparison',
    readTime: '9 min read',
    date: '2024-01-15',
    image: '⚖️'
  },
  {
    slug: 'olive-oil-for-brain-health-dementia',
    title: 'Olive Oil for Brain Health & Dementia Prevention (Research 2024)',
    excerpt: 'Oleocanthal clears amyloid-beta plaques. MIND diet reduces Alzheimer\'s risk by 53%. Neuroprotective benefits explained.',
    category: 'Health',
    readTime: '9 min read',
    date: '2024-01-14',
    image: '🧠'
  },
  {
    slug: 'best-olive-oil-for-cooking',
    title: 'Best Olive Oil for Cooking: Smoke Point, Heat Stability & Safety',
    excerpt: 'Smoke point myth debunked. Australian study proves EVOO is most stable for frying. Safe cooking temperatures explained.',
    category: 'Cooking',
    readTime: '8 min read',
    date: '2024-01-12',
    image: '🔥'
  },
  {
    slug: 'olive-oil-anti-inflammatory',
    title: "Olive Oil's Anti-Inflammatory Power: Oleocanthal vs Ibuprofen",
    excerpt: 'How oleocanthal in high-polyphenol EVOO works like ibuprofen to reduce chronic inflammation — with the science explained.',
    category: 'Science',
    readTime: '10 min read',
    date: '2024-10-04',
    image: '💊'
  },
  {
    slug: 'olive-oil-longevity-blue-zones',
    title: 'Olive Oil & Longevity: Why Blue Zones Live Longer',
    excerpt: 'Blue Zone populations consume EVOO daily. Learn the evidence, dosage, and why polyphenols support longer life.',
    category: 'Health',
    readTime: '12 min read',
    date: '2024-10-04',
    image: '🌍'
  },
  {
    slug: 'how-to-store-olive-oil-after-opening',
    title: 'How to Store Olive Oil After Opening: Complete Guide',
    excerpt: 'Keep EVOO fresh with the right temperature, light protection, and container tips to preserve polyphenols.',
    category: 'Storage',
    readTime: '12 min read',
    date: '2024-10-02',
    image: '🛡️'
  },
  {
    slug: 'what-are-polyphenols-olive-oil',
    title: 'What Are Polyphenols in Olive Oil? Complete Guide 2024',
    excerpt: 'Discover everything about polyphenols in EVOO: what they are, health benefits, how much you need, and why they matter for heart health and longevity.',
    category: 'Education',
    readTime: '8 min read',
    date: '2024-10-01',
    image: '🧬'
  },
  {
    slug: 'how-to-choose-high-polyphenol-olive-oil',
    title: 'How to Choose High Polyphenol Olive Oil: Expert Buying Guide',
    excerpt: 'Learn the exact criteria for selecting high polyphenol EVOO. What to look for on labels, which certifications matter, and how to avoid fake "health claims".',
    category: 'Buying Guide',
    readTime: '10 min read',
    date: '2024-09-28',
    image: '🛒'
  },
  {
    slug: 'health-benefits-high-polyphenol-evoo',
    title: '7 Science-Backed Health Benefits of High Polyphenol EVOO',
    excerpt: 'From heart health to brain function: the proven health benefits of high polyphenol olive oil backed by clinical studies and research.',
    category: 'Health',
    readTime: '12 min read',
    date: '2024-09-25',
    image: '❤️'
  },
  {
    slug: 'best-olive-cultivars-high-polyphenols',
    title: 'Best Olive Cultivars for High Polyphenols (Koroneiki vs Picual)',
    excerpt: 'Koroneiki, Picual, Coratina, or Arbequina? Compare olive varieties by polyphenol content and discover which cultivars produce the healthiest oil.',
    category: 'Research',
    readTime: '9 min read',
    date: '2024-09-22',
    image: '🫒'
  },
  {
    slug: 'oleocanthal-oleacein-explained',
    title: 'Oleocanthal and Oleacein: The Powerful Polyphenols in EVOO',
    excerpt: 'Deep dive into oleocanthal and oleacein - the anti-inflammatory compounds that give quality EVOO its "peppery throat" and health benefits.',
    category: 'Science',
    readTime: '11 min read',
    date: '2024-09-20',
    image: '🔬'
  },
  {
    slug: 'how-much-polyphenol-olive-oil-daily',
    title: 'How Much Polyphenol Olive Oil Should You Consume Daily?',
    excerpt: 'EU health claim requires 5mg hydroxytyrosol derivatives per 20g. Calculate your optimal daily EVOO intake based on polyphenol content.',
    category: 'Health',
    readTime: '7 min read',
    date: '2024-09-18',
    image: '📊'
  },
  {
    slug: 'greek-vs-italian-vs-spanish-olive-oil',
    title: 'Greek vs Italian vs Spanish Olive Oil: Polyphenol Comparison',
    excerpt: 'Which country produces the highest polyphenol EVOO? Compare Mediterranean regions, cultivars, and why Greek Koroneiki often ranks highest.',
    category: 'Comparison',
    readTime: '10 min read',
    date: '2024-09-15',
    image: '🌍'
  },
  {
    slug: 'how-to-store-high-polyphenol-olive-oil',
    title: 'How to Store High Polyphenol Olive Oil (Prevent Oxidation)',
    excerpt: 'Polyphenols degrade ~46% per year with poor storage. Learn optimal storage conditions, temperature, light protection, and shelf life.',
    category: 'Tips',
    readTime: '6 min read',
    date: '2024-09-12',
    image: '🏺'
  },
  {
    slug: 'lab-testing-methods-polyphenol-measurement',
    title: 'Lab Testing Methods: HPLC vs qNMR vs Folin for Polyphenols',
    excerpt: 'Understanding HPLC, qNMR, and Folin-Ciocalteu methods for measuring polyphenols. Which lab tests are most accurate?',
    category: 'Science',
    readTime: '9 min read',
    date: '2024-09-10',
    image: '⚗️'
  },
  {
    slug: 'early-harvest-vs-late-harvest-olive-oil',
    title: 'Early Harvest vs Late Harvest Olive Oil: Polyphenol Differences',
    excerpt: 'Early harvest olives contain 2-3x more polyphenols than late harvest. Learn about harvest timing and its impact on health benefits.',
    category: 'Research',
    readTime: '8 min read',
    date: '2024-09-08',
    image: '🌱'
  },
  {
    slug: 'olive-oil-polyphenol-myths-debunked',
    title: 'Olive Oil Polyphenol Myths Debunked: What Science Actually Says',
    excerpt: 'All EVOO is healthy? Cold-pressed means quality? Italian is best? We debunk 10 common olive oil myths with scientific evidence.',
    category: 'Education',
    readTime: '10 min read',
    date: '2024-09-05',
    image: '❌'
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#060e1a]">
      {/* Hero Section — dark, matches research/about */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#061226] via-[#0a1f3a] to-[#07382d] border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/[0.05] rounded-full blur-[100px]" />
        <div className="absolute inset-0 dot-grid-pattern pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 pt-6 pb-8 md:pt-8 md:pb-10 text-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-emerald-400/50 hover:text-emerald-400 text-xs transition-colors mb-4 group">
            <svg className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to Rankings
          </Link>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight text-white">
            Olive Oil <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Blog</span>
          </h1>
          <p className="text-white/35 text-sm mt-2 max-w-lg mx-auto">
            Science-backed guides, health research, and expert tips on high polyphenol EVOO
          </p>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white/[0.03] rounded-xl border border-white/[0.06] overflow-hidden hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all duration-200"
              >
                <div className="p-6">
                  {/* Icon */}
                  {/* Category & Date */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{post.image}</span>
                    <span className="text-[9px] font-bold text-emerald-400/60 uppercase tracking-wider">{post.category}</span>
                    <span className="text-[9px] text-white/20">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-sm font-bold text-white/90 mb-2 group-hover:text-emerald-300 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-white/30 text-xs leading-relaxed mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <span className="text-[10px] text-emerald-500/60 font-medium group-hover:text-emerald-400 transition-colors">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-10 text-center">
        <p className="text-xs text-white/20 mb-4">New articles published weekly</p>
        <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          View Oil Rankings
        </Link>
      </div>
    </main>
  )
}
