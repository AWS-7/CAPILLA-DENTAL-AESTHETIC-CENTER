import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../../common';
import { clinicInfo } from '../../../data/clinic';
import { hairHero } from '../../../data/hair';
import { slideInLeft, fadeUp } from '../../../utils/animations';

export default function HairHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[78vh] w-full overflow-hidden bg-dark-bg">
      <div className="absolute inset-0">
        <img
          src={hairHero.image}
          alt="Advanced hair treatments at Capilla Perumbakkam"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/85 to-primary-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(200,164,93,0.22),transparent_55%)]" />
      </div>

      <div className="relative z-10 container-premium flex min-h-[70vh] md:min-h-[78vh] flex-col justify-end pb-14 md:pb-20 pt-32 md:pt-40">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-3xl flex-col items-start"
        >
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            <Sparkles size={14} />
            Hair Clinic in Perumbakkam
          </p>
          <h1 className="font-display text-[1.75rem] leading-tight sm:text-4xl md:text-display-md lg:text-display-lg text-primary-white break-safe">
            {hairHero.title}
          </h1>
          <div className="mt-4 sm:mt-5 space-y-1 font-display text-xl sm:text-2xl md:text-3xl text-primary-white/90">
            {hairHero.lines.map((line) => (
              <p key={line} className={line.includes('Natural') ? 'text-gold-light' : undefined}>
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
            {hairHero.subtitle}
          </motion.p>
          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
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
              WhatsApp Consultation
            </SecondaryButton>
            <SecondaryButton
              href={clinicInfo.phoneHref}
              variant="light"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Phone size={16} />
              Call Now
            </SecondaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
