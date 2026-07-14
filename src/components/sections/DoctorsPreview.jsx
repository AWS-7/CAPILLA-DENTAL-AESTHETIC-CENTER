import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Container,
  SectionTitle,
  PrimaryButton,
  SecondaryButton,
} from '../common';
import { homeDoctors } from '../../data/home';
import { staggerContainer, staggerItem } from '../../utils/animations';

function DoctorCard({ doctor }) {
  return (
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
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/85 via-primary-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-primary-white">
          <h3 className="font-display text-xl sm:text-2xl">{doctor.name}</h3>
          <p className="mt-1 text-sm text-gold-light font-medium">{doctor.role}</p>
          <p className="mt-2 text-xs font-light text-primary-white/70">
            {doctor.qualification}
          </p>
          <p className="mt-1 text-sm font-light text-primary-white/75">
            {doctor.specialty}
          </p>
          <p className="mt-3 inline-block rounded-full border border-primary-white/20 px-3 py-1 text-xs tracking-wide">
            {doctor.experience}
          </p>
        </div>
      </div>
      <div className="mt-auto p-4 sm:p-5">
        <PrimaryButton to="/contact" variant="gold" className="w-full" size="sm">
          Book Appointment
        </PrimaryButton>
      </div>
    </article>
  );
}

export default function DoctorsPreview() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Our Specialists"
          title="Meet Our Doctors"
          description="Board-certified clinicians dedicated to exceptional outcomes across dental, skin, and hair care."
        />

        {/* Mobile / tablet: horizontal snap carousel */}
        <div
          className="md:hidden -mx-5 px-5"
          role="region"
          aria-label="Doctors carousel"
        >
          <div className="snap-x-carousel pb-2">
            {homeDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="snap-center shrink-0 w-[78%] max-w-[300px] first:ml-0"
              >
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: original grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {homeDoctors.map((doctor) => (
            <motion.div key={doctor.id} variants={staggerItem}>
              <DoctorCard doctor={doctor} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 md:mt-12 text-center px-0">
          <SecondaryButton to="/doctors" size="lg" className="w-full sm:w-auto">
            Meet All Doctors
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
