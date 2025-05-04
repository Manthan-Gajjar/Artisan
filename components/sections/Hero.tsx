"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Curated Art That Inspires",
      subtitle: "Discover unique pieces from emerging and established artists",
      image: "https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
    },
    {
      title: "Contemporary Masterpieces",
      subtitle: "Bringing modern artistic vision to your space",
      image: "https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
    },
    {
      title: "Art That Tells A Story",
      subtitle: "Each piece carries meaning and history",
      image: "https://images.pexels.com/photos/2570059/pexels-photo-2570059.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button 
              size="lg" 
              className="rounded-full px-4 sm:px-6 text-sm"
              onClick={scrollToGallery}
            >
              Explore Gallery
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-4 sm:px-6 border-white bg-white/10 text-white text-sm"
            >
              Book a Viewing
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-white" />
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "transition-all rounded-full",
              index === currentSlide
                ? "bg-white w-6 h-2 sm:h-2"
                : "bg-white/50 w-2 h-2"
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
  
}