import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  breadcrumb,
  overlay = true,
  align = 'center',
  children,
  className = '',
  compact = false,
}) {
  const alignClass =
    align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden bg-dark-bg max-w-[100vw]',
        compact ? 'min-h-[36vh] sm:min-h-[40vh] md:min-h-[45vh]' : 'min-h-[42vh] sm:min-h-[50vh] md:min-h-[60vh]',
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <LazyLoadImage
            src={backgroundImage}
            alt={title ? `${title} — Capilla Dental & Aesthetic Center` : 'Capilla clinic'}
            effect="blur"
            className="h-full w-full object-cover"
            wrapperClassName="h-full w-full !block"
          />
          {overlay && <div className="absolute inset-0 bg-hero-overlay" />}
        </div>
      )}

      <div
        className={cn(
          'relative z-10 container-premium flex flex-col justify-end pb-10 sm:pb-12 md:pb-16 pt-[calc(var(--header-height)+1.5rem)] sm:pt-32 md:pt-40',
          compact ? 'min-h-[36vh] sm:min-h-[40vh] md:min-h-[45vh]' : 'min-h-[42vh] sm:min-h-[50vh] md:min-h-[60vh]',
          alignClass
        )}
      >
        {breadcrumb && (
          <div className="mb-4 sm:mb-6 max-w-full overflow-hidden [&_*]:text-primary-white/60">
            {breadcrumb}
          </div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[1.75rem] leading-tight sm:text-4xl md:text-display-md lg:text-display-lg text-primary-white max-w-4xl break-safe"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 sm:mt-4 md:mt-6 text-base md:text-lg font-sans font-light text-primary-white/75 max-w-2xl break-safe"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <div className="mt-6 sm:mt-8 w-full max-w-full flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:justify-center">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
