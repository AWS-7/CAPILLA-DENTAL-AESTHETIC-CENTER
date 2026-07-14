import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function Dental() {
  return (
    <PagePlaceholder
      title="Dental Treatments"
      subtitle="Advanced dentistry for healthier teeth and timeless smiles."
      path="/dental"
      backgroundImage={placeholders.dental}
    />
  );
}
