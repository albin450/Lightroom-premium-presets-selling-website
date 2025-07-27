
'use client';

import { useEffect, useRef, useState } from 'react';

interface PeopleSectionProps {
  isActive: boolean;
}

export default function PeopleSection({ isActive }: PeopleSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        setMousePosition({ 
          x: (e.clientX / window.innerWidth - 0.5) * 40,
          y: (e.clientY / window.innerHeight - 0.5) * 40
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

  const titleTransform = `translate(${mousePosition.x}px, ${mousePosition.y}px) rotate(${mousePosition.x / 20}deg)`;
  const parallaxOffset = typeof window !== 'undefined' ? (scrollY - window.innerHeight * 2) * 0.3 : 0;

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%20Norwegian%20Sami%20people%20in%20colorful%20traditional%20clothing%20standing%20in%20snowy%20landscape%2C%20wooden%20houses%20and%20reindeer%20in%20background%2C%20authentic%20Nordic%20culture%2C%20warm%20lighting%20during%20blue%20hour%2C%20cultural%20heritage%20photography%2C%20respectful%20portrayal%20of%20indigenous%20lifestyle&width=1920&height=1080&seq=norway-people&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
      
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="hidden lg:block order-1 lg:order-1">
            <div className="text-left">
              <div className="text-7xl xl:text-9xl font-thin text-white/10 font-serif leading-none">
                SAMI
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 font-serif leading-tight">
              ANCIENT
              <br />
              <span className="text-red-300">HERITAGE</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
              Discover the rich cultural heritage of the Sami people, Norway's indigenous community. Experience traditional reindeer herding, ancient crafts, and stories passed down through generations in the Arctic wilderness.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Traditional crafts</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Reindeer herding</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Ancient stories</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Cultural experiences</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
