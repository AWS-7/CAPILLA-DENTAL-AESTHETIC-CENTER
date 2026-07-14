import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function Blog() {
  return (
    <PagePlaceholder
      title="Blog & Insights"
      subtitle="Expert guidance on dental health, skin rejuvenation, and hair restoration."
      path="/blog"
      backgroundImage={placeholders.blog}
    />
  );
}
