import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import {
  Container,
  PrimaryButton,
  SecondaryButton,
} from '../common';
import { clinicInfo } from '../../data/clinic';
import { fadeUp } from '../../utils/animations';

export default function AppointmentCTA() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl md:rounded-4xl bg-dark-bg px-5 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 text-center"
        >
          <div className="absolute inset-0 bg-gold-gradient opacity-[0.12] pointer-events-none" />
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold mb-4">
              Private Consultation
            </p>
            <h2 className="font-display text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-[3.5rem] text-primary-white break-safe">
              Book Your Consultation Today
            </h2>
            <p className="mt-4 sm:mt-5 text-base md:text-lg font-light text-primary-white/60 leading-relaxed">
              Begin your transformation with a specialist consultation at Capilla —
              the premium dental, skin & hair clinic in Perumbakkam.
            </p>
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <PrimaryButton to="/contact" variant="gold" size="lg" className="w-full sm:w-auto">
                <Calendar size={18} />
                Book Appointment
              </PrimaryButton>
              <SecondaryButton
                href={clinicInfo.whatsappHref}
                external
                variant="light"
                size="lg"
                className="w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                WhatsApp
              </SecondaryButton>
              <SecondaryButton
                href={clinicInfo.phoneHref}
                variant="light"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone size={18} />
                Call Now
              </SecondaryButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
