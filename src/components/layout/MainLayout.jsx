import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import FloatingButtons from './FloatingButtons';
import SiteWideSeo from '../seo/SiteWideSeo';
import useScrollToTop from '../../hooks/useScrollToTop';
import { pageTransition } from '../../utils/animations';

export default function MainLayout() {
  const location = useLocation();
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteWideSeo />
      <ScrollProgress />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1"
          tabIndex={-1}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
      <BackToTop />
    </div>
  );
}
