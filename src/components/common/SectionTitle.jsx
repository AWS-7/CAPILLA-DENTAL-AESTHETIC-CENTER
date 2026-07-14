import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';
import { cn } from '../../utils/helpers';

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn('flex flex-col max-w-3xl mb-12 md:mb-16', alignClass, className)}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-4 text-xs md:text-sm font-sans font-medium uppercase tracking-[0.2em]',
            light ? 'text-gold-light' : 'text-gold'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-display text-display-sm md:text-display-md lg:text-[3.25rem] leading-tight',
          light ? 'text-primary-white' : 'text-primary-black'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-base md:text-lg font-sans font-light leading-relaxed max-w-2xl',
            light ? 'text-primary-white/70' : 'text-dark-bg/60',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
