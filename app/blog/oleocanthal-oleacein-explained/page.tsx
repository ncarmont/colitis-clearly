import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oleocanthal and Oleacein: The Powerful Polyphenols in EVOO Explained',
  description: 'Deep dive into oleocanthal and oleacein - the anti-inflammatory compounds that give quality EVOO its peppery throat sensation and powerful health benefits.',
  keywords: 'oleocanthal, oleacein, anti-inflammatory olive oil, polyphenols EVOO, oleocanthal health benefits, peppery olive oil throat burn',
  openGraph: {
    title: 'Oleocanthal and Oleacein: The Powerful Polyphenols in EVOO',
    description: 'Understanding the anti-inflammatory compounds in high polyphenol olive oil',
    type: 'article',
  }
}

export default function OleocanthalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Oleocanthal and Oleacein</span>
        </div>
      </nav>

      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-sm font-bold rounded-full">
              Science
            </span>
            <span className="text-gray-500 text-sm">📖 11 min read</span>
            <span className="text-gray-500 text-sm">📅 Sep 20, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Oleocanthal and Oleacein: The Powerful Polyphenols in EVOO
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Behind that distinctive peppery throat burn in quality EVOO lie two remarkable compounds: oleocanthal and oleacein. Here's why these polyphenols are revolutionizing our understanding of olive oil as medicine.
          </p>
        </header>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Oleocanthal and Oleacein: The Powerful Polyphenols in EVOO",
              "datePublished": "2024-09-20",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              }
            })
          }}
        />

        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">🌶️</span>
            The Peppery Throat Test
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            When you swallow high-quality EVOO and feel that sharp, peppery sensation in the back of your throat—that's <strong className="text-white">oleocanthal</strong> at work. The stronger the burn, the higher the oleocanthal content. This isn't a defect; it's proof of potency.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔬</span>
            1. What Is Oleocanthal?
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              <strong className="text-white">Oleocanthal</strong> (full name: (-)-oleocanthal or decarboxymethyl oleuropein aglycone) is a phenolic compound unique to extra virgin olive oil. It's formed when oleuropein—found in fresh olives—breaks down during oil extraction.
            </p>

            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">The 2005 Discovery That Changed Everything</h3>
              <p className="text-gray-300 mb-4">
                Dr. Paul Breslin at the Monell Chemical Senses Center made a breakthrough discovery: <strong className="text-white">oleocanthal produces the same throat irritation as ibuprofen</strong>.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-sm text-gray-300 mb-3">
                  During a tasting event, Dr. Breslin noticed that high-quality EVOO caused the same throat sensation he'd experienced when tasting pharmaceutical-grade ibuprofen. Laboratory testing confirmed oleocanthal inhibits the same COX-1 and COX-2 enzymes as ibuprofen.
                </p>
                <p className="text-xs text-red-200 italic">
                  Published in Nature (2005): "Phytochemistry: Ibuprofen-like activity in extra-virgin olive oil"
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">How Oleocanthal Works</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">COX Enzyme Inhibition</h4>
                  <p className="text-sm text-gray-300">Blocks cyclooxygenase (COX-1 and COX-2) enzymes responsible for producing inflammatory prostaglandins. Same mechanism as NSAIDs like ibuprofen and aspirin.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Dosage Comparison</h4>
                  <p className="text-sm text-gray-300">50g (3.5 tablespoons) of high-oleocanthal EVOO provides anti-inflammatory activity equivalent to ~10% of an adult ibuprofen dose (200mg). Chronic low-dose effect without side effects.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Throat Receptor Activation</h4>
                  <p className="text-sm text-gray-300">Triggers TRPA1 receptors in the throat—the same receptors activated by wasabi, mustard, and ibuprofen. This causes the characteristic peppery burn.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💊</span>
            2. Oleocanthal Health Benefits
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-3">🧠 Neuroprotection</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Alzheimer's prevention:</strong> Enhances clearance of beta-amyloid plaques</li>
                  <li>• <strong className="text-white">Tau protein reduction:</strong> Reduces toxic tau tangles in brain</li>
                  <li>• <strong className="text-white">BBB protection:</strong> Maintains blood-brain barrier integrity</li>
                  <li>• <strong className="text-white">Neuroinflammation:</strong> Reduces microglial activation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-300 mb-3">🛡️ Anti-Cancer Properties</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">HER2 inhibition:</strong> Suppresses breast cancer oncogene</li>
                  <li>• <strong className="text-white">Apoptosis induction:</strong> Triggers cancer cell death</li>
                  <li>• <strong className="text-white">Metastasis prevention:</strong> Blocks tumor cell migration</li>
                  <li>• <strong className="text-white">Angiogenesis:</strong> Inhibits blood vessel formation to tumors</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">❤️ Cardiovascular Protection</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">LDL oxidation:</strong> Prevents atherosclerosis initiation</li>
                  <li>• <strong className="text-white">Platelet aggregation:</strong> Natural blood thinner effect</li>
                  <li>• <strong className="text-white">Inflammation markers:</strong> Reduces CRP and IL-6</li>
                  <li>• <strong className="text-white">Endothelial health:</strong> Improves vascular function</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-300 mb-3">🦴 Joint & Bone Health</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-white">Arthritis relief:</strong> COX-2 inhibition reduces joint inflammation</li>
                  <li>• <strong className="text-white">Cartilage protection:</strong> Prevents degradation</li>
                  <li>• <strong className="text-white">Bone density:</strong> May support osteoblast activity</li>
                  <li>• <strong className="text-white">Pain reduction:</strong> Natural analgesic properties</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🧪</span>
            3. What Is Oleacein?
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              <strong className="text-white">Oleacein</strong> (dialdehydic form of elenolic acid linked to hydroxytyrosol) is oleocanthal's less famous but equally powerful sibling. While oleocanthal causes the peppery burn, oleacein contributes to the <strong className="text-white">bitter taste</strong> in EVOO.
            </p>

            <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-teal-300 mb-4">Oleacein Unique Properties</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Antioxidant Potency</h4>
                  <p className="text-sm text-gray-300">Oleacein is one of the most powerful antioxidants in EVOO, with ORAC values exceeding those of vitamin E. It directly scavenges free radicals and prevents lipid peroxidation.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Synergy with Oleocanthal</h4>
                  <p className="text-sm text-gray-300">These two compounds work synergistically. Together, they provide greater anti-inflammatory and antioxidant effects than either alone.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Bioavailability</h4>
                  <p className="text-sm text-gray-300">Better absorbed than many other polyphenols due to its lipophilic (fat-soluble) nature. Peak plasma levels within 1-2 hours of consumption.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-amber-300 mb-4">Oleacein Health Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-white mb-2">🔬 Cellular Protection</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• DNA damage prevention</li>
                    <li>• Mitochondrial function support</li>
                    <li>• Telomere protection (anti-aging)</li>
                    <li>• Autophagy activation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">💚 Metabolic Health</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Insulin sensitivity improvement</li>
                    <li>• Glucose metabolism regulation</li>
                    <li>• Lipid profile optimization</li>
                    <li>• Hepatic protection (liver health)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📊</span>
            4. Oleocanthal & Oleacein Content in EVOOs
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Not all EVOOs contain significant oleocanthal and oleacein. Content varies dramatically based on cultivar, harvest timing, and processing.
            </p>

            <div className="my-6">
              <h3 className="text-xl font-bold text-white mb-4">Content Ranges by Quality Tier</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-red-900/20 to-red-800/10 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-red-300 mb-1">Low Quality / Late Harvest (&lt;100 mg/kg combined)</h4>
                  <p className="text-sm text-gray-300">Minimal to no throat burn, bland taste. Most supermarket EVOOs fall here.</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-yellow-300 mb-1">Moderate (100-200 mg/kg combined)</h4>
                  <p className="text-sm text-gray-300">Mild peppery sensation, slight bitterness. Meets basic quality standards.</p>
                </div>
                <div className="bg-gradient-to-r from-green-900/20 to-green-800/10 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-green-300 mb-1">High Quality (200-400 mg/kg combined)</h4>
                  <p className="text-sm text-gray-300">Strong throat burn, pronounced bitterness. Quality early harvest oils.</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/10 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h4 className="font-bold text-emerald-300 mb-1">Exceptional (400+ mg/kg combined)</h4>
                  <p className="text-sm text-gray-300">Intense peppery burn causing cough, strong bitterness. Premium therapeutic-grade EVOOs. Koroneiki and Coratina often reach these levels.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-blue-300 mb-3">Top Cultivars for Oleocanthal & Oleacein</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="font-bold text-white mb-1">🇬🇷 Koroneiki</div>
                  <div className="text-gray-300">200-500 mg/kg combined. Highest consistently documented levels worldwide.</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="font-bold text-white mb-1">🇮🇹 Coratina</div>
                  <div className="text-gray-300">150-400 mg/kg combined. Legendary for oleocanthal-induced throat burn.</div>
                </div>
                <div className="bg-gray-800/50 rounded p-3">
                  <div className="font-bold text-white mb-1">🇪🇸 Picual</div>
                  <div className="text-gray-300">150-350 mg/kg combined. Balanced oleocanthal/oleacein profile.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">👅</span>
            5. The Taste Test: How to Identify High Oleocanthal/Oleacein
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Professional Tasting Protocol</h3>
              <ol className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[2rem]">1.</span>
                  <div>
                    <strong className="text-white">Pour 1 tablespoon</strong> of EVOO into a small glass or tasting cup
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[2rem]">2.</span>
                  <div>
                    <strong className="text-white">Warm the glass</strong> in your hands for 30 seconds to release aromatics
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[2rem]">3.</span>
                  <div>
                    <strong className="text-white">Smell deeply</strong> - note grassy, fruity, or herbaceous aromas
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[2rem]">4.</span>
                  <div>
                    <strong className="text-white">Sip and slurp</strong> - draw air through your teeth while swallowing to aerate the oil
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[2rem]">5.</span>
                  <div>
                    <strong className="text-white">Wait 3-5 seconds</strong> - the peppery sensation should appear in the back of your throat
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[2rem]">6.</span>
                  <div>
                    <strong className="text-white">Note the intensity:</strong> Mild tickle = moderate. Strong burn/cough = high oleocanthal.
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-orange-300 mb-3">What You Should Experience</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-white mb-2">✅ Signs of High Oleocanthal/Oleacein</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Strong peppery burn in throat</li>
                    <li>• Involuntary cough reflex</li>
                    <li>• Pleasant bitterness on tongue</li>
                    <li>• Tingling sensation lasting 10-20 seconds</li>
                    <li>• Fresh, vibrant green aromas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">❌ Signs of Low/No Oleocanthal/Oleacein</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• No throat sensation</li>
                    <li>• Bland, flat taste</li>
                    <li>• Greasy mouthfeel</li>
                    <li>• Lack of bitterness</li>
                    <li>• Stale or rancid odors</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg bg-gray-800/50 border-l-4 border-orange-500 p-4 rounded-r-lg italic">
              <strong className="text-orange-400">Pro Tip:</strong> If you can drink EVOO like water with no throat irritation, it has negligible oleocanthal. Quality EVOO should make you cough when consumed neat.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⚗️</span>
            6. Measuring Oleocanthal & Oleacein: Lab Testing
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              The only way to know exact oleocanthal and oleacein content is through laboratory analysis. Taste testing provides a general indication, but lab testing gives precise measurements.
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Testing Methods</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">HPLC (High-Performance Liquid Chromatography)</h4>
                  <p className="text-sm text-gray-300 mb-2">Gold standard for measuring individual polyphenols including oleocanthal and oleacein separately.</p>
                  <div className="text-xs text-blue-200">
                    • Precision: ±5% • Cost: $300-500 per sample • Time: 2-3 days
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">qNMR (Quantitative Nuclear Magnetic Resonance)</h4>
                  <p className="text-sm text-gray-300 mb-2">Advanced spectroscopic method, highly accurate for total phenolic content.</p>
                  <div className="text-xs text-blue-200">
                    • Precision: ±3% • Cost: $400-600 per sample • Time: 1-2 days
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Aristoleo Test (Consumer Device)</h4>
                  <p className="text-sm text-gray-300 mb-2">Portable device specifically designed to measure oleocanthal content at home or in retail settings.</p>
                  <div className="text-xs text-blue-200">
                    • Precision: ±15% • Cost: $2000 device • Time: Instant
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-4 rounded-r-lg text-sm italic">
              <strong className="text-blue-400">Important:</strong> Always look for EVOOs with published lab certificates showing oleocanthal and oleacein values. Generic "total polyphenols" measurements don't tell you about these specific compounds.
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💧</span>
            7. How Much Do You Need?
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-700/40 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-300 mb-2">Minimum Effective Dose</h3>
                <div className="text-3xl font-bold text-white mb-2">10-20 mg/day</div>
                <p className="text-sm text-gray-300">Oleocanthal + Oleacein combined for basic anti-inflammatory effects</p>
                <div className="text-sm text-yellow-200 mt-3">
                  ≈ 2 tablespoons of moderate EVOO (200 mg/kg)
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/40 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-2">Optimal Dose</h3>
                <div className="text-3xl font-bold text-white mb-2">30-50 mg/day</div>
                <p className="text-sm text-gray-300">Oleocanthal + Oleacein for significant health benefits seen in studies</p>
                <div className="text-sm text-green-200 mt-3">
                  ≈ 2-3 tablespoons of high-quality EVOO (400+ mg/kg)
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-700/40 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-300 mb-2">Therapeutic Dose</h3>
                <div className="text-3xl font-bold text-white mb-2">60-80 mg/day</div>
                <p className="text-sm text-gray-300">Used in research for neuroprotection and cancer prevention</p>
                <div className="text-sm text-emerald-200 mt-3">
                  ≈ 3-4 tablespoons of premium EVOO (500+ mg/kg)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">The Oleocanthal/Oleacein Bottom Line</h2>
            <p className="text-green-50 text-lg mb-4">
              These two compounds are why EVOO isn't just a cooking oil—it's a <strong>functional medicine</strong>. The peppery burn and bitterness aren't defects; they're proof of potency.
            </p>
            <p className="text-green-50 text-lg mb-6">
              Choose EVOOs that make you cough. Embrace the bitterness. Your body will thank you.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-xl"
            >
              <span>Find High Oleocanthal EVOOs</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        <section className="border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/what-are-polyphenols-olive-oil" className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-3">🧬</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                What Are Polyphenols in Olive Oil?
              </h3>
              <p className="text-sm text-gray-400">Complete guide to all polyphenol types in EVOO</p>
            </Link>
            <Link href="/blog/health-benefits-high-polyphenol-evoo" className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                7 Science-Backed Health Benefits
              </h3>
              <p className="text-sm text-gray-400">Evidence-based benefits of high polyphenol EVOO</p>
            </Link>
            <Link href="/blog/best-olive-cultivars-high-polyphenols" className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-3">🫒</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Best Cultivars for High Polyphenols
              </h3>
              <p className="text-sm text-gray-400">Koroneiki vs Picual vs Coratina comparison</p>
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
