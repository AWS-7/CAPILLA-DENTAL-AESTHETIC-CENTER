import { TREATMENT_OPTIONS } from '../utils/appointmentForm';

export const clinicInfo = {
  name: 'Capilla Dental & Aesthetic Center',
  shortName: 'Capilla',
  tagline: 'Where Science Meets Aesthetic Excellence',
  description:
    'A premium multi-specialty clinic offering advanced dental, skin, and hair treatments with a focus on precision, comfort, and lasting results.',
  yearsOfExperience: 8,
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
  'Dental Extraction': '/contact',
  'Impacted Tooth Extraction': '/contact',
  'Dental Braces': '/treatments/braces-aligners',
  'Artificial Dental Braces': '/contact',
  'Braces & Invisalign': '/treatments/braces-aligners',
  'Cosmetic Fillings': '/contact',
  'Gum Disease Treatment': '/contact',
  'Teeth Cleaning (Scaling & Polishing)': '/contact',
  'Teeth Whitening': '/treatments/teeth-whitening',
  'Dental Implants': '/treatments/dental-implants',
  'Dental Abscess Treatment': '/contact',
  'Smile Beautification': '/treatments/smile-design',
  'Pediatric Dental Care': '/contact',
  'Root Canal Treatment': '/treatments/root-canal-treatment',
  'Crowns': '/contact',
  'Dental Bridges': '/contact',
  'Pit & Fissure Sealants': '/contact',
  'PRP / GFC / QR 678': '/contact',
  'Exosomes Treatment': '/contact',
  'Hair Transplantation': '/treatments/hair-transplant',
  'Dark Circle Treatment': '/contact',
  'Acne Correction': '/contact',
  'Acne Scar Reduction': '/treatments/acne-scar-treatment',
  'Laser Hair Removal': '/contact',
  'IV - Glow / Whitening': '/contact',
  'Mole / Wart / Tag Removal': '/contact',
  'Ear Lobe Repair': '/contact',
  'Ear Piercing': '/contact',
  'Skin Peels': '/treatments/chemical-peel',
  'Medi Facials': '/contact',
  'Hydra Facials': '/treatments/hydrafacial',
  'Lip - Darkness Correction': '/contact',
  'Lip Micropigmentation': '/contact',
  'Eyelash Extension': '/contact',
  'Eyelash Lift': '/contact',
  'Eyebrow Microblading': '/contact',
  'Eyebrow Micro / Nano / Ombre Shading': '/contact',
  'Meso Therapy': '/contact',
  'Scalp Micropigmentation': '/contact',
  'Hair Re-Growth Therapy': '/treatments/hair-regrowth-treatment',
  'Micro Needling': '/contact',
  'Anti-Aging, Vampire Facials': '/contact',
  'Melasma Treatment': '/contact',
  'Face GFC': '/contact',
  'Vitiligo Camouflage': '/contact',
  'Botox / Fillers': '/contact',
  'Threads': '/contact',
  'Cosmetic Products / Cosmoceuticals': '/contact',
  'Skin Rejuvenation Therapy': '/contact',
  'Hair Extension': '/contact',
  'Mole Creation': '/contact',
  'Dimple Creation': '/contact',
  'PRP Hair Treatment': '/treatments/prp-hair-treatment',
  'GFC Hair Treatment': '/treatments/gfc-hair-treatment',
  'QR678 Hair Therapy': '/contact',
  'Micro Needling (Hair)': '/contact',
  'Meso Therapy (Hair)': '/contact',
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
