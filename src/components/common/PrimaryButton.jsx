import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50';

const variants = {
  primary:
    'bg-primary-black text-primary-white hover:bg-gold hover:shadow-gold',
  gold: 'bg-gold text-primary-white hover:bg-gold-dark shadow-gold/50 hover:shadow-gold',
  outline:
    'border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white',
  ghost: 'text-primary-black hover:text-gold',
  white: 'bg-primary-white text-primary-black hover:bg-gold hover:text-primary-white',
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm rounded-full',
  md: 'px-7 py-3.5 text-sm md:text-base rounded-full',
  lg: 'px-9 py-4 text-base md:text-lg rounded-full',
};

export default function PrimaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
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
