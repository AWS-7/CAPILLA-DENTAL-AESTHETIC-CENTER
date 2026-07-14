import { Star } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Card from './Card';
import { cn } from '../../utils/helpers';

export default function ReviewCard({
  name,
  rating = 5,
  text,
  date,
  avatar,
  className = '',
}) {
  return (
    <Card className={cn('flex flex-col', className)}>
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-gold text-gold' : 'text-border'}
          />
        ))}
      </div>
      <p className="font-display text-lg md:text-xl italic leading-relaxed text-dark-bg/80 flex-1">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
        {avatar && (
          <LazyLoadImage
            src={avatar}
            alt={name}
            effect="blur"
            className="h-11 w-11 rounded-full object-cover"
            wrapperClassName="h-11 w-11 shrink-0 rounded-full overflow-hidden"
          />
        )}
        <div>
          <p className="font-sans font-medium text-primary-black text-sm">{name}</p>
          {date && <p className="text-xs text-dark-bg/45 mt-0.5">{date}</p>}
        </div>
      </div>
    </Card>
  );
}
