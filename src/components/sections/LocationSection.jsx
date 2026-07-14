import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Container, SectionTitle, PrimaryButton } from '../common';
import { clinicInfo } from '../../data/clinic';
import { slideInLeft, slideInRight } from '../../utils/animations';

export default function LocationSection() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Visit Us"
          title="Find Capilla in Perumbakkam"
          description="Conveniently located on OMR — your destination for the best dental, skin, and hair care near you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-3xl border border-border shadow-soft aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
          >
            <iframe
              title="Capilla Dental & Aesthetic Center — Perumbakkam"
              src={clinicInfo.mapsEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center rounded-3xl border border-border bg-primary-white p-8 md:p-10 shadow-soft"
          >
            <h3 className="font-display text-2xl md:text-3xl text-primary-black">
              {clinicInfo.name}
            </h3>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-1">
                    Address
                  </p>
                  <a
                    href={clinicInfo.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-dark-bg/75 hover:text-gold transition-colors"
                  >
                    {clinicInfo.address.full}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock size={18} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-1">
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
              <li className="flex gap-4">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-1">
                    Phone
                  </p>
                  <a
                    href={clinicInfo.phoneHref}
                    className="text-sm font-light text-dark-bg/75 hover:text-gold transition-colors"
                  >
                    {clinicInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-1">
                    Email
                  </p>
                  <a
                    href={clinicInfo.emailHref}
                    className="text-sm font-light text-dark-bg/75 hover:text-gold transition-colors"
                  >
                    {clinicInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-dark-bg/40 mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={clinicInfo.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-dark-bg/75 hover:text-gold transition-colors"
                  >
                    {clinicInfo.whatsapp}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <PrimaryButton to="/contact" variant="gold">
                Book Appointment
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
