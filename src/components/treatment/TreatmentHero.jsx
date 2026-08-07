import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../common';
import { fadeUp } from '../../utils/animations';

export default function TreatmentHero({
  image,
  title,
  description,
  category,
  onBookAppointment,
  onContactUs,
}) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden bg-dark-bg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[60vh] md:min-h-[70vh] items-center px-5 py-12 md:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Category Badge */}
            {category && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-2"
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  {category}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-white leading-tight"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-base md:text-lg font-light text-primary-white/80 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <PrimaryButton
                onClick={onBookAppointment}
                className="flex items-center gap-2"
              >
                Book Appointment
                <ArrowRight size={18} />
              </PrimaryButton>
              <SecondaryButton
                onClick={onContactUs}
                className="flex items-center gap-2 bg-primary-white/10 border-primary-white/20 text-primary-white hover:bg-primary-white/20"
              >
                <Phone size={18} />
                Contact Us
              </SecondaryButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
