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
          className="relative overflow-hidden rounded-3xl md:rounded-4xl bg-dark-bg px-5 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20"
        >
          <div className="absolute inset-0 bg-gold-gradient opacity-[0.12] pointer-events-none" />
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold md:text-sm">
              Private Consultation
            </p>
            <h2 className="font-display text-[1.75rem] leading-tight text-primary-white sm:text-4xl md:text-display-md lg:text-[3.25rem] break-safe">
              Book Your Consultation Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-primary-white/60 sm:mt-5 md:text-lg">
              Begin your transformation with a specialist consultation at Capilla —
              the premium dental, skin & hair clinic in Perumbakkam.
            </p>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <PrimaryButton
                to="/contact"
                variant="gold"
                size="lg"
                className="w-full max-w-[320px] sm:w-auto"
              >
                <Calendar size={18} />
                Book Appointment
              </PrimaryButton>
              <SecondaryButton
                href={clinicInfo.whatsappHref}
                external
                variant="light"
                size="lg"
                className="w-full max-w-[320px] sm:w-auto"
              >
                <MessageCircle size={18} />
                WhatsApp
              </SecondaryButton>
              <SecondaryButton
                href={clinicInfo.phoneHref}
                variant="light"
                size="lg"
                className="w-full max-w-[320px] sm:w-auto"
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
