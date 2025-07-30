import { Clock, DollarSign, Wrench, Smartphone, Search, Shield } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Clock,
      title: 'Lightning-Fast Turnaround',
      description: 'We deliver fully functional websites in just 48–72 hours — not weeks or months. Because your time is money.',
      gradient: 'from-coral-pink to-hot-pink'
    },
    {
      icon: DollarSign,
      title: 'Transparent, Affordable Pricing',
      description: 'No hidden fees. No surprise costs. Just high-quality design at a fraction of traditional agency prices.',
      gradient: 'from-lavender to-coral-pink'
    },
    {
      icon: Wrench,
      title: 'Zero Tech Headaches',
      description: 'We handle everything so you can focus on running your business.',
      gradient: 'from-deep-teal to-sky-blue'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First, Modern Design',
      description: '80% of your visitors come from mobile devices. We build websites that look flawless on phones, tablets, and desktops.',
      gradient: 'from-forest-teal to-deep-teal'
    },
    {
      icon: Search,
      title: 'Attract More Clients',
      description: 'Get found on Google and Google Maps. Your website becomes a powerful magnet for new business.',
      gradient: 'from-lime to-yellow'
    },
    {
      icon: Shield,
      title: 'Build Instant Trust',
      description: 'First impressions count. Our clean, credible designs make sure your brand stands out 24/7.',
      gradient: 'from-sky-blue to-lavender'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Why Choose{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              NexBloom
            </span>
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another web design company. We're your partners in digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in backdrop-blur-sm text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glassy Background Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl backdrop-blur-md"></div>
              
              {/* Icon */}
              <div className={`relative w-14 h-14 mb-6 mx-auto bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-outfit font-semibold text-xl mb-4 text-foreground transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Glassy Border Effect */}
              <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { number: '48-72', label: 'Hour Turnaround', suffix: 'hrs' },
              { number: '100+', label: 'Happy Clients', suffix: '+' },
              { number: '99.9%', label: 'Uptime Guarantee', suffix: '%' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="font-outfit font-bold text-3xl sm:text-4xl bg-gradient-primary bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <p className="font-poppins text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;