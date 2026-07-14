import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function Home() {
  return (
    <PagePlaceholder
      title="Capilla Dental & Aesthetic Center"
      subtitle="Where science meets aesthetic excellence — dental, skin, and hair care redefined."
      path="/"
      backgroundImage={placeholders.clinic}
    />
  );
}
