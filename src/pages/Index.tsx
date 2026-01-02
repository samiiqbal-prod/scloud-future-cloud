import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DataCenterSection from '@/components/DataCenterSection';
import SecuritySection from '@/components/SecuritySection';
import PerformanceSection from '@/components/PerformanceSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background noise-overlay">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DataCenterSection />
      <SecuritySection />
      <PerformanceSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
