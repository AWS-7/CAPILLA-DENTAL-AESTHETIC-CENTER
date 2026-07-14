import { useParams } from 'react-router-dom';
import PagePlaceholder from '../../components/common/PagePlaceholder';
import DentalTreatmentPage from '../../components/sections/dental/DentalTreatmentPage';
import SkinTreatmentPage from '../../components/sections/skin/SkinTreatmentPage';
import HairTreatmentPage from '../../components/sections/hair/HairTreatmentPage';
import { getDentalTreatment } from '../../data/dental';
import { getSkinTreatment } from '../../data/skin';
import { getHairTreatment } from '../../data/hair';
import { treatments, placeholders } from '../../data/content';

/**
 * Renders full dental/skin/hair SEO pages for known treatment slugs.
 * Remaining modules keep the placeholder until built.
 */
export default function TreatmentDetail() {
  const { slug } = useParams();

  const dentalPage = getDentalTreatment(slug);
  if (dentalPage) {
    return <DentalTreatmentPage data={dentalPage} />;
  }

  const skinPage = getSkinTreatment(slug);
  if (skinPage) {
    return <SkinTreatmentPage data={skinPage} />;
  }

  const hairPage = getHairTreatment(slug);
  if (hairPage) {
    return <HairTreatmentPage data={hairPage} />;
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
