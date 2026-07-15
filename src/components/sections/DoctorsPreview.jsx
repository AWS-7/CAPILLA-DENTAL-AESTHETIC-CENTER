import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowRight, GraduationCap } from 'lucide-react';
import {
  Container,
  SectionTitle,
  SecondaryButton,
  MobileSwiper,
} from '../common';
import { homeDoctors } from '../../data/home';
import { staggerContainer, staggerItem } from '../../utils/animations';

function DoctorCard({ doctor }) {
  return (
    <article className="group flex h-full flex-col text-center">
      {/* Arched portrait */}
      <div className="relative mx-auto w-full max-w-[320px]">
        <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-[1.75rem] border border-border bg-primary-white shadow-soft transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-premium">
          <div className="aspect-[3/4] overflow-hidden">
            <LazyLoadImage
              src={doctor.image}
              alt={doctor.name}
              effect="blur"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              wrapperClassName="block h-full w-full"
            />
          </div>
          <div className="absolute inset-0 rounded-t-[10rem] rounded-b-[1.75rem] ring-1 ring-inset ring-primary-black/5" />
        </div>

        {/* Experience badge */}
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/30 bg-primary-white px-4 py-1.5 text-[11px] font-medium tracking-[0.08em] text-gold shadow-soft">
          {doctor.experience} Experience
        </span>
      </div>

      {/* Details */}
      <div className="mt-8 flex flex-1 flex-col items-center px-2">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
          {doctor.specialty}
        </p>
        <h3 className="mt-2 font-display text-2xl text-primary-black transition-colors duration-300 group-hover:text-gold md:text-[1.75rem]">
          {doctor.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-dark-bg/70">{doctor.role}</p>
        <p className="mt-2 flex items-center gap-1.5 text-xs font-light text-dark-bg/50">
          <GraduationCap size={14} className="text-gold/70" />
          {doctor.qualification}
        </p>

        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-black/15 px-6 py-2.5 text-sm font-medium text-primary-black transition-all duration-300 hover:border-gold hover:bg-gold hover:text-primary-white"
        >
          Book Consultation
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}

export default function DoctorsPreview() {
  return (
    <section className="section-padding relative overflow-hidden bg-light-bg">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/[0.07] blur-3xl" />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Our Specialists"
          title="Meet Our Doctors"
          description="Board-certified clinicians dedicated to exceptional outcomes across dental, skin, and hair care."
        />

        {/* Mobile: swiper */}
        <div className="md:hidden -mx-1 pb-2">
          <MobileSwiper
            slidesPerView={1.15}
            spaceBetween={20}
            freeMode={false}
            loop
            autoplay={3200}
            centered
            ariaLabel="Meet our doctors"
            breakpoints={{
              360: { slidesPerView: 1.15 },
              430: { slidesPerView: 1.2 },
            }}
          >
            {homeDoctors.map((doctor) => (
              <div key={doctor.id} className="px-1 pb-4 pt-1">
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </MobileSwiper>
        </div>

        {/* Desktop: 3-up grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="hidden md:grid grid-cols-3 gap-8 lg:gap-12"
        >
          {homeDoctors.map((doctor) => (
            <motion.div key={doctor.id} variants={staggerItem}>
              <DoctorCard doctor={doctor} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex w-full justify-center md:mt-16">
          <SecondaryButton
            to="/doctors"
            size="lg"
            className="w-full max-w-[320px] sm:w-auto"
          >
            Meet All Doctors
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
