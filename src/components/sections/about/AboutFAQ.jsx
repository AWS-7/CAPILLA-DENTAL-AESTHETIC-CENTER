import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Container, SectionTitle } from '../../common';
import { fadeUp } from '../../../utils/animations';
import { cn } from '../../../utils/helpers';

export default function AboutFAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="section-padding bg-light-bg">
      <Container narrow>
        <SectionTitle
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our clinic, treatments, and what makes Capilla your trusted choice for dental, skin, and hair care."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-3"
        >
          {[
            {
              id: 1,
              question: 'What makes Capilla different from other clinics?',
              answer: 'Capilla combines advanced dental, skin, and hair treatments under one roof with international standards, hospital-grade sterilization, and personalized care. Our multi-specialty approach ensures comprehensive aesthetic solutions tailored to your unique needs.',
            },
            {
              id: 2,
              question: 'What are the key benefits of choosing Capilla?',
              answer: 'Key benefits include: 8+ years of experience, experienced specialists across all domains, advanced technology for precise results, transparent pricing with no hidden costs, personalized treatment plans, and a comfortable, hygienic environment.',
            },
            {
              id: 3,
              question: 'Do you offer consultations for all treatments?',
              answer: 'Yes, we offer detailed consultations for dental, skin, and hair treatments. Our specialists assess your condition, discuss goals, and create personalized treatment plans with clear timelines and pricing.',
            },
            {
              id: 4,
              question: 'What safety and hygiene standards do you follow?',
              answer: 'We maintain hospital-grade sterilization protocols, use disposable materials where possible, and follow strict infection control measures. Our equipment is regularly calibrated and sanitized to ensure patient safety.',
            },
            {
              id: 5,
              question: 'Are your treatments suitable for all age groups?',
              answer: 'Yes, we offer treatments suitable for various age groups. From pediatric dentistry for children to anti-aging treatments for adults, our specialists customize approaches based on individual needs and health conditions.',
            },
          ].map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  'overflow-hidden rounded-2xl border transition-colors',
                  isOpen
                    ? 'border-gold/40 bg-primary-white'
                    : 'border-border bg-primary-white'
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full min-h-12 items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5 md:px-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg md:text-xl break-safe pr-1 text-primary-black">
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
                      transition={{ duration: 0.3 }}
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
