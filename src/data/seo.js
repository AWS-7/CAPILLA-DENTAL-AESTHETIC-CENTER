export const seoDefaults = {
  siteName: 'Capilla Dental & Aesthetic Center',
  siteUrl: 'https://capillaclinic.com',
  defaultTitle: 'Capilla Dental & Aesthetic Center | Premium Dental, Skin & Hair Care',
  titleTemplate: '%s | Capilla Dental & Aesthetic Center',
  defaultDescription:
    'Luxury multi-specialty clinic for advanced dental, skin, and hair treatments. Book your appointment at Capilla Dental & Aesthetic Center.',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@capillaclinic',
};

export function buildPageSeo({
  title,
  description,
  path = '/',
  image,
  noIndex = false,
} = {}) {
  return {
    title: title || seoDefaults.defaultTitle,
    description: description || seoDefaults.defaultDescription,
    canonical: `${seoDefaults.siteUrl}${path}`,
    image: image || `${seoDefaults.siteUrl}${seoDefaults.defaultImage}`,
    noIndex,
  };
}
