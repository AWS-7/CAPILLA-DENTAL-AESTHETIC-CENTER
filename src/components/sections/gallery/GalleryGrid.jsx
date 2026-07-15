import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { Container, SectionTitle } from '../../common';
import { galleryPhotos } from '../../../data/gallery';

function PhotoCard({ photo, onOpen }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative mb-3 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-light-bg shadow-soft sm:mb-5 sm:rounded-3xl"
    >
      <button
        type="button"
        onClick={() => onOpen(photo)}
        className="block w-full text-left"
        aria-label={`View ${photo.title}`}
      >
        <LazyLoadImage
          src={photo.src}
          alt={photo.title}
          effect="blur"
          className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          wrapperClassName="block w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:p-5">
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-gold">
              {photo.category}
            </p>
            <p className="mt-1 truncate font-display text-lg text-primary-white sm:text-xl">
              {photo.title}
            </p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-white/15 text-primary-white backdrop-blur-sm">
            <Expand size={15} />
          </span>
        </figcaption>
      </button>
    </motion.figure>
  );
}

function Lightbox({ photo, onClose, onPrev, onNext }) {
  if (!photo) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-primary-black/95 p-4 md:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary-white/10 text-primary-white transition-colors hover:bg-gold"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <button
          type="button"
          aria-label="Previous photo"
          className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary-white/10 text-primary-white transition-colors hover:bg-gold md:left-8"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          aria-label="Next photo"
          className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary-white/10 text-primary-white transition-colors hover:bg-gold md:right-8"
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
          className="flex max-h-full w-full max-w-4xl flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={photo.src}
            alt={photo.title}
            className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-premium"
          />
          <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            {photo.category}
          </p>
          <p className="mt-1 text-center font-display text-2xl text-primary-white">
            {photo.title}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GalleryGrid() {
  const [active, setActive] = useState(null);

  const openIndex = galleryPhotos.findIndex((p) => p.id === active?.id);

  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Gallery"
          title="Inside Our Clinic"
          description="A look at the spaces, technology, and details that shape the Capilla experience in Perumbakkam."
        />

        <div className="columns-2 gap-3 sm:gap-5 lg:columns-3">
          {galleryPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} onOpen={setActive} />
          ))}
        </div>
      </Container>

      {active && (
        <Lightbox
          photo={active}
          onClose={() => setActive(null)}
          onPrev={() =>
            setActive(
              galleryPhotos[
                (openIndex - 1 + galleryPhotos.length) % galleryPhotos.length
              ]
            )
          }
          onNext={() =>
            setActive(galleryPhotos[(openIndex + 1) % galleryPhotos.length])
          }
        />
      )}
    </section>
  );
}
