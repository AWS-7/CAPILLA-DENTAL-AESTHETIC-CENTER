import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/common';
import DentalHero from '../components/sections/dental/DentalHero';
import DentalTreatmentOverview from '../components/sections/dental/DentalTreatmentOverview';
import DentalWhyChoose from '../components/sections/dental/DentalWhyChoose';
import DentalProcess from '../components/sections/dental/DentalProcess';
import DentalStories from '../components/sections/dental/DentalStories';
import DentalBeforeAfter from '../components/sections/dental/DentalBeforeAfter';
import DentalFAQ from '../components/sections/dental/DentalFAQ';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { dentalSeo, dentalFaqs } from '../data/dental';
import { placeholders } from '../data/content';

export default function Dental() {
  return (
    <>
      <SEO
        title={dentalSeo.title}
        description={dentalSeo.description}
        canonical={dentalSeo.canonical}
        image={placeholders.dental}
      />
      <Helmet>
        <meta name="keywords" content={dentalSeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </Helmet>

      <DentalHero />
      <DentalTreatmentOverview />
      <DentalWhyChoose />
      <DentalProcess />
      <DentalStories />
      <DentalBeforeAfter />
      <DentalFAQ faqs={dentalFaqs} />
      <PageConsultCTA
        title="Book Your Dental Consultation"
        description="Advanced dental treatments in Perumbakkam — implants, RCT, whitening, smile design, and braces. Book, WhatsApp, or call now."
      />
    </>
  );
}
