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
        'relative w-full overflow-hidden bg-dark-bg',
        compact ? 'min-h-[40vh] md:min-h-[45vh]' : 'min-h-[50vh] md:min-h-[60vh]',
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <LazyLoadImage
            src={backgroundImage}
            alt=""
            effect="blur"
            className="h-full w-full object-cover"
            wrapperClassName="h-full w-full"
          />
          {overlay && <div className="absolute inset-0 bg-hero-overlay" />}
        </div>
      )}

      <div
        className={cn(
          'relative z-10 container-premium flex flex-col justify-end pb-12 md:pb-16 pt-32 md:pt-40',
          compact ? 'min-h-[40vh] md:min-h-[45vh]' : 'min-h-[50vh] md:min-h-[60vh]',
          alignClass
        )}
      >
        {breadcrumb && <div className="mb-6 [&_*]:text-primary-white/60">{breadcrumb}</div>}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-display-md lg:text-display-lg text-primary-white max-w-4xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 md:mt-6 text-base md:text-lg font-sans font-light text-primary-white/75 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
