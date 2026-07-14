import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { cn } from '../../utils/helpers';

export default function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 2.4,
  decimals = 0,
  className = '',
  label,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <p className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-black">
        {prefix}
        {inView ? (
          <CountUp end={end} duration={duration} decimals={decimals} />
        ) : (
          0
        )}
        {suffix}
      </p>
      {label && (
        <p className="mt-2 text-sm md:text-base font-light text-dark-bg/55 tracking-wide">
          {label}
        </p>
      )}
    </div>
  );
}
