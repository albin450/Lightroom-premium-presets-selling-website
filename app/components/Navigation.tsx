
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors">
          <span className="font-pacifico">Norway Awaits</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/wildlife" className="text-white hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap font-medium">
            Arctic Wildlife
          </Link>
          <Link href="/culture" className="text-white hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap font-medium">
            Nordic Heritage
          </Link>
          <Link href="/stories" className="text-white hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap font-medium">
            Travel Stories
          </Link>
          
          {/* CTA Button */}
          <Link href="/plan-safari" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg">
            Plan Your Journey
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-blue-400 transition-colors cursor-pointer"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-black/95 backdrop-blur-md px-6 py-6 space-y-4">
          <Link href="/wildlife" className="block text-white hover:text-blue-400 transition-colors cursor-pointer font-medium">
            Arctic Wildlife
          </Link>
          <Link href="/culture" className="block text-white hover:text-blue-400 transition-colors cursor-pointer font-medium">
            Nordic Heritage
          </Link>
          <Link href="/stories" className="block text-white hover:text-blue-400 transition-colors cursor-pointer font-medium">
            Travel Stories
          </Link>
          <Link href="/plan-safari" className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap text-center">
            Plan Your Journey
          </Link>
        </div>
      </div>
    </nav>
  );
}
