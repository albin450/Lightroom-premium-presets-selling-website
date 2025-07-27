
'use client';

import Navigation from '../components/Navigation';
import CultureHero from './CultureHero';
import TraditionsSection from './TraditionsSection';
import CraftsSection from './CraftsSection';
import Footer from '../components/Footer';

export default function CulturePage() {
  return (
    <div className="relative">
      <Navigation />
      <CultureHero />
      <TraditionsSection />
      <CraftsSection />
      <Footer />
    </div>
  );
}
