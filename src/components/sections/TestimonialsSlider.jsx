import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
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
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.15 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.4 },
          }}
          className="testimonials-swiper !pb-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
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
                    <p className="font-medium text-primary-white text-sm">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs text-gold-light">{item.treatment}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <style>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.35);
          opacity: 1;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #C8A45D;
        }
      `}</style>
    </section>
  );
}
