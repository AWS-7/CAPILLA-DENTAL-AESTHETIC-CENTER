import { motion } from 'framer-motion';
import { Container, SectionTitle, GalleryCard, PrimaryButton } from '../../common';
import { aboutGallery } from '../../../data/about';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function AboutGalleryPreview() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Spaces"
          title="Gallery Preview"
          description="A glimpse into our Perumbakkam clinic — serene lounges, modern suites, and treatment spaces designed for calm."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {aboutGallery.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <GalleryCard
                title={item.title}
                category={item.category}
                image={item.image}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <PrimaryButton to="/gallery" variant="primary" size="lg">
            View Full Gallery
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
