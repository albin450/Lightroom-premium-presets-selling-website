
'use client';

import { useState } from 'react';

interface PresetGalleryProps {
  selectedCategory: string;
  onPresetSelect: (preset: any) => void;
}

export default function PresetGallery({ selectedCategory, onPresetSelect }: PresetGalleryProps) {
  const [hoveredPreset, setHoveredPreset] = useState<number | null>(null);

  const presets = [
    {
      id: 1,
      name: 'Golden Hour Portrait',
      category: 'portrait',
      price: 15,
      originalPrice: 25,
      rating: 4.9,
      downloads: 2847,
      beforeImage: 'https://readdy.ai/api/search-image?query=Natural%20portrait%20photography%20before%20editing%2C%20unprocessed%20raw%20photo%20of%20person%20in%20natural%20lighting%2C%20neutral%20colors%2C%20realistic%20skin%20tones%2C%20professional%20photography%2C%20no%20filters%20applied&width=600&height=800&seq=preset-before-1&orientation=portrait',
      afterImage: 'https://readdy.ai/api/search-image?query=Beautiful%20portrait%20with%20warm%20golden%20hour%20color%20grading%2C%20enhanced%20skin%20tones%2C%20dreamy%20atmosphere%2C%20cinematic%20lighting%2C%20professional%20Lightroom%20editing%2C%20warm%20amber%20tones%2C%20glowing%20highlights&width=600&height=800&seq=preset-after-1&orientation=portrait'
    },
    {
      id: 2,
      name: 'Moody Landscape',
      category: 'landscape',
      price: 18,
      originalPrice: 30,
      rating: 4.8,
      downloads: 1923,
      beforeImage: 'https://readdy.ai/api/search-image?query=Raw%20landscape%20photography%20before%20editing%2C%20natural%20mountain%20scenery%2C%20unprocessed%20colors%2C%20realistic%20lighting%2C%20no%20color%20grading%2C%20documentary%20style&width=800&height=600&seq=preset-before-2&orientation=landscape',
      afterImage: 'https://readdy.ai/api/search-image?query=Dramatic%20moody%20landscape%20with%20dark%20atmospheric%20color%20grading%2C%20enhanced%20contrast%2C%20deep%20shadows%2C%20cinematic%20mountain%20scenery%2C%20professional%20editing%2C%20mysterious%20atmosphere&width=800&height=600&seq=preset-after-2&orientation=landscape'
    },
    {
      id: 3,
      name: 'Vintage Film Look',
      category: 'street',
      price: 12,
      originalPrice: 20,
      rating: 4.7,
      downloads: 3241,
      beforeImage: 'https://readdy.ai/api/search-image?query=Street%20photography%20before%20editing%2C%20urban%20scene%2C%20natural%20colors%2C%20unprocessed%20digital%20photo%2C%20realistic%20lighting%2C%20no%20vintage%20effects%2C%20documentary%20style&width=600&height=800&seq=preset-before-3&orientation=portrait',
      afterImage: 'https://readdy.ai/api/search-image?query=Vintage%20film%20look%20street%20photography%2C%20retro%20color%20grading%2C%20faded%20highlights%2C%20film%20grain%20texture%2C%20nostalgic%20atmosphere%2C%20analog%20photography%20aesthetic%2C%20warm%20vintage%20tones&width=600&height=800&seq=preset-after-3&orientation=portrait'
    },
    {
      id: 4,
      name: 'Dreamy Wedding',
      category: 'wedding',
      price: 22,
      originalPrice: 35,
      rating: 4.9,
      downloads: 1567,
      beforeImage: 'https://readdy.ai/api/search-image?query=Wedding%20photography%20before%20editing%2C%20bride%20and%20groom%20natural%20photo%2C%20unprocessed%20colors%2C%20realistic%20lighting%2C%20no%20romantic%20effects%2C%20documentary%20wedding%20style&width=800&height=600&seq=preset-before-4&orientation=landscape',
      afterImage: 'https://readdy.ai/api/search-image?query=Romantic%20dreamy%20wedding%20photography%2C%20soft%20color%20grading%2C%20enhanced%20skin%20tones%2C%20magical%20atmosphere%2C%20fairy%20tale%20wedding%20aesthetic%2C%20professional%20editing%2C%20warm%20romantic%20lighting&width=800&height=600&seq=preset-after-4&orientation=landscape'
    },
    {
      id: 5,
      name: 'Travel Adventure',
      category: 'travel',
      price: 16,
      originalPrice: 28,
      rating: 4.8,
      downloads: 2156,
      beforeImage: 'https://readdy.ai/api/search-image?query=Travel%20photography%20before%20editing%2C%20natural%20destination%20scenery%2C%20unprocessed%20colors%2C%20realistic%20lighting%2C%20no%20enhancement%2C%20documentary%20travel%20style&width=600&height=800&seq=preset-before-5&orientation=portrait',
      afterImage: 'https://readdy.ai/api/search-image?query=Vibrant%20travel%20photography%20with%20enhanced%20colors%2C%20adventure%20aesthetic%2C%20boosted%20saturation%2C%20cinematic%20travel%20look%2C%20professional%20editing%2C%20inspiring%20wanderlust%20atmosphere&width=600&height=800&seq=preset-after-5&orientation=portrait'
    },
    {
      id: 6,
      name: 'Urban Portrait',
      category: 'portrait',
      price: 14,
      originalPrice: 24,
      rating: 4.6,
      downloads: 1834,
      beforeImage: 'https://readdy.ai/api/search-image?query=Urban%20portrait%20photography%20before%20editing%2C%20city%20background%2C%20natural%20lighting%2C%20unprocessed%20colors%2C%20realistic%20skin%20tones%2C%20no%20styling%20effects&width=600&height=800&seq=preset-before-6&orientation=portrait',
      afterImage: 'https://readdy.ai/api/search-image?query=Stylish%20urban%20portrait%20with%20modern%20color%20grading%2C%20enhanced%20contrast%2C%20city%20aesthetic%2C%20professional%20editing%2C%20contemporary%20look%2C%20cool%20tones%20with%20warm%20highlights&width=600&height=800&seq=preset-after-6&orientation=portrait'
    }
  ];

  const filteredPresets = selectedCategory === 'all' 
    ? presets 
    : presets.filter(preset => preset.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPresets.map((preset) => (
            <div
              key={preset.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredPreset(preset.id)}
              onMouseLeave={() => setHoveredPreset(null)}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={hoveredPreset === preset.id ? preset.afterImage : preset.beforeImage}
                  alt={preset.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-gray-800 capitalize">
                      {preset.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="ri-heart-line text-white"></i>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="ri-share-line text-white"></i>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white text-sm font-medium">
                    {hoveredPreset === preset.id ? 'After' : 'Before'} • Hover to preview
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{preset.name}</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <span className="text-sm text-gray-600">{preset.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">${preset.price}</span>
                    <span className="text-lg text-gray-400 line-through">${preset.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {preset.downloads.toLocaleString()} downloads
                  </div>
                </div>

                <button
                  onClick={() => onPresetSelect(preset)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  Purchase & Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
