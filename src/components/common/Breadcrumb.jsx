import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../utils/helpers';

export default function Breadcrumb({ items = [], className = '' }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn('w-full', className)}>
      <ol className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-sans text-dark-bg/50">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-gold"
            aria-label="Home"
          >
            <Home size={14} />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1 sm:gap-1.5 min-w-0">
              <ChevronRight size={14} className="text-dark-bg/30 shrink-0" aria-hidden />
              {isLast || !item.path ? (
                <span
                  className="text-dark-bg/80 font-medium truncate max-w-[11rem] sm:max-w-none"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="transition-colors hover:text-gold truncate max-w-[8rem] sm:max-w-none">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
