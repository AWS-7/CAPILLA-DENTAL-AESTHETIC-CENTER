import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './Card';
import { cn } from '../../utils/helpers';

export default function BlogCard({
  title,
  excerpt,
  image,
  slug,
  category,
  date,
  readTime,
  className = '',
}) {
  return (
    <Card padding={false} className={cn('group', className)}>
      <Link to={`/blog/${slug}`} className="block h-full">
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            className="h-full w-full"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <LazyLoadImage
              src={image}
              alt={title}
              effect="blur"
              className="h-full w-full object-cover"
              wrapperClassName="h-full w-full"
            />
          </motion.div>
          {category && (
            <span className="absolute top-4 left-4 rounded-full bg-primary-black/80 backdrop-blur-sm px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-white">
              {category}
            </span>
          )}
        </div>
        <div className="p-6 md:p-7">
          <div className="flex items-center gap-3 text-xs text-dark-bg/45 mb-3">
            {date && <span>{date}</span>}
            {date && readTime && <span className="h-1 w-1 rounded-full bg-border" />}
            {readTime && <span>{readTime}</span>}
          </div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl md:text-2xl text-primary-black group-hover:text-gold transition-colors duration-300 line-clamp-2">
              {title}
            </h3>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-dark-bg/30 group-hover:text-gold transition-colors"
            />
          </div>
          {excerpt && (
            <p className="mt-3 text-sm font-light text-dark-bg/60 leading-relaxed line-clamp-2">
              {excerpt}
            </p>
          )}
        </div>
      </Link>
    </Card>
  );
}
