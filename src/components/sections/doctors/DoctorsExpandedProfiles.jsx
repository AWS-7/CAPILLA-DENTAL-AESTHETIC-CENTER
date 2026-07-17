import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Clock, Instagram } from 'lucide-react';
import { Container, SectionTitle, PrimaryButton } from '../../common';
import { doctorProfiles } from '../../../data/doctorsPage';
import { fadeUp } from '../../../utils/animations';
import { cn } from '../../../utils/helpers';

function DetailBlock({ title, children }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold mb-3">
        {title}
      </h4>
      {children}
    </div>
  );
}

export default function DoctorsExpandedProfiles() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Profiles"
          title="Doctor Details"
          description="Education, expertise, and consultation timings — everything you need to choose the right specialist."
        />

        <div className="space-y-10 md:space-y-14">
          {doctorProfiles.map((doctor, index) => (
            <motion.article
              key={doctor.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className={cn(
                'overflow-hidden rounded-3xl border border-border bg-primary-white shadow-soft',
                'grid grid-cols-1 lg:grid-cols-12'
              )}
            >
              <div
                className={cn(
                  'lg:col-span-4 relative min-h-[320px] lg:min-h-[520px]',
                  index % 2 === 1 && 'lg:order-2'
                )}
              >
                <LazyLoadImage
                  src={doctor.image}
                  alt={doctor.name}
                  effect="blur"
                  className="absolute inset-0 h-full w-full object-cover"
                  wrapperClassName="absolute inset-0 h-full w-full"
                />
              </div>

              <div className={cn('lg:col-span-8 p-7 md:p-10', index % 2 === 1 && 'lg:order-1')}>
                <h3 className="font-display text-3xl md:text-4xl text-primary-black">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gold font-medium">
                  {doctor.qualification}
                </p>
                <p className="mt-1 text-sm text-dark-bg/55">{doctor.specialization}</p>
                {doctor.instagram && (
                  <a
                    href={doctor.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-dark-bg/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Instagram size={16} className="text-gold" />
                    @dr.shakthi_chandran
                  </a>
                )}

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <DetailBlock title="Education">
                    <ul className="space-y-2">
                      {doctor.education.map((item) => (
                        <li key={item} className="text-sm font-light text-dark-bg/65 leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </DetailBlock>

                  <DetailBlock title="Experience">
                    <ul className="space-y-2">
                      {doctor.experienceList.map((item) => (
                        <li key={item} className="text-sm font-light text-dark-bg/65 leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </DetailBlock>

                  <DetailBlock title="Areas of Expertise">
                    <div className="flex flex-wrap gap-2">
                      {doctor.expertise.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-light-gray px-3 py-1 text-xs text-dark-bg/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </DetailBlock>

                  <DetailBlock title="Professional Memberships">
                    <ul className="space-y-2">
                      {doctor.memberships.map((item) => (
                        <li key={item} className="text-sm font-light text-dark-bg/65">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </DetailBlock>

                  <DetailBlock title="Certifications">
                    <ul className="space-y-2">
                      {doctor.certifications.map((item) => (
                        <li key={item} className="text-sm font-light text-dark-bg/65">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </DetailBlock>

                  <DetailBlock title="Special Interests">
                    <ul className="space-y-2">
                      {doctor.interests.map((item) => (
                        <li key={item} className="text-sm font-light text-dark-bg/65">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </DetailBlock>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-t border-border pt-6">
                  <DetailBlock title="Consultation Timings">
                    <ul className="space-y-2">
                      {doctor.timings.map((slot) => (
                        <li
                          key={slot.day}
                          className="flex items-center gap-2 text-sm font-light text-dark-bg/70"
                        >
                          <Clock size={14} className="text-gold shrink-0" />
                          <span>
                            <span className="font-medium text-dark-bg/85">{slot.day}:</span>{' '}
                            {slot.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </DetailBlock>
                  <PrimaryButton to="/contact" variant="gold">
                    Book with {doctor.name.split(' ').slice(-1)[0]}
                  </PrimaryButton>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
