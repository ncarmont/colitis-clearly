import Link from 'next/link'
import type { Metadata } from 'next'

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
    slug: 'best-affordable-high-polyphenol-olive-oil',
    title: 'Best Affordable High Polyphenol Olive Oil (Budget-Friendly Picks)',
    excerpt: 'Cost-per-mg analysis reveals best value EVOOs. Get 500+ mg/kg polyphenols without breaking the bank.',
    category: 'Buying Guide',
    readTime: '7 min read',
    date: '2024-01-10',
    image: '💰'
  },
  {
    slug: 'how-to-taste-olive-oil-like-expert',
    title: 'How to Taste Olive Oil Like an Expert: Professional Tasting Guide',
    excerpt: 'Master the peppery throat test, identify defects, and understand flavor profiles. Professional sommelier techniques.',
    category: 'Education',
    readTime: '8 min read',
    date: '2024-01-08',
    image: '👅'
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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4YzAgNC40MiAxLjYgOC40OCA0LjI0IDExLjZDMi4xMiAzMi45MiAwIDM5LjEyIDAgNDZoMTJjMC02LjYzIDUuMzctMTIgMTItMTJzMTIgNS4zNyAxMiAxMmgxMmMwLTYuODgtMi4xMi0xMy4wOC00LjI0LTE2LjRDNTQuNCAyNi40OCA1NiAyMi40MiA1NiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium text-white">Expert EVOO Guides & Research</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              High Polyphenol
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200">
                Olive Oil Blog
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto font-light">
              Science-backed guides, health research, and expert tips on choosing the healthiest extra virgin olive oil
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{post.image}</span>
                  </div>

                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-green-400 font-semibold text-sm group-hover:gap-4 transition-all">
                    <span>Read Article</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl shadow-2xl border border-green-700/50 p-12 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4YzAgNC40MiAxLjYgOC40OCA0LjI0IDExLjZDMi4xMiAzMi45MiAwIDM5LjEyIDAgNDZoMTJjMC02LjYzIDUuMzctMTIgMTItMTJzMTIgNS4zNyAxMiAxMmgxMmMwLTYuODgtMi4xMi0xMy4wOC00LjI0LTE2LjRDNTQuNCAyNi40OCA1NiAyMi40MiA1NiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Find Your Perfect EVOO?
              </h2>
              <p className="text-xl text-green-50 mb-8">
                Explore our complete rankings of lab-verified high polyphenol olive oils
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-white text-green-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-50 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                <span>View Rankings</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
