import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = true,
  as: Component = 'div',
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Component
        className={cn(
          'h-full rounded-3xl bg-primary-white border border-border shadow-soft overflow-hidden transition-shadow duration-300',
          hover && 'hover:shadow-premium',
          padding && 'p-6 md:p-8',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
