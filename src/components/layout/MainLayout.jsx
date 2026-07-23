import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import FloatingButtons from './FloatingButtons';
import FloatingInstagram from './FloatingInstagram';
import MobileBottomBar from './MobileBottomBar';
import SiteWideSeo from '../seo/SiteWideSeo';
import useScrollToTop from '../../hooks/useScrollToTop';
import { pageTransition } from '../../utils/animations';
import { cn } from '../../utils/helpers';

export default function MainLayout() {
  const location = useLocation();
  useScrollToTop();

  // Hide the mobile bottom bar while the Hero section is in view; reveal it
  // once the user scrolls past the Hero. On pages without a Hero, keep it shown.
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) {
      setIsHeroVisible(false);
      return undefined;
    }

    setIsHeroVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  const showBottomBar = !isHeroVisible;

  return (
    <div
      className={cn(
        'flex min-h-screen flex-col overflow-x-hidden max-w-[100vw] md:pb-0',
        showBottomBar
          ? 'pb-[calc(var(--mobile-bottom-bar)+var(--safe-bottom))]'
          : 'pb-0'
      )}
    >
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
      <MobileBottomBar visible={showBottomBar} />
      <BackToTop />
    </div>
  );
}
