import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function Offers() {
  return (
    <PagePlaceholder
      title="Exclusive Offers"
      subtitle="Curated packages for new patients and signature treatments."
      path="/offers"
      backgroundImage={placeholders.offer}
    />
  );
}
