import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Check, ArrowRight } from 'lucide-react';
import {
  Container,
  SectionTitle,
  PrimaryButton,
  SecondaryButton,
} from '../common';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { cn } from '../../utils/helpers';

export default function FeaturedTreatments({
  eyebrow,
  title,
  description,
  items = [],
  viewAllTo,
  className = '',
  dark = false,
  tone,
}) {
  const bgClass =
    tone === 'light'
      ? 'bg-light-bg'
      : tone === 'dark' || dark
        ? 'bg-dark-bg'
        : 'bg-primary-white';
  const isDark = tone === 'dark' || dark;

  return (
    <section className={cn('section-padding', bgClass, className)}>
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
          light={isDark}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div key={item.id} variants={staggerItem} className="h-full">
              <article
                className={cn(
                  'group flex h-full flex-col overflow-hidden rounded-3xl border transition-shadow duration-300 hover:shadow-premium',
                  isDark
                    ? 'border-primary-white/10 bg-primary-white/5'
                    : 'border-border bg-primary-white shadow-soft'
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  >
                    <LazyLoadImage
                      src={item.image}
                      alt={item.title}
                      effect="blur"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </motion.div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
                  <h3
                    className={cn(
                      'font-display text-xl md:text-2xl transition-colors group-hover:text-gold',
                      isDark ? 'text-primary-white' : 'text-primary-black'
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-2 text-base font-light leading-relaxed flex-1',
                      isDark ? 'text-primary-white/55' : 'text-dark-bg/55'
                    )}
                  >
                    {item.description}
                  </p>
                  {item.benefits?.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {item.benefits.map((b) => (
                        <li
                          key={b}
                          className={cn(
                            'flex items-start gap-2 text-sm font-light',
                            isDark ? 'text-primary-white/70' : 'text-dark-bg/70'
                          )}
                        >
                          <Check size={14} className="mt-0.5 shrink-0 text-gold" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
                    <SecondaryButton
                      to={item.path}
                      size="sm"
                      variant={isDark ? 'light' : 'default'}
                      className="w-full sm:w-auto"
                    >
                      Learn More
                    </SecondaryButton>
                    <PrimaryButton
                      to="/contact"
                      size="sm"
                      variant="gold"
                      className="w-full sm:w-auto"
                    >
                      Book Now
                      <ArrowRight size={14} />
                    </PrimaryButton>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>

        {viewAllTo && (
          <div className="mt-12 text-center">
            <SecondaryButton to={viewAllTo} variant={isDark ? 'light' : 'default'}>
              View All Treatments
            </SecondaryButton>
          </div>
        )}
      </Container>
    </section>
  );
}
