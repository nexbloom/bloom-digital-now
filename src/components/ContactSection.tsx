import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface FormData {
  name: string;
  company: string;
  telephone: string;
  email: string;
  description: string;
  currentWebsite: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    telephone: '',
    email: '',
    description: '',
    currentWebsite: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save form data to Supabase
      const { error } = await supabase
        .from('contact_forms')
        .insert({
          name: formData.name,
          email: formData.email,
          message: formData.description,
          company: formData.company || null,
          telephone: formData.telephone || null,
          current_website: formData.currentWebsite || null
        });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours with your free website draft.",
      });
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        telephone: '',
        email: '',
        description: '',
        currentWebsite: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Ready to Get Your{' '}
            <span className="text-coral">
              Website?
            </span>
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover exactly how we can let your online presence bloom and increase your leads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="border border-border shadow-lg">
            <CardHeader>
              <CardTitle className="font-outfit font-semibold text-2xl text-center">
                Get Your Free Website Draft
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-poppins font-medium">
                      Name <span className="text-coral-pink">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="font-poppins"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-poppins font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="font-poppins"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telephone" className="font-poppins font-medium">
                      Telephone
                    </Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="font-poppins"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-poppins font-medium">
                      Email <span className="text-coral-pink">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="font-poppins"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="font-poppins font-medium">
                    Tell us about your dream website <span className="text-coral-pink">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your business, what you do, and what you want your website to achieve..."
                    rows={4}
                    required
                    className="font-poppins resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentWebsite" className="font-poppins font-medium">
                    Current website URL (if any)
                  </Label>
                  <Input
                    id="currentWebsite"
                    name="currentWebsite"
                    value={formData.currentWebsite}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="font-poppins"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-coral hover:bg-coral/90 text-white font-outfit font-semibold text-lg py-6 h-auto group transition-all duration-200"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send My Request
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </Button>

                <p className="text-center font-poppins text-sm text-muted-foreground">
                  We'll get back to you within 24 hours with your free website draft
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-outfit font-semibold text-2xl text-foreground">
                Get in Touch
              </h3>
              <p className="font-poppins text-muted-foreground leading-relaxed">
                Ready to transform your online presence? We're here to help you every step of the way. 
                Contact us today and let's make your digital dreams a reality.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-foreground">Email</p>
                  <a
                    href="mailto:nexbloomsa@gmail.com"
                    className="font-poppins text-coral-pink hover:text-hot-pink transition-colors duration-200"
                  >
                    nexbloomsa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-foreground">Mobile</p>
                  <a
                    href="tel:0824675034"
                    className="font-poppins text-coral-pink hover:text-hot-pink transition-colors duration-200"
                  >
                    082 467 5034
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-coral/10 rounded-2xl p-6 border border-coral/20">
              <h4 className="font-outfit font-semibold text-lg text-foreground mb-3">
                Why Choose a Free Draft?
              </h4>
              <ul className="space-y-2 font-poppins text-sm text-muted-foreground">
                <li>• See exactly what we can do for your business</li>
                <li>• No commitment until you're 100% happy</li>
                <li>• Get a feel for our design style and quality</li>
                <li>• Perfect opportunity to discuss your vision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;