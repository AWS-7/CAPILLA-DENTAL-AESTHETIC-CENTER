import { motion } from 'framer-motion';
import { Container, SectionTitle } from '../../common';
import { skinProcess } from '../../../data/skin';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function SkinProcess() {
  return (
    <section className="section-padding bg-dark-bg">
      <Container>
        <SectionTitle
          eyebrow="Journey"
          title="Skin Consultation Process"
          description="From booking to aftercare — a clear path toward healthier, glowing skin."
          light
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {skinProcess.map((step, index) => (
            <motion.div
              key={step.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-primary-white/10 bg-primary-white/5 p-6"
            >
              <span className="font-display text-4xl text-gold/40">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-xl text-primary-white">{step.title}</h3>
              <p className="mt-2 text-sm font-light text-primary-white/55 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
