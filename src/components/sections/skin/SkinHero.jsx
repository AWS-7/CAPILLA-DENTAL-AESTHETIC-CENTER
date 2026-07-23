import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../../common';
import { clinicInfo } from '../../../data/clinic';
import { skinHero } from '../../../data/skin';
import { slideInLeft, fadeUp } from '../../../utils/animations';

export default function SkinHero() {
  const heroCtaClassName =
    'w-full min-h-[56px] justify-center rounded-full px-7 py-4 text-base font-semibold leading-none whitespace-nowrap';

  return (
    <section className="relative min-h-[70vh] md:min-h-[78vh] w-full overflow-hidden bg-dark-bg">
      <motion.div
        className="absolute inset-0 scale-110"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        style={{ willChange: 'transform' }}
      >
        <img
          src={skinHero.image}
          alt="Advanced skin treatments at Capilla Perumbakkam"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/85 to-primary-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(200,164,93,0.22),transparent_55%)]" />
      </motion.div>

      <div className="relative z-10 container-premium flex min-h-[70vh] md:min-h-[78vh] flex-col justify-center pb-12 pt-[calc(var(--header-height)+2rem)] md:pb-16 md:pt-[calc(var(--header-height)+3rem)]">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-[640px] flex-col items-start md:max-w-[680px] lg:max-w-[760px] xl:max-w-[800px]"
        >
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            <Sparkles size={14} />
            Skin Clinic in Perumbakkam
          </p>
          <h1 className="font-display text-[1.75rem] leading-tight sm:text-4xl md:text-display-md lg:text-display-lg text-primary-white break-safe lg:whitespace-nowrap">
            {skinHero.title}
          </h1>
          <div className="mt-5 flex flex-col gap-2 font-display text-xl leading-[1.18] sm:text-2xl md:flex-row md:flex-wrap md:items-center md:gap-4 md:text-3xl md:leading-[1.18] lg:flex-nowrap lg:gap-5 text-primary-white/90">
            {skinHero.lines.map((line) => (
              <p key={line} className={line.includes('Timeless') ? 'md:whitespace-nowrap text-gold-light' : 'md:whitespace-nowrap'}>
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
            {skinHero.subtitle}
          </motion.p>
          <div className="mt-8 grid w-full max-w-[760px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <PrimaryButton
              to="/contact"
              variant="gold"
              size="lg"
              className={heroCtaClassName}
            >
              Book Appointment
            </PrimaryButton>
            <SecondaryButton
              href={clinicInfo.whatsappHref}
              external
              variant="light"
              size="lg"
              className={heroCtaClassName}
            >
              <MessageCircle size={18} />
              WhatsApp Consultation
            </SecondaryButton>
            <SecondaryButton
              href={clinicInfo.phoneHref}
              variant="light"
              size="lg"
              className={heroCtaClassName}
            >
              <Phone size={18} />
              Call Now
            </SecondaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
