import { SEO } from '../components/common';
import HairHero from '../components/sections/hair/HairHero';
import HairTreatmentOverview from '../components/sections/hair/HairTreatmentOverview';
import HairWhyChoose from '../components/sections/hair/HairWhyChoose';
import HairProcess from '../components/sections/hair/HairProcess';
import HairStories from '../components/sections/hair/HairStories';
import DentalBeforeAfter from '../components/sections/dental/DentalBeforeAfter';
import DentalFAQ from '../components/sections/dental/DentalFAQ';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { hairSeo, hairFaqs, hairBeforeAfter } from '../data/hair';
import { placeholders } from '../data/content';

export default function Hair() {
  return (
    <>
      <SEO
        title={hairSeo.title}
        description={hairSeo.description}
        canonical={hairSeo.canonical}
        image={placeholders.hair}
      >
        <meta name="keywords" content={hairSeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </SEO>

      <HairHero />
      <HairTreatmentOverview />
      <HairWhyChoose />
      <HairProcess />
      <HairStories />
      <DentalBeforeAfter
        items={hairBeforeAfter}
        title="Before & After Preview"
        description="A glimpse of hair transformations crafted with clinical artistry at Capilla."
        showGalleryButton
      />
      <DentalFAQ
        faqs={hairFaqs}
        title="Hair FAQs"
        description="Clear answers to help you choose the right hair restoration pathway with confidence."
      />
      <PageConsultCTA
        title="Book Your Hair Consultation"
        description="PRP, GFC, transplant, regrowth & scalp analysis in Perumbakkam — book, WhatsApp, or call now."
      />
    </>
  );
}
