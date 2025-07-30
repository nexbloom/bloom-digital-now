import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import PackagesSection from '@/components/PackagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Load fonts on component mount
  useEffect(() => {
    document.body.style.fontFamily = 'Poppins, sans-serif';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <PackagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
