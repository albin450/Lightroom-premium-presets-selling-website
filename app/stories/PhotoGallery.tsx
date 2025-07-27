
'use client';

import { useEffect, useState } from 'react';

interface PhotoGalleryProps {
  isActive: boolean;
}

export default function PhotoGallery({ isActive }: PhotoGalleryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsVisible(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const photos = [
    {
      id: 1,
      src: "https://readdy.ai/api/search-image?query=Arctic%20fox%20in%20white%20winter%20coat%20in%20Norwegian%20tundra%2C%20beautiful%20wild%20animal%20in%20snow%2C%20pristine%20Arctic%20wilderness%2C%20wildlife%20photography%2C%20Svalbard%20landscape&width=600&height=800&seq=norway-arctic-fox&orientation=portrait",
      title: "Arctic Fox in Winter",
      location: "Svalbard Archipelago",
      size: 'h-64 sm:h-72 lg:h-80'
    },
    {
      id: 2,
      src: "https://readdy.ai/api/search-image?query=Norwegian%20fjord%20with%20dramatic%20waterfalls%20and%20steep%20cliffs%2C%20pristine%20blue%20water%20reflecting%20mountains%2C%20majestic%20landscape%20photography%2C%20UNESCO%20heritage%20site%20scenery&width=800&height=600&seq=norway-waterfall-fjord&orientation=landscape",
      title: "Fjord Waterfalls",
      location: "Geirangerfjord",
      size: 'h-72 sm:h-80 lg:h-96'
    },
    {
      id: 3,
      src: "https://readdy.ai/api/search-image?query=Reindeer%20herd%20migrating%20across%20Norwegian%20tundra%2C%20Sami%20herding%20culture%2C%20Arctic%20animals%20in%20natural%20habitat%2C%20traditional%20lifestyle%2C%20golden%20light%20photography&width=600&height=600&seq=norway-reindeer-herd&orientation=squarish",
      title: "Reindeer Migration",
      location: "Finnmark Plateau",
      size: 'h-64 sm:h-72 lg:h-80'
    },
    {
      id: 4,
      src: "https://readdy.ai/api/search-image?query=Polar%20bear%20on%20ice%20floe%20in%20Svalbard%20waters%2C%20majestic%20Arctic%20predator%2C%20pristine%20polar%20environment%2C%20wildlife%20conservation%20photography%2C%20dramatic%20Arctic%20seascape&width=800&height=600&seq=norway-polar-bear&orientation=landscape",
      title: "King of the Arctic",
      location: "Svalbard Waters",
      size: 'h-72 sm:h-80 lg:h-96'
    },
    {
      id: 5,
      src: "https://readdy.ai/api/search-image?query=Traditional%20Norwegian%20stave%20church%20in%20winter%20landscape%2C%20ancient%20wooden%20architecture%2C%20snow%20covered%20mountains%2C%20cultural%20heritage%20site%2C%20Nordic%20history&width=600&height=800&seq=norway-stave-church&orientation=portrait",
      title: "Ancient Heritage",
      location: "Borgund Stave Church",
      size: 'h-64 sm:h-72 lg:h-80'
    },
    {
      id: 6,
      src: "https://readdy.ai/api/search-image?query=Snowy%20owl%20perched%20on%20rock%20in%20Norwegian%20Arctic%2C%20beautiful%20white%20bird%20of%20prey%2C%20winter%20wildlife%2C%20pristine%20snow%20landscape%2C%20nature%20photography&width=600&height=600&seq=norway-snowy-owl&orientation=squarish",
      title: "Arctic Hunter",
      location: "Northern Norway",
      size: 'h-72 sm:h-80 lg:h-96'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(photos[index].src);
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Captured Moments
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A visual journey through Norway's breathtaking landscapes and incredible Arctic wildlife
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${photo.size}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => openModal(index)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-center object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-base md:text-lg font-bold mb-1">{photo.title}</h3>
                <p className="text-sm text-gray-200">{photo.location}</p>
              </div>

              <div className="absolute top-3 md:top-4 right-3 md:right-4 w-8 md:w-10 h-8 md:h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="ri-zoom-in-line text-white text-base md:text-lg"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-full w-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg mx-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 md:top-4 right-2 md:right-4 w-8 md:w-10 h-8 md:h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-lg md:text-xl"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
                      }
