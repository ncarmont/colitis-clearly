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
]

export const BLOG_ARTICLE_MAP = Object.fromEntries(
  BLOG_ARTICLES.map((article) => [article.slug, article])
) as Record<string, BlogArticle>
