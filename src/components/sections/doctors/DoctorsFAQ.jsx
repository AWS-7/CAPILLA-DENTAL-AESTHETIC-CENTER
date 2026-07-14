import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Container, SectionTitle } from '../../common';
import { doctorFaqs } from '../../../data/doctorsPage';
import { fadeUp } from '../../../utils/animations';
import { cn } from '../../../utils/helpers';

export default function DoctorsFAQ() {
  const [openId, setOpenId] = useState(doctorFaqs[0]?.id ?? null);

  return (
    <section className="section-padding bg-primary-white">
      <Container narrow>
        <SectionTitle
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Quick answers to help you book the right doctor and prepare for your visit."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-3"
        >
          {doctorFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  'overflow-hidden rounded-2xl border transition-colors',
                  isOpen ? 'border-gold/40 bg-light-bg' : 'border-border bg-primary-white'
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 md:px-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl text-primary-black">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors',
                      isOpen
                        ? 'border-gold bg-gold text-primary-white'
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
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 md:px-6 text-sm md:text-base font-light leading-relaxed text-dark-bg/60">
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
