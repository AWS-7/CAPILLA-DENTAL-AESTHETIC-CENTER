import { motion } from 'framer-motion';
import { Container, SectionTitle, OfferCard, SecondaryButton, MobileSwiper } from '../common';
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

        <div className="md:hidden -mx-1">
          <MobileSwiper
            slidesPerView={1}
            spaceBetween={16}
            freeMode={false}
            ariaLabel="Latest offers"
          >
            {offers.map((offer) => (
              <OfferCard key={offer.id} {...offer} />
            ))}
          </MobileSwiper>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {offers.map((offer) => (
            <motion.div key={offer.id} variants={staggerItem}>
              <OfferCard {...offer} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <SecondaryButton to="/offers" size="lg" className="w-full sm:w-auto">
            View All Offers
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
