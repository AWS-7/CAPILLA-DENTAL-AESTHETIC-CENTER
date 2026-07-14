import { useParams } from 'react-router-dom';
import PagePlaceholder from '../../components/common/PagePlaceholder';
import { treatments, placeholders } from '../../data/content';

export default function TreatmentDetail() {
  const { slug } = useParams();
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
