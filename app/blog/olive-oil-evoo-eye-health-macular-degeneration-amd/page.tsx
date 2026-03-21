import Link from 'next/link'
import type { Metadata } from 'next'
import SmallAd from '@/components/SmallAd'

export const metadata: Metadata = {
  title: 'Can Olive Oil Protect Against Macular Degeneration? The Antiangiogenic Evidence | EVOO Rankings',
  description: 'A 2024 study in the Journal of Agricultural and Food Chemistry found that Picual EVOO extract halted blood vessel formation at 20 μg/mL — the exact mechanism that drives wet AMD blindness. Full research commentary with proteomic data, IC50 values, and clinical implications.',
  keywords: 'olive oil macular degeneration, EVOO eye health, olive oil AMD, extra virgin olive oil retina, polyphenols age-related macular degeneration, olive oil antiangiogenic, EVOO diabetic retinopathy, oleocanthal eye health, olive oil vision, high phenolic EVOO AMD',
  openGraph: {
    title: 'Can Olive Oil Protect Against Macular Degeneration? The Antiangiogenic Evidence',
    description: 'Picual EVOO extract completely halted pathological blood vessel formation at 20 μg/mL — the same mechanism targeted by anti-VEGF drugs used to treat wet AMD. A 2024 JAFC study maps the proteomic pathway.',
    type: 'article',
  }
}

export default function OliveOilEyeHealthPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          <span>→</span>
          <span className="text-white">Olive Oil &amp; Eye Health</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        <header className="mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-sky-600 to-blue-500 text-white text-sm font-bold rounded-full">
              Eye Health
            </span>
            <span className="px-3 py-1 bg-emerald-900/40 text-emerald-400 text-xs font-bold rounded-full border border-emerald-700/40">
              Research Commentary
            </span>
            <span className="text-gray-500 text-sm">16 min read</span>
            <span className="text-gray-500 text-sm">Mar 21, 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Can Olive Oil Protect Your Eyes From Going Blind?
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Age-related macular degeneration is the world&apos;s leading cause of irreversible blindness in people over 50 — and the &ldquo;wet&rdquo; form, which destroys central vision within months, is driven entirely by pathological blood vessel growth. A 2024 study in the <em>Journal of Agricultural and Food Chemistry</em> found that the phenolic extract from high-polyphenol Picual EVOO completely shut down that blood vessel formation process at concentrations that left healthy cells intact. Here is the full breakdown of what they found, how it works, and what it means for your eyes.
          </p>
        </header>

        {/* Structured Data — Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Can Olive Oil Protect Against Macular Degeneration? The Antiangiogenic Evidence",
              "description": "A 2024 JAFC study demonstrates that Picual EVOO phenolic extract inhibits pathological angiogenesis — the mechanism behind wet AMD — at 20 μg/mL, with p < 0.0001 significance in tube formation assays.",
              "datePublished": "2026-03-21",
              "dateModified": "2026-03-21",
              "author": {
                "@type": "Organization",
                "name": "EVOO Rankings"
              },
              "publisher": {
                "@type": "Organization",
                "name": "EVOO Rankings",
                "url": "https://www.best-olive-oil-ranked.com"
              },
              "mainEntityOfPage": "https://www.best-olive-oil-ranked.com/blog/olive-oil-evoo-eye-health-macular-degeneration-amd",
              "about": {
                "@type": "MedicalCondition",
                "name": "Age-Related Macular Degeneration"
              },
              "citation": {
                "@type": "ScholarlyArticle",
                "name": "Antiangiogenic Potential of an Olive Oil Extract: Insights from a Proteomic Study",
                "author": "Marrero AD, Cárdenas C, Castilla L, Ortega-Vidal J, Quesada AR, Martínez-Poveda B, Medina MÁ",
                "datePublished": "2024",
                "isPartOf": {
                  "@type": "Periodical",
                  "name": "Journal of Agricultural and Food Chemistry"
                },
                "identifier": "10.1021/acs.jafc.3c08851"
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
                  "name": "Can olive oil prevent macular degeneration?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In vitro research shows that phenolic compounds from high-polyphenol EVOO — particularly Picual variety — can inhibit the pathological blood vessel formation (angiogenesis) that drives wet AMD. A 2024 JAFC study found complete tube formation inhibition at 20 μg/mL with p < 0.0001 significance. Human RCT data is still needed to confirm this translates to clinical AMD prevention."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which olive oil is best for eye health?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The 2024 study specifically used Picual variety EVOO from Jaén, Spain — a cultivar known for its exceptionally high polyphenol content, particularly oleuropein, oleocanthal, and oleacein. For eye health, any fresh, high-phenolic EVOO with total polyphenol content above 300 mg/kg is likely to offer the most benefit."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does olive oil protect against AMD?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "EVOO phenolics appear to suppress angiogenesis — the growth of abnormal new blood vessels — through multiple pathways: inhibiting the ERK/MAPK signaling cascade, suppressing EGFR activity, reducing CTGF/CCN2 expression, and inducing apoptosis in pathologically proliferating endothelial cells. Wet AMD is caused by precisely this type of uncontrolled retinal neovascularization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much olive oil should I eat for eye health?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While human dosing data for AMD specifically is not yet established, Mediterranean diet guidelines recommend 2–4 tablespoons (25–50 mL) of EVOO daily for general health benefits. The key is choosing high-phenolic EVOO — standard supermarket oils have far fewer polyphenols and may offer limited protective effects."
                  }
                }
              ]
            })
          }}
        />

        {/* ── HOOK SECTION ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">The Question Nobody Asks Until It&apos;s Too Late</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Age-related macular degeneration (AMD) affects over 196 million people worldwide and is the leading cause of irreversible vision loss in adults over 50. By 2040, that number is projected to exceed 288 million. Yet for most people, it arrives silently — a slow blurring at the center of vision that they dismiss as tired eyes — until the day a bleed occurs and central vision collapses within weeks.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The &ldquo;dry&rdquo; form accounts for about 85% of AMD cases and progresses slowly. The &ldquo;wet&rdquo; form — neovascular AMD — accounts for 90% of severe vision loss cases. Wet AMD is caused by pathological angiogenesis: the growth of fragile, leaky new blood vessels beneath the retina that ultimately destroy the macula, the tiny zone of the eye responsible for reading, faces, and fine detail.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The pharmaceutical industry has built a multi-billion-dollar market around anti-VEGF injections — drugs like ranibizumab (Lucentis), aflibercept (Eylea), and bevacizumab (Avastin) — that must be injected directly into the eye every 4–8 weeks, often indefinitely, to halt this angiogenesis. They work, but at enormous cost, discomfort, and access burden.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            A 2024 study from the University of Málaga, published in the <em>Journal of Agricultural and Food Chemistry</em> — one of the most rigorous food science journals in the world — asks a different question: <strong className="text-white">can the phenolic compounds naturally present in extra virgin olive oil do some of this same work?</strong> And their answer, backed by proteomic profiling and five separate functional assays, is a carefully worded but compelling yes.
          </p>
        </section>

        {/* ── STUDY OVERVIEW ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Study Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <div className="text-gray-400 text-sm mb-1 font-medium">Journal</div>
              <div className="text-white font-bold">Journal of Agricultural and Food Chemistry</div>
              <div className="text-gray-400 text-sm mt-1">Volume 72, Issue 23 (2024)</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <div className="text-gray-400 text-sm mb-1 font-medium">Study Type</div>
              <div className="text-white font-bold">In vitro — Proteomic + Functional Assays</div>
              <div className="text-gray-400 text-sm mt-1">HUVEC &amp; BAEC endothelial cell models</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <div className="text-gray-400 text-sm mb-1 font-medium">Authors</div>
              <div className="text-white font-bold">Marrero, Cárdenas, Castilla, Ortega-Vidal, Quesada, Martínez-Poveda, Medina</div>
              <div className="text-gray-400 text-sm mt-1">University of Málaga, Spain</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <div className="text-gray-400 text-sm mb-1 font-medium">Oil Used</div>
              <div className="text-white font-bold">Picual EVOO phenolic extract</div>
              <div className="text-gray-400 text-sm mt-1">Sabiote, Jaén, Spain — high-polyphenol cultivar</div>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The research team extracted the phenolic fraction from a Picual-variety EVOO produced by the cooperative &ldquo;San Ginés y San Isidro&rdquo; in Jaén — the heartland of Spanish olive oil production and home to some of the world&apos;s highest-polyphenol EVOOs. Picual is notable for containing exceptionally high concentrations of secoiridoids, particularly oleuropein and its derivatives, compared to other cultivars.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The extract was obtained via an International Olive Council (IOC)-standard methanol/water extraction protocol, then profiled by ultra-high-performance liquid chromatography coupled to Orbitrap mass spectrometry (UHPLC-HRMS) — one of the gold standards for phenolic identification. The four dominant compounds identified were: <strong className="text-white">kaempferol, oleuropein aglycon, o-coumaric acid,</strong> and <strong className="text-white">ligstroside-aglycone</strong>.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The study then ran a two-tier experimental design: first, proteomic analysis using Orbitrap mass spectrometry to see exactly which proteins were being modulated (the molecular landscape); then five functional in vitro assays to confirm those proteomic findings had real biological consequences for angiogenesis.
          </p>
        </section>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
          {[
            { num: '20 μg/mL', label: 'MIC — complete tube formation shutdown', color: 'text-sky-400' },
            { num: 'p < 0.0001', label: 'significance of tube inhibition', color: 'text-green-400' },
            { num: '12+', label: 'angiogenesis proteins modulated by proteomics', color: 'text-purple-400' },
            { num: '5', label: 'independent functional assays confirming effect', color: 'text-amber-400' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-800/60 rounded-xl p-5 border border-gray-700 text-center">
              <div className={`text-3xl font-black mb-2 ${s.color}`}>{s.num}</div>
              <div className="text-gray-400 text-sm leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── KEY FINDINGS ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Key Findings: The Numbers</h2>

          <h3 className="text-xl font-bold text-sky-400 mb-4">1. Selective Toxicity Toward Endothelial Cells</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The first critical finding was about selective cytotoxicity. The researchers treated four different cell types with increasing doses of the EVOO extract and calculated IC50 — the concentration that kills 50% of cells within 72 hours:
          </p>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
            <div className="space-y-3">
              {[
                { cell: 'HUVEC (human umbilical vein endothelial cells)', ic50: '20 ± 4 μg/mL', note: 'Most sensitive — pathological angiogenesis model' },
                { cell: 'BAEC (bovine aortic endothelial cells)', ic50: '43 ± 9 μg/mL', note: 'Moderately sensitive endothelial model' },
                { cell: 'HeLa (cervical cancer cells)', ic50: '107 ± 19 μg/mL', note: '5× less sensitive than HUVEC' },
                { cell: 'HGF-1 (normal human gingival fibroblasts)', ic50: '148 ± 11 μg/mL', note: '7.4× less sensitive — normal tissue largely spared' },
              ].map((row) => (
                <div key={row.cell} className="flex flex-col md:flex-row md:items-center gap-2 py-3 border-b border-gray-700 last:border-0">
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">{row.cell}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{row.note}</div>
                  </div>
                  <div className="text-sky-400 font-bold text-lg">{row.ic50}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            This selectivity pattern is important. The EVOO extract was roughly <strong className="text-white">7.4× more potent against endothelial cells than against normal fibroblasts</strong>. This means the extract preferentially targets the cells that form abnormal blood vessels — the very cells driving wet AMD pathology — while leaving normal structural cells relatively unaffected. That is a pharmacologically meaningful selectivity window.
          </p>

          <h3 className="text-xl font-bold text-sky-400 mb-4">2. Complete Shutdown of Tube Formation (p &lt; 0.0001)</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The tube formation assay on Matrigel is the gold-standard in vitro model for angiogenesis. Endothelial cells are seeded on a basement membrane matrix and naturally self-organize into hollow tubular networks — mimicking the final step of blood vessel formation. In wet AMD, this process occurs pathologically beneath the retina, destroying photoreceptors.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The EVOO extract dose-dependently inhibited this tube formation across concentrations from 2.5 to 40 μg/mL. The <strong className="text-white">minimum inhibitory concentration (MIC) — the dose for complete abrogation of tube formation — was 20 μg/mL</strong>. At 10 μg/mL, partial but still highly significant inhibition was observed (p &lt; 0.0001, one-way ANOVA + Dunnett&apos;s test). At 20 μg/mL, no closed tubular structures formed at all.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            For context: staurosporine — a potent known angiogenesis inhibitor used as a positive control — was effective at 2 μM. The EVOO extract achieved the same outcome with a natural polyphenol mixture at physiologically plausible concentrations.
          </p>

          <h3 className="text-xl font-bold text-sky-400 mb-4">3. Inhibition of Migration, Adhesion, Invasion, and ECM Degradation</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Angiogenesis is a multi-step process. New blood vessels don&apos;t just appear — endothelial cells must first detach from existing vessels, migrate through the extracellular matrix, invade surrounding tissue, adhere to new substrates, and finally organize into tubes. The EVOO extract was tested on each of these steps separately:
          </p>
          <ul className="list-none space-y-3 mb-6">
            {[
              { step: 'Migration (wound-healing assay)', result: 'Dose-dependent reduction in endothelial cell migration over 7 hours', icon: '→' },
              { step: 'Adhesion (fibronectin binding assay)', result: 'Significant reduction in ability of endothelial cells to anchor to extracellular matrix', icon: '⚓' },
              { step: 'Invasion (Matrigel transwell)', result: 'Inhibited endothelial cell penetration through basement membrane', icon: '🚫' },
              { step: 'ECM Degradation (gelatin zymography)', result: 'Reduced MMP-2 (matrix metalloproteinase-2) activity — the enzyme that &ldquo;cuts&rdquo; through tissue to allow vessel formation', icon: '✂️' },
              { step: 'Apoptosis (caspase 3/7, Annexin V flow cytometry)', result: 'Induced programmed cell death in proliferating endothelial cells', icon: '☠️' },
            ].map((item) => (
              <li key={item.step} className="flex gap-3 bg-gray-800/40 rounded-lg p-4 border border-gray-700">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-white font-bold text-sm">{item.step}</div>
                  <div className="text-gray-400 text-sm mt-1">{item.result}</div>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The authors describe this comprehensively: the EVOO extract blocked every major step required for new blood vessel formation. This is not a single-target effect — it&apos;s multi-pathway interference with angiogenesis.
          </p>

          <h3 className="text-xl font-bold text-sky-400 mb-4">4. Proteomic Fingerprint: 12+ Proteins Shifted</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The most mechanistically sophisticated part of the study was the label-free quantitative proteomics on HUVEC cells treated with 10 μg/mL EVOO extract for 6 hours. The Orbitrap MS analysis identified significant protein-level changes that mapped directly to known angiogenesis pathways:
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-red-900/20 rounded-xl p-5 border border-red-800/30">
              <div className="text-red-400 font-bold mb-2">↓ Proteins Decreased (pro-angiogenic suppressed)</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><strong className="text-white">THBS1 (Thrombospondin-1):</strong> Though normally antiangiogenic, its secreted regulation was disrupted — indicating broader ECM remodeling interference</li>
                <li><strong className="text-white">EFEMP1 (EGF-containing fibulin-like ECM protein 1):</strong> Validated by Western blot — significant reduction (p &lt; 0.05). Normally associated with EGFR signaling and cell adhesion/migration</li>
                <li><strong className="text-white">CCN2/CTGF (Connective Tissue Growth Factor):</strong> Validated by Western blot — significant reduction. CCN2 is a critical mediator of angiogenesis and cell adhesion</li>
                <li><strong className="text-white">MAP2K2 (MEK2):</strong> Completely absent after EVOO treatment — this kinase directly activates the ERK1/2 signaling cascade that drives endothelial proliferation and survival</li>
                <li><strong className="text-white">EMP1 (Epithelial Membrane Protein 1):</strong> Completely absent — EMP1 enhances cell migration capacity</li>
              </ul>
            </div>
            <div className="bg-green-900/20 rounded-xl p-5 border border-green-800/30">
              <div className="text-green-400 font-bold mb-2">↑ Proteins Increased (antiangiogenic activated)</div>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><strong className="text-white">PTX3 (Pentraxin-3):</strong> Upregulated — PTX3 is a negative regulator of EGFR-induced angiogenesis; its increase represents an endogenous antiangiogenic response</li>
                <li><strong className="text-white">MLKL (Mixed lineage kinase domain-like protein):</strong> Upregulated — promotes cell death (necroptosis) in abnormally proliferating endothelial cells</li>
                <li><strong className="text-white">RANBP6 (Ran-binding protein 6):</strong> Exclusively detected after EVOO treatment — RANBP6 is a known inhibitor of EGFR and STAT3 signaling, two major pro-angiogenic pathways</li>
                <li><strong className="text-white">ITIH2 (Inter-alpha-trypsin inhibitor heavy chain H2):</strong> Exclusively secreted after treatment — provides matrix protection via protease inhibitory activity, limiting ECM breakdown</li>
              </ul>
            </div>
          </div>
        </section>

        <SmallAd />

        {/* ── MECHANISM ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">The Mechanism: How Does EVOO Stop Blood Vessels From Growing?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The proteomic and functional data, taken together, paint a coherent mechanistic picture. The phenolic compounds in EVOO appear to target angiogenesis through at least three converging pathways:
          </p>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-sky-500 pl-6">
              <h3 className="text-lg font-bold text-sky-400 mb-2">Pathway 1: ERK/MAPK Suppression</h3>
              <p className="text-gray-300 leading-relaxed">
                MAP2K2 (MEK2) was completely eliminated from endothelial cell extracts after EVOO treatment. MEK2 is the kinase immediately upstream of ERK1/2 — the signaling cascade that tells endothelial cells to proliferate, migrate, and survive. Consistent with this, ERK1/2 phosphorylation was reduced in Western blot analysis (though the reduction didn&apos;t reach statistical significance, likely due to compensation from MEK1). This pathway is one of the primary growth signals in neovascular AMD.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Pathway 2: EGFR Signaling Inhibition</h3>
              <p className="text-gray-300 leading-relaxed">
                Multiple lines of evidence point to EGFR pathway suppression. EFEMP1 — which scaffolds EGFR signaling — was significantly reduced. RANBP6 — an EGFR inhibitor — was exclusively induced by EVOO treatment. PTX3 — which negatively regulates EGFR-driven angiogenesis — was upregulated. EGFR is a key upstream driver of VEGF production, meaning EVOO may reduce the very growth factor signals that anti-VEGF drugs are designed to block downstream.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-lg font-bold text-amber-400 mb-2">Pathway 3: ECM Remodeling Inhibition</h3>
              <p className="text-gray-300 leading-relaxed">
                New blood vessels cannot form if endothelial cells cannot break through the surrounding extracellular matrix. MMP-2 (matrix metalloproteinase-2) is the primary enzyme that &ldquo;cuts&rdquo; this pathway open — and gelatin zymography confirmed that EVOO extract significantly reduced MMP-2 activity. Additionally, CCN2/CTGF — a mediator of both adhesion and matrix remodeling — was significantly reduced. Without the ability to degrade and remodel matrix, endothelial cells cannot invade, adhere, or form tubes.
              </p>
            </div>
            <div className="border-l-4 border-rose-500 pl-6">
              <h3 className="text-lg font-bold text-rose-400 mb-2">Pathway 4: Apoptosis Induction</h3>
              <p className="text-gray-300 leading-relaxed">
                Caspase-3/7 activity assays and Annexin V flow cytometry both confirmed that the EVOO extract induced apoptosis in endothelial cells at doses near the IC50. PARP cleavage — a classical apoptosis marker — was confirmed by Western blot. This suggests the extract doesn&apos;t merely slow angiogenesis: at sufficient concentrations, it triggers programmed death of the pathologically proliferating endothelial cells.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700 mb-6">
            <h4 className="text-white font-bold mb-3">🫐 What Makes Picual Special?</h4>
            <p className="text-gray-300 leading-relaxed">
              The four dominant phenolics identified in this extract were kaempferol, oleuropein aglycon, o-coumaric acid, and ligstroside-aglycone. Picual is known for its exceptionally high secoiridoid content — the class of polyphenols unique to olives, including oleuropein, oleocanthal, and oleacein. Secoiridoids are structurally related to iridoid glycosides found in other medicinal plants and have been independently linked to antiangiogenic activity. The authors note that Picual&apos;s high total phenolic content makes it the optimal cultivar for extracting bioactive concentrations of these compounds.
            </p>
          </div>
        </section>

        {/* ── CONTEXT ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Context: Where Does This Fit in the Research?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            This study does not emerge from a vacuum. Several prior lines of evidence converge on the connection between EVOO polyphenols and retinal health:
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex gap-3">
              <span className="text-sky-400 font-bold text-lg">01</span>
              <p className="text-gray-300 leading-relaxed"><strong className="text-white">Epidemiological data:</strong> Mediterranean diet adherence — with EVOO as its fat cornerstone — has been consistently associated with lower rates of AMD in large-scale studies. A 2019 meta-analysis of observational studies found Mediterranean diet adherence reduced AMD risk by approximately 41% compared to low-adherence populations.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400 font-bold text-lg">02</span>
              <p className="text-gray-300 leading-relaxed"><strong className="text-white">Oleocanthal and inflammatory pathways:</strong> The oleocanthal in EVOO inhibits both COX-1 and COX-2 enzymes (the same mechanism as ibuprofen, at milligram-equivalent doses). Chronic low-grade inflammation is a recognized driver of dry AMD progression — oleocanthal&apos;s anti-inflammatory activity may slow the smoldering inflammatory cascade that damages photoreceptors before neovascularization occurs.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400 font-bold text-lg">03</span>
              <p className="text-gray-300 leading-relaxed"><strong className="text-white">Oxidative stress in the retina:</strong> The macula is extraordinarily metabolically active and exposed to constant light — making it the highest-oxidative-stress tissue in the human body. Hydroxytyrosol and oleuropein, the primary antioxidants in EVOO, are among the most potent natural antioxidants known, with ORAC values far exceeding vitamin E and approaching resveratrol. Reducing retinal oxidative burden is the primary mechanism of current AREDS2 supplementation (vitamins C, E, zinc, lutein, zeaxanthin).</p>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400 font-bold text-lg">04</span>
              <p className="text-gray-300 leading-relaxed"><strong className="text-white">Previous antiangiogenic EVOO work:</strong> The authors cite two prior studies (references 20 and 21 in the paper) that had explored EVOO&apos;s antiangiogenic properties, but note these were limited in scope. The 2024 JAFC paper represents the first comprehensive multi-assay, proteomic-level investigation of the full antiangiogenic mechanism of the EVOO phenolic fraction specifically.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400 font-bold text-lg">05</span>
              <p className="text-gray-300 leading-relaxed"><strong className="text-white">Oleocanthal and VEGF:</strong> Separately published research has demonstrated that oleocanthal can reduce VEGF secretion from retinal pigment epithelium (RPE) cells in culture — the very cells that produce the pathological angiogenic signal in wet AMD. The 2024 Marrero et al. study adds upstream pathway (EGFR, MEK) and downstream effector (tube formation, invasion, MMP-2) confirmation.</p>
            </li>
          </ul>
        </section>

        {/* ── PRACTICAL TAKEAWAY ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Practical Takeaway: What Should You Actually Do?</h2>

          <div className="bg-gradient-to-br from-sky-900/30 to-blue-900/20 rounded-xl p-8 border border-sky-800/40 mb-8">
            <h3 className="text-sky-300 font-bold text-xl mb-4">For Eye Health Specifically</h3>
            <ul className="space-y-3">
              {[
                'Choose high-phenolic EVOO — look for TPC (total polyphenol content) above 300 mg/kg. Picual from Jaén, Koroneiki from Crete, and early-harvest Coratina from Puglia are typically highest.',
                'Consume 2–4 tablespoons (25–50 mL) per day — the dose range consistently used in Mediterranean diet clinical trials showing health benefits.',
                'Avoid heat degradation — the phenolics responsible for antiangiogenic activity are the same ones destroyed by high-heat cooking. Use EVOO cold (on salads, bread, raw vegetables) or at moderate heat for gentle sautéing.',
                'Pair with lutein and zeaxanthin-rich foods — these carotenoids concentrate in the macula and complement EVOO\'s polyphenol action through different mechanisms (light filtration and antioxidant activity in the photoreceptor layer).',
                'Consider screening after 50 — regular dilated eye exams every 1–2 years can detect early drusen (AMD precursors) while preventive interventions are still meaningful.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="text-sky-400 font-bold mt-0.5 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            One important nuance: the concentrations used in this study (10–40 μg/mL in cell culture) cannot be directly translated to &ldquo;glasses of olive oil per day.&rdquo; Cell culture concentrations and the concentrations achievable in retinal tissue after dietary consumption are very different things, dependent on absorption, metabolism, and blood-retinal barrier penetration.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            What we can say is that the bioactive compounds identified here — oleuropein aglycon, ligstroside-aglycone, kaempferol — are present in high-phenolic EVOO at meaningful dietary concentrations, and that hydroxytyrosol (the primary urinary metabolite of oleuropein) has been detected in human retinal tissue after dietary exposure. The biological plausibility of dietary EVOO reaching the retina in active form is real, even if the therapeutic dose remains undefined.
          </p>
        </section>

        {/* ── LIMITATIONS ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Limitations: What This Study Cannot Tell Us</h2>

          <div className="space-y-4 mb-6">
            {[
              {
                title: 'In vitro ≠ clinical effect',
                body: 'This is entirely a cell culture study. Endothelial cells in a Matrigel dish in Málaga are not the same as the subretinal vasculature in a living human eye. Many compounds that show spectacular in vitro antiangiogenic activity fail when tested in animals or humans due to poor bioavailability, metabolism, or inability to reach the target tissue in sufficient concentrations.'
              },
              {
                title: 'No in vivo pharmacokinetics',
                body: 'The study does not address what happens to these polyphenols after ingestion. Oleuropein is extensively metabolized in the gut — primarily to hydroxytyrosol — before it ever reaches systemic circulation. Whether enough bioactive compound reaches the retina via the blood-retinal barrier to exert antiangiogenic effects at the concentrations shown here remains unknown.'
              },
              {
                title: 'Single cultivar, single harvest',
                body: 'The EVOO used was from one cooperative, one harvest, one cultivar (Picual). Phenolic content varies enormously by cultivar, harvest timing, processing method, and storage. The findings may not translate to lower-polyphenol oils.'
              },
              {
                title: 'No human RCT data on AMD outcomes',
                body: 'While epidemiological data suggests Mediterranean diet reduces AMD risk, no human RCT has specifically tested high-phenolic EVOO supplementation against AMD incidence or progression. This is the critical next step this paper cannot provide.'
              },
              {
                title: 'Funding and Independence',
                body: 'The paper acknowledges funding from the Spanish State Research Agency (AEI) through multiple government grants (PID2019-104986RB-I00 and PID2022-136437OB-I00). No industry funding is disclosed — this is a positive indicator for study independence.'
              },
            ].map((lim) => (
              <div key={lim.title} className="bg-gray-800/40 rounded-xl p-6 border border-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">⚠</span>
                  <div>
                    <h4 className="text-white font-bold mb-2">{lim.title}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">{lim.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── OUR TAKE ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Take: Is This Paper Worth Taking Seriously?</h2>

          <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/20 rounded-xl p-8 border border-emerald-800/40 mb-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Yes — with calibrated expectations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              This paper is methodologically strong for what it is: an exploratory mechanistic study that uses the right tools for the question being asked. The proteomics are rigorous — 1% FDR threshold, label-free quantification with Orbitrap-grade mass accuracy, three biological replicates, Western blot validation of key findings. The functional assays are comprehensive — five independent angiogenesis readouts, each with appropriate controls and statistical analysis. The research team at Málaga has a track record in endothelial biology and antiangiogenic research.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              What makes this paper genuinely significant is the mechanistic depth. Previous EVOO and AMD studies have been largely epidemiological or have focused on oxidative stress. This paper provides, for the first time, a comprehensive molecular map of how EVOO phenolics interfere with the specific cellular machinery of angiogenesis — covering protein expression, kinase signaling, enzymatic activity, and functional endothelial behavior across the full angiogenic cascade.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              The selective toxicity finding — 7.4× lower IC50 for endothelial cells versus normal fibroblasts — is particularly interesting, as it suggests the EVOO extract doesn&apos;t simply poison all cells indiscriminately. There is a preferential vulnerability in the cells driving pathological neovascularization. Whether this translates to therapeutic selectivity in vivo is the key question.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">Bottom line:</strong> This is the strongest mechanistic evidence to date that EVOO polyphenols can target the core pathological process of wet AMD. It provides a compelling scientific rationale for human trials. It does not prove that eating olive oil will prevent or treat macular degeneration — but it substantially elevates the probability that such trials would find something meaningful. We consider this paper a legitimate basis for including EVOO in a evidence-based eye-protective dietary strategy, alongside established interventions like lutein, zeaxanthin, and the AREDS2 supplement protocol.
            </p>
          </div>

          {/* Evidence Rating */}
          <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700">
            <h4 className="text-white font-bold mb-4">Evidence Quality Rating</h4>
            <div className="space-y-3">
              {[
                { label: 'Methodology Rigor', score: 8, max: 10, color: 'bg-sky-500' },
                { label: 'Mechanistic Insight', score: 9, max: 10, color: 'bg-purple-500' },
                { label: 'Clinical Translatability', score: 4, max: 10, color: 'bg-amber-500' },
                { label: 'Study Independence', score: 9, max: 10, color: 'bg-green-500' },
              ].map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">{r.label}</span>
                    <span className="text-white font-bold">{r.score}/{r.max}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className={`h-2 rounded-full ${r.color}`}
                      style={{ width: `${(r.score / r.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">Ratings reflect quality within study type, not absolute certainty of clinical effect.</p>
          </div>
        </section>

        {/* ── REFERENCES ── */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">References</h2>
          <div className="space-y-3">
            <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Primary paper:</strong> Marrero AD, Cárdenas C, Castilla L, Ortega-Vidal J, Quesada AR, Martínez-Poveda B, Medina MÁ. &ldquo;Antiangiogenic Potential of an Olive Oil Extract: Insights from a Proteomic Study.&rdquo; <em>J Agric Food Chem.</em> 2024 Jun 12;72(23):13023–13038. DOI: <a href="https://doi.org/10.1021/acs.jafc.3c08851" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">10.1021/acs.jafc.3c08851</a>. PMID: 38809962. PMC: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11181319/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">PMC11181319</a>.
              </p>
            </div>
            <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">AMD epidemiology:</strong> Wong WL et al. &ldquo;Global prevalence of age-related macular degeneration and disease burden projection for 2020 and 2040.&rdquo; <em>Lancet Glob Health.</em> 2014;2(2):e106–16.
              </p>
            </div>
            <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Mediterranean diet &amp; AMD:</strong> Rondanelli M et al. &ldquo;Diet and ideal food pyramid to prevent or support the treatment of diabetic retinopathy, age-related macular degeneration, and cataracts.&rdquo; <em>Front Med (Lausanne).</em> 2023. PMID: 37324128.
              </p>
            </div>
          </div>
        </section>

        {/* Back links */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-800">
          <Link
            href="/research"
            className="flex-1 text-center px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors border border-gray-700"
          >
            ← View All Research
          </Link>
          <Link
            href="/rankings"
            className="flex-1 text-center px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold rounded-xl hover:from-emerald-500 hover:to-green-400 transition-all shadow-lg shadow-emerald-900/30"
          >
            See High-Polyphenol Oils →
          </Link>
        </div>
      </article>
    </main>
  )
}
