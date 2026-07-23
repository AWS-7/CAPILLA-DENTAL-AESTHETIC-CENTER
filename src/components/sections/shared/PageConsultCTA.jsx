import { motion } from 'framer-motion';
import { Container, GlobalCTA } from '../../common';
import { fadeUp } from '../../../utils/animations';
import { cn } from '../../../utils/helpers';

/**
 * Shared Book / WhatsApp / Call CTA for inner pages (About, Doctors, etc.)
 * Does not modify Home page AppointmentCTA.
 */
export default function PageConsultCTA({
  title = 'Book Your Consultation Today',
  description = 'Speak with our specialists at Capilla Dental & Aesthetic Center in Perumbakkam and take the first step toward lasting results.',
  className = '',
}) {
  return (
    <section className={cn('section-padding bg-light-bg', className)}>
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl md:rounded-4xl bg-dark-bg px-8 py-14 md:px-16 md:py-20 text-center"
        >
          <div className="absolute inset-0 bg-gold-gradient opacity-[0.12] pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-white">
              {title}
            </h2>
            {description && (
              <p className="mt-5 text-base md:text-lg font-light text-primary-white/60 leading-relaxed">
                {description}
              </p>
            )}
            <div className="mt-9 flex w-full items-center justify-center">
              <GlobalCTA />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
