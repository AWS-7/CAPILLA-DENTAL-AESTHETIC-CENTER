import { placeholders } from './content';

const imgHair = placeholders.hair;
const imgHair2 =
  'https://images.unsplash.com/photo-1595476108010-b4d1f7300194?w=1200&q=80';
const imgHair3 =
  'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80';
const imgConsult =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80';
const imgCare =
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80';

export const hairSeo = {
  title:
    'Advanced Hair Treatments in Perumbakkam | PRP, GFC & Hair Transplant | Capilla',
  description:
    'Best hair clinic in Perumbakkam for PRP, GFC, hair transplant, regrowth and hair loss treatment. Serving Medavakkam & Sholinganallur. Book your hair specialist consultation.',
  keywords:
    'Hair Clinic Perumbakkam, PRP Hair Treatment Chennai, Hair Transplant Chennai, Hair Loss Treatment Chennai, Best Hair Clinic Chennai, Hair Clinic Medavakkam, Hair Clinic Sholinganallur',
  canonical: 'https://capillaclinic.com/hair',
};

export const hairHero = {
  title: 'Advanced Hair Treatments in Perumbakkam',
  lines: ['Restore Your Hair.', 'Regain Your Confidence.', 'Achieve Natural Results.'],
  subtitle:
    'Trichology-led care at Capilla — PRP, GFC, transplant, regrowth, and scalp analysis — designed for denser, natural-looking hair and lasting confidence.',
  image: imgHair,
};

export const hairTreatmentsList = [
  {
    id: 'prp-hair-treatment',
    title: 'PRP Hair Treatment',
    description: 'Platelet-rich plasma therapy to stimulate natural regrowth and strengthen thinning hair.',
    image: imgHair,
    path: '/treatments/prp-hair-treatment',
    benefits: ['Natural stimulation', 'Minimal downtime', 'Progressive density'],
  },
  {
    id: 'gfc-hair-treatment',
    title: 'GFC Hair Treatment',
    description: 'Growth factor concentrate therapy for denser, healthier hair with advanced precision.',
    image: imgHair2,
    path: '/treatments/gfc-hair-treatment',
    benefits: ['Concentrated growth factors', 'Targeted delivery', 'Visible thickening'],
  },
  {
    id: 'hair-transplant',
    title: 'Hair Transplant',
    description: 'Precision FUE restoration for natural hairlines and lifelong density results.',
    image: imgHair3,
    path: '/treatments/hair-transplant',
    benefits: ['Natural hairline', 'Scar-minimal FUE', 'Permanent grafts'],
  },
  {
    id: 'hair-regrowth-treatment',
    title: 'Hair Regrowth Treatment',
    description: 'Medical regimens designed to revive early thinning and support healthier growth cycles.',
    image: imgCare,
    path: '/treatments/hair-regrowth-treatment',
    benefits: ['Early thinning rescue', 'Customised plans', 'Tracked progress'],
  },
  {
    id: 'hair-loss-treatment',
    title: 'Hair Loss Treatment',
    description: 'Diagnostic-led care for pattern baldness, shedding, and progressive hair loss.',
    image: imgHair2,
    path: '/treatments/hair-loss-treatment',
    benefits: ['Root-cause diagnosis', 'Medical therapies', 'Long-term plans'],
  },
  {
    id: 'scalp-analysis-consultation',
    title: 'Scalp Analysis',
    description: 'Digital hair & scalp assessment to recommend the most effective restoration pathway.',
    image: imgConsult,
    path: '/treatments/scalp-analysis-consultation',
    benefits: ['Digital mapping', 'Personalised advice', 'Clear next steps'],
  },
  {
    id: 'hair-strengthening',
    title: 'Hair Strengthening Therapy',
    description: 'Supportive therapies to improve follicle resilience and reduce breakage.',
    image: imgHair,
    path: '/treatments/hair-regrowth-treatment',
    benefits: ['Stronger strands', 'Less breakage', 'Scalp nourishment'],
  },
  {
    id: 'dandruff-scalp-care',
    title: 'Dandruff & Scalp Care',
    description: 'Targeted scalp protocols for flaking, itch, and scalp barrier health.',
    image: imgCare,
    path: '/treatments/scalp-analysis-consultation',
    benefits: ['Calmer scalp', 'Reduced flaking', 'Comfort-first care'],
  },
  {
    id: 'mesotherapy',
    title: 'Mesotherapy',
    description: 'Micro-delivery of nutrients to support scalp health and hair vitality.',
    image: imgHair3,
    path: '/treatments/prp-hair-treatment',
    benefits: ['Targeted nourishment', 'Complementary therapy', 'Clinic supervised'],
  },
  {
    id: 'post-transplant-care',
    title: 'Post Hair Transplant Care',
    description: 'Structured aftercare to protect grafts and support optimal transplant outcomes.',
    image: imgConsult,
    path: '/treatments/hair-transplant',
    benefits: ['Graft protection', 'Clear timelines', 'Specialist follow-up'],
  },
];

export const hairWhyChoose = [
  { id: 1, title: 'Experienced Hair Specialists', description: 'Trichologists and restoration experts with proven clinical experience.', icon: 'Award' },
  { id: 2, title: 'Advanced Hair Restoration Technology', description: 'Modern PRP/GFC systems and precision FUE protocols.', icon: 'Cpu' },
  { id: 3, title: 'Personalized Hair Analysis', description: 'Digital scalp assessment before recommending any treatment path.', icon: 'Scan' },
  { id: 4, title: 'Safe & Hygienic Procedures', description: 'Sterile treatment suites and doctor-supervised care.', icon: 'ShieldCheck' },
  { id: 5, title: 'Natural Looking Results', description: 'Hairlines and density planned for facial harmony.', icon: 'Sparkles' },
  { id: 6, title: 'Modern Equipment', description: 'Evidence-based tools for diagnosis and restoration.', icon: 'Microscope' },
  { id: 7, title: 'Affordable Packages', description: 'Transparent package options without clinical compromise.', icon: 'Gem' },
  { id: 8, title: 'Long-Term Hair Care', description: 'Follow-up plans that protect density beyond the first sessions.', icon: 'HeartHandshake' },
];

export const hairProcess = [
  { id: 1, title: 'Book Appointment', description: 'Schedule online, WhatsApp, or call at your convenience.' },
  { id: 2, title: 'Hair & Scalp Analysis', description: 'Digital and clinical evaluation of density, pattern, and scalp health.' },
  { id: 3, title: 'Treatment Planning', description: 'A personalised protocol with timelines and expected milestones.' },
  { id: 4, title: 'Procedure', description: 'Comfort-focused treatment delivered with clinical precision.' },
  { id: 5, title: 'Follow-Up Care', description: 'Reviews and guidance to protect and enhance results.' },
];

export const hairTestimonials = [
  {
    id: 1,
    name: 'Vikram P.',
    rating: 5,
    text: 'PRP at Capilla gave me progressive density over months. Honest advice and a truly premium hair clinic experience.',
    date: '1 month ago',
    avatar: placeholders.doctorMale,
  },
  {
    id: 2,
    name: 'Arun K.',
    rating: 5,
    text: 'My FUE transplant hairline looks completely natural. Best hair clinic decision I made in Chennai.',
    date: '2 months ago',
    avatar: placeholders.doctorMale,
  },
  {
    id: 3,
    name: 'Meera S.',
    rating: 5,
    text: 'Scalp analysis explained my shedding clearly. The regrowth plan feels science-led and supportive.',
    date: '3 weeks ago',
    avatar: placeholders.doctor,
  },
];

export const hairBeforeAfter = [
  {
    id: 1,
    title: 'PRP Density Improve',
    category: 'PRP',
    before: imgHair2,
    after: imgHair,
  },
  {
    id: 2,
    title: 'FUE Hairline Restore',
    category: 'Transplant',
    before: imgHair3,
    after: imgCare,
  },
  {
    id: 3,
    title: 'Regrowth Journey',
    category: 'Regrowth',
    before: imgHair2,
    after: imgHair,
  },
];

export const hairFaqs = [
  {
    id: 1,
    question: 'Which hair treatments does Capilla offer?',
    answer:
      'We offer PRP, GFC, hair transplant (FUE), hair regrowth and hair loss protocols, scalp analysis, strengthening therapies, dandruff/scalp care, mesotherapy support, and post-transplant follow-up.',
  },
  {
    id: 2,
    question: 'Is Capilla a good hair clinic near Medavakkam or Sholinganallur?',
    answer:
      'Yes. Patients from Perumbakkam, Medavakkam, and Sholinganallur visit Capilla for trichology-led restoration with transparent planning and luxury care.',
  },
  {
    id: 3,
    question: 'How do I know if I need PRP, GFC, or a transplant?',
    answer:
      'It depends on pattern, donor area, stage of loss, and goals. A scalp analysis consultation helps recommend the most effective pathway.',
  },
  {
    id: 4,
    question: 'How do I book a hair specialist consultation?',
    answer:
      'Book via Contact page, WhatsApp, or phone. Our team will schedule the right specialist and share preparation guidance if needed.',
  },
];

export const hairTreatmentPages = {
  'prp-hair-treatment': {
    slug: 'prp-hair-treatment',
    title: 'PRP Hair Treatment',
    heroTitle: 'PRP Hair Treatment in Chennai',
    heroSubtitle:
      'Platelet-rich plasma therapy to stimulate natural regrowth — advanced hair care at Capilla Hair Clinic Perumbakkam.',
    image: imgHair,
    breadcrumb: 'PRP Hair Treatment',
    seo: {
      title: 'PRP Hair Treatment Chennai | PRP Hair Clinic Perumbakkam | Capilla',
      description:
        'PRP hair treatment in Chennai at Capilla Perumbakkam. Stimulate natural regrowth with specialist protocols near Medavakkam & Sholinganallur.',
      keywords:
        'PRP Hair Treatment Chennai, Hair Clinic Perumbakkam, Best Hair Clinic Chennai, Hair Specialist Chennai',
      canonical: 'https://capillaclinic.com/treatments/prp-hair-treatment',
    },
    overview: [
      'PRP (Platelet-Rich Plasma) uses concentrated growth factors from your own blood to support hair follicle activity and improve thinning areas.',
      'At Capilla, PRP is planned after scalp analysis for honest candidacy and progressive, natural-looking density goals.',
    ],
    howItWorksTitle: 'How PRP Works',
    howItWorks: [
      'A small blood sample is drawn in clinic',
      'Platelets are concentrated via centrifugation',
      'PRP is carefully delivered into thinning scalp zones',
      'Growth factors support follicle stimulation over weeks',
    ],
    benefits: [
      'Uses your own biological material',
      'Supports natural regrowth signalling',
      'Minimal downtime for most patients',
      'Complements medical hair-loss care',
      'Custom mapped to thinning patterns',
      'Suitable for early to moderate thinning in many cases',
    ],
    procedure: [
      { title: 'Consultation & Mapping', text: 'Density, pattern, and goals are assessed before planning sessions.' },
      { title: 'Blood Draw & Prep', text: 'PRP is prepared using clinical centrifugation protocols.' },
      { title: 'PRP Delivery', text: 'Targeted scalp delivery focuses on priority thinning zones.' },
      { title: 'Aftercare Brief', text: 'Clear instructions protect comfort and support outcomes.' },
    ],
    whoNeeds: [
      'Early androgenetic thinning',
      'Patients seeking non-surgical regrowth support',
      'Those wanting progressive density improvement',
      'Candidates cleared after scalp analysis',
    ],
    recovery:
      'Mild redness or tenderness can occur briefly. Most people resume routine activities quickly. Avoid harsh scalp products until advised.',
    expectedResults:
      'Improvements are gradual across a planned series. Many patients notice better hair quality and density progression over months with consistent follow-up.',
    afterCare:
      'Follow wash timing guidance, avoid intense heat exposure initially if advised, and attend review sessions so we can track response.',
    whyCapilla: [
      'Trichology-led PRP planning',
      'Sterile preparation protocols',
      'Honest candidacy counselling',
      'Long-term maintenance options',
    ],
    equipment: [
      'Clinical centrifuge systems',
      'Precision delivery tools',
      'Scalp analysis support',
      'Sterile treatment kits',
    ],
    faqs: [
      {
        id: 1,
        question: 'How many PRP sessions will I need?',
        answer:
          'Most plans use an initial series followed by maintenance. Exact numbers depend on pattern and response, confirmed after analysis.',
      },
      {
        id: 2,
        question: 'Is PRP painful?',
        answer:
          'Discomfort is usually mild and short-lived. We use comfort-focused techniques throughout the session.',
      },
      {
        id: 3,
        question: 'Can PRP replace a hair transplant?',
        answer:
          'PRP supports follicles and density but cannot recreate a hairline where follicles are absent. Transplant may be better for advanced loss.',
      },
    ],
    beforeAfter: [
      { id: 1, title: 'PRP Progress', before: imgHair2, after: imgHair },
      { id: 2, title: 'Thinning Improve', before: imgHair3, after: imgCare },
    ],
    related: ['gfc-hair-treatment', 'hair-regrowth-treatment', 'hair-transplant'],
  },

  'gfc-hair-treatment': {
    slug: 'gfc-hair-treatment',
    title: 'GFC Hair Treatment',
    heroTitle: 'GFC Hair Treatment in Chennai',
    heroSubtitle:
      'Growth Factor Concentrate therapy for denser, healthier hair — advanced restoration at Capilla Perumbakkam.',
    image: imgHair2,
    breadcrumb: 'GFC Hair Treatment',
    seo: {
      title: 'GFC Hair Treatment Chennai | GFC Hair Clinic Perumbakkam | Capilla',
      description:
        'GFC hair treatment in Chennai at Capilla. Advanced growth factor therapy for hair density near Perumbakkam, Medavakkam & Sholinganallur.',
      keywords:
        'GFC Hair Treatment Chennai, Hair Clinic Perumbakkam, Best Hair Clinic Chennai, Hair Specialist Chennai',
      canonical: 'https://capillaclinic.com/treatments/gfc-hair-treatment',
    },
    overview: [
      'GFC (Growth Factor Concentrate) is an advanced autologous therapy that concentrates growth factors to support follicle health and hair quality.',
      'Capilla recommends GFC when analysis suggests patients may benefit from a refined regenerative approach within a structured hair plan.',
    ],
    howItWorksTitle: 'How GFC Works',
    howItWorks: [
      'Blood sample is processed to enrich growth factors',
      'Concentrate is prepared under clinical protocols',
      'Targeted scalp delivery supports thinning zones',
      'A session series builds progressive response',
    ],
    benefits: [
      'Advanced growth-factor focus',
      'Supports density and hair quality',
      'Personalised treatment mapping',
      'Minimal typical downtime',
      'Pairs well with medical hair care',
      'Clinic-supervised safety',
    ],
    procedure: [
      { title: 'Hair Analysis', text: 'We confirm suitability and priority areas for GFC.' },
      { title: 'Preparation', text: 'Growth factor concentrate is prepared in clinic.' },
      { title: 'Delivery Session', text: 'Treatment is delivered with comfort and precision.' },
      { title: 'Review Plan', text: 'Follow-up intervals track response and next steps.' },
    ],
    whoNeeds: [
      'Patients with early–moderate thinning',
      'Those seeking regenerative non-surgical options',
      'Candidates cleared after scalp evaluation',
      'People wanting structured density support',
    ],
    recovery:
      'Temporary tenderness may occur. Most resume normal routines soon after. Follow specialist wash and product guidance closely.',
    expectedResults:
      'Results build over weeks to months. Consistency across planned sessions and review visits is key to meaningful improvement.',
    afterCare:
      'Avoid scalp irritation, follow prescribed care, and maintain review appointments so progress can be objectively tracked.',
    whyCapilla: [
      'Advanced regenerative protocols',
      'Clear candidacy screening',
      'Hygienic clinical setting',
      'Integrated long-term plans',
    ],
    equipment: [
      'GFC preparation systems',
      'Precision delivery tools',
      'Digital scalp records',
      'Sterile procedure kits',
    ],
    faqs: [
      {
        id: 1,
        question: 'How is GFC different from PRP?',
        answer:
          'Both are autologous regenerative approaches. Processing and concentrate profiles differ; we recommend based on clinical assessment rather than trends alone.',
      },
      {
        id: 2,
        question: 'When will I notice changes?',
        answer:
          'Hair growth cycles are slow. Improvements often become clearer across months rather than days.',
      },
      {
        id: 3,
        question: 'Is GFC suitable for women?',
        answer:
          'Often yes, depending on diagnosis. Female pattern thinning is evaluated carefully before recommending any regenerative plan.',
      },
    ],
    beforeAfter: [{ id: 1, title: 'GFC Response', before: imgHair2, after: imgHair }],
    related: ['prp-hair-treatment', 'hair-loss-treatment', 'scalp-analysis-consultation'],
  },

  'hair-transplant': {
    slug: 'hair-transplant',
    title: 'Hair Transplant',
    heroTitle: 'Hair Transplant in Chennai',
    heroSubtitle:
      'Precision FUE hair restoration for natural hairlines and lifelong density — Capilla Hair Clinic Perumbakkam.',
    image: imgHair3,
    breadcrumb: 'Hair Transplant',
    seo: {
      title: 'Hair Transplant Chennai | FUE Hair Transplant Perumbakkam | Capilla',
      description:
        'Hair transplant in Chennai at Capilla. Natural FUE restoration near Perumbakkam, Medavakkam & Sholinganallur. Consult a hair specialist today.',
      keywords:
        'Hair Transplant Chennai, Best Hair Clinic Chennai, Hair Clinic Perumbakkam, Hair Specialist Chennai',
      canonical: 'https://capillaclinic.com/treatments/hair-transplant',
    },
    overview: [
      'Hair transplant relocates healthy donor follicles to thinning or bald areas to restore density with a natural aesthetic.',
      'Capilla focuses on FUE technique planning — hairline design, graft handling, and aftercare that protect long-term results.',
    ],
    fueTechnique: [
      {
        title: 'FUE Follicle Extraction',
        description: 'Individual follicular units are harvested from the donor zone with precision tools.',
      },
      {
        title: 'Natural Hairline Design',
        description: 'Hairlines are planned for age-appropriate, facial-harmony aesthetics — never harsh or unnatural.',
      },
      {
        title: 'Strategic Implantation',
        description: 'Grafts are placed with attention to angle, direction, and density for a seamless blend.',
      },
    ],
    benefits: [
      'Permanent transplanted follicles',
      'Natural-looking hairline design',
      'Scar-minimal FUE approach',
      'Custom density planning',
      'Improved confidence',
      'Long-term restoration value',
    ],
    procedure: [
      { title: 'Assessment & Design', text: 'Donor capacity, pattern, and hairline goals are mapped.' },
      { title: 'Extraction Phase', text: 'FUE grafts are harvested carefully from the donor area.' },
      { title: 'Implantation Phase', text: 'Grafts are placed into recipient sites with artistic precision.' },
      { title: 'Recovery Protocol', text: 'Detailed aftercare and review schedule begin immediately.' },
    ],
    recoveryTimeline:
      'Initial healing typically progresses over days to weeks. Shedding of transplanted hairs can occur before new growth cycles begin. Meaningful cosmetic density generally develops over several months with specialist follow-up.',
    expectedResults:
      'Transplanted follicles that survive the healing process continue to grow as permanent hair. Final aesthetic results evolve gradually; patience and aftercare are essential.',
    whoNeeds: [
      'Stable pattern hair loss with adequate donor area',
      'Patients seeking permanent hairline restoration',
      'Those cleared medically for the procedure',
      'Realistic expectations about staged growth timelines',
    ],
    afterCare:
      'Sleep positioning, washing protocol, activity limits, and medication guidance are provided. Attend all reviews so graft health and growth can be monitored.',
    whyCapilla: [
      'Artistry-led hairline planning',
      'FUE-focused technique',
      'Transparent graft counselling',
      'Structured post-transplant care',
    ],
    equipment: [
      'Precision FUE instrumentation',
      'Clinical magnification support',
      'Sterile surgical protocols',
      'Photographic progress tracking',
    ],
    faqs: [
      {
        id: 1,
        question: 'Is FUE better than strip methods?',
        answer:
          'FUE is preferred by many patients for scar-minimal recovery and lifestyle comfort. Suitability depends on individual case factors discussed in consultation.',
      },
      {
        id: 2,
        question: 'When will transplanted hair grow?',
        answer:
          'Early shedding is common. New growth usually becomes more visible over subsequent months as cycles progress.',
      },
      {
        id: 3,
        question: 'Will I need PRP after transplant?',
        answer:
          'Some plans include supportive therapies. Recommendations are personalised after healing milestones.',
      },
    ],
    beforeAfter: [
      { id: 1, title: 'Hairline Restore', before: imgHair3, after: imgCare },
      { id: 2, title: 'Density Rebuild', before: imgHair2, after: imgHair },
    ],
    related: ['prp-hair-treatment', 'scalp-analysis-consultation', 'hair-loss-treatment'],
  },

  'hair-regrowth-treatment': {
    slug: 'hair-regrowth-treatment',
    title: 'Hair Regrowth Treatment',
    heroTitle: 'Hair Regrowth Treatment in Chennai',
    heroSubtitle:
      'Medical regimens to revive early thinning and support healthier growth cycles at Capilla Perumbakkam.',
    image: imgCare,
    breadcrumb: 'Hair Regrowth Treatment',
    seo: {
      title: 'Hair Regrowth Treatment Chennai | Hair Clinic Perumbakkam | Capilla',
      description:
        'Hair regrowth treatment in Chennai at Capilla. Personalised plans for thinning hair near Perumbakkam, Medavakkam & Sholinganallur.',
      keywords:
        'Hair Regrowth Treatment Chennai, Hair Clinic Perumbakkam, Hair Loss Treatment Chennai, Best Hair Clinic Chennai',
      canonical: 'https://capillaclinic.com/treatments/hair-regrowth-treatment',
    },
    overview: [
      'Hair regrowth treatment focuses on supporting follicles through medical therapies, regenerative options, and lifestyle corrections tailored to your diagnosis.',
      'Early intervention often yields better outcomes — Capilla designs plans after proper scalp analysis rather than generic packages.',
    ],
    benefits: [
      'Targets early thinning',
      'Personalised multi-step plans',
      'Supports healthier growth cycles',
      'Can combine regenerative therapies',
      'Progress tracked over time',
      'Non-surgical focus for suitable cases',
    ],
    treatmentOptions: [
      {
        title: 'Medical Therapy Guidance',
        description: 'Evidence-informed regimens matched to pattern and scalp condition.',
      },
      {
        title: 'Regenerative Support',
        description: 'PRP/GFC pathways when clinically appropriate.',
      },
      {
        title: 'Scalp Health Optimisation',
        description: 'Care for barrier issues that interfere with growth quality.',
      },
    ],
    hairGrowthCycle: [
      'Anagen — active growth phase',
      'Catagen — brief transition phase',
      'Telogen — resting/shedding phase',
      'Treatment aims to support healthier cycling over time',
    ],
    procedure: [
      { title: 'Diagnosis', text: 'Cause and stage of thinning are identified.' },
      { title: 'Plan Design', text: 'Therapies and timelines are matched to your goals.' },
      { title: 'Active Treatment', text: 'Sessions and home regimens begin under supervision.' },
      { title: 'Monitoring', text: 'Reviews measure response and refine the protocol.' },
    ],
    expectedResults:
      'Regrowth is gradual. Many patients notice reduced shedding and improved hair quality before denser cosmetic change becomes obvious.',
    whoNeeds: [
      'Early thinning or widening partitions',
      'Increased daily shedding',
      'Patients seeking non-surgical options first',
      'Those ready for consistent follow-up',
    ],
    afterCare:
      'Follow prescribed regimens exactly, protect scalp from harsh practices, and keep review appointments for measured progress.',
    whyCapilla: [
      'Diagnosis before treatment',
      'Realistic milestone planning',
      'Combination therapy options',
      'Hair specialist oversight',
    ],
    equipment: [
      'Digital hair assessment tools',
      'Clinical photography',
      'Regenerative treatment systems',
      'Scalp care protocols',
    ],
    faqs: [
      {
        id: 1,
        question: 'Can all hair loss be reversed?',
        answer:
          'Not all patterns reverse fully. Early stages generally respond better. We set honest goals after diagnosis.',
      },
      {
        id: 2,
        question: 'How long before I see regrowth?',
        answer:
          'Hair cycles take time — meaningful change often spans months. Consistency is essential.',
      },
      {
        id: 3,
        question: 'Do I still need a transplant later?',
        answer:
          'Some patients remain non-surgical; others eventually choose FUE for hairline goals. Analysis guides that decision.',
      },
    ],
    beforeAfter: [{ id: 1, title: 'Regrowth Progress', before: imgHair2, after: imgHair }],
    related: ['prp-hair-treatment', 'gfc-hair-treatment', 'hair-loss-treatment'],
  },

  'hair-loss-treatment': {
    slug: 'hair-loss-treatment',
    title: 'Hair Loss Treatment',
    heroTitle: 'Hair Loss Treatment in Chennai',
    heroSubtitle:
      'Diagnostic-led care for pattern baldness and shedding — expert hair specialist plans at Capilla Perumbakkam.',
    image: imgHair2,
    breadcrumb: 'Hair Loss Treatment',
    seo: {
      title: 'Hair Loss Treatment Chennai | Hair Specialist Perumbakkam | Capilla',
      description:
        'Hair loss treatment in Chennai at Capilla. Diagnose causes and start personalised care near Perumbakkam, Medavakkam & Sholinganallur.',
      keywords:
        'Hair Loss Treatment Chennai, Hair Specialist Chennai, Hair Clinic Perumbakkam, Best Hair Clinic Chennai',
      canonical: 'https://capillaclinic.com/treatments/hair-loss-treatment',
    },
    overview: [
      'Effective hair loss treatment starts with understanding why shedding or thinning is happening — genetics, scalp health, nutrition, stress, or hormonal factors.',
      'Capilla builds staged plans that may include medical therapy, regenerative support, lifestyle advice, and surgical referral when appropriate.',
    ],
    causes: [
      'Androgenetic (pattern) hair loss',
      'Telogen effluvium after stress or illness',
      'Scalp conditions affecting follicle health',
      'Nutritional or lifestyle contributors',
      'Hormonal influences (assessed clinically)',
    ],
    diagnosisSteps: [
      'History and pattern assessment',
      'Scalp and density evaluation',
      'Digital documentation when useful',
      'Personalised treatment pathway recommendation',
    ],
    treatmentOptions: [
      {
        title: 'Medical Management',
        description: 'Supervised therapies matched to diagnosis and tolerance.',
      },
      {
        title: 'Regenerative Options',
        description: 'PRP or GFC when suitable for density support.',
      },
      {
        title: 'Surgical Restoration',
        description: 'FUE transplant discussion for advanced stable loss with good donor supply.',
      },
    ],
    lifestyleAdvice: [
      'Avoid aggressive styling heat and tight traction',
      'Support protein-adequate nutrition',
      'Manage stress with sustainable routines',
      'Use only specialist-approved scalp products',
      'Attend follow-ups to adjust therapy early',
    ],
    benefits: [
      'Root-cause focused planning',
      'Clear treatment sequencing',
      'Options for every stage of loss',
      'Honest prognosis counselling',
      'Integrated lifestyle guidance',
      'Long-term monitoring',
    ],
    procedure: [
      { title: 'Consultation', text: 'Concerns, history, and goals are discussed in detail.' },
      { title: 'Diagnosis', text: 'Pattern and likely drivers are identified.' },
      { title: 'Treatment Start', text: 'Medical/regenerative steps begin as indicated.' },
      { title: 'Follow-Up', text: 'Response is measured and the plan refined.' },
    ],
    whoNeeds: [
      'Noticeable shedding or thinning',
      'Family history of pattern baldness',
      'Patients confused by conflicting online advice',
      'Anyone wanting a structured specialist plan',
    ],
    afterCare:
      'Consistency with prescribed care matters most. Report side effects promptly and avoid switching products without guidance.',
    whyCapilla: [
      'Hair specialist diagnosis first',
      'No one-size packaging',
      'Full pathway from medical to surgical',
      'Supportive patient education',
    ],
    equipment: [
      'Clinical scalp examination tools',
      'Progress photography',
      'Regenerative therapy systems',
      'FUE capability for eligible cases',
    ],
    faqs: [
      {
        id: 1,
        question: 'Should I wait before treating hair loss?',
        answer:
          'Earlier care usually protects more follicles. Waiting can limit non-surgical options later.',
      },
      {
        id: 2,
        question: 'Are oil massages enough?',
        answer:
          'Oils may soothe scalp feel but rarely reverse patterned loss alone. Medical assessment remains essential.',
      },
      {
        id: 3,
        question: 'Do women receive the same treatments as men?',
        answer:
          'Protocols differ. Female hair loss needs tailored diagnosis and carefully selected therapies.',
      },
    ],
    beforeAfter: [{ id: 1, title: 'Loss Stabilisation Path', before: imgHair2, after: imgHair }],
    related: ['scalp-analysis-consultation', 'prp-hair-treatment', 'hair-transplant'],
  },

  'scalp-analysis-consultation': {
    slug: 'scalp-analysis-consultation',
    title: 'Scalp Analysis & Consultation',
    heroTitle: 'Scalp Analysis & Hair Consultation',
    heroSubtitle:
      'Digital hair analysis and specialist consultation to recommend the right restoration pathway at Capilla Perumbakkam.',
    image: imgConsult,
    breadcrumb: 'Scalp Analysis & Consultation',
    seo: {
      title: 'Scalp Analysis & Hair Consultation Perumbakkam | Capilla Hair Clinic',
      description:
        'Digital scalp analysis and hair specialist consultation in Perumbakkam. Get personalised PRP, GFC, regrowth or transplant recommendations near Medavakkam & Sholinganallur.',
      keywords:
        'Hair Specialist Chennai, Hair Clinic Perumbakkam, Best Hair Clinic Chennai, Hair Clinic Medavakkam, Hair Clinic Sholinganallur',
      canonical: 'https://capillaclinic.com/treatments/scalp-analysis-consultation',
    },
    overview: [
      'A scalp analysis consultation is the foundation of effective hair care — understanding density, pattern, scalp condition, and realistic goals before choosing therapy.',
      'At Capilla, analysis guides whether PRP, GFC, medical regrowth, or transplant counselling is most appropriate for you.',
    ],
    digitalAnalysis: [
      'Visual density and pattern mapping',
      'Scalp condition review (oiliness, flaking, sensitivity)',
      'Discussion of shedding history and lifestyle factors',
      'Photographic documentation for progress baselines',
    ],
    scalpHealthCheck: [
      'Barrier and inflammation indicators',
      'Dandruff or irritation assessment',
      'Hair shaft quality observations',
      'Donor and recipient considerations when relevant',
    ],
    treatmentRecommendations: [
      {
        title: 'Non-Surgical Pathways',
        description: 'Medical and regenerative options for early–moderate thinning.',
      },
      {
        title: 'Surgical Pathways',
        description: 'FUE transplant discussion when donor supply and goals align.',
      },
      {
        title: 'Maintenance Plans',
        description: 'Long-term strategies to protect results after active treatment.',
      },
    ],
    benefits: [
      'Clarity before spending on treatment',
      'Personalised recommendations',
      'Avoids trial-and-error packages',
      'Baseline for measuring progress',
      'Specialist-led counselling',
      'Confidence in next steps',
    ],
    procedure: [
      { title: 'History Intake', text: 'We review concerns, timeline, and prior treatments.' },
      { title: 'Scalp & Hair Exam', text: 'Clinical and digital assessment identifies key findings.' },
      { title: 'Recommendation', text: 'A clear plan outlines options, timelines, and priorities.' },
      { title: 'Booking Next Step', text: 'You choose whether to proceed with the suggested pathway.' },
    ],
    whoNeeds: [
      'Anyone noticing new shedding or thinning',
      'Patients comparing PRP vs transplant online',
      'People wanting a second specialist opinion',
      'Those starting hair care with clarity first',
    ],
    afterCare:
      'If no procedure is done the same day, simply follow any scalp-care tips provided. Bring prior reports or photos to future visits if available.',
    whyCapilla: [
      'Diagnosis-first philosophy',
      'Transparent recommendations',
      'Access to full treatment spectrum',
      'Luxury consultation experience',
    ],
    equipment: [
      'Digital analysis support',
      'Clinical examination tools',
      'Progress photography setup',
      'Specialist consultation suites',
    ],
    faqs: [
      {
        id: 1,
        question: 'How long is a scalp analysis consultation?',
        answer:
          'Typically 20–40 minutes depending on complexity, allowing time for exam and clear recommendations.',
      },
      {
        id: 2,
        question: 'Will I be pushed into a transplant?',
        answer:
          'No. We recommend what fits your stage and goals — including non-surgical options when appropriate.',
      },
      {
        id: 3,
        question: 'Can I start treatment the same day?',
        answer:
          'Sometimes for selected therapies after clearance. More often, planning and scheduling follow the consultation.',
      },
    ],
    beforeAfter: [],
    related: ['prp-hair-treatment', 'hair-transplant', 'hair-loss-treatment'],
  },
};

export function getHairTreatment(slug) {
  return hairTreatmentPages[slug] || null;
}

export function getRelatedHairTreatments(slugs = []) {
  return slugs
    .map((slug) => hairTreatmentPages[slug])
    .filter(Boolean)
    .map((t) => ({
      slug: t.slug,
      title: t.title,
      description: t.heroSubtitle,
      image: t.image,
      path: `/treatments/${t.slug}`,
    }));
}
