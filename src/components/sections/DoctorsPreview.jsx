import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowRight, GraduationCap, Instagram } from 'lucide-react';
import {
  Container,
  SectionTitle,
  SecondaryButton,
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

        <div className="mt-5 flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary-black/15 px-6 py-2.5 text-sm font-medium text-primary-black transition-all duration-300 hover:border-gold hover:bg-gold hover:text-primary-white"
          >
            Book Consultation
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
          {doctor.instagram && (
            <a
              href={doctor.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow ${doctor.name} on Instagram`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-black/15 text-primary-black transition-all duration-300 hover:border-transparent hover:text-primary-white"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)',
                backgroundSize: '0% 100%',
                backgroundRepeat: 'no-repeat',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundSize = '100% 100%')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundSize = '0% 100%')}
            >
              <Instagram size={17} />
            </a>
          )}
        </div>
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
          eyebrow="Our Specialist"
          title="Meet Our Doctor"
          description="Meet Dr. Shakthi Chandran, our celebrity cosmetologist dedicated to refined clinical cosmetology and aesthetic care."
        />

        <div className="mx-auto max-w-[320px] pb-2 md:hidden">
          {homeDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto hidden max-w-[320px] md:grid md:grid-cols-1"
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
