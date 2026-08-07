import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Baby,
  BadgeCheck,
  Check,
  Clock3,
  Droplets,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Zap,
} from 'lucide-react';
import { Container, PrimaryButton, SecondaryButton } from '../../common';
import { fadeUp, staggerContainer, staggerItem } from '../../../utils/animations';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const iconMap = {
  sparkles: Sparkles,
  shieldCheck: ShieldCheck,
  heartPulse: HeartPulse,
  smile: Smile,
  droplets: Droplets,
  baby: Baby,
  stethoscope: Stethoscope,
  leaf: Leaf,
  zap: Zap,
  badgeCheck: BadgeCheck,
};

export default function PremiumTreatmentCardsSection({
  eyebrow,
  title,
  description,
  cards,
}) {
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery('md');

  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          {eyebrow && (
            <span className="mb-4 block text-xs font-sans font-semibold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-[1.75rem] leading-tight text-primary-black sm:text-[2.2rem] md:text-[2.75rem]">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-dark-bg/65 md:text-lg">
              {description}
            </p>
          )}
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {cards.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            const hoverMotion = isDesktop && !shouldReduceMotion ? { y: -10, scale: 1.02 } : undefined;

            return (
              <motion.article
                key={item.title}
                variants={staggerItem}
                whileHover={hoverMotion}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col rounded-[24px] border border-[#efe2bb] bg-primary-white p-7 shadow-[0_24px_70px_rgba(11,11,11,0.06)] transition-all duration-300 hover:border-gold/60 hover:shadow-[0_30px_90px_rgba(201,162,39,0.16)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-gold/40 via-gold to-gold/70" />
                </div>

                <h3 className="mt-6 font-display text-[1.35rem] leading-tight text-primary-black transition-colors duration-300 group-hover:text-gold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-light leading-7 text-dark-bg/65">
                  {item.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm font-light leading-6 text-dark-bg/70">
                      <Check size={15} className="mt-1 shrink-0 text-gold" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-3 rounded-[20px] border border-black/5 bg-[#fcfaf5] p-4">
                  <div className="flex items-center justify-between text-sm text-dark-bg/70">
                    <span className="flex items-center gap-2 font-medium text-primary-black">
                      <Clock3 size={15} className="text-gold" /> Duration
                    </span>
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-dark-bg/70">
                    <span className="flex items-center gap-2 font-medium text-primary-black">
                      <HeartPulse size={15} className="text-gold" /> Recovery
                    </span>
                    <span>{item.recovery}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-dark-bg/70">
                    <span className="flex items-center gap-2 font-medium text-primary-black">
                      <BadgeCheck size={15} className="text-gold" /> Best For
                    </span>
                    <span className="text-right">{item.bestFor}</span>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 pt-1 sm:flex-row">
                  <SecondaryButton
                    to={item.path}
                    size="sm"
                    variant="gold"
                    className="w-full sm:w-auto rounded-full px-8 py-3 text-lg border-2"
                    aria-label={`Know more about ${item.title}`}
                  >
                    <span className="flex items-center gap-3">
                      <span>{'Know More'}</span>
                      <ArrowRight size={15} />
                    </span>
                  </SecondaryButton>

                  <PrimaryButton
                    to="/contact"
                    size="sm"
                    variant="gold"
                    className="w-full sm:w-auto rounded-full px-8 py-3 text-lg shadow-none"
                    aria-label="Book appointment"
                  >
                    <span className="flex items-center gap-3">
                      <span>{'Book Appointment'}</span>
                      <ArrowRight size={15} />
                    </span>
                  </PrimaryButton>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
