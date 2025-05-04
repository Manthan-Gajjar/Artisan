"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Calendar 
} from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: '',
    interest: 'general',
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // In a real implementation, this would submit the form data
    console.log('Form submitted:', formState);
    // Reset form or show success message
    alert('Thank you for your message! We will get back to you soon.');
  };
  return (
    <section id="contact" className="py-24 bg-muted/30 relative">
      <div 
        className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-background to-transparent"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 px-2 sm:px-0">
          <Badge 
            variant="outline" 
            className="mb-4 px-3 py-1 text-sm border-primary/20 bg-background"
          >
            Get In Touch
          </Badge>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're interested in acquiring artwork, scheduling a viewing, or learning more about our artists, we're here to help.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-card shadow-lg rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-primary p-6 sm:p-8 md:p-12 text-primary-foreground">
              <h3 className="font-playfair text-2xl font-medium mb-6">Gallery Information</h3>
              
              <div className="space-y-6 text-sm sm:text-base">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <address className="not-italic text-primary-foreground/80">
                      123 Gallery Street<br />
                      Art District<br />
                      New York, NY 10001
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:info@artisangallery.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      info@artisangallery.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+12125551234" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      +1 (212) 555-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-primary-foreground/80">
                      Tuesday - Sunday<br />
                      10:00 AM - 6:00 PM<br />
                      <span className="text-primary-foreground/60">(Closed on Mondays)</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-primary-foreground/20">
                <p className="font-medium mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  {/* Social Icons */}
                  <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                    {/* Instagram SVG */}
                  </a>
                  <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                    {/* Twitter SVG */}
                  </a>
                  <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                    {/* Facebook SVG */}
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-6 sm:p-8 md:p-12">
              <Tabs defaultValue="contact">
                <TabsList className="grid w-full grid-cols-2 mb-8 gap-2 sm:gap-4">
                  <TabsTrigger value="contact" className="text-sm flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" /> Contact Us
                  </TabsTrigger>
                  <TabsTrigger value="booking" className="text-sm flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" /> Book a Viewing
                  </TabsTrigger>
                </TabsList>
                
                {/* Contact Tab */}
                <TabsContent value="contact">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-background"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-background"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-1">
                        I'm interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formState.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-background"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="purchase">Purchasing Artwork</option>
                        <option value="artist">Artist Submission</option>
                        <option value="event">Private Event</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-background"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-md mt-4" size="lg">
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </TabsContent>
                
                {/* Booking Tab */}
                <TabsContent value="booking">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-background"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-background"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-background"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formState.date}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-background"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-foreground mb-1">
                          Preferred Time
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formState.time}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-background"
                          required
                        >
                          <option value="">Select a time</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                        Notes (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-background"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full rounded-md mt-4" size="lg">
                      Book Appointment <Calendar className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
}