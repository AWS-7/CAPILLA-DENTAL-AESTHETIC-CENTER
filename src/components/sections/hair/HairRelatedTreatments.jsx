import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowUpRight } from 'lucide-react';
import { Container, SectionTitle } from '../../common';
import { getRelatedHairTreatments } from '../../../data/hair';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function HairRelatedTreatments({ slugs = [] }) {
  const items = getRelatedHairTreatments(slugs);
  if (!items.length) return null;

  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Explore More"
          title="Related Treatments"
          description="Complementary hair therapies patients often consider alongside this treatment."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <motion.div key={item.slug} variants={staggerItem}>
              <Link
                to={item.path}
                className="group block overflow-hidden rounded-3xl border border-border bg-primary-white shadow-soft hover:shadow-premium transition-shadow"
              >
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
                <div className="p-6 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl text-primary-black group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light text-dark-bg/55 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-dark-bg/30 group-hover:text-gold" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
