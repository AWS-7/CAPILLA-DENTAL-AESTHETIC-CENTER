/**
 * Placeholder / Unsplash medical imagery.
 * Replace with clinic assets during page builds.
 */
export const placeholders = {
  clinic:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
  clinicInterior:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
  doctor:
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
  doctorMale:
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
  dental:
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
  smile:
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80',
  skin: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80',
  hair: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
  treatment:
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80',
  gallery:
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
  blog: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
  offer:
    'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80',
};

export const doctors = [
  {
    id: 'dr-ananya-mehta',
    name: 'Dr. Ananya Mehta',
    role: 'Chief Dental Surgeon',
    specialty: 'Implantology & Smile Design',
    experience: '14+ Years',
    image: placeholders.doctor,
    slug: 'dr-ananya-mehta',
  },
  {
    id: 'dr-rohan-kapoor',
    name: 'Dr. Rohan Kapoor',
    role: 'Aesthetic Physician',
    specialty: 'Skin & Anti-Aging',
    experience: '11+ Years',
    image: placeholders.doctorMale,
    slug: 'dr-rohan-kapoor',
  },
  {
    id: 'dr-priya-nair',
    name: 'Dr. Priya Nair',
    role: 'Trichologist',
    specialty: 'Hair Restoration',
    experience: '9+ Years',
    image: placeholders.doctor,
    slug: 'dr-priya-nair',
  },
];

export const treatments = [
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    category: 'dental',
    title: 'Dental Implants',
    description:
      'Permanent, natural-looking tooth replacement with precision-guided implantology.',
    image: placeholders.dental,
    path: '/treatments/dental-implants',
  },
  {
    id: 'root-canal-treatment',
    slug: 'root-canal-treatment',
    category: 'dental',
    title: 'Root Canal Treatment',
    description:
      'Pain-free, single-sitting RCT with microscopic precision and lasting comfort.',
    image: placeholders.treatment,
    path: '/treatments/root-canal-treatment',
  },
  {
    id: 'teeth-whitening',
    slug: 'teeth-whitening',
    category: 'dental',
    title: 'Teeth Whitening',
    description:
      'Clinical whitening for a brighter, camera-ready smile in a single visit.',
    image: placeholders.smile,
    path: '/treatments/teeth-whitening',
  },
  {
    id: 'smile-design',
    slug: 'smile-design',
    category: 'dental',
    title: 'Smile Design',
    description:
      'Bespoke digital smile makeovers tailored to your facial aesthetics.',
    image: placeholders.smile,
    path: '/treatments/smile-design',
  },
  {
    id: 'braces-aligners',
    slug: 'braces-aligners',
    category: 'dental',
    title: 'Braces & Aligners',
    description:
      'Discreet clear aligners and orthodontic solutions for confident alignment.',
    image: placeholders.dental,
    path: '/treatments/braces-aligners',
  },
  {
    id: 'hydrafacial',
    slug: 'hydrafacial',
    category: 'skin',
    title: 'HydraFacial',
    description:
      'Deep cleansing, extraction, and hydration for luminous, refined skin.',
    image: placeholders.skin,
    path: '/treatments/hydrafacial',
  },
  {
    id: 'chemical-peel',
    slug: 'chemical-peel',
    category: 'skin',
    title: 'Chemical Peel',
    description:
      'Medical-grade peels to renew texture, tone, and clarity with clinical care.',
    image: placeholders.skin,
    path: '/treatments/chemical-peel',
  },
  {
    id: 'prp-hair-treatment',
    slug: 'prp-hair-treatment',
    category: 'hair',
    title: 'PRP Hair Treatment',
    description:
      'Platelet-rich plasma therapy to stimulate natural hair regrowth.',
    image: placeholders.hair,
    path: '/treatments/prp-hair-treatment',
  },
  {
    id: 'gfc-hair-treatment',
    slug: 'gfc-hair-treatment',
    category: 'hair',
    title: 'GFC Hair Treatment',
    description:
      'Advanced growth factor concentrate therapy for denser, healthier hair.',
    image: placeholders.hair,
    path: '/treatments/gfc-hair-treatment',
  },
  {
    id: 'hair-transplant',
    slug: 'hair-transplant',
    category: 'hair',
    title: 'Hair Transplant',
    description:
      'Precision FUE hair restoration for natural density and lifelong results.',
    image: placeholders.hair,
    path: '/treatments/hair-transplant',
  },
];

export const reviews = [
  {
    id: 1,
    name: 'Amit Kumar Singh',
    rating: 5,
    text: 'My friend recommended this place for skin treatments, and I’m glad I tried their HydraFacial. My skin feels fresh and clean now.',
    date: 'A week ago',
  },
  {
    id: 2,
    name: 'Sankar G',
    rating: 5,
    text: 'I had an excellent HydraFacial treatment at Capilla Dental & Aesthetic Center. The staff was friendly, the doctor explained everything clearly, and the clinic was clean and hygienic. Highly recommended.',
    date: 'A month ago',
  },
  {
    id: 3,
    name: 'Rohith Rj Kumar',
    rating: 5,
    text: 'Had a visit to the clinic and took treatment from Doctor Shabana. I had a wonderful treatment and would recommend the clinic.',
    date: 'A month ago',
  },
  {
    id: 4,
    name: 'TRB Tirunelveli',
    rating: 5,
    text: 'I’m Vidhya from Tirunelveli. I visited this clinic for pigmentation treatment and noticed a difference right away. Happy with the service! Thanks a lot, sir.',
    date: 'A week ago',
  },
  {
    id: 5,
    name: 'Aarya Dayashankar',
    rating: 5,
    text: 'I visited Capilla Dental and Cosmetic Centre for a routine check-up, and the staff were really friendly. The place is clean and well-organized.',
    date: 'A week ago',
  },
  {
    id: 6,
    name: 'Rajeshwara Pandian',
    rating: 5,
    text: 'I’ve been going for acne scar treatment near Perumbakkam and have seen a good difference in my skin. The team is really supportive and encouraging.',
    date: 'A week ago',
  },
  {
    id: 7,
    name: 'Vijay Sankar',
    rating: 5,
    text: 'Got Botox done here, and it was pretty good. The staff was professional and made sure I was okay throughout the process.',
    date: 'A week ago',
  },
  {
    id: 8,
    name: 'Roshini Ravishankar',
    rating: 5,
    text: 'Good service overall with kindness. Please continue to grow more; I appreciate your efforts here.',
    date: 'A week ago',
  },
  {
    id: 9,
    name: 'Sherin Vedha',
    rating: 5,
    text: 'I had a wonderful experience at Capilla Dental & Aesthetic Centre. I got a HydraFacial, and it was absolutely worth it! Dr. Shabana is incredibly kind, friendly, and professional. She made me feel comfortable throughout the entire treatment.',
    date: '2 weeks ago',
  },
];

export const blogPosts = [
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
  },
];

export const offers = [
  {
    id: 1,
    title: 'New Patient Smile Package',
    description: 'Comprehensive consultation, digital scan & whitening at a special rate.',
    discount: '25% OFF',
    validUntil: 'Aug 31, 2026',
    image: placeholders.offer,
    path: '/contact',
  },
  {
    id: 2,
    title: 'HydraFacial Festival Offer',
    description: 'Book a HydraFacial session and receive a complimentary skin analysis.',
    discount: '20% OFF',
    validUntil: 'Sep 15, 2026',
    image: placeholders.skin,
    path: '/contact',
  },
  {
    id: 3,
    title: 'Hair Restoration Starter Plan',
    description: 'Introductory PRP package designed for early-stage hair thinning.',
    discount: '15% OFF',
    validUntil: 'Oct 1, 2026',
    image: placeholders.hair,
    path: '/contact',
  },
];

export const galleryItems = [
  {
    id: 1,
    title: 'Clinic Reception',
    category: 'Clinic',
    image: placeholders.clinic,
  },
  {
    id: 2,
    title: 'Treatment Suite',
    category: 'Clinic',
    image: placeholders.clinicInterior,
  },
  {
    id: 3,
    title: 'Smile Transformation',
    category: 'Dental',
    image: placeholders.smile,
  },
  {
    id: 4,
    title: 'Skin Rejuvenation',
    category: 'Skin',
    image: placeholders.skin,
  },
  {
    id: 5,
    title: 'Hair Restoration',
    category: 'Hair',
    image: placeholders.hair,
  },
  {
    id: 6,
    title: 'Dental Care',
    category: 'Dental',
    image: placeholders.dental,
  },
];
