import { useParams } from 'react-router-dom';
import PagePlaceholder from '../../components/common/PagePlaceholder';
import DentalTreatmentPage from '../../components/sections/dental/DentalTreatmentPage';
import { getDentalTreatment } from '../../data/dental';
import { treatments, placeholders } from '../../data/content';

/**
 * Renders full dental SEO pages for dental treatment slugs.
 * Other treatment modules keep the placeholder until built.
 */
export default function TreatmentDetail() {
  const { slug } = useParams();
  const dentalPage = getDentalTreatment(slug);

  if (dentalPage) {
    return <DentalTreatmentPage data={dentalPage} />;
  }

  const treatment = treatments.find((t) => t.slug === slug);

  return (
    <PagePlaceholder
      title={treatment?.title || 'Treatment'}
      subtitle={
        treatment?.description ||
        'Premium clinical treatment delivered with precision and care.'
      }
      path={`/treatments/${slug}`}
      backgroundImage={treatment?.image || placeholders.treatment}
    />
  );
}
