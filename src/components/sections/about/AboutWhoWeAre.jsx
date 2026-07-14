import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, PrimaryButton } from '../../common';
import { aboutIntro } from '../../../data/about';
import { slideInLeft, slideInRight } from '../../../utils/animations';

export default function AboutWhoWeAre() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gold-gradient opacity-15 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[5/6] shadow-premium">
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7 }}
              >
                <LazyLoadImage
                  src={aboutIntro.image}
                  alt="Capilla Dental & Aesthetic Center clinic interior"
                  effect="blur"
                  className="h-full w-full object-cover"
                  wrapperClassName="h-full w-full"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-black">
              {aboutIntro.storyTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {aboutIntro.story.map((para) => (
                <p
                  key={para.slice(0, 32)}
                  className="text-base md:text-lg font-light leading-relaxed text-dark-bg/60"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <PrimaryButton to="/contact" variant="gold" size="lg">
                Book Appointment
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
