import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/common';
import SkinHero from '../components/sections/skin/SkinHero';
import SkinTreatmentOverview from '../components/sections/skin/SkinTreatmentOverview';
import SkinWhyChoose from '../components/sections/skin/SkinWhyChoose';
import SkinProcess from '../components/sections/skin/SkinProcess';
import SkinStories from '../components/sections/skin/SkinStories';
import DentalBeforeAfter from '../components/sections/dental/DentalBeforeAfter';
import DentalFAQ from '../components/sections/dental/DentalFAQ';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { skinSeo, skinFaqs, skinBeforeAfter } from '../data/skin';
import { placeholders } from '../data/content';

export default function Skin() {
  return (
    <>
      <SEO
        title={skinSeo.title}
        description={skinSeo.description}
        canonical={skinSeo.canonical}
        image={placeholders.skin}
      />
      <Helmet>
        <meta name="keywords" content={skinSeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </Helmet>

      <SkinHero />
      <SkinTreatmentOverview />
      <SkinWhyChoose />
      <SkinProcess />
      <SkinStories />
      <DentalBeforeAfter
        items={skinBeforeAfter}
        title="Before & After Preview"
        description="A glimpse of skin transformations crafted with clinical artistry at Capilla."
        showGalleryButton
      />
      <DentalFAQ
        faqs={skinFaqs}
        title="Skin FAQs"
        description="Clear answers to help you choose the right aesthetic treatment with confidence."
      />
      <PageConsultCTA
        title="Book Your Skin Consultation"
        description="Hydrafacial, peels, scar care, glass skin & anti-ageing in Perumbakkam — book, WhatsApp, or call now."
      />
    </>
  );
}
