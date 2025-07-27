
'use client';

import { useEffect, useRef, useState } from 'react';

interface WildlifeSectionProps {
  isActive: boolean;
}

export default function WildlifeSection({ isActive }: WildlifeSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        setMousePosition({ 
          x: (e.clientX / window.innerWidth - 0.5) * 30,
          y: (e.clientY / window.innerHeight - 0.5) * 30
        });
      }
    };

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const titleTransform = `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${isActive ? 1.1 : 0.9})`;
  const parallaxOffset = typeof window !== 'undefined' ? (scrollY - window.innerHeight) * 0.5 : 0;

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Arctic%20wildlife%20scene%20in%20Norwegian%20wilderness%2C%20majestic%20reindeer%20herd%20grazing%20in%20pristine%20tundra%20landscape%2C%20snow-capped%20mountains%20in%20background%2C%20aurora%20borealis%20hints%20in%20twilight%20sky%2C%20cinematic%20nature%20photography%2C%20professional%20wildlife%20documentation%2C%20Nordic%20wilderness%20atmosphere&width=1920&height=1080&seq=norway-wildlife&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 font-serif leading-tight">
              ARCTIC
              <br />
              <span className="text-blue-300">WONDERS</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
              Experience the magic of Arctic wildlife in their pristine habitat. From majestic reindeer herds to elusive Arctic foxes, Norway's wilderness offers encounters with nature's most resilient creatures.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Reindeer migrations</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Arctic fox spotting</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Whale watching</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Northern lights</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="text-right">
              <div className="text-7xl xl:text-9xl font-thin text-white/10 font-serif leading-none">
                WILD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
