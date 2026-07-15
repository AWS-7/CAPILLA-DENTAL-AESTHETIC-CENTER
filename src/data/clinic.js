export const clinicInfo = {
  name: 'Capilla Dental & Aesthetic Center',
  shortName: 'Capilla',
  tagline: 'Where Science Meets Aesthetic Excellence',
  description:
    'A premium multi-specialty clinic offering advanced dental, skin, and hair treatments with a focus on precision, comfort, and lasting results.',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '+919876543210',
  whatsappHref: 'https://wa.me/919876543210',
  email: 'hello@capillaclinic.com',
  emailHref: 'mailto:hello@capillaclinic.com',
  address: {
    line1: 'No. 42, OMR Road, Perumbakkam',
    line2: 'Chennai, Tamil Nadu 600100',
    full: 'No. 42, OMR Road, Perumbakkam, Chennai, Tamil Nadu 600100',
  },
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.2!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1',
  mapsLink: 'https://maps.google.com/?q=Perumbakkam+Chennai',
  workingHours: [
    { day: 'Monday – Saturday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', hours: '10:00 AM – 2:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com',
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
    label: 'Skin Treatments',
    path: '/skin',
    children: [
      { label: 'HydraFacial', path: '/treatments/hydrafacial' },
      { label: 'Chemical Peel', path: '/treatments/chemical-peel' },
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
  { label: 'Dental Implants', path: '/treatments/dental-implants' },
  { label: 'Smile Design', path: '/treatments/smile-design' },
  { label: 'HydraFacial', path: '/treatments/hydrafacial' },
  { label: 'PRP Hair Treatment', path: '/treatments/prp-hair-treatment' },
  { label: 'Hair Transplant', path: '/treatments/hair-transplant' },
  { label: 'Teeth Whitening', path: '/treatments/teeth-whitening' },
];

export const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-and-conditions' },
];
