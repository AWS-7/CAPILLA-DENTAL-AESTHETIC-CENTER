import {
  SEO,
  PageHero,
  Breadcrumb,
} from '../components/common';
import AboutWhoWeAre from '../components/sections/about/AboutWhoWeAre';
import AboutMissionVision from '../components/sections/about/AboutMissionVision';
import AboutTrust from '../components/sections/about/AboutTrust';
import AboutFacilities from '../components/sections/about/AboutFacilities';
import AboutPhilosophy from '../components/sections/about/AboutPhilosophy';
import AboutAchievements from '../components/sections/about/AboutAchievements';
import AboutGalleryPreview from '../components/sections/about/AboutGalleryPreview';
import AboutLocations from '../components/sections/about/AboutLocations';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { aboutSeo, aboutIntro } from '../data/about';
import { placeholders } from '../data/content';

export default function About() {
  return (
    <>
      <SEO
        title={aboutSeo.title}
        description={aboutSeo.description}
        canonical={aboutSeo.canonical}
        image={placeholders.clinicInterior}
      >
        <meta name="keywords" content={aboutSeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </SEO>

      <PageHero
        title={aboutIntro.headline}
        subtitle={aboutIntro.subtitle}
        backgroundImage={placeholders.clinicInterior}
        breadcrumb={<Breadcrumb items={[{ label: 'About Us' }]} />}
      />

      <AboutLocations />
      <AboutWhoWeAre />
      <AboutMissionVision />
      <AboutTrust />
      <AboutFacilities />
      <AboutPhilosophy />
      <AboutAchievements />
      <AboutGalleryPreview />
      <PageConsultCTA
        title="Book Your Consultation Today"
        description="Experience Capilla — the premium dental, skin & hair clinic in Perumbakkam trusted for advanced care and personalised consultations."
      />
    </>
  );
}
