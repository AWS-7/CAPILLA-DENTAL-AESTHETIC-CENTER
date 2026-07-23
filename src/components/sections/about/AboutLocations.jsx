import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Navigation } from 'lucide-react';
import { Container, SectionTitle, PrimaryButton, SecondaryButton } from '../../common';
import { clinicInfo } from '../../../data/clinic';
import { staggerContainer, staggerItem } from '../../../utils/animations';

const aboutLocations = clinicInfo.locations.slice(0, 2).map((location) => ({
  ...location,
  branchName: clinicInfo.name,
  email: clinicInfo.email,
  emailHref: clinicInfo.emailHref,
  timings: ['Monday - Saturday', '09:00 AM - 08:00 PM'],
  directionsLink: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.full)}`,
}));

export default function AboutLocations() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Our Locations"
          title="Visit Our Clinics"
          description="Discover both Capilla locations and choose the branch most convenient for your consultation."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {aboutLocations.map((location) => (
            <motion.article
              key={location.id}
              variants={staggerItem}
              className="group flex h-full flex-col rounded-3xl border border-border bg-primary-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-premium md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <MapPin size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {location.label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-dark-bg">
                    {location.branchName}
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-dark-bg/75">{location.full}</p>
                </div>

                <div className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                  <a
                    href={location.phoneHref}
                    className="text-sm font-medium text-dark-bg/80 transition-colors hover:text-gold"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                  <a
                    href={location.emailHref}
                    className="text-sm font-medium text-dark-bg/80 transition-colors hover:text-gold"
                  >
                    {location.email}
                  </a>
                </div>

                <div className="flex gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-gold" />
                  <div className="text-sm text-dark-bg/75">
                    <p className="font-medium text-dark-bg/85">{location.timings[0]}</p>
                    <p>{location.timings[1]}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-1 flex-col justify-end gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <PrimaryButton
                  href={location.mapsLink}
                  external
                  variant="gold"
                  className="w-full sm:w-auto"
                >
                  View on Google Maps
                  <ArrowUpRight size={16} />
                </PrimaryButton>
                <SecondaryButton
                  href={location.directionsLink}
                  external
                  variant="default"
                  className="w-full sm:w-auto"
                >
                  <Navigation size={16} />
                  Get Directions
                </SecondaryButton>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
