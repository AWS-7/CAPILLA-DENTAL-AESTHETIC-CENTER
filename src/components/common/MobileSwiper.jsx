import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { cn } from '../../utils/helpers';

/**
 * Premium mobile Swiper carousel.
 * Use inside md:hidden (or similar); keep desktop grids separate.
 * Configured so horizontal gestures stay inside Swiper and vertical page scroll stays free.
 */
export default function MobileSwiper({
  children,
  className = '',
  slidesPerView = 1.15,
  spaceBetween = 16,
  freeMode = true,
  loop = false,
  lightPagination = false,
  autoplay = 0,
  breakpoints,
  ariaLabel = 'Carousel',
}) {
  const slides = Children.toArray(children).filter(Boolean);
  const canLoop = loop && slides.length > 2;

  return (
    <div className={cn('mobile-swiper-wrap relative', className)} role="region" aria-label={ariaLabel}>
      <Swiper
        modules={[Pagination, FreeMode, A11y, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
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
        loop={canLoop}
        loopAdditionalSlides={canLoop ? 1 : 0}
        autoplay={
          autoplay > 0
            ? {
                delay: autoplay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        freeMode={
          freeMode
            ? {
                enabled: true,
                sticky: true,
                momentum: true,
                momentumRatio: 0.85,
                momentumVelocityRatio: 0.8,
              }
            : false
        }
        pagination={{
          clickable: true,
          dynamicBullets: slides.length > 4,
        }}
        breakpoints={breakpoints}
        className={cn('mobile-swiper !pb-12', lightPagination && 'mobile-swiper--light')}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.key || `slide-${index}`} className="!h-auto">
            <div className="h-full">{slide}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
