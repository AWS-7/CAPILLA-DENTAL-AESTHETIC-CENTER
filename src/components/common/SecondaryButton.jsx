import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide border transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 min-h-12 text-base';

const variants = {
  default:
    'border-primary-black/20 text-primary-black bg-transparent hover:border-gold hover:text-gold',
  light:
    'border-primary-white/40 text-primary-white bg-transparent hover:border-gold hover:text-gold',
  gold: 'border-gold text-gold bg-transparent hover:bg-gold hover:text-primary-white',
  filled:
    'border-transparent bg-light-gray text-primary-black hover:bg-gold hover:text-primary-white',
};

const sizes = {
  sm: 'px-5 py-3 text-base rounded-full',
  md: 'px-7 py-3.5 text-base rounded-full',
  lg: 'px-9 py-4 text-base md:text-lg rounded-full',
};

export default function SecondaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'default',
  size = 'md',
  className = '',
  external = false,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], 'max-sm:w-full', className);
  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
  };
  const wrapperClass = cn(
    'inline-flex justify-center max-sm:w-full',
    className.includes('w-full') && 'w-full'
  );

  if (to) {
    return (
      <motion.div {...motionProps} className={wrapperClass}>
        <Link to={to} className={classes} onClick={onClick} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className={wrapperClass}>
        <a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}
