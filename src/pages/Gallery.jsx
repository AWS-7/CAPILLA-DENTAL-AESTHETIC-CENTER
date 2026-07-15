import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/common';
import PageCtaHero from '../components/sections/shared/PageCtaHero';
import GalleryGrid from '../components/sections/gallery/GalleryGrid';
import GallerySuccessStories from '../components/sections/gallery/GallerySuccessStories';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { gallerySeo, galleryHero } from '../data/gallery';

export default function Gallery() {
  return (
    <>
      <SEO
        title={gallerySeo.title}
        description={gallerySeo.description}
        canonical={gallerySeo.canonical}
        image={galleryHero.image}
      />
      <Helmet>
        <meta name="keywords" content={gallerySeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </Helmet>

      <PageCtaHero
        title={galleryHero.title}
        subtitle={galleryHero.subtitle}
        image={galleryHero.image}
        eyebrow="Our Clinic"
      />
      <GalleryGrid />
      <GallerySuccessStories />
      <PageConsultCTA
        title="Ready for Your Transformation?"
        description="Book a consultation at Capilla Perumbakkam and start your dental, skin, or hair journey with specialists."
      />
    </>
  );
}
