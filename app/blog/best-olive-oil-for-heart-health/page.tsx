import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Olive Oil for Heart Health: Cardiologist Recommendations (2024)',
  description: 'Evidence-based guide to choosing olive oil for cardiovascular health. PREDIMED study insights, LDL reduction, blood pressure benefits, and cardiologist-recommended brands.',
  keywords: 'best olive oil for heart health, cardiovascular EVOO, heart disease prevention, PREDIMED study, olive oil cholesterol, blood pressure olive oil',
  openGraph: {
    title: 'Best Olive Oil for Heart Health: Cardiologist Recommendations',
    description: 'Science-backed guide to olive oil for cardiovascular protection',
    type: 'article',
  }
}

export default function HeartHealthOliveOilPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Best Olive Oil for Heart Health</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-pink-500 text-white text-sm font-bold rounded-full">
              Cardiovascular
            </span>
            <span className="text-gray-500 text-sm">16 min read</span>
            <span className="text-gray-500 text-sm">Oct 2, 2024</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Best Olive Oil for Heart Health: Cardiologist Recommendations
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            The PREDIMED study proved it: high polyphenol olive oil reduces cardiovascular events by 30%. Here's what cardiologists recommend for optimal heart health.
          </p>
        </header>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Best Olive Oil for Heart Health: Cardiologist Recommendations",
              "datePublished": "2024-10-02",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "description": "Science-backed guide to olive oil for cardiovascular protection"
            })
          }}
        />

        {/* Quick Summary */}
        <div className="bg-gradient-to-br from-red-900/30 to-pink-900/20 border border-red-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">💗</span>
            Cardiovascular Benefits at a Glance
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">•</span>
              <span><strong className="text-white">30% reduction</strong> in cardiovascular events (PREDIMED)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">•</span>
              <span><strong className="text-white">19% lower</strong> cardiovascular mortality (Harvard study)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">•</span>
              <span><strong className="text-white">Prevents LDL oxidation</strong>—critical step in atherosclerosis</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">•</span>
              <span><strong className="text-white">Lowers blood pressure</strong> 3-5 mmHg in trials</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">•</span>
              <span><strong className="text-white">Improves endothelial function</strong> within 2 hours</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">•</span>
              <span><strong className="text-white">Minimum: 500+ mg/kg polyphenols</strong> for heart benefits</span>
            </div>
          </div>
        </div>

        {/* PREDIMED Study */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🏥</span>
            The PREDIMED Study: Landmark Evidence
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              The PREDIMED (PREvención con DIeta MEDiterránea) study is the most important cardiovascular nutrition trial ever conducted. Published in the New England Journal of Medicine in 2013, it provided definitive proof that high polyphenol olive oil prevents heart disease.
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Study Design</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Participants</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• <strong className="text-white">7,447 participants</strong></li>
                    <li>• Ages 55-80, at high cardiovascular risk</li>
                    <li>• No previous heart disease</li>
                    <li>• Recruited in Spain (2003-2011)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Intervention</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Mediterranean diet + 1L EVOO/week</li>
                    <li>• vs. Mediterranean diet + nuts</li>
                    <li>• vs. Low-fat control diet</li>
                    <li>• Median follow-up: 4.8 years</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">Results: Olive Oil Group</h3>
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-white">Primary Outcome Reduction</span>
                    <span className="text-3xl font-bold text-green-400">-30%</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Primary outcome</strong> (cardiovascular death, heart attack, or stroke) reduced by 30% compared to low-fat diet
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-sm text-gray-400 mb-1">Stroke Risk</div>
                    <div className="text-2xl font-bold text-green-400">-39%</div>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-sm text-gray-400 mb-1">Heart Attack Risk</div>
                    <div className="text-2xl font-bold text-green-400">-20%</div>
                  </div>
                  <div className="bg-gray-800/50 rounded p-4">
                    <div className="text-sm text-gray-400 mb-1">CV Death</div>
                    <div className="text-2xl font-bold text-green-400">-28%</div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Number needed to treat (NNT):</strong> Only 61 people need to follow Mediterranean diet with EVOO for 5 years to prevent one cardiovascular event. This rivals or exceeds many pharmaceutical interventions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-3">Why This Study Changed Everything</h3>
              <p className="text-red-50 mb-4">
                PREDIMED was the first randomized controlled trial to prove that diet alone—without weight loss or calorie restriction—could prevent cardiovascular disease. Key findings:
              </p>
              <ul className="text-red-50 space-y-2">
                <li>• <strong>Benefits were independent of weight loss:</strong> Participants didn't lose weight but still saw dramatic risk reduction</li>
                <li>• <strong>Dose-dependent effect:</strong> Higher polyphenol EVOO = greater benefits</li>
                <li>• <strong>Rapid onset:</strong> Benefits appeared within 2 years, not decades</li>
                <li>• <strong>Applicable to high-risk populations:</strong> Worked in people already at elevated cardiovascular risk</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-yellow-500 p-4 rounded-r-lg text-sm italic">
              <strong className="text-yellow-400">Note:</strong> The PREDIMED study was briefly retracted and republished in 2018 with corrected statistical methods. The conclusions remained unchanged—olive oil significantly reduces cardiovascular risk.
            </div>
          </div>
        </section>

        {/* Mechanisms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔬</span>
            How Olive Oil Protects Your Heart: 6 Mechanisms
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              High polyphenol olive oil protects cardiovascular health through multiple complementary mechanisms:
            </p>

            {/* Mechanism 1 */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-800/20 border border-indigo-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-indigo-300 mb-4">1. Prevents LDL Oxidation</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">The most important mechanism.</strong> LDL cholesterol only becomes dangerous when it's oxidized. Polyphenols prevent this critical step in atherosclerosis.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-bold text-white mb-3">The Oxidation Process</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-400 font-bold">1.</span>
                    <span><strong className="text-white">LDL circulates normally</strong> → Not inherently harmful</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-400 font-bold">2.</span>
                    <span><strong className="text-white">Free radicals attack LDL</strong> → Oxidized LDL (oxLDL) forms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-400 font-bold">3.</span>
                    <span><strong className="text-white">OxLDL triggers inflammation</strong> → Immune cells accumulate in artery walls</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-400 font-bold">4.</span>
                    <span><strong className="text-white">Plaque formation begins</strong> → Atherosclerosis develops</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-700/40 rounded-lg p-4 mt-4">
                <h4 className="font-bold text-green-300 mb-2">How Polyphenols Help</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• <strong className="text-white">Hydroxytyrosol:</strong> Incorporates into LDL particles, protecting from within</li>
                  <li>• <strong className="text-white">Oleuropein:</strong> Scavenges free radicals before they damage LDL</li>
                  <li>• <strong className="text-white">Clinical evidence:</strong> EUROLIVE study showed 10% reduction in oxLDL after 3 weeks</li>
                </ul>
              </div>
            </div>

            {/* Mechanism 2 */}
            <div className="bg-gradient-to-br from-violet-900/30 to-purple-800/20 border border-violet-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-violet-300 mb-4">2. Improves Endothelial Function</h3>
              <p className="text-gray-300 mb-4">
                The endothelium (inner lining of blood vessels) is your cardiovascular system's first line of defense. Polyphenols restore and enhance its function.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Effects</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• ↑ Nitric oxide (NO) production</li>
                    <li>• ↑ Vasodilation (blood vessel relaxation)</li>
                    <li>• ↓ Endothelial inflammation</li>
                    <li>• ↓ Platelet adhesion</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Timeline</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong className="text-white">2 hours:</strong> Improved flow-mediated dilation</li>
                    <li>• <strong className="text-white">3 weeks:</strong> Sustained NO improvement</li>
                    <li>• <strong className="text-white">6 months:</strong> Structural vessel improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mechanism 3 */}
            <div className="bg-gradient-to-br from-pink-900/30 to-rose-800/20 border border-pink-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-pink-300 mb-4">3. Lowers Blood Pressure</h3>
              <p className="text-gray-300 mb-4">
                Multiple trials show that high polyphenol EVOO reduces both systolic and diastolic blood pressure.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-bold text-white mb-3">Clinical Trial Results</h4>
                <ul className="text-sm text-gray-300 space-y-3">
                  <li className="border-l-2 border-pink-500 pl-4">
                    <strong className="text-white">Spanish Study (2020):</strong> High polyphenol EVOO (366 mg/kg) reduced systolic BP by 3.8 mmHg and diastolic by 3.2 mmHg in 3 weeks
                  </li>
                  <li className="border-l-2 border-pink-500 pl-4">
                    <strong className="text-white">PREDIMED:</strong> Participants consuming 4+ tablespoons daily had significantly lower BP than control group
                  </li>
                  <li className="border-l-2 border-pink-500 pl-4">
                    <strong className="text-white">Meta-analysis (2014):</strong> Average reduction of 2.5/2.0 mmHg—enough to reduce stroke risk by 10%
                  </li>
                </ul>
              </div>
              <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Mechanism:</strong> Polyphenols increase nitric oxide production, which relaxes blood vessel smooth muscle. Hydroxytyrosol also reduces activity of angiotensin-converting enzyme (ACE)—the same target as ACE inhibitor medications.
                </p>
              </div>
            </div>

            {/* Mechanism 4 */}
            <div className="bg-gradient-to-br from-amber-900/30 to-orange-800/20 border border-amber-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-amber-300 mb-4">4. Reduces Inflammation</h3>
              <p className="text-gray-300 mb-4">
                Chronic vascular inflammation drives atherosclerosis. Polyphenols suppress key inflammatory pathways.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Inflammatory Markers Reduced</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• <strong className="text-white">C-reactive protein (CRP):</strong> ↓15-20%</li>
                    <li>• <strong className="text-white">IL-6:</strong> ↓12-18%</li>
                    <li>• <strong className="text-white">TNF-α:</strong> ↓10-15%</li>
                    <li>• <strong className="text-white">VCAM-1:</strong> ↓8-12%</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Mechanisms</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Oleocanthal inhibits COX enzymes</li>
                    <li>• Suppresses NF-κB pathway</li>
                    <li>• Reduces oxidative stress</li>
                    <li>• Modulates immune response</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mechanism 5 */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-green-800/20 border border-emerald-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">5. Improves Lipid Profile</h3>
              <p className="text-gray-300 mb-4">
                Beyond preventing LDL oxidation, olive oil positively affects cholesterol levels and other blood lipids.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-bold text-white mb-3">Effects on Blood Lipids</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gray-900/50 rounded p-3">
                    <span className="text-sm"><strong className="text-white">HDL Cholesterol</strong> (good)</span>
                    <span className="text-green-400 font-bold">↑ 5-8%</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-900/50 rounded p-3">
                    <span className="text-sm"><strong className="text-white">LDL Cholesterol</strong> (bad)</span>
                    <span className="text-blue-400 font-bold">↓ 3-6%</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-900/50 rounded p-3">
                    <span className="text-sm"><strong className="text-white">Triglycerides</strong></span>
                    <span className="text-blue-400 font-bold">↓ 5-10%</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-900/50 rounded p-3">
                    <span className="text-sm"><strong className="text-white">Total/HDL Ratio</strong></span>
                    <span className="text-green-400 font-bold">↓ 8-12%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mechanism 6 */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-800/20 border border-cyan-700/40 rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">6. Anti-Thrombotic Effects</h3>
              <p className="text-gray-300 mb-4">
                Polyphenols reduce the risk of dangerous blood clots that cause heart attacks and strokes.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• <strong className="text-white">Reduces platelet aggregation:</strong> Platelets less likely to clump together</li>
                <li>• <strong className="text-white">Improves fibrinolysis:</strong> Body better at breaking down clots</li>
                <li>• <strong className="text-white">Decreases thromboxane B2:</strong> Potent platelet activator reduced</li>
                <li>• <strong className="text-white">Clinical significance:</strong> May reduce acute coronary events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Oils for Heart Health */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🏆</span>
            Cardiologist-Recommended Olive Oils
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              For cardiovascular protection, choose oils with 500+ mg/kg polyphenols—the level used in successful clinical trials:
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-red-900/30 to-pink-800/20 border-l-4 border-red-500 rounded-r-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">SP360 Organic</h3>
                    <p className="text-gray-400">Greece • Koroneiki • 1462 mg/kg</p>
                  </div>
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">TOP PICK</span>
                </div>
                <p className="text-gray-300 mb-3">
                  Nearly 6x the polyphenol threshold for cardiovascular benefits. Extremely high in hydroxytyrosol (LDL protection) and oleocanthal (anti-inflammatory).
                </p>
                <Link href="/" className="text-red-400 hover:text-red-300 font-semibold text-sm">
                  View in Rankings →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">ONSURI Arbosana</h3>
                    <p className="text-gray-400">California • Arbosana • 968 mg/kg</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-3">
                  Exceptional oleocanthal-to-oleacein ratio optimized for cardiovascular health. UC Davis tested for endothelial function benefits.
                </p>
                <Link href="/" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                  View in Rankings →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">PJ KABOS</h3>
                    <p className="text-gray-400">Greece (Crete) • Koroneiki • 858 mg/kg</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-3">
                  From Crete, where heart disease rates are among the lowest globally. High oleocanthal for anti-inflammatory cardiovascular protection.
                </p>
                <Link href="/" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                  View in Rankings →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Vallesur</h3>
                    <p className="text-gray-400">Spain • Picual • 554 mg/kg</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-3">
                  Spanish Picual variety known for stability and high polyphenols. Good balance of oleic acid and polyphenols for heart health.
                </p>
                <Link href="/" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                  View in Rankings →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white mt-6">
              <h3 className="text-xl font-bold mb-3">See All Heart-Healthy Options</h3>
              <p className="text-indigo-50 mb-4">
                Browse our complete rankings of lab-verified high polyphenol olive oils with detailed cardiovascular benefit information.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-all"
              >
                <span>View Full Rankings</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💊</span>
            How to Use Olive Oil for Heart Health
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Optimal Dosage</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Minimum Effective</div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">2 tbsp</div>
                  <div className="text-xs text-gray-400 mb-2">30ml daily</div>
                  <p className="text-sm text-gray-300">EU health claim threshold. Provides cardiovascular protection.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border-2 border-green-500">
                  <div className="text-sm text-gray-400 mb-1">PREDIMED Dosage</div>
                  <div className="text-3xl font-bold text-green-400 mb-1">4 tbsp</div>
                  <div className="text-xs text-gray-400 mb-2">50ml daily</div>
                  <p className="text-sm text-gray-300">Level used in trial showing 30% risk reduction. Recommended.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Upper Limit</div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">7 tbsp</div>
                  <div className="text-xs text-gray-400 mb-2">100ml daily</div>
                  <p className="text-sm text-gray-300">Maximum used safely in trials. Monitor caloric intake.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">Consumption Tips</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <strong className="text-white">Replace saturated fats:</strong> Substitute for butter, margarine, mayo. Don't just add on top of existing fat intake.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <strong className="text-white">Consume raw when possible:</strong> Salad dressings preserve maximum polyphenols for cardiovascular benefits.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <strong className="text-white">Use with meals:</strong> Enhances absorption of fat-soluble vitamins and polyphenols.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <strong className="text-white">Consistency matters:</strong> Daily consumption provides sustained cardiovascular protection.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-orange-800/20 border border-amber-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-300 mb-4">Combining with Heart Medications</h3>
              <p className="text-gray-300 mb-4">
                High polyphenol olive oil is safe with most cardiovascular medications and may enhance their effects:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Compatible With</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>✓ Statins (cholesterol drugs)</li>
                    <li>✓ ACE inhibitors (BP meds)</li>
                    <li>✓ Beta-blockers</li>
                    <li>✓ Aspirin (low-dose)</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Consult Doctor If Taking</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>⚠ Warfarin (vitamin K interaction)</li>
                    <li>⚠ Blood thinners</li>
                    <li>⚠ High-dose anticoagulants</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 italic">
                Always inform your cardiologist about dietary supplements and high polyphenol oil consumption.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-600 via-pink-600 to-rose-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">The Bottom Line: Olive Oil for Heart Health</h2>
            <div className="text-red-50 text-lg leading-relaxed space-y-4">
              <p>
                The evidence is definitive: high polyphenol extra virgin olive oil is one of the most powerful dietary interventions for cardiovascular health. The PREDIMED study's 30% risk reduction rivals many pharmaceutical treatments.
              </p>
              <p>
                <strong>Cardiologist recommendations:</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Choose oils with 500+ mg/kg polyphenols (lab-verified)</li>
                <li>• Consume 3-4 tablespoons (50ml) daily</li>
                <li>• Replace saturated fats—don't add on top</li>
                <li>• Prioritize raw consumption (salads, drizzling)</li>
                <li>• Store in dark bottles, use within 6 months</li>
                <li>• Combine with Mediterranean diet pattern</li>
              </ul>
              <p className="pt-2">
                If you're at cardiovascular risk or have existing heart disease, high polyphenol olive oil should be a cornerstone of your dietary strategy.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all shadow-xl mt-6"
            >
              <span>View Heart-Healthy Oils</span>
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
            <Link
              href="/blog/health-benefits-high-polyphenol-evoo"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                7 Science-Backed Health Benefits
              </h3>
              <p className="text-sm text-gray-400">Complete health benefits guide beyond cardiovascular</p>
            </Link>

            <Link
              href="/blog/best-olive-oil-for-longevity"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">⏳</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Best Olive Oil for Longevity
              </h3>
              <p className="text-sm text-gray-400">Blue Zones insights and anti-aging benefits</p>
            </Link>

            <Link
              href="/blog/top-10-highest-polyphenol-olive-oils"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Top 10 Highest Polyphenol Oils
              </h3>
              <p className="text-sm text-gray-400">Lab-verified rankings and comparison</p>
            </Link>
          </div>
        </section>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
          >
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
