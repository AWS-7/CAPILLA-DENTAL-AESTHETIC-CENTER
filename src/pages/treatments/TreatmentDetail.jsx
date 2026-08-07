import { useParams } from 'react-router-dom';
import PagePlaceholder from '../../components/common/PagePlaceholder';
import PremiumTreatmentPage from '../../components/treatment/PremiumTreatmentPage';
import { getDentalTreatment } from '../../data/dental';
import { getSkinTreatment } from '../../data/skin';
import { getHairTreatment } from '../../data/hair';
import { treatments, placeholders } from '../../data/content';

/**
 * Renders full dental/skin/hair SEO pages for known treatment slugs using the new premium mobile UI design.
 * Remaining modules keep the placeholder until built.
 */
export default function TreatmentDetail() {
  const { slug } = useParams();

  const dentalPage = getDentalTreatment(slug);
  if (dentalPage) {
    return <PremiumTreatmentPage data={dentalPage} category="dental" />;
  }

  const skinPage = getSkinTreatment(slug);
  if (skinPage) {
    return <PremiumTreatmentPage data={skinPage} category="skin" />;
  }

  const hairPage = getHairTreatment(slug);
  if (hairPage) {
    return <PremiumTreatmentPage data={hairPage} category="hair" />;
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
