
'use client';

import { useState } from 'react';

export default function ExperienceSelector() {
  const [selectedExperience, setSelectedExperience] = useState('northern-lights');

  const experiences = [
    {
      id: 'northern-lights',
      title: 'Northern Lights Adventure',
      duration: '5-7 Days',
      season: 'Sept - March',
      highlights: ['Aurora hunting expeditions', 'Glass igloo accommodation', 'Reindeer sledding', 'Ice hotel experience'],
      image: 'https://readdy.ai/api/search-image?query=Spectacular%20northern%20lights%20aurora%20borealis%20dancing%20over%20Norwegian%20fjord%20landscape%20with%20cozy%20cabin%20in%20foreground%2C%20snow-covered%20pine%20trees%2C%20reflections%20in%20still%20water%2C%20magical%20green%20and%20purple%20lights%20in%20star-filled%20sky%2C%20winter%20wonderland%20scene%2C%20cinematic%20photography&width=800&height=600&seq=northern-lights&orientation=landscape'
    },
    {
      id: 'fjord-cruise',
      title: 'Majestic Fjord Cruise',
      duration: '7-10 Days',
      season: 'May - September', 
      highlights: ['UNESCO World Heritage fjords', 'Waterfall encounters', 'Traditional fishing villages', 'Midnight sun experience'],
      image: 'https://readdy.ai/api/search-image?query=Breathtaking%20Norwegian%20fjord%20cruise%20with%20luxury%20ship%20sailing%20between%20towering%20mountain%20cliffs%2C%20cascading%20waterfalls%2C%20emerald%20green%20waters%2C%20dramatic%20peaks%20shrouded%20in%20mist%2C%20pristine%20wilderness%2C%20epic%20scenic%20journey%2C%20professional%20travel%20photography&width=800&height=600&seq=fjord-cruise&orientation=landscape'
    },
    {
      id: 'lofoten-adventure',
      title: 'Lofoten Islands Explorer',
      duration: '6-8 Days',
      season: 'Year Round',
      highlights: ['Dramatic mountain peaks', 'Traditional fishing villages', 'Arctic surfing', 'Photography workshops'],
      image: 'https://readdy.ai/api/search-image?query=Stunning%20Lofoten%20Islands%20landscape%20with%20red%20traditional%20fishing%20cabins%20%28rorbuer%29%20along%20pristine%20coastline%2C%20dramatic%20granite%20peaks%20rising%20from%20turquoise%20waters%2C%20white%20sand%20beaches%2C%20Nordic%20wilderness%20adventure%2C%20professional%20landscape%20photography&width=800&height=600&seq=lofoten&orientation=landscape'
    },
    {
      id: 'cultural-heritage',
      title: 'Nordic Cultural Journey',
      duration: '8-12 Days',
      season: 'Year Round',
      highlights: ['Viking heritage sites', 'Traditional Sami culture', 'Historic wooden churches', 'Local craft workshops'],
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Norwegian%20stave%20church%20with%20intricate%20wooden%20architecture%20surrounded%20by%20snow-covered%20mountains%20and%20pine%20forest%2C%20Viking%20heritage%20site%2C%20Nordic%20cultural%20landscape%2C%20ancient%20craftsmanship%2C%20historical%20Norway%2C%20atmospheric%20winter%20scene&width=800&height=600&seq=cultural&orientation=landscape'
    }
  ];

  const currentExperience = experiences.find(exp => exp.id === selectedExperience);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 font-serif">Choose Your Adventure</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover Norway through carefully crafted experiences that showcase the country's most spectacular landscapes and rich cultural heritage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Experience List */}
          <div className="space-y-6">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                onClick={() => setSelectedExperience(experience.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedExperience === experience.id
                    ? 'bg-blue-600/20 border-2 border-blue-500'
                    : 'bg-white/5 border-2 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                  <div className={`w-4 h-4 rounded-full ${
                    selectedExperience === experience.id ? 'bg-blue-500' : 'bg-white/30'
                  }`}></div>
                </div>
                
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-time-line text-blue-400"></i>
                    </div>
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-calendar-line text-blue-400"></i>
                    </div>
                    <span>{experience.season}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {experience.highlights.slice(0, 2).map((highlight, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                      {highlight}
                    </span>
                  ))}
                  {experience.highlights.length > 2 && (
                    <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                      +{experience.highlights.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Details */}
          {currentExperience && (
            <div className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10">
              <div className="aspect-video relative">
                <img 
                  src={currentExperience.image}
                  alt={currentExperience.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4 font-serif">
                  {currentExperience.title}
                </h3>
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-time-line text-blue-400"></i>
                    </div>
                    <span className="font-medium">{currentExperience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-calendar-line text-blue-400"></i>
                    </div>
                    <span className="font-medium">{currentExperience.season}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-4">Experience Highlights</h4>
                <div className="space-y-3">
                  {currentExperience.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
                }
