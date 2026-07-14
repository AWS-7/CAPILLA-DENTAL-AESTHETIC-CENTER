import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function About() {
  return (
    <PagePlaceholder
      title="About Us"
      subtitle="A boutique medical sanctuary dedicated to precision aesthetics and compassionate care."
      path="/about"
      backgroundImage={placeholders.clinicInterior}
    />
  );
}
