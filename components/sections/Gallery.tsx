"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

type ArtworkCategory = 'all' | 'painting' | 'sculpture' | 'photography' | 'digital';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  category: ArtworkCategory;
  imageUrl: string;
}

// Gallery artwork data
const artworks: Artwork[] = [
  { id: 1, title: "Coastal Dreams", artist: "Emma Johnson", category: "painting", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg6Xc7PKPJODeQRYgTYQZBo4KBqlgCKtwzw&s" },
  { id: 2, title: "Urban Fragments", artist: "Michael Chen", category: "photography", imageUrl: "https://images.pexels.com/photos/3467149/pexels-photo-3467149.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: 3, title: "Solitude", artist: "Rebecca Lin", category: "sculpture", imageUrl: "https://images.pexels.com/photos/6032282/pexels-photo-6032282.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: 4, title: "Digital Dreamscape", artist: "Jasper Williams", category: "digital", imageUrl: "https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: 5, title: "Summer Light", artist: "Sophia Martinez", category: "painting", imageUrl: "https://images.pexels.com/photos/1061623/pexels-photo-1061623.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: 6, title: "Geometric Tension", artist: "Alex Kovalev", category: "sculpture", imageUrl: "https://images.pexels.com/photos/2570059/pexels-photo-2570059.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: 7, title: "Nocturne City", artist: "Daniel Wong", category: "photography", imageUrl: "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: 8, title: "Future Nature", artist: "Eliza Thompson", category: "digital", imageUrl: "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: 9, title: "Abstract Motion", artist: "Jean Pierre", category: "painting", imageUrl: "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: 10, title: "Modernist Form", artist: "Victoria Lee", category: "sculpture", imageUrl: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" },
  { id: 11, title: "Metropolitan", artist: "Adrian Silva", category: "photography", imageUrl: "https://khirki.in/cdn/shop/files/Artboard1_8be2aabe-8bfd-4f8a-a1de-58f87c56cfe0.jpg?v=1742194600" },
  { id: 12, title: "New Horizon", artist: "Maya Patel", category: "digital", imageUrl: "https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&w=1200" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('all');

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  // return (
  //   <section id="gallery" className="py-24 relative bg-muted/30">
  //     <div className="container mx-auto px-4">
  //       <div className="max-w-3xl mx-auto text-center mb-12">
  //         <Badge 
  //           variant="outline" 
  //           className="mb-4 px-3 py-1 text-sm border-primary/20 bg-background"
  //         >
  //           Our Collection
  //         </Badge>
  //         <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
  //           Explore Our Gallery
  //         </h2>
  //         <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
  //           Discover a diverse collection of contemporary artwork from emerging and established artists.
  //         </p>
  //       </div>
        
  //       <Tabs 
  //         defaultValue="all" 
  //         value={selectedCategory}
  //         onValueChange={(value) => setSelectedCategory(value as ArtworkCategory)}
  //         className="w-full"
  //       >
  //         <div className="flex justify-center mb-10">
  //           <TabsList className="bg-muted/60 backdrop-blur-sm p-1">
  //             <TabsTrigger 
  //               value="all" 
  //               className="rounded-full px-4 py-1.5 text-sm"
  //             >
  //               All Works
  //             </TabsTrigger>
  //             <TabsTrigger 
  //               value="painting" 
  //               className="rounded-full px-4 py-1.5 text-sm"
  //             >
  //               Paintings
  //             </TabsTrigger>
  //             <TabsTrigger 
  //               value="sculpture" 
  //               className="rounded-full px-4 py-1.5 text-sm"
  //             >
  //               Sculptures
  //             </TabsTrigger>
  //             <TabsTrigger 
  //               value="photography" 
  //               className="rounded-full px-4 py-1.5 text-sm"
  //             >
  //               Photography
  //             </TabsTrigger>
  //             <TabsTrigger 
  //               value="digital" 
  //               className="rounded-full px-4 py-1.5 text-sm"
  //             >
  //               Digital Art
  //             </TabsTrigger>
  //           </TabsList>
  //         </div>
          
  //         <motion.div 
  //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
  //           variants={containerVariants}
  //           initial="hidden"
  //           animate="visible"
  //           key={selectedCategory}
  //         >
  //           {filteredArtworks.map((artwork) => (
  //             <motion.div 
  //               key={artwork.id}
  //               className="group relative overflow-hidden rounded-lg shadow-md bg-card h-full"
  //               variants={itemVariants}
  //             >
  //               <div className="relative aspect-[4/5] overflow-hidden">
  //                 <Image 
  //                   src={artwork.imageUrl}
  //                   alt={artwork.title}
  //                   fill
  //                   className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
  //                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  //                 />
  //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  //                   <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
  //                     <p className="text-white/80 text-sm">{artwork.artist}</p>
  //                     <h3 className="font-playfair text-lg font-medium">{artwork.title}</h3>
  //                   </div>
  //                 </div>
  //               </div>
  //             </motion.div>
  //           ))}
  //         </motion.div>
  //       </Tabs>
  //     </div>
  //   </section>
  // );
  return (
    <section id="gallery" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 px-2 sm:px-0">
          <Badge 
            variant="outline" 
            className="mb-4 px-3 py-1 text-sm border-primary/20 bg-background"
          >
            Our Collection
          </Badge>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Explore Our Gallery
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover a diverse collection of contemporary artwork from emerging and established artists.
          </p>
        </div>
        
        <Tabs 
          defaultValue="all" 
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value as ArtworkCategory)}
          className="w-full"
        >
          <div className="flex justify-center mb-6 sm:mb-10 px-2 overflow-x-auto">
            <TabsList className="bg-muted/60 backdrop-blur-sm p-1 flex space-x-2 whitespace-nowrap">
              {['all','painting','sculpture','photography','digital'].map((cat) => (
                <TabsTrigger 
                  key={cat}
                  value={cat}
                  className="rounded-full px-3 sm:px-4 py-1.5 text-sm sm:text-base flex-shrink-0"
                >
                  {cat === 'all' ? 'All Works' 
                    : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
          >
            {filteredArtworks.map((artwork) => (
              <motion.div 
                key={artwork.id}
                className="group relative overflow-hidden rounded-lg shadow-md bg-card h-full"
                variants={itemVariants}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image 
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <p className="text-white/80 text-xs sm:text-sm">{artwork.artist}</p>
                      <h3 className="font-playfair text-base sm:text-lg font-medium mt-1">
                        {artwork.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Tabs>
      </div>
    </section>
  );  
}