import { SEO } from '../components/common';
import PageCtaHero from '../components/sections/shared/PageCtaHero';
import ContactContent from '../components/sections/contact/ContactContent';
import DentalFAQ from '../components/sections/dental/DentalFAQ';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { contactSeo, contactHero, contactFaqs } from '../data/contactPage';
import { placeholders } from '../data/content';

export default function Contact() {
  return (
    <>
      <SEO
        title={contactSeo.title}
        description={contactSeo.description}
        canonical={contactSeo.canonical}
        image={placeholders.clinicInterior}
      >
        <meta name="keywords" content={contactSeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </SEO>

      <PageCtaHero
        title={contactHero.title}
        subtitle={contactHero.subtitle}
        image={placeholders.clinicInterior}
        eyebrow="Appointments"
        showCall
      />
      <ContactContent />
      <DentalFAQ
        faqs={contactFaqs}
        title="Frequently Asked Questions"
        description="Quick answers before you book your Capilla consultation."
        dark
      />
      <PageConsultCTA
        title="Prefer Instant Booking Help?"
        description="WhatsApp or call Capilla now — our concierge team will confirm the soonest specialist slot."
        className="bg-primary-white"
      />
    </>
  );
}
