import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronRight, ArrowRight } from 'lucide-react';
import { fadeUp } from '../../utils/animations';
import { useNavigate } from 'react-router-dom';

export default function PremiumFAQ({ title, faqs = [], relatedTreatments = [], category = 'dental' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-light-bg">
      <div className="mx-auto w-full max-w-container px-5 md:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-black">
            {title}
          </h2>
        </motion.div>

        {/* FAQ Sections */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-gold/30 bg-primary-white overflow-hidden shadow-premium"
            >
              {/* FAQ Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-light-bg/30 transition-colors duration-300"
              >
                <h3 className="font-display text-lg md:text-xl text-primary-black pr-4">
                  {faq.question}
                </h3>
                <div className="shrink-0">
                  {openIndex === index ? (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                      <Minus size={20} className="text-gold" />
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                      <Plus size={20} className="text-gold" />
                    </div>
                  )}
                </div>
              </button>

              {/* FAQ Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                      <p className="text-base md:text-lg font-light text-dark-bg/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Related Treatments in FAQ Section */}
        {relatedTreatments && relatedTreatments.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="font-display text-xl md:text-2xl text-primary-black mb-6">
                Related {category.charAt(0).toUpperCase() + category.slice(1)} Treatments
              </h3>
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden -mx-5 px-5">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {relatedTreatments.map((treatment, index) => (
                  <motion.div
                    key={`${treatment.path}-${index}`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="snap-start shrink-0 w-[85vw] max-w-[320px]"
                  >
                    <div className="rounded-[12px] border border-[#e9e0c8] bg-primary-white overflow-hidden shadow-sm h-full">
                      {/* Compact Treatment Content (no image) */}
                      <div className="p-4 flex h-full flex-col justify-between">
                        {treatment.category && (
                          <span className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-gold mb-2">
                            {treatment.category}
                          </span>
                        )}

                        <div>
                          <h4 className="font-display text-lg text-primary-black mb-2">
                            {treatment.title}
                          </h4>
                          <p className="text-sm font-light text-dark-bg/70 leading-relaxed mb-3 line-clamp-2">
                            {treatment.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => navigate(treatment.path)}
                            className="flex items-center gap-2 text-gold font-medium text-sm hover:gap-3 transition-all duration-300"
                          >
                            View Details
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTreatments.map((treatment, index) => (
                <motion.div
                  key={`${treatment.path}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <div className="rounded-[12px] border border-[#e9e0c8] bg-primary-white overflow-hidden shadow-sm h-full transition-all duration-300">
                    {/* Compact Treatment Content (no image) */}
                    <div className="p-5 flex h-full flex-col justify-between">
                      {treatment.category && (
                        <span className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-gold mb-2">
                          {treatment.category}
                        </span>
                      )}

                      <div>
                        <h4 className="font-display text-lg text-primary-black mb-2">
                          {treatment.title}
                        </h4>

                        <p className="text-sm font-light text-dark-bg/70 leading-relaxed mb-4 line-clamp-2">
                          {treatment.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => navigate(treatment.path)}
                          className="flex items-center gap-2 text-gold font-medium text-sm hover:gap-3 transition-all duration-300"
                        >
                          View Details
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
