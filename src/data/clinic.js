export const clinicInfo = {
  name: 'Capilla Dental & Aesthetic Center',
  shortName: 'Capilla',
  tagline: 'Where Science Meets Aesthetic Excellence',
  description:
    'A premium multi-specialty clinic offering advanced dental, skin, and hair treatments with a focus on precision, comfort, and lasting results.',
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

export const servicesMegaMenu = [
  {
    id: 'dental',
    label: 'Dental',
    buttonLabel: 'Dental Treatments',
    path: '/dental',
    image: '/gallery/clinic-treatment-suite.webp',
    items: [
      { label: 'Dental Implants', path: '/treatments/dental-implants' },
      { label: 'Root Canal Treatment', path: '/treatments/root-canal-treatment' },
      { label: 'Smile Design', path: '/treatments/smile-design' },
      { label: 'Teeth Whitening', path: '/treatments/teeth-whitening' },
      { label: 'Braces & Aligners', path: '/treatments/braces-aligners' },
      { label: 'Dental Veneers', path: '/treatments/dental-veneers' },
      { label: 'Wisdom Tooth Extraction', path: '/treatments/wisdom-tooth-extraction' },
      { label: 'Pediatric Dentistry', path: '/treatments/pediatric-dentistry' },
    ],
  },
  {
    id: 'skin',
    label: 'Skin',
    buttonLabel: 'Skin Treatments',
    path: '/skin',
    image: '/gallery/clinic-laser-room.webp',
    items: [
      { label: 'Hydra Facial', path: '/treatments/hydrafacial' },
      { label: 'Chemical Peel', path: '/treatments/chemical-peel' },
      { label: 'Acne Treatment', path: '/treatments/acne-treatment' },
      { label: 'Acne Scar Treatment', path: '/treatments/acne-scar-treatment' },
      { label: 'Pigmentation', path: '/treatments/pigmentation' },
      { label: 'Skin Brightening', path: '/treatments/skin-brightening' },
      { label: 'Glass Skin', path: '/treatments/glass-skin' },
      { label: 'Anti Ageing', path: '/treatments/anti-ageing' },
    ],
  },
  {
    id: 'hair',
    label: 'Hair',
    buttonLabel: 'Hair Treatments',
    path: '/hair',
    image: '/gallery/clinic-brand-wall.webp',
    items: [
      { label: 'PRP Hair Therapy', path: '/treatments/prp-hair-treatment' },
      { label: 'GFC Therapy', path: '/treatments/gfc-hair-treatment' },
      { label: 'Hair Transplant', path: '/treatments/hair-transplant' },
      { label: 'Hair Loss Treatment', path: '/treatments/hair-loss-treatment' },
      { label: 'Scalp Analysis', path: '/treatments/scalp-analysis' },
      { label: 'Low Level Laser Therapy', path: '/treatments/low-level-laser-therapy' },
      { label: 'Dandruff Treatment', path: '/treatments/dandruff-treatment' },
      { label: 'Hair Regrowth', path: '/treatments/hair-regrowth' },
    ],
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
  { id: 'blog', label: 'Blog', path: '/blog' },
  { id: 'contact', label: 'Contact', path: '/contact' },
  { id: 'book-appointment', label: 'Book Appointment', path: '/contact', isCta: true },
];

export const footerQuickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Meet Doctors', path: '/doctors' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Google Reviews', path: '/reviews' },
  { label: 'Offers', path: '/offers' },
  { label: 'Blog', path: '/blog' },
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
