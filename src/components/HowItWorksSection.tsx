import { MessageSquare, Eye, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Request Your Website',
      description: 'Tell us about your business. We\'ll build a stunning first draft for FREE in 48-72 hours.',
      color: 'coral'
    },
    {
      icon: Eye,
      number: '02',
      title: 'Review & Refine',
      description: 'Like what you see? We\'ll hop on a quick call to perfect the details.',
      color: 'teal'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Launch & Grow',
      description: 'We launch your site and you can start attracting more customers. It\'s that simple.',
      color: 'coral'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            From Outdated to Outstanding
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            In just 3 simple steps. No technical knowledge required—we handle everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-border transform translate-x-6 z-0"></div>
              )}

              <div className="relative bg-card border border-border rounded-2xl p-8 text-center group-hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-8 h-8 ${step.color === 'coral' ? 'bg-coral' : 'bg-teal'} rounded-full flex items-center justify-center`}>
                    <span className="font-outfit font-bold text-sm text-white">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 ${step.color === 'coral' ? 'bg-coral/20' : 'bg-teal/20'} rounded-2xl flex items-center justify-center`}>
                  <step.icon className={`h-8 w-8 ${step.color === 'coral' ? 'text-coral' : 'text-teal'}`} />
                </div>

                {/* Content */}
                <h3 className="font-outfit font-semibold text-xl mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-poppins text-lg text-muted-foreground mb-6">
            Ready to get started? It only takes a few minutes.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-outfit font-semibold text-coral hover:text-coral/80 transition-colors duration-200"
          >
            Start Your Free Website Draft →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;