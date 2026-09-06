import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ServicesKeywordsSection from '@/components/ServicesKeywordsSection';
import RiyadhDistrictsSection from '@/components/RiyadhDistrictsSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MobileCallRedirect from '@/components/MobileCallRedirect';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ServicesKeywordsSection />
        <RiyadhDistrictsSection />
        <ProjectsSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileCallRedirect />
    </div>
  );
}
