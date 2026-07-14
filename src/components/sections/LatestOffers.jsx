import { motion } from 'framer-motion';
import { Container, SectionTitle, OfferCard, SecondaryButton } from '../common';
import { offers } from '../../data/content';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function LatestOffers() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Exclusive"
          title="Latest Offers"
          description="Curated packages with luxury gold accents — limited seasonal advantages for new and returning patients."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {offers.map((offer) => (
            <motion.div key={offer.id} variants={staggerItem}>
              <OfferCard {...offer} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <SecondaryButton to="/offers" size="lg">
            View All Offers
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
