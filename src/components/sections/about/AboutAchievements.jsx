import { motion } from 'framer-motion';
import { Container, SectionTitle, AnimatedCounter } from '../../common';
import { achievements } from '../../../data/about';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function AboutAchievements() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Milestones"
          title="Our Achievements"
          description="Numbers that reflect trust earned — happy patients, successful treatments, and lasting relationships."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="rounded-3xl border border-border bg-primary-white p-6 md:p-8 shadow-soft"
            >
              <AnimatedCounter
                end={item.end}
                suffix={item.suffix}
                label={item.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
