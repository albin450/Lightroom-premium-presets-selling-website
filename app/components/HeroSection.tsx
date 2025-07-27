
'use client';

import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  isActive: boolean;
}

export default function HeroSection({ isActive }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50
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

  const textTransform = `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${1 + Math.abs(mousePosition.x + mousePosition.y) / 1000})`;

  return (
    <section 
      ref={heroRef}
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Breathtaking%20panoramic%20view%20of%20Norwegian%20fjords%20at%20golden%20hour%2C%20dramatic%20steep%20cliffs%20rising%20from%20emerald%20waters%2C%20cascading%20waterfalls%2C%20misty%20mountains%20in%20background%2C%20cinematic%20lighting%20with%20warm%20amber%20and%20blue%20tones%2C%20pristine%20Nordic%20wilderness%2C%20luxury%20travel%20destination%2C%20professional%20landscape%20photography&width=1920&height=1080&seq=hero-norway&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Main Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center">
          <h1 
            className="cursor-hover text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 sm:mb-8 font-serif tracking-wider"
            style={{
              transform: textTransform,
              textShadow: '0 0 30px rgba(0,0,0,0.8)',
              filter: `blur(${scrollY / 200}px)`,
            }}
          >
            NORWAY
          </h1>
          <h2 
            className="cursor-hover text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-blue-400 font-serif tracking-widest"
            style={{
              transform: `${textTransform} rotate(${mousePosition.x / 10}deg)`,
              textShadow: '0 0 20px rgba(96,165,250,0.5)',
              opacity: 1 - scrollY / 400
            }}
          >
            AWAITS
          </h2>
          
          <div className="mt-8 sm:mt-12 text-lg sm:text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto px-4">
            <p className="opacity-90">Where Nordic beauty meets eternal wonder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
