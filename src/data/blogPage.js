import { placeholders } from './content';

export const blogSeo = {
  title: 'Health Tips & Treatment Guides | Dental Blog Chennai | Capilla',
  description:
    'Expert dental, skin, and hair care guides from Capilla specialists in Perumbakkam. Read the dental blog, skin care blog, and hair care blog for Chennai patients.',
  keywords:
    'Dental Blog Chennai, Skin Care Blog Chennai, Hair Care Blog Chennai, Dental Clinic in Perumbakkam',
  canonical: 'https://capillaaesthetic.com/blog',
};

export const blogHero = {
  title: 'Health Tips & Treatment Guides',
  subtitle:
    'Clinical insights on dental health, skin rejuvenation, and hair restoration from Capilla specialists.',
  image: placeholders.blog,
};

export const blogCategories = ['All', 'Dental', 'Skin', 'Hair', 'Clinic News'];

export const blogArticles = [
  {
    id: 1,
    slug: 'complete-guide-to-dental-implants',
    title: 'A Complete Guide to Dental Implants in 2026',
    excerpt:
      'Everything you need to know about modern implantology, recovery, and lasting results.',
    image: placeholders.blog,
    category: 'Dental',
    date: 'June 12, 2026',
    readTime: '6 min read',
    author: 'Dr. Shakthi Chandran',
    featured: true,
    content: {
      intro:
        'Dental implants remain the gold standard for replacing missing teeth with natural function and aesthetics. This guide explains candidacy, procedure stages, and recovery expectations for patients in Chennai.',
      sections: [
        {
          heading: 'What Are Dental Implants?',
          paragraphs: [
            'An implant is a titanium fixture placed into the jawbone to support a crown, bridge, or denture. After osseointegration, it behaves like a stable tooth root.',
            'At Capilla, planning is digitally guided to protect bone, refine bite forces, and create a seamless smile finish.',
          ],
        },
        {
          heading: 'Who Is a Good Candidate?',
          paragraphs: [
            'Adults with healthy gums, adequate bone (or grafting options), and a commitment to oral hygiene typically do well with implants.',
          ],
          list: [
            'Missing one or more teeth',
            'Unhappy with removable dentures',
            'Seeking long-term stability',
            'Medically cleared for minor oral surgery',
          ],
        },
        {
          heading: 'Recovery Insights',
          paragraphs: [
            'Mild tenderness is common for a few days. Soft foods, prescribed care, and follow-ups support smooth healing.',
          ],
          quote:
            'The best implant outcomes begin with honest diagnosis — never rushed treatment planning.',
        },
      ],
      faqs: [
        {
          id: 1,
          question: 'How long do implants last?',
          answer: 'With good hygiene and reviews, implants can last many years and often decades.',
        },
        {
          id: 2,
          question: 'Is implant surgery painful?',
          answer: 'The procedure is performed under anaesthesia. Discomfort afterward is usually manageable.',
        },
      ],
    },
  },
  {
    id: 2,
    slug: 'hydrafacial-vs-chemical-peel',
    title: 'HydraFacial vs Chemical Peel: Which Is Right for You?',
    excerpt:
      'A clinical comparison to help you choose the ideal treatment for your skin goals.',
    image: placeholders.skin,
    category: 'Skin',
    date: 'May 28, 2026',
    readTime: '5 min read',
    author: 'Dr. Shakthi Chandran',
    featured: false,
    content: {
      intro:
        'Hydrafacial and chemical peels both refresh skin — but they work differently. Choosing the right option depends on downtime tolerance, pigment concerns, and skin sensitivity.',
      sections: [
        {
          heading: 'Hydrafacial at a Glance',
          paragraphs: [
            'Hydrafacial cleanses, extracts, and hydrates with little to no downtime — ideal for glow before events and ongoing maintenance.',
          ],
        },
        {
          heading: 'When Peels Excel',
          paragraphs: [
            'Chemical peels accelerate cell turnover and can address texture and pigment more deeply when correctly selected for your skin type.',
          ],
          list: [
            'Mild pigment and dullness',
            'Texture irregularity',
            'Patients open to brief flaking',
            'Series-based improvement plans',
          ],
        },
        {
          heading: 'Our Recommendation Approach',
          paragraphs: [
            'At Capilla we analyse barrier health first, then sequence treatments so results build without unnecessary irritation.',
          ],
          quote: 'The best facial is the one matched to your skin — not the trend of the month.',
        },
      ],
      faqs: [
        {
          id: 1,
          question: 'Can I combine both?',
          answer: 'Often yes, with proper spacing. Your specialist will design a safe sequence.',
        },
      ],
    },
  },
  {
    id: 3,
    slug: 'prp-hair-restoration-explained',
    title: 'PRP Hair Restoration Explained by Our Specialists',
    excerpt:
      'How platelet-rich plasma stimulates natural growth and who benefits most.',
    image: placeholders.hair,
    category: 'Hair',
    date: 'May 10, 2026',
    readTime: '7 min read',
    author: 'Dr. Shakthi Chandran',
    featured: false,
    content: {
      intro:
        'PRP uses concentrated growth factors from your own blood to support follicle activity. It is a popular non-surgical option for early to moderate thinning.',
      sections: [
        {
          heading: 'How PRP Sessions Work',
          paragraphs: [
            'After a small blood draw, platelets are concentrated and delivered into mapped thinning zones under clinical protocols.',
          ],
        },
        {
          heading: 'Realistic Timelines',
          paragraphs: [
            'Hair cycles are slow. Improvements typically build across a series of sessions and months of follow-up.',
          ],
          list: [
            'Early pattern thinning responders',
            'Patients seeking non-surgical support',
            'Those cleared after scalp analysis',
          ],
          quote: 'PRP supports follicles — it does not recreate hair where follicles are absent.',
        },
      ],
      faqs: [
        {
          id: 1,
          question: 'How many sessions do I need?',
          answer: 'Most plans start with a series, then maintenance. Exact counts depend on response.',
        },
      ],
    },
  },
  {
    id: 4,
    slug: 'how-to-choose-a-dentist-near-me',
    title: 'How to Choose a Dentist Near Me in Perumbakkam',
    excerpt:
      'A practical checklist for selecting a trusted dental clinic near Perumbakkam, Medavakkam, and Sholinganallur.',
    image: placeholders.clinic,
    category: 'Clinic News',
    date: 'April 22, 2026',
    readTime: '4 min read',
    author: 'Capilla Editorial',
    featured: false,
    content: {
      intro:
        'Searching for a dentist near you should go beyond Google maps proximity. Expertise, sterilisation, transparency, and patient experience matter equally.',
      sections: [
        {
          heading: 'What to Look For',
          paragraphs: [
            'Prioritise clinics that explain options clearly, show sterilisation standards, and offer specialist pathways for implants, RCT, and cosmetic care.',
          ],
          list: [
            'Verified patient reviews',
            'Modern diagnostics',
            'Transparent pricing discussions',
            'Comfort-focused care',
          ],
        },
      ],
      faqs: [
        {
          id: 1,
          question: 'Is Capilla accessible from Medavakkam?',
          answer: 'Yes — many patients visit from Medavakkam and Sholinganallur via OMR.',
        },
      ],
    },
  },
  {
    id: 5,
    slug: 'glass-skin-routine-basics',
    title: 'Glass Skin Routine Basics for Chennai Weather',
    excerpt:
      'Hydration-first habits that support dewy, resilient skin in humid coastal climates.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2362?w=1200&q=80',
    category: 'Skin',
    date: 'April 8, 2026',
    readTime: '5 min read',
    author: 'Dr. Shakthi Chandran',
    featured: false,
    content: {
      intro:
        'Glass skin is less about extreme products and more about consistent barrier care, sun protection, and clinic-guided hydration.',
      sections: [
        {
          heading: 'Daily Essentials',
          paragraphs: [
            'Gentle cleansing, layered hydration, moisturiser, and SPF form the foundation — especially under Chennai sun and humidity.',
          ],
        },
      ],
      faqs: [],
    },
  },
  {
    id: 6,
    slug: 'early-hair-loss-warning-signs',
    title: 'Early Hair Loss Warning Signs You Should Not Ignore',
    excerpt:
      'Recognise subtle thinning patterns early so non-surgical options remain effective longer.',
    image: placeholders.hair,
    category: 'Hair',
    date: 'March 18, 2026',
    readTime: '6 min read',
    author: 'Dr. Shakthi Chandran',
    featured: false,
    content: {
      intro:
        'Wider partitions, a receding temporal angle, and increased daily shedding can signal early pattern loss — the ideal stage for assessment.',
      sections: [
        {
          heading: 'When to Book a Scalp Analysis',
          paragraphs: [
            'If changes continue for more than a few weeks, a specialist consultation helps separate temporary shedding from progressive thinning.',
          ],
        },
      ],
      faqs: [],
    },
  },
];

export function getBlogArticle(slug) {
  return blogArticles.find((a) => a.slug === slug) || null;
}

export function getRelatedArticles(slug, category, limit = 3) {
  return blogArticles
    .filter((a) => a.slug !== slug && (a.category === category || true))
    .filter((a) => a.slug !== slug)
    .slice(0, limit);
}

export function getAdjacentArticles(slug) {
  const index = blogArticles.findIndex((a) => a.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? blogArticles[index - 1] : null,
    next: index < blogArticles.length - 1 ? blogArticles[index + 1] : null,
  };
}
