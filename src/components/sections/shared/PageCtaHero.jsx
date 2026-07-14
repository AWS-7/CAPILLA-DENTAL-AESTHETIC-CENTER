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
    <section className="relative min-h-[44vh] sm:min-h-[52vh] md:min-h-[58vh] w-full max-w-[100vw] overflow-hidden bg-dark-bg">
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
      <div className="relative z-10 container-premium flex min-h-[44vh] sm:min-h-[52vh] md:min-h-[58vh] flex-col justify-end pb-10 sm:pb-12 md:pb-16 pt-[calc(var(--header-height)+1.5rem)] sm:pt-32 md:pt-40">
        <motion.div variants={slideInLeft} initial="hidden" animate="visible" className="max-w-3xl w-full">
          <p className="mb-3 sm:mb-4 text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] sm:tracking-[0.22em] text-gold break-safe">
            {eyebrow}
          </p>
          <h1 className="font-display text-[1.75rem] leading-tight sm:text-4xl md:text-display-md text-primary-white break-safe">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 sm:mt-5 max-w-2xl text-base md:text-lg font-light text-primary-white/65 break-safe">
              {subtitle}
            </p>
          )}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <PrimaryButton to="/contact" variant="gold" size="lg" className="w-full sm:w-auto">
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
            {showCall && (
              <SecondaryButton
                href={clinicInfo.phoneHref}
                variant="light"
                size="md"
                className="w-full sm:w-auto"
              >
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
