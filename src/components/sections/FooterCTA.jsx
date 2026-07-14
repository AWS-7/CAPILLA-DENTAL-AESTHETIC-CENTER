import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container, PrimaryButton } from '../common';
import { fadeUp } from '../../utils/animations';

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-dark-bg py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,164,93,0.18),transparent_60%)]" />
      <Container className="relative z-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold mb-5">
            Capilla Dental & Aesthetic Center
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-primary-white max-w-4xl mx-auto leading-[1.05]">
            Book Your Appointment Today
          </h2>
          <p className="mt-6 text-base md:text-lg font-light text-primary-white/55 max-w-xl mx-auto">
            Your smile, skin, and confidence deserve a clinical experience designed
            around luxury, trust, and lasting results.
          </p>
          <div className="mt-10">
            <PrimaryButton to="/contact" variant="gold" size="lg">
              Book Appointment
              <ArrowRight size={18} />
            </PrimaryButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
