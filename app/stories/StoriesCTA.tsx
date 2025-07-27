
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface StoriesCTAProps {
  isActive: boolean;
}

export default function StoriesCTA({ isActive }: StoriesCTAProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const textTransform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Magnificent%20Norwegian%20fjord%20landscape%20at%20sunset%2C%20dramatic%20mountains%20reflecting%20in%20calm%20waters%2C%20golden%20and%20blue%20lighting%2C%20peaceful%20and%20inspiring%20Nordic%20wilderness%2C%20cinematic%20travel%20destination%20photography&width=1920&height=1080&seq=stories-cta-norway&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-slate-900/70 to-blue-900/80" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.2}px)`,
            animationDuration: '3s'
          }}
        />
        <div 
          className="absolute top-40 right-32 w-3 h-3 bg-white/40 rounded-full animate-bounce"
          style={{ 
            transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * 0.6}px)`,
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute bottom-32 left-40 w-5 h-5 bg-blue-500/20 rounded-full animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * -0.3}px)`,
            animationDuration: '5s'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div 
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transform: textTransform }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 font-serif">
            Write Your Own Adventure
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-light mb-8 sm:mb-12 leading-relaxed px-4">
            Let these stories inspire your journey. From the majestic fjords to the dancing northern lights, 
            Norway awaits to become part of your own unforgettable adventure tale.
          </p>
          
          <div 
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link 
              href="/plan-safari"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Plan Your Journey
            </Link>
          </div>

          <div 
            className={`mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 lg:space-x-12 text-blue-100 transition-all duration-1000 delay-500 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                <i className="ri-camera-line text-xl sm:text-2xl text-blue-400"></i>
              </div>
              <span className="text-base sm:text-lg">Epic Moments</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                <i className="ri-compass-line text-xl sm:text-2xl text-blue-400"></i>
              </div>
              <span className="text-base sm:text-lg">New Adventures</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                <i className="ri-heart-line text-xl sm:text-2xl text-blue-400"></i>
              </div>
              <span className="text-base sm:text-lg">Lasting Memories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
