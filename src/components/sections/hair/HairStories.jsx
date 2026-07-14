import { motion } from 'framer-motion';
import { Container, SectionTitle, ReviewCard } from '../../common';
import { hairTestimonials } from '../../../data/hair';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function HairStories() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Results"
          title="Hair Success Stories"
          description="Patients who chose Capilla for PRP, GFC, transplant, and regrowth journeys."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {hairTestimonials.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <ReviewCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
