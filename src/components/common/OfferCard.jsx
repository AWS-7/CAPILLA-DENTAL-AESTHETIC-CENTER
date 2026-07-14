import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './Card';
import { cn } from '../../utils/helpers';

export default function OfferCard({
  title,
  description,
  discount,
  validUntil,
  image,
  path = '/contact',
  className = '',
}) {
  return (
    <Card padding={false} className={cn('group', className)}>
      <Link to={path} className="block h-full">
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
          {discount && (
            <span className="absolute top-4 right-4 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-white shadow-gold">
              {discount}
            </span>
          )}
        </div>
        <div className="p-6 md:p-7">
          <h3 className="font-display text-xl md:text-2xl text-primary-black group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="mt-3 text-sm font-light text-dark-bg/60 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
          <div className="mt-5 flex items-center justify-between">
            {validUntil && (
              <span className="text-xs text-dark-bg/45">Valid until {validUntil}</span>
            )}
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold">
              Claim Offer <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
