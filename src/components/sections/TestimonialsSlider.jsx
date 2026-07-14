import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Star } from 'lucide-react';
import { Container, SectionTitle } from '../common';
import { testimonials } from '../../data/home';

export default function TestimonialsSlider() {
  return (
    <section className="section-padding bg-dark-bg overflow-hidden">
      <Container>
        <SectionTitle
          eyebrow="Patient Stories"
          title="Testimonials"
          description="Real experiences from patients who chose Capilla for their smile, skin, and hair journey."
          light
        />

        <Swiper
          modules={[Autoplay, Pagination, FreeMode, A11y]}
          spaceBetween={16}
          slidesPerView={1.15}
          grabCursor
          speed={450}
          watchOverflow
          resistanceRatio={0.65}
          threshold={10}
          touchAngle={30}
          touchReleaseOnEdges
          touchStartPreventDefault={false}
          nested
          autoHeight
          loop={testimonials.length > 2}
          freeMode={{
            enabled: true,
            sticky: true,
            momentum: true,
            momentumRatio: 0.85,
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            360: { slidesPerView: 1.15, spaceBetween: 14 },
            430: { slidesPerView: 1.2, spaceBetween: 16 },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
              freeMode: false,
            },
            1024: {
              slidesPerView: 2.4,
              spaceBetween: 24,
              freeMode: false,
            },
          }}
          className="testimonials-swiper mobile-swiper mobile-swiper--light !pb-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <article className="h-full rounded-3xl border border-primary-white/10 bg-primary-white/5 p-7 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-0.5 mb-5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display text-xl md:text-2xl italic leading-relaxed text-primary-white/90">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-primary-white/10 pt-6">
                  <LazyLoadImage
                    src={item.image}
                    alt={item.name}
                    effect="blur"
                    className="h-12 w-12 rounded-full object-cover"
                    wrapperClassName="h-12 w-12 shrink-0 overflow-hidden rounded-full"
                  />
                  <div>
                    <p className="font-medium text-primary-white text-sm">{item.name}</p>
                    <p className="mt-0.5 text-xs text-gold-light">{item.treatment}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
