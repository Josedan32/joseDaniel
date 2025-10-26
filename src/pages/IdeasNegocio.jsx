import { Navbar } from '../components/Nav/Navbar';
import { HeroSection } from '../components/Hero/HeroSection';
import { Footer } from '../components/Footer';
// import IdeasNegocio from './landinPage';
// import { ideas } from '../data/ideas';
import { AboutSection } from '../components/About/AboutSection';
import { ServiceSection } from '../components/Service/ServiceSection';
import { ExperienceSection } from '../components/Experience/ExperienceSection';
import { BlogSection } from '../components/Blog/BlogSections';

export default function IdeasNegocio1() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ExperienceSection />
      <BlogSection />
      {/* <IdeasNegocio/> */}
      <Footer />  
    </div>
  );
}
