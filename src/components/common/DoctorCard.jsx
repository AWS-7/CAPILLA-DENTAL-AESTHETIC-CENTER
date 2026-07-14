import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import Card from './Card';
import { cn } from '../../utils/helpers';

export default function DoctorCard({
  name,
  role,
  specialty,
  experience,
  image,
  className = '',
}) {
  return (
    <Card padding={false} className={cn('group', className)}>
      <div className="relative aspect-[3/4] overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <LazyLoadImage
            src={image}
            alt={name}
            effect="blur"
            className="h-full w-full object-cover"
            wrapperClassName="h-full w-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-primary-black/20 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-white">
          <h3 className="font-display text-2xl md:text-[1.75rem]">{name}</h3>
          <p className="mt-1 text-sm text-gold-light font-medium">{role}</p>
          {specialty && (
            <p className="mt-2 text-sm font-light text-primary-white/70">{specialty}</p>
          )}
          {experience && (
            <p className="mt-3 inline-block rounded-full border border-primary-white/20 px-3 py-1 text-xs tracking-wide text-primary-white/80">
              {experience}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
