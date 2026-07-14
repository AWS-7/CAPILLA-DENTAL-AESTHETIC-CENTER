export const seoDefaults = {
  siteName: 'Capilla Dental & Aesthetic Center',
  siteUrl: (import.meta.env.VITE_SITE_URL || 'https://capillaclinic.com').replace(/\/$/, ''),
  defaultTitle:
    'Best Dental Clinic in Perumbakkam | Skin & Hair Care | Capilla Dental & Aesthetic Center',
  titleTemplate: '%s | Capilla Dental & Aesthetic Center',
  defaultDescription:
    'Capilla Dental & Aesthetic Center — best dental clinic in Perumbakkam for implants, RCT, Hydrafacial, PRP & hair transplant. Serving Medavakkam & Sholinganallur, Chennai. Book today.',
  defaultImage: '/og-image.svg',
  twitterHandle: '@capillaclinic',
  locale: 'en_IN',
  language: 'en',
  geo: {
    region: 'IN-TN',
    placename: 'Perumbakkam, Chennai',
    position: '12.8990;80.2270',
    icbm: '12.8990, 80.2270',
  },
  keywords:
    'Dental Clinic in Perumbakkam, Best Dental Clinic in Perumbakkam, Dentist Near Me, Cosmetic Dentist Chennai, Dental Clinic Medavakkam, Dental Clinic Sholinganallur, Skin Clinic Perumbakkam, Hair Clinic Perumbakkam, Hydrafacial Chennai, Hair Treatment Chennai',
};

export const targetKeywords = [
  'Dental Clinic in Perumbakkam',
  'Best Dental Clinic in Perumbakkam',
  'Dentist Near Me',
  'Cosmetic Dentist Chennai',
  'Teeth Cleaning Chennai',
  'Teeth Whitening Chennai',
  'Root Canal Treatment Chennai',
  'Dental Implants Chennai',
  'Smile Makeover Chennai',
  'Hydrafacial Chennai',
  'Hydrafacial Perumbakkam',
  'Chemical Peel Chennai',
  'Skin Whitening Chennai',
  'Acne Scar Treatment Chennai',
  'Anti Ageing Treatment Chennai',
  'PRP Hair Treatment Chennai',
  'GFC Hair Treatment Chennai',
  'Hair Transplant Chennai',
  'Hair Loss Treatment Chennai',
  'Hair Regrowth Treatment Chennai',
  'Hair Clinic Chennai',
  'Skin Clinic Chennai',
  'Dental Clinic Medavakkam',
  'Dental Clinic Sholinganallur',
  'Skin Clinic Perumbakkam',
  'Hair Clinic Perumbakkam',
];

export function buildPageSeo({
  title,
  description,
  path = '/',
  image,
  noIndex = false,
  keywords,
} = {}) {
  return {
    title: title || seoDefaults.defaultTitle,
    description: description || seoDefaults.defaultDescription,
    canonical: `${seoDefaults.siteUrl}${path}`,
    image: image?.startsWith('http')
      ? image
      : `${seoDefaults.siteUrl}${image || seoDefaults.defaultImage}`,
    noIndex,
    keywords: keywords || seoDefaults.keywords,
  };
}

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${seoDefaults.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}
