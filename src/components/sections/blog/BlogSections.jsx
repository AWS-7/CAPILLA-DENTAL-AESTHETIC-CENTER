import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Container,
  SectionTitle,
  BlogCard,
  SecondaryButton,
} from '../../common';
import { blogArticles, blogCategories } from '../../../data/blogPage';
import { cn } from '../../../utils/helpers';

const PAGE_SIZE = 6;

export function BlogFeatured() {
  const featured = blogArticles.find((a) => a.featured) || blogArticles[0];
  if (!featured) return null;

  return (
    <section className="pt-16 md:pt-20 bg-primary-white">
      <Container>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-border bg-primary-white shadow-premium"
        >
          <Link to={`/blog/${featured.slug}`} className="grid grid-cols-1 lg:grid-cols-2 group">
            <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
              <motion.div className="h-full w-full" whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }}>
                <LazyLoadImage
                  src={featured.image}
                  alt={featured.title}
                  effect="blur"
                  className="h-full w-full object-cover"
                  wrapperClassName="h-full w-full absolute inset-0 lg:static"
                />
              </motion.div>
              <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-xs uppercase tracking-wider text-primary-white">
                Featured
              </span>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">{featured.category}</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary-black group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 text-base font-light text-dark-bg/55 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-4 flex gap-3 text-xs text-dark-bg/40">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                Read More <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </motion.article>
      </Container>
    </section>
  );
}

export function BlogListing() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return blogArticles.filter((a) => {
      const catOk = category === 'All' || a.category === category;
      const q = query.trim().toLowerCase();
      const qOk =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const slice = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Library"
          title="Latest Articles"
          description="Browse guides by category or search for the topic you need."
        />

        <div className="mb-8 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  category === c
                    ? 'bg-primary-black text-primary-white'
                    : 'bg-primary-white text-dark-bg/65 border border-border hover:border-gold hover:text-gold'
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative w-full lg:w-80">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-bg/35" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search articles..."
              className="w-full rounded-full border border-border bg-primary-white py-3 pl-11 pr-4 text-sm outline-none focus:border-gold"
            />
          </label>
        </div>

        {slice.length === 0 ? (
          <p className="text-center text-dark-bg/50 font-light py-16">No articles match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {slice.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-3">
            <SecondaryButton
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={current === 1 ? 'opacity-40 pointer-events-none' : ''}
            >
              <ChevronLeft size={16} /> Previous
            </SecondaryButton>
            <span className="text-sm text-dark-bg/50">
              {current} / {totalPages}
            </span>
            <SecondaryButton
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className={current === totalPages ? 'opacity-40 pointer-events-none' : ''}
            >
              Next <ChevronRight size={16} />
            </SecondaryButton>
          </div>
        )}
      </Container>
    </section>
  );
}
