import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Container, SectionTitle, SecondaryButton } from '../common';
import { blogPosts } from '../../data/content';

const rowMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function ArticleRow({ post, index }) {
  return (
    <motion.article variants={rowMotion} className="group">
      <Link
        to={`/blog/${post.slug}`}
        className="grid grid-cols-[1fr_auto] items-center gap-5 border-b border-border py-6 transition-colors duration-300 first:border-t sm:gap-8 md:grid-cols-[72px_1fr_200px] md:py-8"
      >
        {/* Index number */}
        <span className="hidden font-display text-4xl leading-none text-dark-bg/15 transition-colors duration-300 group-hover:text-gold md:block lg:text-5xl">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Content */}
        <div className="min-w-0">
          <div className="mb-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] md:text-xs">
            <span className="rounded-full border border-gold/30 bg-gold/[0.08] px-3 py-0.5 font-medium uppercase tracking-[0.14em] text-gold">
              {post.category}
            </span>
            <span className="text-dark-bg/40">{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-dark-bg/20" />
            <span className="text-dark-bg/40">{post.readTime}</span>
          </div>

          <h3 className="font-display text-xl leading-snug text-primary-black transition-colors duration-300 group-hover:text-gold sm:text-2xl lg:text-3xl">
            {post.title}
          </h3>

          <p className="mt-2 hidden max-w-2xl text-sm font-light leading-relaxed text-dark-bg/55 sm:block">
            {post.excerpt}
          </p>

          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-gold sm:text-sm">
            Read Article
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>

        {/* Thumbnail */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-36 md:h-32 md:w-full md:rounded-[1.25rem]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-primary-black/10 transition-opacity duration-300 group-hover:opacity-0" />
          <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary-white/90 text-primary-black opacity-0 shadow-soft backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight size={15} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export default function BlogPreview() {
  return (
    <section className="section-padding relative overflow-hidden bg-primary-white">
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-gold/[0.06] blur-3xl" />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Insights"
          title="Latest Articles"
          description="Expert guidance on dental health, skin rejuvenation, and hair restoration from our specialists."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {blogPosts.map((post, index) => (
            <ArticleRow key={post.id} post={post} index={index} />
          ))}
        </motion.div>

        <div className="mt-10 flex w-full justify-center md:mt-12">
          <SecondaryButton
            to="/blog"
            size="lg"
            className="w-full max-w-[320px] sm:w-auto"
          >
            View All Articles
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
