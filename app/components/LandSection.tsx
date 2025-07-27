
'use client';

import { useEffect, useRef, useState } from 'react';

interface LandSectionProps {
  isActive: boolean;
}

export default function LandSection({ isActive }: LandSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        setMousePosition({ 
          x: (e.clientX / window.innerWidth - 0.5) * 80,
          y: (e.clientY / window.innerHeight - 0.5) * 80
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

  const titleTransform = `translate(${mousePosition.x}px, ${mousePosition.y}px) rotateX(${mousePosition.y / 10}deg) rotateY(${mousePosition.x / 10}deg)`;
  const dustMovement = typeof window !== 'undefined' ? (scrollY - window.innerHeight * 4) * 0.4 : 0;

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Dramatic%20Norwegian%20fjord%20landscape%20with%20towering%20granite%20cliffs%2C%20cascading%20waterfalls%20plunging%20into%20deep%20blue%20waters%2C%20traditional%20red%20wooden%20houses%20dotting%20the%20shoreline%2C%20misty%20mountains%2C%20luxury%20cruise%20ship%20in%20distance%2C%20golden%20hour%20lighting%2C%20pristine%20Nordic%20wilderness&width=1920&height=1080&seq=norway-fjords&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 font-serif leading-tight">
                MAJESTIC
                <br />
                <span className="text-cyan-300">FJORDS</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
                Journey through Norway's legendary fjords, where ancient glaciers carved dramatic valleys filled with pristine waters. Experience towering waterfalls, steep cliffs, and timeless Nordic beauty.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2">Geirangerfjord</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">UNESCO World Heritage Site</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2">Nærøyfjord</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">World's narrowest fjord</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2">Hardangerfjord</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Fruit-growing region</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2">Lysefjord</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Famous Preikestolen</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block text-right">
              <div className="text-7xl xl:text-9xl font-thin text-white/10 font-serif leading-none">
                NATURE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
