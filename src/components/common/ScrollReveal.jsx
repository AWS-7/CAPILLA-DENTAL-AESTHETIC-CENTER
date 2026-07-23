import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../../utils/animations';
import { cn } from '../../utils/helpers';

export default function ScrollReveal({
  children,
  variants = fadeUp,
  className = '',
  delay = 0,
  once = true,
  amount = 0.1,
  as: Component = motion.div,
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: amount });

  return (
    <Component
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
