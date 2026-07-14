import { motion } from 'framer-motion';
import { Container, SectionTitle, ReviewCard } from '../../common';
import { reviews } from '../../../data/content';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function DoctorsTestimonials() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Patient Voices"
          title="Doctor Testimonials"
          description="What patients say about consulting our dental, skin, and hair specialists in Perumbakkam."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={staggerItem}>
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
