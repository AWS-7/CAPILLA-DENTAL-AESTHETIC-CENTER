import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { fadeUp } from '../../utils/animations';

export default function BenefitsCard({ title, benefits = [] }) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="section-padding bg-primary-white">
      <div className="mx-auto w-full max-w-container px-5 md:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-gold/30 bg-primary-white p-6 md:p-8 lg:p-10 shadow-premium"
        >
          {/* Section Title */}
          <div className="mb-8 flex items-center gap-3">
            <Sparkles size={24} className="text-gold" />
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-black">
              {title}
            </h2>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-gold/20 bg-light-bg/50 p-4 md:p-5"
              >
                <div className="mt-0.5 shrink-0">
                  <Sparkles size={20} className="text-gold" />
                </div>
                <p className="text-base md:text-lg font-light text-dark-bg/80 leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
