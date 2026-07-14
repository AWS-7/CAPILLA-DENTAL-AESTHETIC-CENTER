import PagePlaceholder from '../components/common/PagePlaceholder';
import { placeholders } from '../data/content';

export default function Reviews() {
  return (
    <PagePlaceholder
      title="Google Reviews"
      subtitle="Trusted by patients who value discretion, comfort, and results."
      path="/reviews"
      backgroundImage={placeholders.clinic}
    />
  );
}
