import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../../utils/animations';
import { useNavigate } from 'react-router-dom';

export default function RelatedTreatmentSlider({ title, treatments = [] }) {
  const navigate = useNavigate();

  if (!treatments || treatments.length === 0) return null;

  return (
    <section className="section-padding bg-light-bg">
      <div className="mx-auto w-full max-w-container px-5 md:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-black">
            {title}
          </h2>
        </motion.div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden -mx-5 px-5">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {treatments.map((treatment, index) => (
              <motion.div
                key={`${treatment.path}-${index}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="snap-start shrink-0 w-[85vw] max-w-[320px]"
              >
                <div className="rounded-[12px] border border-[#e9e0c8] bg-primary-white h-full shadow-sm">
                  {/* Compact Treatment Content (no image) */}
                  <div className="p-4 flex h-full flex-col justify-between">
                    {treatment.category && (
                      <span className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-gold mb-2">
                        {treatment.category}
                      </span>
                    )}

                    <div>
                      <h3 className="font-display text-lg text-primary-black mb-2">
                        {treatment.title}
                      </h3>
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
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={`${treatment.path}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="rounded-[12px] border border-[#e9e0c8] bg-primary-white h-full transition-transform duration-300 hover:-translate-y-2">
                {/* Compact Treatment Content (no image) */}
                <div className="p-5 flex h-full flex-col justify-between">
                  {treatment.category && (
                    <span className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-gold mb-2">
                      {treatment.category}
                    </span>
                  )}

                  <div>
                    <h3 className="font-display text-lg text-primary-black mb-2">
                      {treatment.title}
                    </h3>

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
      </div>
    </section>
  );
}
