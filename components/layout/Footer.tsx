import Link from 'next/link';
import { Paintbrush, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Paintbrush size={24} className="text-primary" />
              <span className="font-playfair text-xl font-medium">Artisan</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Curating exceptional artwork from established and emerging artists worldwide since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#featured" className="text-sm text-muted-foreground hover:text-primary transition-colors">Featured</Link></li>
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#artists" className="text-sm text-muted-foreground hover:text-primary transition-colors">Artists</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Visit Us</h4>
            <address className="not-italic text-sm text-muted-foreground">
              123 Gallery Street<br />
              Art District<br />
              New York, NY 10001<br />
              <a href="tel:+12125551234" className="hover:text-primary transition-colors">+1 (212) 555-1234</a>
            </address>
            <p className="text-sm text-muted-foreground mt-2">
              Open Tuesday - Sunday<br />
              10:00 AM - 6:00 PM
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest exhibitions and events.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-3 py-2 border border-border rounded-md text-sm"
                required
              />
              <button 
                type="submit" 
                className="w-full px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/40 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; {currentYear} Artisan Gallery. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}