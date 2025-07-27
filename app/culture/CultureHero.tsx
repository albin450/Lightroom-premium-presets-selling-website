
'use client';

import { useEffect, useState } from 'react';

export default function CultureHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%20Norwegian%20stave%20church%20with%20intricate%20wooden%20architecture%20against%20dramatic%20Nordic%20landscape%2C%20ancient%20Viking%20heritage%2C%20snow-capped%20mountains%20in%20background%2C%20traditional%20red%20wooden%20buildings%2C%20Nordic%20cultural%20heritage%2C%20cinematic%20lighting%20during%20blue%20hour%2C%20mystical%20atmosphere%20with%20northern%20lights%20hint&width=1920&height=1080&seq=culture-norway&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-8 md:px-16">
        <div className="text-center">
          <h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 font-serif tracking-wider"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              textShadow: '0 0 30px rgba(0,0,0,0.8)'
            }}
          >
            NORDIC
          </h1>
          <h2 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-blue-400 font-serif tracking-widest mb-8 sm:mb-10 md:mb-12"
            style={{
              transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`,
              textShadow: '0 0 20px rgba(96,165,250,0.5)'
            }}
          >
            HERITAGE
          </h2>

          <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-16 text-white">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">1000+</div>
              <div className="text-sm sm:text-base md:text-lg font-light tracking-wide">Years of Viking Legacy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">500+</div>
              <div className="text-sm sm:text-base md:text-lg font-light tracking-wide">Stave Churches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
