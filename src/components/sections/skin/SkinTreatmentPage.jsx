import { SEO, PageHero, Breadcrumb } from '../../common';
import PageConsultCTA from '../shared/PageConsultCTA';
import DentalBeforeAfter from '../dental/DentalBeforeAfter';
import DentalFAQ from '../dental/DentalFAQ';
import SkinRelatedTreatments from './SkinRelatedTreatments';
import {
  TreatmentOverview,
  TreatmentBenefits,
  TreatmentListSection,
  TreatmentProcedure,
  TreatmentTextSection,
  TreatmentFeatureGrid,
} from '../dental/TreatmentSections';
import { placeholders } from '../../../data/content';

/**
 * Composes a full premium skin treatment SEO page from data.
 * Reuses dental section primitives without modifying them.
 */
export default function SkinTreatmentPage({ data }) {
  if (!data) return null;

  return (
    <>
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        canonical={data.seo.canonical}
        image={data.image || placeholders.skin}
      >
        <meta name="keywords" content={data.seo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </SEO>

      <PageHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        backgroundImage={data.image}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Skin Treatments', path: '/skin' },
              { label: data.breadcrumb || data.title },
            ]}
          />
        }
      />

      <TreatmentOverview title={`${data.title} Overview`} paragraphs={data.overview} image={data.image} />

      {data.causes?.length > 0 && (
        <TreatmentListSection
          eyebrow="Understanding"
          title="Causes"
          description="Common factors that contribute to this skin concern."
          items={data.causes}
        />
      )}

      {data.howItWorks?.length > 0 && (
        <TreatmentListSection
          eyebrow="Science"
          title="How Hydrafacial Works"
          description="A multi-step hydradermabrasion process designed for deep cleanse and glow."
          items={data.howItWorks}
          dark
        />
      )}

      {data.peelTypes?.length > 0 && (
        <TreatmentListSection
          eyebrow="Options"
          title="Types of Chemical Peel"
          description="Peel depths selected after analysis for safety and results."
          items={data.peelTypes}
        />
      )}

      {data.treatmentOptions?.length > 0 && (
        <TreatmentListSection
          eyebrow="Approaches"
          title="Treatment Options"
          description="Modalities we may combine into your personalised skin plan."
          items={data.treatmentOptions}
          dark
        />
      )}

      <TreatmentBenefits benefits={data.benefits} title={`Benefits of ${data.title}`} />

      {data.whoNeeds?.length > 0 && (
        <TreatmentListSection
          eyebrow="Eligibility"
          title="Who Is Eligible"
          description="Ideal candidates and situations where this treatment delivers strong outcomes."
          items={data.whoNeeds}
        />
      )}

      {data.skinCareRoutine?.length > 0 && (
        <TreatmentListSection
          eyebrow="At Home"
          title="Skin Care Routine"
          description="Daily habits that protect and extend your in-clinic results."
          items={data.skinCareRoutine}
          dark
        />
      )}

      <TreatmentProcedure steps={data.procedure} />

      {data.suitableCandidates && (
        <TreatmentTextSection
          eyebrow="Candidates"
          title="Suitable Candidates"
          text={data.suitableCandidates}
        />
      )}

      {data.expectedResults && (
        <TreatmentTextSection
          eyebrow="Outcomes"
          title="Expected Results"
          text={data.expectedResults}
          dark
        />
      )}

      {data.recovery && (
        <TreatmentTextSection eyebrow="Healing" title="Recovery" text={data.recovery} />
      )}

      {data.afterCare && (
        <TreatmentTextSection
          eyebrow="Support"
          title="After Care"
          text={data.afterCare}
          dark={!data.recovery}
        />
      )}

      <TreatmentFeatureGrid
        eyebrow="Trust"
        title="Why Choose Capilla"
        description="Medical aesthetics with luxury comfort for patients across Perumbakkam, Medavakkam, and Sholinganallur."
        items={data.whyCapilla}
        dark
      />

      <TreatmentFeatureGrid
        eyebrow="Technology"
        title="Modern Equipment"
        description="Advanced systems that support precise, comfortable aesthetic care."
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

      <SkinRelatedTreatments slugs={data.related} />

      <PageConsultCTA
        title="Book Your Appointment Today"
        description={`Consult our skin specialists about ${data.title.toLowerCase()} at Capilla Dental & Aesthetic Center in Perumbakkam.`}
      />
    </>
  );
}
