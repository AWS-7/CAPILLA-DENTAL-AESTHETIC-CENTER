import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/common';
import PageCtaHero from '../components/sections/shared/PageCtaHero';
import {
  ReviewsRatingBoard,
  ReviewsCards,
  ReviewsVideoPlaceholders,
  ReviewsWriteCta,
} from '../components/sections/reviews/ReviewsSections';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { reviewsSeo, reviewsHero } from '../data/reviewsPage';

export default function Reviews() {
  return (
    <>
      <SEO
        title={reviewsSeo.title}
        description={reviewsSeo.description}
        canonical={reviewsSeo.canonical}
        image={reviewsHero.image}
      />
      <Helmet>
        <meta name="keywords" content={reviewsSeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </Helmet>

      <PageCtaHero
        title={reviewsHero.title}
        subtitle={reviewsHero.subtitle}
        image={reviewsHero.image}
        eyebrow="Google Reviews"
        showCall
      />
      <ReviewsRatingBoard />
      <ReviewsCards />
      <ReviewsVideoPlaceholders />
      <ReviewsWriteCta />
      <PageConsultCTA
        title="Join Our Happy Patients"
        description="Book your consultation at Capilla — the trusted dental, skin & hair clinic in Perumbakkam."
      />
    </>
  );
}
