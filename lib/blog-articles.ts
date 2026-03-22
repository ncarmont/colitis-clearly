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
]

export const BLOG_ARTICLE_MAP = Object.fromEntries(
  BLOG_ARTICLES.map((article) => [article.slug, article])
) as Record<string, BlogArticle>
