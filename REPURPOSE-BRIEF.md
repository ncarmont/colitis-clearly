# Colitis Clearly — Full Site Repurpose Brief

## Mission
Transform this olive oil ranking website into **Colitis Clearly** — the most comprehensive, evidence-based science website about Ulcerative Colitis (UC). Strip ALL olive oil content. Replace with UC science.

## Brand
- **Name**: Colitis Clearly
- **Tagline**: "Evidence-Based Ulcerative Colitis Science"
- **Tone**: Authoritative, science-first, accessible but not dumbed down. Think UpToDate meets a really good science communicator.
- **Audience**: UC patients, caregivers, med students, anyone researching UC
- **Design**: Keep the existing dark theme/aesthetic, it works. Just replace content.

## Site Structure (replace current pages)

### Homepage (`app/page.tsx`)
Complete rebuild. Should have:
1. **Hero**: "Colitis Clearly — Understanding Ulcerative Colitis Through Science" with brief explainer
2. **What is UC section**: Brief, clear explanation — chronic inflammatory bowel disease affecting the colon's mucosal lining, characterized by relapsing-remitting inflammation
3. **Treatment Rankings Preview**: Link to treatment comparison page (replacing olive oil rankings)
4. **Latest Research Carousel**: Keep the carousel component but with UC research papers
5. **Key Statistics**: UC prevalence (affects ~1M Americans, 3M+ globally), rising incidence especially in newly industrialized countries, typical onset age 15-30
6. **Quick Navigation Cards**: Treatments, Flare Management, Diet & Lifestyle, Research

### Treatment Rankings (`app/rankings/page.tsx`)
**This is the hero page** — replaces olive oil rankings. A comprehensive comparison of UC treatments ranked by clinical efficacy:

#### Treatment Data (use this as the data source):

**5-ASA / Aminosalicylates (First-line for mild-moderate)**
1. Mesalamine (Asacol HD, Lialda, Pentasa) — ~40-50% remission in mild-moderate UC, gold standard first-line
2. Sulfasalazine — oldest 5-ASA, ~40% remission, more side effects but cheapest
3. Balsalazide (Colazal) — ~45% remission, well-tolerated prodrug
4. Olsalazine (Dipentum) — similar efficacy, less commonly used

**Biologics (moderate-severe)**
5. Infliximab (Remicade) — anti-TNF, ~45-65% clinical response, ~30-35% remission at week 8 (ACT trials)
6. Adalimumab (Humira) — anti-TNF, ~50% response, ~17-19% remission at week 8 (ULTRA trials)
7. Golimumab (Simponi) — anti-TNF, ~51% response, ~18% remission at week 6 (PURSUIT)
8. Vedolizumab (Entyvio) — gut-selective α4β7 integrin, ~47% response, ~17% remission at week 6, ~42% remission at week 52 (GEMINI 1). Excellent safety profile.
9. Ustekinumab (Stelara) — anti-IL-12/23, ~62% response, ~16% remission at week 8 (UNIFI)
10. Mirikizumab (Omvoh) — anti-IL-23p19, ~63% response, ~24% remission at week 12 (LUCENT). Newest biologic approved 2023.
11. Risankizumab (Skyrizi) — anti-IL-23p19, approved for UC 2024, ~20% remission at week 12

**Small Molecules (oral, moderate-severe)**
12. Tofacitinib (Xeljanz) — JAK inhibitor, ~59% response, ~19% remission at week 8 (OCTAVE)
13. Upadacitinib (Rinvoq) — selective JAK1 inhibitor, ~74% response, ~26% remission at week 8 (U-ACHIEVE)
14. Ozanimod (Zeposia) — S1P receptor modulator, ~48% response, ~18% remission at week 10 (TRUE NORTH)
15. Etrasimod (Velsipity) — S1P receptor modulator, approved 2023, ~53% response at week 12 (ELEVATE)

**Corticosteroids (short-term induction)**
16. Prednisone — ~60-70% response but NOT for maintenance (bone loss, diabetes, etc.)
17. Budesonide MMX (Uceris) — topical steroid, fewer systemic effects, ~18% remission at week 8

**Immunomodulators (steroid-sparing maintenance)**
18. Azathioprine / 6-MP — ~40-60% maintain remission as adjunct, slow onset (3-6 months)
19. Methotrexate — limited evidence in UC vs Crohn's, sometimes used

**Rectal Therapies (for proctitis/left-sided)**
20. Mesalamine suppositories/enemas — ~65-75% remission for distal UC, very effective locally
21. Corticosteroid enemas — second-line rectal therapy

**Surgical**
22. Proctocolectomy with IPAA (J-pouch) — curative, ~95% functional success, reserved for refractory/dysplasia

For each treatment, show: Name, Class, Route, Clinical Trial(s), Response Rate, Remission Rate, Key Side Effects, Year Approved, and Notes.

### Research Section (`app/research/`)
Replace olive oil research with UC research topics:
- **Overview** (`overview/page.tsx`): Current state of UC research, pipeline drugs, emerging therapies
- **Pathophysiology** (`cultivars/page.tsx` → rename to `pathophysiology/page.tsx`): How UC works — mucosal immune dysregulation, epithelial barrier dysfunction, microbiome alterations, genetic susceptibility (NOD2, IL23R, etc.)
- **Clinical Trials** (`processing/page.tsx` → rename to `clinical-trials/page.tsx`): Major trials — ACT, ULTRA, GEMINI, UNIFI, OCTAVE, U-ACHIEVE, TRUE NORTH, LUCENT, ELEVATE
- **Biomarkers** (`regions/page.tsx` → rename to `biomarkers/page.tsx`): Fecal calprotectin, CRP, ESR, lactoferrin, how to interpret lab results
- **Emerging Therapies** (`producers/page.tsx` → rename to `emerging/page.tsx`): FMT, stem cell therapy, gut-targeted nanomedicine, microbiome engineering, next-gen IL-23 inhibitors

### Blog (`app/blog/`)
Delete ALL olive oil blog posts. Create these UC articles instead:

1. `understanding-ulcerative-colitis/page.tsx` — Complete guide to UC: what it is, symptoms, diagnosis, prognosis
2. `uc-vs-crohns-disease/page.tsx` — Key differences explained
3. `uc-flare-management/page.tsx` — What to do during a flare: diet, meds, when to call your doctor
4. `uc-diet-guide/page.tsx` — Evidence on diet: SCD, Mediterranean, low-FODMAP, fiber, what the science actually says
5. `biologics-for-uc-compared/page.tsx` — Deep dive comparing all biologics
6. `jak-inhibitors-uc/page.tsx` — Tofacitinib vs Upadacitinib, mechanism, safety
7. `fecal-calprotectin-explained/page.tsx` — What your calprotectin number means
8. `uc-and-mental-health/page.tsx` — The gut-brain axis in UC, anxiety, depression comorbidity
9. `uc-pregnancy-guide/page.tsx` — Managing UC during pregnancy, med safety
10. `colonoscopy-prep-guide/page.tsx` — What to expect, how to prep, Mayo endoscopic scoring

### About Page (`app/about/page.tsx`)
Replace with: "Colitis Clearly is an evidence-based resource dedicated to making ulcerative colitis science accessible. We synthesize clinical trial data, systematic reviews, and gastroenterology guidelines to help patients, caregivers, and clinicians make informed decisions. We are not doctors — always consult your gastroenterologist."

### Other Pages
- **Editorial Policy**: Update to reflect UC science editorial standards
- **Terms/Privacy**: Update branding
- **Contact**: Update for UC context
- **Shop**: Remove or repurpose (could link to recommended resources/books)
- **Sitemap**: Auto-update

## Components to Update
- `Navigation.tsx` — Update nav links: Home, Treatments, Research, Blog, About
- `Footer.tsx` — Update branding, links, disclaimer
- `WorldMap.tsx` — Could repurpose to show UC global prevalence by region (optional, can remove if complex)
- `AdUnit.tsx` / `SmallAd.tsx` — Keep as-is (ad infrastructure)
- `FeedbackBubble.tsx` — Keep, update copy
- `ResearchCarousel.tsx` — Keep component, update data
- `MetaAnalysisTeaser.tsx` — Keep component, update with UC meta-analysis data
- `HeroBackground.tsx` — Update visuals if needed
- `ScrollReveal.tsx` — Keep as-is

## Data Files to Replace
- `research-carousel.json` — Replace with UC research papers (use real papers: PMID references)
- `meta-analysis-findings.json` — Replace with UC meta-analysis findings
- Remove all olive oil data arrays from page.tsx

## Key Research Papers to Reference (real):
1. Rutgeerts P, et al. "Infliximab for induction and maintenance therapy for UC." NEJM 2005 (ACT 1 & 2)
2. Sandborn WJ, et al. "Adalimumab for moderate-to-severe UC." Gastroenterology 2012 (ULTRA 1 & 2)
3. Feagan BG, et al. "Vedolizumab as induction and maintenance therapy for UC." NEJM 2013 (GEMINI 1)
4. Sands BE, et al. "Ustekinumab for UC." NEJM 2019 (UNIFI)
5. Sandborn WJ, et al. "Tofacitinib for UC." NEJM 2017 (OCTAVE)
6. Danese S, et al. "Upadacitinib for UC." Lancet 2022 (U-ACHIEVE)
7. Sandborn WJ, et al. "Ozanimod for UC." NEJM 2021 (TRUE NORTH)
8. D'Haens G, et al. "Mirikizumab for UC." Lancet 2023 (LUCENT)
9. Sandborn WJ, et al. "Etrasimod for UC." Lancet 2023 (ELEVATE UC 52 & UC 12)
10. Ungaro R, et al. "Systematic review: biologics and small molecules for UC." Aliment Pharmacol Ther 2023

## Technical Notes
- This is a Next.js app with Tailwind CSS
- Keep the dark color scheme (works well for a medical science site)
- Keep SEO infrastructure (schemas, meta tags, sitemap)
- Keep ad infrastructure
- All medical content must include disclaimers: "This is for educational purposes only. Consult your gastroenterologist."
- Ensure all cited trial data is accurate to published results
- Remove ALL references to olive oil, EVOO, polyphenols (in the olive oil context), rankings of oils, etc.

## DO NOT
- Change the Next.js framework or Tailwind setup
- Remove the dark theme
- Remove SEO/schema components
- Remove ad infrastructure
- Make up clinical trial data — use the numbers provided in this brief

## Priority
1. Homepage — completely rebuilt
2. Treatment Rankings — the flagship page
3. Navigation & Footer — updated links
4. Blog posts (at least 5 of the 10)
5. Research section
6. About/Editorial/Terms
7. Data JSON files

When completely finished, run this command to notify me:
openclaw system event --text "Done: Rebuilt Colitis Clearly — all olive oil content replaced with UC science content" --mode now
