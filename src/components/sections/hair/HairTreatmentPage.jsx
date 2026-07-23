import { SEO, PageHero, Breadcrumb } from '../../common';
import PageConsultCTA from '../shared/PageConsultCTA';
import DentalBeforeAfter from '../dental/DentalBeforeAfter';
import DentalFAQ from '../dental/DentalFAQ';
import HairRelatedTreatments from './HairRelatedTreatments';
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
 * Composes a full premium hair treatment SEO page from data.
 */
export default function HairTreatmentPage({ data }) {
  if (!data) return null;

  return (
    <>
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        canonical={data.seo.canonical}
        image={data.image || placeholders.hair}
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
              { label: 'Hair Treatments', path: '/hair' },
              { label: data.breadcrumb || data.title },
            ]}
          />
        }
      />

      <TreatmentOverview title={`${data.title} Overview`} paragraphs={data.overview} image={data.image} />

      {data.causes?.length > 0 && (
        <TreatmentListSection
          eyebrow="Understanding"
          title="Causes of Hair Loss"
          description="Common drivers we evaluate before recommending treatment."
          items={data.causes}
        />
      )}

      {data.diagnosisSteps?.length > 0 && (
        <TreatmentListSection
          eyebrow="Clarity"
          title="Diagnosis"
          description="How we identify the right pathway for your hair concerns."
          items={data.diagnosisSteps}
          dark
        />
      )}

      {data.howItWorks?.length > 0 && (
        <TreatmentListSection
          eyebrow="Science"
          title={data.howItWorksTitle || 'How It Works'}
          description="A clear look at the clinical steps behind this therapy."
          items={data.howItWorks}
          dark={!data.causes}
        />
      )}

      {data.fueTechnique?.length > 0 && (
        <TreatmentListSection
          eyebrow="Technique"
          title="FUE Technique"
          description="Precision follicle extraction and natural implantation principles."
          items={data.fueTechnique}
        />
      )}

      {data.treatmentOptions?.length > 0 && (
        <TreatmentListSection
          eyebrow="Approaches"
          title="Treatment Options"
          description="Modalities we may combine into your personalised hair plan."
          items={data.treatmentOptions}
          dark
        />
      )}

      {data.digitalAnalysis?.length > 0 && (
        <TreatmentListSection
          eyebrow="Assessment"
          title="Digital Hair Analysis"
          description="What we review to recommend the most effective next step."
          items={data.digitalAnalysis}
        />
      )}

      {data.scalpHealthCheck?.length > 0 && (
        <TreatmentListSection
          eyebrow="Scalp"
          title="Scalp Health Check"
          description="Barrier, flaking, and follicle-relevant findings that guide care."
          items={data.scalpHealthCheck}
          dark
        />
      )}

      {data.treatmentRecommendations?.length > 0 && (
        <TreatmentListSection
          eyebrow="Next Steps"
          title="Treatment Recommendations"
          description="Pathways typically discussed after your analysis consultation."
          items={data.treatmentRecommendations}
        />
      )}

      {data.hairGrowthCycle?.length > 0 && (
        <TreatmentListSection
          eyebrow="Biology"
          title="Hair Growth Cycle"
          description="Understanding growth phases helps set realistic timelines."
          items={data.hairGrowthCycle}
        />
      )}

      {data.lifestyleAdvice?.length > 0 && (
        <TreatmentListSection
          eyebrow="Daily Habits"
          title="Lifestyle Advice"
          description="Supportive practices that protect treatment outcomes."
          items={data.lifestyleAdvice}
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

      <TreatmentProcedure
        steps={data.procedure}
        title={data.slug === 'hair-transplant' ? 'Treatment Process' : 'Treatment Procedure'}
      />

      {data.recoveryTimeline && (
        <TreatmentTextSection
          eyebrow="Timeline"
          title="Recovery Timeline"
          text={data.recoveryTimeline}
          dark
        />
      )}

      {data.recovery && (
        <TreatmentTextSection eyebrow="Healing" title="Recovery" text={data.recovery} />
      )}

      {data.expectedResults && (
        <TreatmentTextSection
          eyebrow="Outcomes"
          title="Expected Results"
          text={data.expectedResults}
          dark={!data.recoveryTimeline}
        />
      )}

      {data.afterCare && (
        <TreatmentTextSection
          eyebrow="Support"
          title="Recovery & After Care"
          text={data.afterCare}
        />
      )}

      <TreatmentFeatureGrid
        eyebrow="Trust"
        title="Why Choose Capilla"
        description="Specialist hair care for patients across Perumbakkam, Medavakkam, and Sholinganallur."
        items={data.whyCapilla}
        dark
      />

      <TreatmentFeatureGrid
        eyebrow="Technology"
        title="Modern Equipment"
        description="Advanced systems that support precise diagnosis and restoration."
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

      <HairRelatedTreatments slugs={data.related} />

      <PageConsultCTA
        title="Book Your Appointment Today"
        description={`Consult our hair specialists about ${data.title.toLowerCase()} at Capilla Dental & Aesthetic Center in Perumbakkam.`}
      />
    </>
  );
}
