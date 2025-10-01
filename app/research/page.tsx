import Link from 'next/link'

type Article = {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  gradient: string
}

export default function ResearchPage() {
  const articles: Article[] = [
    {
      id: 1,
      title: "Understanding Polyphenol Levels in Extra Virgin Olive Oil",
      excerpt: "A deep dive into how polyphenol content is measured, what affects these levels, and why it matters for your health. Learn about testing methods and what to look for.",
      category: "Science",
      readTime: "8 min read",
      date: "2024-03-15",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "The Mediterranean Diet & Longevity: The EVOO Connection",
      excerpt: "Scientific evidence linking high-polyphenol EVOO consumption to increased lifespan, reduced chronic disease, and improved quality of life in Mediterranean populations.",
      category: "Health",
      readTime: "10 min read",
      date: "2024-03-10",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "How Harvest Time Affects Polyphenol Content",
      excerpt: "Early harvest vs. late harvest olives produce dramatically different polyphenol levels. Discover why timing is everything in producing high-quality EVOO.",
      category: "Production",
      readTime: "6 min read",
      date: "2024-03-05",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      title: "Cardiovascular Benefits of High-Polyphenol EVOO",
      excerpt: "Clinical studies show that EVOOs with 500+ mg/kg polyphenols significantly reduce inflammation markers and improve heart health outcomes.",
      category: "Health",
      readTime: "12 min read",
      date: "2024-02-28",
      gradient: "from-red-400 to-red-600"
    },
    {
      id: 5,
      title: "Debunking EVOO Myths: Quality vs. Marketing",
      excerpt: "Not all 'extra virgin' olive oils are created equal. Learn to identify truly high-quality EVOO and avoid common marketing traps.",
      category: "Consumer Guide",
      readTime: "7 min read",
      date: "2024-02-20",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      id: 6,
      title: "The Role of Oleocanthal in Anti-Inflammatory Response",
      excerpt: "Oleocanthal, a key polyphenol in EVOO, has been shown to have anti-inflammatory properties similar to ibuprofen, but without the side effects.",
      category: "Science",
      readTime: "9 min read",
      date: "2024-02-15",
      gradient: "from-teal-400 to-cyan-600"
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-green-100 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Research & Insights
          </h1>
          <p className="text-green-100 text-xl max-w-3xl">
            Evidence-based articles on polyphenols, health benefits, and the science behind
            high-quality extra virgin olive oil.
          </p>
        </div>
      </header>

      {/* Comprehensive Research Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 text-white">
                <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Comprehensive Research
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Complete High-Polyphenol EVOO Analysis
                </h2>
                <p className="text-green-50 mb-6 text-lg">
                  In-depth investigation of verified producers, growing conditions, cultivars, and processing methods
                  that create the world's healthiest olive oils.
                </p>
                <Link
                  href="/research/overview"
                  className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                >
                  Read Full Research
                </Link>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-800 min-h-[300px] flex items-center justify-center">
                <div className="text-8xl opacity-20">🔬</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Topics Grid */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Deep Dive Research Topics</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link href="/research/producers" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-green-500 to-green-700 h-40 flex items-center justify-center">
                <span className="text-7xl opacity-40 group-hover:scale-110 transition">🏭</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
                  Verified High-Polyphenol Producers
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Analysis of EVOO brands with lab-verified polyphenol content above 500 mg/kg. Quality control
                  practices, certifications, and regional concentration by Greece, Spain, and Italy.
                </p>
                <div className="text-green-600 font-semibold">
                  Read More →
                </div>
              </div>
            </Link>

            <Link href="/research/regions" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-40 flex items-center justify-center">
                <span className="text-7xl opacity-40 group-hover:scale-110 transition">🌍</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  Geographic & Climatic Patterns
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  How altitude, soil, temperature, and water stress create the highest polyphenol levels. Analysis
                  of Crete, Sierra de Cazorla, and Puglia's elite microclimates.
                </p>
                <div className="text-blue-600 font-semibold">
                  Read More →
                </div>
              </div>
            </Link>

            <Link href="/research/cultivars" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 h-40 flex items-center justify-center">
                <span className="text-7xl opacity-40 group-hover:scale-110 transition">🌿</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                  Elite Olive Cultivars Ranked
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Genetic differences between Koroneiki, Picual, Coratina, and other varieties. Why some olives
                  naturally produce 2-3x more polyphenols than others.
                </p>
                <div className="text-purple-600 font-semibold">
                  Read More →
                </div>
              </div>
            </Link>

            <Link href="/research/processing" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 h-40 flex items-center justify-center">
                <span className="text-7xl opacity-40 group-hover:scale-110 transition">⚙️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                  Processing & Production Methods
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  How harvest timing, temperature control, and storage practices impact polyphenol retention.
                  The critical 2-4 hour harvest-to-mill window and why it matters.
                </p>
                <div className="text-orange-600 font-semibold">
                  Read More →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Articles</h2>
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 text-white">
                <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-green-50 mb-6 text-lg">
                  {articles[0].excerpt}
                </p>
                <div className="flex gap-4 text-green-100 text-sm mb-6">
                  <span>{articles[0].category}</span>
                  <span>•</span>
                  <span>{articles[0].readTime}</span>
                </div>
                <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                  Read Full Article
                </button>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-800 min-h-[300px] flex items-center justify-center">
                <div className="text-8xl opacity-20">📊</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 px-4 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-3 flex-wrap">
            <button className="px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition">
              All Articles
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition">
              Science
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition">
              Health
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition">
              Production
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition">
              Consumer Guide
            </button>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition group"
              >
                <div className={`h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                  <div className="text-6xl opacity-30 group-hover:scale-110 transition">
                    {article.category === 'Science' && '🔬'}
                    {article.category === 'Health' && '❤️'}
                    {article.category === 'Production' && '🌿'}
                    {article.category === 'Consumer Guide' && '🛒'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <button className="text-green-600 font-semibold hover:text-green-700">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Facts About Polyphenols
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
              <div className="text-4xl font-bold text-green-600 mb-2">250+</div>
              <div className="text-sm text-gray-600 mb-2">mg/kg</div>
              <p className="text-gray-800">
                Minimum polyphenol content for high-quality EVOO
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600 mb-2">mg/kg</div>
              <p className="text-gray-800">
                Exceptional quality threshold for premium EVOOs
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-600">
              <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
              <div className="text-sm text-gray-600 mb-2">compounds</div>
              <p className="text-gray-800">
                Different polyphenolic compounds found in EVOO
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-600">
              <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
              <div className="text-sm text-gray-600 mb-2">reduction</div>
              <p className="text-gray-800">
                Decrease in cardiovascular risk with regular consumption
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated on EVOO Research
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Get the latest articles and rankings delivered to your inbox
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Choose the Best EVOO?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our complete rankings based on polyphenol content
          </p>
          <Link
            href="/rankings"
            className="inline-block bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
          >
            View Rankings
          </Link>
        </div>
      </section>
    </main>
  )
}
