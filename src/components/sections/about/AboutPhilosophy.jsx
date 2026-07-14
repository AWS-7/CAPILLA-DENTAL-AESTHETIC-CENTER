import { motion } from 'framer-motion';
import { Container } from '../../common';
import { philosophy } from '../../../data/about';
import { fadeUp } from '../../../utils/animations';

export default function AboutPhilosophy() {
  return (
    <section className="section-padding bg-primary-white">
      <Container narrow>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
            Our Approach
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-black">
            {philosophy.title}
          </h2>
          <div className="mt-8 space-y-5">
            {philosophy.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-base md:text-lg font-light leading-relaxed text-dark-bg/60"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="mx-auto mt-10 h-px w-24 bg-gold-gradient" />
        </motion.div>
      </Container>
    </section>
  );
}
