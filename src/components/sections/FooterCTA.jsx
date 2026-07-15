import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container, PrimaryButton } from '../common';
import { fadeUp } from '../../utils/animations';

export default function FooterCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-bg max-w-[100vw]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,164,93,0.18),transparent_60%)]" />
      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold md:text-sm">
            Capilla Dental & Aesthetic Center
          </p>
          <h2 className="font-display text-[1.75rem] leading-tight text-primary-white sm:text-4xl md:text-display-md lg:text-[3.25rem] break-safe">
            Book Your Appointment Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-primary-white/55 sm:mt-5 md:text-lg">
            Your smile, skin, and confidence deserve a clinical experience designed
            around luxury, trust, and lasting results.
          </p>
          <div className="mt-8 flex w-full justify-center sm:mt-9">
            <PrimaryButton
              to="/contact"
              variant="gold"
              size="lg"
              className="w-full max-w-[320px] sm:w-auto"
            >
              Book Appointment
              <ArrowRight size={18} />
            </PrimaryButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
