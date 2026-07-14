import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import FloatingButtons from './FloatingButtons';
import MobileBottomBar from './MobileBottomBar';
import SiteWideSeo from '../seo/SiteWideSeo';
import useScrollToTop from '../../hooks/useScrollToTop';
import { pageTransition } from '../../utils/animations';

export default function MainLayout() {
  const location = useLocation();
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden max-w-[100vw] pb-[calc(var(--mobile-bottom-bar)+var(--safe-bottom))] md:pb-0">
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
          className="flex-1 overflow-x-hidden"
          tabIndex={-1}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
      <MobileBottomBar />
      <BackToTop />
    </div>
  );
}
