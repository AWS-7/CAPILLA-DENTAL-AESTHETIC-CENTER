import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function Hair() {
  return (
    <PagePlaceholder
      title="Hair Treatments"
      subtitle="Restorative hair therapies designed for denser, healthier growth."
      path="/hair"
      backgroundImage={placeholders.hair}
    />
  );
}
