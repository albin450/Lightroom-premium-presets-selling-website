
'use client';

import { useEffect, useRef, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WildlifeSection from './components/WildlifeSection';
import PeopleSection from './components/PeopleSection';
import SkySection from './components/SkySection';
import LandSection from './components/LandSection';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      
      if (section !== currentSection && section >= 0 && section <= 4) {
        setCurrentSection(section);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, isScrolling]);

  return (
    <div ref={containerRef} className="relative">
      <Navigation />
      <Cursor />
      <HeroSection isActive={currentSection === 0} />
      <WildlifeSection isActive={currentSection === 1} />
      <PeopleSection isActive={currentSection === 2} />
      <SkySection isActive={currentSection === 3} />
      <LandSection isActive={currentSection === 4} />
      <Footer />
    </div>
  );
}
