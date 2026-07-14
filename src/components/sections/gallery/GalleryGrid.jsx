import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, SectionTitle } from '../../common';
import { galleryFilters, galleryTransformations } from '../../../data/gallery';
import { cn } from '../../../utils/helpers';

function ComparisonCard({ item, onOpen }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);

  const update = (clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos((x / rect.width) * 100);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-primary-white shadow-soft',
        item.span === 'tall' && 'md:row-span-2',
        item.span === 'wide' && 'md:col-span-2'
      )}
    >
      <div
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden cursor-ew-resize select-none',
          item.span === 'tall'
            ? 'aspect-[3/4] md:h-full md:aspect-auto md:min-h-[480px]'
            : 'aspect-square sm:aspect-[4/3]'
        )}
        onMouseDown={() => {
          dragging.current = true;
        }}
        onMouseUp={() => {
          dragging.current = false;
        }}
        onMouseLeave={() => {
          dragging.current = false;
        }}
        onMouseMove={(e) => dragging.current && update(e.clientX)}
        onTouchMove={(e) => update(e.touches[0].clientX)}
        onClick={() => onOpen(item)}
      >
        <LazyLoadImage
          src={item.after}
          alt={`${item.title} after`}
          effect="blur"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          wrapperClassName="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <LazyLoadImage
            src={item.before}
            alt={`${item.title} before`}
            effect="blur"
            className="absolute inset-0 h-full max-w-none object-cover"
            wrapperClassName="absolute inset-0 h-full w-full"
            style={{ width: ref.current ? `${ref.current.offsetWidth}px` : '100%' }}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gold shadow-gold z-10"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-primary-white text-[10px] font-semibold">
            ↔
          </span>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-primary-black/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-primary-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[10px] uppercase tracking-wider text-primary-white">
          After
        </span>
      </div>
      <div className="p-3 sm:p-4 md:p-5 flex items-center justify-between gap-2 sm:gap-3">
        <div className="min-w-0">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.16em] text-gold">{item.category}</p>
          <h3 className="mt-1 font-display text-sm sm:text-lg md:text-xl text-primary-black truncate sm:whitespace-normal">
            {item.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => onOpen(item)}
          className="text-xs font-medium text-dark-bg/50 hover:text-gold transition-colors"
        >
          Expand
        </button>
      </div>
    </motion.article>
  );
}

function Lightbox({ item, onClose, onPrev, onNext }) {
  if (!item) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-primary-black/90 p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary-white/10 text-primary-white hover:bg-gold"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <button
          type="button"
          aria-label="Previous"
          className="absolute left-4 md:left-8 flex h-11 w-11 items-center justify-center rounded-full bg-primary-white/10 text-primary-white hover:bg-gold"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          aria-label="Next"
          className="absolute right-4 md:right-8 flex h-11 w-11 items-center justify-center rounded-full bg-primary-white/10 text-primary-white hover:bg-gold"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ChevronRight size={22} />
        </button>
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="grid w-full max-w-5xl grid-cols-2 gap-2 md:gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="overflow-hidden rounded-2xl">
            <img src={item.before} alt="Before" className="h-full w-full object-cover max-h-[70vh]" />
            <p className="mt-2 text-center text-xs uppercase tracking-widest text-primary-white/60">Before</p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={item.after} alt="After" className="h-full w-full object-cover max-h-[70vh]" />
            <p className="mt-2 text-center text-xs uppercase tracking-widest text-gold">After</p>
          </div>
          <p className="col-span-2 text-center font-display text-2xl text-primary-white mt-2">
            {item.title}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GalleryGrid() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const filtered =
    filter === 'All'
      ? galleryTransformations
      : galleryTransformations.filter((i) => i.category === filter);

  const openIndex = filtered.findIndex((i) => i.id === active?.id);

  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Gallery"
          title="Before & After Gallery"
          description="Drag each comparison slider or expand for a larger view of patient transformations."
        />

        <div className="mb-8 sm:mb-10 chip-scroll sm:flex-wrap sm:justify-center">
          {galleryFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'shrink-0 rounded-full px-4 sm:px-5 py-2.5 text-sm font-medium transition-all duration-300 min-h-11',
                filter === f
                  ? 'bg-primary-black text-primary-white shadow-soft'
                  : 'bg-light-gray text-dark-bg/70 hover:bg-gold hover:text-primary-white'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5 md:gap-6 auto-rows-auto"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <ComparisonCard key={item.id} item={item} onOpen={setActive} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {active && (
        <Lightbox
          item={active}
          onClose={() => setActive(null)}
          onPrev={() => {
            const prev = filtered[(openIndex - 1 + filtered.length) % filtered.length];
            setActive(prev);
          }}
          onNext={() => {
            const next = filtered[(openIndex + 1) % filtered.length];
            setActive(next);
          }}
        />
      )}
    </section>
  );
}
