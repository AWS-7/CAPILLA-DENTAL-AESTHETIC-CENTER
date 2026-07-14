import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../../common';
import { clinicInfo } from '../../../data/clinic';
import { slideInLeft } from '../../../utils/animations';

export default function PageCtaHero({
  title,
  subtitle,
  image,
  showCall = false,
  eyebrow = 'Capilla Dental & Aesthetic Center',
}) {
  return (
    <section className="relative min-h-[52vh] md:min-h-[58vh] w-full overflow-hidden bg-dark-bg">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/80 to-primary-black/50" />
        </div>
      )}
      <div className="relative z-10 container-premium flex min-h-[52vh] md:min-h-[58vh] flex-col justify-end pb-12 md:pb-16 pt-32 md:pt-40">
        <motion.div variants={slideInLeft} initial="hidden" animate="visible" className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-display-md text-primary-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base md:text-lg font-light text-primary-white/65">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton to="/contact" variant="gold" size="lg">
              Book Appointment
            </PrimaryButton>
            <SecondaryButton href={clinicInfo.whatsappHref} external variant="light" size="lg">
              <MessageCircle size={18} />
              WhatsApp
            </SecondaryButton>
            {showCall && (
              <SecondaryButton href={clinicInfo.phoneHref} variant="light" size="md">
                <Phone size={16} />
                Call Now
              </SecondaryButton>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
