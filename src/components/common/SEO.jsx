import { Helmet } from 'react-helmet-async';
import { seoDefaults } from '../../data/seo';

export default function SEO({
  title,
  description,
  canonical,
  image,
  noIndex = false,
  type = 'website',
}) {
  const pageTitle = title
    ? title.includes(seoDefaults.siteName)
      ? title
      : `${title} | ${seoDefaults.siteName}`
    : seoDefaults.defaultTitle;

  const metaDescription = description || seoDefaults.defaultDescription;
  const ogImage = image || `${seoDefaults.siteUrl}${seoDefaults.defaultImage}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={seoDefaults.siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      {seoDefaults.twitterHandle && (
        <meta name="twitter:site" content={seoDefaults.twitterHandle} />
      )}
    </Helmet>
  );
}
