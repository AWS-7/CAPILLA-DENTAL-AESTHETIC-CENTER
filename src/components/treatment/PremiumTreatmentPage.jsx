import { SEO } from '../common';
import {
  TreatmentHero,
  ConcernCard,
  BenefitsCard,
  TreatmentJourney,
  RelatedTreatmentSlider,
  ServiceCategorySelector,
  AppointmentSupport,
  StickyBottomCTA,
} from './index';
import PremiumTreatmentFAQ from './PremiumTreatmentFAQ';
import { useNavigate } from 'react-router-dom';
import { dentalTreatmentsList } from '../../data/dental';
import { hairTreatmentsList } from '../../data/hair';
import { skinTreatmentsList } from '../../data/skin';

export default function PremiumTreatmentPage({ data, category = 'dental' }) {
  const navigate = useNavigate();

  if (!data) return null;

  // Map concerns based on data structure
  const concerns = data.symptoms || data.causes || data.whoNeeds || [];

  // Map journey steps from procedure or treatmentSteps
  const journeySteps = data.procedure?.map((step, index) => ({
    title: step.title,
    description: step.text,
  })) || data.treatmentSteps?.map((step) => ({
    title: typeof step === 'string' ? step : step.title,
    description: typeof step === 'string' ? '' : step.text || step.description,
  })) || [];

  // Map FAQs
  const faqs = data.faqs?.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  })) || [];

  // Get related treatments
  const getRelatedTreatments = () => {
    let allTreatments = [];
    if (category === 'dental') {
      allTreatments = dentalTreatmentsList;
    } else if (category === 'hair') {
      allTreatments = hairTreatmentsList;
    } else if (category === 'skin') {
      allTreatments = skinTreatmentsList;
    }

    // Filter out current treatment and get related ones
    return allTreatments
      .filter(t => t.id !== data.slug && t.id !== data.id)
      .slice(0, 8)
      .map(t => ({
        image: t.image,
        title: t.title,
        description: t.description,
        category: category.charAt(0).toUpperCase() + category.slice(1),
        path: t.path,
      }));
  };

  // Service categories
  const serviceCategories = [
    { id: 'dental', name: 'Dental Treatments', path: '/dental' },
    { id: 'hair', name: 'Hair Treatments', path: '/hair' },
    { id: 'skin', name: 'Skin Treatments', path: '/skin' },
    { id: 'cosmetic', name: 'Cosmetic Dentistry', path: '/dental' },
    { id: 'laser', name: 'Laser Treatments', path: '/skin' },
    { id: 'restoration', name: 'Hair Restoration', path: '/hair' },
    { id: 'rejuvenation', name: 'Skin Rejuvenation', path: '/skin' },
  ];

  const handleBookAppointment = () => {
    navigate('/contact');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <>
      <SEO
        title={data.seo?.title || data.title}
        description={data.seo?.description || data.heroSubtitle}
        canonical={data.seo?.canonical}
        image={data.image}
      >
        <meta name="keywords" content={data.seo?.keywords} />
        <meta property="og:locale" content="en_IN" />
      </SEO>

      {/* 1. Hero Banner */}
      <TreatmentHero
        image={data.image}
        title={data.heroTitle || data.title}
        description={data.heroSubtitle || data.description}
        category={category.charAt(0).toUpperCase() + category.slice(1) + ' Treatments'}
        onBookAppointment={handleBookAppointment}
        onContactUs={handleContactUs}
      />

      {/* 2. Common Concerns Addressed */}
      {concerns.length > 0 && (
        <ConcernCard
          title="Common Concerns Addressed"
          concerns={concerns}
        />
      )}

      {/* 3. Key Benefits */}
      {data.benefits && data.benefits.length > 0 && (
        <BenefitsCard
          title="Key Benefits"
          benefits={data.benefits}
        />
      )}

      {/* 4. Treatment Journey */}
      {journeySteps.length > 0 && (
        <TreatmentJourney
          title="Treatment Journey"
          steps={journeySteps}
        />
      )}

      {/* 5. Premium Treatment FAQ */}
      {faqs.length > 0 && (
        <PremiumTreatmentFAQ
          title={`${data.title} FAQs`}
          description={`Everything you need to know about ${data.title} before booking.`}
          faqs={faqs}
          category={category}
        />
      )}

      {/* 6. Related Treatments */}
      <RelatedTreatmentSlider
        title="Related Treatments"
        treatments={getRelatedTreatments()}
      />

      {/* 7. Service Category */}
      <ServiceCategorySelector
        currentCategory={category}
        categories={serviceCategories}
      />

      {/* 8. Appointment Support */}
      <AppointmentSupport />

      {/* 9. Sticky Bottom CTA */}
      <StickyBottomCTA
        onContactUs={handleContactUs}
        onBookAppointment={handleBookAppointment}
      />
    </>
  );
}
