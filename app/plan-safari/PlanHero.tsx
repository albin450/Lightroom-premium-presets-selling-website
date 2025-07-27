
'use client';

import { useEffect, useRef, useState } from 'react';

export default function PlanHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Epic%20panoramic%20view%20of%20Norwegian%20Lofoten%20Islands%20with%20dramatic%20peaks%20rising%20from%20turquoise%20fjord%20waters%2C%20fishing%20villages%20nestled%20along%20the%20coastline%2C%20aurora%20borealis%20dancing%20in%20twilight%20sky%2C%20cinematic%20adventure%20photography%2C%20pristine%20Nordic%20wilderness%2C%20stunning%20natural%20beauty%20with%20snow-capped%20mountains%20reflecting%20in%20calm%20waters%2C%20magical%20arctic%20atmosphere&width=1920&height=1080&seq=plan-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      
      {/* Content - 居中显示 */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 w-full flex items-center justify-center min-h-screen">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight font-serif">
            Your
            <span className="block text-blue-400">Norwegian</span>
            <span className="block">Adventure</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto">
            From the mystical Northern Lights to the dramatic fjords of Lofoten, let us design your perfect Norwegian journey. Every detail crafted for an unforgettable arctic experience.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('planning-form-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg"
            >
              Start Planning Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </div>
    </div>
  );
}
