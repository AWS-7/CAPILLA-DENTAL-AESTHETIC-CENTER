import { placeholders } from './content';

export const gallerySeo = {
  title: 'Before & After Gallery | Real Patient Transformations | Capilla Perumbakkam',
  description:
    'View dental, skin, and hair before & after transformations at Capilla Dental & Aesthetic Center in Perumbakkam. Real results from Chennai’s premium clinic.',
  keywords:
    'Dental Clinic in Perumbakkam, Best Dental Clinic in Perumbakkam, Smile Makeover Chennai, Hydrafacial Chennai, Hair Transplant Chennai',
  canonical: 'https://capillaclinic.com/gallery',
};

export const galleryHero = {
  title: 'Real Patient Transformations',
  subtitle:
    'See the remarkable results achieved through our advanced Dental, Skin & Hair treatments at Capilla Perumbakkam.',
  image: placeholders.clinicInterior,
};

export const galleryFilters = ['All', 'Dental', 'Skin', 'Hair'];

export const galleryTransformations = [
  {
    id: 1,
    category: 'Dental',
    title: 'Smile Makeover',
    before: placeholders.dental,
    after: placeholders.smile,
    span: 'tall',
  },
  {
    id: 2,
    category: 'Skin',
    title: 'Hydrafacial Glow',
    before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    after: placeholders.skin,
    span: 'wide',
  },
  {
    id: 3,
    category: 'Hair',
    title: 'PRP Density Restore',
    before: 'https://images.unsplash.com/photo-1595476108010-b4d1f7300194?w=800&q=80',
    after: placeholders.hair,
    span: 'normal',
  },
  {
    id: 4,
    category: 'Dental',
    title: 'Teeth Whitening',
    before: placeholders.treatment,
    after: placeholders.smile,
    span: 'normal',
  },
  {
    id: 5,
    category: 'Skin',
    title: 'Chemical Peel Clarity',
    before: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    span: 'tall',
  },
  {
    id: 6,
    category: 'Hair',
    title: 'FUE Hairline Design',
    before: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80',
    after: placeholders.hair,
    span: 'wide',
  },
  {
    id: 7,
    category: 'Dental',
    title: 'Implant Restoration',
    before: placeholders.dental,
    after: placeholders.smile,
    span: 'normal',
  },
  {
    id: 8,
    category: 'Skin',
    title: 'Glass Skin Facial',
    before: placeholders.skin,
    after: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2362?w=800&q=80',
    span: 'normal',
  },
  {
    id: 9,
    category: 'Hair',
    title: 'Regrowth Journey',
    before: 'https://images.unsplash.com/photo-1595476108010-b4d1f7300194?w=800&q=70',
    after: placeholders.hair,
    span: 'tall',
  },
];

export const gallerySuccessStories = [
  {
    id: 1,
    name: 'Ananya R.',
    treatment: 'Smile Design',
    duration: '6 weeks',
    results: 'Balanced, natural smile with improved shade and symmetry.',
    review: 'Capilla made the entire journey feel luxurious and clinical. My confidence is completely restored.',
    image: placeholders.doctor,
  },
  {
    id: 2,
    name: 'Karthik M.',
    treatment: 'PRP Hair Treatment',
    duration: '4 months',
    results: 'Noticeably denser crown area with healthier hair quality.',
    review: 'Honest timelines and visible progress. The best hair clinic experience I have had in Chennai.',
    image: placeholders.doctorMale,
  },
  {
    id: 3,
    name: 'Divya S.',
    treatment: 'Hydrafacial Series',
    duration: '3 sessions',
    results: 'Brighter tone, refined pores, and lasting glow.',
    review: 'Every session felt premium. My skin looked camera-ready the same evening.',
    image: placeholders.doctor,
  },
];
