import { TREATMENT_OPTIONS } from '../utils/appointmentForm';

export const clinicInfo = {
  name: 'Capilla Dental & Aesthetic Center',
  shortName: 'Capilla',
  tagline: 'Where Science Meets Aesthetic Excellence',
  description:
    'A premium multi-specialty clinic offering advanced dental, skin, and hair treatments with a focus on precision, comfort, and lasting results.',
  yearsOfExperience: 3,
  phone: '+91 98942 99017',
  phoneHref: 'tel:+919894299017',
  whatsapp: '+919894299017',
  whatsappHref: 'https://wa.me/919894299017',
  email: 'hello@capillaaesthetic.com',
  emailHref: 'mailto:hello@capillaaesthetic.com',
  address: {
    line1: 'First Floor, 359, Hospital Rd, Indra Priyadarshini Nagar',
    line2: 'Perumbakkam, Chennai, Tamil Nadu 600100',
    full: 'First Floor, 359, Hospital Rd, Indra Priyadarshini Nagar, Perumbakkam, Chennai, Tamil Nadu 600100',
  },
  mapsEmbedUrl:
    'https://www.google.com/maps?q=359+Hospital+Road+Indra+Priyadarshini+Nagar+Perumbakkam+Chennai+Tamil+Nadu+600100&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=359+Hospital+Road+Indra+Priyadarshini+Nagar+Perumbakkam+Chennai+Tamil+Nadu+600100',
  locations: [
    {
      id: 'perumbakkam',
      label: 'Perumbakkam · Chennai',
      line1: 'First Floor, 359, Hospital Rd, Indra Priyadarshini Nagar',
      line2: 'Perumbakkam, Chennai, Tamil Nadu 600100',
      full: 'First Floor, 359, Hospital Rd, Indra Priyadarshini Nagar, Perumbakkam, Chennai, Tamil Nadu 600100',
      phone: '+91 98942 99017',
      phoneHref: 'tel:+919894299017',
      mapsLink:
        'https://www.google.com/maps/search/?api=1&query=359+Hospital+Road+Indra+Priyadarshini+Nagar+Perumbakkam+Chennai+Tamil+Nadu+600100',
      mapsEmbedUrl:
        'https://www.google.com/maps?q=359+Hospital+Road+Indra+Priyadarshini+Nagar+Perumbakkam+Chennai+Tamil+Nadu+600100&output=embed',
    },
    {
      id: 'salem',
      label: 'Salem',
      line1: '224, First Floor, SB Colony, Opp Meccanos Marble Paradise',
      line2: 'Junction Main Rd, Near Chennai Silks, Salem, Tamil Nadu 636004',
      full: '224, First Floor, SB Colony, Opp Meccanos Marble Paradise, Junction Main Rd, Near Chennai Silks, Salem, Tamil Nadu 636004',
      phone: '+91 99940 38889',
      phoneHref: 'tel:+919994038889',
      mapsLink:
        'https://www.google.com/maps/search/?api=1&query=224+SB+Colony+Junction+Main+Road+Near+Chennai+Silks+Salem+Tamil+Nadu+636004',
      mapsEmbedUrl:
        'https://www.google.com/maps?q=224+SB+Colony+Junction+Main+Road+Near+Chennai+Silks+Salem+Tamil+Nadu+636004&output=embed',
    },
  ],
  workingHours: [
    { day: 'Monday – Saturday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', hours: '10:00 AM – 2:00 PM' },
  ],
  social: {
    instagram:
      'https://www.instagram.com/capillaaestheticcentre?utm_source=qr&igsh=MWlvZXFyaTUyNTY2dg==',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    google: 'https://share.google/cloWlLP2FwPMI5Ypv',
  },
};

const TREATMENT_PATHS = {
  'Dental Implants': '/treatments/dental-implants',
  'Root Canal Treatment': '/treatments/root-canal-treatment',
  'Smile Design': '/treatments/smile-design',
  'Teeth Whitening': '/treatments/teeth-whitening',
  'Braces & Aligners': '/treatments/braces-aligners',
  'Dental Veneers': '/treatments/dental-veneers',
  'Wisdom Tooth Extraction': '/treatments/wisdom-tooth-extraction',
  'Pediatric Dentistry': '/treatments/pediatric-dentistry',
  'Dental Extraction': '/contact',
  'Impacted Tooth Extraction': '/contact',
  'Dental Braces': '/treatments/braces-aligners',
  'Artificial Dental Braces': '/contact',
  'Braces & Invisalign': '/treatments/braces-aligners',
  'Cosmetic Fillings': '/contact',
  'Gum Disease Treatment': '/contact',
  'Teeth Cleaning': '/contact',
  'Hydra Facial': '/treatments/hydrafacial',
  'Chemical Peel': '/treatments/chemical-peel',
  'Acne Treatment': '/contact',
  'Acne Scar Treatment': '/treatments/acne-scar-treatment',
  'Pigmentation': '/contact',
  'Skin Brightening': '/contact',
  'Glass Skin': '/contact',
  'Anti Ageing': '/contact',
  'Medi Facials': '/contact',
  'Skin Peels': '/treatments/chemical-peel',
  'Acne Correction': '/contact',
  'Acne Scar Reduction': '/treatments/acne-scar-treatment',
  'Laser Hair Removal': '/contact',
  'IV Glow / Whitening': '/contact',
  'Skin Whitening Treatment': '/contact',
  'Korean Glass Skin Facial': '/contact',
  'Dark Circle Treatment': '/contact',
  'Melasma Treatment': '/contact',
  'Skin Rejuvenation Therapy': '/contact',
  'Face GFC Treatment': '/contact',
  'PRP Hair Therapy': '/treatments/prp-hair-treatment',
  'GFC Therapy': '/treatments/gfc-hair-treatment',
  'Hair Transplant': '/treatments/hair-transplant',
  'Hair Loss Treatment': '/contact',
  'Scalp Analysis': '/contact',
  'Low Level Laser Therapy': '/contact',
  'Dandruff Treatment': '/contact',
  'Hair Regrowth': '/contact',
  'QR678 Hair Therapy': '/contact',
  'Exosomes Treatment': '/contact',
  'Hair Re-Growth Therapy': '/contact',
  'Hair Extension': '/contact',
  'Scalp Micropigmentation': '/contact',
  'Micro Needling (Hair)': '/contact',
};

export const servicesMegaMenu = [
  {
    id: 'dental',
    label: 'Dental',
    buttonLabel: 'Dental Treatments',
    path: '/dental',
    image: '/gallery/clinic-treatment-suite.webp',
    items: TREATMENT_OPTIONS.Dental.map((treatment) => ({
      label: treatment,
      path: TREATMENT_PATHS[treatment] || `/treatments/${treatment.toLowerCase().replace(/\s+/g, '-')}`,
    })),
  },
  {
    id: 'skin',
    label: 'Skin',
    buttonLabel: 'Skin Treatments',
    path: '/skin',
    image: '/gallery/clinic-laser-room.webp',
    items: TREATMENT_OPTIONS.Skin.map((treatment) => ({
      label: treatment,
      path: TREATMENT_PATHS[treatment] || `/treatments/${treatment.toLowerCase().replace(/\s+/g, '-')}`,
    })),
  },
  {
    id: 'hair',
    label: 'Hair',
    buttonLabel: 'Hair Treatments',
    path: '/hair',
    image: '/gallery/clinic-brand-wall.webp',
    items: TREATMENT_OPTIONS.Hair.map((treatment) => ({
      label: treatment,
      path: TREATMENT_PATHS[treatment] || `/treatments/${treatment.toLowerCase().replace(/\s+/g, '-')}`,
    })),
  },
];

export const navLinks = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About Us', path: '/about' },
  { id: 'doctors', label: 'Meet Doctors', path: '/doctors' },
  {
    id: 'services',
    label: 'Services',
    path: '/services',
    megaMenu: true,
    menuGroups: servicesMegaMenu,
  },
  { id: 'gallery', label: 'Gallery', path: '/gallery' },
  { id: 'reviews', label: 'Google Reviews', path: '/reviews' },
  { id: 'offers', label: 'Offers', path: '/offers' },
  { id: 'contact', label: 'Contact', path: '/contact' },
  { id: 'book-appointment', label: 'Book Appointment', path: '/contact', isCta: true },
];

export const footerQuickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Meet Doctors', path: '/doctors' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Google Reviews', path: '/reviews' },
  { label: 'Offers', path: '/offers' },
  { label: 'Contact', path: '/contact' },
  { label: 'Book Appointment', path: '/contact' },
];

export const footerTreatments = [
  { label: 'HydraFacial', path: '/treatments/hydrafacial' },
  { label: 'Chemical Peel', path: '/treatments/chemical-peel' },
  { label: 'Dental Implants', path: '/treatments/dental-implants' },
  { label: 'Smile Design', path: '/treatments/smile-design' },
  { label: 'Teeth Whitening', path: '/treatments/teeth-whitening' },
  { label: 'PRP Hair Treatment', path: '/treatments/prp-hair-treatment' },
  { label: 'Hair Transplant', path: '/treatments/hair-transplant' },
];

export const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-and-conditions' },
];
