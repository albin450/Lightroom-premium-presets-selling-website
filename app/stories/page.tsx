
'use client';

import { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import StoriesHero from './StoriesHero';
import AdventureStories from './AdventureStories';
import PhotoGallery from './PhotoGallery';
import TestimonialSection from './TestimonialSection';
import StoriesCTA from './StoriesCTA';

export default function StoriesPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
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
  }, [currentSection]);

  return (
    <div ref={containerRef} className="relative">
      <Navigation />
      <Cursor />
      <StoriesHero isActive={currentSection === 0} />
      <AdventureStories isActive={currentSection === 1} />
      <PhotoGallery isActive={currentSection === 2} />
      <TestimonialSection isActive={currentSection === 3} />
      <StoriesCTA isActive={currentSection === 4} />
      <Footer />
    </div>
  );
}
