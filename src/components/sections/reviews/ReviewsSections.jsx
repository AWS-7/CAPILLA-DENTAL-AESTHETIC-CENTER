import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Container,
  SectionTitle,
  AnimatedCounter,
  PrimaryButton,
  SecondaryButton,
  Card,
  MobileSwiper,
} from '../../common';
import {
  reviewsStats,
  googleReviewsList,
} from '../../../data/reviewsPage';
import { clinicInfo } from '../../../data/clinic';
import { staggerContainer, staggerItem } from '../../../utils/animations';

export function ReviewsRatingBoard() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Google"
          title="Google Rating"
          description="Verified patient feedback reflecting trust in Capilla’s dental, skin, and hair care."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="rounded-3xl border border-border bg-light-bg p-6 text-center shadow-soft col-span-2 md:col-span-1">
            <p className="font-display text-5xl text-primary-black">{reviewsStats.rating}</p>
            <div className="mt-2 flex justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-2 text-sm text-dark-bg/50">Average Rating</p>
          </div>
          <div className="rounded-3xl border border-border bg-light-bg p-6 shadow-soft">
            <AnimatedCounter end={reviewsStats.totalReviews} suffix="+" label="Total Reviews" />
          </div>
          <div className="rounded-3xl border border-border bg-light-bg p-6 shadow-soft">
            <AnimatedCounter end={reviewsStats.fiveStarPercent} suffix="%" label="Five-Star Ratings" />
          </div>
          <div className="rounded-3xl border border-border bg-light-bg p-6 text-center shadow-soft">
            <p className="font-display text-4xl text-gold">★★★★★</p>
            <p className="mt-2 text-sm font-medium text-primary-black">Google Verified</p>
            <p className="mt-1 text-sm text-dark-bg/50">Business Profile</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ReviewsCards() {
  const ReviewItem = ({ review }) => (
    <Card className="h-full min-h-[240px] flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < review.rating ? 'fill-gold text-gold' : 'text-border'}
          />
        ))}
      </div>
      <p className="font-display text-lg italic leading-relaxed text-dark-bg/80 flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
        <LazyLoadImage
          src={review.avatar}
          alt={review.name}
          effect="blur"
          className="h-11 w-11 rounded-full object-cover"
          wrapperClassName="h-11 w-11 rounded-full overflow-hidden shrink-0"
        />
        <div>
          <p className="text-sm font-medium text-primary-black">{review.name}</p>
          <p className="text-xs text-gold mt-0.5">{review.treatment}</p>
          <p className="text-xs text-dark-bg/40 mt-0.5">{review.date}</p>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Voices"
          title="Patient Reviews"
          description="Stories from patients across Perumbakkam who trust Capilla for lasting results."
        />

        <div className="md:hidden -mx-1">
          <MobileSwiper
            slidesPerView={1.15}
            spaceBetween={14}
            freeMode
            loop
            ariaLabel="Patient reviews"
            breakpoints={{
              360: { slidesPerView: 1.15 },
              430: { slidesPerView: 1.2 },
            }}
          >
            {googleReviewsList.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </MobileSwiper>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {googleReviewsList.map((review) => (
            <motion.div key={review.id} variants={staggerItem}>
              <ReviewItem review={review} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export function ReviewsWriteCta() {
  return (
    <section className="pb-8 bg-primary-white">
      <Container className="text-center">
        <SecondaryButton href={clinicInfo.social.google} external variant="gold" size="lg">
          Write a Google Review
          <ExternalLink size={16} />
        </SecondaryButton>
        <div className="mt-4">
          <PrimaryButton to="/contact" variant="primary">
            Book Appointment
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
