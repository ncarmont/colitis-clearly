import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hydroxytyrosol: The Most Powerful Antioxidant in Olive Oil',
  description: 'Hydroxytyrosol is the #1 reason EVOO has an EU health claim. Learn what it does, how much you need, and which olive oils are richest in this antioxidant superstar.',
  keywords: 'hydroxytyrosol, hydroxytyrosol olive oil, hydroxytyrosol benefits, EVOO antioxidant, EU health claim olive oil, polyphenols EVOO, hydroxytyrosol dosage',
  openGraph: {
    title: 'Hydroxytyrosol: The Most Powerful Antioxidant in Olive Oil',
    description: 'The science behind hydroxytyrosol — the compound that earned olive oil its EU health claim and makes high-polyphenol EVOO so special.',
    type: 'article',
  }
}

export default function HydroxytyrosolPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Hydroxytyrosol</span>
        </div>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm font-bold rounded-full">
              Science
            </span>
            <span className="text-gray-500 text-sm">📖 10 min read</span>
            <span className="text-gray-500 text-sm">📅 Feb 25, 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hydroxytyrosol: The Most Powerful Antioxidant in Olive Oil
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Hydroxytyrosol is the reason the European Union granted olive oil an official health claim. With an ORAC score nearly 15× higher than green tea, it's one of the most potent antioxidants found in any food — and it's hiding in every bottle of quality EVOO.
          </p>
        </header>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Hydroxytyrosol: The Most Powerful Antioxidant in Olive Oil",
              "datePublished": "2026-02-25",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              }
            })
          }}
        />

        {/* Key Highlight Box */}
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">🏛️</span>
            The EU Health Claim Explained
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            In 2011, the European Food Safety Authority (EFSA) issued a landmark ruling: olive oil polyphenols — specifically <strong className="text-white">hydroxytyrosol and its derivatives</strong> — protect LDL cholesterol from oxidation.
          </p>
          <div className="bg-gray-800/60 rounded-xl p-4 mt-4">
            <p className="text-green-300 font-semibold mb-1">The Official Claim (EFSA 2011):</p>
            <p className="text-gray-200 italic">
              "Olive oil polyphenols contribute to the protection of blood lipids from oxidative stress."
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Requirement: At least <strong className="text-white">5 mg of hydroxytyrosol and its derivatives per 20 g of olive oil</strong> (equivalent to ~250 mg/kg polyphenols)
            </p>
          </div>
        </div>

        {/* Section 1: What Is It */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔬</span>
            1. What Is Hydroxytyrosol?
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              <strong className="text-white">Hydroxytyrosol</strong> (HT) is a phenolic compound with the chemical formula C₈H₁₀O₃. It naturally occurs in olive pulp and leaves, and forms in significant quantities during the oil extraction process as oleuropein — a more complex glycoside — breaks down.
            </p>

            <p className="text-lg">
              It's water-soluble, which makes it unusual among olive oil compounds (most phenolics in oils are fat-soluble). This dual nature means it protects both fat-based cell membranes and water-based cellular environments from oxidation.
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Hydroxytyrosol by the Numbers</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="font-bold text-white mb-1">ORAC Score</div>
                  <div className="text-3xl font-bold text-green-400 mb-1">68,576</div>
                  <div className="text-gray-400">μmol TE/100g — vs green tea at ~1,253 and vitamin C at ~1,677</div>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="font-bold text-white mb-1">Bioavailability</div>
                  <div className="text-3xl font-bold text-green-400 mb-1">~90%</div>
                  <div className="text-gray-400">Absorbed rapidly in the small intestine — peak plasma in 15–30 min</div>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="font-bold text-white mb-1">Typical EVOO Content</div>
                  <div className="text-3xl font-bold text-green-400 mb-1">5–200 mg/kg</div>
                  <div className="text-gray-400">Free hydroxytyrosol; total including derivatives is much higher</div>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <div className="font-bold text-white mb-1">Half-Life in Body</div>
                  <div className="text-3xl font-bold text-green-400 mb-1">~2–3 hours</div>
                  <div className="text-gray-400">Metabolized primarily to homovanillic acid and homovanillyl alcohol</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-amber-300 mb-3">The Oleuropein Connection</h3>
              <p className="text-gray-300 mb-3">
                Fresh olives contain mostly <strong className="text-white">oleuropein</strong>, the precursor compound responsible for their extreme bitterness. When olives are pressed and oil is extracted, enzymes naturally cleave oleuropein into hydroxytyrosol and other derivatives including oleocanthal and oleacein.
              </p>
              <p className="text-gray-300">
                This is why early-harvest oils tend to be richer: the olives are green, enzymes are most active, and conversion rates are highest. Late-harvest or over-ripe olives have lower oleuropein to begin with, producing less hydroxytyrosol.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Health Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💊</span>
            2. Proven Health Benefits
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">❤️ Cardiovascular Protection</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Prevents LDL oxidation</strong> — the key trigger for atherosclerosis</li>
                  <li>• <strong className="text-white">Reduces oxidized LDL</strong> by 10–25% in clinical trials</li>
                  <li>• <strong className="text-white">Improves endothelial function</strong> — increases nitric oxide bioavailability</li>
                  <li>• <strong className="text-white">Inhibits platelet aggregation</strong> — natural blood-thinning effect</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-3">🧠 Neuroprotection</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Crosses blood-brain barrier</strong> — directly protects neurons</li>
                  <li>• <strong className="text-white">Reduces beta-amyloid toxicity</strong> in Alzheimer's models</li>
                  <li>• <strong className="text-white">Activates Nrf2 pathway</strong> — boosts brain's own antioxidant defenses</li>
                  <li>• <strong className="text-white">Prevents dopaminergic neuron loss</strong> in Parkinson's research</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-3">🛡️ Anti-Cancer Properties</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Apoptosis induction</strong> — triggers programmed cell death in cancer cells</li>
                  <li>• <strong className="text-white">Inhibits cell cycle progression</strong> in colon, breast, and prostate cancers</li>
                  <li>• <strong className="text-white">Anti-angiogenic</strong> — suppresses new blood vessel formation for tumors</li>
                  <li>• <strong className="text-white">DNA damage protection</strong> — reduces oxidative DNA strand breaks</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-300 mb-3">⏳ Anti-Aging & Longevity</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Activates SIRT1</strong> — longevity sirtuin enzyme (similar to caloric restriction)</li>
                  <li>• <strong className="text-white">Promotes autophagy</strong> — cellular "self-cleaning" mechanism</li>
                  <li>• <strong className="text-white">Telomere protection</strong> — reduces oxidative damage to DNA ends</li>
                  <li>• <strong className="text-white">Reduces advanced glycation end-products</strong> (AGEs)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-teal-300 mb-3">🦠 Antimicrobial Action</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Inhibits H. pylori</strong> — the stomach ulcer bacteria</li>
                  <li>• <strong className="text-white">Effective against E. coli</strong> and Salmonella at low concentrations</li>
                  <li>• <strong className="text-white">Antiviral properties</strong> — disrupts viral envelopes (including influenza)</li>
                  <li>• <strong className="text-white">Supports gut microbiome</strong> — selectively boosts beneficial bacteria</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-300 mb-3">🔥 Anti-Inflammatory</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Inhibits NF-κB pathway</strong> — master inflammation regulator</li>
                  <li>• <strong className="text-white">Reduces TNF-α and IL-6</strong> — key inflammatory cytokines</li>
                  <li>• <strong className="text-white">COX-2 inhibition</strong> — similar to NSAIDs but without GI side effects</li>
                  <li>• <strong className="text-white">Reduces CRP</strong> in human intervention studies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How Much You Need */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📏</span>
            3. How Much Hydroxytyrosol Do You Actually Need?
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              The EU set a minimum threshold of <strong className="text-white">5 mg of hydroxytyrosol and its derivatives per 20 g of olive oil</strong> for the health claim — but this is a floor, not an optimal target. Research suggests considerably more is needed for therapeutic effects.
            </p>

            <div className="my-6 space-y-3">
              <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/30 border-l-4 border-gray-500 p-5 rounded-r-xl">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-300">EU Health Claim Minimum</h4>
                  <span className="text-lg font-bold text-gray-300">5 mg/day</span>
                </div>
                <p className="text-sm text-gray-400">From 20 g (≈1.5 tbsp) of an oil with ≥250 mg/kg polyphenols. Represents baseline LDL protection.</p>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/10 border-l-4 border-yellow-500 p-5 rounded-r-xl">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-yellow-300">Cardioprotective Range</h4>
                  <span className="text-lg font-bold text-yellow-300">10–20 mg/day</span>
                </div>
                <p className="text-sm text-gray-400">Associated with measurable improvements in oxidized LDL, endothelial function, and inflammatory markers in clinical trials.</p>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-green-800/10 border-l-4 border-green-500 p-5 rounded-r-xl">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-green-300">Optimal Anti-Aging/Metabolic Dose</h4>
                  <span className="text-lg font-bold text-green-300">20–50 mg/day</span>
                </div>
                <p className="text-sm text-gray-400">Range used in most positive human studies for broader systemic benefits including autophagy activation and gene expression changes.</p>
              </div>

              <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/10 border-l-4 border-emerald-500 p-5 rounded-r-xl">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-emerald-300">High-Polyphenol EVOO, 3 tbsp/day</h4>
                  <span className="text-lg font-bold text-emerald-300">~30–60 mg/day</span>
                </div>
                <p className="text-sm text-gray-400">Typical intake from consuming 40–50 g of a 600–800 mg/kg polyphenol oil daily. This mirrors Mediterranean diet interventions.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-blue-300 mb-3">Quick Calculator</h3>
              <p className="text-gray-300 mb-4">Estimate your hydroxytyrosol intake with this simple formula:</p>
              <div className="bg-gray-900/70 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">HT intake (mg) = [Total polyphenols (mg/kg)] × 0.5 × [Oil consumed (g)] ÷ 1000</div>
                <div className="text-gray-400 mt-3">Example: 600 mg/kg oil × 0.5 × 30 g ÷ 1000 = <strong className="text-white">9 mg HT/day</strong></div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Note: The 0.5 factor estimates hydroxytyrosol + derivatives as ~50% of total polyphenols. Actual proportion varies by oil.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Best Oils */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🏆</span>
            4. Which Oils Are Highest in Hydroxytyrosol?
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Hydroxytyrosol content varies enormously between oils — by a factor of 50x or more. Several factors determine how much ends up in your bottle.
            </p>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-gray-700/50 rounded-xl overflow-hidden my-6">
              <div className="p-4 bg-gray-800/60 border-b border-gray-700">
                <h3 className="text-lg font-bold text-white">Key Factors That Boost Hydroxytyrosol Content</h3>
              </div>
              <div className="divide-y divide-gray-700/50">
                {[
                  {
                    factor: "🫒 Cultivar",
                    detail: "Koroneiki, Coratina, Picual, and Memecik are the highest-HT varieties. Arbequina and Hojiblanca tend to be lower.",
                    impact: "High"
                  },
                  {
                    factor: "📅 Harvest Timing",
                    detail: "Early harvest (unripe, green olives) has 3–5× more HT precursors than late harvest. Harvest at 10–30% maturity is ideal.",
                    impact: "Very High"
                  },
                  {
                    factor: "⏱️ Cold Extraction",
                    detail: "Malaxation below 27°C preserves enzymatic conversion of oleuropein to hydroxytyrosol without thermal degradation.",
                    impact: "High"
                  },
                  {
                    factor: "🏔️ Altitude & Stress",
                    detail: "Olive trees under environmental stress (drought, high altitude, poor soil) produce more polyphenols as a defense mechanism.",
                    impact: "Moderate"
                  },
                  {
                    factor: "🔆 Storage Conditions",
                    detail: "Light and heat rapidly oxidize HT. Dark glass, cool temperatures, and minimal air exposure are essential post-bottling.",
                    impact: "High"
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4">
                    <div className="flex-1">
                      <div className="font-bold text-white mb-1">{item.factor}</div>
                      <div className="text-sm text-gray-400">{item.detail}</div>
                    </div>
                    <div className={`text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ${
                      item.impact === 'Very High' ? 'bg-red-500/20 text-red-300' :
                      item.impact === 'High' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {item.impact} Impact
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">Top Cultivars for Hydroxytyrosol</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-800/60 rounded-lg p-4">
                  <div className="font-bold text-white mb-1">🇬🇷 Koroneiki</div>
                  <div className="text-green-400 font-bold text-lg mb-1">100–300 mg/kg HT</div>
                  <div className="text-gray-400 text-xs">The benchmark for high-HT EVOOs worldwide. Crete and Peloponnese produce the highest levels.</div>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4">
                  <div className="font-bold text-white mb-1">🇮🇹 Coratina</div>
                  <div className="text-green-400 font-bold text-lg mb-1">80–250 mg/kg HT</div>
                  <div className="text-gray-400 text-xs">Southern Italy's powerhouse. Extremely bitter — a hallmark of very high HT content.</div>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4">
                  <div className="font-bold text-white mb-1">🇪🇸 Picual</div>
                  <div className="text-green-400 font-bold text-lg mb-1">60–200 mg/kg HT</div>
                  <div className="text-gray-400 text-xs">Spain's most cultivated variety. Good HT levels, with excellent oxidative stability.</div>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4">
                  <div className="font-bold text-white mb-1">🇹🇷 Memecik</div>
                  <div className="text-green-400 font-bold text-lg mb-1">80–200 mg/kg HT</div>
                  <div className="text-gray-400 text-xs">Turkish variety gaining recognition. High HT when harvested early in the Aegean region.</div>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4">
                  <div className="font-bold text-white mb-1">🇬🇷 Manaki</div>
                  <div className="text-green-400 font-bold text-lg mb-1">60–180 mg/kg HT</div>
                  <div className="text-gray-400 text-xs">Often blended with Koroneiki. Milder flavour profile but maintains strong HT levels.</div>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4">
                  <div className="font-bold text-white mb-1">🇪🇸 Arbequina</div>
                  <div className="text-amber-400 font-bold text-lg mb-1">10–80 mg/kg HT</div>
                  <div className="text-gray-400 text-xs">Popular for its mild, buttery taste — but significantly lower in HT than robust varieties.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: How to Maximize Absorption */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⚗️</span>
            5. How to Maximize Hydroxytyrosol Absorption
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Hydroxytyrosol's water-solubility means it absorbs differently from most fat-soluble nutrients. Here's how to get the most from every tablespoon.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-4">✅ Do This</h3>
                <ul className="text-sm text-gray-300 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <div><strong className="text-white">Drizzle raw on food</strong> — adding EVOO after cooking preserves 80–100% of HT. Heat degrades it.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <div><strong className="text-white">Pair with vitamin C foods</strong> — tomatoes, citrus, and peppers enhance antioxidant synergy.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <div><strong className="text-white">Take with a meal</strong> — the fat matrix slows gastric transit, improving absorption vs. fasting.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <div><strong className="text-white">Spread across two meals</strong> — HT has a ~2-3 hour half-life, so twice daily dosing maintains steadier blood levels.</div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-300 mb-4">❌ Avoid This</h3>
                <ul className="text-sm text-gray-300 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <div><strong className="text-white">Deep frying</strong> — sustained heat above 180°C destroys most HT and degrades other polyphenols</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <div><strong className="text-white">Storing in clear bottles</strong> — UV light oxidizes HT. Dark glass or stainless steel tins only.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <div><strong className="text-white">Buying large volumes</strong> — HT degrades steadily after opening. Buy what you'll use in 4–6 weeks.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <div><strong className="text-white">Ignoring harvest date</strong> — oils older than 18 months can lose 40–70% of original HT content.</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-green-500 p-5 rounded-r-lg">
              <p className="text-gray-200 italic">
                <strong className="text-green-400">Practical Tip:</strong> A 2022 study found that adding high-HT EVOO to a tomato-based sauce (after cooking) increased hydroxytyrosol absorption by 40% compared to eating the same oil alone — due to synergistic interactions with lycopene and ascorbic acid in the tomatoes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Supplements vs Food */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💡</span>
            6. EVOO vs Hydroxytyrosol Supplements
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Hydroxytyrosol supplements exist, but are they better than simply using high-polyphenol EVOO? The evidence points clearly in one direction.
            </p>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="text-left p-4 text-white">Factor</th>
                    <th className="text-center p-4 text-green-400">High-Polyphenol EVOO</th>
                    <th className="text-center p-4 text-blue-400">HT Supplement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    { factor: 'Synergistic compounds', evoo: '✅ Oleocanthal, oleacein, squalene, vitamin E', supp: '❌ Isolated compound only' },
                    { factor: 'Bioavailability', evoo: '✅ ~90% (food matrix enhances absorption)', supp: '⚠️ Variable — many low-quality products' },
                    { factor: 'Dose control', evoo: '⚠️ Varies by oil batch', supp: '✅ Precise mg dosing possible' },
                    { factor: 'Clinical evidence', evoo: '✅ Hundreds of RCTs (PREDIMED, MIND, etc.)', supp: '⚠️ Limited human trials' },
                    { factor: 'Additional nutrients', evoo: '✅ Oleic acid, fat-soluble vitamins, squalene', supp: '❌ None' },
                    { factor: 'Cost per mg HT', evoo: '✅ Very cost-effective', supp: '❌ 5–20× more expensive' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-800/30 transition-colors">
                      <td className="p-4 text-gray-300 font-medium">{row.factor}</td>
                      <td className="p-4 text-center text-gray-300">{row.evoo}</td>
                      <td className="p-4 text-center text-gray-300">{row.supp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-lg bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-700/40 rounded-xl p-6">
              <strong className="text-green-400">Bottom line:</strong> The synergy between hydroxytyrosol, oleocanthal, oleacein, squalene, and oleic acid in whole EVOO produces effects that isolated supplements cannot replicate. Food-first is the right approach — choose a high-polyphenol oil and use it consistently.
            </p>
          </div>
        </section>

        {/* Section 7: Reading Labels */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🏷️</span>
            7. How to Find High-Hydroxytyrosol EVOOs on Labels
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Few brands explicitly list hydroxytyrosol content — but here are the signals that correlate strongly with high HT levels.
            </p>

            <div className="space-y-4 my-6">
              <div className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-800/10 border border-green-700/30 rounded-xl p-5">
                <span className="text-3xl">✅</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Total Polyphenols ≥400 mg/kg</h4>
                  <p className="text-sm text-gray-400">The best proxy for HT content. Most premium brands now list this on the label or website. 400+ mg/kg generally ensures you're above the EU health claim threshold and then some.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-800/10 border border-green-700/30 rounded-xl p-5">
                <span className="text-3xl">✅</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Recent Harvest Date (Within 12 Months)</h4>
                  <p className="text-sm text-gray-400">Look for the specific harvest year — not just the "best by" date. Oils bottled within a few months of pressing will have dramatically higher HT than year-old stock.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-800/10 border border-green-700/30 rounded-xl p-5">
                <span className="text-3xl">✅</span>
                <div>
                  <h4 className="font-bold text-white mb-1">EU Health Claim Statement</h4>
                  <p className="text-sm text-gray-400">"Olive oil polyphenols contribute to the protection of blood lipids from oxidative stress." If a brand displays this, they must meet the 5 mg/20g threshold — though higher is better.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-800/10 border border-green-700/30 rounded-xl p-5">
                <span className="text-3xl">✅</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Lab Certificate (COA) Available</h4>
                  <p className="text-sm text-gray-400">Brands that publish HPLC or qNMR certificates of analysis showing individual polyphenol breakdowns — including hydroxytyrosol — are the gold standard for transparency.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-700/30 rounded-xl p-5">
                <span className="text-3xl">❌</span>
                <div>
                  <h4 className="font-bold text-white mb-1">No Harvest Date Listed</h4>
                  <p className="text-sm text-gray-400">If you can't find a harvest year on the bottle, assume the HT content is unknown and likely low. Best-by dates alone are insufficient — they only indicate expected freshness, not actual polyphenol levels.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Find EVOOs with Verified Polyphenol Content</h2>
            <p className="text-green-50 text-lg mb-6">
              Our rankings include lab-verified oils with 400–1,400 mg/kg total polyphenols — all with published harvest dates and certificates of analysis.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-xl"
            >
              <span>View Rankings</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/oleocanthal-oleacein-explained" className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Oleocanthal & Oleacein Explained
              </h3>
              <p className="text-sm text-gray-400">The anti-inflammatory compounds behind the peppery burn</p>
            </Link>
            <Link href="/blog/what-are-polyphenols-olive-oil" className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-3">🧬</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                What Are Polyphenols in Olive Oil?
              </h3>
              <p className="text-sm text-gray-400">Complete guide to all polyphenol types in EVOO</p>
            </Link>
            <Link href="/blog/how-much-polyphenol-olive-oil-daily" className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                How Much Polyphenol Olive Oil Daily?
              </h3>
              <p className="text-sm text-gray-400">Calculate your optimal daily EVOO intake</p>
            </Link>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to All Articles</span>
          </Link>
        </div>
      </article>
    </main>
  )
}
