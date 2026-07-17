import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Check, ArrowRight } from 'lucide-react';
import {
  Container,
  SectionTitle,
  PrimaryButton,
  SecondaryButton,
} from '../../common';
import { skinTreatmentsList } from '../../../data/skin';
import { staggerItem } from '../../../utils/animations';

export default function SkinTreatmentOverview() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Our Services"
          title="Skin Treatment Overview"
          description="Medical-grade aesthetics for glow, texture, and timeless skin — serving Perumbakkam, Medavakkam, and Sholinganallur."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {skinTreatmentsList.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-primary-white shadow-soft hover:shadow-premium transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.div className="h-full w-full" whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }}>
                    <LazyLoadImage
                      src={item.image}
                      alt={item.title}
                      effect="blur"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </motion.div>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-xl md:text-2xl text-primary-black group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-dark-bg/55 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm font-light text-dark-bg/70">
                        <Check size={14} className="mt-0.5 shrink-0 text-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <SecondaryButton to={item.path} size="sm">
                      Learn More
                    </SecondaryButton>
                    <PrimaryButton to="/contact" size="sm" variant="gold">
                      Book Appointment
                      <ArrowRight size={14} />
                    </PrimaryButton>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
