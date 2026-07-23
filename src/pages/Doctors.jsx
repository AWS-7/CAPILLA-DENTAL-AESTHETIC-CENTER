import {
  SEO,
  PageHero,
  Breadcrumb,
} from '../components/common';
import DoctorsListing from '../components/sections/doctors/DoctorsListing';
import DoctorsExpandedProfiles from '../components/sections/doctors/DoctorsExpandedProfiles';
import DoctorsWhyChoose from '../components/sections/doctors/DoctorsWhyChoose';
import DoctorsConsultationProcess from '../components/sections/doctors/DoctorsConsultationProcess';
import DoctorsTestimonials from '../components/sections/doctors/DoctorsTestimonials';
import DoctorsFAQ from '../components/sections/doctors/DoctorsFAQ';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { doctorsSeo, doctorsPageIntro } from '../data/doctorsPage';
import { placeholders } from '../data/content';

export default function Doctors() {
  return (
    <>
      <SEO
        title={doctorsSeo.title}
        description={doctorsSeo.description}
        canonical={doctorsSeo.canonical}
        image={placeholders.doctor}
      >
        <meta name="keywords" content={doctorsSeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </SEO>

      <PageHero
        title={doctorsPageIntro.title}
        subtitle={doctorsPageIntro.subtitle}
        backgroundImage={placeholders.doctor}
        breadcrumb={<Breadcrumb items={[{ label: 'Meet Doctors' }]} />}
      />

      <DoctorsListing />
      <DoctorsExpandedProfiles />
      <DoctorsWhyChoose />
      <DoctorsConsultationProcess />
      <DoctorsTestimonials />
      <DoctorsFAQ />
      <PageConsultCTA
        title="Book Your Appointment Today"
        description="Consult Capilla’s certified doctors for dental, skin, or hair care — book online, WhatsApp, or call now."
        className="bg-primary-white"
      />
    </>
  );
}
