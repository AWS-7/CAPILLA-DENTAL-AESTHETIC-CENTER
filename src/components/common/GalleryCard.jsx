import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export default function GalleryCard({
  title,
  category,
  image,
  onClick,
  className = '',
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className={cn(
        'group relative block w-full overflow-hidden rounded-3xl aspect-[4/5] text-left focus-visible:outline-none',
        className
      )}
    >
      <motion.div
        className="h-full w-full"
        whileHover={{ scale: 1.08 }}
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
      <div className="absolute inset-0 bg-gradient-to-t from-primary-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
        {category && (
          <span className="text-xs uppercase tracking-widest text-gold-light">{category}</span>
        )}
        {title && (
          <p className="mt-1 font-display text-xl text-primary-white">{title}</p>
        )}
      </div>
    </motion.button>
  );
}
