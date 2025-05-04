"use client"

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  // return (
  //   <section id="about" className="py-24 relative">
  //     <div 
  //       className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
  //       aria-hidden="true"
  //     />
      
  //     <div className="container mx-auto px-4">
  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
  //         <motion.div 
  //           className="relative"
  //           initial={{ opacity: 0, x: -20 }}
  //           whileInView={{ opacity: 1, x: 0 }}
  //           viewport={{ once: true }}
  //           transition={{ duration: 0.6, ease: "easeOut" }}
  //         >
  //           <div className="relative rounded-2xl overflow-hidden shadow-xl">
  //             <div className="aspect-[4/5] relative">
  //               <Image 
  //                 src="https://images.pexels.com/photos/5083414/pexels-photo-5083414.jpeg?auto=compress&cs=tinysrgb&w=1200" 
  //                 alt="Gallery interior with artwork displayed"
  //                 fill
  //                 className="object-cover"
  //               />
  //             </div>
  //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none" />
  //           </div>
            
  //           <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 rounded-xl overflow-hidden shadow-xl max-w-[200px]">
  //             <Image 
  //               src="https://images.pexels.com/photos/6898855/pexels-photo-6898855.jpeg?auto=compress&cs=tinysrgb&w=600" 
  //               alt="Artist working in studio"
  //               width={200}
  //               height={150}
  //               className="object-cover"
  //             />
  //           </div>
  //         </motion.div>
          
  //         <motion.div 
  //           className="lg:pl-4"
  //           initial={{ opacity: 0, y: 20 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           viewport={{ once: true }}
  //           transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
  //         >
  //           <Badge 
  //             variant="outline" 
  //             className="mb-4 px-3 py-1 text-sm border-primary/20 bg-background"
  //           >
  //             Our Story
  //           </Badge>
  //           <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">
  //             Celebrating Art & Artists Since 2010
  //           </h2>
            
  //           <div className="space-y-4 text-muted-foreground leading-relaxed">
  //             <p>
  //               Artisan Gallery was founded with a singular vision: to create a space where art transcends boundaries and connects people across cultures and experiences. What began as a small exhibition space has evolved into a premier destination for art lovers and collectors.
  //             </p>
  //             <p>
  //               We believe in the transformative power of art and its ability to inspire, challenge, and move us. Our curators travel the world to discover exceptional artists whose work resonates with authenticity and vision.
  //             </p>
  //             <p>
  //               Beyond exhibitions, we foster a vibrant community through artist talks, workshops, and cultural events that deepen engagement with contemporary art practices.
  //             </p>
  //           </div>
            
  //           <div className="mt-8 grid grid-cols-2 gap-8 border-t pt-8">
  //             <div>
  //               <p className="text-3xl font-playfair font-medium">300+</p>
  //               <p className="text-muted-foreground">Artists Represented</p>
  //             </div>
  //             <div>
  //               <p className="text-3xl font-playfair font-medium">50+</p>
  //               <p className="text-muted-foreground">Exhibitions Per Year</p>
  //             </div>
  //           </div>
            
  //           <div className="mt-8">
  //             <Button className="rounded-full" size="lg">
  //               Our Artists
  //               <ArrowRight size={16} className="ml-2" />
  //             </Button>
  //           </div>
  //         </motion.div>
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section id="about" className="py-24 relative">
      <div
        className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
  
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/5] relative w-full">
                <Image
                  src="https://images.pexels.com/photos/5083414/pexels-photo-5083414.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Gallery interior with artwork displayed"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none" />
            </div>
  
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 rounded-xl overflow-hidden shadow-xl max-w-[150px] sm:max-w-[180px] md:max-w-[200px] w-full">
              <Image
                src="https://images.pexels.com/photos/6898855/pexels-photo-6898855.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Artist working in studio"
                width={200}
                height={150}
                className="object-cover w-full h-auto"
              />
            </div>
          </motion.div>
  
          <motion.div
            className="lg:pl-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-sm border-primary/20 bg-background"
            >
              Our Story
            </Badge>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">
              Celebrating Art & Artists Since 2010
            </h2>
  
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Artisan Gallery was founded with a singular vision: to create a space where art transcends boundaries and connects people across cultures and experiences. What began as a small exhibition space has evolved into a premier destination for art lovers and collectors.
              </p>
              <p>
                We believe in the transformative power of art and its ability to inspire, challenge, and move us. Our curators travel the world to discover exceptional artists whose work resonates with authenticity and vision.
              </p>
              <p>
                Beyond exhibitions, we foster a vibrant community through artist talks, workshops, and cultural events that deepen engagement with contemporary art practices.
              </p>
            </div>
  
            <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-8 border-t pt-8">
              <div>
                <p className="text-2xl sm:text-3xl font-playfair font-medium">300+</p>
                <p className="text-muted-foreground text-sm sm:text-base">Artists Represented</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-playfair font-medium">50+</p>
                <p className="text-muted-foreground text-sm sm:text-base">Exhibitions Per Year</p>
              </div>
            </div>
  
            <div className="mt-8">
              <Button className="rounded-full" size="lg">
                Our Artists
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );  
}