import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import {
  Container,
  BlogCard,
  PrimaryButton,
} from '../../common';
import DentalFAQ from '../dental/DentalFAQ';
import {
  getRelatedArticles,
  getAdjacentArticles,
} from '../../../data/blogPage';
import { fadeUp } from '../../../utils/animations';

export default function BlogArticleBody({ article }) {
  const related = getRelatedArticles(article.slug, article.category);
  const { prev, next } = getAdjacentArticles(article.slug);
  const shareUrl = `https://capillaaesthetic.com/blog/${article.slug}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <section className="section-padding bg-primary-white">
        <Container narrow>
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="prose-cap"
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-dark-bg/65">
              {article.content.intro}
            </p>

            {article.content.sections.map((section) => (
              <div key={section.heading} className="mt-12">
                <h2 className="font-display text-3xl md:text-4xl text-primary-black">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="mt-4 text-base md:text-lg font-light leading-relaxed text-dark-bg/60"
                  >
                    {p}
                  </p>
                ))}
                {section.list?.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-base font-light text-dark-bg/70"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.quote && (
                  <blockquote className="mt-8 border-l-2 border-gold pl-6 font-display text-xl md:text-2xl italic text-dark-bg/80">
                    {section.quote}
                  </blockquote>
                )}
                {section.heading === article.content.sections[0]?.heading && (
                  <div className="mt-10 overflow-hidden rounded-3xl">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/9] object-cover"
                    />
                  </div>
                )}
              </div>
            ))}

            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
              <p className="text-sm text-dark-bg/45 mr-2">Share</p>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-dark-bg/50 hover:border-gold hover:text-gold"
                aria-label="Share on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-dark-bg/50 hover:border-gold hover:text-gold"
                aria-label="Share on Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-dark-bg/50 hover:border-gold hover:text-gold"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <button
                type="button"
                onClick={copyLink}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-dark-bg/50 hover:border-gold hover:text-gold"
                aria-label="Copy link"
              >
                <LinkIcon size={16} />
              </button>
            </div>
          </motion.article>
        </Container>
      </section>

      {article.content.faqs?.length > 0 && (
        <DentalFAQ
          faqs={article.content.faqs}
          title="Article FAQs"
          description="Quick answers related to this guide."
        />
      )}

      <section className="section-padding bg-light-bg">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <h2 className="font-display text-3xl text-primary-black">Related Articles</h2>
            <PrimaryButton to="/blog" size="sm" variant="primary">
              All Articles
            </PrimaryButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-10">
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="rounded-2xl border border-border bg-primary-white p-5 hover:border-gold transition-colors group"
              >
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-dark-bg/40">
                  <ArrowLeft size={14} /> Previous
                </span>
                <p className="mt-2 font-display text-lg text-primary-black group-hover:text-gold transition-colors">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className="rounded-2xl border border-border bg-primary-white p-5 hover:border-gold transition-colors group text-right sm:text-right"
              >
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-dark-bg/40 ml-auto">
                  Next <ArrowRight size={14} />
                </span>
                <p className="mt-2 font-display text-lg text-primary-black group-hover:text-gold transition-colors">
                  {next.title}
                </p>
              </Link>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}
