import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../common';
import { clinicInfo } from '../../../data/clinic';
import { dentalHero } from '../../../data/dental';
import { slideInLeft, fadeUp } from '../../../utils/animations';

export default function DentalHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[78vh] w-full overflow-hidden bg-dark-bg">
      <div className="absolute inset-0">
        <img
          src={dentalHero.image}
          alt="Advanced dental treatments at Capilla Perumbakkam"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/85 to-primary-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(200,164,93,0.2),transparent_50%)]" />
      </div>

      <div className="relative z-10 container-premium flex min-h-[70vh] md:min-h-[78vh] flex-col justify-end pb-14 md:pb-20 pt-32 md:pt-40">
        <motion.div variants={slideInLeft} initial="hidden" animate="visible" className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            <Sparkles size={14} />
            Dental Clinic in Perumbakkam
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-display-md lg:text-display-lg text-primary-white">
            {dentalHero.title}
          </h1>
          <div className="mt-5 space-y-1 font-display text-2xl sm:text-3xl text-primary-white/90">
            {dentalHero.lines.map((line) => (
              <p key={line} className={line.includes('Confident') ? 'text-gold-light' : undefined}>
                {line}
              </p>
            ))}
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base md:text-lg font-light text-primary-white/65"
          >
            {dentalHero.subtitle}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <PrimaryButton to="/contact" variant="gold" size="lg">
              Book Appointment
            </PrimaryButton>
            <SecondaryButton href={clinicInfo.whatsappHref} external variant="light" size="lg">
              <MessageCircle size={18} />
              WhatsApp Consultation
            </SecondaryButton>
            <SecondaryButton href={clinicInfo.phoneHref} variant="light" size="md">
              <Phone size={16} />
              Call Now
            </SecondaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
