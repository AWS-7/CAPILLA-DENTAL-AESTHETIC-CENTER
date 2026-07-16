import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Instagram } from 'lucide-react';
import { Container, SectionTitle } from '../common';
import { clinicInfo } from '../../data/clinic';
import { galleryPhotos } from '../../data/gallery';
import { staggerContainer, staggerItem } from '../../utils/animations';

const HANDLE = '@capillaaestheticcentre';
const posts = galleryPhotos.slice(0, 9);

export default function InstagramFeed() {
  const instaUrl = clinicInfo.social.instagram;

  return (
    <section className="section-padding relative overflow-hidden bg-light-bg">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold/[0.08] blur-3xl" />
      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Follow Our Journey"
          title="Capilla on Instagram"
          description="Real results, behind-the-scenes moments, and beauty tips from our specialists."
        />

        <div className="mt-4 flex justify-center">
          <a
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-dark-bg/70 transition-colors hover:text-gold"
          >
            <Instagram size={16} className="text-gold" />
            {HANDLE}
          </a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid grid-cols-3 gap-2 sm:gap-3"
        >
          {posts.map((post) => (
            <motion.a
              key={post.id}
              variants={staggerItem}
              href={instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${post.title} on Instagram`}
              className="group relative block aspect-square overflow-hidden rounded-2xl border border-border bg-primary-white shadow-soft"
            >
              <LazyLoadImage
                src={post.src}
                alt={post.title}
                effect="blur"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                wrapperClassName="h-full w-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-primary-black/55 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                <Instagram size={22} className="text-primary-white" />
                <p className="px-3 text-center text-xs font-medium text-primary-white">
                  {post.title}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-9 flex justify-center">
          <a
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-white shadow-premium transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background:
                'linear-gradient(135deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)',
            }}
          >
            <Instagram size={18} />
            Follow on Instagram
          </a>
        </div>
      </Container>
    </section>
  );
}
