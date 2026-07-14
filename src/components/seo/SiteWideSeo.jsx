import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import JsonLd from './JsonLd';
import { getSchemasForPath, aeoShortAnswers, gbpRecommendations } from '../../data/schema';
import { seoDefaults } from '../../data/seo';
import { clinicInfo } from '../../data/clinic';

/**
 * Sitewide technical SEO / schema / AEO helpers.
 * No visual redesign — head tags + screen-reader citation answers only.
 */
export default function SiteWideSeo() {
  const { pathname } = useLocation();
  const schemas = getSchemasForPath(pathname);

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content={clinicInfo.name} />
        <meta name="publisher" content={clinicInfo.name} />
        <meta name="geo.region" content={seoDefaults.geo.region} />
        <meta name="geo.placename" content={seoDefaults.geo.placename} />
        <meta name="geo.position" content={seoDefaults.geo.position} />
        <meta name="ICBM" content={seoDefaults.geo.icbm} />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Capilla" />
        <meta name="application-name" content="Capilla Clinic" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#C8A45D" />
      </Helmet>

      <JsonLd data={schemas} />

      {/* AEO / GEO citation-ready Q&A — visually hidden, available to AT & crawlers */}
      <section className="sr-only" aria-label="Clinic quick answers for search and assistants">
        <h2>Frequently asked questions about Capilla Dental & Aesthetic Center</h2>
        {aeoShortAnswers.map((item) => (
          <article key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
        <p>
          NAP: {clinicInfo.name}, {clinicInfo.address.full}. Phone {clinicInfo.phone}. Email{' '}
          {clinicInfo.email}.
        </p>
        <p>
          Service areas: Perumbakkam, Medavakkam, Sholinganallur, Chennai. Keywords: best dental
          clinic in Perumbakkam, dentist near me, Hydrafacial Chennai, hair transplant Chennai,
          skin clinic Perumbakkam, hair clinic Perumbakkam.
        </p>
        <h2>Google Business Profile recommendations</h2>
        <ul>
          {gbpRecommendations.map((tip) => (
            <li key={tip.slice(0, 48)}>{tip}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
