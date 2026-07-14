import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './Card';
import { cn } from '../../utils/helpers';

export default function TreatmentCard({
  title,
  description,
  image,
  path,
  category,
  className = '',
}) {
  return (
    <Card padding={false} className={cn('group', className)}>
      <Link to={path || '#'} className="block h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
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
            <span className="absolute top-4 left-4 rounded-full bg-primary-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium uppercase tracking-wider text-dark-bg">
              {category}
            </span>
          )}
        </div>
        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl md:text-2xl text-primary-black group-hover:text-gold transition-colors duration-300">
              {title}
            </h3>
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-dark-bg/50 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-primary-white">
              <ArrowUpRight size={16} />
            </span>
          </div>
          {description && (
            <p className="mt-3 text-sm md:text-base font-light text-dark-bg/60 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </Link>
    </Card>
  );
}
