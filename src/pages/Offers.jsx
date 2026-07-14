import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/common';
import PageCtaHero from '../components/sections/shared/PageCtaHero';
import {
  OffersGrid,
  OffersCountdownBanner,
} from '../components/sections/offers/OffersSections';
import DentalFAQ from '../components/sections/dental/DentalFAQ';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { offersSeo, offersHero, offersFaqs } from '../data/offersPage';

export default function Offers() {
  return (
    <>
      <SEO
        title={offersSeo.title}
        description={offersSeo.description}
        canonical={offersSeo.canonical}
        image={offersHero.image}
      />
      <Helmet>
        <meta name="keywords" content={offersSeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </Helmet>

      <PageCtaHero
        title={offersHero.title}
        subtitle={offersHero.subtitle}
        image={offersHero.image}
        eyebrow="Limited Offers"
        showCall
      />
      <OffersGrid />
      <OffersCountdownBanner />
      <DentalFAQ
        faqs={offersFaqs}
        title="Offer FAQs"
        description="Common questions about redeeming Capilla packages and seasonal offers."
      />
      <PageConsultCTA
        title="Claim Your Offer Today"
        description="Book via form, WhatsApp, or phone and mention the package you want to redeem."
      />
    </>
  );
}
