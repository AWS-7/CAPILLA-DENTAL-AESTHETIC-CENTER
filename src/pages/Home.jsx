import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/common';
import {
  HeroBanner,
  WhyChoose,
  TreatmentCategories,
  FeaturedTreatments,
  DoctorsPreview,
  BeforeAfterPreview,
  GoogleReviewsSection,
  TestimonialsSlider,
  LatestOffers,
  BlogPreview,
  AppointmentCTA,
  LocationSection,
  FooterCTA,
} from '../components/sections';
import {
  homeSeo,
  featuredDental,
  featuredSkin,
  featuredHair,
} from '../data/home';
import { placeholders } from '../data/content';

export default function Home() {
  return (
    <>
      <SEO
        title={homeSeo.title}
        description={homeSeo.description}
        canonical={homeSeo.canonical}
        image={placeholders.clinic}
      />
      <Helmet>
        <meta name="keywords" content={homeSeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </Helmet>

      <HeroBanner />
      <WhyChoose />
      <TreatmentCategories />
      <FeaturedTreatments
        eyebrow="Dental Care"
        title="Featured Dental Treatments"
        description="Advanced dentistry in Perumbakkam — implants, smile design, whitening, and orthodontics with lasting precision."
        items={featuredDental}
        viewAllTo="/dental"
      />
      <FeaturedTreatments
        eyebrow="Skin Care"
        title="Featured Skin Treatments"
        description="Medical-grade facials and peels for luminous, refined skin — including Hydrafacial in Chennai."
        items={featuredSkin}
        viewAllTo="/skin"
        tone="dark"
      />
      <FeaturedTreatments
        eyebrow="Hair Care"
        title="Featured Hair Treatments"
        description="PRP, GFC, transplant, and regrowth therapies for denser, healthier hair."
        items={featuredHair}
        viewAllTo="/hair"
        tone="light"
      />
      <DoctorsPreview />
      <BeforeAfterPreview />
      <GoogleReviewsSection />
      <TestimonialsSlider />
      <LatestOffers />
      <BlogPreview />
      <AppointmentCTA />
      <LocationSection />
      <FooterCTA />
    </>
  );
}
