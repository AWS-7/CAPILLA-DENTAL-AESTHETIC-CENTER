import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, SectionTitle, PrimaryButton } from '../../common';
import { doctorProfiles } from '../../../data/doctorsPage';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function DoctorsListing() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Our Team"
          title="Our Expert Doctor"
          description="Meet Dr. Shakthi Chandran, the specialist behind Capilla’s clinical cosmetology and aesthetic care."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-[420px] grid-cols-1 gap-6 md:gap-8"
        >
          {doctorProfiles.map((doctor) => (
            <motion.div key={doctor.id} variants={staggerItem}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-primary-white shadow-soft transition-shadow hover:shadow-premium">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <LazyLoadImage
                      src={doctor.image}
                      alt={doctor.name}
                      effect="blur"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black/70 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-2xl text-primary-black group-hover:text-gold transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold">
                    {doctor.qualification}
                  </p>
                  <p className="mt-2 text-sm text-dark-bg/70">
                    <span className="font-medium text-dark-bg/85">Specialization:</span>{' '}
                    {doctor.specialization}
                  </p>
                  <p className="mt-1 text-sm text-dark-bg/70">
                    <span className="font-medium text-dark-bg/85">Experience:</span>{' '}
                    {doctor.experience}
                  </p>
                  <p className="mt-1 text-sm text-dark-bg/70">
                    <span className="font-medium text-dark-bg/85">Languages:</span>{' '}
                    {doctor.languages.join(', ')}
                  </p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-dark-bg/55 flex-1">
                    {doctor.shortDescription}
                  </p>
                  <div className="mt-6">
                    <PrimaryButton to="/contact" variant="gold" className="w-full" size="sm">
                      Book Appointment
                    </PrimaryButton>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
