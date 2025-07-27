
'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import PresetHero from './PresetHero';
import PresetCategories from './PresetCategories';
import PresetGallery from './PresetGallery';
import PresetShowcase from './PresetShowcase';
import PresetPurchase from './PresetPurchase';

export default function PresetsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPreset, setSelectedPreset] = useState<any>(null);

  return (
    <div className="relative min-h-screen bg-white">
      <Navigation />
      <Cursor />
      <PresetHero />
      <PresetCategories 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <PresetGallery 
        selectedCategory={selectedCategory}
        onPresetSelect={setSelectedPreset}
      />
      <PresetShowcase />
      {selectedPreset && (
        <PresetPurchase 
          preset={selectedPreset}
          onClose={() => setSelectedPreset(null)}
        />
      )}
      <Footer />
    </div>
  );
}
