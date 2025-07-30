import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-outfit font-bold text-xl">N</span>
              </div>
              <span className="font-outfit font-bold text-xl">NexBloom</span>
            </div>
            <p className="font-outfit font-medium text-lg opacity-90">
              Optimised. Modernised. NexBloomed.
            </p>
            <p className="font-poppins text-sm opacity-75 leading-relaxed">
              Transforming South African businesses with modern, mobile-friendly websites 
              that convert visitors into paying customers.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-outfit font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-75" />
                <a
                  href="mailto:nexbloomsa@gmail.com"
                  className="font-poppins text-sm hover:text-coral-pink transition-colors duration-200"
                >
                  nexbloomsa@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-75" />
                <a
                  href="tel:0824675034"
                  className="font-poppins text-sm hover:text-coral-pink transition-colors duration-200"
                >
                  082 467 5034
                </a>
              </div>
            </div>
          </div>

          {/* Social Links & Quick Actions */}
          <div className="space-y-4">
            <h3 className="font-outfit font-semibold text-lg">Follow Us</h3>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" asChild className="hover:bg-white/10">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-white/10">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="pt-2">
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary hover:opacity-90 text-white font-outfit font-medium"
              >
                Get Your Free Draft
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="font-poppins text-sm opacity-75">
              © {currentYear} NexBloom. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 font-poppins text-sm opacity-75">
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-coral-pink transition-colors duration-200"
              >
                Packages
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-coral-pink transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-coral-pink transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;