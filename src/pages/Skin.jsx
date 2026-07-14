import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function Skin() {
  return (
    <PagePlaceholder
      title="Skin Treatments"
      subtitle="Medical-grade facial therapies for luminous, refined skin."
      path="/skin"
      backgroundImage={placeholders.skin}
    />
  );
}
