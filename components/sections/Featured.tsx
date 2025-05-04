"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { ArrowRight, ArrowLeft, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

// Featured artwork data
const featuredArtworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Elena Mikhailov",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: "48\" × 36\"",
    price: "$4,800",
    description: "A vibrant exploration of color and emotion, 'Abstract Harmony' invites viewers to experience the dynamic interplay of form and feeling through bold brushstrokes and layered composition.",
    imageUrl: "https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 2,
    title: "Serenity in Blue",
    artist: "Marcus Chen",
    year: 2022,
    medium: "Acrylic on Canvas",
    dimensions: "40\" × 60\"",
    price: "$5,200",
    description: "This meditative piece explores the depths of consciousness through varying shades of blue, creating a sense of tranquility and introspection for the viewer.",
    imageUrl: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 3,
    title: "Urban Reflections",
    artist: "Sophia Park",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "36\" × 48\"",
    price: "$3,900",
    description: "A contemporary exploration of urban landscapes, this piece captures the dichotomy between structure and chaos through innovative textures and perspective.",
    imageUrl: "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 4,
    title: "Ethereal Light",
    artist: "James Wilson",
    year: 2021,
    medium: "Oil on Canvas",
    dimensions: "24\" × 36\"",
    price: "$3,400",
    description: "Through masterful manipulation of light and shadow, this artwork creates an almost transcendent experience, drawing the viewer into its luminous depths.",
    imageUrl: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 5,
    title: "Fragments of Memory",
    artist: "Isabelle Laurent",
    year: 2023,
    medium: "Mixed Media on Panel",
    dimensions: "30\" × 40\"",
    price: "$4,100",
    description: "This evocative piece explores the fragmentary nature of memory through collage techniques and subtle color transitions that suggest the passage of time.",
    imageUrl: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: 6,
    title: "Golden Horizon",
    artist: "David Miller",
    year: 2022,
    medium: "Acrylic and Gold Leaf",
    dimensions: "48\" × 36\"",
    price: "$5,800",
    description: "Incorporating traditional gold leaf techniques with contemporary composition, this artwork creates a stunning luminosity that shifts with changing light conditions.",
    imageUrl: "https://w0.peakpx.com/wallpaper/112/733/HD-wallpaper-dancer-red-art-font-oil-painting-wall-blue-thumbnail.jpg"
  }
];

export function Featured() {
  const [selectedArtwork, setSelectedArtwork] : any = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  

  return (
    <section id="featured" className="py-20 relative overflow-hidden">
      <div 
        className="absolute -top-24 -right-24 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-accent/30 blur-3xl"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-2 sm:px-0">
          <Badge 
            variant="outline" 
            className="mb-4 px-3 py-1 text-sm border-primary/20 bg-background"
          >
            Featured Collection
          </Badge>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Featured Masterpieces
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our curated selection of exceptional artworks that showcase the pinnacle of contemporary artistic expression.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {featuredArtworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="group relative bg-card rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6 lg:p-8">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs sm:text-sm font-medium text-white/70">{artwork.artist}</p>
                    <h3 className="font-playfair text-lg sm:text-xl font-medium mt-1">{artwork.title}</h3>
                    <p className="text-xs sm:text-sm mt-1 text-white/80">{artwork.medium}</p>
                    <div className="mt-2 sm:mt-3 pt-2 border-t border-white/20 flex items-center justify-between">
                      <span className="text-sm sm:text-base text-white/90 font-medium">{artwork.price}</span>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-white hover:bg-white/20 p-1 h-auto"
                      >
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-6 sm:px-8 border-primary/30 hover:bg-background"
          >
            View All Artworks
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
  
      {/* Artwork Detail Dialog */}
      {selectedArtwork && (
        <Dialog open={!!selectedArtwork} onOpenChange={(open) => !open && setSelectedArtwork(null)}>
          <DialogContent className="sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[1000px] p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Section */}
              <div className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[70vh] bg-black">
                <Image 
                  src={selectedArtwork.imageUrl}
                  alt={selectedArtwork.title}
                  fill
                  className="object-contain"
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute top-4 right-4 rounded-full bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-black/50"
                  onClick={() => {
                    setIsLiked(!isLiked);
                  }}
                >
                  <Heart size={18} className={cn(isLiked ? "fill-red-500 text-red-500" : "text-white")} />
                </Button>
              </div>
              
              {/* Info Section */}
              <div className="p-4 sm:p-6 md:p-8 flex flex-col">
                <DialogHeader>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                      {selectedArtwork.artist}, {selectedArtwork.year}
                    </p>
                    <DialogTitle className="font-playfair text-xl sm:text-2xl md:text-3xl font-medium">
                      {selectedArtwork.title}
                    </DialogTitle>
                  </div>
                </DialogHeader>
                
                <div className="mt-4 sm:mt-6 space-y-4 flex-1">
                  <DialogDescription className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                    {selectedArtwork.description}
                  </DialogDescription>
                  
                  <div className="grid grid-cols-2 gap-y-3 text-xs sm:text-sm mt-4 pt-4 border-t">
                    <div>
                      <p className="text-muted-foreground">Medium</p>
                      <p className="font-medium">{selectedArtwork.medium}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Dimensions</p>
                      <p className="font-medium">{selectedArtwork.dimensions}</p>
                    </div>
                    <div className="col-span-2 mt-2">
                      <p className="text-muted-foreground">Price</p>
                      <p className="font-medium text-sm sm:text-base">{selectedArtwork.price}</p>
                    </div>
                  </div>
                </div>
                
                <DialogFooter className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                  <Button 
                    className="w-full sm:w-auto rounded-full"
                    size="lg"
                  >
                    Purchase Artwork
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto rounded-full"
                    size="lg"
                  >
                    Book a Viewing
                  </Button>
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
  
}