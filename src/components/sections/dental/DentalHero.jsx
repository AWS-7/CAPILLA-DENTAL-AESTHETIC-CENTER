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

      <div className="relative z-10 container-premium flex min-h-[70vh] md:min-h-[78vh] flex-col justify-center pb-12 pt-[calc(var(--header-height)+2rem)] md:pb-16 md:pt-[calc(var(--header-height)+3rem)]">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-[640px] flex-col items-start md:max-w-[680px] lg:max-w-[45%] xl:max-w-[42%]"
        >
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            <Sparkles size={14} />
            Dental Clinic in Perumbakkam
          </p>
          <h1 className="font-display text-[1.75rem] leading-tight sm:text-4xl md:text-display-md lg:text-display-lg text-primary-white break-safe lg:whitespace-nowrap">
            {dentalHero.title}
          </h1>
          <div className="mt-5 flex flex-col gap-2 font-display text-xl leading-[1.18] sm:text-2xl md:flex-row md:flex-wrap md:items-center md:gap-4 md:text-3xl md:leading-[1.18] lg:flex-nowrap lg:gap-5 text-primary-white/90">
            {dentalHero.lines.map((line) => (
              <p
                key={line}
                className={line.includes('Confident') ? 'md:whitespace-nowrap text-gold-light' : 'md:whitespace-nowrap'}
              >
                {line}
              </p>
            ))}
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-[600px] text-base leading-[1.75] md:text-lg font-light text-primary-white/65"
          >
            {dentalHero.subtitle}
          </motion.p>
          <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            <PrimaryButton
              to="/contact"
              variant="gold"
              size="lg"
              className="w-full justify-center whitespace-nowrap"
            >
              Book Appointment
            </PrimaryButton>
            <SecondaryButton
              href={clinicInfo.whatsappHref}
              external
              variant="light"
              size="lg"
              className="w-full justify-center whitespace-nowrap"
            >
              <MessageCircle size={18} />
              WhatsApp
            </SecondaryButton>
            <SecondaryButton
              href={clinicInfo.phoneHref}
              variant="light"
              size="lg"
              className="w-full justify-center whitespace-nowrap"
            >
              <Phone size={18} />
              Call
            </SecondaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
