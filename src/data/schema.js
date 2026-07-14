import { clinicInfo } from './clinic';
import { doctorProfiles } from './doctorsPage';
import { absoluteUrl, seoDefaults } from './seo';
import { dentalFaqs } from './dental';
import { skinFaqs } from './skin';
import { hairFaqs } from './hair';
import { contactFaqs } from './contactPage';
import { offersFaqs, offersList } from './offersPage';
import { blogArticles } from './blogPage';
import { googleReviewsList, reviewsStats } from './reviewsPage';

const orgId = `${seoDefaults.siteUrl}/#organization`;
const clinicId = `${seoDefaults.siteUrl}/#medicalclinic`;
const websiteId = `${seoDefaults.siteUrl}/#website`;

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: clinicInfo.name,
    url: seoDefaults.siteUrl,
    logo: absoluteUrl('/favicon.svg'),
    image: absoluteUrl(seoDefaults.defaultImage),
    description: clinicInfo.description,
    email: clinicInfo.email,
    telephone: clinicInfo.phone,
    sameAs: [
      clinicInfo.social.instagram,
      clinicInfo.social.facebook,
      clinicInfo.social.youtube,
      clinicInfo.social.google,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinicInfo.address.line1,
      addressLocality: 'Perumbakkam',
      addressRegion: 'Tamil Nadu',
      postalCode: '600100',
      addressCountry: 'IN',
    },
  };
}

export function buildMedicalClinicSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'Dentist', 'LocalBusiness'],
    '@id': clinicId,
    name: clinicInfo.name,
    alternateName: 'Capilla Dental Clinic Perumbakkam',
    url: seoDefaults.siteUrl,
    image: absoluteUrl(seoDefaults.defaultImage),
    logo: absoluteUrl('/favicon.svg'),
    description:
      'Best dental clinic in Perumbakkam offering dental implants, root canal, teeth whitening, Hydrafacial, PRP hair treatment and more. Serving Medavakkam and Sholinganallur, Chennai.',
    telephone: clinicInfo.phone,
    email: clinicInfo.email,
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinicInfo.address.line1,
      addressLocality: 'Perumbakkam',
      addressRegion: 'Tamil Nadu',
      postalCode: '600100',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.899,
      longitude: 80.227,
    },
    hasMap: clinicInfo.mapsLink,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    areaServed: [
      { '@type': 'Place', name: 'Perumbakkam' },
      { '@type': 'Place', name: 'Medavakkam' },
      { '@type': 'Place', name: 'Sholinganallur' },
      { '@type': 'City', name: 'Chennai' },
    ],
    medicalSpecialty: [
      'Dentistry',
      'CosmeticDentistry',
      'Dermatology',
      'Trichology',
    ],
    availableService: [
      { '@type': 'MedicalProcedure', name: 'Dental Implants' },
      { '@type': 'MedicalProcedure', name: 'Root Canal Treatment' },
      { '@type': 'MedicalProcedure', name: 'Teeth Whitening' },
      { '@type': 'MedicalProcedure', name: 'Hydrafacial' },
      { '@type': 'MedicalProcedure', name: 'PRP Hair Treatment' },
      { '@type': 'MedicalProcedure', name: 'Hair Transplant' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(reviewsStats.rating),
      reviewCount: String(reviewsStats.totalReviews),
      bestRating: '5',
      worstRating: '1',
    },
    parentOrganization: { '@id': orgId },
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: seoDefaults.siteUrl,
    name: clinicInfo.name,
    description: seoDefaults.defaultDescription,
    publisher: { '@id': orgId },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${seoDefaults.siteUrl}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildPhysicianSchemas() {
  return doctorProfiles.map((doc) => ({
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${seoDefaults.siteUrl}/doctors#${doc.id}`,
    name: doc.name,
    honorificPrefix: 'Dr.',
    description: doc.shortDescription,
    image: doc.image,
    medicalSpecialty: doc.specialization,
    knowsLanguage: doc.languages,
    worksFor: { '@id': clinicId },
    url: `${seoDefaults.siteUrl}/doctors`,
    alumniOf: doc.education?.map((e) => ({
      '@type': 'EducationalOrganization',
      name: e,
    })),
    memberOf: doc.memberships?.map((m) => ({
      '@type': 'Organization',
      name: m,
    })),
    hasCredential: doc.certifications?.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certificate',
      name: c,
    })),
  }));
}

export function buildBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: seoDefaults.siteUrl,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    ],
  };
}

export function buildWebPageSchema({
  title,
  description,
  path,
  type = 'WebPage',
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': websiteId },
    about: { '@id': clinicId },
    inLanguage: 'en-IN',
  };
}

export function buildFaqSchema(faqs = []) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildReviewSchemas() {
  return googleReviewsList.slice(0, 6).map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    datePublished: '2026-06-01',
    reviewBody: r.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(r.rating),
      bestRating: '5',
    },
    itemReviewed: { '@id': clinicId },
  }));
}

export function buildOfferSchemas() {
  return offersList.map((offer) => ({
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: offer.title,
    description: offer.description,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: absoluteUrl('/offers'),
    seller: { '@id': clinicId },
    validThrough: '2026-12-31',
    category: offer.badge,
  }));
}

export function buildArticleSchema(article) {
  if (!article) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    datePublished: '2026-06-12',
    dateModified: '2026-06-12',
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: clinicInfo.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/favicon.svg'),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
    articleSection: article.category,
  };
}

export function buildImageObjectSchema({ url, caption, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: url,
    caption,
    creditText: clinicInfo.name,
    copyrightNotice: clinicInfo.name,
    url: absoluteUrl(path || '/gallery'),
  };
}

export function buildServiceSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    url: absoluteUrl(path),
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    howPerformed: description,
    status: 'https://schema.org/EventScheduled',
  };
}

/** Route → page schema pack (no UI) */
export function getSchemasForPath(pathname) {
  const schemas = [
    buildOrganizationSchema(),
    buildMedicalClinicSchema(),
    buildWebSiteSchema(),
    ...buildPhysicianSchemas(),
  ];

  const path = pathname.replace(/\/$/, '') || '/';

  const pageMap = {
    '/': {
      title: seoDefaults.defaultTitle,
      description: seoDefaults.defaultDescription,
      crumbs: [],
      faqs: [
        {
          question: 'Where is the best dental clinic in Perumbakkam?',
          answer:
            'Capilla Dental & Aesthetic Center on OMR Road, Perumbakkam offers advanced dental, skin, and hair treatments with specialist doctors and modern equipment.',
        },
        {
          question: 'Does Capilla treat patients from Medavakkam and Sholinganallur?',
          answer:
            'Yes. Capilla serves patients across Perumbakkam, Medavakkam, Sholinganallur, and greater Chennai for dental, skin, and hair care.',
        },
      ],
    },
    '/about': {
      title: 'About Capilla Dental & Aesthetic Center',
      description: clinicInfo.description,
      crumbs: [{ name: 'About Us', path: '/about' }],
    },
    '/doctors': {
      title: 'Meet Our Doctors',
      description: 'Expert dentists, skin specialists, and trichologists at Capilla Perumbakkam.',
      crumbs: [{ name: 'Meet Doctors', path: '/doctors' }],
    },
    '/dental': {
      title: 'Advanced Dental Treatments in Perumbakkam',
      crumbs: [{ name: 'Dental Treatments', path: '/dental' }],
      faqs: dentalFaqs,
    },
    '/skin': {
      title: 'Advanced Skin Treatments in Perumbakkam',
      crumbs: [{ name: 'Skin Treatments', path: '/skin' }],
      faqs: skinFaqs,
    },
    '/hair': {
      title: 'Advanced Hair Treatments in Perumbakkam',
      crumbs: [{ name: 'Hair Treatments', path: '/hair' }],
      faqs: hairFaqs,
    },
    '/gallery': {
      title: 'Before & After Gallery',
      crumbs: [{ name: 'Gallery', path: '/gallery' }],
    },
    '/reviews': {
      title: 'Google Reviews',
      crumbs: [{ name: 'Google Reviews', path: '/reviews' }],
      reviews: true,
    },
    '/offers': {
      title: 'Exclusive Offers & Packages',
      crumbs: [{ name: 'Offers', path: '/offers' }],
      faqs: offersFaqs,
      offers: true,
    },
    '/blog': {
      title: 'Health Tips & Treatment Guides',
      crumbs: [{ name: 'Blog', path: '/blog' }],
    },
    '/contact': {
      title: 'Book Your Consultation',
      crumbs: [{ name: 'Contact', path: '/contact' }],
      faqs: contactFaqs,
    },
    '/privacy-policy': {
      title: 'Privacy Policy',
      crumbs: [{ name: 'Privacy Policy', path: '/privacy-policy' }],
    },
    '/terms-and-conditions': {
      title: 'Terms & Conditions',
      crumbs: [{ name: 'Terms & Conditions', path: '/terms-and-conditions' }],
    },
  };

  const treatmentMatch = path.match(/^\/treatments\/(.+)$/);
  if (treatmentMatch) {
    const slug = treatmentMatch[1];
    schemas.push(
      buildWebPageSchema({
        title: slug.replace(/-/g, ' '),
        description: `Premium ${slug.replace(/-/g, ' ')} at Capilla Dental & Aesthetic Center, Perumbakkam, Chennai.`,
        path,
        type: 'MedicalWebPage',
      }),
      buildBreadcrumbSchema([
        { name: 'Treatments', path: '/dental' },
        { name: slug.replace(/-/g, ' '), path },
      ]),
      buildServiceSchema({
        name: slug.replace(/-/g, ' '),
        description: `Learn about ${slug.replace(/-/g, ' ')} at Capilla clinic in Perumbakkam.`,
        path,
      })
    );
    return schemas.filter(Boolean);
  }

  const blogMatch = path.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const article = blogArticles.find((a) => a.slug === blogMatch[1]);
    if (article) {
      schemas.push(
        buildArticleSchema(article),
        buildWebPageSchema({
          title: article.title,
          description: article.excerpt,
          path,
          type: 'MedicalWebPage',
        }),
        buildBreadcrumbSchema([
          { name: 'Blog', path: '/blog' },
          { name: article.title, path },
        ]),
        buildFaqSchema(article.content?.faqs || [])
      );
    }
    return schemas.filter(Boolean);
  }

  const page = pageMap[path];
  if (page) {
    schemas.push(
      buildWebPageSchema({
        title: page.title,
        description: page.description || seoDefaults.defaultDescription,
        path,
      }),
      buildBreadcrumbSchema(page.crumbs || [])
    );
    if (page.faqs) schemas.push(buildFaqSchema(page.faqs));
    if (page.reviews) schemas.push(...buildReviewSchemas());
    if (page.offers) schemas.push(...buildOfferSchemas());
  }

  return schemas.filter(Boolean);
}

/** AEO short answers for citation-ready FAQ extraction */
export const aeoShortAnswers = [
  {
    question: 'What is the best dental clinic in Perumbakkam?',
    answer:
      'Capilla Dental & Aesthetic Center is a premium multi-specialty clinic in Perumbakkam offering advanced dental, skin, and hair treatments with experienced specialists.',
  },
  {
    question: 'Where can I get Hydrafacial in Perumbakkam?',
    answer:
      'Capilla offers doctor-supervised Hydrafacial treatments at its Perumbakkam clinic on OMR Road, Chennai, with customizable boosters and no downtime for most patients.',
  },
  {
    question: 'Does Capilla offer PRP hair treatment in Chennai?',
    answer:
      'Yes. Capilla provides PRP and GFC hair treatments plus FUE hair transplant consultations for patients across Perumbakkam, Medavakkam, and Sholinganallur.',
  },
];
