
'use client';

import { useEffect, useRef, useState } from 'react';

interface SkySectionProps {
  isActive: boolean;
}

export default function SkySection({ isActive }: SkySectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 60,
        y: (e.clientY / window.innerHeight - 0.5) * 60
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const titleTransform = `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${1 + Math.abs(mousePosition.y) / 1000})`;
  const starMovement = (scrollY - window.innerHeight * 3) * 0.2;

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Spectacular%20Northern%20Aurora%20Borealis%20dancing%20across%20Norwegian%20night%20sky%2C%20vibrant%20green%20and%20purple%20lights%20over%20snow-covered%20fjord%20landscape%2C%20brilliant%20star%20field%2C%20silhouettes%20of%20pine%20trees%2C%20magical%20winter%20wonderland%2C%20professional%20astrophotography%2C%20ethereal%20Nordic%20atmosphere&width=1920&height=1080&seq=norway-aurora&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 font-serif leading-tight">
            NORTHERN
            <br />
            <span className="text-green-300">LIGHTS</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 sm:mb-12">
            Witness nature's most spectacular light show dancing across the Arctic sky. The Aurora Borealis paints the Norwegian heavens with ethereal greens, purples, and blues in an unforgettable celestial performance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Best Season</h3>
              <p className="text-gray-300 text-sm sm:text-base">September to March</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-400 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Peak Hours</h3>
              <p className="text-gray-300 text-sm sm:text-base">9 PM - 2 AM</p>
            </div>
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Best Locations</h3>
              <p className="text-gray-300 text-sm sm:text-base">Tromsø & Lofoten</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
    }
        
