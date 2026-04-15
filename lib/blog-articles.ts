export type ArticleSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
  callout?: string
}

export type ArticleReference = {
  label: string
  href: string
}

export type ArticleFaq = {
  question: string
  answer: string
}

export type BlogArticle = {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  datePublished: string
  intro: string
  keyPoints: string[]
  sections: ArticleSection[]
  faqs: ArticleFaq[]
  references: ArticleReference[]
  relatedSlugs: string[]
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'vedolizumab-second-line-anti-tnf-meta-analysis-2026',
    title: 'Failed One Anti-TNF? This 2026 Meta-Analysis Says Vedolizumab Still Made UC Patients 7.13× to 11.35× More Likely to Hit Remission',
    description: 'A 2026 patient-level meta-analysis of GEMINI-1 and VISIBLE-1 found that after one anti-TNF failure, second-line vedolizumab significantly improved week-52 remission, steroid-free remission, endoscopic outcomes, and quality of life in ulcerative colitis.',
    category: 'Biologics',
    readTime: '8 min read',
    datePublished: '2026-04-15',
    intro: 'One failed biologic has a way of making UC patients think they are sliding toward the end of the line. That is bad logic, and this new analysis helps kill it. A 2026 patient-level meta-analysis pooled the GEMINI-1 and VISIBLE-1 phase 3 trials to answer a very practical question: what happens if a person with moderate-to-severe ulcerative colitis has already failed one anti-TNF and then moves to vedolizumab? The answer was stronger than a lot of patients, and frankly a lot of clinicians, probably expected. At week 52, second-line vedolizumab made patients 7.13× to 11.35× more likely to achieve clinical remission than placebo, depending on the remission definition used. It also improved steroid-free remission, endoscopic outcomes, and health-related quality of life. Translation: failing one anti-TNF does not mean your colon is out of options. It means treatment sequencing matters.',
    keyPoints: [
      'This meta-analysis pooled patient-level data from the GEMINI-1 and VISIBLE-1 randomized placebo-controlled vedolizumab trials.',
      'It focused specifically on UC patients who had already received one anti-TNF as first-line biologic therapy.',
      'At week 52, second-line vedolizumab increased the odds of clinical remission by 7.13× to 11.35× versus placebo, depending on the adapted Mayo definition used.',
      'Vedolizumab also improved corticosteroid-free remission, Mayo endoscopic score ≤1, and health-related quality of life at one year.',
      'Bottom line: one anti-TNF failure does not equal biologic failure as a concept. Vedolizumab remains a serious second-line option. Discuss sequencing with your gastroenterologist. See a professional.',
    ],
    sections: [
      {
        title: 'Why this paper matters to real patients',
        paragraphs: [
          'UC treatment conversations are full of lazy shorthand. A patient fails infliximab or adalimumab, and suddenly everyone starts acting as if the disease has “become refractory” in some global sense. That is nonsense. It means that one mechanism, in one patient, at one moment, did not get the job done well enough. The next question is not whether you are doomed. The next question is whether the next mechanism actually has a credible signal in that exact second-line setting.',
          'That is why this paper matters. It did not just repeat the generic statement that vedolizumab works in UC. We already knew that. It asked a narrower and more clinically useful question: how well does vedolizumab perform after exactly one anti-TNF has already been used? That is the sort of sequencing question patients actually face in the real world, usually while bleeding, exhausted, and trying not to panic.',
        ],
        callout: 'Failing one anti-TNF is not the same thing as failing biologics as a whole. Mechanism switching still matters.',
      },
      {
        title: 'The number worth screenshotting: up to 11.35× higher odds of remission',
        paragraphs: [
          'The headline result was clinical remission at week 52. Depending on which adapted Mayo remission definition the authors used, second-line vedolizumab made patients 7.13 times to 11.35 times more likely to achieve remission than placebo. That is not a subtle signal. That is a very large relative effect in a population that had already proven they needed more than their first biologic strategy.',
          'Now, use your brain and do not turn relative statistics into magic. This does not mean 11 out of 10 people get better. Relative effects can look enormous when placebo remission is low. But that does not make the result fake. In a harder-to-treat subgroup, a strong relative effect still matters because it tells you the drug is doing real clinical work rather than coasting on background noise.',
          'Just as important, the benefit was not limited to symptom diaries. The analysis also found better Mayo endoscopic score outcomes, which means the colon looked better, not just the patient report form. That matters because UC symptoms can lie, but mucosal healing lies much less.',
        ],
        callout: 'This was not “I feel kind of better.” Vedolizumab improved remission and endoscopic outcomes one year after anti-TNF failure.',
      },
      {
        title: 'Why vedolizumab makes sense after anti-TNF failure',
        paragraphs: [
          'Vedolizumab blocks alpha4beta7 integrin and reduces lymphocyte trafficking into the gut. That is a different play from anti-TNF therapy. Anti-TNFs try to neutralize a major inflammatory cytokine. Vedolizumab changes immune-cell homing into intestinal tissue. Different mechanism, different safety balance, different patient fit.',
          'This is exactly why sequencing matters in UC. If one pathway fails, you do not just shrug and assume every other pathway will fail too. Some patients lose response to anti-TNF because of immunogenicity. Others never had the right inflammatory driver. Others cannot tolerate the drug. A gut-selective mechanism like vedolizumab can still make a great deal of sense after that.',
          'The paper also found improvement in health-related quality of life, which is a polite research phrase for something patients care about more than your pathway diagram: can I leave the house, work normally, stop living around bathrooms, and get off steroids without immediately falling apart?',
        ],
      },
      {
        title: 'What this does and does not prove',
        paragraphs: [
          'This was a meta-analysis of patient-level data from two randomized trials, which is useful and stronger than another hand-wavy narrative review. But it still has limits. The subgroup was only 137 patients. That is not huge. And the comparator was placebo, not another active second-line drug like ustekinumab, mirikizumab, or upadacitinib. So this paper does not prove vedolizumab is the single best second-line option for every patient after anti-TNF failure.',
          'What it does prove is narrower and still valuable: vedolizumab has a real, statistically credible, clinically meaningful second-line signal in exactly the scenario many UC patients face. That is enough to upgrade the conversation from “maybe” to “this should be seriously considered.”',
          'It is also worth noting that vedolizumab is often chosen when safety nuance matters, because its action is relatively gut-selective. That does not mean risk-free. It means the safety tradeoff can look attractive for the right patient compared with broader systemic immunosuppression.',
        ],
        callout: 'This paper supports vedolizumab as a real second-line option. It does not settle every sequence debate in UC forever.',
      },
      {
        title: 'What patients should actually do with this information',
        paragraphs: [
          'If your first anti-TNF has failed, the dumb question is “Am I out of options?” The better question is: “Which next mechanism fits my disease pattern, urgency, prior drug history, safety profile, and treatment goals?” This paper strengthens the case that vedolizumab belongs in that discussion, especially if you want a proven gut-selective option with one-year remission and endoscopic data in the post-anti-TNF setting.',
          'Bring the paper to your gastroenterologist and ask directly: based on my prior anti-TNF failure, how would you compare vedolizumab with an IL-23 inhibitor, a JAK inhibitor, or an S1P modulator for me specifically? That is a grown-up sequencing conversation. Much better than doom-scrolling forums and assuming one failure means all biologics are interchangeable disappointments.',
          'Bottom line: this meta-analysis says that after one anti-TNF fails, vedolizumab can still deliver meaningful remission, mucosal improvement, and better quality of life at one year. UC is a sequencing game as much as a drug game. Discuss your next step with your IBD specialist, use biomarkers and endoscopy instead of vibes, and see a professional.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does this mean vedolizumab is definitely the best second-line biologic after anti-TNF failure?',
        answer: 'No. It means vedolizumab showed a strong and clinically meaningful signal versus placebo in this specific second-line setting. It does not prove superiority over every other active option because there were no head-to-head comparisons in this analysis.',
      },
      {
        question: 'What kind of patients were included in this meta-analysis?',
        answer: 'Patients had moderately to severely active ulcerative colitis and had previously received one anti-TNF as first-line biologic therapy before entering the vedolizumab trials. This is exactly the sort of sequencing problem many real-world patients face.',
      },
      {
        question: 'Did vedolizumab improve only symptoms, or also objective inflammation?',
        answer: 'It improved more than symptoms. The analysis found better week-52 endoscopic outcomes, including Mayo endoscopic score ≤1, which suggests the bowel lining was healing rather than symptoms just being temporarily masked.',
      },
      {
        question: 'Why might vedolizumab still work after an anti-TNF failed?',
        answer: 'Because vedolizumab works through a different mechanism. It blocks alpha4beta7-mediated lymphocyte trafficking into the gut rather than targeting TNF directly. A failure on one mechanism does not automatically predict failure on another.',
      },
    ],
    references: [
      { label: 'Lukas M et al. Efficacy and health-related quality of life associated with second-line vedolizumab after first-line treatment with one anti-TNF in patients with ulcerative colitis: a meta-analysis of the GEMINI-1 and VISIBLE-1 trials. Ther Adv Gastroenterol. 2026. PMID: 41883697', href: 'https://pubmed.ncbi.nlm.nih.gov/41883697/' },
      { label: 'Feagan BG et al. Vedolizumab as induction and maintenance therapy for ulcerative colitis. N Engl J Med. 2013. PMID: 23964932', href: 'https://pubmed.ncbi.nlm.nih.gov/23964932/' },
      { label: 'Sandborn WJ et al. Efficacy and safety of vedolizumab subcutaneous formulation in ulcerative colitis: VISIBLE 1. J Crohns Colitis. 2020. PMID: 31470005', href: 'https://pubmed.ncbi.nlm.nih.gov/31470005/' },
    ],
    relatedSlugs: ['biologics-for-uc-compared', 'jak-inhibitors-uc', 'understanding-ulcerative-colitis'],
  },
  {
    slug: 'mesalamine-withdrawal-relapse-meta-analysis-2026',
    title: 'Thinking of Stopping Mesalamine? New 2026 Meta-Analysis Says Oral Relapse Risk Jumps 60%, and Rectal Withdrawal Is Even Worse',
    description: 'A 2026 systematic review and meta-analysis of 29 studies found that stopping mesalamine monotherapy in quiescent ulcerative colitis raises relapse risk by 60% for oral 5-ASA and doubles relapse risk for rectal 5-ASA. The warning was strongest in patients still relying on mesalamine alone.',
    category: 'Maintenance Therapy',
    readTime: '8 min read',
    datePublished: '2026-04-14',
    intro: 'One of the dumbest recurring UC mistakes is this: patients feel better, decide the mesalamine “isn’t doing anything anymore,” and quietly stop it. Then the bleeding comes back and everyone acts shocked. A new 2026 systematic review and meta-analysis in Inflammatory Bowel Diseases looked directly at what happens when patients with quiescent inflammatory bowel disease stop 5-ASA therapy. For ulcerative colitis, the answer was ugly and clinically useful. Stopping oral 5-ASA monotherapy raised relapse risk by 60%. Stopping rectal 5-ASA was worse, doubling relapse risk. That matters because mesalamine is still the backbone therapy for mild-to-moderate UC, especially distal disease. The headline is simple: if mesalamine is the thing holding your remission together, stopping it is not a neutral experiment. It is a relapse strategy.',
    keyPoints: [
      'Meta-analysis included 29 studies on 5-ASA withdrawal in IBD, with specific pooled data for ulcerative colitis.',
      'Stopping oral 5-ASA monotherapy in quiescent UC increased relapse risk by 60% (RR 1.60, 95% CI 1.25-2.05).',
      'Stopping rectal 5-ASA monotherapy doubled relapse risk (RR 2.03, 95% CI 1.58-2.61).',
      'The signal was strongest in patients still relying on 5-ASA alone, not those already escalated to biologics or immunomodulators.',
      'Rectal mesalamine remains one of the most underused high-value treatments in distal UC, and stopping it carries a real penalty.',
      'Bottom line: do not stop mesalamine just because symptoms improve. Discuss any de-escalation with your GI and use objective monitoring. See a professional.',
    ],
    sections: [
      {
        title: 'Why this paper matters to real UC patients',
        paragraphs: [
          'There is a persistent fantasy in ulcerative colitis that maintenance treatment is optional once you feel normal again. That fantasy is how patients go from “I feel pretty good” to “why am I suddenly bleeding six times a day?” Maintenance therapy is not glamorous, but it is what prevents the colon from quietly relapsing while you convince yourself everything is fine.',
          'Mesalamine is especially vulnerable to this problem because it is old, familiar, and not dramatic. It is not a shiny biologic. It does not sound powerful. So people underestimate it. This meta-analysis is useful because it asks a brutally practical question: what happens if you stop the drug once remission has been achieved? In UC monotherapy patients, the answer is: relapse becomes substantially more likely.',
        ],
        callout: 'Feeling better after mesalamine is not proof you no longer need it. It may be proof it is working.',
      },
      {
        title: 'The number worth screenshotting: rectal withdrawal doubled relapse risk',
        paragraphs: [
          'The most striking pooled result was for rectal 5-ASA. Patients who stopped rectal mesalamine had a relapse risk ratio of 2.03 versus those who stayed on it. Translation: stop the suppository or enema, and your odds of relapse roughly double.',
          'That is not surprising if you actually respect disease biology. UC starts in the rectum. Distal inflammation is where many flares begin, and topical therapy puts anti-inflammatory drug directly on the mucosa that is usually most active. Patients hate rectal therapy because it is inconvenient, messy, and unsexy. Too bad. The colon does not care about your aesthetic preferences. If your disease is distal, rectal mesalamine is often one of the highest-yield things you can do.',
        ],
        callout: 'Rectal mesalamine is annoying. Relapsing is more annoying.',
      },
      {
        title: 'Oral mesalamine withdrawal was bad too, just less catastrophic',
        paragraphs: [
          'Stopping oral 5-ASA monotherapy raised relapse risk by 60%, with a pooled RR of 1.60. That is not as dramatic as the rectal figure, but it is still a real, clinically meaningful increase. In a disease defined by repeated flares, steroid exposure, work disruption, anemia, and escalation to stronger drugs, a 60% higher relapse risk is a serious penalty.',
          'Patients often frame the question badly: “Can I get away with stopping it?” The smarter question is: “What is the cost of stopping it compared with the inconvenience of staying on it?” This paper answers that more honestly. If oral mesalamine is your main maintenance therapy, withdrawal materially worsens your odds.',
        ],
      },
      {
        title: 'The important nuance: this was a monotherapy problem',
        paragraphs: [
          'The meta-analysis also found that in patients already receiving immunomodulators or biologics, stopping 5-ASA did not clearly increase relapse risk. That does not mean everyone on advanced therapy should throw mesalamine in the trash. It means the evidence for continued 5-ASA benefit becomes weaker once stronger maintenance therapy is doing the heavy lifting.',
          'That distinction matters because many UC patients are over-treated with medication stacking they no longer need, while others are under-treated because they stop the one therapy actually holding them together. If you are on mesalamine alone, this paper is a warning. If you are on vedolizumab, infliximab, ustekinumab, or another advanced agent, the withdrawal conversation becomes more individualized and should be guided by your disease history, extent, prior relapse pattern, and objective markers.',
        ],
        callout: 'Monotherapy withdrawal looked risky. De-escalation after escalation is a different conversation entirely.',
      },
      {
        title: 'What patients should actually do with this information',
        paragraphs: [
          'First, stop making medication decisions based only on symptoms. UC loves to lie. Some patients feel “fine” while calprotectin is climbing and the rectum is still inflamed. If you are considering stopping mesalamine, ask for a real reassessment: symptoms, fecal calprotectin, maybe CRP, and endoscopy when appropriate.',
          'Second, if you have distal disease, do not casually abandon rectal mesalamine because it is inconvenient. The evidence says that exact move is associated with the biggest relapse penalty. Third, if you are already well controlled on a biologic or immunomodulator and want to simplify therapy, that is the subgroup where monitored withdrawal may be reasonable. But monitored means monitored, not “I stopped it and hoped for the best.”',
          'Bottom line: mesalamine is boring, which is exactly why people disrespect it. This paper is a reminder that boring maintenance therapy is often what stands between stable remission and another flare. Discuss any change with your gastroenterologist, and use objective monitoring instead of vibes. See a professional.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does this mean nobody with UC should ever stop mesalamine?',
        answer: 'No. It means stopping mesalamine monotherapy in quiescent UC is associated with a higher relapse risk, especially for rectal 5-ASA. In patients already controlled on biologics or immunomodulators, monitored withdrawal may sometimes be reasonable. That decision should be made with your gastroenterologist using objective monitoring. See a professional.',
      },
      {
        question: 'Why was rectal mesalamine withdrawal worse than oral withdrawal?',
        answer: 'Because UC usually begins in the rectum and distal colon, and rectal mesalamine delivers the drug directly to the area most likely to relapse. If the rectum is your weak point, stopping topical therapy removes a very targeted defense.',
      },
      {
        question: 'If I feel fine, does that mean it is safe to stop mesalamine?',
        answer: 'Not necessarily. Symptoms and inflammation do not always match in UC. Many patients need fecal calprotectin, labs, or endoscopic assessment to know whether remission is truly stable before discussing de-escalation.',
      },
      {
        question: 'What did the meta-analysis say about stopping 5-ASA after starting a biologic?',
        answer: 'It did not show a clear increase in relapse risk in patients receiving immunomodulators and/or biologics, although certainty was low. That suggests some patients on advanced therapy may be candidates for monitored withdrawal, but the evidence is weaker than many internet takes pretend.',
      },
    ],
    references: [
      { label: 'Arzivian A et al. The Risk of Relapse Associated With Discontinuation of 5-Aminosalicylates in Inflammatory Bowel Diseases: A Systematic Review and Meta-Analysis. Inflamm Bowel Dis. 2026 Apr 1;32(4):661-676. PMID: 41338243', href: 'https://pubmed.ncbi.nlm.nih.gov/41338243/' },
      { label: 'Feagan BG et al. Vedolizumab as induction and maintenance therapy for ulcerative colitis. N Engl J Med. 2013 (PMID: 23964932)', href: 'https://pubmed.ncbi.nlm.nih.gov/23964932/' },
      { label: 'Kane S et al. Medication nonadherence and the outcomes of patients with quiescent ulcerative colitis. Am J Med. 2003 (PMID: 12543288)', href: 'https://pubmed.ncbi.nlm.nih.gov/12543288/' },
    ],
    relatedSlugs: ['understanding-ulcerative-colitis', 'fecal-calprotectin-explained', 'uc-flare-management'],
  },
  {
    slug: 's1p-modulators-uc-meta-analysis-2026',
    title: 'Oral S1P Drugs Just Put Up the Cleanest Class-Level UC Signal Yet: 3.30× Better Maintenance Response in 8 RCTs',
    description: 'A new 2026 meta-analysis of 8 randomized trials and 2,663 patients found that oral S1P receptor modulators significantly improved induction and maintenance outcomes in moderate-to-severe ulcerative colitis, with 3.30× higher maintenance clinical response, 2.20× higher maintenance remission, and 2.60× higher histological remission versus placebo.',
    category: 'Small Molecules',
    readTime: '8 min read',
    datePublished: '2026-04-13',
    intro: 'UC patients keep getting sold the same false choice: injections that work or pills that do not. That story is getting harder to defend. A brand-new meta-analysis published April 13, 2026 pooled eight randomized controlled trials of oral sphingosine-1-phosphate receptor modulators, including etrasimod and ozanimod, across 2,663 patients with moderate-to-severe ulcerative colitis. The result was not subtle. Compared with placebo, S1P modulators delivered 2.47× higher induction clinical response, 1.84× higher induction remission, and 3.30× higher maintenance clinical response. Histological remission doubled to tripled in both phases. Serious adverse events were not increased. Translation: the oral S1P class is no longer a niche side story. It is now one of the most evidence-backed pill-based options in UC.',
    keyPoints: [
      'Meta-analysis included 8 randomized controlled trials and 2,663 adults with moderate-to-severe UC.',
      'Maintenance clinical response was 3.30× higher with S1P modulators than placebo.',
      'Maintenance clinical remission was 2.20× higher, with histological remission 2.60× higher and mucosal healing 2.21× higher.',
      'Induction efficacy was also strong: clinical response RR 2.47, remission RR 1.84, endoscopic improvement RR 2.32.',
      'Serious adverse events and treatment discontinuation were not significantly increased versus placebo.',
      'Bottom line: if you want an oral advanced therapy that is not a JAK inhibitor, this class deserves a serious discussion with your GI. See a professional.',
    ],
    sections: [
      {
        title: 'Why this paper matters more than another single-drug headline',
        paragraphs: [
          'Most UC treatment headlines are about one drug, one trial, one sponsor deck, and one carefully chosen endpoint. Useful, but narrow. This paper did something more clinically meaningful. It pooled the randomized trial evidence across the whole S1P receptor modulator class, including etrasimod, ozanimod, tamuzimod, and KRP203, then asked the question patients actually care about: when you zoom out, does this pill class reliably work?',
          'The answer is yes. Not maybe. Not in one cherry-picked subgroup. Across eight placebo-controlled RCTs, S1P modulators improved symptoms, endoscopy, histology, and mucosal healing. That breadth matters because UC is a disease where symptom improvement alone can lie to you. The colon can still be inflamed while you tell yourself things are “better.” This analysis showed improvement at the tissue level too.',
          'That is why this is more useful than another press release about a single maintenance study. It tells you the mechanism is real at the class level, not just at the brand level.',
        ],
        callout: 'This was not one lucky trial. It was eight randomized trials telling the same basic story: the S1P class works.',
      },
      {
        title: 'The number worth screenshotting: 3.30× better maintenance response',
        paragraphs: [
          'The standout result was maintenance clinical response: risk ratio 3.30 versus placebo. That is the sort of number that makes people who dismissed oral therapies look a little stupid. Maintenance is where UC treatment lives or dies. Plenty of drugs can produce a decent induction response and then fade once the easy wins are gone. Sustained response is what determines whether you keep your job, stop planning your day around toilets, and stay off repeated steroid tapers.',
          'The maintenance story did not stop there. Clinical remission was 2.20× higher, histological remission was 2.60× higher, and mucosal healing was 2.21× higher than placebo. Histological remission matters because it means inflammation is calming down under the microscope, not just on a symptom diary. Mucosal healing matters because it predicts fewer flares, fewer hospitalizations, and a better long-term trajectory.',
          'In plain English: these pills are not just making people feel a bit less awful. They are changing what the bowel looks like and what the tissue is doing.',
        ],
        callout: 'Maintenance response RR 3.30 is the headline. Histological remission RR 2.60 is the part smart patients should care about just as much.',
      },
      {
        title: 'Induction results were strong too, which kills the “slow pill” stereotype',
        paragraphs: [
          'S1P modulators also performed well during induction. Clinical response improved 2.47-fold, clinical remission 1.84-fold, endoscopic improvement 2.32-fold, histological remission 2.59-fold, and mucosal healing 2.54-fold versus placebo. So no, this is not a class that only shows up later after months of waiting and hoping.',
          'That matters because pill-based UC options are often judged unfairly. JAK inhibitors have the reputation for speed. Biologics have the reputation for depth. S1P drugs have sometimes been framed as the compromise option. This meta-analysis makes that framing too simplistic. They are clearly capable of meaningful induction benefit while also carrying a real maintenance and tissue-healing signal.',
          'Does this mean every S1P drug is identical? Obviously not. Etrasimod and ozanimod have different trial programs, different label nuances, and slightly different practical baggage. But the class-level efficacy signal is now robust enough that “oral but weak” is no longer an evidence-based description.',
        ],
      },
      {
        title: 'What about safety? Better keep the hype on a leash',
        paragraphs: [
          'The meta-analysis found a slight increase in overall adverse events with S1P modulators, but serious adverse events were not significantly different from placebo, and discontinuation rates were also similar. That is reassuring, but let us not do the wellness-influencer thing and pretend “acceptable” means “risk-free.”',
          'S1P receptor modulators still require real screening and real prescribing discipline. Heart-rate effects, conduction issues, infection risk, liver monitoring, and ophthalmic cautions are part of the class conversation. Some patients need first-dose monitoring depending on the specific drug and cardiac history. Others will not be appropriate candidates at all.',
          'The honest conclusion is simple. These are legitimate advanced therapies with a reasonable safety profile, not harmless supplements. That is exactly why they belong in a gastroenterologist-led treatment plan rather than a random Reddit thread. See a professional.',
        ],
        callout: 'Good safety signal? Yes. Free pass? No. These are real drugs, and they need real screening.',
      },
      {
        title: 'Who should ask about an S1P modulator right now',
        paragraphs: [
          'Three groups stand out. First, patients who want an advanced therapy but deeply prefer a pill over an infusion chair or self-injection. That preference is not trivial. Adherence is better when treatment fits real life. Second, patients who need an oral option but are wary of JAK-inhibitor black-box baggage. S1P modulators occupy a different risk-benefit lane. Third, patients who want evidence not just for symptoms, but for endoscopic and histologic healing.',
          'If you are already discussing etrasimod or ozanimod with your GI, this meta-analysis gives you a smarter conversation starter: “What makes you choose this S1P drug versus a biologic or a JAK, given the new class-level RCT data?” That is a far better question than “Is there any good pill for UC?” because the answer to that old question is now clearly yes.',
          'What this paper does not prove is head-to-head superiority over the top biologics or over upadacitinib. There are no direct class-vs-class trials here. So do not turn a good meta-analysis into a fake certainty machine. But if you ignored S1P drugs before, the evidence just got strong enough that ignoring them now is lazy.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What are S1P receptor modulators in ulcerative colitis?',
        answer: 'They are oral drugs that alter lymphocyte trafficking by modulating sphingosine-1-phosphate receptors, reducing the movement of inflammatory immune cells into the gut. In UC, the leading approved examples are ozanimod and etrasimod.',
      },
      {
        question: 'Does this meta-analysis prove S1P drugs are better than biologics or JAK inhibitors?',
        answer: 'No. It proves they outperform placebo across multiple important endpoints and that the class-level signal is robust. Cross-trial comparisons against biologics or JAK inhibitors are imperfect without direct head-to-head trials.',
      },
      {
        question: 'What was the strongest result in this paper?',
        answer: 'Maintenance clinical response, with a pooled risk ratio of 3.30 versus placebo. Maintenance histological remission was also strong at RR 2.60, which supports real tissue-level healing rather than symptom masking alone.',
      },
      {
        question: 'Are S1P modulators safe?',
        answer: 'Overall they had an acceptable safety profile in this analysis, with no significant increase in serious adverse events or discontinuations versus placebo. But they still require proper cardiac, infection, liver, and medication-interaction review with a gastroenterologist. See a professional.',
      },
    ],
    references: [
      { label: 'Gardezi SAA et al. Sphingosine 1-Phosphate (S1P) Receptor Modulators as an Induction and Maintenance Therapy for Moderate to Severe Ulcerative Colitis: A Systematic Review and Meta-analysis of Randomized Controlled Trials. Dig Dis Sci. 2026 Apr 13 (PMID: 41968221)', href: 'https://pubmed.ncbi.nlm.nih.gov/41968221/' },
      { label: 'Sandborn WJ et al. TRUE NORTH: Ozanimod as induction and maintenance therapy for ulcerative colitis. N Engl J Med. 2021 (PMID: 34587385)', href: 'https://pubmed.ncbi.nlm.nih.gov/34587385/' },
      { label: 'Sandborn WJ et al. ELEVATE UC: Etrasimod as induction and maintenance therapy for ulcerative colitis. Lancet. 2023 (PMID: 36871574)', href: 'https://pubmed.ncbi.nlm.nih.gov/36871574/' },
    ],
    relatedSlugs: ['etrasimod-meta-analysis-mucosal-healing-2026', 'jak-inhibitors-uc', 'biologics-for-uc-compared'],
  },
  {
    slug: 'fmt-delivery-route-meta-analysis-2026',
    title: 'FMT Works Best by Colonoscopy + Enemas: The New UC Meta-Analysis That Finally Answers the Delivery Question',
    description: 'An updated 2026 meta-analysis of 16 RCTs found that fecal microbiota transplantation improves clinical and endoscopic remission in UC, but delivery route matters a lot. Colonoscopy plus enemas produced the strongest signal: 2.39× more clinical remissions and 2.19× more endoscopic remissions than control, with no increase in adverse events.',
    category: 'Microbiome',
    readTime: '8 min read',
    datePublished: '2026-04-07',
    intro: 'Most UC patients who hear about fecal microbiota transplantation get sold the vague version: “FMT might help.” That is not good enough anymore. The clinically relevant question is not whether FMT works in the abstract. It is whether the way it is delivered changes the odds that it actually works for you. An updated 2026 systematic review and meta-analysis in Advances in Therapy pooled 16 randomized controlled trials and finally answered that question with unusual clarity. Overall, donor-derived FMT improved clinical remission by 81% and endoscopic remission by 74% versus control, without increasing adverse events. But the real story is route. When FMT was delivered by colonoscopy followed by enemas, remission was 2.39 times higher than control and endoscopic remission was 2.19 times higher. In other words: if you are going to talk about FMT in UC, the delivery method is not a technical footnote. It is the difference between a serious protocol and a weaker one.',
    keyPoints: [
      'Updated meta-analysis included 16 randomized controlled trials of donor-derived FMT in ulcerative colitis.',
      'Overall efficacy: clinical remission RR 1.81 and endoscopic remission RR 1.74 versus placebo, sham, or autologous FMT.',
      'Best-performing delivery route was colonoscopy plus enemas: clinical remission RR 2.39 and endoscopic remission RR 2.19.',
      'Single-route colonoscopy and rectal enema also worked, but less strongly than the combined approach.',
      'Adverse events were not increased with FMT versus control (RR 1.03), supporting short-term safety.',
      'Bottom line for patients: if a center offers FMT, ask exactly how it is delivered, because route appears to matter substantially.',
    ],
    sections: [
      {
        title: 'Why this paper matters more than the average FMT headline',
        paragraphs: [
          'FMT research in UC has had a persistent problem: everybody talks about the concept, almost nobody talks clearly about the protocol. That is ridiculous, because UC is not a disease where the details can be hand-waved away. Donor selection matters. Dose matters. Frequency matters. And, as this new meta-analysis makes painfully obvious, delivery route matters.',
          'Huang and colleagues pooled 16 randomized controlled trials that compared donor-derived FMT against placebo, sham treatment, or autologous stool in ulcerative colitis. This is newer and slightly broader than earlier meta-analyses, and it specifically examined whether the way bacteria are delivered changes outcomes. That is the kind of question patients actually need answered. If one method works much better, then “FMT works” is too blurry to be useful.',
          'The overall effect was already strong enough to matter. Clinical remission improved with a pooled risk ratio of 1.81. Endoscopic remission improved with a pooled risk ratio of 1.74. Adverse events were essentially the same as control. But the subgroup analysis is where this becomes patient-relevant rather than merely academic.',
        ],
        callout: 'FMT is not one thing. Delivery route changes the result, which means protocol quality changes the result.',
      },
      {
        title: 'The number patients should care about: 2.39× more remissions with colonoscopy plus enemas',
        paragraphs: [
          'The combined colonoscopy-plus-enema strategy showed the largest effect for clinical remission: RR 2.39, with a confidence interval that stayed clearly above 1. That means the benefit was statistically credible, not just numerically interesting. It also showed the most consistent endoscopic remission signal, with RR 2.19.',
          'That matters because endoscopic remission is not just “feeling better.” It means the colon actually looks better on scope. Patients with endoscopic healing do better long term. Fewer flares. Fewer steroid cycles. Lower hospitalization risk. Better odds of durable control. So when a microbiome therapy improves both symptoms and scope findings, you pay attention.',
          'The obvious implication is that a one-off, low-intensity FMT protocol may leave efficacy on the table. Colonoscopy can distribute donor material broadly through the colon at the start. Follow-up enemas likely help reinforce engraftment and maintain contact with the distal colon, where UC usually remains most active. Mechanistically, that makes sense. Clinically, the data now backs it up.',
        ],
        callout: 'If a patient screenshots one number from this paper, it should be this one: RR 2.39 for remission with colonoscopy plus enemas.',
      },
      {
        title: 'How the other routes performed, and why that matters',
        paragraphs: [
          'Colonoscopy alone and rectal enemas alone also showed significant benefit, with clinical remission risk ratios of 1.58 and 1.62 respectively. That is not trivial. It means FMT is not an all-or-nothing therapy that only works under one exact setup.',
          'But both single-route approaches were weaker than the combined strategy. Oral capsules and nasoduodenal infusion had imprecise results, largely because there were fewer trials and less certainty. That does not prove capsules do not work. It proves the evidence is not yet good enough to put them on the same footing as lower-GI delivery.',
          'For patients, this changes the conversation. “Does your center offer FMT?” is not the right question. The right question is: “Do you use colonoscopy followed by enemas, or are you using a weaker delivery method because it is easier?” Convenience is not the same thing as efficacy.',
        ],
      },
      {
        title: 'Safety looked reassuring, but do not get sloppy with the conclusion',
        paragraphs: [
          'The meta-analysis found no increase in adverse events compared with control, with a pooled RR of 1.03. That is reassuring, especially for patients who are understandably nervous about the idea of transferring donor stool.',
          'But short-term safety is not the same as “zero risk” or “go do this anywhere.” FMT still depends on rigorous donor screening, infection control, standardized preparation, and a center that knows what it is doing. The history of FMT includes rare but serious infectious complications when stool screening standards were inadequate. That is what happens when people treat microbiome therapy like a supplement instead of a biologic-level intervention.',
          'So yes, the short-term RCT safety signal is good. No, that does not mean DIY FMT is smart. It means properly screened, medically supervised FMT appears reasonably safe in the short term in UC trials.',
        ],
        callout: 'Short-term safety looked good. Sloppy donor screening is still a terrible idea.',
      },
      {
        title: 'What patients should do with this information right now',
        paragraphs: [
          'First, understand the status clearly: FMT is still not a routine first-line UC therapy in mainstream practice. In many regions it remains investigational outside recurrent C. difficile infection. That part has not changed.',
          'What has changed is the quality of the protocol conversation. If you are considering FMT through a trial, an academic center, or a specialist clinic, you now have a smarter question set. Ask how many administrations are used. Ask whether initial delivery is by colonoscopy. Ask whether they follow with enemas. Ask what remission endpoints they track, including fecal calprotectin and endoscopy, not just symptoms.',
          'Second, stop treating all FMT claims as equal. A center advertising “capsule FMT for gut health” is not automatically offering the same thing supported by this UC evidence base. The data here most strongly supports lower-GI delivery, especially the combined route.',
          'Third, remember what this paper does and does not prove. It supports FMT as a real induction-phase option that can improve remission without more adverse events. It does not prove long-term durability, it does not settle the optimal donor strategy, and it does not replace a gastroenterologist. See a professional. But if your GI says FMT is pure hype, that answer is now behind the evidence.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does this mean FMT is now proven for ulcerative colitis?',
        answer: 'It means FMT has credible randomized-trial evidence for improving induction-phase remission in UC, especially with colonoscopy plus enema delivery. It does not mean it is universally standard of care or that long-term durability is fully settled.',
      },
      {
        question: 'Why would colonoscopy plus enemas work better than capsules or one-time delivery?',
        answer: 'Probably because it distributes donor microbiota broadly through the colon first, then repeatedly reinforces engraftment where UC is most active, especially distally. The exact mechanism is still being studied, but the clinical signal in this meta-analysis favored the combined lower-GI approach.',
      },
      {
        question: 'Was FMT safer than standard treatment in this analysis?',
        answer: 'Short-term adverse event rates were similar between FMT and control groups, with no significant increase in overall adverse events. That supports short-term safety in supervised trials, but donor screening and medical oversight remain essential.',
      },
      {
        question: 'Should I try DIY FMT at home?',
        answer: 'No. That is how people turn a promising therapy into an avoidable infection or worse. FMT should only be considered with proper donor screening and specialist oversight. Discuss it with a qualified gastroenterology team.',
      },
    ],
    references: [
      { label: 'Huang B et al. Comparative Effectiveness and Safety of Fecal Microbiota Transplantation in Ulcerative Colitis: An Updated Systematic Review and Meta-Analysis. Adv Ther. 2026 Apr 7 (PMID: 41945234)', href: 'https://pubmed.ncbi.nlm.nih.gov/41945234/' },
      { label: 'Doukas PG et al. Dig Dis. 2026 — FMT meta-analysis of 15 RCTs (PMID: 41078065)', href: 'https://pubmed.ncbi.nlm.nih.gov/41078065/' },
      { label: 'Paramsothy S et al. Lancet. 2017 — Multidonor FMT in active UC (PMID: 28214091)', href: 'https://pubmed.ncbi.nlm.nih.gov/28214091/' },
    ],
    relatedSlugs: ['fmt-remission-meta-analysis-2026', 'fmt-anti-inflammatory-diet-uc-remission', 'anti-inflammatory-diet-uc-meta-analysis-2026'],
  },
  {
    slug: 'tl1a-inhibitors-uc-tulisokibart-duvakitug-2026',
    title: 'The Next Biologic Breakthrough Nobody Is Talking About: TL1A Inhibitors Can Heal UC *and* Stop the Scarring',
    description: 'A comprehensive 2026 review in Alimentary Pharmacology & Therapeutics reveals why TL1A inhibitors — tulisokibart, duvakitug, afimkibart — are unlike every existing UC biologic. They are the first class that directly targets both intestinal inflammation AND the fibrosis that eventually destroys the bowel wall. Phase 3 programs are now underway.',
    category: 'Pipeline',
    readTime: '9 min read',
    datePublished: '2026-04-06',
    intro: 'Every UC biologic approved in the last decade targets inflammation. Anti-TNFs quench cytokine fire. Vedolizumab blocks inflammatory cell traffic into the gut. IL-23 inhibitors turn off the molecular switch driving mucosal injury. JAK inhibitors silence the intracellular amplifiers of inflammation. All effective. All targeting the same endpoint: inflammation. None of them do anything meaningful about intestinal fibrosis — the progressive scarring that silently remodels your bowel wall even during periods of apparent remission. A review published today in Alimentary Pharmacology & Therapeutics (April 6, 2026) synthesises the entire body of evidence on TL1A inhibitors and concludes that this emerging class is genuinely different. TL1A and its receptor DR3 sit at the intersection of two processes that existing drugs treat separately: mucosal inflammation and intestinal fibrosis. Block TL1A, and you potentially interrupt both. Phase 2 trials of tulisokibart (26% remission vs 1% placebo) and duvakitug have demonstrated clinical and endoscopic remission in moderate-to-severe IBD. Phase 3 programmes are now actively enrolling. For UC patients who have failed multiple biologics, or who are watching their disease slowly destroy their bowel architecture despite "controlled" inflammation scores, this is the drug class worth following.',
    keyPoints: [
      'TL1A (tumour necrosis factor-like ligand 1A) and its receptor DR3 drive both intestinal inflammation and bowel wall fibrosis in UC — a combination no existing biologic fully addresses.',
      'Tulisokibart (Merck, TEV-48574): Phase 2 ARTEMIS-UC showed 26% clinical remission vs 1% placebo in moderate-to-severe IBD. Phase 3 is now enrolling.',
      'Duvakitug (Teva/AnaptysBio): Phase 2 data confirmed clinical and endoscopic remission in moderate-to-severe IBD across both UC and Crohn\'s disease.',
      'Afimkibart is a third anti-TL1A agent in the clinical pipeline, further validating the target.',
      'TL1A overexpression drives Th2/Th9/Th17 inflammatory cascades, epithelial barrier breakdown, and TGF-beta-driven intestinal fibrosis — the inflammation-fibrosis continuum.',
      'This mechanism is most relevant for patients with fibrostenosing disease, multiple biologic failures, or structurally compromised bowel — currently an unaddressed unmet need.',
    ],
    sections: [
      {
        title: 'What TL1A actually is — and why no one has targeted it until now',
        paragraphs: [
          'TL1A stands for tumour necrosis factor-like ligand 1A. It is a cytokine — a signalling protein — produced primarily by intestinal endothelial cells, macrophages, and dendritic cells in response to microbial stimuli and barrier damage. Its receptor, DR3 (death receptor 3), is expressed on multiple immune cell types including T-helper cells, innate lymphoid cells, and mucosal regulatory T cells.',
          'The TL1A-DR3 signalling axis has been studied in preclinical IBD models since the mid-2000s, but translating that into a druggable target took over a decade of work. The challenge was specificity: DR3 is expressed on many immune cell subsets, and early concerns about broad immunosuppression (similar to what was feared about anti-TNF agents before their clinical approval) slowed development. What changed was a deeper understanding of TL1A\'s tissue-specific effects — particularly the demonstration that TL1A, unlike most other inflammatory cytokines, has direct pro-fibrotic effects on intestinal stromal cells.',
          'In simple terms: TL1A doesn\'t just drive inflammation. It also talks directly to the mesenchymal cells that lay down scar tissue in the gut wall. This makes it functionally distinct from any cytokine currently targeted by approved UC therapies.',
        ],
        callout: 'TL1A doesn\'t just drive inflammation. It also directly activates the cells that build scar tissue in your gut wall — a dual role no existing biologic addresses.',
      },
      {
        title: 'The inflammation-fibrosis continuum: the problem existing biologics cannot solve',
        paragraphs: [
          'Intestinal fibrosis is one of the most underappreciated aspects of UC disease progression. Standard assessments — symptom scores, endoscopic grading, even faecal calprotectin — are primarily measures of active mucosal inflammation. They do not detect the progressive submucosal and transmural scarring that accumulates over years of recurrent disease cycles.',
          'Approximately 5-10% of UC patients develop intestinal strictures severe enough to require surgery. A far larger proportion — estimated at 20-30% in long-duration disease — have histological evidence of subepithelial fibrosis even during endoscopic remission. This fibrotic remodelling is not reversed by anti-inflammatory biologics. You can achieve mucosal healing on vedolizumab or mirikizumab and still have progressive structural bowel damage.',
          'TL1A drives this fibrosis through multiple downstream mechanisms. Preclinical data show that TL1A-DR3 signalling activates intestinal stromal fibroblasts and myofibroblasts, promotes TGF-beta production (the master regulator of fibrosis in every organ system), and induces IL-13 expression which amplifies pro-fibrotic collagen deposition. In murine UC models, genetic deletion or antibody blockade of TL1A reduces not just inflammation scores but histological fibrosis indices — a result that has not been replicated with anti-TNF or vedolizumab treatment in the same models.',
          'The clinical implication is significant. If anti-TL1A therapy can simultaneously reduce mucosal inflammation (as the Phase 2 trial data suggests) and attenuate the fibrotic remodelling that drives long-term structural damage (as the preclinical models suggest), it would represent the first therapy capable of modifying the natural history of UC at a structural level — not just managing symptoms and mucosal appearance.',
        ],
        callout: 'You can achieve mucosal healing on a biologic and still have progressive bowel wall scarring. TL1A inhibitors are the first class designed to target that scarring directly.',
      },
      {
        title: 'Tulisokibart Phase 2 (ARTEMIS-UC): 26% remission vs 1% placebo',
        paragraphs: [
          'Tulisokibart (TEV-48574, Merck) is the furthest-advanced TL1A inhibitor in clinical development for UC. The Phase 2 ARTEMIS-UC trial evaluated tulisokibart in biologic-naive and biologic-experienced patients with moderate-to-severe active UC. The headline finding: 26% clinical remission at 12 weeks in the highest-dose tulisokibart arm, compared to 1% in the placebo arm.',
          'That gap — 26% vs 1% — is extraordinary for a Phase 2 induction study. For context, most Phase 2 trials in UC expect to see placebo remission rates of 5-15%, and drug remission rates of 15-30%. A 1% placebo rate reflects either a very high-severity patient population or very stringent endpoint definitions (or both). The absolute difference of 25 percentage points at induction gives a strong signal, though Phase 3 results with a more typical placebo rate will give a clearer picture of the true effect size.',
          'Tulisokibart was well tolerated in Phase 2. Serious adverse events were not reported at elevated rates versus placebo, consistent with the growing safety data for this target. A Phase 3 programme is now enrolling — the largest clinical trial programme ever conducted for an anti-TL1A agent. Results are expected in 2027-2028.',
        ],
      },
      {
        title: 'Duvakitug and afimkibart: the class is not a one-drug story',
        paragraphs: [
          'Duvakitug (formerly ETG-005, jointly developed by Teva and AnaptysBio) is the second anti-TL1A antibody to have demonstrated clinical efficacy in Phase 2 trials. Unlike tulisokibart, duvakitug was evaluated in a combined UC and Crohn\'s disease programme, providing cross-IBD evidence for the TL1A pathway. Phase 2 results showed clinical and endoscopic remission in both conditions, with a safety profile consistent with selective immune modulation rather than broad immunosuppression.',
          'Afimkibart is a third anti-TL1A antibody currently in earlier-stage clinical development. Three separate compounds from three different development programmes showing efficacy at the same target dramatically strengthens the mechanistic rationale. This is not a one-biologic fluke — the TL1A pathway appears genuinely druggable, and the class effect appears real.',
          'The fact that duvakitug works in Crohn\'s disease as well as UC is also notable for IBD patients who have features of both conditions, or who have an uncertain diagnosis. TL1A\'s fibrotic mechanism is, if anything, more relevant in Crohn\'s disease (where transmural fibrosis and stricturing are even more clinically significant than in UC), which means this drug class may ultimately have broader IBD utility than any currently approved agent.',
        ],
      },
      {
        title: 'Who stands to benefit most from TL1A inhibitors?',
        paragraphs: [
          'It is too early to define precise patient selection criteria for TL1A inhibitors — Phase 3 data will be needed to understand subgroup effects. But the mechanistic profile suggests several patient groups for whom this class could be particularly valuable.',
          'Patients with multiple prior biologic failures: TL1A is a mechanistically independent target from anti-TNF, vedolizumab, IL-23 inhibitors, and JAK inhibitors. Prior failure of one or even all existing classes does not predict TL1A inhibitor failure. For patients who are running out of options, this mechanism independence is critical.',
          'Patients with evidence of progressive bowel wall thickening or early fibrosis on imaging: If MRI enterography or cross-sectional imaging shows transmural thickening, increased T2 signal (oedema-fibrosis spectrum), or loss of haustra — features associated with cumulative fibrotic remodelling — these patients may have the most to gain from a therapy that targets the fibrotic arm of disease.',
          'Patients who continue to have histological inflammation despite endoscopic remission: Histological remission is increasingly recognised as a deeper endpoint associated with better long-term outcomes. Patients who achieve endoscopic but not histological remission on current therapy may have persistent TL1A-driven subepithelial inflammation that anti-TL1A agents are specifically positioned to address.',
          'The clinical reality is that Phase 3 results will clarify this substantially. But understanding the mechanism now allows patients to have informed conversations with their gastroenterologists — particularly those who are watching their disease progress despite adequate anti-inflammatory therapy.',
        ],
        callout: 'Multiple biologic failures? Bowel wall thickening on MRI? Ongoing histological inflammation despite endoscopic remission? TL1A inhibitors are mechanistically built for exactly these situations.',
      },
      {
        title: 'What patients should do right now — before Phase 3 results arrive',
        paragraphs: [
          'TL1A inhibitors are not yet approved. They are in Phase 3 trials. So why does this matter to you today?',
          'First, clinical trials are actively enrolling. Tulisokibart Phase 3 sites are recruiting. If you have moderate-to-severe UC that has failed one or more advanced therapies, you may be eligible. Participating in a Phase 3 trial gives access to a potentially efficacious drug that is not yet commercially available — along with close monitoring and comprehensive care. ClinicalTrials.gov lists active studies under the search term "tulisokibart" and "duvakitug".',
          'Second, understanding this pipeline changes how you navigate conversations with your gastroenterologist. If you are approaching your third or fourth biologic failure and your doctor is discussing step-down to optimise current therapy, it is reasonable to ask about clinical trial eligibility for next-generation targets including anti-TL1A agents.',
          'Third, the TL1A story changes how we think about disease monitoring. If fibrosis is a parallel process to inflammation — and TL1A evidence suggests it is — then monitoring that focuses only on mucosal inflammation (symptoms, endoscopy, calprotectin) is incomplete. Asking about transmural assessment with intestinal ultrasound or MRI is increasingly warranted for patients with long-standing disease.',
          'The most important thing is this: the UC treatment landscape in 2026 is more differentiated than it has ever been. Mechanistically distinct options — each with their own indication niche — are accumulating rapidly. TL1A inhibitors will add a category that currently does not exist: inflammation-plus-fibrosis modification. That is worth being ready for.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When will tulisokibart be approved for UC?',
        answer: 'Tulisokibart is currently in Phase 3 clinical trials. If Phase 3 results are positive and regulatory submission proceeds, approval could come in 2028-2029. Phase 3 results are expected approximately 2027-2028. ClinicalTrials.gov lists active recruiting sites for patients who want access now.',
      },
      {
        question: 'Is TL1A the same as TNF? Is tulisokibart an anti-TNF drug?',
        answer: 'No. TL1A (tumour necrosis factor-like ligand 1A) is structurally related to TNF but has a distinct receptor (DR3), distinct cell sources, and distinct downstream effects including direct pro-fibrotic activity. Tulisokibart is not an anti-TNF. It works through a completely independent mechanism and is expected to work in patients who have failed anti-TNF therapy.',
      },
      {
        question: 'Can TL1A inhibitors actually reverse intestinal scarring?',
        answer: 'Preclinical evidence shows TL1A inhibition reduces the formation of new fibrosis in murine IBD models. Whether established fibrosis can be reversed — rather than just prevented from progressing — is an open question that will require long-term extension data from Phase 3 trials. Most fibrosis experts believe prevention of progression is more achievable than reversal of established scarring.',
      },
      {
        question: 'Who are the three TL1A inhibitors and what is their status?',
        answer: 'Tulisokibart (Merck): most advanced, Phase 3 now enrolling after positive Phase 2 ARTEMIS-UC (26% vs 1% remission). Duvakitug (Teva/AnaptysBio): positive Phase 2 in UC and Crohn\'s disease. Afimkibart: earlier clinical development. All three target the TL1A-DR3 axis through antibody blockade of TL1A.',
      },
      {
        question: 'If I have failed vedolizumab, mirikizumab, and upadacitinib, could TL1A inhibitors work?',
        answer: 'Potentially yes. TL1A inhibitors are mechanistically independent of all three of those agents. The mechanism of prior failure does not predict TL1A inhibitor failure. This is one of the most clinically exciting aspects of the class — it offers a genuinely new pathway for patients who have exhausted current options.',
      },
    ],
    references: [
      { label: 'Goyal MK et al. TL1A Inhibitors in IBD - Mechanistic Rationale and Clinical Evidence. Aliment Pharmacol Ther. 2026 Apr 6 (PMID: 41941212)', href: 'https://pubmed.ncbi.nlm.nih.gov/41941212/' },
      { label: 'Tulisokibart Phase 2 ARTEMIS-UC — ClinicalTrials.gov NCT04996173', href: 'https://clinicaltrials.gov/study/NCT04996173' },
      { label: 'Duvakitug (ETG-005) Phase 2 results — AnaptysBio press release 2024', href: 'https://ir.anaptysbio.com/' },
      { label: 'Sands BE et al. LUCENT-3 4-year mirikizumab OLE. Inflamm Bowel Dis. 2026 (PMID: 41777218)', href: 'https://pubmed.ncbi.nlm.nih.gov/41777218/' },
      { label: 'Amin HM et al. IL-23 inhibitors meta-analysis. Int J Colorectal Dis. 2025 (PMID: 41467943)', href: 'https://pubmed.ncbi.nlm.nih.gov/41467943/' },
    ],
    relatedSlugs: ['jak-inhibitors-acute-severe-uc-meta-analysis-2026', 'mirikizumab-4-year-remission-lucent-3', 'il23-inhibitors-meta-analysis-safety-efficacy-2026'],
  },
  {
    slug: 'etrasimod-meta-analysis-mucosal-healing-2026',
    title: 'Etrasimod Delivers 6.93× More Mucosal Healing at 40 Weeks — The Oral UC Pill Most Patients Have Never Heard Of',
    description: 'A GRADE-based meta-analysis of 4 RCTs (1239 patients) published in March 2026 found etrasimod — an oral once-daily pill — achieves nearly 7× more mucosal healing and 4.28× more clinical remissions at 40 weeks vs placebo, with zero heterogeneity across trials. Here is what this means for UC patients seeking alternatives to injections.',
    category: 'Small Molecules',
    readTime: '8 min read',
    datePublished: '2026-03-31',
    intro: 'Most UC patients know about the biologics — the injections and infusions they sit through every few weeks. Fewer know about the oral S1P modulators, and even among those who do, etrasimod is often an afterthought. That needs to change. A GRADE-based systematic review and meta-analysis just published in the Annals of Pharmacotherapy (March 2026) pooled data from 4 randomised controlled trials and 1,239 patients and found that etrasimod — taken once daily by mouth — produces 6.93 times more mucosal healing at 40 weeks versus placebo. With zero heterogeneity (I²=0%). That last part matters. Zero heterogeneity means every trial told the same story. When you see I²=0% in a meta-analysis of UC maintenance data, you are looking at one of the most consistent signals in the field. This is not a drug being carried by one anomalous trial. Etrasimod\'s maintenance benefit is real, reproducible, and substantial.',
    keyPoints: [
      'Etrasimod is an oral once-daily sphingosine-1-phosphate (S1P) receptor modulator approved in 2023 for moderately-to-severely active UC.',
      'Induction (12 weeks): clinical remission RR 2.92 vs placebo; clinical response RR 1.71; mucosal healing RR 3.11.',
      'Maintenance (40+ weeks): clinical remission RR 4.28 (I²=0%); endoscopic improvement RR 3.51 (I²=0%); mucosal healing RR 6.93 (I²=0%); steroid-free remission RR 4.28 (I²=0%).',
      'Zero heterogeneity in all four maintenance endpoints — an exceptionally consistent signal across independent trials.',
      'No excess serious adverse events vs placebo; serious AE rate was numerically lower with etrasimod (RR 0.79).',
      'GRADE-based analysis provides the highest-quality evidence grading for treatment recommendations.',
    ],
    sections: [
      {
        title: 'What etrasimod actually does — and why the mechanism matters for UC',
        paragraphs: [
          'Etrasimod selectively modulates sphingosine-1-phosphate (S1P) receptors 1, 4, and 5. The S1P signalling pathway controls how lymphocytes — the immune cells responsible for mucosal inflammation in UC — exit lymph nodes and traffic into tissues. By partially blocking this pathway, etrasimod effectively traps a subset of inflammatory lymphocytes in lymph nodes, reducing their ability to reach and damage the colon.',
          'This is a gut-relevant mechanism, but it operates systemically. Unlike vedolizumab, which blocks gut-specific integrin trafficking, etrasimod works upstream at the lymphocyte egress stage. The selectivity for S1P receptors 1, 4, and 5 (rather than S1P receptor 3, which mediates cardiac effects) was a deliberate design choice to improve the cardiovascular safety profile compared to earlier-generation S1P modulators.',
          'Once-daily dosing and oral delivery make etrasimod one of the most practical advanced therapies available. No injections, no infusion centre visits, no pre-medication. For patients who value treatment simplicity — or who have needle anxiety, or who travel frequently — etrasimod\'s administration profile is a genuine advantage.',
        ],
        callout: 'Etrasimod traps inflammatory lymphocytes before they reach your colon — taken once daily as a pill, no injections needed.',
      },
      {
        title: 'Breaking down the meta-analysis numbers',
        paragraphs: [
          'The induction data at 12 weeks is solid but not startling: clinical remission RR 2.92 means roughly 3× more patients achieve remission than on placebo. Clinical response RR 1.71 means 71% more responders. Mucosal healing RR 3.11 — over triple the rate of placebo. These are strong induction numbers for any advanced therapy.',
          'But the maintenance data — the 40-week-plus outcomes — is where etrasimod genuinely stands out. Clinical remission at 40+ weeks: RR 4.28, I²=0%. Endoscopic improvement: RR 3.51, I²=0%. Mucosal healing: RR 6.93, I²=0%. Steroid-free remission: RR 4.28, I²=0%.',
          'That I²=0% figure repeated across four distinct maintenance endpoints is not coincidence. It tells you that the drug\'s maintenance benefit is not a statistical artefact of one optimistic trial skewing the pooled estimate — it was observed consistently across every trial in the analysis. In IBD research, where heterogeneity in maintenance trials is common (I² of 30–60% is typical), this level of consistency is remarkable.',
          'The mucosal healing RR of 6.93 deserves particular attention. Mucosal healing — defined as an endoscopic subscore of 0 or 1 with no friability — is increasingly recognised as the most clinically meaningful UC outcome. Patients who achieve mucosal healing have lower long-term colectomy rates, fewer hospitalisations, and better quality of life than those who achieve only symptomatic remission. A nearly sevenfold improvement vs placebo in mucosal healing at 40 weeks is a treatment-class-defining number.',
        ],
        callout: 'Mucosal healing RR 6.93 at 40 weeks: nearly 7× more patients with a healed colon lining vs placebo. I²=0% — every trial confirmed it.',
      },
      {
        title: 'How etrasimod compares to other oral options',
        paragraphs: [
          'The oral UC drug landscape now includes tofacitinib (pan-JAK inhibitor), upadacitinib (JAK1-selective), ozanimod (S1P), and etrasimod (S1P). Each has a different mechanism and risk profile.',
          'Upadacitinib holds the crown for induction speed and raw remission numbers in phase 3 trials — 42% clinical remission at 52 weeks in U-ACHIEVE Maintenance, and 86.5% short-term response in acute severe UC per the 2026 meta-analysis. But JAK inhibitors carry a class-wide black box warning for cardiovascular events, malignancy, thrombosis, and serious infections, which makes many gastroenterologists and patients cautious about first-line use in patients without prior biologic failure.',
          'Etrasimod occupies a different risk-benefit space. Its main safety concern is first-dose bradycardia (requiring a 6-hour observation after first dose in at-risk patients) and the need for cardiac screening in those with pre-existing arrhythmia. The GRADE meta-analysis found no excess serious adverse events, and the RR for serious adverse events was actually numerically lower with etrasimod than placebo (RR 0.79), though this was not statistically significant.',
          'For patients who need an oral option without the JAK inhibitor safety profile — or who have failed vedolizumab and need a different mechanism — etrasimod offers a well-tolerated, once-daily option with a now-confirmed maintenance signal that is among the strongest in the drug class.',
        ],
      },
      {
        title: 'What the GRADE classification means for patients',
        paragraphs: [
          'GRADE (Grading of Recommendations, Assessment, Development and Evaluations) is the international standard for rating the quality of evidence in systematic reviews. The fact that this meta-analysis used GRADE methodology means the authors systematically assessed not just the pooled effect sizes, but the quality of evidence behind each outcome — looking at risk of bias, inconsistency, indirectness, imprecision, and publication bias.',
          'GRADE evidence rated as "moderate" or "high" is what regulatory agencies and guideline committees use to make treatment recommendations. When the BSG or AGA update their UC guidelines to formally position etrasimod, this GRADE meta-analysis will likely be a key supporting reference.',
          'For you as a patient, this means the numbers above are not cherry-picked from the most optimistic trial. They represent the best-quality synthesis of all available trial evidence, evaluated by researchers who were explicitly looking for weaknesses in the data. The signal survived that scrutiny intact.',
        ],
      },
      {
        title: 'Who should consider asking about etrasimod',
        paragraphs: [
          'Etrasimod is approved for moderately-to-severely active UC in adults. The ELEVATE UC phase 3 programme enrolled both biologic-naïve and biologic-experienced patients, and efficacy was observed in both groups — though numerically higher in naïve patients (as is typical for all advanced therapies).',
          'You should consider asking your gastroenterologist about etrasimod if: you have moderate-to-severe UC on 5-ASA therapy and need to step up; you prefer an oral medication over injections or infusions; you have failed or are intolerant of a biologic and need an alternative mechanism; you value a drug with extensive mucosal healing data; or you are concerned about the JAK inhibitor safety profile.',
          'Contraindications include recent MI, stroke or TIA, second-degree or higher AV block without a pacemaker, severe active infections, and active malignancy. A first-dose cardiac monitoring protocol (typically 6 hours of observation) is required for patients with certain cardiac risk factors. Discuss your full history with your GI before starting any advanced therapy.',
        ],
        callout: 'Prefer a pill over injections? Failed biologics? Ask your GI: "Am I a candidate for etrasimod based on the 2026 GRADE meta-analysis?"',
      },
    ],
    faqs: [
      {
        question: 'What is etrasimod and how is it different from other UC drugs?',
        answer: 'Etrasimod (brand name: Velsipity) is an oral once-daily sphingosine-1-phosphate (S1P) receptor modulator. Unlike biologics (which are injected or infused) and JAK inhibitors (which broadly suppress intracellular signalling), etrasimod modulates S1P receptors on lymphocytes to reduce their trafficking into the inflamed colon. It was FDA-approved in 2023 for moderately-to-severely active UC.',
      },
      {
        question: 'How strong is the evidence for etrasimod compared to the top-ranked biologics?',
        answer: 'The 2026 GRADE meta-analysis found etrasimod achieves clinical remission RR 4.28 and mucosal healing RR 6.93 at 40+ weeks vs placebo with I²=0%. These are relative risk figures against placebo, so they are not directly comparable to head-to-head trials against biologics. Head-to-head data is limited. However, the mucosal healing signal with zero heterogeneity is one of the most consistent maintenance findings in the S1P class.',
      },
      {
        question: 'What are the main risks of etrasimod?',
        answer: 'The most important risk is first-dose bradycardia — a transient slowing of the heart rate. Patients with certain cardiac conditions require 6 hours of observation after the first dose. Etrasimod should not be used in patients with recent cardiovascular events, significant AV block without a pacemaker, or active malignancy. There is also a risk of reactivating infections in immunosuppressed patients. However, the GRADE meta-analysis found no statistically significant increase in serious adverse events versus placebo (RR 0.79).',
      },
      {
        question: 'Is etrasimod available for biologic-experienced patients?',
        answer: 'Yes. The ELEVATE UC phase 3 trials included both biologic-naïve and biologic-experienced patients. Etrasimod showed clinical benefit in both groups, although (as with all advanced UC therapies) remission rates tend to be numerically higher in biologic-naïve patients. Your gastroenterologist can assess whether etrasimod is an appropriate next step after biologic failure.',
      },
    ],
    references: [
      { label: 'Jha A et al. Ann Pharmacother. 2026 — GRADE meta-analysis (PMID: 41891290)', href: 'https://pubmed.ncbi.nlm.nih.gov/41891290/' },
      { label: 'Sandborn WJ et al. (ELEVATE UC) Lancet. 2023 (PMID: 36871574)', href: 'https://pubmed.ncbi.nlm.nih.gov/36871574/' },
      { label: 'AGA Clinical Practice Guideline. Gastroenterology. 2024', href: 'https://www.gastrojournal.org/article/S0016-5085(24)00899-3/fulltext' },
    ],
    relatedSlugs: [
      'elevate-etrasimod',
      'true-north-ozanimod',
      'u-achieve-upadacitinib',
      'jak-inhibitors-acute-severe-uc-meta-analysis-2026',
    ],
  },
  {
    slug: 'appendicectomy-vs-jak-inhibitor-biologic-refractory-uc-2026',
    title: 'Appendicectomy Beat JAK Inhibitors in Biologic-Refractory UC — The COSTA Trial Just Changed the Conversation',
    description: 'A Lancet 2026 multicentre prospective trial found that laparoscopic appendicectomy produced 2.7× more clinical remissions than switching to a JAK inhibitor in active UC patients who had already failed biologic therapy. Here is what this means for patients who have run out of options.',
    category: 'Surgery',
    readTime: '9 min read',
    datePublished: '2026-03-30',
    intro: 'If you have been through multiple biologics and are now staring at the prospect of a JAK inhibitor — or worse, a colectomy — the COSTA trial just dropped a finding you need to know about. A laparoscopic appendicectomy, a 30-minute keyhole procedure to remove your appendix, produced 32.8% clinical remission at 12 months in biologic-refractory UC patients. The JAK inhibitor group achieved 12.2%. That is nearly three times higher remission for a procedure that most gastroenterologists would never have thought to recommend over a targeted small molecule drug. This is not a retrospective analysis or a surrogate endpoint. It is a prospective, multicentre cohort study published in The Lancet Gastroenterology & Hepatology in March 2026.',
    keyPoints: [
      'Appendicectomy achieved 32.8% clinical remission at 12 months vs 12.2% with JAK inhibitor in biologic-exposed active UC patients (p=0.010).',
      'Clinical response was 73.1% with appendicectomy vs 53.1% with JAK inhibitor (p=0.025).',
      'Endoscopic response was 48.4% vs 25.6% — nearly double (p=0.018).',
      'Colectomy rates were virtually identical: 9.0% appendicectomy vs 8.2% JAK inhibitor.',
      'The procedure was safe: only 3 complications in 69 patients, all Clavien-Dindo grade II or lower.',
      'The study enrolled patients with a total Mayo score of 5–12 and endoscopic subscore ≥2 despite prior advanced therapy.',
    ],
    sections: [
      {
        title: 'Who was in COSTA — and why these patients matter',
        paragraphs: [
          'The COSTA study enrolled what gastroenterologists call "biologic-exposed" patients — people who had already tried and failed at least one advanced therapy (a biologic or small molecule). These are not treatment-naive patients getting their first drug. These are people who are cycling through options, often with the shadow of colectomy on the horizon.',
          'To enter the trial, patients needed a total Mayo score of 5–12 (moderate to severe active disease) and an endoscopic subscore of 2 or higher — meaning active mucosal inflammation visible on colonoscopy — despite ongoing treatment with an advanced therapy. That is the definition of medically refractory disease.',
          'In standard clinical practice, the next step for this patient group is almost universally: switch to a new drug class, dose-escalate, or head to surgery. The COSTA investigators asked a different question: what if you also offered them an appendicectomy?',
        ],
        callout: '116 biologic-exposed UC patients. Active disease despite advanced therapy. The COSTA trial enrolled exactly the patients who have run out of obvious options.',
      },
      {
        title: 'The numbers that matter',
        paragraphs: [
          'The primary outcome was clinical remission at 12 months without therapy failure — no need for steroids, no switch to another advanced therapy, no colectomy. In the appendicectomy group: 32.8% met this bar. In the JAK inhibitor group: 12.2%.',
          'The unadjusted difference was 20.6 percentage points (95% CI 6.1–35.1). After logistic regression adjusting for baseline confounders, the difference was 22.9 percentage points (95% CI 6.1–39.8). Both analyses give the same conclusion: appendicectomy more than doubled — in fact nearly tripled — the remission rate.',
          'Clinical response (improvement without full remission) was also significantly higher: 73.1% vs 53.1%. Endoscopic response — meaning actual healing visible on scope — was 48.4% vs 25.6%. That endoscopic finding is particularly important because it tells you the gut lining is actually changing, not just that symptom scores improved.',
          'Colectomy rates at 12 months were virtually identical: 9.0% in the appendicectomy group vs 8.2% in the JAK inhibitor group. Appendicectomy did not increase colectomy risk. It dramatically improved remission while keeping colectomy rates the same.',
        ],
      },
      {
        title: 'Why would removing the appendix help UC?',
        paragraphs: [
          'The appendix is not a vestigial organ. It is a lymphoid tissue reservoir — essentially a training ground for gut-associated immune cells. In the context of ulcerative colitis, the appendix appears to function as a source of inflammatory immune cell trafficking into the colon.',
          'This idea is supported by epidemiology: people who have their appendix removed before age 20 are significantly less likely to develop UC later in life (OR ~0.31 in multiple meta-analyses). That preventive effect has been known for decades. What COSTA tested is the therapeutic equivalent — whether removing an appendix that is already part of an established UC immune circuit can interrupt that circuit and reduce active disease.',
          'The proposed mechanism involves the cecal patch, a dense aggregation of lymphoid follicles at the base of the appendix. In UC, abnormally activated T-cells from this patch recirculate to the colonic mucosa, perpetuating inflammation. Remove the source, and you may dampen the recirculating signal. It is not a cure — the colon itself is still the primary site of disease — but it appears to modulate the immune drive enough to convert some biologic-refractory patients into responders.',
        ],
        callout: 'The appendix is a lymphoid organ that may be feeding inflammatory signals back into the inflamed colon. Remove it, and you may partially interrupt that loop.',
      },
      {
        title: 'What COSTA does not tell us — and why it still matters',
        paragraphs: [
          'COSTA was a patient-preference cohort study, not a randomised controlled trial. Patients chose which arm they entered, which introduces selection bias. The investigators adjusted for baseline differences in their logistic regression, but there is no guarantee the groups were truly equivalent in ways not captured by the Mayo score.',
          'The trial was conducted at five hospitals in the Netherlands, which limits immediate generalisability. Dutch academic IBD centres have specific surgical and gastroenterological expertise that may affect both the quality of the appendicectomy and the choice of JAK inhibitor used.',
          'The study also continued patients on their existing advanced therapy in the appendicectomy arm — this was appendicectomy as an adjunct, not as a replacement for medical therapy. The comparison was appendicectomy-plus-stable-existing-treatment versus switching to a new JAK inhibitor. That is clinically relevant (this is how you would actually offer it to a patient) but it makes it harder to isolate the appendicectomy effect alone.',
          'Despite these limitations, this is the largest and most rigorous prospective dataset on therapeutic appendicectomy in UC ever published. The effect size is striking and consistent across all secondary endpoints. These findings justify a serious conversation between patients with biologic-refractory UC and their surgical team.',
        ],
      },
      {
        title: 'What this means for your next conversation with your GI',
        paragraphs: [
          'If you have active UC despite having tried at least one biologic, and your gastroenterologist is discussing switching drug classes, you can now ask a very specific question: "I read the COSTA trial. Am I a candidate for laparoscopic appendicectomy as an adjunct to my current therapy?"',
          'The procedure itself is well-established, brief, and safe in experienced hands. The COSTA data shows serious adverse events were rare and colectomy risk was not increased. This is not asking your surgeon to do something experimental — laparoscopic appendicectomy has been performed for decades. What is new is the evidence that it may outperform a drug switch in this specific population.',
          'Not every patient will be eligible. The COSTA entry criteria required a total Mayo score of 5–12 and an endoscopic subscore of ≥2 despite advanced therapy. Patients with particularly aggressive pancolitis, prior abdominal surgery complicating laparoscopy, or other contraindications may not be candidates. But for those who are, the evidence is now strong enough to justify the conversation.',
        ],
        callout: 'Ask your GI: "Based on COSTA, am I a candidate for laparoscopic appendicectomy as an adjunct?" The answer may change your trajectory.',
      },
    ],
    faqs: [
      {
        question: 'Is appendicectomy safe in UC patients?',
        answer: 'In the COSTA trial, 69 patients underwent laparoscopic appendicectomy. Only 3 experienced procedure-related complications, and all were Clavien-Dindo grade II or lower — the lowest tier of surgical complications (managed with drugs, no re-operation required). This is consistent with the established safety profile of laparoscopic appendicectomy in general surgical practice.',
      },
      {
        question: 'Does appendicectomy prevent needing a colectomy?',
        answer: 'In COSTA, colectomy rates at 12 months were virtually identical between the appendicectomy group (9.0%) and the JAK inhibitor group (8.2%). Appendicectomy did not significantly reduce colectomy risk compared to switching drugs — but it also did not increase it, while producing substantially higher remission and response rates.',
      },
      {
        question: 'Does this mean appendicectomy is better than all JAK inhibitors?',
        answer: 'No. COSTA compared appendicectomy-as-adjunct to standard-of-care treatment versus switching to a JAK inhibitor in biologic-refractory patients. The JAK inhibitor group in this trial was a specific biologic-exposed population starting a new drug class; the results do not apply to JAK inhibitor use as first-line or second-line therapy in biologic-naïve patients, where response rates are much higher.',
      },
      {
        question: 'Who qualifies for therapeutic appendicectomy based on this trial?',
        answer: 'COSTA enrolled patients with active UC (total Mayo score 5–12, endoscopic subscore ≥2) who had already been treated with at least one advanced therapy (biologic or small molecule) without achieving adequate control. These are biologic-refractory patients, not treatment-naïve individuals. Discuss eligibility with your IBD team and a colorectal surgeon.',
      },
    ],
    references: [
      { label: 'Visser E et al. (COSTA Study Group). Lancet Gastroenterol Hepatol. 2026 Mar;11(3):190-203. (PMID: 41512889)', href: 'https://pubmed.ncbi.nlm.nih.gov/41512889/' },
      { label: 'Andersson RE et al. Appendectomy and protection against ulcerative colitis. N Engl J Med. 2001', href: 'https://pubmed.ncbi.nlm.nih.gov/11559638/' },
      { label: 'Sahami S et al. ACCURE RCT — appendectomy in UC. Lancet Gastroenterol Hepatol. 2025', href: 'https://pubmed.ncbi.nlm.nih.gov/39159620/' },
      { label: 'Kaplan GG et al. The role of the appendix in the development of inflammatory bowel disease. J Crohns Colitis. 2010', href: 'https://pubmed.ncbi.nlm.nih.gov/21122557/' },
    ],
    relatedSlugs: ['jak-inhibitors-acute-severe-uc-meta-analysis-2026', 'mirikizumab-4-year-remission-lucent-3', 'fmt-remission-meta-analysis-2026'],
  },
  {
    slug: 'mirikizumab-4-year-remission-lucent-3',
    title: 'Mirikizumab Still Working at 4 Years: 77.7% Clinical Remission in LUCENT-3 — the Durability Data UC Patients Have Been Waiting For',
    description: 'The LUCENT-3 open-label extension followed UC patients on mirikizumab for 4 continuous years. Among those in remission at year 1, 77.7% were still in clinical remission and 81.3% in endoscopic remission at week 212. Here is what this means for your treatment decision.',
    category: 'Biologics',
    readTime: '10 min read',
    datePublished: '2026-03-29',
    intro: 'Here is the question that every UC patient on a biologic asks their gastroenterologist at some point: "But how long will this actually work?" Most clinical trials only follow patients to week 52. That leaves a gaping uncertainty — will remission hold at year 2, year 3, year 4? The LUCENT-3 open-label extension just answered that question for mirikizumab. Among patients who achieved clinical remission at week 52, 77.7% were still in clinical remission at 4 years. Endoscopic remission was 81.3%. Symptomatic remission was 94.3%. And no new safety signals emerged across 835 patient-years of exposure. That is not a short-term spike. That is durable disease control.',
    keyPoints: [
      'W52 clinical remitters: 77.7% still in clinical remission at 4 years (week 212), by observed-case analysis.',
      'W52 clinical remitters: 81.3% endoscopic remission and 94.3% symptomatic remission at 4 years.',
      'W52 clinical responders (not yet remitters): 68.7% clinical and 70.2% endoscopic remission at 4 years.',
      'Bowel urgency remission: 73.6% at 4 years — one of the most patient-relevant outcomes.',
      'No new safety signals over 160+ weeks of long-term exposure in 835 patient-years.',
      'Benefits held across biologic-naïve and biologic-experienced subgroups.',
    ],
    sections: [
      {
        title: 'Why durability data matters more than induction data',
        paragraphs: [
          'When a drug is approved, the headlines focus on induction: "X% achieved remission at week 8." That is important. But it is not the number that changes your life. The number that changes your life is what percentage of people are still doing well at year 2, year 3, year 4. Because UC is not an acute infection you treat and cure — it is a chronic disease you manage indefinitely.',
          'Most biologic trials stop at week 52. That is a regulatory requirement, not a patient-relevant endpoint. A drug that gets 50% of patients into remission at 52 weeks could theoretically fall apart at week 104. Without long-term extension data, you are flying blind on durability.',
          'LUCENT-3 addressed this directly. It extended the original LUCENT-1 and LUCENT-2 trials through week 212 — roughly 4 years of continuous treatment. The data reported by Sands et al. in Inflammatory Bowel Diseases (2026) represents the longest controlled prospective dataset for any IL-23 inhibitor in ulcerative colitis.',
        ],
        callout: 'Induction remission is a starting pistol. Durability at 4 years is the finish line patients actually care about.',
      },
      {
        title: 'What the LUCENT-3 numbers actually mean',
        paragraphs: [
          'The study enrolled 868 patients in the original LUCENT induction program. Of these, 544 achieved clinical response. 365 were randomised to mirikizumab maintenance, and 316 entered the open-label extension after week 52. By week 212, 182 patients completed the full 4-year course — generating 835 total patient-years of exposure.',
          'The headline number for patients in remission at week 52: 77.7% clinical remission at year 4, by observed-case analysis. But the other numbers are arguably more important. Endoscopic remission — meaning the colon looks objectively normal on camera — held at 81.3%. That is not just symptom relief; that is mucosal healing at 4 years. Histologic-endoscopic mucosal remission, the deepest possible measure of disease control, was 66.0%.',
          'The symptomatic remission rate of 94.3% is the number that translates to daily life. Nearly all patients who were in remission at year 1 were symptom-free at year 4. Rectal bleeding, urgency, frequency — all sustained at near-zero by year 4 in the remitter cohort.',
          'Even the responders — patients who had a clinical response at week 52 but were not yet in full remission — showed 68.7% clinical remission at year 4. That means a meaningful proportion of partial responders at year 1 converted to full remission over time. This has major implications for clinical decision-making: do not give up on a partial responder too early.',
        ],
      },
      {
        title: 'Bowel urgency: the outcome that actually matters to patients',
        paragraphs: [
          'One number in the LUCENT-3 data deserves special attention: bowel urgency remission of 73.6% at 4 years, with 92.9% achieving clinically meaningful improvement in bowel urgency.',
          'Bowel urgency — the sudden, uncontrollable need to rush to a toilet — is the symptom that most severely limits UC patients. It determines whether you can travel, attend events, hold a normal job, maintain relationships, or sleep through the night. Standard clinical trials focus on stool frequency and rectal bleeding because those are easier to quantify. But patients consistently rank urgency as their most debilitating symptom.',
          'The fact that LUCENT-3 tracked bowel urgency remission as a specific endpoint and showed 73.6% achieving it at 4 years is a signal that mirikizumab is addressing what patients actually experience, not just what looks good in a regulatory filing.',
        ],
        callout: '92.9% of patients achieved clinically meaningful improvement in bowel urgency at 4 years. That is the stat that changes whether you can live a normal life.',
      },
      {
        title: 'What about biologic-experienced patients?',
        paragraphs: [
          'One of the most important subgroup analyses in LUCENT-3 was the split between biologic-naïve patients (no prior biologic exposure) and biologic-experienced patients (prior failure of anti-TNF or another biologic). Biologic failure is clinically harder — these patients have already proven they can exhaust treatment options.',
          'The LUCENT-3 data showed that efficacy results were "generally similar" across both subgroups through week 212. This is meaningful. It means that if you failed adalimumab or infliximab, mirikizumab still has a realistic chance of providing 4-year durability. You are not just getting a temporary reprieve before the next treatment failure.',
          'This is consistent with the established profile of IL-23 inhibitors as a class — their mechanism is independent of TNF signaling, so prior anti-TNF failure does not meaningfully blunt the IL-23 response. But the 4-year extension confirms this durability extends well beyond the standard 52-week observation window.',
        ],
      },
      {
        title: 'Safety over 160 weeks: what the long-term data shows',
        paragraphs: [
          'Safety is where long-term extension trials matter most. Short-term trials cannot detect rare events or cumulative effects that only emerge over years. The LUCENT-3 data across 835 patient-years showed no new safety signals compared with induction and maintenance treatment.',
          'This is important because it addresses a concern that some patients have about biologics: "I know it is working now, but what happens to my immune system after 4 years?" The current answer from the longest IL-23 UC dataset available is: nothing unexpected. The risk profile at year 4 mirrors the risk profile at year 1.',
          'As a class, IL-23 inhibitors have a favorable safety profile compared to anti-TNF agents and JAK inhibitors. They do not carry the cardiovascular or thromboembolism signals associated with JAK inhibitors, and they do not have the increased overall infection burden seen with broad anti-TNF therapy. The LUCENT-3 data further consolidates that profile over time.',
        ],
      },
      {
        title: 'How this compares to other biologics at 4 years',
        paragraphs: [
          'Most biologics approved for UC do not have 4-year randomised controlled data. Long-term extension studies for vedolizumab and ustekinumab show roughly 50–60% clinical remission in continuous responders at extended time points, though methodologies differ and direct comparison is not appropriate.',
          'The mirikizumab LUCENT-3 77.7% number uses observed-case analysis — meaning it only counts patients who were still in the study at week 212, which is a stricter denominator in some respects (it excludes dropouts). When non-responder imputation is applied, rates are somewhat lower, as expected. The clinical implication is that patients who stay on mirikizumab and tolerate it well have a very high probability of remaining in deep remission at 4 years.',
          'The bottom line for patients and clinicians: if you achieve remission on mirikizumab at year 1, there is a ~78% chance you will still be in clinical remission at year 4, a ~81% chance your colonoscopy will look objectively normal, and a near-zero chance of a new drug-related safety problem. That is a compelling durability argument.',
        ],
        callout: 'Achieve remission at year 1 → 78% probability of sustained clinical remission at year 4. That is the conversation starter for your next gastro appointment.',
      },
      {
        title: 'What this means if you are currently deciding on treatment',
        paragraphs: [
          'If you have moderate-to-severe UC and are evaluating biologic options, the LUCENT-3 data strengthens the case for mirikizumab in several ways. First, it is now the IL-23 inhibitor with the longest published randomised extension data in UC. Second, the durability signal is among the strongest in the class. Third, the specific endoscopic and histologic remission rates at 4 years suggest deep, sustained mucosal healing — not just symptom masking.',
          'Mirikizumab is currently approved in the US and EU under the brand name Omvoh. It is administered as an IV induction followed by a subcutaneous maintenance injection — a standard induction-to-SC path that simplifies long-term dosing.',
          'None of this replaces a detailed conversation with your gastroenterologist. Treatment choice depends on your disease history, prior biologic exposure, comorbidities, payer coverage, and personal preferences. But if your GI is comparing IL-23 options, you can now bring the 4-year durability data to that conversation and ask: what is the comparable data for the alternative?',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is mirikizumab (Omvoh) and how does it work?',
        answer: 'Mirikizumab is an IL-23 inhibitor that blocks the p19 subunit of interleukin-23, a key cytokine driving intestinal inflammation in UC. By blocking IL-23, it dampens the Th17 inflammatory pathway without broad immunosuppression. It is given as IV induction infusions followed by subcutaneous maintenance injections every 4 weeks.',
      },
      {
        question: 'What does 77.7% clinical remission at 4 years mean in practice?',
        answer: 'It means that of patients who achieved clinical remission at week 52, about 4 in 5 were still in clinical remission at the 4-year mark. Clinical remission in LUCENT trials means no rectal bleeding and very low stool frequency (Mayo score ≤1 with all subscores ≤1). This is an observed-case analysis, so it reflects patients who remained in the trial — an important caveat, but also the most clinically relevant group.',
      },
      {
        question: 'Does mirikizumab still work if I previously failed a biologic like Humira or Remicade?',
        answer: 'Yes — the LUCENT-3 data showed similar efficacy at 4 years across both biologic-naïve and biologic-experienced patients. Prior anti-TNF failure does not meaningfully reduce mirikizumab response because the two drugs work on completely different pathways.',
      },
      {
        question: 'Are there any new long-term safety concerns at 4 years?',
        answer: 'No. LUCENT-3 reported no new safety signals over 160+ weeks of long-term exposure (835 patient-years). The safety profile at 4 years mirrors that seen in the original induction and maintenance trials.',
      },
      {
        question: 'What is bowel urgency remission and why does it matter?',
        answer: 'Bowel urgency is the sudden, uncontrollable urge to rush to a toilet — often the most disabling symptom of active UC. LUCENT-3 showed 73.6% urgency remission and 92.9% clinically meaningful improvement in urgency at 4 years. This translates directly to whether patients can travel, work, socialise, and sleep normally.',
      },
    ],
    references: [
      {
        label: 'Sands BE et al. Mirikizumab four-year sustained and durable efficacy and safety in ulcerative colitis: Final findings from the LUCENT-3 OLE. Inflamm Bowel Dis. 2026 Mar. PMID: 41777218',
        href: 'https://pubmed.ncbi.nlm.nih.gov/41777218/',
      },
      {
        label: 'D\'Haens G et al. LUCENT-2: Mirikizumab maintenance remission 49.9% at week 40. Lancet. 2023.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/36774166/',
      },
      {
        label: 'Danese S et al. LUCENT-1 induction trial data. Lancet. 2022.',
        href: 'https://pubmed.ncbi.nlm.nih.gov/35644166/',
      },
    ],
    relatedSlugs: ['jak-inhibitors-uc', 'biologics-for-uc-compared', 'fmt-remission-meta-analysis-2026'],
  },
  {
    slug: 'curcumin-qingdai-uc-rct-2024',
    title: '50% Remission in 8 Weeks: Curcumin + QingDai Delivered One of the Strongest Non-Steroid UC Signals in a Placebo RCT',
    description: 'A 2024 placebo-controlled RCT found that an oral curcumin-QingDai combination achieved 50% clinical remission in active ulcerative colitis vs 8% on placebo by week 8. Here is what the trial means if you are desperate for steroid-free control.',
    category: 'Supplements',
    readTime: '11 min read',
    datePublished: '2026-03-27',
    intro: 'If you are stuck in the UC loop — flare, prednisone, side effects, partial improvement, flare again — this trial is the kind of data you screenshot and send to your family. In a randomised placebo-controlled study, 50% of active UC patients taking a curcumin-QingDai combination reached clinical remission in 8 weeks, compared with just 8% on placebo. That is not a tiny signal. That is a major gap in outcomes, in a disease where most people are told to settle for “some improvement.”',
    keyPoints: [
      'Clinical remission at week 8: 50% with CurQD vs 8% with placebo (P = 0.01).',
      'Clinical response: 85.7% with CurQD vs 30.7% with placebo (P < 0.001).',
      'Endoscopic improvement: 75% vs 20% (P = 0.036), showing objective mucosal benefit, not just symptom placebo effect.',
      'No major safety signal difference was seen between CurQD and placebo in this short trial.',
    ],
    sections: [
      {
        title: 'Why this result matters to real people, not just researchers',
        paragraphs: [
          'UC patients do not care about elegant mechanisms. They care about whether they can leave the house without mapping every bathroom, eat without fear, and stop depending on repeated steroid tapers that wreck sleep, mood, weight, skin, and bones. So let us translate the trial result into plain language: in this study, people on CurQD were about six times more likely to hit clinical remission at 8 weeks than people on placebo (50% vs 8%).',
          'That magnitude is exactly why this paper is commercially and clinically interesting. Most adjunct interventions in UC produce small incremental gains. This one produced a large absolute delta in remission, plus a strong endoscopic signal. If a patient in the middle of a flare sees 50% vs 8%, they understand the message instantly: this could materially change my odds.',
        ],
        callout: '50% remission vs 8% placebo is the kind of outcome gap that gets attention because it changes patient-level probability, not just p-values.',
      },
      {
        title: 'What the trial actually did',
        paragraphs: [
          'Ben-Horin and colleagues ran a two-part programme, with the core efficacy data coming from a randomised, double-blind, placebo-controlled trial in active UC patients in Israel and Greece. Participants had active disease by symptom and objective measures, then were randomised 2:1 to enteric-coated CurQD 3 g/day or placebo for 8 weeks.',
          'The co-primary endpoint required meaningful clinical and objective improvement. They also reported key secondary outcomes that matter to patients and clinicians: clinical response rates, clinical remission rates, calprotectin reduction, and endoscopic improvement. This design is important because it reduces the chance that the whole result is driven by expectation or symptom-report bias alone.',
          'At week 8, CurQD beat placebo across the core outcomes. Clinical response occurred in 85.7% vs 30.7%. Clinical remission occurred in 50% vs 8%. Endoscopic improvement occurred in 75% vs 20%. Even the biomarker trend favored CurQD. In short: symptoms improved and the colon looked better.',
        ],
      },
      {
        title: 'The steroid-free angle: why this is the real hook',
        paragraphs: [
          'The ICP for UC content is not asking for another abstract. They are asking: “How do I get out of this prednisone trap?” This paper matters because it suggests a non-steroid adjunct strategy can produce large remission and response gains in active disease. Nobody sane is saying this replaces your GI specialist or replaces escalation when severe disease demands it. But as an add-on strategy, this is exactly the kind of evidence patients are starving for.',
          'Steroids are fast, but they are not a long-term plan. The cumulative toxicity is real: insomnia, anxiety, depression, glucose dysregulation, blood pressure effects, bone loss, infection risk, and the psychological crash when tapering fails. Any intervention that can improve odds of remission without increasing steroid burden deserves serious attention.',
          'This is where CurQD becomes strategically relevant: it may help close the gap between “partial control” and meaningful remission, which is often the difference between constant urgency and having a normal workday again.',
        ],
        callout: 'People do not want “better than baseline.” They want steroid-free normal life. This trial pushes in that direction.',
      },
      {
        title: 'Mechanism without the fluff: why CurQD might work',
        paragraphs: [
          'Curcumin has known anti-inflammatory activity (including NF-kB-related signaling effects), and QingDai has been investigated for immunomodulatory and mucosal effects. The trial also reported unique up-regulation of mucosal CYP1A1 expression with CurQD, supporting aryl hydrocarbon receptor pathway engagement. Translation: this is not just folklore or supplement marketing copy; there is plausible biologic activity at the tissue level.',
          'Does mechanism prove clinical efficacy? No. Outcomes do. But when you see both strong clinical outcomes and plausible tissue-level mechanism, confidence increases that you are seeing a real therapeutic effect rather than random noise.',
        ],
      },
      {
        title: 'Limitations you should know before you get overexcited',
        paragraphs: [
          'First, the randomised sample was small (42 patients). Small trials can overestimate effect size and need replication. Second, this was an 8-week induction window for the placebo-controlled phase, so long-term durability and relapse prevention require further study. Third, this was an adjunct strategy in active UC, not a proof that supplements alone can replace evidence-based medical treatment in moderate-to-severe disease.',
          'Also, product quality in the real world is messy. The trial used a defined enteric-coated formulation and dosing protocol. Over-the-counter copycat products are inconsistent in bioavailability and purity. If you discuss this with your GI team, formulation and quality control matter more than marketing claims.',
        ],
      },
      {
        title: 'Practical next steps if you are exhausted by trial-and-error',
        paragraphs: [
          'Bring this paper to your gastroenterologist and have an adult conversation: where does an adjunct like CurQD fit your current disease activity, current meds, and risk profile? If you are in a severe flare, this is not DIY territory; you need medical supervision and often rapid escalation. If you are in mild-to-moderate active disease with incomplete response, this is where adjunct strategies can be discussed intelligently.',
          'Track objective markers, not vibes. If you test any adjunct intervention, follow stool frequency, urgency, bleeding, fecal calprotectin, and ideally endoscopic outcomes when indicated. The goal is not to “feel a little better for two weeks.” The goal is durable, objective, steroid-sparing remission.',
          'Bottom line: this RCT does not prove CurQD is a universal fix. It does prove there is a serious, evidence-backed non-steroid signal worth discussing now, especially for patients who feel trapped between underperformance and escalation fatigue.',
        ],
        callout: 'Want the full evidence breakdown and where CurQD ranks against biologics, JAKs, and diet strategies? Use the treatment rankings at Colitis Clearly (link in bio).',
      },
    ],
    faqs: [
      {
        question: 'Can CurQD replace my UC medications?',
        answer: 'No. This trial supports CurQD as a promising adjunct strategy, not a replacement for prescribed UC therapy. Medication decisions should be made with your gastroenterologist.',
      },
      {
        question: 'How fast did CurQD work in the trial?',
        answer: 'The placebo-controlled induction phase measured outcomes at 8 weeks, where CurQD showed significantly higher clinical response and remission rates versus placebo.',
      },
      {
        question: 'Was there objective evidence beyond symptom improvement?',
        answer: 'Yes. Endoscopic improvement was significantly better in the CurQD arm (75% vs 20%), which supports a true anti-inflammatory signal in the colon.',
      },
      {
        question: 'Is CurQD safe for everyone with UC?',
        answer: 'Not automatically. Trial safety looked acceptable short-term, but individual risk depends on your health profile, medication interactions, and product quality. Discuss with a licensed clinician before use.',
      },
    ],
    references: [
      { label: 'Ben-Horin S et al. Clin Gastroenterol Hepatol. 2024 (PMID: 37302449)', href: 'https://pubmed.ncbi.nlm.nih.gov/37302449/' },
      { label: 'Danese et al. Upadacitinib phase 3 UC programme (PMID: 35644166)', href: 'https://pubmed.ncbi.nlm.nih.gov/35644166/' },
      { label: 'Cochrane: Vitamin D for IBD (PMID: 37781953)', href: 'https://pubmed.ncbi.nlm.nih.gov/37781953/' },
    ],
    relatedSlugs: ['anti-inflammatory-diet-uc-meta-analysis-2026', 'mediterranean-diet-curcumin-uc-rct-2024', 'jak-inhibitors-uc'],
  },
  {
    slug: 'understanding-ulcerative-colitis',
    title: 'Understanding Ulcerative Colitis: Symptoms, Diagnosis, and Prognosis',
    description: 'A complete guide to ulcerative colitis: what it is, how symptoms present, how diagnosis is confirmed, and what long-term management usually looks like.',
    category: 'Foundations',
    readTime: '11 min read',
    datePublished: '2026-03-22',
    intro: 'Ulcerative colitis is a chronic inflammatory bowel disease that starts in the rectum and spreads proximally through the colon in a continuous pattern. The inflammation is limited mainly to the mucosal lining, which helps explain why bleeding, urgency, and mucus are such common symptoms.',
    keyPoints: [
      'UC is a relapsing-remitting inflammatory disease of the colon, not a one-time infection.',
      'Diagnosis usually combines symptoms, stool testing, colonoscopy, and biopsies.',
      'Modern treatment aims for steroid-free remission and mucosal healing, not just fewer bowel movements.',
    ],
    sections: [
      {
        title: 'What UC actually is',
        paragraphs: [
          'UC is driven by an abnormal immune response in the colon, layered onto a susceptible host and a disrupted intestinal barrier. It does not affect every layer of the bowel wall the way Crohn’s disease can, and it usually begins in the rectum.',
          'Because the disease is confined to the colon, symptoms tend to reflect colonic inflammation: blood in stool, urgency, tenesmus, abdominal pain, and diarrhea. Fatigue, weight loss, and anemia become more prominent when inflammation is more extensive.',
        ],
        callout: 'A person can feel “mostly okay” and still have objective inflammation. That is why biomarkers and endoscopy matter.',
      },
      {
        title: 'Common symptoms and flare patterns',
        paragraphs: [
          'Symptoms vary with disease extent. Proctitis may look like urgency, bleeding, and rectal pain. Pancolitis is more likely to cause frequent loose stools, nocturnal symptoms, cramping, fatigue, and systemic illness.',
        ],
        bullets: [
          'Blood or mucus in stool',
          'Urgency or inability to defer bowel movements',
          'Loose stools, sometimes overnight',
          'Tenesmus, or the feeling that stool is still present',
          'Fatigue, anemia, weight loss, fever in more severe disease',
        ],
      },
      {
        title: 'How diagnosis is confirmed',
        paragraphs: [
          'Doctors typically confirm UC with a combination of history, stool studies, blood work, colonoscopy, and pathology. Stool testing helps rule out infection and can include fecal calprotectin, which tracks intestinal inflammation more directly than symptoms alone.',
          'Colonoscopy matters because it shows the pattern of inflammation and allows biopsies. UC usually shows continuous disease starting in the rectum rather than patchy skip lesions.',
        ],
      },
      {
        title: 'What prognosis looks like now',
        paragraphs: [
          'The prognosis for UC is better than it used to be because treatment goals have shifted from temporary symptom control to objective remission. That means using biomarkers, endoscopy, and escalation when inflammation persists.',
          'Many patients can reach durable remission, but the disease still demands long-term monitoring. Persistent inflammation increases hospitalization, steroid exposure, and colorectal neoplasia risk over time.',
        ],
      },
      {
        title: 'When symptoms are an emergency',
        paragraphs: [
          'High fever, severe abdominal distension, inability to keep up with fluids, severe bleeding, or rapidly worsening bowel frequency can indicate acute severe colitis. That needs prompt medical assessment, not self-management at home.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can ulcerative colitis go away completely?',
        answer: 'Symptoms can disappear for long stretches, but UC is generally considered a chronic disease that requires monitoring even during remission.',
      },
      {
        question: 'Does mild ulcerative colitis always stay mild?',
        answer: 'No. Some patients remain mild for years, but others extend in disease extent or need escalation after repeated flares.',
      },
      {
        question: 'Is bleeding always a sign of UC activity?',
        answer: 'Bleeding is common in active UC, but hemorrhoids, fissures, and infection can also cause it. Persistent bleeding should be discussed with your clinician.',
      },
    ],
    references: [
      { label: 'Mayo Clinic: Ulcerative colitis overview', href: 'https://www.mayoclinic.org/diseases-conditions/ulcerative-colitis' },
      { label: 'Crohn’s & Colitis Foundation: Understanding IBD', href: 'https://www.crohnscolitisfoundation.org' },
      { label: 'Practical positioning of modern advanced therapies in IBD (PMID: 39147217)', href: 'https://pubmed.ncbi.nlm.nih.gov/39147217/' },
    ],
    relatedSlugs: ['uc-vs-crohns-disease', 'uc-flare-management', 'fecal-calprotectin-explained'],
  },
  {
    slug: 'uc-vs-crohns-disease',
    title: 'UC vs Crohn’s Disease: The Key Differences Explained Clearly',
    description: 'A practical comparison of ulcerative colitis and Crohn’s disease, including inflammation pattern, colonoscopy findings, complications, and treatment implications.',
    category: 'Comparisons',
    readTime: '10 min read',
    datePublished: '2026-03-21',
    intro: 'Ulcerative colitis and Crohn’s disease are both inflammatory bowel diseases, but they are not interchangeable. The location of disease, depth of inflammation, complication profile, and response to surgery all differ in ways that matter for diagnosis and treatment planning.',
    keyPoints: [
      'UC affects the colon in a continuous pattern and is mostly limited to the mucosa.',
      'Crohn’s can affect any part of the GI tract and often causes transmural inflammation.',
      'Colectomy cures colonic UC but does not cure Crohn’s disease.',
    ],
    sections: [
      {
        title: 'Location and pattern',
        paragraphs: [
          'UC starts in the rectum and extends continuously through the colon. Crohn’s disease can involve the mouth to the anus, often with skip lesions and terminal ileal disease.',
          'That distribution explains why perianal fistulas strongly suggest Crohn’s and why isolated rectal bleeding with continuous colitis often points toward UC.',
        ],
      },
      {
        title: 'Depth of inflammation',
        paragraphs: [
          'UC mainly inflames the mucosa. Crohn’s is transmural, which means it can tunnel through the bowel wall and cause fistulas, strictures, and penetrating complications.',
          'That difference is central to imaging and surgical decisions. A narrowed, scarred small bowel segment raises a different set of questions than superficial rectosigmoid inflammation.',
        ],
      },
      {
        title: 'Complications and surgery',
        paragraphs: [
          'In UC, colectomy removes the diseased organ and can be curative for colonic inflammation. Surgery in Crohn’s is often necessary, but disease can recur elsewhere after resection.',
        ],
        bullets: [
          'UC: toxic megacolon, bleeding, colon cancer risk with chronic inflammation',
          'Crohn’s: strictures, fistulas, abscesses, malabsorption, more small-bowel disease',
        ],
      },
      {
        title: 'Therapy overlaps, but positioning differs',
        paragraphs: [
          'The major advanced-therapy classes overlap between the diseases, but their positioning is not identical. UC has strong roles for rectal mesalamine and colectomy, while Crohn’s management more often emphasizes small-bowel imaging and transmural complications.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a diagnosis switch from UC to Crohn’s disease later?',
        answer: 'Yes. Some patients are initially labeled UC or indeterminate colitis and are reclassified after additional biopsies, imaging, or surgical pathology.',
      },
      {
        question: 'Is one disease always worse than the other?',
        answer: 'Not reliably. Either disease can be mild or aggressive, but they produce different types of complications.',
      },
    ],
    references: [
      { label: 'Crohn’s & Colitis Foundation: IBD basics', href: 'https://www.crohnscolitisfoundation.org/what-is-ibd' },
      { label: 'Mayo Clinic: Crohn’s disease overview', href: 'https://www.mayoclinic.org/diseases-conditions/crohns-disease' },
      { label: 'PMID: 39147217', href: 'https://pubmed.ncbi.nlm.nih.gov/39147217/' },
    ],
    relatedSlugs: ['understanding-ulcerative-colitis', 'uc-flare-management', 'biologics-for-uc-compared'],
  },
  {
    slug: 'uc-flare-management',
    title: 'UC Flare Management: What to Do, What to Track, and When to Call Your Doctor',
    description: 'A science-first guide to ulcerative colitis flare management covering symptom tracking, medication review, stool testing, hydration, diet simplification, and urgent warning signs.',
    category: 'Flare Management',
    readTime: '9 min read',
    datePublished: '2026-03-20',
    intro: 'A flare is not just “more symptoms.” It can reflect active mucosal inflammation, infection, medication interruption, or, less commonly, a non-inflammatory overlap such as bile acid diarrhea or IBS-like symptoms. The first job is not to guess. It is to get objective quickly.',
    keyPoints: [
      'Do not assume every flare is a medication failure before checking for infection and inflammatory activity.',
      'Track stool frequency, bleeding, nocturnal symptoms, fever, hydration, and weight.',
      'Escalating prednisone without a plan can create a steroid loop instead of real disease control.',
    ],
    sections: [
      {
        title: 'Start with objective information',
        paragraphs: [
          'The most useful early data points are stool frequency, blood, urgency, temperature, heart rate, recent antibiotic exposure, and whether you are waking at night to use the bathroom. Fecal calprotectin, CRP, stool pathogen testing, and sometimes endoscopy help sort inflammation from mimics.',
        ],
      },
      {
        title: 'Medication review comes next',
        paragraphs: [
          'Many flares start after underdosing, missed rectal therapy, delayed infusions, or stopping maintenance therapy because symptoms briefly improved. A real medication review is more useful than asking whether the drug “should still be working.”',
        ],
        bullets: [
          'Check whether oral and rectal medications are both being used as prescribed',
          'Confirm infusion or injection timing',
          'Review recent NSAID exposure',
          'Ask whether stool infection testing is needed before steroid escalation',
        ],
      },
      {
        title: 'Diet during a flare should reduce friction, not promise a cure',
        paragraphs: [
          'During high-output flares, many patients tolerate lower-residue foods, higher fluid intake, and simpler meals better. That can reduce mechanical irritation, but it does not replace anti-inflammatory treatment.',
          'If vomiting, dizziness, severe weakness, or poor urine output appear, dehydration may be overtaking the situation.',
        ],
      },
      {
        title: 'When to call urgently',
        paragraphs: [
          'Escalating abdominal pain, marked distension, high fever, inability to maintain fluids, or large-volume bleeding need urgent assessment. Acute severe UC can deteriorate quickly and sometimes requires hospitalization, IV steroids, rescue therapy, or surgery.',
        ],
        callout: 'A flare that is waking you multiple times nightly, driving tachycardia, or causing visible decline should not be managed by messaging alone.',
      },
    ],
    faqs: [
      {
        question: 'Should I stop eating fiber during every flare?',
        answer: 'Not automatically. Some people tolerate less residue during an active flare, but rigid restriction can also worsen nutrition. The right approach depends on severity and your prior tolerance.',
      },
      {
        question: 'Can I increase steroids on my own?',
        answer: 'Steroid adjustments should be guided by your treating team whenever possible because infection, dehydration, and hospitalization thresholds matter.',
      },
    ],
    references: [
      { label: 'Crohn’s & Colitis Foundation: Flare and symptom resources', href: 'https://www.crohnscolitisfoundation.org' },
      { label: 'Practical positioning of modern advanced therapies (PMID: 39147217)', href: 'https://pubmed.ncbi.nlm.nih.gov/39147217/' },
      { label: 'PMID: 28539226', href: 'https://pubmed.ncbi.nlm.nih.gov/28539226/' },
    ],
    relatedSlugs: ['understanding-ulcerative-colitis', 'uc-diet-guide', 'fecal-calprotectin-explained'],
  },
  {
    slug: 'uc-diet-guide',
    title: 'UC Diet Guide: What the Evidence Says About Mediterranean, Low-FODMAP, Fiber, and SCD',
    description: 'A careful review of diet evidence in ulcerative colitis, including what can improve symptoms, what might support remission, and what remains unproven.',
    category: 'Diet & Lifestyle',
    readTime: '12 min read',
    datePublished: '2026-03-19',
    intro: 'Diet is one of the most emotionally loaded parts of ulcerative colitis care. Patients want something concrete they can control. The science supports that food can change symptoms and probably influences the gut ecosystem, but it does not support turning every dietary pattern into a cure claim.',
    keyPoints: [
      'Mediterranean-style eating has the most sensible long-term evidence base for overall health and inflammatory disease support.',
      'Low-FODMAP is mainly a symptom strategy for bloating and functional overlap, not a proven anti-inflammatory UC treatment.',
      'Fiber tolerance depends on disease activity, extent, and whether a patient is in flare or remission.',
    ],
    sections: [
      {
        title: 'Mediterranean-style eating is the most defensible default',
        paragraphs: [
          'A Mediterranean pattern emphasizes fruits, vegetables, legumes, fish, olive oil, and less ultra-processed food. In UC, it is best viewed as a reasonable long-term pattern that may support microbial diversity, cardiometabolic health, and lower inflammatory load overall.',
        ],
      },
      {
        title: 'Low-FODMAP can help symptoms without treating inflammation directly',
        paragraphs: [
          'Randomized low-FODMAP data in IBD show benefit for bloating, pain, and functional GI symptoms in selected patients, especially when inflammation is otherwise quiescent. That is useful, but it is not the same thing as healing mucosa.',
          'Because low-FODMAP can narrow diet variety, it works best as a temporary, structured strategy rather than a forever rule set.',
        ],
      },
      {
        title: 'Specific carbohydrate diet and elimination plans',
        paragraphs: [
          'Patients often report anecdotal success with SCD or highly restrictive elimination diets. The problem is that the evidence base is much thinner than the confidence with which these diets are often marketed.',
          'If a diet removes entire food groups, the burden of proof should rise. Restriction that leads to weight loss, social isolation, or nutrient deficits is not a free intervention.',
        ],
      },
      {
        title: 'Fiber is not one thing',
        paragraphs: [
          'Some patients hear “avoid fiber” and apply it permanently. That is usually too blunt. Soluble fiber sources may be tolerated in remission, while rough or bulky plant material can be harder to handle during active bleeding or high-output disease.',
        ],
        bullets: [
          'During active flare: simplify meals and focus on hydration, protein, and tolerated foods',
          'During remission: re-expand diet gradually if possible',
          'Work with a GI dietitian when food fear is starting to drive decisions',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is there one best diet for ulcerative colitis?',
        answer: 'No single diet works for every patient. Mediterranean-style eating is the best broad default, while targeted tools like low-FODMAP can help symptoms in selected cases.',
      },
      {
        question: 'Can diet replace medication if symptoms improve?',
        answer: 'Not safely. Symptoms and inflammation do not always move together, so medication changes need clinical oversight and objective monitoring.',
      },
    ],
    references: [
      { label: 'Low-FODMAP challenge trial in IBD (PMID: 28525543)', href: 'https://pubmed.ncbi.nlm.nih.gov/28525543/' },
      { label: 'Crohn’s & Colitis Foundation nutrition resources', href: 'https://www.crohnscolitisfoundation.org' },
      { label: 'Mayo Clinic: UC management overview', href: 'https://www.mayoclinic.org/diseases-conditions/ulcerative-colitis' },
    ],
    relatedSlugs: ['uc-flare-management', 'understanding-ulcerative-colitis', 'fecal-calprotectin-explained'],
  },
  {
    slug: 'biologics-for-uc-compared',
    title: 'Biologics for UC Compared: Anti-TNF, Vedolizumab, Ustekinumab, and IL-23 Options',
    description: 'A comparative guide to UC biologics covering anti-TNF drugs, vedolizumab, ustekinumab, mirikizumab, and risankizumab, with pivotal trial numbers and practical positioning.',
    category: 'Treatments',
    readTime: '13 min read',
    datePublished: '2026-03-18',
    intro: 'Biologics changed the ceiling of ulcerative colitis treatment, but choosing among them is still less about finding a single “best drug” and more about matching mechanism, speed, safety, prior drug exposure, and patient preference.',
    keyPoints: [
      'Infliximab remains a major anti-TNF benchmark with strong ACT-trial induction data.',
      'Vedolizumab is gut-selective and often favored when safety margin matters.',
      'IL-23 targeting is expanding quickly, giving more non-anti-TNF options after prior biologic exposure.',
    ],
    sections: [
      {
        title: 'Anti-TNF biologics',
        paragraphs: [
          'Infliximab, adalimumab, and golimumab all block TNF-alpha, but their delivery models differ. Infliximab is infusion-based and often chosen for severe disease or inpatient rescue pathways. Adalimumab and golimumab offer home injections.',
        ],
        bullets: [
          'Infliximab: ACT trials, week-8 remission roughly 30-35%',
          'Adalimumab: ULTRA trials, week-8 remission roughly 17-19%',
          'Golimumab: PURSUIT program, remission around 18% at week 6',
        ],
      },
      {
        title: 'Gut-selective and cytokine-targeted options',
        paragraphs: [
          'Vedolizumab blocks alpha4beta7 trafficking and largely limits its action to the gut. Ustekinumab blocks IL-12/23. Mirikizumab and risankizumab focus more specifically on IL-23 p19, reflecting the field’s move toward narrower cytokine targeting.',
          'The practical tradeoff is usually speed versus safety nuance versus prior exposure. A patient with infection concerns may think about vedolizumab differently from someone who needs the fastest possible oral rescue.',
        ],
      },
      {
        title: 'How clinicians usually position biologics',
        paragraphs: [
          'Positioning depends on disease severity, hospitalization risk, biomarker burden, extraintestinal disease, and what has already failed. The wrong question is often “Which biologic is best?” The better question is “Which one fits this patient’s disease state and risk profile right now?”',
        ],
        bullets: [
          'Need for hospital-level rescue or very fast control may push decisions toward infliximab or a JAK inhibitor',
          'Safety-sensitive patients often prompt serious vedolizumab discussion',
          'Prior anti-TNF failure makes mechanism switching more attractive',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is vedolizumab safer because it is gut-selective?',
        answer: 'Its safety profile is one reason it is often favored, but “safer” never means risk-free. Infection history and comorbidities still matter.',
      },
      {
        question: 'Should biologics be judged only by remission percentages from different trials?',
        answer: 'No. Cross-trial comparisons are imperfect because patient populations, prior drug exposure, and endpoints differ across studies.',
      },
    ],
    references: [
      { label: 'ACT 1/2 infliximab trial (PMID: 16339095)', href: 'https://pubmed.ncbi.nlm.nih.gov/16339095/' },
      { label: 'ULTRA adalimumab trial (PMID: 22062358)', href: 'https://pubmed.ncbi.nlm.nih.gov/22062358/' },
      { label: 'GEMINI 1 vedolizumab trial (PMID: 23964932)', href: 'https://pubmed.ncbi.nlm.nih.gov/23964932/' },
      { label: 'UNIFI ustekinumab trial (PMID: 31553833)', href: 'https://pubmed.ncbi.nlm.nih.gov/31553833/' },
      { label: 'Risankizumab phase 3 UC trials (PMID: 39037800)', href: 'https://pubmed.ncbi.nlm.nih.gov/39037800/' },
    ],
    relatedSlugs: ['jak-inhibitors-uc', 'fecal-calprotectin-explained', 'uc-flare-management'],
  },
  {
    slug: 'jak-inhibitors-uc',
    title: 'JAK Inhibitors in UC: Tofacitinib vs Upadacitinib',
    description: 'A focused comparison of tofacitinib and upadacitinib in ulcerative colitis, including mechanism, speed, efficacy, monitoring, and safety warnings.',
    category: 'Treatments',
    readTime: '10 min read',
    datePublished: '2026-03-17',
    intro: 'JAK inhibitors are oral small molecules that can work quickly in ulcerative colitis because they interrupt intracellular cytokine signaling rather than extracellular targets. That speed is part of their appeal and part of why the safety conversation around them matters so much.',
    keyPoints: [
      'Tofacitinib is the older oral JAK option in UC; upadacitinib is the newer, more selective JAK1 agent.',
      'Both can work quickly, which makes them attractive in patients who need fast control.',
      'The boxed-warning conversation is central, not optional.',
    ],
    sections: [
      {
        title: 'Mechanism and speed',
        paragraphs: [
          'Unlike biologics, JAK inhibitors act inside the cell. They blunt signaling from multiple inflammatory cytokines, which helps explain why some patients notice improvement rapidly.',
        ],
      },
      {
        title: 'What the pivotal trials showed',
        paragraphs: [
          'OCTAVE established tofacitinib as a credible oral option, with around 59% response and roughly 19% remission at week 8 in the brief. Upadacitinib pushed efficacy higher in U-ACHIEVE and related studies, with roughly 74% response and 26% remission at week 8.',
        ],
      },
      {
        title: 'Safety is the deciding conversation',
        paragraphs: [
          'JAK inhibitors come with warnings around serious infection, shingles, thrombosis, major adverse cardiovascular events, and malignancy in selected populations. That does not make them bad drugs. It means patient selection and shared decision-making matter.',
        ],
        bullets: [
          'Screen for TB and hepatitis before treatment',
          'Review shingles vaccination status when appropriate',
          'Track CBC, liver enzymes, and lipids',
          'Think carefully in older patients with cardiovascular or thrombotic risk',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are JAK inhibitors stronger than biologics?',
        answer: 'They can produce very strong and often fast results, but the right comparison depends on disease severity, prior therapies, and a patient’s safety profile.',
      },
      {
        question: 'Do JAK inhibitors work if anti-TNF drugs failed?',
        answer: 'They can, which is one reason they are important in sequencing conversations for moderate to severe UC.',
      },
    ],
    references: [
      { label: 'OCTAVE tofacitinib trial (PMID: 28467869)', href: 'https://pubmed.ncbi.nlm.nih.gov/28467869/' },
      { label: 'Upadacitinib Lancet trial (PMID: 35644166)', href: 'https://pubmed.ncbi.nlm.nih.gov/35644166/' },
      { label: 'FDA labeling update for upadacitinib', href: 'https://www.accessdata.fda.gov' },
    ],
    relatedSlugs: ['biologics-for-uc-compared', 'uc-flare-management', 'understanding-ulcerative-colitis'],
  },
  {
    slug: 'fecal-calprotectin-explained',
    title: 'Fecal Calprotectin Explained: What Your Number Can and Cannot Tell You',
    description: 'A clear guide to fecal calprotectin in ulcerative colitis, including what the marker measures, how clinicians use trends, and how to interpret common thresholds carefully.',
    category: 'Biomarkers',
    readTime: '9 min read',
    datePublished: '2026-03-16',
    intro: 'Fecal calprotectin is one of the most useful noninvasive biomarkers in ulcerative colitis because it reflects intestinal neutrophil activity far more directly than symptoms alone. It is not perfect, but it is often the fastest way to decide whether “I feel off” likely means active inflammation.',
    keyPoints: [
      'Calprotectin is more informative when tracked over time than when treated as a one-off score.',
      'Low values make significant colonic inflammation less likely, but they do not replace clinical judgment.',
      'Very high values support active inflammation and often justify escalation in testing or treatment.',
    ],
    sections: [
      {
        title: 'What calprotectin measures',
        paragraphs: [
          'Calprotectin is a protein released from neutrophils. When the colonic lining is inflamed, neutrophils move into the stool and the number rises. That is why the test is much more tied to intestinal inflammation than anxiety, stress, or noninflammatory symptom overlap.',
        ],
      },
      {
        title: 'How to think about the ranges',
        paragraphs: [
          'Different labs and studies use different cutoffs, so rigid internet rules are risky. In practice, many clinicians treat values under about 50 micrograms per gram as reassuring, values above 150 to 250 as increasingly suspicious for active inflammation, and much higher numbers as strongly supportive of ongoing disease activity.',
          'The real key is trend plus context. A patient rising from 60 to 280 with new urgency is different from a stable patient at 120 who feels well.',
        ],
        callout: 'Use the same lab when possible. Trend noise is smaller when the assay stays consistent.',
      },
      {
        title: 'What the marker cannot do',
        paragraphs: [
          'Calprotectin cannot tell you the full extent of disease, the exact endoscopic score, or whether symptoms are being driven by infection, pouchitis, IBS overlap, or a structural problem. It also can be affected by NSAID use and other inflammatory processes.',
        ],
      },
      {
        title: 'Why clinicians care about repeat values',
        paragraphs: [
          'Studies link lower fecal calprotectin with mucosal and even histologic healing. That makes it useful for confirming that “better” really means less inflammation, not just temporary symptom suppression.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is one high calprotectin value enough to change treatment?',
        answer: 'Sometimes it triggers next steps, but treatment changes usually depend on symptoms, infection testing, trend, and sometimes endoscopy.',
      },
      {
        question: 'Can calprotectin stay high when symptoms improve?',
        answer: 'Yes. That mismatch is exactly why biomarkers are valuable in UC.',
      },
    ],
    references: [
      { label: 'PMID: 29225617', href: 'https://pubmed.ncbi.nlm.nih.gov/29225617/' },
      { label: 'PMID: 35583193', href: 'https://pubmed.ncbi.nlm.nih.gov/35583193/' },
      { label: 'PMID: 26212346', href: 'https://pubmed.ncbi.nlm.nih.gov/26212346/' },
      { label: 'PMID: 29396129', href: 'https://pubmed.ncbi.nlm.nih.gov/29396129/' },
    ],
    relatedSlugs: ['understanding-ulcerative-colitis', 'uc-flare-management', 'biologics-for-uc-compared'],
  },
  {
    slug: 'fmt-anti-inflammatory-diet-uc-remission',
    title: 'FMT Plus an Anti-Inflammatory Diet Beat Standard Therapy in UC — And Diet Alone Maintained Remission for a Year',
    description: 'A landmark RCT showed that combining fecal microbiota transplantation with an anti-inflammatory diet put UC patients into remission at nearly double the rate of standard treatment — and diet alone kept that remission going for 12 months. Here is what the trial found and what it means for your gut.',
    category: 'Diet & Microbiome',
    readTime: '10 min read',
    datePublished: '2026-03-22',
    intro: 'If your gastroenterologist told you that diet does not matter in ulcerative colitis, this randomised controlled trial published in Gut is going to make you want a second opinion. Researchers at AIIMS New Delhi showed that combining multidonor fecal microbiota transplantation (FMT) with a structured anti-inflammatory diet beat optimised standard medical therapy on every single outcome — clinical response, clinical remission, and deep remission. Then, after the FMT was finished, diet alone continued to maintain deep remission over 48 weeks while the standard-therapy arm hit zero. Yes, zero.',
    keyPoints: [
      'FMT combined with anti-inflammatory diet produced 65.7% clinical response vs 35.5% with standard therapy — an odds ratio of 3.5.',
      'Deep remission (both clinical and endoscopic) reached 36.4% in the FMT-diet group vs only 8.7% with standard treatment — an odds ratio of 6.0.',
      'After FMT ended, diet alone maintained deep remission in 25% of patients at 48 weeks versus 0% in the standard therapy group.',
    ],
    sections: [
      {
        title: 'Why this RCT matters more than it gets credit for',
        paragraphs: [
          'Most UC diet research is observational garbage. Someone eats fewer processed foods, feels better, and calls it a protocol. This trial is different: it is a registered RCT (ISRCTN15475780), it randomised 73 patients with endoscopically confirmed, mild-to-moderate UC into two arms, and it followed them for a full 48 weeks. The outcomes were not self-reported symptoms — they included colonoscopic assessment of mucosal healing.',
          'Published in Gut in December 2022 (Kedia et al., PMID 35973787), the study ran at one of India\'s top academic centres. Patients were in their mid-30s on average, had active disease for roughly four years, and a third of them had pancolitis. This was not a cherry-picked, mild crowd.',
        ],
        callout: 'Gut is one of the most cited gastroenterology journals in the world. An RCT there with an OR of 6.0 for deep remission is not something you skip past.',
      },
      {
        title: 'What the FMT-AID arm actually did',
        paragraphs: [
          'Patients in the intervention arm received seven weekly colonoscopic infusions of freshly prepared FMT from multiple rural donors. This multidonor approach matters: research increasingly suggests that donor diversity drives FMT efficacy in IBD, because you are trying to seed a more stable, diverse microbiome, not just transplant one person\'s bacteria.',
          'Simultaneously, patients followed a structured anti-inflammatory diet. The diet emphasised vegetables, fruits, whole grains, lean proteins, and omega-3-rich foods while reducing ultra-processed foods, refined carbohydrates, and red meat — broadly aligned with a Mediterranean anti-inflammatory eating pattern. The diet was not a fad; it was designed to reduce bacterial endotoxin load, support gut barrier function, and shift the microbiome toward anti-inflammatory species.',
          'After week 8, FMT stopped. Patients in the FMT-AID arm continued only on their baseline medications and the anti-inflammatory diet through week 48.',
        ],
      },
      {
        title: 'The numbers that should be on every UC forum',
        paragraphs: [
          'At 8 weeks, clinical response — meaning a meaningful drop in symptom score — occurred in 65.7% of the FMT-AID group versus 35.5% in the standard-therapy group. Odds ratio: 3.5. That is not a marginal statistical blip; that is nearly doubling the response rate.',
          'Clinical remission at 8 weeks: 60% versus 32.3%, odds ratio 3.2. More than half the patients in the intervention arm were in remission after two months.',
          'Deep remission — the holy grail that requires both clinical and endoscopic healing — reached 36.4% in the FMT-AID group versus 8.7% in standard therapy, odds ratio 6.0. To put that in perspective: the same endpoint for some biologics at week 8 sits around 16–26%. An odds ratio of 6.0 for deep remission in a dietary and microbiome intervention is genuinely striking.',
        ],
        bullets: [
          '65.7% clinical response (FMT-AID) vs 35.5% (standard therapy) — OR 3.5, p=0.01',
          '60% clinical remission (FMT-AID) vs 32.3% (standard therapy) — OR 3.2, p=0.02',
          '36.4% deep remission (FMT-AID) vs 8.7% (standard therapy) — OR 6.0, p=0.03',
          '25% maintained deep remission at 48 weeks on diet alone vs 0% with standard therapy, p=0.007',
        ],
        callout: 'Deep remission at 48 weeks: 25% on diet alone vs 0% on standard therapy. That is not a rounding error. That is a statistically significant difference in favour of the diet group.',
      },
      {
        title: 'What the microbiome has to do with your next flare',
        paragraphs: [
          'Ulcerative colitis is not just a colon problem — it is a gut ecosystem problem. Patients with UC consistently show reduced microbial diversity, lower populations of short-chain fatty acid-producing bacteria like Faecalibacterium prausnitzii and Roseburia, and elevated pro-inflammatory species. This dysbiosis weakens the mucosal barrier, ramps up immune activation, and creates a cycle that diet and conventional medication alone often fail to break.',
          'FMT interrupts this cycle by flooding the colon with a diverse donor microbiome. When it works, it can shift the resident community toward something more resilient. The anti-inflammatory diet then acts like fertiliser for those new species — feeding the short-chain fatty acid producers that reduce mucosal inflammation and tighten the epithelial barrier.',
          'This is why the combination outperformed FMT alone in prior studies. The diet creates conditions where the transplanted microbiome can actually survive and compete against the pathobionts driving inflammation.',
        ],
      },
      {
        title: 'The anti-inflammatory diet: what it actually looks like',
        paragraphs: [
          'The trial did not publish a precise meal plan, but based on the dietary framework described and the broader anti-inflammatory diet literature, the principles are consistent: high fibre from diverse plant sources, fatty fish at least twice a week, olive oil as the primary cooking fat, minimal ultra-processed foods, no refined sugar spikes, and reduced red and processed meat.',
          'This overlaps significantly with the Mediterranean diet and the IBD Anti-Inflammatory Diet (IBD-AID) developed at UMass Medical School. The IBD-AID specifically targets UC and Crohn\'s by emphasising prebiotic foods (oats, bananas, asparagus, Jerusalem artichokes) that feed beneficial bacteria, combined with probiotics and anti-inflammatory fats.',
          'What this is not: a low-FODMAP diet, which is designed for IBS and can actually starve the beneficial bacteria you want to feed. It is also not the Specific Carbohydrate Diet (SCD), though there is some evidence for SCD in pediatric IBD. The anti-inflammatory framework prioritises microbiome diversity and barrier support over strict exclusion.',
        ],
        bullets: [
          'Diverse vegetables and fruits — aim for 30+ different plants per week',
          'Fatty fish (salmon, sardines, mackerel) at least twice weekly for EPA and DHA',
          'Extra-virgin olive oil as the main cooking fat for oleocanthal and oleic acid',
          'Whole grains over refined: oats, barley, brown rice, quinoa',
          'Legumes when tolerated — lentils, chickpeas, and beans feed butyrate producers',
          'Minimise ultra-processed foods, refined sugar, and seed oils high in omega-6',
        ],
      },
      {
        title: 'What this means if you are in the middle of a flare right now',
        paragraphs: [
          'This trial was conducted in mild-to-moderate UC. If you are in a severe flare — high fever, significant bleeding, hospitalisation territory — diet is not your first intervention. Get assessed. But if you are managing mild to moderate disease, perpetually cycling through mesalamine, occasional steroids, and feeling like your GI is just playing whack-a-mole, this trial offers a different model.',
          'The model is: address the microbiome and the diet simultaneously, not sequentially. Not FMT, then wait, then maybe tweak diet. Together, aggressively, for eight weeks minimum.',
          'FMT is not yet FDA-approved for UC (it is approved for recurrent C. difficile infection), but clinical trials are ongoing and it is available in some IBD centres as part of research protocols. The diet piece, however, has zero barriers to starting tonight.',
        ],
        callout: 'You cannot get a multidonor FMT next week, but you can start the anti-inflammatory diet today. That same diet maintained deep remission for 12 months in this trial.',
      },
      {
        title: 'The honest limitations of this trial',
        paragraphs: [
          'This was an open-label trial — patients and investigators knew which group they were in. That is a real limitation for subjective outcomes like symptom scores. The sample size was 66 patients in the final analysis, which is small. The FMT was colonoscopic and delivered over seven weeks; that is not scalable or accessible for most people in most countries right now.',
          'The maintenance phase was observational: researchers tracked patients who responded at 8 weeks, and the diet group just continued on diet. It was not a separate randomisation into diet versus no diet at 48 weeks, which would have been a stronger design.',
          'But the endoscopic outcomes are hard to fake and the p-values are robust. An OR of 6.0 for deep remission at 8 weeks with p=0.03, and a 25% vs 0% deep remission maintenance at 48 weeks with p=0.007, are not results that disappear with minor analytical changes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is FMT approved for ulcerative colitis?',
        answer: 'Not currently in the US or EU for UC specifically. FMT is FDA-approved for recurrent C. difficile infection. UC trials are ongoing. Some academic IBD centres offer it in research contexts.',
      },
      {
        question: 'What is an anti-inflammatory diet for UC?',
        answer: 'A pattern emphasising diverse vegetables, fruits, fatty fish, olive oil, whole grains, and legumes while minimising ultra-processed foods and refined sugars. It overlaps with the Mediterranean diet and IBD-AID frameworks.',
      },
      {
        question: 'Can diet alone treat active UC?',
        answer: 'Diet is not a replacement for proven therapies in active disease. But as this trial shows, it can significantly support remission alongside medical treatment — and may help maintain it. Always discuss changes with your gastroenterologist.',
      },
      {
        question: 'What happened to patients who got FMT but did not respond at 8 weeks?',
        answer: 'Non-responders were not followed in the long-term maintenance phase. The 48-week data applies only to those who had responded clinically by week 8.',
      },
      {
        question: 'How many donors were used for the FMT?',
        answer: 'Multiple rural donors, which the researchers argued provides greater microbial diversity than single-donor FMT — potentially explaining better outcomes.',
      },
    ],
    references: [
      { label: 'Kedia et al. Gut 2022 (PMID: 35973787)', href: 'https://pubmed.ncbi.nlm.nih.gov/35973787/' },
      { label: 'IBD-AID overview — UMass Medical School', href: 'https://www.umassmed.edu/nutrition/ibd/ibdaid/' },
      { label: 'Moayyedi et al. Gastroenterology 2015 — FMT RCT in UC (PMID: 25857665)', href: 'https://pubmed.ncbi.nlm.nih.gov/25857665/' },
      { label: 'Paramsothy et al. Lancet 2017 — Multidonor FMT in active UC (PMID: 28214091)', href: 'https://pubmed.ncbi.nlm.nih.gov/28214091/' },
      { label: 'Swaminath et al. IBD 2017 — Mediterranean diet and IBD (PMID: 28040749)', href: 'https://pubmed.ncbi.nlm.nih.gov/28040749/' },
    ],
    relatedSlugs: ['uc-diet-guide', 'uc-flare-management', 'understanding-ulcerative-colitis'],
  },
  {
    slug: 'anti-inflammatory-diet-uc-meta-analysis-2026',
    title: 'Anti-Inflammatory Diet Makes You 82% More Likely to Respond in Active UC — 6 RCTs',
    description: 'A 2026 meta-analysis of 6 RCTs found that whole-food anti-inflammatory diets increase clinical response in active ulcerative colitis by 82% and slash gut inflammation markers by 210 points. Here is what the evidence actually shows.',
    category: 'Diet',
    readTime: '9 min read',
    datePublished: '2026-03-23',
    intro: 'For years UC patients have been told diet "doesn\'t cause IBD" — which is technically true — and then quietly dismissed when they ask what they should actually eat. A 2026 systematic review and meta-analysis just published in Digestive Diseases and Sciences pooled six randomised controlled trials (359 patients) specifically examining whole-food, anti-inflammatory dietary patterns in UC. The headline result: in patients with active disease, those eating an anti-inflammatory diet were 82% more likely to achieve a clinical response than controls. That is not anecdote. That is a risk ratio of 1.82 with a p-value of 0.004 and zero statistical heterogeneity.',
    keyPoints: [
      'Anti-inflammatory diet increased clinical response in active UC by 82% (RR 1.82, p=0.004, I²=0%)',
      'Gut inflammation marker fecal calprotectin dropped by an average of 210 µg/g during remission (p=0.006)',
      'Effect was in addition to standard medication — this was adjunct therapy, making your drugs work better',
      'No significant impact on relapse in quiescent UC in this analysis, suggesting the benefit is largest during active disease',
    ],
    sections: [
      {
        title: 'What the meta-analysis actually found',
        paragraphs: [
          'Rehmat et al. searched PubMed, Cochrane, Embase, and ClinicalTrials.gov for randomised trials testing anti-inflammatory dietary patterns — not individual supplements — in UC patients. Six RCTs met their criteria, covering 359 patients aged 12 to 75 with mild-to-moderate active UC, quiescent UC, or UC in clinical remission.',
          'The headline finding: among patients with active disease, the anti-inflammatory diet group was 82% more likely to achieve clinical response (RR = 1.82, 95% CI [1.20 to 2.75], p = 0.004). Critically, there was zero heterogeneity across the trials (I² = 0%), meaning the finding was consistent — not driven by one outlier study with an unusual population or protocol.',
          'On top of that, fecal calprotectin (FCP) — one of the most reliable non-invasive markers of intestinal inflammation — dropped by an average of 210 µg/g in the diet groups during remission (MD = −210.01, 95% CI [−359.77 to −60.25], p = 0.006). That is a clinically significant reduction. FCP values above 250 µg/g predict endoscopic inflammation; dropping 210 points can push a patient from "active mucosal disease" territory into a much safer range.',
        ],
        callout: 'An 82% better chance of clinical response is not a rounding error. That is the kind of number that would make a drug company file for FDA approval.',
      },
      {
        title: 'What "anti-inflammatory diet" actually means in these trials',
        paragraphs: [
          'This matters — because "anti-inflammatory" is one of the most abused buzzwords in wellness marketing. In the clinical trials pooled in this meta-analysis, anti-inflammatory diet patterns consistently included: abundant vegetables and fruits (especially dark leafy greens, berries, and cruciferous vegetables), extra-virgin olive oil as the primary fat source, fatty fish (salmon, sardines, mackerel) at least twice weekly, whole grains rather than refined carbohydrates, legumes (lentils, chickpeas, beans), and minimal ultra-processed foods, red meat, refined sugar, and alcohol.',
          'Some trials specifically used the IBD Anti-Inflammatory Diet (IBD-AID), developed at UMass Medical School, which also emphasises pre- and probiotic foods to support microbiome diversity. Others used Mediterranean-style frameworks. The consistent thread is whole food density and the removal of industrial food ingredients that drive gut permeability and mucosal irritation.',
          'What the diets were NOT: fibre-restricted, low-residue, or exclusively liquid. The "low-fibre diet for UC" advice your gastroenterologist may have given you during a flare is a short-term acute management tool, not a long-term dietary strategy. These trials used fibre-rich whole foods during remission and in mild-to-moderate active disease, not against it.',
        ],
      },
      {
        title: 'Why the fecal calprotectin finding is actually more important than it looks',
        paragraphs: [
          'Most UC patients understand their symptoms — bleeding, urgency, pain. Fewer understand their inflammatory burden. Fecal calprotectin is a protein released by white blood cells into the gut lumen during active inflammation. It is measured in a simple stool test and directly reflects mucosal inflammation.',
          'When FCP drops by 210 µg/g, that is not just a number on a lab report improving. It means the gut lining is calming down at the cellular level. It means your GI doctor looking at your next scope is more likely to see a pink, healed mucosa rather than angry, ulcerated tissue. It means your risk of relapse is decreasing.',
          'This FCP reduction was observed during the remission phase of the included trials. In other words: patients who were already in remission and started an anti-inflammatory diet continued suppressing inflammation at the tissue level. That is the holy grail of UC management — maintaining deep remission and keeping the colon quiet between flares.',
        ],
        callout: 'FCP is not a symptomatic score — it is an objective biological measurement. Diet moving FCP by 210 points is the equivalent of a mild medication working inside your gut.',
      },
      {
        title: 'The honest limitations you deserve to know',
        paragraphs: [
          'This meta-analysis pooled only six trials with 359 total patients. That is small. The primary clinical remission outcome was not statistically significant (RR = 1.59, p = 0.21) — likely because the trials were too small and too heterogeneous on remission definitions to detect that signal. The clinical response finding (RR = 1.82, p = 0.004) is stronger partly because response is a broader endpoint.',
          'None of the individual trials or the meta-analysis demonstrated that diet alone can replace proven therapies like mesalamine, biologics, or JAK inhibitors. This is adjunct evidence — diet making your medications work better, not diet as a standalone cure. If you are in a moderate-to-severe flare, you need escalation in your medical therapy alongside dietary changes.',
          'There is also the challenge of blinding. Diet trials cannot be double-blinded. Patients know what they are eating. That introduces bias in self-reported symptom outcomes, though it does not explain the objective FCP reduction (you cannot hallucinate your calprotectin dropping).',
        ],
      },
      {
        title: 'What this means for your treatment strategy',
        paragraphs: [
          'If you are on mesalamine and struggling to maintain remission, this evidence suggests adding an anti-inflammatory dietary pattern is not optional wellness advice — it is a legitimate clinical strategy with RCT-level support. The effect size (RR 1.82) is larger than many secondary interventions doctors currently recommend.',
          'If you are on a biologic and wondering why your response is partial, diet may be the missing piece. The microbiome drives a substantial proportion of intestinal immune signalling, and ultra-processed food diets are documented microbiome disruptors. You can have the best biologic in the world and still have suboptimal outcomes if your diet is feeding inflammatory pathways faster than the drug can suppress them.',
          'The practical steps are not exotic: cut ultra-processed foods aggressively. Add olive oil. Add fatty fish twice a week. Add diverse vegetables. Add fermented foods if tolerated (yogurt, kefir, kimchi — these were components in several IBD-AID studies). Remove refined sugar as a daily habit. This is not a fad. This is the pattern that showed up consistently across six randomised trials.',
          'One more thing: the patients in these trials were on standard medical therapy. Diet was added on top. The 82% improvement in clinical response happened in patients already receiving treatment. The evidence is not about replacing your gastroenterologist — it is about giving you every available tool to stack the odds in your favour.',
        ],
        callout: 'Your GI manages your medications. You manage your fork. This meta-analysis says the fork matters more than most people — including doctors — have been telling you.',
      },
    ],
    faqs: [
      {
        question: 'Can an anti-inflammatory diet replace my UC medication?',
        answer: 'No. The trials in this meta-analysis added dietary changes on top of standard therapy. Diet is a powerful adjunct that can significantly improve your response, but it is not a replacement for proven medical treatments. Never stop medications without discussing with your gastroenterologist.',
      },
      {
        question: 'What is the best anti-inflammatory diet for UC specifically?',
        answer: 'The IBD Anti-Inflammatory Diet (IBD-AID) and Mediterranean dietary patterns have the strongest evidence base. Both emphasise diverse vegetables, fatty fish, olive oil, fermented foods, and whole grains while eliminating ultra-processed foods and refined sugar.',
      },
      {
        question: 'Will a high-fibre anti-inflammatory diet make my UC worse?',
        answer: 'Short-term fibre restriction may be appropriate during a severe acute flare to reduce bowel frequency. However, long-term low-fibre diets are associated with worse UC outcomes and microbiome depletion. The goal is to gradually reintroduce diverse plant fibres during remission.',
      },
      {
        question: 'How long does the anti-inflammatory diet take to work in UC?',
        answer: 'The clinical trials in this meta-analysis ran for 6 to 12 weeks before seeing significant differences. Do not expect overnight changes. Give it 8 weeks of consistent adherence before evaluating whether your symptoms, energy, and biomarkers (like FCP) have shifted.',
      },
      {
        question: 'Does diet affect fecal calprotectin results?',
        answer: 'Yes, significantly. This meta-analysis found a mean reduction of 210 µg/g in FCP with anti-inflammatory diet adherence during remission. FCP is one of the most reliable non-invasive markers of gut inflammation in UC.',
      },
    ],
    references: [
      { label: 'Rehmat M et al. Dig Dis Sci 2026 (PMID: 40797000)', href: 'https://pubmed.ncbi.nlm.nih.gov/40797000/' },
      { label: 'IBD Anti-Inflammatory Diet — UMass Medical School', href: 'https://www.umassmed.edu/nutrition/ibd/ibdaid/' },
      { label: 'Moayyedi et al. Gastroenterology 2015 — FMT RCT in UC', href: 'https://pubmed.ncbi.nlm.nih.gov/25857665/' },
      { label: 'Khalili H et al. — Mediterranean diet and IBD risk (PMID: 31209713)', href: 'https://pubmed.ncbi.nlm.nih.gov/31209713/' },
      { label: 'Limketkai BN et al. Cochrane Review — Dietary interventions in IBD', href: 'https://pubmed.ncbi.nlm.nih.gov/31026337/' },
    ],
    relatedSlugs: ['uc-diet-guide', 'fmt-anti-inflammatory-diet-uc-remission', 'understanding-ulcerative-colitis'],
  },
  {
    slug: 'jak-inhibitors-acute-severe-uc-meta-analysis-2026',
    title: '86.5% Clinical Response in 30 Days: JAK Inhibitors Are Rewriting the Rules for the Worst UC Flares',
    description: 'A 2026 meta-analysis of 35 studies and 664 patients found that upadacitinib achieved an 86.5% short-term clinical response in acute severe ulcerative colitis — with colectomy rates slashed to just 11%. Here\'s what that means for patients facing hospitalisation.',
    category: 'treatment',
    readTime: '10 min read',
    datePublished: '2026-03-23',
    intro: 'Acute severe ulcerative colitis is the UC patient\'s worst nightmare. You\'re hospitalised, on intravenous steroids, and your doctor is quietly calculating whether surgery might be unavoidable. For decades, the choices at that fork in the road were grim: cyclosporine, infliximab, or a colectomy. A 2026 systematic review and meta-analysis published in Clinical Gastroenterology and Hepatology just changed that calculus permanently. Across 35 studies and 664 patients, JAK inhibitors — particularly upadacitinib — achieved an 86.5% short-term clinical response rate in the most severe UC flares within 30 days. Colectomy rates: just 11%. This is not a minor update. This is a paradigm shift.',
    keyPoints: [
      'Upadacitinib achieved 86.5% short-term clinical response in acute severe UC within 30 days (95% CI 72.3–94.1%)',
      'Tofacitinib achieved 77.9% short-term clinical response — also dramatically higher than historical IV steroid-only rates',
      'Colectomy rates were only 11.2% with upadacitinib and 11.5% with tofacitinib — cutting historical surgery risk by more than half',
      'Both JAK inhibitors performed similarly at 3-month and 12-month marks, with ~37% remission at one year',
      'Serious adverse events were low: VTE 2.2%, major cardiac events 0.7%, herpes zoster 3.4%',
    ],
    sections: [
      {
        title: 'What acute severe UC actually means — and why it\'s terrifying',
        paragraphs: [
          'Acute severe ulcerative colitis (ASUC) is not just a "bad flare." By clinical definition, it means six or more bloody bowel movements per day, a heart rate above 90, a temperature above 37.8°C, haemoglobin below 10.5 g/dL, or an ESR above 30 mm/hr. These are the criteria that get you admitted. You are systemically unwell, bleeding significantly, and at risk of life-threatening complications including toxic megacolon and bowel perforation.',
          'Historically, around 25–30% of patients hospitalised with ASUC ended up requiring colectomy — surgical removal of the colon — within that admission or within the following year. A colostomy bag, multiple surgeries, permanent lifestyle changes. That was the statistical reality patients faced while lying in a hospital bed, hoping intravenous hydrocortisone would be enough.',
          'When steroids fail — which happens in roughly 30–40% of ASUC hospitalisations — gastroenterologists reach for "rescue therapy." The traditional rescue options were cyclosporine (immunosuppressant, narrow therapeutic window, high toxicity) or infliximab (biologic, slower onset, also not always effective). The need for something better has been obvious for two decades.',
        ],
        callout: 'One in four ASUC patients historically lost their colon. JAK inhibitors are now changing that number.',
      },
      {
        title: 'What this meta-analysis found — and why 86.5% matters',
        paragraphs: [
          'Jena et al. searched PubMed, Embase, and Scopus through December 2025 and identified 35 studies covering 664 patients treated with JAK inhibitors for ASUC. This is the most comprehensive evidence synthesis yet on JAK inhibitors in this specific population.',
          'The headline finding: within 30 days of starting upadacitinib, 86.5% of patients achieved clinical response (95% CI 72.3–94.1%). With tofacitinib, 77.9% achieved clinical response (95% CI 67.1–86%). Both figures are extraordinary in the context of a disease state where patients had already failed or were failing intravenous corticosteroids.',
          'To put that in perspective: infliximab rescue therapy in ASUC typically achieves clinical response in 60–70% of patients in the short term. Cyclosporine performs in a similar range. Upadacitinib is hitting 86.5% in the same patients — people hospitalised with the worst flares of their lives.',
          'At the three-month mark, remission rates with upadacitinib were 47.4% (vs 37.3% with tofacitinib). At 12 months, tofacitinib achieved 33.8% remission and upadacitinib 37.5% — statistically comparable, both representing durable control in a patient population that arrived in crisis.',
        ],
        callout: '86.5% short-term response. That\'s not a clinical trial in optimal patients under ideal conditions. That\'s real-world data from hospitalised patients who were failing standard therapy.',
      },
      {
        title: 'The colectomy data is the most important number here',
        paragraphs: [
          'Surgery avoidance is the number UC patients and their families care about most when hospitalised with ASUC. The colectomy rates in this meta-analysis are striking.',
          'With upadacitinib, the short-term colectomy rate was 11.2% (95% CI 7.2–16.9%). With tofacitinib, 11.5% (95% CI 7.1–18.4%). These numbers held reasonably stable at the intermediate (3-month) and long-term (12-month) time points.',
          'Compare that to historical pre-biologic ASUC data, where colectomy rates within one year ranged from 25–30% even in patients who initially responded to rescue therapy. JAK inhibitors appear to be cutting that rate by at least half. That is tens of thousands of people per year, globally, who might keep their colon because of these drugs.',
          'What\'s critical to understand: both tofacitinib and upadacitinib showed similar colectomy outcomes. The meta-analysis found no statistically significant difference in surgery rates between the two drugs. The choice between them may ultimately come down to dosing convenience, patient-specific risk factors, and what your gastroenterologist has access to.',
        ],
      },
      {
        title: 'How JAK inhibitors work — without the medical school lecture',
        paragraphs: [
          'Janus kinase inhibitors block a specific cellular signalling pathway called the JAK-STAT pathway. In simple terms: your immune cells communicate through chemical messages. JAK inhibitors intercept those messages before they can tell immune cells to keep attacking your gut lining.',
          'Unlike biologics (like infliximab or vedolizumab), which are large protein molecules injected or infused, JAK inhibitors are small molecule drugs taken orally. They act faster — often within hours — and do not require intravenous infusion. In an acute hospitalised patient who needs rapid response, this pharmacokinetic profile matters enormously.',
          'Upadacitinib (brand name: Rinvoq) is a selective JAK1 inhibitor. Tofacitinib (Xeljanz) inhibits JAK1 and JAK3. The selectivity difference between them may explain why upadacitinib trended slightly higher on response rates, though the sample sizes are not large enough to call this definitively.',
        ],
      },
      {
        title: 'What about the risks — the honest picture',
        paragraphs: [
          'JAK inhibitors are not without risk, and any honest discussion of this data must include the side effect profile. In this meta-analysis of ASUC patients, the reported adverse events were: venous thromboembolism (VTE, i.e. blood clots) in 2.2% of patients (95% CI 1.1–4.7%), major adverse cardiovascular events in 0.7% (95% CI 0.1–10.3%), and herpes zoster (shingles) reactivation in 3.4% (95% CI 1.9–6.1%).',
          'These numbers need context. Patients with ASUC are already at elevated VTE risk from the inflammation itself, hospitalisation, and inactivity — independent of any medication. The 2.2% VTE rate in this dataset is not dramatically higher than the background risk in this specific population. The herpes zoster risk is real and worth knowing about, particularly in patients who are immunocompromised or over 50.',
          'The FDA has required boxed warnings on tofacitinib specifically (related to cardiovascular events and cancer risk in rheumatoid arthritis patients, who are older and have different risk profiles). Upadacitinib carries similar labelling. In the context of ASUC — where the alternative is colectomy — the benefit-risk equation looks very different than in older RA patients.',
          'Importantly: the meta-analysis found no difference in adverse event rates between high-dose and standard-dose tofacitinib, which helps gastroenterologists dosing decisions.',
        ],
        callout: 'Risks are real but must be weighed against the risk of surgery, prolonged steroid exposure, and the consequences of ongoing uncontrolled inflammation. Your GI should have this conversation with you explicitly.',
      },
      {
        title: 'What your gastroenterologist might not have mentioned yet',
        paragraphs: [
          'Here is the uncomfortable truth: JAK inhibitors are not yet universally adopted as first-line rescue therapy in ASUC, even though the evidence base is rapidly accumulating. Many centres still default to infliximab rescue because it\'s been established longer, because formulary restrictions limit access, or simply because practice changes slowly.',
          'The 2025–2026 ECCO (European Crohn\'s and Colitis Organisation) guidelines and the ACG (American College of Gastroenterology) recommendations are beginning to incorporate JAK inhibitors into ASUC management pathways, but implementation varies enormously by hospital and by individual gastroenterologist.',
          'If you are hospitalised with ASUC — or if you have been told that surgery might be on the table — it is entirely appropriate to ask your care team: "Has JAK inhibitor therapy been considered as rescue or co-therapy for my case?" That is not an aggressive or unreasonable question. It is the right question, backed by 35 studies and 664 patients.',
          'For patients who are not hospitalised but have moderate-to-severe UC that is not responding to their current treatment: upadacitinib is FDA-approved for moderate-to-severe UC (not just ASUC). Tofacitinib is also approved in this indication. These are options you can ask about before you end up in an emergency situation.',
        ],
      },
      {
        title: 'The bigger picture: a rapidly changing treatment landscape',
        paragraphs: [
          'The publication of this meta-analysis in Clinical Gastroenterology and Hepatology — one of the highest-impact GI journals — in February 2026 signals how quickly the evidence base is maturing. Five years ago, the idea of an oral pill outperforming infliximab in acute severe colitis would have seemed unlikely. It is now looking like the probable reality.',
          'This has profound implications for the entire UC treatment cascade. If JAK inhibitors can rescue patients in ASUC with 86.5% short-term response and keep colectomy rates below 12%, the argument for earlier introduction of these agents — before patients reach hospitalisation — becomes even stronger. Reactive treatment of crisis is worse than proactive optimisation of the treatment ladder.',
          'The next step in the evidence base, as the authors note, is randomised controlled trials specifically designed for ASUC with JAK inhibitors as co-therapy with corticosteroids and as defined salvage agents. Those trials are underway. But the observational and real-world data pooled here already tells a compelling story.',
          'If you are a UC patient still on mesalamine or a first-generation biologic with persistent activity, this meta-analysis is the clearest signal yet that the treatment options above your current therapy are more powerful — and more accessible — than they may have been when you were last assessed.',
        ],
        callout: 'The question is not whether JAK inhibitors work in severe UC. The question is why they aren\'t being offered to more patients, sooner.',
      },
    ],
    faqs: [
      {
        question: 'Can I take upadacitinib or tofacitinib without being hospitalised?',
        answer: 'Yes. Both upadacitinib (Rinvoq) and tofacitinib (Xeljanz) are FDA-approved for moderate-to-severe UC in outpatient settings. This meta-analysis focused on acute severe UC hospitalised patients, but the drugs are used across the spectrum of UC severity. Ask your gastroenterologist if you are a candidate.',
      },
      {
        question: 'Are JAK inhibitors safe for long-term use in UC?',
        answer: 'Long-term safety data is accumulating. The primary risks to monitor are blood clots (VTE), cardiovascular events (higher risk in patients over 50 with cardiovascular risk factors), herpes zoster reactivation, and — over very long periods — potential cancer risk. These risks need to be individualised based on your specific health profile and weighed against the risks of uncontrolled UC inflammation.',
      },
      {
        question: 'How quickly do JAK inhibitors work compared to biologics?',
        answer: 'Faster. JAK inhibitors are small molecules that act within hours of the first dose, not days or weeks. Biologics like infliximab typically require 3–7 days to show significant response. In an acute hospitalised UC patient, this speed advantage is clinically meaningful.',
      },
      {
        question: 'What is upadacitinib\'s brand name and how is it taken?',
        answer: 'Upadacitinib is sold as Rinvoq. For UC, the induction dose is 45 mg orally once daily for 8 weeks, followed by a maintenance dose of 15 mg or 30 mg once daily. It is a pill — no injections or infusions required.',
      },
      {
        question: 'If steroids fail during my UC hospitalisation, what should I ask for?',
        answer: 'Ask your gastroenterologist specifically about JAK inhibitor rescue therapy — either tofacitinib or upadacitinib. Also ask whether an urgent GI consultation with an IBD specialist (not just a general gastroenterologist) is available. The combination of escalation timing and drug choice significantly affects outcomes in ASUC.',
      },
    ],
    references: [
      { label: 'Jena A et al. Clin Gastroenterol Hepatol. 2026 (PMID: 41690364)', href: 'https://pubmed.ncbi.nlm.nih.gov/41690364/' },
      { label: 'FDA Prescribing Information — Upadacitinib (Rinvoq) for UC', href: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/213856s003lbl.pdf' },
      { label: 'Truelove SC, Witts LJ. BMJ 1955 — Original ASUC criteria', href: 'https://pubmed.ncbi.nlm.nih.gov/13260656/' },
      { label: 'ACG Clinical Guidelines: UC Management 2023', href: 'https://pubmed.ncbi.nlm.nih.gov/36648154/' },
      { label: 'ECCO Guidelines — Management of Acute Severe UC 2022', href: 'https://pubmed.ncbi.nlm.nih.gov/35104498/' },
    ],
    relatedSlugs: ['understanding-ulcerative-colitis', 'anti-inflammatory-diet-uc-meta-analysis-2026'],
  },
  {
    slug: 'mediterranean-diet-curcumin-uc-rct-2024',
    title: 'Mediterranean Diet + Curcumin Suppressed Active UC in 8 Weeks — Multicenter Randomized Trial',
    description: 'A multicenter RCT found that a Mediterranean diet — with or without curcumin or resveratrol supplementation — significantly reduced UC disease activity, cut inflammatory markers, and improved quality of life in 8 weeks. Here is what the trial actually showed.',
    category: 'Diet',
    readTime: '10 min read',
    datePublished: '2026-03-25',
    intro: 'Your gastroenterologist probably told you diet doesn\'t treat UC. This multicenter randomised controlled trial out of Turkey, published in Nutrients in 2024, would like a word. Researchers ran three parallel arms — Mediterranean diet alone, Mediterranean diet plus 1,600 mg/day curcumin, and Mediterranean diet plus 500 mg/day resveratrol — in patients with mild-to-moderate active UC. All three groups showed statistically significant reductions in disease activity, serum inflammatory markers, and improved quality of life scores after just 8 weeks. Not anecdote. Not a wellness blog. A registered RCT with colonoscopy-confirmed, gastroenterologist-diagnosed patients on mesalamine.',
    keyPoints: [
      'All three dietary arms (Mediterranean diet alone, MD + curcumin, MD + resveratrol) significantly reduced disease activity on the Truelove–Witts Index (p < 0.05) after 8 weeks.',
      'Serum inflammatory markers — including CRP and TNF-α-related cytokines — dropped significantly in all groups (p < 0.05).',
      'Quality of life scores (SF-36 and IBD Questionnaire) improved significantly in all three arms after 8 weeks.',
      'The Mediterranean diet alone was as effective as MD + supplementation on most parameters — the diet itself was doing the heavy lifting.',
    ],
    sections: [
      {
        title: 'Why this RCT is more important than you\'ve been led to believe',
        paragraphs: [
          'Most diet research in UC is deeply flawed: observational studies tracking what people ate years ago, single-arm trials without control groups, or testimonials dressed up in pseudo-scientific language. This 2024 study published in Nutrients (PMID: 38794742) is different in structure. It was registered as a clinical trial (NCT05761327), approved by a clinical research ethics committee, randomised using validated disease-activity scoring, and run across two gastroenterology centres in Turkey.',
          'Participants had confirmed mild-to-moderate active UC diagnosed by a gastroenterologist, were already on stable mesalamine and/or azathioprine treatment, and were assessed on objective endpoints including the Truelove–Witts Index (a validated UC disease activity scoring system), the IBD Questionnaire, Short Form-36 quality-of-life tool, and laboratory inflammatory markers. This is not a study where patients self-reported whether they "felt better."',
          'The intervention ran for 8 weeks. Forty-eight patients were enrolled across three arms: Mediterranean diet only (16 patients), MD plus 1,600 mg/day curcumin (16 patients), and MD plus 500 mg/day resveratrol (16 patients). All patients received the same dietary framework. The only variable was whether polyphenol supplementation was added.',
        ],
        callout: 'Registered RCT. Gastroenterologist-confirmed UC. Validated disease scoring. Lab markers. Across two academic IBD centres. This is actual science, not a wellness Instagram post.',
      },
      {
        title: 'What the results showed — and what surprised researchers',
        paragraphs: [
          'Here is the result that should be on every UC forum: all three groups — Mediterranean diet alone, MD plus curcumin, and MD plus resveratrol — showed statistically significant within-group reductions in disease activity, inflammatory markers, and quality of life improvements (all p < 0.05). The Truelove–Witts Index scores dropped. The IBD Questionnaire scores improved. The SF-36 scores improved. All of this happened in 8 weeks, in patients who had not changed their baseline medication.',
          'The between-group comparisons are where the results get even more instructive. Across most parameters — disease activity, inflammatory markers, IBD quality of life — there was no statistically significant difference between the three arms. The Mediterranean diet alone performed equivalently to Mediterranean diet plus curcumin and Mediterranean diet plus resveratrol.',
          'The exceptions were the pain subparameter of the SF-36 quality-of-life scale and the Mediterranean Diet Adherence Scale score. On pain specifically, there were between-group differences — suggesting curcumin may provide additional analgesic benefit beyond the diet itself. But on the primary disease activity and inflammation outcomes, the Mediterranean diet alone was doing the work.',
          'The researchers concluded: "The MD is an effective and safe intervention to be used in clinical practice in individuals with UC." That is direct language from a peer-reviewed, multicenter RCT. Not from a nutrition coach. Not from a supplement company. From gastroenterologists and clinical dietitians who ran a registered trial.',
        ],
        callout: 'The Mediterranean diet alone — without curcumin, without resveratrol — was enough to significantly reduce UC disease activity in 8 weeks. The food is the medicine.',
      },
      {
        title: 'How curcumin actually works in UC — the mechanism isn\'t magic',
        paragraphs: [
          'Curcumin is a polyphenol extracted from turmeric root. It has been used in Ayurvedic medicine for centuries, which is why wellness culture has latched onto it. But the reason it may be relevant in UC is not mystical — it is immunological.',
          'Curcumin inhibits two of the primary inflammatory cytokines in UC: interleukin-1 (IL-1) and tumour necrosis factor alpha (TNF-α). These are the same cytokines targeted by biologics like infliximab. Curcumin does not block them as potently or as specifically as a biologic, but at 1,600 mg/day — the dose used in this trial — it produces measurable downstream anti-inflammatory effects at the mucosal level.',
          'A 2021 meta-analysis by Yin et al. analysed 385 UC patients across six RCTs and found curcumin supplementation was effective in achieving clinical remission, though not endoscopic remission. The 2024 trial adds to this evidence: curcumin combined with a Mediterranean dietary framework reduced disease activity and inflammatory markers in an 8-week trial with on-medication UC patients.',
          'Critically: curcumin is poorly bioavailable on its own. Standard curcumin capsules are largely excreted before reaching therapeutic tissue concentrations. The studies that show clinical benefit typically use enhanced formulations — phospholipid complexes, piperine-enhanced preparations, or nanoparticle encapsulation — that improve absorption. The trial used curcumin at 1,600 mg/day; the formulation specifics should be considered when interpreting how to replicate this in practice.',
        ],
      },
      {
        title: 'The Mediterranean diet: what it actually is, stripped of the marketing',
        paragraphs: [
          'Before the word "Mediterranean" conjures images of a Santorini buffet, here is the clinical definition used in IBD dietary research: a predominantly plant-based pattern characterised by abundant vegetables, fruits, whole grains, legumes, nuts, and seeds; extra-virgin olive oil as the primary fat source; fish at least twice weekly; moderate poultry and dairy; minimal red meat, processed meat, refined carbohydrates, added sugars, and ultra-processed foods.',
          'In the context of UC, the anti-inflammatory mechanisms of a Mediterranean pattern operate at multiple levels. Olive oil\'s oleocanthal acts as a natural COX-2 inhibitor — the same enzyme pathway targeted by some anti-inflammatory drugs. Omega-3 fatty acids from fatty fish (EPA and DHA) compete with omega-6 arachidonic acid to produce less inflammatory eicosanoids. Diverse plant polyphenols feed anti-inflammatory bacteria that produce butyrate, a short-chain fatty acid that directly nourishes colonocytes and reduces mucosal inflammation.',
          'The Mediterranean Diet Adherence Scale (MEDAS) used in this trial has 14 components. Patients who scored higher on MEDAS adherence showed better disease activity outcomes — a dose-response relationship that strengthens the causal argument.',
        ],
        bullets: [
          'Extra-virgin olive oil daily — target 4+ tablespoons for IBD-relevant anti-inflammatory dose',
          'Fatty fish (salmon, sardines, mackerel) at least 3 times per week',
          'Diverse vegetables daily — minimum 2 servings, aim for colour variety',
          'Legumes 3+ times per week (lentils, chickpeas, beans) — when tolerated',
          'Whole grains over refined (oats, barley, brown rice, quinoa)',
          'Minimal processed meat, refined sugar, and ultra-processed foods',
          'Nuts and seeds daily — walnuts, almonds, ground flaxseed',
        ],
      },
      {
        title: 'What about resveratrol — and why you probably don\'t need to supplement it',
        paragraphs: [
          'Resveratrol is a stilbenoid polyphenol found naturally in red grapes, berries, and peanuts. In UC, its proposed mechanisms include inhibition of NF-κB (a master inflammatory regulator), prevention of mitochondrial dysfunction in colonocytes, and reduction of pro-inflammatory cytokine production.',
          'In this trial, 500 mg/day resveratrol added to the Mediterranean diet showed equivalent outcomes to MD alone on most disease activity and inflammatory marker endpoints. The polyphenol supplementation did not add meaningful benefit beyond what the diet itself was achieving — possibly because the Mediterranean diet itself is rich in natural resveratrol precursors and other polyphenols that work through overlapping pathways.',
          'Human bioavailability studies on oral resveratrol are complicated by the same issue as curcumin: poor absorption and rapid metabolism mean standard capsule doses may not achieve adequate tissue concentrations. The fact that MD + resveratrol performed equivalently to MD alone in this trial might reflect genuine equivalence, or it might reflect inadequate tissue-level resveratrol delivery from a standard supplement at 500 mg.',
          'The practical takeaway: focus on the Mediterranean dietary pattern first. Curcumin at 1,600 mg/day in an enhanced-bioavailability formulation has a better evidence base for clinical benefit in UC than resveratrol supplementation at current evidence levels.',
        ],
      },
      {
        title: 'What "in addition to standard medication" actually means for you',
        paragraphs: [
          'Every patient in this trial was already on mesalamine and/or azathioprine. The dietary intervention was additive — it was not replacing medication, it was augmenting what medication was already doing. That framing matters, because the most dangerous misinterpretation of this evidence is that diet can substitute for proven pharmacological treatment.',
          'If you are on mesalamine and struggling to maintain remission, this trial suggests the Mediterranean diet is not a "nice to have" lifestyle suggestion. It is a clinically validated adjunct that produced statistically significant disease activity reduction in 8 weeks, in patients just like you, on the same medications you are taking.',
          'If you are on a biologic or JAK inhibitor with partial response, the same logic applies. Your drug is suppressing one or several immune pathways. Your diet is either feeding or starving the upstream triggers — the gut dysbiosis, the mucosal permeability, the inflammatory lipid environment. Getting both right simultaneously is not redundant. It is mechanistically additive.',
          'If you have been told diet doesn\'t matter in UC: you now have a registered multicenter RCT that specifically contradicts that dismissal. Eight weeks. Two academic gastroenterology centres. Validated disease scoring. The diet matters. The data says so.',
        ],
        callout: 'Diet did not replace their mesalamine. It made the mesalamine work better. That is the sentence your GI should hear.',
      },
      {
        title: 'The limitations of this trial — in full transparency',
        paragraphs: [
          'This trial enrolled 48 patients across three arms — 16 per group. That is a small sample size. With 16 patients per arm, the study was adequately powered to detect medium-to-large effect sizes, but may have missed more modest differences between the three groups. The absence of a placebo arm (where patients received neither dietary guidance nor supplementation) is also a limitation — all three groups improved, but there was no true control arm to quantify placebo or natural disease fluctuation effects.',
          'The trial was open-label: patients knew which group they were in. For subjective outcomes like quality of life and symptom scores, this introduces potential bias. Patients who know they are making deliberate dietary changes may report improvement partly because of expectation effects.',
          'However, inflammatory markers — CRP, serum cytokines — are not self-reported. The objective biomarker improvements across all three groups are harder to attribute to expectation alone.',
          'The 8-week follow-up is relatively short. UC is a relapsing-remitting disease measured over years. Whether Mediterranean diet adherence sustains disease activity reduction at 6 months and 12 months is the key clinical question the trial was not designed to answer.',
          'Despite these limitations: a multicenter, registered, ethics-approved RCT showing statistically significant reductions in validated UC disease activity scores and serum inflammatory markers is not trivial. It adds to an accumulating evidence base — including the 2026 meta-analysis showing anti-inflammatory diets improve response by 82% — that food is a legitimate, evidence-supported intervention in UC.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can the Mediterranean diet replace my UC medication?',
        answer: 'No. Every patient in this trial was on stable mesalamine or azathioprine. The diet produced significant improvements on top of medication — not instead of it. Never adjust or stop UC medication without your gastroenterologist\'s guidance.',
      },
      {
        question: 'How much curcumin should I take for UC?',
        answer: 'This trial used 1,600 mg/day. Most studies showing clinical benefit in UC use doses between 1,000 and 2,000 mg/day. Standard bioavailability of oral curcumin is poor — look for enhanced-absorption formulations (phospholipid complexes, piperine-enhanced, or nanoparticle preparations). Always discuss supplementation with your gastroenterologist, as curcumin can interact with some anticoagulant medications.',
      },
      {
        question: 'How quickly does a Mediterranean diet help UC symptoms?',
        answer: 'In this 8-week trial, statistically significant improvements in disease activity and inflammatory markers were measurable after just 8 weeks. Do not expect overnight results — give it at least 6-8 weeks of genuine adherence before evaluating whether it is helping your symptoms and biomarkers.',
      },
      {
        question: 'Is the Mediterranean diet safe during a UC flare?',
        answer: 'This trial studied patients with mild-to-moderate active UC. During a severe flare with significant bleeding, high stool frequency, or hospitalisation, aggressive dietary changes are not the first priority — medical assessment is. In mild-to-moderate disease, the Mediterranean diet is generally well-tolerated. Your GI dietitian can help you adapt it to your tolerance during active disease.',
      },
      {
        question: 'Should I also take resveratrol for UC?',
        answer: 'In this trial, resveratrol at 500 mg/day added to the Mediterranean diet did not significantly outperform the diet alone on most UC outcomes. The Mediterranean diet itself provided substantial benefit. If considering resveratrol supplementation, discuss it with your gastroenterologist first — the evidence base is less established than for curcumin in UC.',
      },
    ],
    references: [
      { label: 'Erol Doğan Ö et al. Nutrients. 2024 (PMID: 38794742)', href: 'https://pubmed.ncbi.nlm.nih.gov/38794742/' },
      { label: 'PMC Full Text (PMC11123867)', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11123867/' },
      { label: 'Yin M et al. — Curcumin meta-analysis in UC (6 RCTs, 385 patients)', href: 'https://pubmed.ncbi.nlm.nih.gov/31958083/' },
      { label: 'Rehmat M et al. Dig Dis Sci 2026 — Anti-inflammatory diet meta-analysis (PMID: 40797000)', href: 'https://pubmed.ncbi.nlm.nih.gov/40797000/' },
      { label: 'IBD Anti-Inflammatory Diet — UMass Medical School', href: 'https://www.umassmed.edu/nutrition/ibd/ibdaid/' },
      { label: 'Khalili H et al. — Mediterranean diet and IBD risk (PMID: 31209713)', href: 'https://pubmed.ncbi.nlm.nih.gov/31209713/' },
    ],
    relatedSlugs: ['anti-inflammatory-diet-uc-meta-analysis-2026', 'uc-diet-guide', 'fmt-anti-inflammatory-diet-uc-remission'],
  },
  {
    slug: 'fmt-remission-meta-analysis-2026',
    title: 'Fecal Microbiota Transplantation Doubles Endoscopic Response in UC — Meta-Analysis of 15 RCTs',
    description: 'A 2026 meta-analysis of 15 randomised trials found FMT achieved 62% clinical remission vs 50.5% with placebo (OR 2.65) and nearly doubled endoscopic response rates. Here\'s what it means for UC patients whose current treatment isn\'t working.',
    category: 'Research',
    readTime: '10 min read',
    datePublished: '2026-03-24',
    intro: 'If you\'ve been on mesalamine for years, cycled through biologics, or been told you\'re running out of options — there\'s a growing body of evidence pointing to a radically different approach. Fecal microbiota transplantation (FMT) doesn\'t target a single immune pathway. It attempts to reset the entire gut ecosystem. A 2026 meta-analysis of 15 randomised controlled trials, published in Digestive Diseases, found that FMT significantly improves both clinical and endoscopic remission in UC — and the evidence is strong enough that dismissing it as "experimental" is becoming harder to justify.',
    keyPoints: [
      'FMT achieved 62% clinical remission vs 50.5% in controls across 15 RCTs (OR 2.65; 95% CI 1.76–4.00).',
      'Endoscopic response was 42% in the FMT group vs 22% in controls — nearly double (OR 2.00; 95% CI 1.09–3.68).',
      'Heterogeneity was assessed as low, meaning the results were consistent across trials — not driven by one outlier study.',
      'FMT is non-pharmacological — it doesn\'t add immunosuppression, doesn\'t cause moon face, and doesn\'t suppress your immune system globally.',
    ],
    sections: [
      {
        title: 'Why "your gut bacteria are the problem" is no longer fringe science',
        paragraphs: [
          'For most of the history of UC treatment, the gut microbiome was a footnote. The real action was in immune suppression: aminosalicylates, steroids, thiopurines, biologics targeting TNF or integrin or IL-12/23. The logic was straightforward — UC is an inflammatory disease, so suppress the inflammation.',
          'What that approach consistently failed to explain was why some patients achieve remission and others don\'t, why flares seem to correlate with stress and dietary changes and antibiotics, and why the disease relapses even when the immune pathway you\'re blocking is theoretically neutralised.',
          'The microbiome hypothesis offers an upstream explanation. UC patients consistently show reduced diversity in gut bacteria, depletion of short-chain fatty acid producers like Faecalibacterium prausnitzii and Roseburia, and overgrowth of pro-inflammatory species. These are not coincidental findings. They correlate with disease activity and mucosal healing. They may be causal — not just a consequence of inflammation.',
          'FMT is the most direct test of this hypothesis: take a healthy donor\'s entire gut ecosystem and introduce it to the diseased gut. If the microbiome matters, remission should follow. Across 15 randomised trials and thousands of patients, it does — at least for a meaningful proportion of UC patients.',
        ],
        callout: 'Your gut contains 100 trillion bacteria. UC patients have systematically different microbiomes than healthy controls. FMT is the most direct attempt to fix that imbalance.',
      },
      {
        title: 'What this meta-analysis actually found',
        paragraphs: [
          'Doukas et al. searched four major medical databases and analysed only randomised clinical trials comparing FMT against placebo or standard care in UC patients. They assessed both clinical remission (symptom improvement on validated scoring systems) and endoscopic response (direct visual improvement in the gut lining).',
          'The meta-analysis included 15 trials, drawn from an initial pool of 6,737 identified studies. The quality filter was strict: randomised, controlled, properly reported.',
          'Clinical remission: 62% of FMT patients achieved remission vs 50.5% in controls. The odds ratio of 2.65 (95% CI 1.76–4.00) means FMT patients were nearly three times more likely to achieve remission. This was statistically robust and consistent across trials.',
          'Endoscopic response — arguably the more important outcome because it measures actual mucosal healing, not just how you feel — was 42% in the FMT group vs 22% in controls. The odds ratio of 2.00 (95% CI 1.09–3.68) means FMT patients were twice as likely to show objective healing of the gut lining.',
          'Critically, heterogeneity across trials was low. This is not a situation where one or two outlier studies are driving the result. The effect was consistent. That\'s the signal quality you want when evaluating a treatment that has been controversial.',
        ],
        callout: 'OR 2.65 for clinical remission. OR 2.00 for endoscopic response. These are not marginal statistical findings — they are clinically meaningful signals from 15 independent randomised trials.',
      },
      {
        title: 'Why endoscopic remission matters more than you might think',
        paragraphs: [
          'Patients naturally focus on symptoms: how many bathroom trips per day, how much blood, how much pain. But gastroenterologists increasingly treat to the target of mucosal healing — what the gut looks like on a scope, not just how you feel.',
          'The reason is longitudinal. Patients who achieve mucosal healing have lower rates of flare, hospitalisation, colectomy, and colorectal neoplasia over the following years. Feeling better while the gut is still visibly inflamed is a precarious remission — the fire is banked, not extinguished.',
          'FMT\'s 42% endoscopic response rate (vs 22% placebo) is significant because it suggests genuine mucosal healing in a substantial proportion of patients, not just symptomatic suppression. That\'s a higher bar, and FMT is clearing it.',
          'For comparison: first-generation aminosalicylates achieve endoscopic remission in roughly 30–40% of patients with mild-to-moderate UC. FMT, as an adjunct or alternative, is not obviously inferior in this metric — and it works through a completely different mechanism.',
        ],
      },
      {
        title: 'The honest context: what FMT does and doesn\'t solve',
        paragraphs: [
          'This is not a claim that FMT is ready to replace biologics or JAK inhibitors for severe UC. It isn\'t, and this meta-analysis doesn\'t argue that it should be.',
          'The evidence base is for active UC in patients who haven\'t necessarily exhausted all other options. The remission rate — while significantly better than placebo — is not 90%. A meaningful fraction of patients do not respond. The optimal donor selection, dosing protocol, administration route (enema, colonoscopic infusion, oral capsule), and duration of treatment remain subjects of active research.',
          'What this meta-analysis does establish is that FMT is significantly better than doing nothing different, that the effect is real and consistent across trials, and that there is a non-pharmacological option worth discussing — particularly for patients who are trying to minimise immunosuppressive load, who have failed one or more biologics, or who are searching for an adjunct to their existing treatment.',
          'The authors note that FMT is "a promising nonpharmacological option for UC patients unresponsive to conventional treatments." That is careful, precise language. It is also clearly true.',
        ],
        callout: 'FMT is not a cure. But OR 2.65 for clinical remission means it is meaningfully effective for a substantial proportion of UC patients. That is not nothing — that is a conversation worth having with your GI.',
      },
      {
        title: 'How FMT is administered — and what to realistically expect',
        paragraphs: [
          'Current FMT protocols in clinical trials have used several delivery routes: colonoscopic infusion (the most common in RCTs), enema, and increasingly, encapsulated oral preparations (freeze-dried stool capsules — yes, really, and yes, they work).',
          'Most RCT protocols involve multiple infusions rather than a single treatment. Weekly colonoscopic infusions over 6–8 weeks are common. This is burdensome, which is part of why oral capsule formulations are being developed actively. The OPENBIOME and Rebiotix platforms, and the FDA-approved Rebyota and Vowst products (currently for Clostridioides difficile, not UC), demonstrate that the logistics of gut microbiome therapy are being solved.',
          'Adverse events in this meta-analysis were described as generally mild and manageable, consistent with other FMT literature. The most common side effects are transient GI symptoms: bloating, cramping, altered bowel habits after infusion. Serious adverse events are rare in immunocompetent patients, though screening of donors for transmissible pathogens is essential and non-negotiable.',
          'In terms of what to expect: not everyone responds. The remission rate improvement is statistically robust but the absolute rates still leave a substantial minority of patients without adequate response. For patients who do respond, the goal is durable remission — and the long-term data on FMT maintenance protocols is still accumulating.',
        ],
      },
      {
        title: 'What this means if you\'re currently stuck in the treatment ladder',
        paragraphs: [
          'The standard UC treatment escalation goes roughly: aminosalicylates → thiopurines → biologics (anti-TNF, vedolizumab, ustekinumab) → JAK inhibitors → surgery. At each step, the options become more powerful and the side effect profiles more complex. Many patients feel trapped in the middle of this ladder — current treatment isn\'t working well, but escalating feels scary.',
          'FMT doesn\'t fit neatly into this ladder. It\'s orthogonal to immunosuppression. You could theoretically combine FMT with your existing biologic or aminosalicylate therapy. Some trials have done exactly this. The evidence for combination approaches is not yet definitive, but the mechanistic rationale is sound: if your biologic suppresses the immune overreaction and FMT restores the microbial balance that is triggering the reaction, you\'re hitting the problem from two directions.',
          'The most practical implication of this meta-analysis: if you are a UC patient who has not responded adequately to two or more treatments, FMT is worth an explicit conversation with your gastroenterologist. Not as a demand, but as an informed question: "Am I a candidate for FMT as adjunctive therapy? Are there trials I could enrol in?" The answer might be no — but it should be a no based on your specific situation, not a reflexive dismissal of a treatment that now has 15 RCTs behind it.',
          'For patients pursuing FMT: the safest context remains an established IBD clinic, ideally as part of a clinical trial, with screened donors and proper follow-up. DIY FMT exists and is discussed extensively on Reddit forums — but donor screening for transmissible pathogens is not optional, and several serious adverse events have occurred in unscreened DIY settings.',
        ],
        callout: 'If two treatments have failed you, FMT is a legitimate next question — not fringe, not experimental in the dismissive sense, but an evidence-based option your GI should be willing to discuss.',
      },
      {
        title: 'The bigger picture: UC is a disease of the entire gut ecosystem',
        paragraphs: [
          'Perhaps the most important thing this meta-analysis signals is not the efficacy data itself, but what the efficacy data implies about the nature of UC.',
          'If transplanting a healthy gut microbiome improves outcomes in UC — consistently, across 15 independent trials, in multiple countries with different patient populations and different UC severities — then the microbiome is not a passenger in UC. It is at minimum a co-driver, and potentially the primary upstream cause of the immune dysregulation we\'ve been treating pharmacologically for decades.',
          'This reframes the question from "which drug should I use to suppress this inflammation?" to "why is my gut ecosystem triggering this inflammation, and can we fix the trigger rather than just dampen the response?"',
          'FMT is the bluntest tool for answering that question. Targeted probiotic therapies, microbiome-based diagnostics, and personalised interventions based on individual microbial signatures are in development. The OR 2.65 from this meta-analysis is not just a result — it is a direction. The gut ecosystem is where at least some of the answers are.',
          'None of this means you should stop your current medications. It means you should understand that UC treatment is evolving faster than most GI clinics\' practice patterns, that a non-pharmacological option with genuine efficacy now exists, and that informed patients ask better questions.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is FMT FDA-approved for ulcerative colitis?',
        answer: 'Not yet in the US as a licensed treatment specifically for UC. FMT is FDA-approved for recurrent Clostridioides difficile infection (the products Rebyota and Vowst). For UC, it is primarily available through clinical trials and specialised IBD centres. The evidence base — including this 15-RCT meta-analysis — is driving ongoing regulatory discussions.',
      },
      {
        question: 'Can I do FMT at home for my UC?',
        answer: 'DIY FMT is practised and discussed online, but carries genuine risks. Donor screening for transmissible pathogens (including HIV, hepatitis, antibiotic-resistant bacteria, and other infectious agents) is essential. Serious adverse events, including deaths, have occurred with unscreened donors. If you are considering FMT, the safest route is through an established IBD clinic or clinical trial where donors are properly screened.',
      },
      {
        question: 'How many FMT treatments are needed for UC?',
        answer: 'The RCT protocols vary considerably — from single infusions to multiple weekly colonoscopic infusions over 6–8 weeks. Most successful protocols in the meta-analysis used multiple treatments. Optimal dosing is still being researched. Oral capsule formulations are being developed to reduce the burden of repeated colonoscopic procedures.',
      },
      {
        question: 'Does FMT work if I\'m on biologics?',
        answer: 'The meta-analysis included patients on various background therapies. The evidence for FMT combined with biologics is not yet definitive, but mechanistically there is no obvious reason the two approaches would be incompatible. Some trials are specifically testing FMT as an adjunct to conventional treatment. Ask your gastroenterologist about your specific situation.',
      },
      {
        question: 'What is the remission rate with FMT for UC?',
        answer: 'In this meta-analysis of 15 RCTs, 62% of FMT patients achieved clinical remission vs 50.5% in control groups — an odds ratio of 2.65. Endoscopic response was 42% vs 22%. These are average rates across diverse trials; individual results depend on disease severity, duration, prior treatments, and donor microbiome characteristics.',
      },
    ],
    references: [
      { label: 'Doukas PG et al. Dig Dis (Basel). 2026;44(1):85-98. (PMID: 41078065)', href: 'https://pubmed.ncbi.nlm.nih.gov/41078065/' },
      { label: 'Paramsothy S et al. Lancet. 2017 — FOCUS trial of FMT in active UC', href: 'https://pubmed.ncbi.nlm.nih.gov/28131791/' },
      { label: 'Moayyedi P et al. Gastroenterology. 2015 — RCT FMT in UC', href: 'https://pubmed.ncbi.nlm.nih.gov/25857726/' },
      { label: 'Xu MQ et al. Aliment Pharmacol Ther. 2015 — FMT for IBD meta-analysis', href: 'https://pubmed.ncbi.nlm.nih.gov/25923583/' },
      { label: 'FDA — Rebyota and Vowst approvals for C. difficile', href: 'https://www.fda.gov/vaccines-blood-biologics/biologics-approvals/fecal-microbiota-products' },
    ],
    relatedSlugs: ['understanding-ulcerative-colitis', 'jak-inhibitors-acute-severe-uc-meta-analysis-2026', 'anti-inflammatory-diet-uc-meta-analysis-2026'],
  },
  {
    slug: 'il23-inhibitors-meta-analysis-safety-efficacy-2026',
    title: 'IL-23 Biologics: 2.53× More Mucosal Healing AND 61% Fewer Serious Side Effects — Meta-Analysis of 7 RCTs Confirms the Class is a Game-Changer',
    description: 'A systematic review and meta-analysis of 7 randomised controlled trials (4,203 patients) finds IL-23 inhibitors (mirikizumab, risankizumab, guselkumab) deliver 2.53× more histo-endoscopic mucosal healing at induction AND 61% fewer serious adverse events vs placebo. This is the most reassuring safety-plus-efficacy signal in modern UC pharmacology.',
    category: 'Biologics',
    readTime: '9 min read',
    datePublished: '2026-04-03',
    intro: 'Most UC patients have heard that biologics are risky. That injections and infusions come with "black box warnings" and a list of side effects longer than the consent form itself. That is partly true for older anti-TNF drugs, and it made sense to be cautious a decade ago. But the evidence landscape has shifted dramatically — and if you haven\'t looked at the IL-23 inhibitor class recently, you are operating on outdated information. A systematic review and meta-analysis just published in the International Journal of Colorectal Disease pooled data from 7 randomised controlled trials and 4,203 patients evaluating mirikizumab (Omvoh), risankizumab (Skyrizi), and guselkumab (Tremfya) in moderate-to-severe ulcerative colitis. The headline: IL-23 blockers produce 2.53 times more histo-endoscopic mucosal healing at induction AND are associated with 61% fewer serious adverse events than placebo. Both findings. In the same dataset. At the same time. That is not a trade-off. That is a dominant strategy.',
    keyPoints: [
      'IL-23 inhibitors include mirikizumab (Omvoh), risankizumab (Skyrizi), and guselkumab (Tremfya) — all targeting the IL-23p19 subunit.',
      'Induction efficacy: clinical remission RR 1.52; histo-endoscopic mucosal healing RR 2.53 vs placebo.',
      'Maintenance efficacy: clinical remission RR 1.62; histo-endoscopic mucosal healing RR 1.81 vs placebo.',
      'Safety: serious adverse events were 61% LOWER with IL-23 inhibitors during induction (RR 0.39 vs placebo).',
      'Corticosteroid-free remission and clinical response also consistently favoured IL-23 blockade.',
      'Evidence base: 7 RCTs, 4,203 patients — one of the most statistically powerful analyses of this drug class in UC.',
    ],
    sections: [
      {
        title: 'Why IL-23 — the mechanism that separates this class from everything that came before',
        paragraphs: [
          'To understand why IL-23 inhibitors perform so differently from older biologics, you need to understand the cytokine hierarchy in UC. Interleukin-23 (IL-23) is not just one inflammatory signal among many — it is an upstream master regulator that drives multiple pro-inflammatory pathways simultaneously. IL-23 promotes the differentiation and survival of Th17 cells, which in turn produce IL-17A, IL-17F, IL-22, and other cytokines that sustain mucosal inflammation.',
          'Earlier biologics in UC targeted downstream nodes: anti-TNF drugs (infliximab, adalimumab, golimumab) block tumour necrosis factor, which sits relatively far down the inflammatory cascade. Vedolizumab blocks gut lymphocyte trafficking, limiting but not eliminating mucosal immune attack. Ustekinumab targets both IL-12 and IL-23 by blocking the shared p40 subunit.',
          'IL-23p19-specific inhibitors (mirikizumab, risankizumab, guselkumab) go upstream of all of that. They block the p19 subunit of IL-23 specifically, interrupting the signal before it can activate the Th17/Th1 inflammatory programme. By targeting this more proximal step, they can shut down multiple downstream inflammatory pathways simultaneously — which is thought to explain both their efficacy advantage and their favourable safety profile.',
          'Sparing the IL-12 pathway (which is involved in protective immunity against intracellular pathogens) while blocking IL-23 may also explain why serious infections — a concern with anti-TNF therapy — appear to be less common with this class.',
        ],
        callout: 'IL-23 is the master switch. Turn it off upstream, and multiple inflammatory pathways quiet down simultaneously — that\'s why 2.53× more mucosal healing AND 61% fewer serious AEs can coexist.',
      },
      {
        title: 'The efficacy data: what 2.53× mucosal healing actually means for patients',
        paragraphs: [
          'Histo-endoscopic mucosal healing (HEMH) is the hardest endpoint in UC. It is not just symptomatic remission — no blood in stool, no urgency. It is not just clinical remission based on symptom scores. HEMH requires both endoscopic evidence of healed mucosa AND histological confirmation under microscope that the tissue itself has normalised. Patients who achieve HEMH have significantly lower rates of relapse, hospitalisation, and colorectal cancer risk than those who achieve only clinical remission.',
          'At induction, IL-23 inhibitors produced HEMH in 2.53 times as many patients as placebo (RR 2.53). At maintenance, the ratio was 1.81 (RR 1.81 vs placebo). These are not minor improvements in soft endpoints — they are substantial advantages on the most demanding measure of treatment success.',
          'For context: a HEMH advantage of 2.53× at induction means that if 20% of placebo patients achieve deep mucosal healing, approximately 50% of IL-23 inhibitor patients do. That difference translates directly into long-term remission durability, reduced steroid dependence, and better quality of life. Mucosal healing is where the long-term UC story is written.',
          'Clinical remission rates followed a similar pattern: RR 1.52 at induction and RR 1.62 at maintenance. Corticosteroid-free remission — a critical benchmark given the long-term harm of steroid dependence — also consistently favoured IL-23 blockade. Clinical response rates were similarly superior across both phases.',
        ],
      },
      {
        title: 'The safety data: 61% fewer serious adverse events is not a rounding error',
        paragraphs: [
          'The most counterintuitive finding in this meta-analysis — and arguably the most important for patient decision-making — is the serious adverse event (SAE) rate. During induction, the risk of a serious adverse event was 61% lower with IL-23 inhibitors than with placebo (RR 0.39).',
          'Read that again: patients receiving active biologic therapy had fewer serious adverse events than patients receiving no active therapy at all. This appears paradoxical until you consider that uncontrolled active UC is itself a serious disease. Patients in the placebo arms of these trials had active, moderate-to-severe colitis. Active UC drives hospitalisations, requires systemic steroids, and carries risks of toxic megacolon, haemorrhage, and emergency colectomy. Effective disease control with an IL-23 inhibitor eliminates many of these UC-attributable serious events.',
          'During maintenance therapy, there was no significant difference in SAE rates between IL-23 inhibitors and placebo (RR 0.68, not statistically significant). This means that once disease is controlled, the long-term safety profile is similar to what a well patient experiences — not an escalation of risk above baseline.',
          'For patients who have delayed escalating therapy because of biologic fear, this data matters. The risks of untreated or undertreated UC — hospitalisation, surgery, steroid complications, colorectal cancer — are real and quantifiable. The SAE profile of IL-23 inhibitors, based on 7 RCTs and 4,203 patients, is not just acceptable. In active disease, it is better than placebo.',
        ],
        callout: 'Scared of biologics? In this meta-analysis, IL-23 inhibitor patients had 61% fewer serious adverse events than placebo during induction. Uncontrolled UC is the risk. Treated UC is safer.',
      },
      {
        title: 'Mirikizumab vs risankizumab vs guselkumab: are they interchangeable?',
        paragraphs: [
          'This meta-analysis evaluated the IL-23 inhibitor class as a whole, pooling data from mirikizumab (Lilly\'s Omvoh), risankizumab (AbbVie\'s Skyrizi), and guselkumab (J&J\'s Tremfya). While all three target the IL-23p19 subunit, they differ in their binding properties, dosing schedules, administration routes, and the size of their clinical trial programmes.',
          'Mirikizumab has the most robust UC-specific trial data, including the landmark 4-year LUCENT-3 OLE showing 77.7% sustained remission at week 212. It is approved for moderately-to-severely active UC in the US and EU (as Omvoh). The induction dose is 300mg IV every 4 weeks for 3 doses, followed by 200mg subcutaneous every 4 weeks for maintenance.',
          'Risankizumab\'s UC approval came through the INSPIRE and COMMAND trials. Guselkumab recently demonstrated efficacy with subcutaneous induction dosing in the ASTRO phase 3 trial (Lancet Gastroenterol Hepatol, 2026), which could simplify the treatment pathway by eliminating the need for IV infusion centre visits.',
          'From a practical standpoint, the differences between the three drugs may matter less than the class effect. Your gastroenterologist\'s choice will depend on your insurance coverage, prior treatment history, whether you\'ve failed another IL-23 inhibitor already, and their centre\'s experience. What this meta-analysis confirms is that the class-level evidence is strong — whichever IL-23 inhibitor you and your doctor choose, you are backed by a robust evidence base.',
        ],
      },
      {
        title: 'Who is this data most relevant for?',
        paragraphs: [
          'The populations studied in these RCTs were adults with moderate-to-severe active UC who had either failed conventional therapy (aminosalicylates, corticosteroids, immunomodulators) or were biologic-naive. These are the two groups most likely to be weighing escalation to an advanced therapy.',
          'For biologic-naive patients: IL-23 inhibitors are now considered alongside vedolizumab and JAK inhibitors as first-line advanced therapy options. The VARSITY trial showed vedolizumab superior to adalimumab (anti-TNF) for UC. Several network meta-analyses suggest IL-23 inhibitors may match or exceed vedolizumab on mucosal healing endpoints, particularly with longer follow-up.',
          'For patients who have failed anti-TNF therapy: IL-23 inhibitors work through a completely distinct mechanism and retain significant efficacy even in anti-TNF-exposed or anti-TNF-refractory patients. The mechanism independence means prior biologic failure does not predict IL-23 inhibitor failure.',
          'For patients currently on steroids: the corticosteroid-free remission advantage of IL-23 inhibitors confirmed in this meta-analysis is particularly relevant. Chronic steroid use has well-documented long-term harms including bone density loss, metabolic effects, cataracts, and adrenal suppression. If you\'ve been "stuck" on steroids, IL-23 inhibitors offer a pathway to getting off them.',
          'What this data cannot tell you is how you as an individual will respond. UC is heterogeneous — biomarkers to predict responders versus non-responders are an active area of research. But the class-level odds are significantly better than placebo on every endpoint measured.',
        ],
        callout: 'Failed anti-TNF? Stuck on steroids? IL-23 inhibitors work through a different mechanism and achieve steroid-free remission at a significantly higher rate. The conversation with your GI is worth having.',
      },
      {
        title: 'What to actually ask your gastroenterologist',
        paragraphs: [
          'Medical knowledge is only useful if it changes behaviour. Here is how to translate this meta-analysis into an actionable clinical conversation.',
          'If you are being offered an anti-TNF drug (infliximab, adalimumab) as your first biologic: ask whether an IL-23 inhibitor might be more appropriate for your phenotype. The mechanism, safety profile, and long-term durability data for IL-23 inhibitors are now compelling enough that they should be considered alongside anti-TNF therapy — not as a second-line rescue after anti-TNF failure.',
          'If you are reluctant to escalate therapy because of biologic concerns: share the SAE data from this meta-analysis. The 61% reduction in serious adverse events during induction versus placebo reframes the risk conversation. The question is not "is this biologic safe?" — the question is "compared to what?"',
          'If you are currently in remission on a biologic and your doctor is discussing switching: understand that IL-23 inhibitor maintenance data (HEMH RR 1.81, clinical remission RR 1.62) supports staying on this class for long-term disease control, not just induction.',
          'Finally: ask about histological remission specifically. Many follow-up protocols assess symptoms and endoscopy, but miss the histological layer. HEMH — the endpoint that most strongly predicts long-term outcomes — requires biopsy confirmation. If your follow-up doesn\'t include it, ask why.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are IL-23 inhibitors safe for long-term use?',
        answer: 'Based on current evidence — including this 7-RCT meta-analysis of 4,203 patients — IL-23 inhibitors show no excess serious adverse events versus placebo during maintenance therapy. Long-term extension data for mirikizumab (4 years, LUCENT-3) also shows no new safety signals. As with all immunomodulatory therapies, regular monitoring is appropriate, but the long-term safety profile is considered favourable.',
      },
      {
        question: 'Can I switch to an IL-23 inhibitor if I\'ve already failed a biologic?',
        answer: 'Yes, and this is one of the class\'s strengths. IL-23 inhibitors work through a mechanism entirely distinct from anti-TNF therapy and vedolizumab. Prior failure of an anti-TNF drug does not predict failure of an IL-23 inhibitor. Many patients in the trials included in this meta-analysis had prior biologic exposure.',
      },
      {
        question: 'What is the difference between ustekinumab and the newer IL-23 inhibitors?',
        answer: 'Ustekinumab (Stelara) blocks both IL-12 and IL-23 by targeting the shared p40 subunit. The newer IL-23p19 inhibitors (mirikizumab, risankizumab, guselkumab) are more selective — they block only IL-23. This selectivity is thought to preserve more of the protective immune function mediated by IL-12, which may contribute to the favourable safety profile observed in this meta-analysis.',
      },
      {
        question: 'Which IL-23 inhibitor is best for UC?',
        answer: 'This meta-analysis evaluated the class as a whole. Head-to-head trials between IL-23 inhibitors in UC are limited. Mirikizumab has the longest UC-specific safety and efficacy follow-up (4 years). Guselkumab recently demonstrated efficacy with subcutaneous-only induction (eliminating IV infusion). Your gastroenterologist will choose based on your history, insurance, and clinical phenotype.',
      },
      {
        question: 'Do IL-23 inhibitors work for Crohn\'s disease too?',
        answer: 'Yes — risankizumab and guselkumab are also approved for Crohn\'s disease. Mirikizumab has demonstrated efficacy in Crohn\'s in trials. The IL-23 pathway is important in both forms of IBD. This meta-analysis focused specifically on ulcerative colitis data.',
      },
    ],
    references: [
      { label: 'Amin HM et al. Int J Colorectal Dis. 2025 Dec 30;41(1):1. (PMID: 41467943)', href: 'https://pubmed.ncbi.nlm.nih.gov/41467943/' },
      { label: 'Long M et al. (ASTRO Study Group). Lancet Gastroenterol Hepatol. 2026 Apr;11(4):284-298. (PMID: 41544637)', href: 'https://pubmed.ncbi.nlm.nih.gov/41544637/' },
      { label: 'Sands BE et al. (LUCENT-3 OLE). Inflamm Bowel Dis. 2026 Mar. (PMID: 41777218)', href: 'https://pubmed.ncbi.nlm.nih.gov/41777218/' },
      { label: 'Jha A et al. (Etrasimod GRADE meta-analysis). Ann Pharmacother. 2026. (PMID: 41891290)', href: 'https://pubmed.ncbi.nlm.nih.gov/41891290/' },
      { label: 'Peyrin-Biroulet L et al. VARSITY trial — Vedolizumab vs Adalimumab in UC. NEJM 2019.', href: 'https://pubmed.ncbi.nlm.nih.gov/31553835/' },
    ],
    relatedSlugs: ['mirikizumab-4-year-remission-lucent-3', 'etrasimod-meta-analysis-mucosal-healing-2026', 'jak-inhibitors-acute-severe-uc-meta-analysis-2026'],
  },
]

export const BLOG_ARTICLE_MAP = Object.fromEntries(
  BLOG_ARTICLES.map((article) => [article.slug, article])
) as Record<string, BlogArticle>
