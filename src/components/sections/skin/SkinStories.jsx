import { motion } from 'framer-motion';
import { Container, SectionTitle, ReviewCard } from '../../common';
import { skinTestimonials } from '../../../data/skin';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function SkinStories() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Results"
          title="Skin Success Stories"
          description="Clients who chose Capilla for Hydrafacial, peels, scar care, and glass-skin glow."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skinTestimonials.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <ReviewCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
