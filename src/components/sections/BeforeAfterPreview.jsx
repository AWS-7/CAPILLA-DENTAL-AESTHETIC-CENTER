import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, SectionTitle, PrimaryButton } from '../common';
import { beforeAfterItems } from '../../data/home';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function BeforeAfterPreview() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Transformations"
          title="Before & After Preview"
          description="Discreet results that speak for themselves — dental, skin, and hair transformations crafted with clinical artistry."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8"
        >
          {beforeAfterItems.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <article className="overflow-hidden rounded-3xl border border-border bg-light-bg shadow-soft">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4] overflow-hidden border-r border-border">
                    <LazyLoadImage
                      src={item.before}
                      alt={`${item.title} before`}
                      effect="blur"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-primary-black/75 px-3 py-1 text-[10px] uppercase tracking-widest text-primary-white backdrop-blur-sm">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <motion.div
                      className="h-full w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
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
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-primary-black">
                    {item.title}
                  </h3>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <PrimaryButton to="/gallery" variant="primary" size="lg">
            View Gallery
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
