import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Portafolio from './pages/Portafolio';
import ServicesPages from './pages/Services';
import './App.css';
import ProjectsShowcase from './components/Projects/ProjectsSection';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <Routes location={location}>
        <Route path="/" element={<Portafolio />} />
        <Route path="/services" element={<ServicesPages />} />
      </Routes>
    </motion.div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes location={location}>
        <Route path="/projects" element={<ProjectsShowcase />} />
      </Routes>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;