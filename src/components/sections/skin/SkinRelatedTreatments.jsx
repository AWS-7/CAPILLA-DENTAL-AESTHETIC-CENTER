import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container, SectionTitle } from '../../common';
import { getRelatedSkinTreatments } from '../../../data/skin';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function SkinRelatedTreatments({ slugs = [] }) {
  const items = getRelatedSkinTreatments(slugs);
  if (!items.length) return null;

  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Explore More"
          title="Related Treatments"
          description="Complementary skin therapies patients often consider alongside this treatment."
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
                className="group block overflow-hidden rounded-[16px] border border-[#e9e0c8] bg-primary-white transition-transform duration-300 hover:-translate-y-2 hover:border-gold/60"
              >
                <div className="p-5 flex h-full flex-col justify-between">
                  <div>
                    {item.category && (
                      <span className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-gold">
                        {item.category}
                      </span>
                    )}

                    <h3 className="mt-3 font-display text-lg text-primary-black group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="mt-2 text-sm font-light text-dark-bg/65 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gold">Explore Treatment</span>
                    <ArrowUpRight size={16} className="text-dark-bg/40 group-hover:text-gold" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
