import { Helmet } from 'react-helmet-async';
import { seoDefaults } from '../../data/seo';

/**
 * Production SEO head tags.
 * Visual UI untouched — document metadata only.
 */
export default function SEO({
  title,
  description,
  canonical,
  image,
  noIndex = false,
  type = 'website',
  keywords,
  author,
}) {
  const pageTitle = title
    ? title.includes(seoDefaults.siteName)
      ? title
      : `${title} | ${seoDefaults.siteName}`
    : seoDefaults.defaultTitle;

  const metaDescription = description || seoDefaults.defaultDescription;
  const rawImage = image || `${seoDefaults.siteUrl}${seoDefaults.defaultImage}`;
  const ogImage = rawImage.startsWith('http')
    ? rawImage
    : `${seoDefaults.siteUrl}${rawImage}`;
  const robotsContent = noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      {(keywords || seoDefaults.keywords) && (
        <meta name="keywords" content={keywords || seoDefaults.keywords} />
      )}
      {author && <meta name="author" content={author} />}
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={seoDefaults.siteName} />
      <meta property="og:locale" content={seoDefaults.locale} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={pageTitle} />
      {canonical && <meta property="og:url" content={canonical} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={pageTitle} />
      {seoDefaults.twitterHandle && (
        <meta name="twitter:site" content={seoDefaults.twitterHandle} />
      )}
    </Helmet>
  );
}
