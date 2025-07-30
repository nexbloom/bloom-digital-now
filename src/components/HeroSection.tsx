import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-4 py-2 rounded-full font-poppins font-medium text-sm animate-float">
            <Sparkles className="h-4 w-4" />
            <span>Optimised. Modernised. NexBloomed.</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
              Let Your Brand{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Bloom
              </span>{' '}
              Digitally
            </h1>
            
            {/* Sub-headline */}
            <p className="font-poppins text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stop losing customers to outdated designs. Get a modern, mobile-friendly website 
              that converts visitors into paying customers—without the headaches or huge budgets.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white border-0 font-outfit font-semibold text-lg px-8 py-4 h-auto group transition-all duration-300 animate-scale-in"
            >
              Get Your Free Website Draft
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <p className="font-poppins text-sm text-muted-foreground">
              No credit card required • 48-72 hour turnaround
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 space-y-4">
            <p className="font-poppins text-sm text-muted-foreground uppercase tracking-wider">
              Trusted by South African Businesses
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Small Businesses', 'Startups', 'Local Shops', 'Service Providers'].map((item) => (
                <div key={item} className="font-poppins font-medium text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coral-pink/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-lavender/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-deep-teal/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;