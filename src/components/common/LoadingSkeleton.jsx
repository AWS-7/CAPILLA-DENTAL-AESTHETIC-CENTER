import { cn } from '../../utils/helpers';

function Bone({ className = '' }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-2xl bg-light-gray',
        className
      )}
    />
  );
}

export default function LoadingSkeleton({ variant = 'card', className = '' }) {
  if (variant === 'hero') {
    return (
      <div className={cn('w-full space-y-4', className)}>
        <Bone className="h-4 w-32" />
        <Bone className="h-12 w-3/4" />
        <Bone className="h-5 w-1/2" />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={cn('space-y-3', className)}>
        <Bone className="h-4 w-full" />
        <Bone className="h-4 w-5/6" />
        <Bone className="h-4 w-4/6" />
      </div>
    );
  }

  if (variant === 'doctor') {
    return (
      <div className={cn('overflow-hidden rounded-3xl border border-border', className)}>
        <Bone className="aspect-[3/4] w-full rounded-none" />
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className={cn('space-y-4', className)}>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-4">
            <Bone className="h-20 w-20 shrink-0 rounded-2xl" />
            <div className="flex-1 space-y-2 py-1">
              <Bone className="h-4 w-2/3" />
              <Bone className="h-3 w-full" />
              <Bone className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('overflow-hidden rounded-3xl border border-border', className)}>
      <Bone className="aspect-[4/3] w-full rounded-none" />
      <div className="space-y-3 p-6">
        <Bone className="h-5 w-2/3" />
        <Bone className="h-4 w-full" />
        <Bone className="h-4 w-4/5" />
      </div>
    </div>
  );
}

export { Bone };
