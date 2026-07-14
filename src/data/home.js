import { placeholders } from './content';

export const homeSeo = {
  title:
    'Best Dental Clinic in Perumbakkam | Skin & Hair Treatments | Capilla Dental & Aesthetic Center',
  description:
    'Capilla Dental & Aesthetic Center — premium dental clinic in Perumbakkam, Chennai. Expert dentist near you for implants, Hydrafacial, hair treatments & cosmetic dentistry. Book your appointment today.',
  keywords:
    'Dental Clinic in Perumbakkam, Best Dental Clinic in Perumbakkam, Dentist Near Me, Skin Clinic Perumbakkam, Hair Clinic Perumbakkam, Cosmetic Dentist Chennai, Hydrafacial Chennai, Hair Treatment Chennai',
  canonical: 'https://capillaclinic.com/',
};

export const whyChooseItems = [
  {
    id: 1,
    title: 'Experienced Doctors',
    description: 'Specialists with years of clinical excellence across dental, skin, and hair care.',
    icon: 'Award',
  },
  {
    id: 2,
    title: 'Advanced Technology',
    description: 'Digital diagnostics and precision-guided treatment systems for safer outcomes.',
    icon: 'Cpu',
  },
  {
    id: 3,
    title: 'Personalized Treatments',
    description: 'Custom protocols tailored to your facial aesthetics, lifestyle, and goals.',
    icon: 'Sparkles',
  },
  {
    id: 4,
    title: 'Affordable Care',
    description: 'Transparent pricing with premium results — luxury care without compromise.',
    icon: 'Gem',
  },
  {
    id: 5,
    title: 'Modern Equipment',
    description: 'International-standard equipment across every treatment suite.',
    icon: 'Microscope',
  },
  {
    id: 6,
    title: 'Sterile Environment',
    description: 'Hospital-grade sterilization protocols for your complete peace of mind.',
    icon: 'ShieldCheck',
  },
  {
    id: 7,
    title: 'Same Day Consultation',
    description: 'Flexible appointments with prompt evaluations when you need clarity fast.',
    icon: 'Clock',
  },
  {
    id: 8,
    title: 'Luxury Patient Experience',
    description: 'Calm interiors, attentive hosts, and a clinic experience designed around you.',
    icon: 'HeartHandshake',
  },
];

export const treatmentCategories = [
  {
    id: 'dental',
    title: 'Dental Treatments',
    description:
      'From implants to smile design — advanced dentistry for healthier teeth and lasting confidence.',
    image: placeholders.dental,
    path: '/dental',
  },
  {
    id: 'skin',
    title: 'Skin Treatments',
    description:
      'Medical-grade facial therapies for luminous, refined, camera-ready skin.',
    image: placeholders.skin,
    path: '/skin',
  },
  {
    id: 'hair',
    title: 'Hair Treatments',
    description:
      'Restorative hair therapies designed for denser growth and natural density.',
    image: placeholders.hair,
    path: '/hair',
  },
];

export const featuredDental = [
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent tooth replacement with precision-guided implantology.',
    image: placeholders.dental,
    path: '/treatments/dental-implants',
    benefits: ['Natural look & feel', 'Long-lasting stability', 'Bone preservation'],
  },
  {
    id: 'root-canal',
    title: 'Root Canal',
    description: 'Comfort-focused RCT with microscopic precision and lasting relief.',
    image: placeholders.treatment,
    path: '/treatments/root-canal-treatment',
    benefits: ['Virtually painless', 'Single-sitting options', 'Tooth preservation'],
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Clinical whitening for a brighter, camera-ready smile.',
    image: placeholders.smile,
    path: '/treatments/teeth-whitening',
    benefits: ['Visible in one visit', 'Safe enamel care', 'Custom shade matching'],
  },
  {
    id: 'smile-design',
    title: 'Smile Design',
    description: 'Bespoke digital makeovers tailored to your facial aesthetics.',
    image: placeholders.smile,
    path: '/treatments/smile-design',
    benefits: ['Digital preview', 'Facial harmony', 'Premium materials'],
  },
  {
    id: 'braces-aligners',
    title: 'Braces & Aligners',
    description: 'Discreet orthodontics for confident, aligned smiles.',
    image: placeholders.dental,
    path: '/treatments/braces-aligners',
    benefits: ['Clear aligner options', 'Faster timelines', 'Comfort-first fit'],
  },
];

export const featuredSkin = [
  {
    id: 'hydrafacial',
    title: 'Hydrafacial',
    description: 'Deep cleanse, extract, and hydrate for refined luminosity.',
    image: placeholders.skin,
    path: '/treatments/hydrafacial',
    benefits: ['Instant glow', 'No downtime', 'Customizable boosters'],
  },
  {
    id: 'chemical-peel',
    title: 'Chemical Peel',
    description: 'Medical peels to renew tone, texture, and clarity.',
    image: placeholders.skin,
    path: '/treatments/chemical-peel',
    benefits: ['Even skin tone', 'Smoother texture', 'Clinical protocols'],
  },
  {
    id: 'acne-treatment',
    title: 'Acne Treatment',
    description: 'Targeted acne care for clearer, calmer, healthier skin.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80',
    path: '/skin',
    benefits: ['Root-cause approach', 'Scar reduction focus', 'Gentle actives'],
  },
  {
    id: 'glass-skin',
    title: 'Glass Skin Facial',
    description: 'Layered hydration ritual for translucent, glass-like radiance.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2362?w=1200&q=80',
    path: '/skin',
    benefits: ['Dewy finish', 'Pore refinement', 'Barrier support'],
  },
  {
    id: 'skin-brightening',
    title: 'Skin Brightening',
    description: 'Clinical brightening for an even, luminous complexion.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80',
    path: '/skin',
    benefits: ['Dullness correction', 'Spot reduction', 'Radiant finish'],
  },
];

export const featuredHair = [
  {
    id: 'prp',
    title: 'PRP Hair Treatment',
    description: 'Platelet-rich plasma to stimulate natural regrowth.',
    image: placeholders.hair,
    path: '/treatments/prp-hair-treatment',
    benefits: ['Natural stimulation', 'Minimal downtime', 'Progressive density'],
  },
  {
    id: 'gfc',
    title: 'GFC Hair Treatment',
    description: 'Growth factor concentrate for denser, healthier hair.',
    image: placeholders.hair,
    path: '/treatments/gfc-hair-treatment',
    benefits: ['Advanced growth factors', 'Targeted delivery', 'Visible thickening'],
  },
  {
    id: 'transplant',
    title: 'Hair Transplant',
    description: 'Precision FUE restoration for natural lifelong density.',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80',
    path: '/treatments/hair-transplant',
    benefits: ['Natural hairline', 'Scar-minimal FUE', 'Permanent results'],
  },
  {
    id: 'regrowth',
    title: 'Hair Regrowth',
    description: 'Medical regimens designed to revive thinning areas.',
    image: placeholders.hair,
    path: '/hair',
    benefits: ['Early thinning rescue', 'Customized plans', 'Tracked progress'],
  },
  {
    id: 'hair-loss',
    title: 'Hair Loss Treatment',
    description: 'Diagnostic-led care for pattern baldness and shedding.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f7300194?w=1200&q=80',
    path: '/hair',
    benefits: ['Root-cause diagnosis', 'Medical therapies', 'Long-term plans'],
  },
];

export const homeDoctors = [
  {
    id: 'dr-ananya-mehta',
    name: 'Dr. Ananya Mehta',
    role: 'Chief Dental Surgeon',
    qualification: 'MDS — Prosthodontics & Implantology',
    specialty: 'Implantology & Smile Design',
    experience: '14+ Years',
    image: placeholders.doctor,
  },
  {
    id: 'dr-rohan-kapoor',
    name: 'Dr. Rohan Kapoor',
    role: 'Aesthetic Physician',
    qualification: 'MD — Dermatology & Aesthetic Medicine',
    specialty: 'Skin & Anti-Aging',
    experience: '11+ Years',
    image: placeholders.doctorMale,
  },
  {
    id: 'dr-priya-nair',
    name: 'Dr. Priya Nair',
    role: 'Trichologist',
    qualification: 'MD — Trichology & Hair Restoration',
    specialty: 'Hair Restoration',
    experience: '9+ Years',
    image: placeholders.doctor,
  },
];

export const beforeAfterItems = [
  {
    id: 1,
    category: 'Dental',
    title: 'Smile Transformation',
    before: placeholders.dental,
    after: placeholders.smile,
  },
  {
    id: 2,
    category: 'Skin',
    title: 'Skin Rejuvenation',
    before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    after: placeholders.skin,
  },
  {
    id: 3,
    category: 'Hair',
    title: 'Hair Density Restore',
    before: 'https://images.unsplash.com/photo-1595476108010-b4d1f7300194?w=800&q=80',
    after: placeholders.hair,
  },
];

export const reviewStats = {
  rating: 4.9,
  totalReviews: 1280,
  fiveStarPercent: 96,
};

export const testimonials = [
  {
    id: 1,
    name: 'Sneha Reddy',
    treatment: 'Smile Design',
    text: 'From consultation to the final reveal, Capilla felt like a luxury medical spa. My smile looks completely natural.',
    image: placeholders.doctor,
    rating: 5,
  },
  {
    id: 2,
    name: 'Arjun Malhotra',
    treatment: 'Dental Implants',
    text: 'Transparent advice, world-class facilities, and an implant experience that exceeded every expectation.',
    image: placeholders.doctorMale,
    rating: 5,
  },
  {
    id: 3,
    name: 'Meera Krishnan',
    treatment: 'Hydrafacial',
    text: 'Subtle, refined results with zero downtime. Capilla is my permanent destination for skin care in Chennai.',
    image: placeholders.doctor,
    rating: 5,
  },
  {
    id: 4,
    name: 'Rahul Iyer',
    treatment: 'PRP Hair Treatment',
    text: 'Within months my hairline looked denser. The doctors explained every step with calm confidence.',
    image: placeholders.doctorMale,
    rating: 5,
  },
];

export const trustBadges = [
  { label: 'Google Rated', value: '5.0★' },
  { label: 'Happy Patients', value: '5000+', end: 5000, suffix: '+' },
  { label: 'Years Experience', value: '10+', end: 10, suffix: '+' },
  { label: 'Modern Equipment', value: '100%' },
];
