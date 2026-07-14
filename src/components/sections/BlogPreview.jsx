import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowRight } from 'lucide-react';
import {
  Container,
  SectionTitle,
  BlogCard,
  SecondaryButton,
  MobileSwiper,
} from '../common';
import { blogPosts } from '../../data/content';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function BlogPreview() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Insights"
          title="Latest Articles"
          description="Expert guidance on dental health, skin rejuvenation, and hair restoration from our specialists."
          align="center"
          className="mx-auto w-full max-w-3xl"
        />

        {/* Mobile: Swiper ~1.2 cards */}
        <div className="lg:hidden -mx-1">
          <MobileSwiper
            slidesPerView={1.2}
            spaceBetween={14}
            freeMode
            ariaLabel="Latest blog posts"
            breakpoints={{
              360: { slidesPerView: 1.15 },
              430: { slidesPerView: 1.25 },
            }}
          >
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </MobileSwiper>
        </div>

        {/* Desktop: featured + sidebar (unchanged) */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 group overflow-hidden rounded-3xl border border-border bg-primary-white shadow-soft hover:shadow-premium transition-shadow"
            >
              <Link to={`/blog/${featured.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <LazyLoadImage
                      src={featured.image}
                      alt={featured.title}
                      effect="blur"
                      className="h-full w-full object-cover"
                      wrapperClassName="h-full w-full"
                    />
                  </motion.div>
                  <span className="absolute top-4 left-4 rounded-full bg-primary-black/80 px-3 py-1 text-xs uppercase tracking-wider text-primary-white backdrop-blur-sm">
                    Featured · {featured.category}
                  </span>
                </div>
                <div className="p-7 md:p-9">
                  <div className="flex items-center gap-3 text-xs text-dark-bg/45 mb-3">
                    <span>{featured.date}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{featured.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-primary-black group-hover:text-gold transition-colors">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-base font-light text-dark-bg/55 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.article>
          )}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {rest.map((post) => (
              <motion.div key={post.id} variants={staggerItem}>
                <BlogCard {...post} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 flex w-full justify-center text-center">
          <SecondaryButton to="/blog" size="lg" className="w-full sm:w-auto">
            View All Articles
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
