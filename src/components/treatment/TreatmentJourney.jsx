import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

export default function TreatmentJourney({ title, steps = [] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="section-padding bg-light-bg">
      <div className="mx-auto w-full max-w-container px-5 md:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-black text-center">
            {title}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-gold/30 bg-primary-white p-6 md:p-8 shadow-premium"
            >
              <div className="flex gap-6">
                {/* Step Number Badge */}
                <div className="shrink-0">
                  <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gold/10 border-2 border-gold">
                    <span className="font-display text-2xl md:text-3xl text-gold font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-primary-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg font-light text-dark-bg/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
