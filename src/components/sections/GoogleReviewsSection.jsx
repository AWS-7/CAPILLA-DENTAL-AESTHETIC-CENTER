import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import {
  Container,
  SectionTitle,
  ReviewCard,
  AnimatedCounter,
  PrimaryButton,
  SecondaryButton,
} from '../common';
import { reviews } from '../../data/content';
import { reviewStats } from '../../data/home';
import { clinicInfo } from '../../data/clinic';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function GoogleReviewsSection() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Social Proof"
          title="Google Reviews"
          description="Trusted by patients across Perumbakkam and Chennai who value discretion, comfort, and measurable results."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <div className="rounded-3xl border border-border bg-primary-white p-6 text-center shadow-soft">
            <p className="font-display text-4xl md:text-5xl text-primary-black">
              {reviewStats.rating}
            </p>
            <div className="mt-2 flex items-center justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-2 text-sm font-light text-dark-bg/50">Google Rating</p>
          </div>
          <div className="rounded-3xl border border-border bg-primary-white p-6 shadow-soft">
            <AnimatedCounter
              end={reviewStats.totalReviews}
              suffix="+"
              label="Patient Reviews"
            />
          </div>
          <div className="rounded-3xl border border-border bg-primary-white p-6 shadow-soft">
            <AnimatedCounter
              end={reviewStats.fiveStarPercent}
              suffix="%"
              label="Five-Star Ratings"
            />
          </div>
          <div className="rounded-3xl border border-border bg-primary-white p-6 text-center shadow-soft">
            <p className="font-display text-4xl md:text-5xl text-gold">★</p>
            <p className="mt-2 text-sm font-medium text-primary-black">Verified</p>
            <p className="mt-1 text-sm font-light text-dark-bg/50">Google Business</p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={staggerItem}>
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton to="/reviews" variant="primary">
            View All Reviews
          </PrimaryButton>
          <SecondaryButton
            href={clinicInfo.social.google}
            external
            variant="gold"
          >
            Write a Review
            <ExternalLink size={14} />
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
