import { cn } from '../../utils/helpers';

export default function Container({
  children,
  className = '',
  as: Component = 'div',
  narrow = false,
}) {
  return (
    <Component
      className={cn(
        'mx-auto w-full',
        narrow ? 'max-w-narrow' : 'max-w-container',
        'px-4 sm:px-5 md:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
}
