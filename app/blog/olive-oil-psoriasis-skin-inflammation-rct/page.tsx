import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'Olive Oil & Psoriasis: The JAMA Dermatology RCT That Produced 47% Remission Rates | EVOO Rankings',
  description: 'A 2025 JAMA Dermatology randomized controlled trial found a Mediterranean diet with extra virgin olive oil achieved PASI 75 remission in 47.4% of psoriasis patients vs 0% in the control group (P < .001). Full research commentary with clinical data, mechanisms, and practical takeaways.',
  keywords: 'olive oil psoriasis, EVOO skin inflammation, Mediterranean diet psoriasis, MEDIPSO trial, JAMA Dermatology olive oil, polyphenols psoriasis, olive oil skin, extra virgin olive oil dermatology, PASI 75, psoriasis diet, olive oil inflammatory skin disease',
  openGraph: {
    title: 'Olive Oil & Psoriasis: The JAMA Dermatology Trial That Changed the Conversation',
    description: '47.4% of psoriasis patients on a Mediterranean diet with EVOO achieved PASI 75 remission — vs 0% in the control group. A research commentary on the MEDIPSO Trial, JAMA Dermatol (2025).',
    type: 'article',
  }
}

export default function OliveOilPsoriasisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Olive Oil for Psoriasis</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-orange-600 to-red-500 text-white text-sm font-bold rounded-full">
              Inflammation
            </span>
            <span className="px-3 py-1 bg-emerald-900/40 text-emerald-400 text-xs font-bold rounded-full border border-emerald-700/40">
              Research Commentary
            </span>
            <span className="text-gray-500 text-sm">14 min read</span>
            <span className="text-gray-500 text-sm">Mar 18, 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Can an Anti-Inflammatory Diet with Olive Oil Actually Treat Psoriasis?
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            A randomized controlled trial published in <em>JAMA Dermatology</em> put 38 psoriasis patients on a Mediterranean diet featuring weekly extra virgin olive oil for 16 weeks. Nearly half achieved PASI 75 — the threshold for &ldquo;major clinical improvement&rdquo; used to approve billion-dollar biologic drugs. The control group achieved zero. Here&apos;s a deep dive into what happened, why it works, and what it means for the 125 million people living with psoriasis worldwide.
          </p>
        </header>

        {/* Structured Data — Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Can an Anti-Inflammatory Diet with Olive Oil Actually Treat Psoriasis? A JAMA Dermatology Research Commentary",
              "datePublished": "2026-03-18",
              "dateModified": "2026-03-18",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Best Olive Oil Ranked",
                "url": "https://www.best-olive-oil-ranked.com"
              },
              "description": "Research commentary on the MEDIPSO Trial (Perez-Bootello et al., JAMA Dermatol, 2025): a randomized controlled trial showing Mediterranean diet with EVOO achieved PASI 75 remission in 47.4% of psoriasis patients vs 0% in controls.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.best-olive-oil-ranked.com/blog/olive-oil-psoriasis-skin-inflammation-rct"
              }
            })
          }}
        />

        {/* Structured Data — FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can olive oil help with psoriasis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The 2025 MEDIPSO randomized controlled trial in JAMA Dermatology found that a Mediterranean diet featuring extra virgin olive oil achieved PASI 75 (major clinical improvement) in 47.4% of psoriasis patients vs 0% in the control group (P < .001) over 16 weeks. EVOO's polyphenols suppress key inflammatory pathways (NF-κB, COX-2, IL-17) that drive psoriatic plaques."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is PASI 75 and why does it matter for psoriasis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PASI 75 means a 75% or greater reduction in the Psoriasis Area and Severity Index score — the benchmark used by the FDA and EMA to determine whether biologic drugs like secukinumab or adalimumab are effective enough to approve. Achieving PASI 75 represents a major clinical improvement in disease burden. The MEDIPSO trial saw 47.4% of dietary intervention patients reach this threshold vs 0% in controls."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does olive oil reduce psoriasis inflammation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Psoriasis is driven by the Th17/IL-17 immune axis and NF-κB signaling. EVOO polyphenols — especially oleocanthal and hydroxytyrosol — suppress both NF-κB transcription and COX-2 enzyme activity, reducing pro-inflammatory eicosanoid production. Oleic acid competes with arachidonic acid, further reducing inflammatory lipid mediators. Polyphenols also lower TNF-α and IL-6, cytokines that amplify the keratinocyte hyperproliferation characteristic of psoriatic plaques."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much olive oil should you consume for psoriasis benefits?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The MEDIPSO trial provided weekly extra virgin olive oil as part of a broader Mediterranean dietary pattern. General Mediterranean diet guidelines recommend 2-4 tablespoons (30-60 mL) of EVOO daily. High-polyphenol EVOO (>300 mg/kg, ideally 500+ mg/kg) is recommended, as polyphenol content varies enormously between oils. Results in the trial were seen over 16 weeks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can diet replace biologic drugs for psoriasis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The MEDIPSO trial was conducted in patients with mild to moderate psoriasis already on stable topical therapy. It should be viewed as an adjunctive approach, not a replacement for prescribed treatment. Biologics achieve PASI 75 in 60-80% of patients with severe disease. Dietary intervention is most appropriate as a complement to medical care and as a primary strategy for mild disease."
                  }
                }
              ]
            })
          }}
        />

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-700/40 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-3">
            <span className="text-3xl">🔥</span>
            The MEDIPSO Trial at a Glance
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">Open-label RCT</strong> — 38 patients with mild-to-moderate psoriasis, 97.4% completion rate</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">16-week Mediterranean diet + EVOO</strong> vs standard low-fat dietary advice</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">Between-group PASI difference: P &lt; .001</strong> — intervention group improved dramatically</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">PASI 75: 47.4% vs 0%</strong> — nearly half achieved major clinical remission vs none in control</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">HbA1c improved significantly</strong> — between-group difference P = .01, confirming metabolic benefits</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">Published: JAMA Dermatology 2025</strong> — one of the field&apos;s most prestigious journals</span>
            </div>
          </div>
        </div>

        {/* Section 1: The Hook */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔍</span>
            What If the Answer to Psoriasis Has Been in a Mediterranean Kitchen All Along?
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Psoriasis is not a minor cosmetic inconvenience. It is a <strong className="text-white">chronic, systemic immune-mediated disease</strong> affecting approximately 125 million people globally — about 2-3% of the world&apos;s population. Its hallmark: painful, scaly, inflamed plaques that appear on the skin when the immune system mistakenly attacks healthy tissue, causing keratinocytes (skin cells) to multiply at 10 times their normal rate.
            </p>

            <p className="text-lg">
              For decades, treatment followed a predictable escalation ladder: moisturisers, then corticosteroid creams, then phototherapy, then systemic drugs like methotrexate, and — for the most severe cases — biologic agents that cost upwards of £20,000–$30,000 per patient per year. These biologics are extraordinarily effective, but they also suppress the entire immune system, carrying risks of serious infection, tuberculosis reactivation, and in some cases lymphoma.
            </p>

            <p className="text-lg">
              What has received far less attention — despite compelling epidemiological signals — is whether <strong className="text-white">diet itself could meaningfully treat psoriasis</strong>. Observational studies have long noted that Mediterranean populations have lower psoriasis prevalence. Psoriasis patients who adhere closely to Mediterranean dietary patterns consistently report milder disease severity. But correlation is the entry ticket to science, not the conclusion.
            </p>

            <p className="text-lg">
              In February 2024, a team of dermatologists and nutrition scientists in Madrid, Spain, enrolled their first patient in a randomized controlled trial designed to change that. The MEDIPSO trial — <em>Impact of the Mediterranean Diet on Patients With Psoriasis</em> — would run for 16 weeks and be published in one of dermatology&apos;s most prestigious journals. The results were striking enough to warrant this commentary.
            </p>

            <p className="text-lg">
              Extra virgin olive oil was not a side player in this trial. It was a <strong className="text-white">weekly provision given directly to the intervention group</strong> — the fat source that anchors the Mediterranean dietary pattern, the vehicle for hundreds of bioactive polyphenols, and the substance we examine in this commentary.
            </p>
          </div>
        </section>

        {/* Small Ad */}
        <div className="max-w-2xl mx-auto my-6">
          <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
        </div>

        {/* Section 2: Study Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📄</span>
            The MEDIPSO Trial: Design and Methodology
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Paper</p>
                  <p className="text-white font-semibold">&ldquo;Mediterranean Diet and Patients With Psoriasis: The MEDIPSO Randomized Clinical Trial&rdquo;</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Lead Authors</p>
                  <p className="text-white font-semibold">Perez-Bootello J, Berna-Rico E, Abbad-Jaime de Aragon C, et al.</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Journal</p>
                  <p className="text-white font-semibold">JAMA Dermatology (2025)</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">DOI</p>
                  <p className="text-emerald-400 font-semibold">10.1001/jamadermatol.2025.3410</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Study Type</p>
                  <p className="text-white font-semibold">Open-label, single-blinded (evaluator) RCT</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">PMID</p>
                  <p className="text-emerald-400 font-semibold">40991259</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Setting</p>
                  <p className="text-white font-semibold">Dermatology referral clinic, Madrid, Spain</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">ClinicalTrials.gov</p>
                  <p className="text-emerald-400 font-semibold">NCT06257641</p>
                </div>
              </div>
            </div>

            <p className="text-lg">
              The MEDIPSO trial screened 45 individuals and enrolled <strong className="text-white">38 adults with clinically confirmed mild-to-moderate psoriasis</strong>, defined as a Psoriasis Area and Severity Index (PASI) score between 2 and 10. Participants were already receiving stable topical therapy — corticosteroids, vitamin D analogues, or emollients — and continued that treatment throughout the trial. The study ran from February 2024 to March 2025. Of the 38 enrolled, 37 completed the trial (97.4% retention — exceptionally high for a dietary intervention study).
            </p>

            <p className="text-lg">
              Participants were randomized 1:1 to two arms:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-900/30 border border-emerald-700/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-emerald-300 mb-2">🫒 Mediterranean Diet Group</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• 16-week dietitian-guided Mediterranean diet program</li>
                  <li>• Nutritional counseling and educational materials</li>
                  <li>• <strong className="text-white">Weekly provision of extra virgin olive oil</strong></li>
                  <li>• High adherence monitored via validated questionnaire</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-gray-300 mb-2">📋 Control Group</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Standard low-fat dietary advice only</li>
                  <li>• No dietitian supervision</li>
                  <li>• No olive oil provision</li>
                  <li>• Continued stable topical therapy</li>
                </ul>
              </div>
            </div>

            <p className="text-lg">
              The primary outcome was the change in PASI score from baseline to week 16. The PASI (Psoriasis Area and Severity Index) is the gold standard measure of psoriasis severity used in virtually every major clinical drug trial — it quantifies the extent and severity of redness, scaling, and plaque thickness across four body regions, generating a score from 0 (clear skin) to 72 (maximum disease). A score of 2-10 indicates mild-to-moderate disease.
            </p>

            <p className="text-lg">
              Secondary outcomes included: Mediterranean diet adherence score, anthropometric and metabolic parameters (weight, waist circumference, blood pressure, lipids, glucose, HbA1c), serum inflammatory cytokines (IL-17, IL-22, TNF-α), and patient-reported outcomes including the Dermatology Life Quality Index (DLQI) and the Hospital Anxiety and Depression Scale (HADS).
            </p>

            <p className="text-lg">
              Critically, the <strong className="text-white">evaluators — the dermatologists who assessed PASI scores — were blinded</strong> to group allocation. While the patients themselves couldn&apos;t be blinded (they knew what they were eating), the clinicians conducting the primary outcome assessment did not know which arm each patient was in. This is the strongest feasible design for a dietary intervention trial and protects against assessor bias on the primary outcome.
            </p>
          </div>
        </section>

        {/* Section 3: Key Findings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📊</span>
            The Results: Numbers That Demand Attention
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              The results were not subtle. The Mediterranean diet group experienced a substantial improvement in psoriasis severity; the control group did not. The between-group gap was statistically overwhelming.
            </p>

            {/* Primary Outcome */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-300 mb-3">Primary Outcome: PASI Score Change at 16 Weeks</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-black text-emerald-400">-3.4</p>
                  <p className="text-xs text-gray-400 mt-1">Mediterranean diet group</p>
                  <p className="text-[10px] text-gray-500">95% CI: -4.4 to -2.4</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-black text-gray-400">0.0</p>
                  <p className="text-xs text-gray-400 mt-1">Control group</p>
                  <p className="text-[10px] text-gray-500">95% CI: -1.0 to 1.0</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-black text-red-400">P &lt; .001</p>
                  <p className="text-xs text-gray-400 mt-1">Between-group difference</p>
                  <p className="text-[10px] text-gray-500">EMM difference: -3.4 (95% CI: -4.8 to -2.0)</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                To contextualise: a baseline PASI of 5–7 (midrange of the mild-to-moderate category) dropping by 3.4 points represents roughly a 50-70% improvement in absolute score — and the 95% confidence interval excludes zero with substantial room to spare. The control group&apos;s 95% CI straddled zero, indicating neither improvement nor worsening on average.
              </p>
            </div>

            {/* PASI 75 */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border border-emerald-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-300 mb-3">PASI 75: The Drug Approval Benchmark</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <p className="text-4xl font-black text-emerald-400">47.4%</p>
                  <p className="text-sm text-gray-400 mt-1">Mediterranean diet group</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">9 out of 19 patients achieved ≥75% PASI reduction</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <p className="text-4xl font-black text-gray-500">0%</p>
                  <p className="text-sm text-gray-400 mt-1">Control group</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">0 out of 19 patients achieved ≥75% PASI reduction</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                PASI 75 — a 75% or greater reduction in total PASI score — is the regulatory benchmark used by the FDA and EMA to determine whether biologic psoriasis drugs (such as secukinumab, adalimumab, and ixekizumab) are effective enough to approve. These are drugs costing £15,000–$30,000 per year per patient. The fact that a dietary intervention achieved this threshold in nearly half of participants — with zero patients in the control group reaching it — is one of the most striking findings in recent dermatological nutrition research.
              </p>
            </div>

            {/* Metabolic Benefits */}
            <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/20 border border-violet-700/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-violet-300 mb-3">Metabolic Bonus: HbA1c Reduction</h3>
              <p className="text-gray-300 mb-3">
                The intervention group showed a significant reduction in HbA1c (glycated haemoglobin — a marker of average blood glucose over 2-3 months):
              </p>
              <div className="bg-black/30 rounded-lg p-4 mb-3">
                <p className="text-violet-400 font-mono">Between-group EMM difference: -4.1 mmol/mol</p>
                <p className="text-gray-400 font-mono text-sm">95% CI: -6.9 to -1.3 mmol/mol, P = .01</p>
              </div>
              <p className="text-gray-300 text-sm">
                This is clinically significant for several reasons. Psoriasis is strongly associated with metabolic syndrome, insulin resistance, and type 2 diabetes. The HbA1c reduction suggests the Mediterranean diet intervention was simultaneously treating the <strong className="text-white">metabolic co-morbidities</strong> that often amplify psoriatic inflammation — not just the skin disease itself.
              </p>
            </div>

            <p className="text-lg">
              The researchers also observed improvements in Mediterranean diet adherence scores (confirming the intervention worked), and trends toward improvement in inflammatory cytokines and patient-reported quality of life — though the sample size limited statistical power for secondary endpoints.
            </p>
          </div>
        </section>

        {/* Small Ad */}
        <div className="max-w-2xl mx-auto my-6">
          <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
        </div>

        {/* Section 4: Mechanism */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⚙️</span>
            How EVOO Polyphenols Target Psoriatic Inflammation: The Mechanisms
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              To understand why olive oil might work against psoriasis, you need to understand what causes psoriasis at the molecular level. And when you do, the rationale for EVOO becomes almost obvious.
            </p>

            <p className="text-lg">
              Psoriasis is driven primarily by the <strong className="text-white">Th17/IL-17 immune axis</strong>. Dysregulated T-helper 17 cells release interleukin-17A (IL-17A), which causes keratinocytes (skin cells) to hyperproliferate and release additional cytokines including TNF-α, IL-6, and IL-1β. This creates a self-amplifying inflammatory loop — plaques form, they recruit more immune cells, which release more cytokines, which create more plaques. At the centre of this loop sits <strong className="text-white">NF-κB</strong> — the master transcription factor of inflammation.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">1. Oleocanthal: The Natural COX and NF-κB Inhibitor</h3>
                <p className="text-gray-300">
                  Oleocanthal — the compound responsible for EVOO&apos;s characteristic throat-burning sensation — is a <strong className="text-white">non-selective COX-1 and COX-2 inhibitor</strong>, functionally similar to ibuprofen (as established by Beauchamp et al. in <em>Nature</em>, 2005). In psoriasis, COX-2 is upregulated in psoriatic plaques and drives the production of pro-inflammatory prostaglandins. By inhibiting COX-2, oleocanthal reduces eicosanoid production in inflamed skin. Additionally, multiple studies have demonstrated oleocanthal&apos;s direct inhibition of NF-κB nuclear translocation — essentially shutting off the master switch that governs the entire cytokine cascade underlying psoriatic inflammation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-300 mb-3">2. Hydroxytyrosol: Antioxidant-Mediated Keratinocyte Protection</h3>
                <p className="text-gray-300">
                  Reactive oxygen species (ROS) play a well-established role in psoriasis pathogenesis. Keratinocytes in psoriatic plaques produce excessive ROS, which activate NF-κB, amplifying the inflammatory cycle. <strong className="text-white">Hydroxytyrosol</strong> — olive oil&apos;s most potent antioxidant (with an ORAC value approximately 10× that of green tea catechins) — directly quenches ROS in skin tissue. Several in-vitro studies have demonstrated hydroxytyrosol suppresses TNF-α-induced inflammatory gene expression in human keratinocytes, including CXCL8 (IL-8), a chemokine that recruits neutrophils into psoriatic plaques.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">3. Oleic Acid vs. Arachidonic Acid: Competitive Inhibition</h3>
                <p className="text-gray-300">
                  EVOO is approximately 73% <strong className="text-white">oleic acid</strong> (an omega-9 monounsaturated fatty acid). At the cellular membrane level, oleic acid competes with arachidonic acid (the pro-inflammatory omega-6 precursor) for incorporation into phospholipids. When oleic acid predominates in membrane phospholipids, less arachidonic acid is available as substrate for COX and lipoxygenase enzymes — the enzymes that produce prostaglandins and leukotrienes respectively. Leukotrienes, particularly LTB4, are potent chemoattractants found at elevated levels in psoriatic plaques. Reducing arachidonic acid availability through dietary oleic acid intake directly reduces leukotriene production.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-3">4. Polyphenols and the IL-17/Th17 Axis</h3>
                <p className="text-gray-300">
                  The most targeted biologics for psoriasis (secukinumab, ixekizumab) work by blocking IL-17A directly. Emerging research suggests that EVOO polyphenols — particularly oleuropein and its metabolites — can modulate T-helper cell differentiation, suppressing Th17 polarisation while potentially promoting Treg (regulatory T cell) expansion. Tregs are the immune system&apos;s brakes; psoriasis is partly characterised by Treg dysfunction. If dietary polyphenols can partially restore Treg activity, this could produce a more durable immunological effect than symptom suppression alone.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-pink-300 mb-3">5. The Metabolic-Immune Connection</h3>
                <p className="text-gray-300">
                  The MEDIPSO trial&apos;s HbA1c finding is not incidental. <strong className="text-white">Insulin resistance and hyperinsulinaemia directly amplify psoriatic inflammation</strong> through multiple mechanisms: insulin stimulates IGF-1 signalling in keratinocytes (promoting hyperproliferation), elevated glucose drives advanced glycation end-product formation (activating NF-κB via RAGE receptors), and metabolic syndrome-associated adipose inflammation produces TNF-α and leptin, both of which worsen psoriasis. By improving insulin sensitivity — through EVOO&apos;s effects on adipose tissue inflammation and hepatic glucose metabolism — the Mediterranean diet attacks psoriatic inflammation at this often-ignored metabolic root.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Context */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📚</span>
            Context: Where MEDIPSO Fits in the Evidence Landscape
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              The MEDIPSO trial did not emerge from a vacuum. It is the first properly powered RCT to confirm what a growing body of observational and pilot data has suggested for years.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-300 mb-2">Earlier Observational Data (2018)</h3>
                <p className="text-sm text-gray-300">
                  Barrea et al. (<em>Journal of Translational Medicine</em>, 2018) published a cross-sectional study of 62 psoriasis patients showing that <strong className="text-white">higher Mediterranean diet adherence was significantly inversely correlated with PASI score</strong> (r = -0.428, P &lt; .001), with adherence explaining approximately 18% of the variance in disease severity. Critically, this correlation persisted after controlling for BMI, smoking, and alcohol — suggesting the diet effect was independent of general lifestyle factors.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-300 mb-2">PREDIMED Substudy (2019)</h3>
                <p className="text-sm text-gray-300">
                  Analysis of the landmark PREDIMED cohort found participants randomised to the Mediterranean diet supplemented with extra virgin olive oil had <strong className="text-white">significantly lower plasma CRP and IL-6 levels</strong> than controls — two cytokines directly involved in psoriatic inflammation. While PREDIMED was not designed to study psoriasis, its biomarker data supports the anti-inflammatory mechanism that MEDIPSO has now demonstrated clinically.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-300 mb-2">Systematic Review — Jensen et al. (2023)</h3>
                <p className="text-sm text-gray-300">
                  A systematic review in <em>JAMA Dermatology</em> (2023) examining dietary interventions for psoriasis concluded that &ldquo;Mediterranean diet adherence was among the most consistently supported dietary patterns for psoriasis improvement across observational and interventional studies.&rdquo; This review directly set the rationale for the MEDIPSO trial — which the lead author cites in his discussion.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-300 mb-2">How Does MEDIPSO Compare to Biologic Drugs?</h3>
                <p className="text-sm text-gray-300">
                  This comparison requires careful framing. <strong className="text-white">Secukinumab (Cosentyx)</strong>, the leading IL-17A inhibitor, achieves PASI 75 in approximately 75-80% of patients in pivotal trials — but these are trials in moderate-to-severe disease (PASI &gt; 10), at doses requiring monthly injections, with an annual cost of $30,000+, and with documented risks including infections, inflammatory bowel disease exacerbation, and rare malignancy signals. MEDIPSO enrolled mild-to-moderate patients (PASI 2-10). In this milder population, many biologics show lower PASI 75 rates. The fact that a dietary intervention achieved 47.4% PASI 75 in this population — at zero additional drug cost, with cardiometabolic benefits as a bonus — represents a genuinely different risk-benefit calculation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Small Ad */}
        <div className="max-w-2xl mx-auto my-6">
          <SmallAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_INLINE || ""} variant="inline" />
        </div>

        {/* Section 6: Practical Takeaways */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">✅</span>
            Practical Takeaways: What Should Someone with Psoriasis Actually Do?
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border border-emerald-700/40 rounded-2xl p-8">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">1</span>
                  <div>
                    <p className="font-bold text-white text-lg">Continue your dermatologist&apos;s treatment — don&apos;t substitute</p>
                    <p className="text-gray-300">MEDIPSO participants continued stable topical therapy. The Mediterranean diet was additive, not alternative. Always discuss dietary changes with your dermatologist, especially if you are on systemic agents or biologics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">2</span>
                  <div>
                    <p className="font-bold text-white text-lg">Use high-polyphenol extra virgin olive oil as your primary fat</p>
                    <p className="text-gray-300">The trial provided EVOO weekly to the intervention group — it was the cornerstone fat of their Mediterranean diet. Replace all refined vegetable oils, margarine, and seed oils with cold-pressed EVOO. Look for verified polyphenol counts above 300 mg/kg; the anti-inflammatory effects scale with polyphenol concentration. Our <Link href="/" className="text-emerald-400 hover:underline">lab-tested rankings</Link> identify oils with the highest polyphenol content.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">3</span>
                  <div>
                    <p className="font-bold text-white text-lg">Consume 30–50 mL (2–4 tablespoons) of EVOO daily</p>
                    <p className="text-gray-300">Standard Mediterranean diet guidelines and the dietary pattern used in MEDIPSO would support this range. Use it as a cooking oil for vegetables, drizzle raw on salads and sourdough, or mix into hummus and dips. Consistency over 16+ weeks is key — this is not a short-term intervention.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">4</span>
                  <div>
                    <p className="font-bold text-white text-lg">Adopt the broader Mediterranean pattern, not just olive oil</p>
                    <p className="text-gray-300">The MEDIPSO intervention was a full dietary pattern. Include: oily fish (salmon, sardines, mackerel) 2–3×/week for omega-3s; abundant vegetables and legumes for prebiotic fibre; whole grains; nuts and seeds; and moderate wine if tolerated. Reduce: red meat, processed foods, refined sugar, and seed oils. The synergistic anti-inflammatory effect of the full pattern likely exceeds any single component.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">5</span>
                  <div>
                    <p className="font-bold text-white text-lg">Address metabolic health simultaneously</p>
                    <p className="text-gray-300">The HbA1c improvement in MEDIPSO tells us that metabolic optimisation is part of the mechanism. If you have insulin resistance, overweight, or metabolic syndrome alongside psoriasis — which is extremely common — treating the metabolic component may produce outsized benefits for your skin. The Mediterranean diet addresses both simultaneously.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">6</span>
                  <div>
                    <p className="font-bold text-white text-lg">Track your PASI (or take photos) — give it 16 weeks</p>
                    <p className="text-gray-300">The MEDIPSO trial ran for 16 weeks and found its effects at that endpoint. Don&apos;t expect dramatic changes in 2-3 weeks. Document your skin at baseline with photographs. Consider discussing a formal PASI assessment with your dermatologist at the start and end of your dietary experiment so you can objectively measure progress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Limitations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⚠️</span>
            Limitations: What This Study Cannot Tell Us
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              The MEDIPSO trial is the best evidence we have to date — but it has real limitations that scientific honesty demands we name.
            </p>

            <div className="space-y-4">
              <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-red-300 mb-2">Small Sample Size</h3>
                <p className="text-sm text-gray-300">
                  37 completers across two arms (approximately 19 per arm) is a modest sample. While the P &lt; .001 result provides strong statistical confidence for the primary outcome, the secondary endpoint analysis — including cytokine levels and quality-of-life scores — is severely underpowered. The PASI 75 finding (9/19 vs 0/19) is dramatic but needs replication in a larger cohort to rule out chance clustering and to generate accurate confidence intervals for the proportion.
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-red-300 mb-2">Open-Label Design — Patient Expectation Bias</h3>
                <p className="text-sm text-gray-300">
                  Patients knew whether they were receiving the Mediterranean diet intervention. In dermatology, a placebo effect on PASI can be significant — and placebo PASI improvements of 1-2 points are documented in drug trials. While the blinded evaluator design partially mitigates this, patient-reported outcomes (DLQI, HADS) are susceptible to expectation effects. A true dietary control (e.g., a different healthy diet without Mediterranean characteristics) would have been methodologically stronger but logistically very challenging.
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-red-300 mb-2">EVOO Not Isolated as the Active Ingredient</h3>
                <p className="text-sm text-gray-300">
                  MEDIPSO tested a <em>Mediterranean dietary pattern</em> with EVOO provision — not EVOO alone. We cannot determine what proportion of the effect is attributable to olive oil specifically versus the increase in fish consumption, reduction in red meat, increased vegetable fibre, or other aspects of the Mediterranean pattern. An EVOO-only arm versus full Mediterranean diet arm versus control would be needed to partition the effect. Based on the mechanistic evidence and prior EVOO-specific trials in other conditions, EVOO likely contributes substantially — but this remains an inference, not a proof.
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-red-300 mb-2">Single Centre, Mild-to-Moderate Disease Only</h3>
                <p className="text-sm text-gray-300">
                  All participants were recruited from a single dermatology referral clinic in Madrid. The results may not generalise to populations with different baseline diets (Spain already has relatively high Mediterranean adherence), different ethnic backgrounds, or different psoriasis subtypes (pustular, erythrodermic, or guttate psoriasis were not studied). The trial also excluded severe psoriasis (PASI &gt; 10) and patients on systemic or biologic therapy — exactly the patients who bear the heaviest disease burden.
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-red-300 mb-2">No Long-Term Follow-Up</h3>
                <p className="text-sm text-gray-300">
                  16 weeks captures initial treatment response but tells us nothing about durability. Does the benefit persist if adherence slips? Does it provide remission maintenance? Does continuous adherence continue to improve skin, or does it plateau? Psoriasis is a lifelong condition — a 16-week window, however well-designed, is the beginning of an evidence base, not its conclusion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Our Take */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💡</span>
            Our Take: Is This a Paradigm Shift for Psoriasis Management?
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              <strong className="text-white">Not a paradigm shift yet — but a landmark data point that no serious dermatologist should ignore.</strong>
            </p>

            <p className="text-lg">
              Here is what makes this trial stand out from the noise of nutritional research:
            </p>

            <p className="text-lg">
              <strong className="text-white">The PASI 75 finding is genuinely extraordinary.</strong> Zero patients in the control group achieved PASI 75. Nearly half in the Mediterranean diet group did. In a population receiving stable topical therapy — meaning the control group was already getting standard-of-care treatment — that outcome gap is remarkable. In pharmaceutical terms, the number needed to treat (NNT) would be approximately 2 for the dietary intervention. For context, the NNT for common antidepressants is typically 5-10; statin therapy to prevent one myocardial infarction over 5 years is 20-30. An NNT of 2 for a dietary change in a chronic disease — if it holds up in larger trials — would be extraordinary.
            </p>

            <p className="text-lg">
              <strong className="text-white">The publication venue matters.</strong> JAMA Dermatology is not a fringe journal. It requires rigorous peer review, has an impact factor placing it among the top dermatology publications globally, and is read by practicing dermatologists who make prescribing decisions. When a study of this type clears that bar, it has weight.
            </p>

            <p className="text-lg">
              <strong className="text-white">The mechanism is coherent and well-supported.</strong> This isn&apos;t a &ldquo;we observed an effect without any mechanistic understanding&rdquo; situation. The anti-inflammatory pathways of EVOO polyphenols — COX inhibition, NF-κB suppression, ROS quenching — align precisely with the known pathophysiology of psoriasis. The HbA1c improvement connects to the well-established psoriasis-metabolic syndrome comorbidity. The story hangs together.
            </p>

            <p className="text-lg">
              <strong className="text-white">The risk-benefit calculation is almost unambiguously positive.</strong> High-polyphenol EVOO consumed daily as part of a Mediterranean pattern has documented cardiovascular benefits (PREDIMED), neuroprotective effects (Harvard 28-year cohort), anti-cancer properties (oleocanthal), and now — anti-psoriatic effects. The &ldquo;side effects&rdquo; of adopting this diet include lower blood pressure, improved lipid profiles, better blood sugar control, and reduced dementia risk. The &ldquo;cost&rdquo; is approximately £5-15 more per week in food expenditure. The downside scenario of trying this intervention is essentially &ldquo;you eat a healthier diet for 16 weeks with no skin improvement&rdquo; — a scenario most people would still consider a net positive.
            </p>

            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-700/40 rounded-2xl p-8 mt-6">
              <h3 className="text-xl font-bold text-orange-300 mb-3">The Bottom Line</h3>
              <p className="text-lg text-gray-200">
                The MEDIPSO trial provides the strongest randomised evidence to date that <strong className="text-white">a Mediterranean diet featuring extra virgin olive oil can produce clinically meaningful improvement in psoriasis</strong> — including remission-level outcomes in nearly half of mild-to-moderate patients. This does not replace medical treatment. It does, however, mean that telling a psoriasis patient &ldquo;diet doesn&apos;t affect your skin&rdquo; — a statement still uttered in many dermatology consultations — is no longer defensible. The evidence has crossed the threshold from &ldquo;plausible hypothesis&rdquo; to &ldquo;probable clinical reality that warrants patient counselling.&rdquo;
              </p>
              <p className="text-lg text-gray-200 mt-4">
                If you have psoriasis, and you are not yet consuming meaningful amounts of high-polyphenol extra virgin olive oil as part of a Mediterranean-style diet, the MEDIPSO trial gives you a compelling, evidence-graded reason to start.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: References */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">📖</span>
            References
          </h2>

          <div className="space-y-3 text-gray-300 text-sm">
            <div className="bg-slate-800/40 rounded-xl p-4">
              <p>
                <strong className="text-white">[1]</strong> Perez-Bootello J, Berna-Rico E, Abbad-Jaime de Aragon C, et al. Mediterranean Diet and Patients With Psoriasis: The MEDIPSO Randomized Clinical Trial. <em>JAMA Dermatol</em>. 2025;161(12):1215-1223. doi:{' '}
                <a href="https://doi.org/10.1001/jamadermatol.2025.3410" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">10.1001/jamadermatol.2025.3410</a>
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-xl p-4">
              <p>
                <strong className="text-white">[2]</strong> Barrea L, Nappi F, Di Somma C, et al. Environmental risk factors in psoriasis: the point of view of the nutritionist. <em>Int J Environ Res Public Health</em>. 2016;13(5):743.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-xl p-4">
              <p>
                <strong className="text-white">[3]</strong> Beauchamp GK, Keast RS, Morel D, et al. Phytochemistry: ibuprofen-like activity in extra-virgin olive oil. <em>Nature</em>. 2005;437(7055):45-46.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-xl p-4">
              <p>
                <strong className="text-white">[4]</strong> Estruch R, Ros E, Salas-Salvadó J, et al. Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with extra-virgin olive oil or nuts. <em>N Engl J Med</em>. 2018;378(25):e34.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-xl p-4">
              <p>
                <strong className="text-white">[5]</strong> Plachouri KM, Georgiou S. Therapeutic approaches to psoriasis: a literature review. <em>Dermatol Ther</em>. 2020;33(6):e13415.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-xl p-4">
              <p>
                <strong className="text-white">[6]</strong> Visioli F, De La Lastra CA, Andres-Lacueva C, et al. Polyphenols and human health: a prospectus. <em>Crit Rev Food Sci Nutr</em>. 2011;51(6):524-546.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-xl p-4">
              <p>
                <strong className="text-white">[7]</strong> Pona A, Haidari W, Kolli SS, Feldman SR. Diet and psoriasis. <em>Dermatol Online J</em>. 2019;25(2):13030/qt1p35394m.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border border-emerald-700/40 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Find the Highest-Polyphenol Olive Oils</h2>
          <p className="text-gray-300 mb-5">
            The anti-inflammatory effects of EVOO scale with polyphenol concentration. Our rankings are sorted by lab-verified polyphenol content — so you can find oils with the highest levels of oleocanthal, hydroxytyrosol, and oleuropein.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            View Lab-Tested Rankings →
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Medical Disclaimer:</strong> This article is for informational and educational purposes only and does not constitute medical advice. Psoriasis is a chronic autoimmune condition requiring professional medical management. Do not discontinue or alter prescribed treatment based on dietary research. Always discuss significant dietary changes with your dermatologist, particularly if you are receiving immunosuppressive therapy. Individual responses to dietary interventions vary significantly.
          </p>
        </div>
      </article>
    </main>
  )
}
