import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PackagesSection = () => {
  const packages = [
    {
      name: 'Launch Package',
      price: 'R1,500',
      monthly: 'R250/month',
      description: 'Ideal for startups or small businesses needing a clean, simple online presence.',
      features: [
        'Custom-designed website',
        'Single-page layout',
        'Free .co.za domain',
        'Mobile-responsive design'
      ],
      popular: false,
      color: 'coral'
    },
    {
      name: 'Growth Package',
      price: 'R6,000',
      monthly: 'R250/month',
      description: 'A balanced solution for growing businesses wanting essential features and flexibility.',
      features: [
        'Custom-designed website',
        '2–4 pages',
        'Free .co.za domain',
        'Mobile-responsive design',
        'Image gallery'
      ],
      popular: true,
      color: 'teal'
    },
    {
      name: 'Thrive Package',
      price: 'R3,000',
      monthly: 'R300/month',
      description: 'Built for businesses that need a fully featured, tailored digital experience.',
      features: [
        'Custom-designed website',
        '5–8 pages',
        'Free .co.za domain',
        'Mobile-responsive design',
        'Custom branding and visuals',
        'Advanced integrations (e.g. social media)'
      ],
      popular: false,
      color: 'coral'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Choose Your{' '}
            <span className="text-coral">
              Perfect Package
            </span>
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible options designed to suit every business and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in ${
                pkg.popular
                  ? 'border-coral shadow-lg scale-105'
                  : 'border-border hover:border-coral/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-coral text-white px-4 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="font-poppins font-medium text-xs">Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 bg-${pkg.color} rounded-2xl flex items-center justify-center`}>
                  <span className="font-outfit font-bold text-white text-xl">
                    {pkg.name.charAt(0)}
                  </span>
                </div>
                
                <CardTitle className="font-outfit font-bold text-xl text-foreground">
                  {pkg.name}
                </CardTitle>
                
                <div className="space-y-1">
                  <div className="font-outfit font-bold text-3xl text-foreground">
                    {pkg.price}
                  </div>
                  <div className="font-poppins text-sm text-muted-foreground">
                    + {pkg.monthly} maintenance & hosting
                  </div>
                </div>
                
                <p className="font-poppins text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="font-poppins text-sm text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full font-outfit font-semibold ${
                    pkg.popular
                      ? 'bg-coral hover:bg-coral/90 text-white'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground border border-border'
                  } transition-all duration-200`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-4">
          <p className="font-poppins text-muted-foreground">
            All packages include our 48-72 hour turnaround guarantee
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-poppins text-muted-foreground">
            <span>✓ No hidden fees</span>
            <span>✓ Free revisions</span>
            <span>✓ 30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;