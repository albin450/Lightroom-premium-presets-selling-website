
'use client';

import { useEffect, useState } from 'react';

export default function PresetHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Professional%20photographer%20editing%20photos%20on%20computer%20screen%20showing%20beautiful%20landscape%20photography%20with%20warm%20cinematic%20color%20grading%2C%20clean%20modern%20workspace%2C%20Lightroom%20interface%20visible%2C%20creative%20photography%20studio%20setup%2C%20minimalist%20aesthetic%2C%20high-quality%20editing%20tools&width=1920&height=1080&seq=lightroom-hero&orientation=landscape')"
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Premium Lightroom
          <span className="block font-bold text-amber-400">Presets</span>
        </h1>
        
        <p className={`text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Transform your photos with professional-grade presets crafted by award-winning photographers
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap">
            Browse Presets
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap">
            View Samples
          </button>
        </div>
      </div>
    </section>
  );
}
