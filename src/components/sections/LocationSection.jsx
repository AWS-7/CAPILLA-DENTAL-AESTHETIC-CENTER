import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Container, SectionTitle, PrimaryButton } from '../common';
import { clinicInfo } from '../../data/clinic';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function LocationSection() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Visit Us"
          title="Our Clinic Locations"
          description="Two premium branches — Perumbakkam (Chennai) and Salem — for the best dental, skin, and hair care near you."
        />

        {/* Location cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {clinicInfo.locations.map((loc) => (
            <motion.div
              key={loc.id}
              variants={staggerItem}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-primary-white shadow-soft"
            >
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-border">
                <iframe
                  title={`Capilla Dental & Aesthetic Center — ${loc.label}`}
                  src={loc.mapsEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                  <MapPin size={13} />
                  {loc.label}
                </span>
                <p className="mt-4 text-sm font-light leading-relaxed text-dark-bg/75">
                  {loc.full}
                </p>
                {loc.phone && (
                  <a
                    href={loc.phoneHref}
                    className="mt-3 inline-flex w-fit items-center gap-2 text-sm font-medium text-dark-bg/80 transition-colors hover:text-gold"
                  >
                    <Phone size={15} className="text-gold" />
                    {loc.phone}
                  </a>
                )}
                <a
                  href={loc.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-dark"
                >
                  Get Directions
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Shared contact details */}
        <div className="mt-8 grid grid-cols-1 gap-6 rounded-3xl border border-border bg-primary-white p-6 shadow-soft md:grid-cols-2 md:p-10">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-span-2">
            <li className="flex gap-4">
              <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-dark-bg/40">
                  Phone
                </p>
                {clinicInfo.locations.map((loc) => (
                  <a
                    key={loc.id}
                    href={loc.phoneHref}
                    className="block text-sm font-light text-dark-bg/75 transition-colors hover:text-gold"
                  >
                    <span className="font-medium text-dark-bg/90">{loc.label}:</span>{' '}
                    {loc.phone}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex gap-4">
              <MessageCircle size={18} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-dark-bg/40">
                  WhatsApp
                </p>
                <a
                  href={clinicInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-dark-bg/75 transition-colors hover:text-gold"
                >
                  {clinicInfo.whatsapp}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-dark-bg/40">
                  Email
                </p>
                <a
                  href={clinicInfo.emailHref}
                  className="text-sm font-light text-dark-bg/75 transition-colors hover:text-gold"
                >
                  {clinicInfo.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock size={18} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-dark-bg/40">
                  Business Hours
                </p>
                {clinicInfo.workingHours.map((item) => (
                  <p key={item.day} className="text-sm font-light text-dark-bg/75">
                    <span className="font-medium text-dark-bg/90">{item.day}:</span>{' '}
                    {item.hours}
                  </p>
                ))}
              </div>
            </li>
          </ul>

          <div className="md:col-span-2">
            <PrimaryButton to="/contact" variant="gold" className="w-full sm:w-auto">
              Book Appointment
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
