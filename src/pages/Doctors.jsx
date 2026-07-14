import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function Doctors() {
  return (
    <PagePlaceholder
      title="Meet Our Doctors"
      subtitle="Board-certified specialists committed to exceptional clinical outcomes."
      path="/doctors"
      backgroundImage={placeholders.doctor}
    />
  );
}
