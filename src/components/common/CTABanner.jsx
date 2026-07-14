import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { fadeUp } from '../../utils/animations';
import { cn } from '../../utils/helpers';

export default function CTABanner({
  title = 'Ready to Begin Your Transformation?',
  description = 'Schedule a private consultation with our specialists and experience premium care tailored to you.',
  primaryLabel = 'Book Appointment',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
  dark = true,
  className = '',
}) {
  return (
    <section className={cn('section-padding', className)}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={cn(
          'container-premium relative overflow-hidden rounded-3xl md:rounded-4xl px-8 py-14 md:px-16 md:py-20',
          dark
            ? 'bg-dark-bg text-primary-white'
            : 'bg-light-bg text-primary-black border border-border'
        )}
      >
        <div className="absolute inset-0 bg-gold-gradient opacity-[0.07] pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className={cn('font-display text-3xl md:text-4xl lg:text-5xl', dark && 'text-primary-white')}>
              {title}
            </h2>
            {description && (
              <p
                className={cn(
                  'mt-4 text-base md:text-lg font-light leading-relaxed',
                  dark ? 'text-primary-white/65' : 'text-dark-bg/60'
                )}
              >
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <PrimaryButton to={primaryTo} variant={dark ? 'gold' : 'primary'}>
              {primaryLabel}
              <ArrowRight size={18} />
            </PrimaryButton>
            {secondaryLabel && secondaryTo && (
              <SecondaryButton to={secondaryTo} variant={dark ? 'light' : 'default'}>
                {secondaryLabel}
              </SecondaryButton>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
