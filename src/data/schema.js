import { clinicInfo } from './clinic';
import { doctorProfiles } from './doctorsPage';
import { absoluteUrl, seoDefaults } from './seo';
import { dentalFaqs, getDentalTreatment } from './dental';
import { skinFaqs, getSkinTreatment } from './skin';
import { hairFaqs, getHairTreatment } from './hair';
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
    logo: absoluteUrl('/logo.png'),
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
    logo: absoluteUrl('/logo.png'),
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
    '@type': ['Physician', 'Person'],
    '@id': `${seoDefaults.siteUrl}/doctors#${doc.id}`,
    name: doc.name,
    honorificPrefix: 'Dr.',
    description: doc.shortDescription,
    image: doc.image,
    jobTitle: doc.specialization,
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

/** Explicit LocalBusiness graph node (NAP-aligned with MedicalClinic) */
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${seoDefaults.siteUrl}/#localbusiness`,
    name: clinicInfo.name,
    url: seoDefaults.siteUrl,
    telephone: clinicInfo.phone,
    email: clinicInfo.email,
    image: absoluteUrl(seoDefaults.defaultImage),
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
    openingHours: ['Mo-Sa 10:00-20:00', 'Su 10:00-14:00'],
    priceRange: '₹₹₹',
    sameAs: Object.values(clinicInfo.social),
  };
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
        url: absoluteUrl('/logo.png'),
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
    buildLocalBusinessSchema(),
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
      images: true,
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
    const treatment =
      getDentalTreatment(slug) || getSkinTreatment(slug) || getHairTreatment(slug);
    const title = treatment?.seo?.title || treatment?.title || slug.replace(/-/g, ' ');
    const description =
      treatment?.seo?.description ||
      `Premium ${slug.replace(/-/g, ' ')} at Capilla Dental & Aesthetic Center, Perumbakkam, Chennai.`;
    const hubPath = getDentalTreatment(slug)
      ? '/dental'
      : getSkinTreatment(slug)
        ? '/skin'
        : '/hair';
    const hubLabel = hubPath === '/dental' ? 'Dental' : hubPath === '/skin' ? 'Skin' : 'Hair';

    schemas.push(
      buildWebPageSchema({
        title,
        description,
        path,
        type: 'MedicalWebPage',
      }),
      buildBreadcrumbSchema([
        { name: `${hubLabel} Treatments`, path: hubPath },
        { name: treatment?.breadcrumb || treatment?.title || slug.replace(/-/g, ' '), path },
      ]),
      buildServiceSchema({
        name: treatment?.title || slug.replace(/-/g, ' '),
        description:
          treatment?.overview?.[0] ||
          `Learn about ${slug.replace(/-/g, ' ')} at Capilla clinic in Perumbakkam.`,
        path,
      }),
      buildFaqSchema(treatment?.faqs || []),
      treatment?.image
        ? buildImageObjectSchema({
            url: treatment.image,
            caption: `${treatment.title} at Capilla Dental & Aesthetic Center`,
            path,
          })
        : null
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
    if (page.images) {
      schemas.push(
        buildImageObjectSchema({
          url: absoluteUrl('/og-image.svg'),
          caption: 'Capilla Dental & Aesthetic Center patient transformation gallery',
          path: '/gallery',
        })
      );
    }
  }

  return schemas.filter(Boolean);
}

/** AEO short answers for citation-ready FAQ / People Also Ask extraction */
export const aeoShortAnswers = [
  {
    question: 'What is the best dental clinic in Perumbakkam?',
    answer:
      'Capilla Dental & Aesthetic Center is a premium multi-specialty clinic in Perumbakkam offering advanced dental, skin, and hair treatments with experienced specialists.',
  },
  {
    question: 'Where can I find a dentist near me in Perumbakkam, Chennai?',
    answer:
      'Capilla Dental & Aesthetic Center is located at No. 42, OMR Road, Perumbakkam, Chennai 600100. Call +91 98765 43210 to book a consultation.',
  },
  {
    question: 'Is there a good dental clinic in Medavakkam or Sholinganallur?',
    answer:
      'Patients from Medavakkam and Sholinganallur commonly visit Capilla in nearby Perumbakkam for implants, root canal, whitening, smile design, and cosmetic dentistry.',
  },
  {
    question: 'Where can I get Hydrafacial in Perumbakkam or Chennai?',
    answer:
      'Capilla offers doctor-supervised Hydrafacial treatments at its Perumbakkam clinic on OMR Road, Chennai, with customizable boosters and minimal downtime for most patients.',
  },
  {
    question: 'Does Capilla offer PRP and GFC hair treatment in Chennai?',
    answer:
      'Yes. Capilla provides PRP and GFC hair treatments plus FUE hair transplant consultations for hair loss and regrowth goals across Perumbakkam, Medavakkam, and Sholinganallur.',
  },
  {
    question: 'What skin and hair treatments are available at Capilla?',
    answer:
      'Capilla’s skin clinic offers Hydrafacial, chemical peels, acne scar care, glass skin facials, and anti-ageing protocols. The hair clinic offers PRP, GFC, transplant consults, and scalp analysis.',
  },
  {
    question: 'How do I book an appointment at Capilla Dental & Aesthetic Center?',
    answer:
      'Book via the website contact form, WhatsApp, or phone. Capilla is open Monday–Saturday 10:00 AM–8:00 PM and Sunday 10:00 AM–2:00 PM.',
  },
];

/** Google Business Profile optimization checklist (ops reference; also exposed to crawlers) */
export const gbpRecommendations = [
  'Keep NAP identical to the website: Capilla Dental & Aesthetic Center, No. 42, OMR Road, Perumbakkam, Chennai 600100, +91 98765 43210.',
  'Primary category: Dentist. Secondary: Medical spa / Dermatologist / Hair transplantation clinic as applicable.',
  'Upload weekly photos of clinic, doctors, equipment, and before/after (with consent).',
  'Reply to every Google review within 24–48 hours using patient-first tone.',
  'Post weekly GBP updates for offers, new treatments, and education tips.',
  'Enable booking / WhatsApp messaging and verify hours including Sunday half-day.',
  'Use local keywords naturally in GBP description: Dental Clinic in Perumbakkam, Hydrafacial Chennai, Hair Clinic Perumbakkam.',
];
