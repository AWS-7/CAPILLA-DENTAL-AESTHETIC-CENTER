import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Container, SectionTitle } from '../../common';
import { fadeUp } from '../../../utils/animations';
import { cn } from '../../../utils/helpers';

export default function DentalFAQ({
  faqs = [],
  eyebrow = 'FAQs',
  title = 'Dental FAQs',
  description = 'Clear answers to help you choose the right dental treatment with confidence.',
  dark = false,
}) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  if (!faqs.length) return null;

  return (
    <section className={cn('section-padding', dark ? 'bg-dark-bg' : 'bg-primary-white')}>
      <Container narrow>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
          light={dark}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  'overflow-hidden rounded-2xl border transition-colors',
                  dark
                    ? isOpen
                      ? 'border-gold/40 bg-primary-white/5'
                      : 'border-primary-white/10 bg-primary-white/[0.03]'
                    : isOpen
                      ? 'border-gold/40 bg-light-bg'
                      : 'border-border bg-primary-white'
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full min-h-12 items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5 md:px-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      'font-display text-base sm:text-lg md:text-xl break-safe pr-1',
                      dark ? 'text-primary-white' : 'text-primary-black'
                    )}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors',
                      isOpen
                        ? 'border-gold bg-gold text-primary-white'
                        : dark
                          ? 'border-primary-white/20 text-primary-white/50'
                          : 'border-border text-dark-bg/50'
                    )}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className={cn(
                          'px-5 pb-5 md:px-6 text-sm md:text-base font-light leading-relaxed',
                          dark ? 'text-primary-white/60' : 'text-dark-bg/60'
                        )}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
