import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Container,
  SectionTitle,
  PrimaryButton,
  SecondaryButton,
} from '../common';
import { treatmentCategories } from '../../data/home';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function TreatmentCategories() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Our Specialties"
          title="Treatment Categories"
          description="Three pillars of care under one luxury roof — dental, skin, and hair — each delivered with specialist precision."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {treatmentCategories.map((cat) => (
            <motion.div key={cat.id} variants={staggerItem} className="group">
              <div className="h-full overflow-hidden rounded-3xl border border-border bg-primary-white shadow-soft transition-shadow duration-300 hover:shadow-premium">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6 }}
                  >
                    <LazyLoadImage
                      src={cat.image}
                      alt={cat.title}
                      effect="blur"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black/50 to-transparent" />
                  <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl md:text-3xl text-primary-white">
                    {cat.title}
                  </h3>
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-sm font-light leading-relaxed text-dark-bg/60">
                    {cat.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <SecondaryButton to={cat.path} size="sm" className="w-full sm:w-auto">
                      Learn More
                    </SecondaryButton>
                    <PrimaryButton
                      to="/contact"
                      size="sm"
                      variant="gold"
                      className="w-full sm:w-auto"
                    >
                      Book Appointment
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
