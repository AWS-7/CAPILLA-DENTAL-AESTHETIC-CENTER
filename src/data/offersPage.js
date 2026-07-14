import { placeholders } from './content';

export const offersSeo = {
  title: 'Exclusive Offers & Packages | Dental Offers Chennai | Capilla',
  description:
    'Explore Hydrafacial offers, dental implant packages, teeth whitening and hair treatment offers in Chennai at Capilla Perumbakkam. Limited-time luxury packages.',
  keywords:
    'Dental Offers Chennai, Hydrafacial Offers Chennai, Hair Treatment Offers Chennai, Best Dental Clinic in Perumbakkam',
  canonical: 'https://capillaclinic.com/offers',
};

export const offersHero = {
  title: 'Exclusive Offers & Packages',
  subtitle:
    'Curated seasonal advantages on signature dental, skin, and hair treatments — luxury care with transparent value.',
  image: placeholders.offer,
};

export const offersList = [
  {
    id: 1,
    title: 'Hydrafacial Offer',
    badge: 'Skin Special',
    discount: '20% OFF',
    description: 'Book a Hydrafacial session and receive a complimentary skin analysis with aftercare guidance.',
    validUntil: 'Sep 15, 2026',
    image: placeholders.skin,
    path: '/contact',
  },
  {
    id: 2,
    title: 'Dental Implant Offer',
    badge: 'Dental',
    discount: '₹10,000 OFF',
    description: 'Special package pricing on select implant consultations and treatment planning at Capilla.',
    validUntil: 'Aug 31, 2026',
    image: placeholders.dental,
    path: '/contact',
  },
  {
    id: 3,
    title: 'Teeth Whitening Offer',
    badge: 'Cosmetic',
    discount: '25% OFF',
    description: 'Professional clinical whitening for a brighter smile at a festival-season advantage.',
    validUntil: 'Sep 30, 2026',
    image: placeholders.smile,
    path: '/contact',
  },
  {
    id: 4,
    title: 'Hair Treatment Offer',
    badge: 'Hair',
    discount: '15% OFF',
    description: 'Introductory PRP/GFC starter package designed for early-stage thinning and density support.',
    validUntil: 'Oct 1, 2026',
    image: placeholders.hair,
    path: '/contact',
  },
  {
    id: 5,
    title: 'Smile Makeover Offer',
    badge: 'Premium',
    discount: '18% OFF',
    description: 'Digital smile design consult bundled with whitening assessment for a complete aesthetic plan.',
    validUntil: 'Oct 15, 2026',
    image: placeholders.smile,
    path: '/contact',
  },
];

export const offersFaqs = [
  {
    id: 1,
    question: 'How do I redeem an offer?',
    answer:
      'Contact us via Book Appointment, WhatsApp, or phone and mention the offer name. Our team will confirm eligibility and schedule your visit.',
  },
  {
    id: 2,
    question: 'Can offers be combined?',
    answer:
      'Most packages cannot be combined with other discounts. We will always confirm the best applicable value before booking.',
  },
  {
    id: 3,
    question: 'Do offers include consultation?',
    answer:
      'Many packages include consultation components. Exact inclusions are listed during confirmation for each offer.',
  },
];
