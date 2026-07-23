import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import LoadingSkeleton from '../components/common/LoadingSkeleton';
import Container from '../components/common/Container';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Doctors = lazy(() => import('../pages/Doctors'));
const Dental = lazy(() => import('../pages/Dental'));
const Skin = lazy(() => import('../pages/Skin'));
const Hair = lazy(() => import('../pages/Hair'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Offers = lazy(() => import('../pages/Offers'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const Contact = lazy(() => import('../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const Terms = lazy(() => import('../pages/Terms'));
const NotFound = lazy(() => import('../pages/NotFound'));
const TreatmentDetail = lazy(() => import('../pages/treatments/TreatmentDetail'));
const InvoiceGenerator = lazy(() => import('../pages/InvoiceGenerator'));

function PageLoader() {
  return (
    <div className="section-padding pt-32">
      <Container>
        <LoadingSkeleton variant="hero" className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      </Container>
    </div>
  );
}

/**
 * Registered treatment paths (content lives in data/content.js):
 * /treatments/dental-implants
 * /treatments/root-canal-treatment
 * /treatments/teeth-whitening
 * /treatments/smile-design
 * /treatments/braces-aligners
 * /treatments/hydrafacial
 * /treatments/chemical-peel
 * /treatments/prp-hair-treatment
 * /treatments/gfc-hair-treatment
 * /treatments/hair-transplant
 */
export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="invoice-generator" element={<InvoiceGenerator />} />
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="dental" element={<Dental />} />
          <Route path="skin" element={<Skin />} />
          <Route path="hair" element={<Hair />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="offers" element={<Offers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="treatments/:slug" element={<TreatmentDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
