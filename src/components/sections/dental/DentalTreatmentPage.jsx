import { Helmet } from 'react-helmet-async';
import {
  SEO,
  PageHero,
  Breadcrumb,
} from '../../common';
import PageConsultCTA from '../shared/PageConsultCTA';
import DentalBeforeAfter from './DentalBeforeAfter';
import DentalFAQ from './DentalFAQ';
import RelatedTreatments from './RelatedTreatments';
import {
  TreatmentOverview,
  TreatmentBenefits,
  TreatmentListSection,
  TreatmentProcedure,
  TreatmentTextSection,
  TreatmentFeatureGrid,
} from './TreatmentSections';
import { placeholders } from '../../../data/content';

/**
 * Composes a full premium dental treatment SEO page from data.
 */
export default function DentalTreatmentPage({ data }) {
  if (!data) return null;

  return (
    <>
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        canonical={data.seo.canonical}
        image={data.image || placeholders.dental}
      />
      <Helmet>
        <meta name="keywords" content={data.seo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </Helmet>

      <PageHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        backgroundImage={data.image}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Dental Treatments', path: '/dental' },
              { label: data.breadcrumb || data.title },
            ]}
          />
        }
      />

      <TreatmentOverview title={`${data.title} Overview`} paragraphs={data.overview} image={data.image} />

      {data.symptoms?.length > 0 && (
        <TreatmentListSection
          eyebrow="Know the Signs"
          title="Symptoms"
          description="Common signs that you may need this treatment — a clinical evaluation confirms the plan."
          items={data.symptoms}
        />
      )}

      <TreatmentBenefits benefits={data.benefits} title={`Benefits of ${data.title}`} />

      {data.whoNeeds?.length > 0 && (
        <TreatmentListSection
          eyebrow="Eligibility"
          title={data.slug === 'dental-implants' ? 'Who Needs Dental Implants' : 'Who Is Eligible'}
          description="Ideal candidates and clinical situations where this treatment delivers the best outcomes."
          items={data.whoNeeds}
          dark
        />
      )}

      {data.smileAnalysis?.length > 0 && (
        <TreatmentListSection
          eyebrow="Analysis"
          title="Smile Analysis"
          description="The facial and dental factors we study before crafting your smile design."
          items={data.smileAnalysis}
        />
      )}

      {data.bracesTypes?.length > 0 && (
        <TreatmentListSection
          eyebrow="Options"
          title="Metal Braces, Ceramic Braces & Clear Aligners"
          description="Choose the orthodontic pathway that fits your lifestyle and clinical needs."
          items={data.bracesTypes}
        />
      )}

      {data.treatmentSteps?.length > 0 && (
        <TreatmentListSection
          eyebrow="Steps"
          title="Treatment Steps"
          description="A simple path from consultation to your brighter smile reveal."
          items={data.treatmentSteps}
          dark
        />
      )}

      <TreatmentProcedure steps={data.procedure} />

      {data.timeline && (
        <TreatmentTextSection
          eyebrow="Timeline"
          title="Treatment Timeline"
          text={data.timeline}
        />
      )}

      {data.recovery && (
        <TreatmentTextSection
          eyebrow="Aftercare"
          title="Recovery"
          text={data.recovery}
          dark
        />
      )}

      {data.advantages?.length > 0 && (
        <TreatmentFeatureGrid
          eyebrow="Advantages"
          title="Advantages"
          description="Why patients choose this solution for lasting dental health and confidence."
          items={data.advantages}
        />
      )}

      {data.suitableCandidates && (
        <TreatmentTextSection
          eyebrow="Candidates"
          title="Suitable Candidates"
          text={data.suitableCandidates}
        />
      )}

      <TreatmentFeatureGrid
        eyebrow="Trust"
        title="Why Choose Capilla"
        description="Clinical excellence and luxury care for patients across Perumbakkam, Medavakkam, and Sholinganallur."
        items={data.whyCapilla}
        dark
      />

      <TreatmentFeatureGrid
        eyebrow="Technology"
        title="Modern Equipment"
        description="Advanced tools that support precise diagnosis and refined treatment delivery."
        items={data.equipment}
      />

      {data.beforeAfter?.length > 0 && (
        <DentalBeforeAfter
          items={data.beforeAfter}
          title={`${data.title} Before & After`}
          description="Illustrative transformations — your personal results are planned during consultation."
          showGalleryButton
        />
      )}

      <DentalFAQ
        faqs={data.faqs}
        title={`${data.title} FAQs`}
        description="Answers to the questions patients ask most before booking this treatment."
      />

      <RelatedTreatments slugs={data.related} />

      <PageConsultCTA
        title="Book Your Appointment Today"
        description={`Consult our specialists about ${data.title.toLowerCase()} at Capilla Dental & Aesthetic Center in Perumbakkam.`}
      />
    </>
  );
}
