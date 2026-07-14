import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, SectionTitle, PrimaryButton } from '../../common';
import { dentalBeforeAfter } from '../../../data/dental';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function DentalBeforeAfter({
  items = dentalBeforeAfter,
  eyebrow = 'Transformations',
  title = 'Before & After Preview',
  description = 'A glimpse of smile transformations crafted with clinical artistry at Capilla.',
  showGalleryButton = true,
}) {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <article className="overflow-hidden rounded-3xl border border-border bg-primary-white shadow-soft">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4] border-r border-border overflow-hidden">
                    <LazyLoadImage
                      src={item.before}
                      alt={`${item.title} before`}
                      effect="blur"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-primary-black/75 px-3 py-1 text-[10px] uppercase tracking-widest text-primary-white">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <motion.div className="h-full w-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                      <LazyLoadImage
                        src={item.after}
                        alt={`${item.title} after`}
                        effect="blur"
                        className="h-full w-full object-cover"
                        wrapperClassName="h-full w-full"
                      />
                    </motion.div>
                    <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-widest text-primary-white">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-5 text-center">
                  {item.category && (
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">{item.category}</p>
                  )}
                  <h3 className="mt-1 font-display text-xl text-primary-black">{item.title}</h3>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
        {showGalleryButton && (
          <div className="mt-12 text-center">
            <PrimaryButton to="/gallery" variant="primary" size="lg">
              View Full Gallery
            </PrimaryButton>
          </div>
        )}
      </Container>
    </section>
  );
}
