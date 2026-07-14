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
        'mx-auto w-full px-5 md:px-8',
        narrow ? 'max-w-narrow' : 'max-w-container',
        className
      )}
    >
      {children}
    </Component>
  );
}
