import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Star } from 'lucide-react';
import { Container, SectionTitle, Card } from '../../common';
import { gallerySuccessStories } from '../../../data/gallery';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export default function GallerySuccessStories() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Outcomes"
          title="Patient Success Stories"
          description="Treatment journeys with timelines, results, and words from our patients."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {gallerySuccessStories.map((story) => (
            <motion.div key={story.id} variants={staggerItem}>
              <Card className="h-full !p-0 overflow-hidden">
                <div className="flex items-center gap-4 p-6 border-b border-border">
                  <LazyLoadImage
                    src={story.image}
                    alt={story.name}
                    effect="blur"
                    className="h-14 w-14 rounded-full object-cover"
                    wrapperClassName="h-14 w-14 rounded-full overflow-hidden shrink-0"
                  />
                  <div>
                    <p className="font-medium text-primary-black">{story.name}</p>
                    <p className="text-sm text-gold">{story.treatment}</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-dark-bg/40">Duration</p>
                      <p className="mt-1 font-medium text-dark-bg/80">{story.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-dark-bg/40">Results</p>
                      <p className="mt-1 font-light text-dark-bg/70 leading-relaxed">{story.results}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-display text-lg italic text-dark-bg/75 leading-relaxed">
                    &ldquo;{story.review}&rdquo;
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
