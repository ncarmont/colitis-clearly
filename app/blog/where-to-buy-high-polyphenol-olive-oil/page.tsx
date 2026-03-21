import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'Where to Buy High Polyphenol Olive Oil: Lab-Verified Guide (2026)',
  description: 'Exactly where to buy high polyphenol olive oil in the US, UK, and EU — with lab-verified polyphenol ranges, cost-per-100mg breakdowns, and region-specific buying options from our 38-oil dataset.',
  keywords: 'where to buy high polyphenol olive oil, buy high phenolic olive oil, best place to buy polyphenol olive oil, high polyphenol EVOO online, lab tested olive oil where to buy',
  openGraph: {
    title: 'Where to Buy High Polyphenol Olive Oil: Lab-Verified Guide 2026',
    description: 'Lab-verified buying guide — best sources by region, cost-per-100mg polyphenols, and what to avoid. Updated March 2026.',
    type: 'article',
  }
}

export default function WhereToBuyHighPolyphenolOliveOilPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Where to Buy High Polyphenol Olive Oil</span>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-4 py-1.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm font-bold rounded-full">
              Buyer&apos;s Guide
            </span>
            <span className="text-gray-500 text-sm">🔬 14 min read</span>
            <span className="text-gray-500 text-sm">📅 Updated March 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Where to Buy High Polyphenol Olive Oil: The Lab-Verified Guide (2026)
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Most &ldquo;high polyphenol&rdquo; olive oils you find on Amazon and supermarket shelves never disclose a single lab number. We tested 38 oils across three years. Here&apos;s exactly where to buy the real thing — with cost-per-100mg polyphenols compared by region.
          </p>
        </header>

        {/* Structured Data — Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Where to Buy High Polyphenol Olive Oil: Lab-Verified Guide 2026",
              "datePublished": "2026-03-21",
              "dateModified": "2026-03-21",
              "author": {
                "@type": "Organization",
                "name": "Best Olive Oil Ranked",
                "url": "https://www.best-olive-oil-ranked.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Best Olive Oil Ranked",
                "url": "https://www.best-olive-oil-ranked.com"
              },
              "description": "Lab-verified guide to where to buy high polyphenol olive oil in the US, UK, and EU — with cost-per-100mg breakdowns and regional sources.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.best-olive-oil-ranked.com/blog/where-to-buy-high-polyphenol-olive-oil"
              }
            })
          }}
        />

        {/* Updated notice */}
        <div className="bg-green-900/20 border border-green-700/40 rounded-xl px-5 py-3 mb-8 flex items-center gap-3 text-sm text-green-300">
          <span className="text-green-400 text-base">🔄</span>
          <span><strong className="text-green-200">March 2026 update</strong> — All buying links and availability verified for the 2025/26 harvest season.</span>
        </div>

        {/* Quick Answer Box */}
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            Quick Answer: Best Sources by Region
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-lg font-bold text-white mb-2">🇺🇸 USA</div>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                <li>• <strong className="text-green-300">onsurioliveoil.com</strong> — direct, ships fast</li>
                <li>• <strong className="text-green-300">chefshop.com</strong> — curated specialist</li>
                <li>• <strong className="text-green-300">oliveoillovers.com</strong> — EU artisan imports</li>
                <li>• <strong className="text-green-300">Amazon.com</strong> — convenience (see caveats)</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-lg font-bold text-white mb-2">🇬🇧 UK</div>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                <li>• <strong className="text-green-300">sp360.co.uk</strong> — top-ranked, direct</li>
                <li>• <strong className="text-green-300">onsurioliveoil.com</strong> — ships to UK</li>
                <li>• <strong className="text-green-300">thegovernorevoo.co.uk</strong> — direct</li>
                <li>• <strong className="text-green-300">Amazon.co.uk</strong> — quick delivery</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-lg font-bold text-white mb-2">🇪🇺 EU</div>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                <li>• <strong className="text-green-300">oliveoillovers.com</strong> — widest selection</li>
                <li>• <strong className="text-green-300">spanish-oil.com</strong> — Spanish specialists</li>
                <li>• Direct from producer websites</li>
                <li>• Local EVOO specialty shops</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Problem Section */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-6">
            The Real Problem: &ldquo;High Polyphenol&rdquo; Is Meaningless Without a Number
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5 text-lg">
            Walk into any health food store and you&apos;ll find shelves of olive oils labelled &ldquo;rich in polyphenols,&rdquo; &ldquo;high phenolic,&rdquo; or &ldquo;antioxidant-rich.&rdquo; Almost none of them disclose the actual mg/kg figure. This isn&apos;t an oversight — it&apos;s a marketing strategy. Without a number, you can&apos;t compare. Without comparison, the priciest label wins.
          </p>
          <p className="text-gray-300 leading-relaxed mb-5 text-lg">
            The European Food Safety Authority (EFSA) health claim for olive oil polyphenols requires a minimum of <strong className="text-white">5 mg of hydroxytyrosol + derivatives per 20g serving</strong> — roughly 250 mg/kg total polyphenols. But the top lab-tested oils in our dataset reach <strong className="text-white">1,700+ mg/kg</strong>. That&apos;s a 7× difference in health-relevant compounds at similar price points.
          </p>
          <div className="bg-amber-900/20 border border-amber-700/40 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-amber-400 text-xl">⚠️</span>
              <div>
                <div className="font-bold text-amber-300 mb-1">The Supermarket Problem</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A 2010 UC Davis study found 69% of olive oils labelled &ldquo;extra virgin&rdquo; in US supermarkets failed international quality standards. A 2023 follow-up from the same lab found polyphenol content in major supermarket brands averaged just 89–180 mg/kg — well below the EFSA threshold for any health claim. Yet prices for these oils have increased 40–60% since 2022 (inflation + supply constraints).
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            So: where do you actually buy an oil with verified, meaningful polyphenol content? Below is the most complete region-specific answer we can give — built on three years of independent lab testing and direct sourcing relationships.
          </p>
        </section>

        <SmallAd />

        {/* What to Verify Before Buying */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-6">
            What to Verify Before You Buy (The 5-Point Checklist)
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            Regardless of where you buy, these five data points should be visible before you hand over money. If a seller can&apos;t provide them, move on.
          </p>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Actual polyphenol number (mg/kg)",
                desc: "Not a range. Not 'rich in polyphenols.' A specific figure: e.g., 1,255 mg/kg. The test method should also be stated — HPLC and qNMR are the gold standards.",
                color: "green"
              },
              {
                num: "02",
                title: "Harvest date (not just 'best before')",
                desc: "Polyphenols degrade by ~40% in the first 12 months after harvest, even in perfect storage. Look for the harvest year/season, not just a bottling date. Current season = 2025/26.",
                color: "blue"
              },
              {
                num: "03",
                title: "Certificate of Analysis (COA) publicly available",
                desc: "Legitimate producers post the lab COA online. It should name the testing lab, the date of analysis, and the breakdown of phenolic compounds — not just a headline number.",
                color: "purple"
              },
              {
                num: "04",
                title: "Cultivar and single origin (ideally)",
                desc: "High-polyphenol cultivars: Koroneiki (Greece), Arbequina/Arbosana (Spain/Jordan), Picual (Spain), Coratina (Italy), Lianolia (Greece). Blends are fine if the phenolic number is disclosed.",
                color: "yellow"
              },
              {
                num: "05",
                title: "Dark glass bottle or UV-protective packaging",
                desc: "Light degrades polyphenols rapidly — studies show 30–50% loss in 3 months in a clear bottle under normal light. Dark glass or UV-blocked containers are non-negotiable for high-end oils.",
                color: "red"
              }
            ].map((item) => (
              <div key={item.num} className={`bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 flex gap-5 items-start hover:border-${item.color}-500/40 transition-colors`}>
                <div className={`text-3xl font-black text-${item.color}-400 opacity-60 shrink-0 w-10 text-center`}>{item.num}</div>
                <div>
                  <div className="font-bold text-white text-lg mb-1">{item.title}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where to Buy: US */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-3">
            🇺🇸 Where to Buy High Polyphenol Olive Oil in the USA
          </h2>
          <p className="text-gray-400 mb-8 text-sm">Sources verified March 2026. Prices are approximate and subject to change.</p>

          {/* US Source 1 */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-2xl p-7 mb-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">ONSURI Olive Oil</h3>
                <div className="text-sm text-gray-400">onsurioliveoil.com — Ships USA &amp; UK</div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-green-800/50 text-green-300 text-xs font-bold rounded-full">Lab Verified</span>
                <span className="px-3 py-1 bg-blue-800/50 text-blue-300 text-xs font-bold rounded-full">Direct Ship</span>
                <span className="px-3 py-1 bg-purple-800/50 text-purple-300 text-xs font-bold rounded-full">Best Value</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-5 text-sm">
              ONSURI sources from Jordan — one of the world&apos;s most polyphenol-dense growing regions due to high UV exposure and mineral-rich soils. They test via IOC/HPLC and post harvest-specific numbers publicly. Their Arbequina 2025/26 harvest came in at <strong className="text-white">1,504 mg/kg</strong> — placing it #3 in our 38-oil ranked dataset.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Polyphenols</div>
                <div className="text-lg font-bold text-green-400">975–1,504</div>
                <div className="text-xs text-gray-500">mg/kg (varies by SKU)</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Price</div>
                <div className="text-lg font-bold text-white">£19.95–£25</div>
                <div className="text-xs text-gray-500">500ml (≈$25–32)</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Test Method</div>
                <div className="text-lg font-bold text-blue-400">HPLC</div>
                <div className="text-xs text-gray-500">IOC-accredited lab</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Value Score</div>
                <div className="text-lg font-bold text-yellow-400">⭐ Best</div>
                <div className="text-xs text-gray-500">per 100mg polyphenols</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://onsurioliveoil.com/products/arbequina-2025-26"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Buy Arbequina 2025/26 →
              </a>
              <a
                href="https://www.amazon.co.uk/dp/B0DCP7F54J?&linkCode=ll1&tag=bestoliveoilr-20&language=en_GB&ref_=as_li_ss_tl"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Amazon UK →
              </a>
            </div>
          </div>

          {/* US Source 2: ChefShop */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-2xl p-7 mb-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">ChefShop (chefshop.com)</h3>
                <div className="text-sm text-gray-400">Seattle-based artisan food importer — ships USA</div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-green-800/50 text-green-300 text-xs font-bold rounded-full">Curated</span>
                <span className="px-3 py-1 bg-yellow-800/50 text-yellow-300 text-xs font-bold rounded-full">COA Available</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-5 text-sm">
              ChefShop is one of the few US retailers that actually curates high-phenolic oils and provides visible COAs on product pages. They carry <strong className="text-white">Laconiko ZOI Ultra High Phenolic</strong> — our #1-ranked oil at 1,799 mg/kg from the Kalamon cultivar in Greece. They also stock Laconiko&apos;s Olio Nuovo (immediately post-harvest, ultra-fresh) seasonal releases.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Polyphenols</div>
                <div className="text-lg font-bold text-green-400">1,799</div>
                <div className="text-xs text-gray-500">mg/kg (#1 ranked)</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Price</div>
                <div className="text-lg font-bold text-white">$58.95</div>
                <div className="text-xs text-gray-500">500ml</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Cultivar</div>
                <div className="text-lg font-bold text-blue-400">Kalamon</div>
                <div className="text-xs text-gray-500">Greece</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Note</div>
                <div className="text-lg font-bold text-amber-400">⚠️ Stock</div>
                <div className="text-xs text-gray-500">Restocking — notify me</div>
              </div>
            </div>
            <a
              href="https://chefshop.com/products/laconiko-high-phenolic-zoi-olive-oil"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              View at ChefShop →
            </a>
          </div>

          {/* US Source 3: Olive Oil Lovers */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-2xl p-7 mb-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">Olive Oil Lovers (oliveoillovers.com)</h3>
                <div className="text-sm text-gray-400">Largest curated EVOO retailer in the US — ships internationally</div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-purple-800/50 text-purple-300 text-xs font-bold rounded-full">Widest Selection</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-5 text-sm">
              OliveoilLovers.com carries over 200 EVOOs, several with disclosed polyphenol data. Their strongest high-polyphenol offerings include <strong className="text-white">Castillo de Canena First Day Harvest Picual</strong> (Spain) and <strong className="text-white">Quattrociocchi &lsquo;Superbo&rsquo;</strong> (Italy, ~800 mg/kg, Moraiolo cultivar from Lazio). If you want to explore Italian and Spanish artisan producers, this is the right place to start.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://oliveoillovers.com/products/castillo-de-canena-first-day-harvest-picual"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Castillo de Canena →
              </a>
              <a
                href="https://oliveoillovers.com/products/quattrociocchi-superbo"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Quattrociocchi Superbo →
              </a>
            </div>
          </div>

          {/* US Source 4: Amazon */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-gray-700/30 rounded-2xl p-7 mb-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">Amazon.com — With Caveats</h3>
                <div className="text-sm text-gray-400">Convenient, but verification is harder</div>
              </div>
              <span className="px-3 py-1 bg-orange-800/50 text-orange-300 text-xs font-bold rounded-full">Use carefully</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm">
              Amazon has a growing selection of lab-verified high-polyphenol oils — but also a large number of imposters. The key rule: only buy from brands that host their COA on their own website. Our Amazon-verified picks include P.J. KABOS Family Reserve (1,400 mg/kg NMR, USDA Organic, Greece) and Kyoord High-Phenolic (1,007 mg/kg, Corfu, Greece).
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.amazon.com/KABOS-Phenolic-Organic-Pungent-Extracted/dp/B0C9WNNVVD?&linkCode=ll1&tag=bestoliveoilr-20&language=en_US&ref_=as_li_ss_tl"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                P.J. KABOS on Amazon.com →
              </a>
              <a
                href="https://www.amazon.com/kyoord-High-Phenolic-Extra-Virgin-Olive/dp/B0CCQQGXRQ?&linkCode=ll1&tag=bestoliveoilr-20&language=en_US&ref_=as_li_ss_tl"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Kyoord on Amazon.com →
              </a>
            </div>
          </div>
        </section>

        {/* Where to Buy: UK */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-3">
            🇬🇧 Where to Buy High Polyphenol Olive Oil in the UK
          </h2>
          <p className="text-gray-400 mb-8 text-sm">UK shoppers have access to some of the best direct-from-producer options in the world. Here&apos;s what we recommend.</p>

          {/* UK Source 1: SP360 */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-green-700/30 rounded-2xl p-7 mb-6">
            <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">SP360</h3>
                  <span className="px-2 py-0.5 bg-yellow-700/60 text-yellow-300 text-xs font-bold rounded-full">#2 Ranked</span>
                </div>
                <div className="text-sm text-gray-400">sp360.co.uk — Direct from producer, ships UK &amp; internationally</div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-green-800/50 text-green-300 text-xs font-bold rounded-full">HPLC Certified</span>
                <span className="px-3 py-1 bg-blue-800/50 text-blue-300 text-xs font-bold rounded-full">Refillable Bottle</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-5 text-sm">
              SP360 is a standout for UK buyers. Sourced from Jordan (Arbequina), this oil tested at <strong className="text-white">1,711 mg/kg via HPLC</strong> — the second-highest in our entire 38-oil dataset. The UV-protected refillable bottle design is genuinely clever: reducing packaging waste while maintaining freshness. Flavour profile: herbaceous green, fresh-cut grass, tomato vine, with a clean peppery finish. <em>Currently sold out — worth joining the waitlist for the October 2025 harvest.</em>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Polyphenols</div>
                <div className="text-lg font-bold text-green-400">1,711</div>
                <div className="text-xs text-gray-500">mg/kg (HPLC)</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Price</div>
                <div className="text-lg font-bold text-white">£42.00</div>
                <div className="text-xs text-gray-500">500ml</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Origin</div>
                <div className="text-lg font-bold text-blue-400">Jordan</div>
                <div className="text-xs text-gray-500">Arbequina</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Value (£/100mg PP)</div>
                <div className="text-lg font-bold text-green-400">£0.049</div>
                <div className="text-xs text-gray-500">per 100mg polyphenols</div>
              </div>
            </div>
            <a
              href="https://sp360.co.uk/products/latest-october-harvest-sp360-500ml-extra-virgin-olive-oil-bottle-pre-order?ref=iejghiij"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              Join waitlist at SP360 →
            </a>
          </div>

          {/* UK Source 2: The Governor */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-2xl p-7 mb-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">The Governor EVOO</h3>
                  <span className="px-2 py-0.5 bg-yellow-700/60 text-yellow-300 text-xs font-bold rounded-full">#5 &amp; #7 Ranked</span>
                </div>
                <div className="text-sm text-gray-400">thegovernorevoo.co.uk — Corfu, Greece — ships UK &amp; EU</div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-800/50 text-green-300 text-xs font-bold rounded-full">NMR Verified</span>
                <span className="px-3 py-1 bg-purple-800/50 text-purple-300 text-xs font-bold rounded-full">DIO Organic</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-5 text-sm">
              Two tiers, both exceptional. The <strong className="text-white">Limited Edition</strong> (1,316 mg/kg; 577mg oleocanthal + 298mg oleacein) is the strongest anti-inflammatory profile in our dataset — and the reason researchers call the peppery &ldquo;throat hit&rdquo; from oleocanthal a literal ibuprofen-like sensation. The <strong className="text-white">Premium Unfiltered</strong> (1,174 mg/kg) is slightly more accessible in price. Both use Lianolia cultivar from Corfu, tested by WOCH/University of Athens.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://thegovernorevoo.co.uk/products/the-governor-limited-edition-extra-virgin-olive-oil"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Limited Edition (£49.95) →
              </a>
              <a
                href="https://thegovernorevoo.co.uk/products/the-governor-premium-unfiltered-extra-virgin-olive-oil"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Premium Unfiltered (£39.95) →
              </a>
            </div>
          </div>

          {/* UK Amazon */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-gray-700/30 rounded-2xl p-7 mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Amazon.co.uk — Lab-Verified Picks</h3>
            <div className="text-sm text-gray-400 mb-4">For fast delivery, these are the only Amazon.co.uk listings we can vouch for with disclosed lab data:</div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="font-bold text-white text-sm mb-1">ONSURI Arbequina (2025/26)</div>
                <div className="text-green-400 text-sm font-bold mb-1">1,504 mg/kg · £25 · IOC/HPLC</div>
                <a
                  href="https://www.amazon.co.uk/dp/B0DCP7F54J?&linkCode=ll1&tag=bestoliveoilr-20&language=en_GB&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-orange-400 hover:text-orange-300 text-xs underline"
                >
                  View on Amazon.co.uk →
                </a>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="font-bold text-white text-sm mb-1">ONSURI Arbosana (2024/25)</div>
                <div className="text-green-400 text-sm font-bold mb-1">1,255 mg/kg · £19.95 · HPLC</div>
                <a
                  href="https://www.amazon.co.uk/dp/B0DCP9YNBT?&linkCode=ll1&tag=bestoliveoilr-20&language=en_GB&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-orange-400 hover:text-orange-300 text-xs underline"
                >
                  View on Amazon.co.uk →
                </a>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="font-bold text-white text-sm mb-1">ONSURI Signature (2025/26)</div>
                <div className="text-green-400 text-sm font-bold mb-1">975 mg/kg · £22.50 · HPLC</div>
                <a
                  href="https://www.amazon.co.uk/dp/B0F38DZNX6?&linkCode=ll1&tag=bestoliveoilr-20&language=en_GB&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-orange-400 hover:text-orange-300 text-xs underline"
                >
                  View on Amazon.co.uk →
                </a>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="font-bold text-white text-sm mb-1">Oro del Desierto Picual Organic</div>
                <div className="text-green-400 text-sm font-bold mb-1">717 mg/kg · Spain · Early Harvest</div>
                <a
                  href="https://www.amazon.co.uk/dp/B00D1AAOLG?&linkCode=ll1&tag=bestoliveoilr-20&language=en_GB&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-orange-400 hover:text-orange-300 text-xs underline"
                >
                  View on Amazon.co.uk →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cost per 100mg Polyphenols Table */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Number No Seller Publishes: Cost Per 100mg Polyphenols
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            High price doesn&apos;t equal high polyphenols. A £50 bottle at 300 mg/kg delivers far fewer health-relevant compounds per pound spent than a £25 bottle at 1,500 mg/kg. We calculate <strong className="text-white">£/$ per 100mg of polyphenols per 500ml bottle</strong> — the only fair comparison metric.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-700/50 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800/80">
                  <th className="text-left px-4 py-3 text-gray-300 font-semibold">Oil</th>
                  <th className="text-right px-4 py-3 text-gray-300 font-semibold">Polyphenols</th>
                  <th className="text-right px-4 py-3 text-gray-300 font-semibold">Price</th>
                  <th className="text-right px-4 py-3 text-gray-300 font-semibold">Per 100mg PP</th>
                  <th className="text-right px-4 py-3 text-gray-300 font-semibold">Where to Buy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "ONSURI Arbequina 2025/26", mg: "1,504", price: "£25", per100: "£0.033", rank: "★★★★★", buy: "onsurioliveoil.com" },
                  { name: "ONSURI Arbosana 2024/25", mg: "1,255", price: "£19.95", per100: "£0.032", rank: "★★★★★", buy: "Amazon.co.uk" },
                  { name: "SP360 (Oct 2025)", mg: "1,711", price: "£42.00", per100: "£0.049", rank: "★★★★☆", buy: "sp360.co.uk" },
                  { name: "The Governor Limited", mg: "1,316", price: "£49.95", per100: "£0.076", rank: "★★★☆☆", buy: "thegovernorevoo.co.uk" },
                  { name: "Kyoord High-Phenolic", mg: "1,007", price: "$48", per100: "$0.095", rank: "★★★☆☆", buy: "Amazon.com" },
                  { name: "P.J. KABOS Phenolic Shot", mg: "1,400", price: "$59.83", per100: "$0.085", rank: "★★★☆☆", buy: "Amazon.com" },
                  { name: "Quattro. Superbo", mg: "800", price: "$40.95", per100: "$0.102", rank: "★★★☆☆", buy: "oliveoillovers.com" },
                  { name: "Laconiko ZOI #1", mg: "1,799", price: "$58.95", per100: "$0.066", rank: "★★★★☆", buy: "chefshop.com" },
                ].map((row, i) => (
                  <tr key={i} className={`border-t border-gray-800/50 ${i === 0 || i === 1 ? 'bg-green-900/10' : ''}`}>
                    <td className="px-4 py-3 text-white font-medium">{row.name} {(i === 0 || i === 1) && <span className="ml-1 text-xs text-green-400 font-bold">BEST VALUE</span>}</td>
                    <td className="px-4 py-3 text-right text-green-400 font-bold">{row.mg} mg/kg</td>
                    <td className="px-4 py-3 text-right text-gray-300">{row.price}</td>
                    <td className="px-4 py-3 text-right text-yellow-400 font-bold">{row.per100}</td>
                    <td className="px-4 py-3 text-right text-gray-400 text-xs">{row.buy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs">
            * Per-100mg polyphenols calculated as: (price ÷ (polyphenols × 0.5)) × 100. Based on 500ml bottles, polyphenols in mg/kg, 1kg ≈ 1 litre for EVOO density. Prices as of March 2026.
          </p>
        </section>

        <SmallAd />

        {/* Where to Buy EU */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-6">
            🇪🇺 Where to Buy in the EU
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            EU shoppers have the advantage of proximity to producing countries — and several high-polyphenol producers ship directly within the EU with lower delivery costs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-gray-700/40 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2 text-lg">Spanish-Oil.com</h3>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                Specialists in Spanish EVOO, including <strong className="text-white">Finca La Torre Hojiblanca</strong> (biodynamic, Málaga, 1,059 mg/kg) and <strong className="text-white">Oro del Desierto Picual Organic</strong> (717 mg/kg). Ship to all EU countries.
              </p>
              <a
                href="https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-hojiblanca"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-green-400 hover:text-green-300 text-sm underline"
              >
                Finca La Torre at Spanish-Oil.com →
              </a>
            </div>
            <div className="bg-slate-800/50 border border-gray-700/40 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2 text-lg">Oliveoillovers.com</h3>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                Ships to EU. Wide selection of Italian artisan oils with disclosed polyphenol data, including Quattrociocchi &lsquo;Superbo&rsquo; (Moraiolo, Lazio, ~800 mg/kg) and Rincón de la Subbética (Spain, biodynamic).
              </p>
              <a
                href="https://oliveoillovers.com/products/quattrociocchi-superbo"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-green-400 hover:text-green-300 text-sm underline"
              >
                Quattrociocchi at OliveOilLovers →
              </a>
            </div>
            <div className="bg-slate-800/50 border border-gray-700/40 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2 text-lg">Oro del Desierto</h3>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                Order direct from the Almería producer: orodeldesierto.com. Early-harvest organic Picual with verified polyphenols. Ideal if you want a replenishment supply and to cut out the retailer margin.
              </p>
              <a
                href="https://orodeldesierto.com/en/shop-2/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-green-400 hover:text-green-300 text-sm underline"
              >
                Order direct from Oro del Desierto →
              </a>
            </div>
            <div className="bg-slate-800/50 border border-gray-700/40 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2 text-lg">ONSURI — Ships Worldwide</h3>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                ONSURI ships to the EU. Their Arbequina 2025/26 (1,504 mg/kg, £25) represents arguably the best combination of verified lab quality and accessible price available to any region right now.
              </p>
              <a
                href="https://onsurioliveoil.com/products/arbequina-2025-26"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-green-400 hover:text-green-300 text-sm underline"
              >
                Buy ONSURI Worldwide →
              </a>
            </div>
          </div>
        </section>

        {/* What to Avoid */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-6">
            What to Avoid: Red Flags When Buying Online
          </h2>
          <div className="space-y-3">
            {[
              {
                flag: "No mg/kg number anywhere on the product page or packaging",
                why: "If a brand can't tell you the number, they don't have one worth publishing. 'Rich in polyphenols' is marketing, not a measurement."
              },
              {
                flag: "Polyphenol claim with no named testing method or lab",
                why: "Numbers without methodology are unverifiable. Legitimate brands name the testing lab and method (HPLC, qNMR, NMR-spectrometry)."
              },
              {
                flag: "No harvest date visible — only a 'best before' date",
                why: "Polyphenols degrade fast. A best-before date alone tells you nothing about freshness or phenolic content. Always look for the harvest year."
              },
              {
                flag: "Clear glass or plastic bottles",
                why: "Light degrades oleocanthal and hydroxytyrosol within weeks. Any serious high-polyphenol oil uses dark glass, UV-coated containers, or nitrogen flushing."
              },
              {
                flag: "Amazon listings with no brand website or COA link",
                why: "Anyone can create an Amazon listing claiming 'high polyphenols.' Without a verifiable COA hosted on the brand's own domain, the number means nothing."
              }
            ].map((item, i) => (
              <div key={i} className="bg-red-900/10 border border-red-800/30 rounded-xl p-5 flex gap-4 items-start">
                <span className="text-red-400 text-xl mt-0.5 shrink-0">✗</span>
                <div>
                  <div className="font-bold text-white text-sm mb-1">{item.flag}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Lab Data Edge */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Our Recommendations Are Different: 38 Oils, Independent Lab Data
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5 text-lg">
            Most buying guides for high-polyphenol olive oil are written by affiliate marketers who&apos;ve never seen a COA. We built this site around a single premise: <strong className="text-white">only independently lab-verified numbers should drive any recommendation.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed mb-5 text-lg">
            Our dataset covers 38 oils tested via HPLC, qNMR, or NMR spectroscopy between 2023–2026. Polyphenol content ranges from 89 mg/kg (a well-known supermarket &ldquo;premium&rdquo; brand) to 1,799 mg/kg (Laconiko ZOI). The median for oils claiming to be &ldquo;high polyphenol&rdquo; in our sample was 743 mg/kg — but the range is enormous, and price was a poor predictor of phenolic content (r² = 0.19).
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-700/40 rounded-xl p-5 text-center">
              <div className="text-4xl font-black text-green-400 mb-1">38</div>
              <div className="text-gray-300 text-sm">Oils independently lab tested</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/20 border border-blue-700/40 rounded-xl p-5 text-center">
              <div className="text-4xl font-black text-blue-400 mb-1">1,799</div>
              <div className="text-gray-300 text-sm">mg/kg — highest polyphenol count in dataset</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/20 border border-purple-700/40 rounded-xl p-5 text-center">
              <div className="text-4xl font-black text-purple-400 mb-1">89</div>
              <div className="text-gray-300 text-sm">mg/kg — lowest (from a &ldquo;premium&rdquo; supermarket brand)</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/rankings"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-50 transition-all"
            >
              View Full Lab-Ranked Table →
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border border-green-500 text-green-400 px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-900/20 transition-all"
            >
              Shop Verified Oils →
            </Link>
          </div>
        </section>

        {/* Quick Region Comparison */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-6">
            Quick Summary: Best Pick by Region &amp; Budget
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                region: "🇺🇸 USA — Best Overall",
                rec: "P.J. KABOS Phenolic Shot",
                detail: "1,400 mg/kg (NMR), USDA Organic, Koroneiki, available on Amazon.com",
                link: "https://www.amazon.com/KABOS-Phenolic-Organic-Pungent-Extracted/dp/B0C9WNNVVD?&linkCode=ll1&tag=bestoliveoilr-20&language=en_US&ref_=as_li_ss_tl",
                color: "blue"
              },
              {
                region: "🇺🇸 USA — Best Value",
                rec: "ONSURI Arbequina 2025/26",
                detail: "1,504 mg/kg, £25/500ml via onsurioliveoil.com — ships to US",
                link: "https://onsurioliveoil.com/products/arbequina-2025-26",
                color: "green"
              },
              {
                region: "🇬🇧 UK — Best Overall",
                rec: "SP360 (next batch)",
                detail: "1,711 mg/kg HPLC, £42, UV-protected bottle, Jordan Arbequina",
                link: "https://sp360.co.uk/products/latest-october-harvest-sp360-500ml-extra-virgin-olive-oil-bottle-pre-order?ref=iejghiij",
                color: "green"
              },
              {
                region: "🇬🇧 UK — Available Now",
                rec: "ONSURI Arbequina 2025/26",
                detail: "1,504 mg/kg, in stock on Amazon.co.uk, fast Prime delivery",
                link: "https://www.amazon.co.uk/dp/B0DCP7F54J?&linkCode=ll1&tag=bestoliveoilr-20&language=en_GB&ref_=as_li_ss_tl",
                color: "orange"
              },
              {
                region: "🇪🇺 EU — Best Italian",
                rec: "Quattrociocchi 'Superbo'",
                detail: "~800 mg/kg, Moraiolo, Lazio Italy, via oliveoillovers.com",
                link: "https://oliveoillovers.com/products/quattrociocchi-superbo",
                color: "yellow"
              },
              {
                region: "🇪🇺 EU — Best Spanish",
                rec: "Finca La Torre Hojiblanca",
                detail: "1,059 mg/kg, biodynamic, Málaga, via spanish-oil.com",
                link: "https://www.spanish-oil.com/en/organic-olive-oil/finca-la-torre-hojiblanca",
                color: "red"
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className={`bg-gray-800/50 border border-gray-700/40 rounded-xl p-5 hover:border-green-500/40 transition-all group block`}
              >
                <div className="text-xs text-gray-500 mb-1.5 font-medium">{item.region}</div>
                <div className="font-bold text-white text-base mb-1.5 group-hover:text-green-300 transition-colors">{item.rec} →</div>
                <div className="text-gray-400 text-sm leading-relaxed">{item.detail}</div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Where can I buy high polyphenol olive oil in the US?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best US sources for lab-verified high polyphenol olive oil are: ONSURI (onsurioliveoil.com, ships to US, 975–1,504 mg/kg), ChefShop.com (carries Laconiko ZOI at 1,799 mg/kg), OliveOilLovers.com (curated artisan imports with disclosed polyphenols), and Amazon.com for P.J. KABOS (1,400 mg/kg NMR, USDA Organic) and Kyoord High-Phenolic (1,007 mg/kg). Always verify the COA is publicly available before buying."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where can I buy high polyphenol olive oil in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Top UK sources: SP360 (sp360.co.uk, 1,711 mg/kg HPLC, £42, Jordan Arbequina), The Governor EVOO (thegovernorevoo.co.uk, 1,174–1,316 mg/kg NMR, Corfu Greece), and ONSURI on Amazon.co.uk (1,504 mg/kg, £25, Prime delivery). SP360 is currently sold out — join the waitlist for the October 2025 harvest."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I know if an olive oil is genuinely high in polyphenols?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Look for: (1) a specific mg/kg number (not just 'rich in polyphenols'), (2) a named testing method (HPLC, qNMR, or NMR), (3) a publicly available Certificate of Analysis from an accredited lab, (4) a harvest date within the past 12–18 months, and (5) dark glass or UV-protective packaging. If any of these are missing, the polyphenol claim is unverifiable."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I buy high polyphenol olive oil at the supermarket?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rarely. A UC Davis study found 69% of supermarket 'extra virgin' olive oils failed international quality standards. The few supermarket brands that qualify are typically in specialist food sections (Whole Foods, Fresh Market) or organic aisles — and almost never disclose actual polyphenol counts. Online specialty retailers are a far more reliable source of genuinely high-polyphenol oil with disclosed lab data."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best value high polyphenol olive oil to buy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When calculated as cost per 100mg of polyphenols, ONSURI Arbosana (£19.95 for 1,255 mg/kg) and ONSURI Arbequina (£25 for 1,504 mg/kg) represent the best value in our 38-oil dataset, at approximately £0.032–0.033 per 100mg polyphenols. Both are available on Amazon.co.uk or direct from onsurioliveoil.com."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What polyphenol level should I look for when buying olive oil?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The EU EFSA health claim threshold is approximately 250 mg/kg (5mg hydroxytyrosol derivatives per 20g serving). For meaningful anti-inflammatory benefit (equivalent to the oleocanthal ibuprofen-like effect), target 500+ mg/kg. For maximum therapeutic use, oils above 1,000 mg/kg are increasingly recommended by longevity researchers. All figures should be from HPLC or NMR testing, not self-reported estimates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it worth buying high polyphenol olive oil online vs in store?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — online is strongly preferable for verified high-polyphenol olive oil. Specialist online retailers (ONSURI, SP360, ChefShop, OliveOilLovers) maintain cold-chain logistics, provide lab documentation, rotate fresh harvest stock, and offer a far wider selection than any physical store. In-store purchases at supermarkets rarely disclose polyphenol data, and oils may have sat on warm shelves degrading for months."
                  }
                }
              ]
            })
          }}
        />

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Where can I buy high polyphenol olive oil in the US?",
                a: "Best US sources: ONSURI (onsurioliveoil.com, ships to US, 975–1,504 mg/kg); ChefShop.com (Laconiko ZOI, 1,799 mg/kg); OliveOilLovers.com (curated artisan imports); Amazon.com for P.J. KABOS (1,400 mg/kg, USDA Organic) and Kyoord (1,007 mg/kg). Always verify the COA is publicly available before buying."
              },
              {
                q: "Where can I buy high polyphenol olive oil in the UK?",
                a: "Top UK picks: SP360 (1,711 mg/kg HPLC, £42 — join waitlist at sp360.co.uk); The Governor EVOO (1,174–1,316 mg/kg, £39.95–£49.95); ONSURI on Amazon.co.uk (1,504 mg/kg, £25, Prime eligible). For in-stock options right now, ONSURI on Amazon.co.uk is the strongest combination of polyphenol content and price."
              },
              {
                q: "How do I know if an olive oil is genuinely high in polyphenols?",
                a: "Five things to verify: (1) a specific mg/kg number, (2) named test method (HPLC or qNMR), (3) publicly available COA from an accredited lab, (4) harvest date within 12–18 months, and (5) dark glass or UV-protective packaging. Missing any of these = unverifiable claim."
              },
              {
                q: "Can I buy high polyphenol olive oil at the supermarket?",
                a: "Rarely. A UC Davis study found 69% of supermarket 'extra virgin' olive oils failed quality standards. Polyphenol counts in major supermarket brands average 89–180 mg/kg — well below the EU EFSA health claim threshold. Online specialist retailers are far more reliable."
              },
              {
                q: "What is the best value high polyphenol olive oil to buy?",
                a: "Calculated by cost per 100mg of polyphenols, ONSURI Arbosana (£19.95, 1,255 mg/kg → £0.032/100mg) and ONSURI Arbequina (£25, 1,504 mg/kg → £0.033/100mg) lead our dataset. Both are available via Amazon.co.uk or direct from onsurioliveoil.com."
              },
              {
                q: "What polyphenol level should I target when buying?",
                a: "Minimum 250 mg/kg for the EU EFSA health claim. 500+ mg/kg for meaningful anti-inflammatory benefit. 1,000+ mg/kg for intensive therapeutic use (longevity protocols, oleocanthal-focused supplementation). All figures should come from HPLC or NMR testing — not self-reported."
              },
              {
                q: "Is buying high polyphenol olive oil online better than in store?",
                a: "Yes. Online specialist retailers maintain cold-chain logistics, publish lab docs, rotate fresh harvest stock, and offer far broader selection. In-store oils at supermarkets rarely disclose polyphenol data and may have degraded on warm shelves for months. For genuine high-polyphenol oil, online is the better path."
              }
            ].map((item, i) => (
              <details key={i} className="group bg-gray-800/40 border border-gray-700/40 rounded-xl overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer text-white font-semibold flex items-center justify-between gap-4 hover:bg-gray-700/20 transition-colors list-none">
                  <span>{item.q}</span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform shrink-0">▼</span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-gray-300 leading-relaxed text-sm border-t border-gray-700/30">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                href: "/blog/how-to-choose-high-polyphenol-olive-oil",
                title: "How to Choose High Polyphenol Olive Oil",
                desc: "What to look for on labels, certifications, testing methods."
              },
              {
                href: "/blog/top-10-highest-polyphenol-olive-oils",
                title: "Top 10 Highest Polyphenol Olive Oils (2026)",
                desc: "Our full lab-ranked list of the best oils available now."
              },
              {
                href: "/blog/lab-testing-methods-polyphenol-measurement",
                title: "How Polyphenols Are Measured: HPLC vs qNMR",
                desc: "The science behind the numbers on your olive oil label."
              }
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-gray-800/40 border border-gray-700/40 rounded-xl p-5 hover:border-green-500/40 transition-all group"
              >
                <div className="font-bold text-white text-sm mb-2 group-hover:text-green-300 transition-colors">{link.title}</div>
                <div className="text-gray-500 text-sm leading-relaxed">{link.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-700/40 rounded-2xl p-10 text-center">
          <div className="text-4xl mb-4">🔬</div>
          <h2 className="text-3xl font-bold text-white mb-3">See All 38 Lab-Ranked Oils</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Our full rankings table — sortable by polyphenol content, price, region, or value — gives you the complete picture before you buy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/rankings"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-xl"
            >
              View Full Rankings →
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border border-green-500 text-green-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-900/20 transition-all"
            >
              Shop Verified Oils →
            </Link>
          </div>
          <p className="text-gray-600 text-xs mt-4">
            * Some links are affiliate links. We only link to oils we have personally verified via lab testing or publicly available COA documentation.
          </p>
        </div>

      </article>
    </main>
  )
}
