import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function Gallery() {
  return (
    <PagePlaceholder
      title="Gallery"
      subtitle="A glimpse into our clinic spaces and transformative results."
      path="/gallery"
      backgroundImage={placeholders.gallery}
    />
  );
}
