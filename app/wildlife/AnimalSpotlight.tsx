
'use client';

import { useEffect, useState } from 'react';

export default function AnimalSpotlight() {
  const [activeAnimal, setActiveAnimal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAnimal(prev => (prev + 1) % animals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const animals = [
    {
      name: "Svalbard Reindeer",
      scientific: "Rangifer tarandus platyrhynchus",
      description: "The hardy Arctic reindeer perfectly adapted to Norway's extreme conditions. These magnificent creatures roam the tundra in large herds, embodying the spirit of the Arctic wilderness.",
      facts: ["Can survive temperatures down to -40°C", "Migrate up to 5,000 km annually", "Antlers can span up to 1.4 meters"],
      image: "https://readdy.ai/api/search-image?query=Magnificent%20Svalbard%20reindeer%20with%20large%20antlers%20standing%20proudly%20in%20Arctic%20Norwegian%20tundra%20landscape%2C%20thick%20winter%20coat%2C%20snow-covered%20ground%2C%20dramatic%20mountain%20backdrop%2C%20cinematic%20wildlife%20photography%2C%20golden%20hour%20lighting%2C%20professional%20nature%20documentation%2C%20majestic%20Arctic%20wildlife&width=800&height=600&seq=reindeer-portrait&orientation=landscape"
    },
    {
      name: "Arctic Fox",
      scientific: "Vulpes lagopus",
      description: "The cunning Arctic fox with its pristine white winter coat, perfectly camouflaged in the snowy landscapes. These intelligent predators are masters of survival in harsh Arctic conditions.",
      facts: ["Change coat color with seasons", "Can hear prey moving under snow", "Survive temperatures down to -50°C"],
      image: "https://readdy.ai/api/search-image?query=Beautiful%20Arctic%20fox%20with%20pure%20white%20winter%20coat%20sitting%20alert%20in%20Norwegian%20snow-covered%20landscape%2C%20fluffy%20fur%2C%20bright%20intelligent%20eyes%2C%20pristine%20Arctic%20wilderness%20background%2C%20cinematic%20animal%20photography%2C%20soft%20natural%20lighting%2C%20professional%20wildlife%20documentation&width=800&height=600&seq=arctic-fox-portrait&orientation=landscape"
    },
    {
      name: "Polar Bear",
      scientific: "Ursus maritimus",
      description: "The mighty polar bear, king of the Arctic ice. These powerful predators are perfectly adapted to life on the frozen seas around Svalbard, representing the raw power of Arctic nature.",
      facts: ["Can weigh up to 680 kg", "Swim distances up to 60 km", "Detect seals 1 km away"],
      image: "https://readdy.ai/api/search-image?query=Massive%20polar%20bear%20walking%20on%20Arctic%20ice%20floes%20in%20Svalbard%20Norway%2C%20thick%20white%20fur%2C%20powerful%20build%2C%20pristine%20Arctic%20seascape%20background%2C%20dramatic%20ice%20formations%2C%20cinematic%20wildlife%20photography%2C%20professional%20nature%20documentation%2C%20majestic%20Arctic%20predator&width=800&height=600&seq=polar-bear-portrait&orientation=landscape"
    },
    {
      name: "Snowy Owl",
      scientific: "Bubo scandiacus",
      description: "The majestic snowy owl, silent hunter of the Arctic night. These beautiful birds of prey glide effortlessly through the Nordic landscape, their pristine white feathers blending with the snow.",
      facts: ["Can rotate head 270 degrees", "Hunt in complete darkness", "Migrate thousands of kilometers"],
      image: "https://readdy.ai/api/search-image?query=Majestic%20snowy%20owl%20with%20pristine%20white%20plumage%20perched%20on%20snow-covered%20tree%20branch%20in%20Norwegian%20Arctic%20landscape%2C%20piercing%20yellow%20eyes%2C%20detailed%20feather%20texture%2C%20winter%20wilderness%20background%2C%20cinematic%20bird%20photography%2C%20professional%20nature%20documentation&width=800&height=600&seq=snowy-owl-portrait&orientation=landscape"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="cursor-hover text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 font-serif leading-tight">
                MEET THE
                <br />
                <span className="text-blue-400">ARCTIC FIVE</span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 font-light leading-relaxed">
                Encounter Norway's most iconic Arctic wildlife in their natural frozen kingdom
              </p>
            </div>

            <div className="flex space-x-2">
              {animals.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveAnimal(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeAnimal ? 'bg-blue-400 scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-blue-400/20">
            <div key={activeAnimal} className="space-y-4 sm:space-y-6">
              <div 
                className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4 sm:mb-6"
                style={{
                  backgroundImage: `url('${animals[activeAnimal].image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div>
                <h3 className="cursor-hover text-2xl sm:text-3xl font-bold text-white mb-2">
                  {animals[activeAnimal].name}
                </h3>
                <p className="text-blue-400 italic text-base sm:text-lg mb-3 sm:mb-4">
                  {animals[activeAnimal].scientific}
                </p>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {animals[activeAnimal].description}
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-blue-300 font-semibold text-sm sm:text-base">Amazing Facts:</h4>
                {animals[activeAnimal].facts.map((fact, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm sm:text-base">{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
              }
