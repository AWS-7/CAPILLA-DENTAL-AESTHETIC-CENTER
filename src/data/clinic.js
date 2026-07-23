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

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Meet Doctors', path: '/doctors' },
  {
    label: 'Skin Treatments',
    path: '/skin',
    children: [
      { label: 'HydraFacial', path: '/treatments/hydrafacial' },
      { label: 'Chemical Peel', path: '/treatments/chemical-peel' },
    ],
  },
  {
    label: 'Dental Treatments',
    path: '/dental',
    children: [
      { label: 'Dental Implants', path: '/treatments/dental-implants' },
      { label: 'Root Canal Treatment', path: '/treatments/root-canal-treatment' },
      { label: 'Teeth Whitening', path: '/treatments/teeth-whitening' },
      { label: 'Smile Design', path: '/treatments/smile-design' },
      { label: 'Braces & Aligners', path: '/treatments/braces-aligners' },
    ],
  },
  {
    label: 'Hair Treatments',
    path: '/hair',
    children: [
      { label: 'PRP Hair Treatment', path: '/treatments/prp-hair-treatment' },
      { label: 'GFC Hair Treatment', path: '/treatments/gfc-hair-treatment' },
      { label: 'Hair Transplant', path: '/treatments/hair-transplant' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Google Reviews', path: '/reviews' },
  { label: 'Offers', path: '/offers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
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
