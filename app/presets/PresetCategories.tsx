
'use client';

import { useState } from 'react';

interface PresetCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PresetCategories({ selectedCategory, onCategoryChange }: PresetCategoriesProps) {
  const categories = [
    { id: 'all', name: 'All Presets', count: 156 },
    { id: 'portrait', name: 'Portrait', count: 42 },
    { id: 'landscape', name: 'Landscape', count: 38 },
    { id: 'wedding', name: 'Wedding', count: 24 },
    { id: 'travel', name: 'Travel', count: 31 },
    { id: 'street', name: 'Street', count: 21 }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover presets organized by photography style and genre
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-amber-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
