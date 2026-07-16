import { placeholders } from './content';

const imgSkin = placeholders.skin;
const imgGlow =
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80';
const imgFacial =
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc2362?w=1200&q=80';
const imgPeel =
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80';
const imgAcne =
  'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80';
const imgAntiAge =
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc2362?w=1200&q=80';

export const skinSeo = {
  title:
    'Advanced Skin Treatments in Perumbakkam | Hydrafacial & Aesthetic Clinic | Capilla',
  description:
    'Skin clinic in Perumbakkam offering Hydrafacial, chemical peel, acne scar, glass skin & anti-ageing treatments. Serving Medavakkam & Sholinganallur. Book your consultation.',
  keywords:
    'Skin Clinic Perumbakkam, Hydrafacial in Perumbakkam, Hydrafacial in Chennai, Chemical Peel Chennai, Skin Clinic Medavakkam, Skin Clinic Sholinganallur',
  canonical: 'https://capillaclinic.com/skin',
};

export const skinHero = {
  title: 'Advanced Skin Treatments in Perumbakkam',
  lines: ['Healthy Skin.', 'Natural Glow.', 'Timeless Beauty.'],
  subtitle:
    'Medical-grade aesthetics at Capilla — Hydrafacial, peels, scar care, brightening, glass skin, and anti-ageing — delivered with clinical precision and luxury comfort.',
  image: imgSkin,
};

export const skinTreatmentsList = [
  {
    id: 'hydrafacial',
    title: 'Hydrafacial',
    description: 'Deep cleanse, extract, and hydrate for instant luminosity with zero downtime.',
    image: '/treatments/skin/hydrafacial.jpg',
    path: '/treatments/hydrafacial',
    benefits: ['Instant glow', 'No downtime', 'Customizable boosters'],
  },
  {
    id: 'medi-facials',
    title: 'Medi Facials',
    description: 'Medical-grade facials tailored to your skin type for visible freshness and glow.',
    image: '/treatments/skin/facial-treatments.jpg',
    path: '/contact',
    benefits: ['Personalised rituals', 'Clinical actives', 'Visible freshness'],
  },
  {
    id: 'skin-peels',
    title: 'Skin Peels',
    description: 'Controlled exfoliating peels to renew texture, tone, and clarity for fresher skin.',
    image: '/treatments/skin/skin-rejuvenation.jpg',
    path: '/treatments/chemical-peel',
    benefits: ['Smoother texture', 'Brighter tone', 'Cell renewal'],
  },
  {
    id: 'chemical-peel',
    title: 'Chemical Peel',
    description: 'Medical peels to renew texture, tone, and clarity under specialist supervision.',
    image: '/treatments/skin/pigmentation-treatment.jpg',
    path: '/treatments/chemical-peel',
    benefits: ['Even skin tone', 'Smoother texture', 'Clinical protocols'],
  },
  {
    id: 'acne-correction',
    title: 'Acne Correction',
    description: 'Targeted protocols to control active acne and calm breakouts for clearer skin.',
    image: '/treatments/skin/acne-scar-treatment.jpg',
    path: '/contact',
    benefits: ['Breakout control', 'Oil balance', 'Doctor-led plans'],
  },
  {
    id: 'acne-scar-reduction',
    title: 'Acne Scar Reduction',
    description: 'Advanced protocols to soften acne scars and restore smoother skin texture.',
    image: '/treatments/skin/acne-scar-treatment.jpg',
    path: '/treatments/acne-scar-treatment',
    benefits: ['Scar refinement', 'Texture improvement', 'Confidence restored'],
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    description: 'Safe, precise laser technology for long-term reduction of unwanted hair.',
    image: '/treatments/skin/laser-skin-therapy.jpg',
    path: '/contact',
    benefits: ['Smooth skin', 'Long-term reduction', 'Precision targeting'],
  },
  {
    id: 'iv-glow-whitening',
    title: 'IV Glow / Whitening',
    description: 'Doctor-supervised IV infusions with antioxidants to support radiance and even tone.',
    image: '/treatments/skin/skin-whitening-treatment.jpg',
    path: '/contact',
    benefits: ['Inner glow', 'Antioxidant boost', 'Even tone'],
  },
  {
    id: 'skin-whitening-treatment',
    title: 'Skin Whitening Treatment',
    description: 'Clinical brightening for a more even, radiant complexion with safe actives.',
    image: '/treatments/skin/skin-whitening-treatment.jpg',
    path: '/treatments/skin-whitening-treatment',
    benefits: ['Tone correction', 'Radiant finish', 'Doctor-supervised'],
  },
  {
    id: 'korean-glass-skin-facial',
    title: 'Korean Glass Skin Facial',
    description: 'Layered hydration ritual for translucent, dewy, “glass-like” radiance.',
    image: '/treatments/skin/korean-glass-skin-facial.jpg',
    path: '/treatments/korean-glass-skin-facial',
    benefits: ['Dewy finish', 'Pore refinement', 'Barrier support'],
  },
  {
    id: 'dark-circle-treatment',
    title: 'Dark Circle Treatment',
    description: 'Targeted care to reduce under-eye darkness, puffiness, and tired-looking eyes.',
    image: '/treatments/skin/skin-rejuvenation.jpg',
    path: '/contact',
    benefits: ['Brighter under-eyes', 'Reduced puffiness', 'Refreshed look'],
  },
  {
    id: 'melasma-treatment',
    title: 'Melasma Treatment',
    description: 'Evidence-based care for melasma and stubborn pigmentation with sun-safe protocols.',
    image: '/treatments/skin/pigmentation-treatment.jpg',
    path: '/contact',
    benefits: ['Pigment control', 'Customised plans', 'Sun-care guidance'],
  },
  {
    id: 'skin-rejuvenation-therapy',
    title: 'Skin Rejuvenation Therapy',
    description: 'Revitalising therapies that refresh dull, tired, or stressed skin for a healthy glow.',
    image: '/treatments/skin/skin-rejuvenation.jpg',
    path: '/contact',
    benefits: ['Revived radiance', 'Improved texture', 'Comfort sessions'],
  },
  {
    id: 'face-gfc-treatment',
    title: 'Face GFC Treatment',
    description: 'Growth factor concentrate facial therapy to boost collagen and skin quality.',
    image: '/treatments/skin/facial-treatments.jpg',
    path: '/contact',
    benefits: ['Collagen boost', 'Skin firmness', 'Natural rejuvenation'],
  },
  {
    id: 'anti-ageing-treatment',
    title: 'Anti-Ageing Treatment',
    description: 'Refined protocols to soften lines, firm skin, and restore youthful vitality.',
    image: '/treatments/skin/anti-ageing-treatment.jpg',
    path: '/treatments/anti-ageing-treatment',
    benefits: ['Firms & lifts look', 'Softens fine lines', 'Natural results'],
  },
  {
    id: 'vampire-facial',
    title: 'Vampire Facial',
    description: 'PRP-powered facial that harnesses your own growth factors for radiant, rejuvenated skin.',
    image: '/treatments/skin/hydrafacial.jpg',
    path: '/contact',
    benefits: ['Natural rejuvenation', 'Collagen support', 'Glowing finish'],
  },
  {
    id: 'botox',
    title: 'Botox',
    description: 'Expert anti-wrinkle injections to smooth expression lines for a refreshed, natural look.',
    image: '/treatments/skin/anti-ageing-treatment.jpg',
    path: '/contact',
    benefits: ['Softens wrinkles', 'Quick procedure', 'Natural results'],
  },
  {
    id: 'fillers',
    title: 'Fillers',
    description: 'Dermal fillers to restore volume, contour features, and refresh facial harmony.',
    image: '/treatments/skin/anti-ageing-treatment.jpg',
    path: '/contact',
    benefits: ['Restores volume', 'Facial contour', 'Instant effect'],
  },
  {
    id: 'threads-lift',
    title: 'Threads Lift',
    description: 'Minimally invasive thread lift to subtly lift and tighten sagging skin.',
    image: '/treatments/skin/anti-ageing-treatment.jpg',
    path: '/contact',
    benefits: ['Non-surgical lift', 'Skin tightening', 'Minimal downtime'],
  },
  {
    id: 'mole-removal',
    title: 'Mole Removal',
    description: 'Safe, precise removal of moles with minimal scarring under expert care.',
    image: '/treatments/skin/laser-skin-therapy.jpg',
    path: '/contact',
    benefits: ['Precise removal', 'Minimal scarring', 'Quick recovery'],
  },
  {
    id: 'wart-removal',
    title: 'Wart Removal',
    description: 'Effective clinical removal of warts with comfort-focused, hygienic protocols.',
    image: '/treatments/skin/laser-skin-therapy.jpg',
    path: '/contact',
    benefits: ['Effective clearance', 'Hygienic care', 'Comfort-focused'],
  },
  {
    id: 'skin-tag-removal',
    title: 'Skin Tag Removal',
    description: 'Gentle, precise removal of skin tags for smooth, clear skin.',
    image: '/treatments/skin/laser-skin-therapy.jpg',
    path: '/contact',
    benefits: ['Smooth finish', 'Quick procedure', 'Minimal discomfort'],
  },
  {
    id: 'lip-darkness-correction',
    title: 'Lip Darkness Correction',
    description: 'Specialist treatments to lighten dark lips and restore a healthy, natural tone.',
    image: '/treatments/skin/pigmentation-treatment.jpg',
    path: '/contact',
    benefits: ['Even lip tone', 'Natural finish', 'Doctor-supervised'],
  },
  {
    id: 'lip-micropigmentation',
    title: 'Lip Micropigmentation',
    description: 'Semi-permanent lip tint to enhance colour, shape, and definition naturally.',
    image: '/treatments/skin/facial-treatments.jpg',
    path: '/contact',
    benefits: ['Natural tint', 'Defined shape', 'Long-lasting'],
  },
  {
    id: 'eyebrow-microblading',
    title: 'Eyebrow Microblading',
    description: 'Hair-stroke microblading for naturally fuller, beautifully shaped eyebrows.',
    image: '/treatments/skin/facial-treatments.jpg',
    path: '/contact',
    benefits: ['Natural strokes', 'Fuller brows', 'Long-lasting'],
  },
  {
    id: 'eyebrow-shading',
    title: 'Eyebrow Micro / Nano / Ombre Shading',
    description: 'Advanced brow shading techniques for soft, defined, and elegant eyebrows.',
    image: '/treatments/skin/facial-treatments.jpg',
    path: '/contact',
    benefits: ['Soft definition', 'Custom styles', 'Refined finish'],
  },
  {
    id: 'eyelash-extension',
    title: 'Eyelash Extension',
    description: 'Premium lash extensions for fuller, longer, and beautifully defined eyes.',
    image: '/treatments/skin/korean-glass-skin-facial.jpg',
    path: '/contact',
    benefits: ['Fuller lashes', 'Natural look', 'Custom volume'],
  },
  {
    id: 'eyelash-lift',
    title: 'Eyelash Lift',
    description: 'A lifting treatment that curls and elevates natural lashes for an awake, open-eyed look.',
    image: '/treatments/skin/korean-glass-skin-facial.jpg',
    path: '/contact',
    benefits: ['Lifted curl', 'Low maintenance', 'Natural finish'],
  },
  {
    id: 'vitiligo-camouflage',
    title: 'Vitiligo Camouflage',
    description: 'Cosmetic camouflage techniques to blend and conceal vitiligo patches naturally.',
    image: '/treatments/skin/skin-whitening-treatment.jpg',
    path: '/contact',
    benefits: ['Natural blending', 'Even appearance', 'Confidence boost'],
  },
  {
    id: 'cosmetic-cosmeceuticals',
    title: 'Cosmetic Cosmeceuticals',
    description: 'Doctor-prescribed cosmeceutical skincare for targeted, science-backed results.',
    image: '/treatments/skin/skin-rejuvenation.jpg',
    path: '/contact',
    benefits: ['Clinical actives', 'Targeted care', 'Prescribed regimen'],
  },
  {
    id: 'ear-lobe-repair',
    title: 'Ear Lobe Repair',
    description: 'Quick, precise repair of torn or stretched ear lobes with minimal scarring.',
    image: '/treatments/skin/facial-treatments.jpg',
    path: '/contact',
    benefits: ['Restored lobe', 'Minimal scarring', 'Quick procedure'],
  },
  {
    id: 'ear-piercing',
    title: 'Ear Piercing',
    description: 'Safe, hygienic ear piercing performed with sterile, comfort-focused technique.',
    image: '/treatments/skin/facial-treatments.jpg',
    path: '/contact',
    benefits: ['Sterile technique', 'Comfort-focused', 'Precise placement'],
  },
  {
    id: 'dimple-creation',
    title: 'Dimple Creation',
    description: 'Minor cosmetic procedure to create natural-looking dimples for a charming smile.',
    image: '/treatments/skin/facial-treatments.jpg',
    path: '/contact',
    benefits: ['Natural look', 'Quick procedure', 'Personalised placement'],
  },
];

export const skinWhyChoose = [
  { id: 1, title: 'Certified Skin Specialists', description: 'Aesthetic physicians with advanced dermatology training.', icon: 'BadgeCheck' },
  { id: 2, title: 'Advanced Aesthetic Equipment', description: 'Medical-grade platforms for hydradermabrasion and peels.', icon: 'Cpu' },
  { id: 3, title: 'Personalized Skin Analysis', description: 'Custom plans based on skin type, concerns, and lifestyle.', icon: 'ScanFace' },
  { id: 4, title: 'Safe & Hygienic Procedures', description: 'Sterile protocols and doctor-supervised treatments.', icon: 'ShieldCheck' },
  { id: 5, title: 'Latest Technology', description: 'Evidence-based actives and modern facial systems.', icon: 'Sparkles' },
  { id: 6, title: 'Visible Results', description: 'Glow and texture improvements you can see and feel.', icon: 'Eye' },
  { id: 7, title: 'Affordable Packages', description: 'Transparent packages without compromising clinical care.', icon: 'Gem' },
  { id: 8, title: 'Comfortable Experience', description: 'A calm, luxury clinic environment from consult to aftercare.', icon: 'HeartHandshake' },
];

export const skinProcess = [
  { id: 1, title: 'Book Appointment', description: 'Schedule online, WhatsApp, or call at your convenience.' },
  { id: 2, title: 'Skin Analysis', description: 'Detailed assessment of type, concerns, and skin barrier.' },
  { id: 3, title: 'Treatment Planning', description: 'A personalised protocol with clear timelines and expectations.' },
  { id: 4, title: 'Procedure', description: 'Comfortable, hygienic treatment by certified specialists.' },
  { id: 5, title: 'After Care', description: 'Home-care guidance to protect and extend your results.' },
];

export const skinTestimonials = [
  {
    id: 1,
    name: 'Nisha V.',
    rating: 5,
    text: 'Best Hydrafacial in Perumbakkam — my skin looked glass-like the same evening. Capilla feels truly premium.',
    date: '2 weeks ago',
    avatar: placeholders.doctor,
  },
  {
    id: 2,
    name: 'Priya K.',
    rating: 5,
    text: 'Chemical peel was gentle yet effective. Pigmentation looks softer and the team explained aftercare perfectly.',
    date: '1 month ago',
    avatar: placeholders.doctor,
  },
  {
    id: 3,
    name: 'Sana R.',
    rating: 5,
    text: 'Acne scar plan was honest and realistic. Texture has improved steadily — highly recommend this skin clinic.',
    date: '3 weeks ago',
    avatar: placeholders.doctorMale,
  },
];

export const skinBeforeAfter = [
  {
    id: 1,
    title: 'Hydrafacial Glow',
    category: 'Hydrafacial',
    before: imgGlow,
    after: imgFacial,
  },
  {
    id: 2,
    title: 'Peel Clarity',
    category: 'Chemical Peel',
    before: imgAcne,
    after: imgPeel,
  },
  {
    id: 3,
    title: 'Glass Skin Finish',
    category: 'Facial',
    before: imgSkin,
    after: imgFacial,
  },
];

export const skinFaqs = [
  {
    id: 1,
    question: 'Which skin treatments does Capilla offer?',
    answer:
      'We offer Hydrafacial, chemical peels, acne scar care, skin whitening/brightening, Korean glass skin facials, anti-ageing protocols, pigmentation care, rejuvenation, and medical facials.',
  },
  {
    id: 2,
    question: 'Is Capilla a good skin clinic near Medavakkam or Sholinganallur?',
    answer:
      'Yes. Patients from Perumbakkam, Medavakkam, and Sholinganallur visit Capilla for medical-grade aesthetics with transparent guidance and luxury comfort.',
  },
  {
    id: 3,
    question: 'Is there downtime after facials and peels?',
    answer:
      'Hydrafacial typically has no downtime. Peels may involve mild redness or flaking depending on strength — we explain expectations before treatment.',
  },
  {
    id: 4,
    question: 'How do I book a skin consultation?',
    answer:
      'Book via our Contact page, WhatsApp, or phone. We will match you with the right skin specialist and preferred slot.',
  },
];

export const skinTreatmentPages = {
  hydrafacial: {
    slug: 'hydrafacial',
    title: 'Hydrafacial',
    heroTitle: 'Hydrafacial in Chennai & Perumbakkam',
    heroSubtitle:
      'The signature multi-step facial for instant glow — deep cleanse, extract, hydrate. Best Hydrafacial clinic experience at Capilla.',
    image: '/treatments/skin/hydrafacial.jpg',
    breadcrumb: 'Hydrafacial',
    seo: {
      title: 'Hydrafacial in Chennai | Best Hydrafacial Clinic Perumbakkam | Capilla',
      description:
        'Hydrafacial in Perumbakkam & Chennai at Capilla. Instant glow, no downtime. Best Hydrafacial clinic near Medavakkam & Sholinganallur. Book today.',
      keywords:
        'Hydrafacial in Chennai, Hydrafacial in Perumbakkam, Best Hydrafacial Clinic Chennai, Skin Clinic Perumbakkam',
      canonical: 'https://capillaclinic.com/treatments/hydrafacial',
    },
    overview: [
      'Hydrafacial is a non-invasive hydradermabrasion treatment that cleanses, exfoliates, extracts impurities, and infuses hydrating serums in one luxurious session.',
      'At Capilla, boosters are personalised for dullness, fine lines, congestion, or dehydration — making us a preferred destination for Hydrafacial in Chennai.',
    ],
    benefits: [
      'Instant luminosity',
      'Deep yet gentle cleansing',
      'Improved hydration',
      'Visible pore refinement',
      'No downtime for most clients',
      'Custom booster serums',
    ],
    howItWorks: [
      'Cleansing & exfoliation softens dead surface cells',
      'Gentle extraction clears congested pores',
      'Hydration infusion replenishes moisture',
      'Optional boosters target specific concerns',
    ],
    procedure: [
      { title: 'Skin Analysis', text: 'We assess skin type and select the ideal tip and booster protocol.' },
      { title: 'Cleanse & Peel', text: 'A gentle exfoliation prepares skin for deeper cleansing.' },
      { title: 'Extract & Hydrate', text: 'Vortex extraction followed by serum infusion for glow.' },
      { title: 'Finish & Protect', text: 'Soothing finish and home-care tips to extend radiance.' },
    ],
    expectedResults:
      'Most clients leave with fresher, more luminous skin the same day. With a series of sessions, texture and clarity continue to improve. Results vary by skin type and lifestyle.',
    afterCare:
      'Avoid harsh exfoliants for 24–48 hours, stay hydrated, use SPF daily, and follow the product plan recommended by your specialist.',
    whoNeeds: [
      'Dull or dehydrated skin',
      'Congested pores and blackheads',
      'Pre-event glow seekers',
      'Clients wanting maintenance facials with medical polish',
    ],
    whyCapilla: [
      'Certified aesthetic specialists',
      'Personalised booster mapping',
      'Hygienic, luxury treatment suites',
      'Clear aftercare coaching',
    ],
    equipment: [
      'Hydradermabrasion system',
      'Medical-grade serums',
      'Skin analysis tools',
      'Controlled extraction technology',
    ],
    faqs: [
      {
        id: 1,
        question: 'How often should I get a Hydrafacial?',
        answer:
          'Many clients prefer monthly sessions for maintenance. Your specialist may recommend a series based on skin goals.',
      },
      {
        id: 2,
        question: 'Is Hydrafacial suitable for sensitive skin?',
        answer:
          'Often yes — protocols can be customised. We assess sensitivity during consultation before proceeding.',
      },
      {
        id: 3,
        question: 'Where can I get the best Hydrafacial in Perumbakkam?',
        answer:
          'Capilla offers doctor-supervised Hydrafacial with premium protocols for patients across Perumbakkam, Medavakkam, and Sholinganallur.',
      },
    ],
    beforeAfter: [
      { id: 1, title: 'Instant Glow', before: imgGlow, after: imgFacial },
      { id: 2, title: 'Hydration Boost', before: imgSkin, after: imgFacial },
    ],
    related: ['chemical-peel', 'korean-glass-skin-facial', 'anti-ageing-treatment'],
  },

  'chemical-peel': {
    slug: 'chemical-peel',
    title: 'Chemical Peel',
    heroTitle: 'Chemical Peel in Chennai',
    heroSubtitle:
      'Medical-grade peels to renew tone, texture, and clarity — safely delivered at Capilla Skin Clinic Perumbakkam.',
    image: imgPeel,
    breadcrumb: 'Chemical Peel',
    seo: {
      title: 'Chemical Peel Chennai | Medical Peels Perumbakkam | Capilla',
      description:
        'Chemical peel in Chennai at Capilla Perumbakkam. Improve texture, pigmentation and glow with doctor-led peels near Medavakkam & Sholinganallur.',
      keywords:
        'Chemical Peel Chennai, Skin Clinic Perumbakkam, Skin Clinic Medavakkam, Skin Clinic Sholinganallur',
      canonical: 'https://capillaclinic.com/treatments/chemical-peel',
    },
    overview: [
      'Chemical peels use controlled exfoliating solutions to accelerate cell turnover, improve texture, and refine uneven tone.',
      'Capilla peels are selected after skin analysis — from gentle refresh peels to deeper protocols for stubborn concerns.',
    ],
    peelTypes: [
      {
        title: 'Superficial Peels',
        description: 'Gentle refresh for glow, mild pigmentation, and smoother texture with minimal downtime.',
      },
      {
        title: 'Medium Peels',
        description: 'Targeted peels for deeper pigment, acne marks, and more pronounced texture concerns.',
      },
      {
        title: 'Custom Combination Peels',
        description: 'Specialist-selected blends tailored to your skin type and seasonal sensitivity.',
      },
    ],
    benefits: [
      'Brighter, fresher complexion',
      'Smoother skin texture',
      'Supports pigment correction',
      'Helps with mild acne marks',
      'Stimulates renewal',
      'Clinically supervised safety',
    ],
    procedure: [
      { title: 'Assessment', text: 'We determine peel depth and suitability for your skin.' },
      { title: 'Prep & Protect', text: 'Skin is cleansed; sensitive areas are carefully protected.' },
      { title: 'Peel Application', text: 'The solution is applied for a controlled interval.' },
      { title: 'Neutralise & Soothe', text: 'Skin is calmed and aftercare instructions are shared.' },
    ],
    recovery:
      'Mild redness or flaking can occur depending on peel strength. Avoid picking, use SPF diligently, and follow moisturising guidance for optimal renewal.',
    whoNeeds: [
      'Uneven tone or mild pigmentation',
      'Rough texture or congested skin',
      'Dullness resistant to basic facials',
      'Clients open to scheduled peel series',
    ],
    whyCapilla: [
      'Dermatology-informed peel selection',
      'Transparent downtime expectations',
      'Medical-grade formulations',
      'Structured follow-up care',
    ],
    equipment: [
      'Clinical peel systems',
      'Skin type assessment tools',
      'Protective barrier products',
      'Post-peel recovery range',
    ],
    faqs: [
      {
        id: 1,
        question: 'How many peels will I need?',
        answer:
          'Often a series of sessions spaced weeks apart delivers the best cumulative results. We customise after analysis.',
      },
      {
        id: 2,
        question: 'Can I wear makeup after a peel?',
        answer:
          'Usually avoid makeup until the next day or as advised. Mineral options may be allowed depending on peel depth.',
      },
      {
        id: 3,
        question: 'Is chemical peel safe for Indian skin tones?',
        answer:
          'When correctly selected and supervised, yes. We prioritise peel choice and sun protection to minimise pigment risk.',
      },
    ],
    beforeAfter: [{ id: 1, title: 'Tone Refresh', before: imgAcne, after: imgPeel }],
    related: ['hydrafacial', 'skin-whitening-treatment', 'acne-scar-treatment'],
  },

  'acne-scar-treatment': {
    slug: 'acne-scar-treatment',
    title: 'Acne Scar Treatment',
    heroTitle: 'Acne Scar Treatment in Chennai',
    heroSubtitle:
      'Specialist protocols to soften acne scars and restore smoother, more even-looking skin at Capilla Perumbakkam.',
    image: '/treatments/skin/acne-scar-treatment.jpg',
    breadcrumb: 'Acne Scar Treatment',
    seo: {
      title: 'Acne Scar Treatment Chennai | Scar Care Perumbakkam | Capilla',
      description:
        'Acne scar treatment in Chennai at Capilla. Improve texture and acne marks with personalised plans in Perumbakkam near Medavakkam & Sholinganallur.',
      keywords:
        'Acne Scar Treatment Chennai, Skin Clinic Perumbakkam, Skin Clinic Medavakkam, Skin Clinic Sholinganallur',
      canonical: 'https://capillaclinic.com/treatments/acne-scar-treatment',
    },
    overview: [
      'Acne scars form when inflamed acne damages collagen. Treatments aim to remodel texture, soften edges, and improve overall skin evenness.',
      'Capilla creates staged plans — never one-size-fits-all — combining evidence-based modalities with realistic timelines.',
    ],
    causes: [
      'Inflammatory or cystic acne episodes',
      'Delayed or inadequate early acne care',
      'Picking or squeezing lesions',
      'Genetic healing response variations',
    ],
    treatmentOptions: [
      {
        title: 'Resurfacing Peels',
        description: 'Controlled peels to improve superficial marks and surface irregularity.',
      },
      {
        title: 'Microneedling / Collagen Induction',
        description: 'Stimulates repair pathways to refine atrophic scar texture over sessions.',
      },
      {
        title: 'Combination Protocols',
        description: 'Personalised sequences pairing facial therapy, peels, and regenerative care.',
      },
    ],
    benefits: [
      'Smoother-looking texture',
      'Softer scar appearance',
      'Improved skin confidence',
      'Custom multi-step plans',
      'Doctor-supervised safety',
      'Progress tracked over time',
    ],
    procedure: [
      { title: 'Scar Mapping', text: 'We classify scar types and severity for accurate planning.' },
      { title: 'Protocol Design', text: 'Modalities and session intervals are outlined clearly.' },
      { title: 'Treatment Sessions', text: 'Procedures are delivered with comfort and hygiene focus.' },
      { title: 'Review & Adjust', text: 'Progress is reviewed and the plan refined as needed.' },
    ],
    afterCare:
      'Expect mild redness after some sessions. Use gentle cleansers, avoid harsh acids until cleared, and apply SPF daily to protect healing skin.',
    whoNeeds: [
      'Post-acne marks and textured scars',
      'Patients with stable, controlled acne',
      'Those seeking gradual, realistic improvement',
      'Clients committed to a multi-session journey',
    ],
    whyCapilla: [
      'Honest clinical counselling',
      'Multi-modality scar planning',
      'Hygiene-first procedures',
      'Supportive follow-ups',
    ],
    equipment: [
      'Scar assessment photography',
      'Medical peel systems',
      'Collagen-induction tools',
      'Barrier repair skincare',
    ],
    faqs: [
      {
        id: 1,
        question: 'Can acne scars disappear completely?',
        answer:
          'Most scars improve significantly but may not vanish entirely. We set honest goals and aim for visible, confidence-building refinement.',
      },
      {
        id: 2,
        question: 'How many sessions are required?',
        answer:
          'Typically a series spanning several weeks to months. Exact numbers depend on scar depth and type.',
      },
      {
        id: 3,
        question: 'Should active acne be treated first?',
        answer:
          'Yes — controlling active breakouts first usually improves scar treatment outcomes. We guide sequencing at consultation.',
      },
    ],
    beforeAfter: [{ id: 1, title: 'Texture Refinement', before: imgAcne, after: imgSkin }],
    related: ['chemical-peel', 'hydrafacial', 'skin-whitening-treatment'],
  },

  'skin-whitening-treatment': {
    slug: 'skin-whitening-treatment',
    title: 'Skin Whitening Treatment',
    heroTitle: 'Skin Whitening Treatment in Chennai',
    heroSubtitle:
      'Clinical brightening for a more even, luminous complexion — safe, supervised protocols at Capilla Perumbakkam.',
    image: '/treatments/skin/skin-whitening-treatment.jpg',
    breadcrumb: 'Skin Whitening Treatment',
    seo: {
      title: 'Skin Whitening Treatment Chennai | Brightening Perumbakkam | Capilla',
      description:
        'Skin whitening treatment in Chennai at Capilla. Doctor-led brightening for even tone near Perumbakkam, Medavakkam & Sholinganallur.',
      keywords:
        'Skin Whitening Treatment Chennai, Skin Clinic Perumbakkam, Skin Clinic Medavakkam, Skin Clinic Sholinganallur',
      canonical: 'https://capillaclinic.com/treatments/skin-whitening-treatment',
    },
    overview: [
      'Clinical skin brightening focuses on evening tone, reducing dullness, and enhancing radiance using supervised actives and facial protocols — not unsafe bleaching.',
      'At Capilla, we emphasise barrier health, sun protection, and realistic glow goals tailored to Indian skin.',
    ],
    benefits: [
      'More even-looking complexion',
      'Reduced appearance of dullness',
      'Radiant, healthy finish',
      'Doctor-supervised actives',
      'Customised treatment strength',
      'Lifestyle & SPF coaching',
    ],
    procedure: [
      { title: 'Tone Assessment', text: 'We evaluate pigment pattern, sensitivity, and goals.' },
      { title: 'Protocol Selection', text: 'Peels, facials, or brightening regimens are chosen carefully.' },
      { title: 'In-Clinic Sessions', text: 'Treatments are delivered with comfort and monitoring.' },
      { title: 'Maintenance Plan', text: 'Home care and SPF habits lock in clearer radiance.' },
    ],
    expectedResults:
      'Gradual brightening is typical across a planned series. Consistency with SPF and aftercare strongly influences longevity of results.',
    suitableCandidates:
      'Adults seeking even tone and radiance who can commit to sun protection. We avoid aggressive approaches that risk irritation or rebound pigment.',
    whoNeeds: [
      'Uneven skin tone or dullness',
      'Post-inflammatory marks',
      'Clients wanting supervised brightening',
      'Those preparing for events with a glow plan',
    ],
    whyCapilla: [
      'Ethical brightening philosophy',
      'Skin-barrier first planning',
      'Transparent timelines',
      'Local expertise for Chennai climate',
    ],
    equipment: [
      'Brightening peel systems',
      'Hydrating facial platforms',
      'Tone photography',
      'Medical skincare support',
    ],
    faqs: [
      {
        id: 1,
        question: 'Is skin whitening the same as bleaching?',
        answer:
          'No. Capilla focuses on clinical brightening and tone correction with safety — not harsh bleaching practices.',
      },
      {
        id: 2,
        question: 'How soon will I see results?',
        answer:
          'Some glow appears early; meaningful tone evening usually builds across multiple sessions and disciplined SPF use.',
      },
      {
        id: 3,
        question: 'Can I combine whitening with Hydrafacial?',
        answer:
          'Often yes. Sequencing is planned so treatments complement rather than irritate the skin barrier.',
      },
    ],
    beforeAfter: [{ id: 1, title: 'Brightening Journey', before: imgGlow, after: imgFacial }],
    related: ['hydrafacial', 'chemical-peel', 'korean-glass-skin-facial'],
  },

  'korean-glass-skin-facial': {
    slug: 'korean-glass-skin-facial',
    title: 'Korean Glass Skin Facial',
    heroTitle: 'Korean Glass Skin Facial in Chennai',
    heroSubtitle:
      'Layered hydration for translucent, dewy, glass-like radiance — signature facial care at Capilla Perumbakkam.',
    image: '/treatments/skin/korean-glass-skin-facial.jpg',
    breadcrumb: 'Korean Glass Skin Facial',
    seo: {
      title: 'Korean Glass Skin Facial Chennai | Glass Skin Perumbakkam | Capilla',
      description:
        'Korean glass skin facial in Chennai at Capilla. Dewy, pore-refined glow with luxury hydration protocols in Perumbakkam.',
      keywords:
        'Korean Glass Skin Facial Chennai, Hydrafacial in Perumbakkam, Skin Clinic Perumbakkam, Skin Clinic Sholinganallur',
      canonical: 'https://capillaclinic.com/treatments/korean-glass-skin-facial',
    },
    overview: [
      'The “glass skin” look emphasises deep hydration, refined pores, and a translucent, light-reflecting finish popularised by Korean beauty philosophy.',
      'Capilla’s glass skin facial layers medical cleansing, hydration, and barrier support for a polished, camera-ready glow.',
    ],
    benefits: [
      'Dewy, luminous finish',
      'Enhanced hydration',
      'Smoother-looking texture',
      'Pore appearance refinement',
      'Barrier-friendly approach',
      'Luxury facial experience',
    ],
    procedure: [
      { title: 'Double Cleanse', text: 'Make-up and impurities are gently removed.' },
      { title: 'Exfoliation & Prep', text: 'Light polish prepares skin for serum absorption.' },
      { title: 'Hydration Layers', text: 'Humectants and soothing actives are layered for glass-like dew.' },
      { title: 'Seal & Protect', text: 'Moisture is locked in with finishing care and SPF advice.' },
    ],
    skinCareRoutine: [
      'Gentle cleanse morning and night',
      'Hydrating essence or serum layers',
      'Moisturiser suited to your barrier',
      'Daily broad-spectrum SPF',
      'Weekly clinic maintenance as advised',
    ],
    expectedResults:
      'Skin typically looks fresher and more reflective immediately after. Regular facials plus home hydration habits deepen the glass-skin effect over time.',
    whoNeeds: [
      'Dull, dehydrated complexions',
      'Clients wanting a dewy aesthetic',
      'Pre-event radiance seekers',
      'Those who prefer comfort-first facials',
    ],
    whyCapilla: [
      'K-beauty inspired, medically guided',
      'Hydration-first philosophy',
      'Custom product layering',
      'Relaxing clinic ritual',
    ],
    equipment: [
      'Hydration facial systems',
      'Medical cleansing protocols',
      'Serum infusion support',
      'Barrier recovery products',
    ],
    faqs: [
      {
        id: 1,
        question: 'Is glass skin only for young skin?',
        answer:
          'No. Hydration and barrier care benefit many ages. We adapt intensity to your skin’s needs.',
      },
      {
        id: 2,
        question: 'How is this different from Hydrafacial?',
        answer:
          'Hydrafacial focuses on hydradermabrasion technology; glass skin facials emphasise layered hydration aesthetics. Many clients enjoy both in a plan.',
      },
      {
        id: 3,
        question: 'Will my skin look oily?',
        answer:
          'The goal is hydrated luminosity, not grease. Products and finish are matched to oily, dry, or combination types.',
      },
    ],
    beforeAfter: [{ id: 1, title: 'Glass Skin Glow', before: imgSkin, after: imgFacial }],
    related: ['hydrafacial', 'skin-whitening-treatment', 'anti-ageing-treatment'],
  },

  'anti-ageing-treatment': {
    slug: 'anti-ageing-treatment',
    title: 'Anti Ageing Treatment',
    heroTitle: 'Anti Ageing Treatment in Chennai',
    heroSubtitle:
      'Refined protocols to soften lines, support firmness, and restore youthful vitality at Capilla Skin Clinic Perumbakkam.',
    image: '/treatments/skin/anti-ageing-treatment.jpg',
    breadcrumb: 'Anti Ageing Treatment',
    seo: {
      title: 'Anti Ageing Treatment Chennai | Aesthetic Care Perumbakkam | Capilla',
      description:
        'Anti ageing treatment in Chennai at Capilla. Soften lines and revive skin quality with specialist plans in Perumbakkam near Medavakkam & Sholinganallur.',
      keywords:
        'Anti Ageing Treatment Chennai, Skin Clinic Perumbakkam, Skin Clinic Medavakkam, Skin Clinic Sholinganallur',
      canonical: 'https://capillaclinic.com/treatments/anti-ageing-treatment',
    },
    overview: [
      'Anti-ageing care addresses fine lines, loss of firmness, dullness, and texture changes using facials, peels, and regenerative approaches tailored to your stage of ageing.',
      'Capilla favours natural-looking rejuvenation — refreshed, never overdone.',
    ],
    treatmentOptions: [
      {
        title: 'Rejuvenating Facials',
        description: 'Hydration and glow treatments that plump the look of tired skin.',
      },
      {
        title: 'Peel-Based Renewal',
        description: 'Controlled peels to improve texture and surface fine lines.',
      },
      {
        title: 'Combination Protocols',
        description: 'Staged plans pairing in-clinic care with medical-grade home routines.',
      },
    ],
    benefits: [
      'Softer appearance of fine lines',
      'Fresher, firmer-looking skin',
      'Improved radiance',
      'Custom intensity levels',
      'Natural aesthetic outcome',
      'Long-term skin quality focus',
    ],
    procedure: [
      { title: 'Ageing Analysis', text: 'We review wrinkles, elasticity, pigment, and lifestyle factors.' },
      { title: 'Plan Design', text: 'Modalities and session cadence are matched to your goals.' },
      { title: 'Treatment Delivery', text: 'Comfortable sessions with medical oversight.' },
      { title: 'Maintenance', text: 'Retention strategy to prolong rejuvenation results.' },
    ],
    recovery:
      'Downtime depends on the chosen modality. Facials often have none; peels may include brief flaking. Your specialist outlines exact aftercare before treatment day.',
    whoNeeds: [
      'Early fine lines and dullness',
      'Loss of skin bounce',
      'Adults seeking preventive or corrective care',
      'Clients preferring subtle rejuvenation',
    ],
    whyCapilla: [
      'Age-appropriate protocols',
      'Holistic skin quality focus',
      'Honest outcome counselling',
      'Luxury patient journey',
    ],
    equipment: [
      'Rejuvenation facial systems',
      'Clinical peel options',
      'Skin quality photography',
      'Medical skincare regimens',
    ],
    faqs: [
      {
        id: 1,
        question: 'At what age should I start anti-ageing treatments?',
        answer:
          'Preventive care can begin in the late 20s or whenever concerns appear. We tailor intensity to your skin stage.',
      },
      {
        id: 2,
        question: 'Will I look “done” or frozen?',
        answer:
          'No. Capilla’s philosophy is subtle refinement — healthy, luminous skin that still looks like you.',
      },
      {
        id: 3,
        question: 'How often are maintenance sessions needed?',
        answer:
          'Many plans use monthly or seasonal visits plus home care. Frequency is personalised after your first review.',
      },
    ],
    beforeAfter: [{ id: 1, title: 'Rejuvenated Glow', before: imgAntiAge, after: imgFacial }],
    related: ['hydrafacial', 'chemical-peel', 'korean-glass-skin-facial'],
  },
};

export function getSkinTreatment(slug) {
  return skinTreatmentPages[slug] || null;
}

export function getRelatedSkinTreatments(slugs = []) {
  return slugs
    .map((slug) => skinTreatmentPages[slug])
    .filter(Boolean)
    .map((t) => ({
      slug: t.slug,
      title: t.title,
      description: t.heroSubtitle,
      image: t.image,
      path: `/treatments/${t.slug}`,
    }));
}
