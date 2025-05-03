import { Hero } from '@/components/sections/Hero';
import { Gallery } from '@/components/sections/Gallery';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Featured } from '@/components/sections/Featured';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Featured />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}