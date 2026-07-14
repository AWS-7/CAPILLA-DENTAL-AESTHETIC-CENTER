import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function Contact() {
  return (
    <PagePlaceholder
      title="Contact & Appointments"
      subtitle="Speak with our concierge team and reserve your private consultation."
      path="/contact"
      backgroundImage={placeholders.clinicInterior}
    />
  );
}
