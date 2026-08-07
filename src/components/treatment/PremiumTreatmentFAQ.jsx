import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, ChevronRight, Phone, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PremiumTreatmentFAQ({ 
  title = 'Frequently Asked Questions', 
  description = 'Everything you need to know about this treatment before booking.',
  faqs = [],
  category = 'dental'
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleBookConsultation = () => {
    navigate('/contact');
  };

  const handleViewAllTreatments = () => {
    navigate(`/${category}`);
  };

  return (
    <section className="section-padding bg-primary-white">
      <div className="mx-auto w-full max-w-container px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4"
              >
                FAQs
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-black mb-4"
              >
                {title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg font-light text-dark-bg/60 max-w-2xl"
              >
                {description}
              </motion.p>
            </div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block flex-shrink-0"
            >
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-gold/30 flex items-center justify-center bg-primary-white/50 backdrop-blur-sm">
                    <div className="text-gold">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor">
                        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  rounded-[28px] overflow-hidden transition-all duration-300
                  ${isOpen ? 'shadow-premium border-2 border-gold/40' : 'border border-gold/20 shadow-sm hover:border-gold/40 hover:shadow-premium'}
                  bg-primary-white
                `}
              >
                {/* Collapsed State */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  {/* Left: Gold Circular Icon */}
                  <div className="flex items-center gap-4 md:gap-6 flex-1">
                    <div className={`
                      flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 transition-all duration-300
                      ${isOpen ? 'bg-gold border-gold' : 'bg-primary-white border-gold/40'}
                    `}>
                      <Plus 
                        size={20} 
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary-white' : 'text-gold'}`} 
                      />
                    </div>
                    <h3 className="font-display text-lg md:text-xl text-primary-black pr-4">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Right: Small Gold Arrow */}
                  <div className="flex-shrink-0">
                    <ChevronRight 
                      size={20} 
                      className={`text-gold transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
                    />
                  </div>
                </button>

                {/* Expanded State - Premium Treatment Showcase */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                          {/* Left: Large Treatment Image */}
                          <div className="lg:w-2/5">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-gold/30">
                              <img
                                src={faq.image || faq.treatmentImage}
                                alt={faq.question}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                              {/* Before & After Badge */}
                              {faq.showBeforeAfter && (
                                <div className="absolute bottom-4 left-4 bg-gold text-primary-white px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider">
                                  Before & After
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Right: Content */}
                          <div className="lg:w-3/5 flex flex-col justify-center">
                            {/* Large Question */}
                            <h4 className="font-display text-xl md:text-2xl text-primary-black mb-4">
                              {faq.question}
                            </h4>

                            {/* Answer */}
                            <p className="text-base md:text-lg font-light text-dark-bg/70 leading-relaxed mb-6">
                              {faq.answer}
                            </p>

                            {/* Premium Chips */}
                            {faq.features && faq.features.length > 0 && (
                              <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                                {faq.features.map((feature, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-sm font-medium text-primary-black shadow-sm"
                                  >
                                    <span className="text-gold">✓</span>
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Recommended Treatments */}
                            {faq.recommendedTreatments && faq.recommendedTreatments.length > 0 && (
                              <div className="mb-8">
                                <h5 className="font-display text-base md:text-lg text-primary-black mb-4">
                                  Recommended Treatments
                                </h5>
                                {/* Mobile Horizontal Scroll */}
                                  <div className="lg:hidden -mx-6 px-6">
                                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                                      {faq.recommendedTreatments.map((treatment, idx) => (
                                        <motion.div
                                          key={`${treatment.path}-${idx}`}
                                          initial={{ opacity: 0, x: 30 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: idx * 0.1 }}
                                          className="snap-start shrink-0 w-[70vw] max-w-[280px]"
                                        >
                                          <div className="rounded-[12px] border border-[#e9e0c8] bg-primary-white overflow-hidden shadow-sm">
                                            <div className="p-4">
                                              <h6 className="font-display text-sm text-primary-black mb-1">
                                                {treatment.title}
                                              </h6>
                                              <p className="text-xs font-light text-dark-bg/60 mb-3 line-clamp-1">
                                                {treatment.description}
                                              </p>
                                              <button className="flex items-center gap-2 text-gold text-sm font-medium">
                                                <div className="h-8 w-8 rounded-full border-2 border-gold flex items-center justify-center">
                                                  <ArrowRight size={14} />
                                                </div>
                                              </button>
                                            </div>
                                          </div>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>

                                {/* Desktop Grid */}
                                <div className="hidden lg:grid lg:grid-cols-4 gap-4">
                                  {faq.recommendedTreatments.map((treatment, idx) => (
                                    <motion.div
                                      key={`${treatment.path}-${idx}`}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                      whileHover={{ y: -4 }}
                                      className="group"
                                    >
                                      <div className="rounded-[12px] border border-[#e9e0c8] bg-primary-white overflow-hidden shadow-sm transition-all duration-300">
                                        <div className="p-4">
                                          <h6 className="font-display text-sm text-primary-black mb-1">
                                            {treatment.title}
                                          </h6>
                                          <p className="text-xs font-light text-dark-bg/60 mb-3 line-clamp-1">
                                            {treatment.description}
                                          </p>
                                          <button className="flex items-center gap-2 text-gold text-sm font-medium">
                                            <div className="h-8 w-8 rounded-full border-2 border-gold flex items-center justify-center">
                                              <ArrowRight size={14} />
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Bottom CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleBookConsultation}
                                className="flex items-center justify-center gap-2 bg-gold text-primary-white px-6 py-4 rounded-2xl font-medium text-base transition-all duration-300 shadow-gold hover:shadow-lg"
                              >
                                <Calendar size={18} />
                                Book Consultation
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleViewAllTreatments}
                                className="flex items-center justify-center gap-2 bg-primary-white border-2 border-[#0F3D34] text-[#0F3D34] px-6 py-4 rounded-2xl font-medium text-base transition-all duration-300 hover:bg-[#0F3D34]/5"
                              >
                                View All Treatments
                                <ArrowRight size={18} />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
