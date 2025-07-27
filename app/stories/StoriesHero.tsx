
'use client';

import { useEffect, useState } from 'react';

interface StoriesHeroProps {
  isActive: boolean;
}

export default function StoriesHero({ isActive }: StoriesHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Majestic%20Norwegian%20fjord%20landscape%20with%20dramatic%20mountains%20and%20pristine%20waters%2C%20misty%20atmosphere%2C%20Nordic%20wilderness%2C%20cinematic%20photography%2C%20adventure%20travel%20destination%2C%20serene%20natural%20beauty&width=1920&height=1080&seq=norway-stories-hero&orientation=landscape')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Arctic Adventures
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover incredible stories from travelers who experienced the magic of Norway's wilderness, culture, and natural wonders
          </p>
        </div>
      </div>
    </section>
  );
}
