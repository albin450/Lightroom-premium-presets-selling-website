
'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import WildlifeHero from './WildlifeHero';
import SafariExperience from './SafariExperience';
import AnimalSpotlight from './AnimalSpotlight';
import ConservationStory from './ConservationStory';
import BookingSafari from './BookingSafari';

export default function WildlifeExperience() {
  return (
    <div className="relative">
      <Navigation />
      <Cursor />
      <WildlifeHero />
      <SafariExperience />
      <AnimalSpotlight />
      <ConservationStory />
      <BookingSafari />
      <Footer />
    </div>
  );
}
