
'use client';

import { useEffect, useState } from 'react';

interface AdventureStoriesProps {
  isActive: boolean;
}

export default function AdventureStories({ isActive }: AdventureStoriesProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsVisible(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const stories = [
    {
      id: 1,
      title: "Chasing the Northern Lights",
      author: "Emma Larsen",
      date: "March 2024",
      excerpt: "Standing beneath the dancing aurora borealis in Tromsø was pure magic. The green and purple lights painted the Arctic sky while we sat by a crackling fire, surrounded by pristine snow-covered wilderness.",
      image: "https://readdy.ai/api/search-image?query=Northern%20lights%20aurora%20borealis%20over%20Norwegian%20landscape%20with%20person%20silhouette%20watching%2C%20dramatic%20green%20purple%20lights%20in%20dark%20sky%2C%20snow%20covered%20ground%2C%20winter%20wilderness%2C%20magical%20Arctic%20scene%2C%20cinematic%20photography&width=600&height=400&seq=norway-aurora-story&orientation=landscape",
      readTime: "5 min read",
      category: "Aurora"
    },
    {
      id: 2,
      title: "Fjord Adventure in Geiranger",
      author: "Hans Andersen",
      date: "January 2024",
      excerpt: "Kayaking through the UNESCO World Heritage Geirangerfjord revealed Norway's most dramatic scenery. Towering waterfalls cascaded from snow-capped peaks into the deep blue waters below - an unforgettable Nordic adventure.",
      image: "https://readdy.ai/api/search-image?query=Geirangerfjord%20Norway%20with%20dramatic%20waterfalls%20and%20steep%20mountains%2C%20kayaker%20in%20fjord%20waters%2C%20majestic%20Norwegian%20landscape%2C%20pristine%20nature%2C%20adventure%20photography%2C%20steep%20cliffs%20and%20cascading%20water&width=600&height=400&seq=norway-fjord-story&orientation=landscape",
      readTime: "8 min read",
      category: "Adventure"
    },
    {
      id: 3,
      title: "Sami Culture in Finnmark",
      author: "Sofia Nilsson",
      date: "February 2024",
      excerpt: "Living with a Sami family in Finnmark opened my eyes to indigenous Arctic culture. Learning traditional reindeer herding and listening to ancient joik songs under the polar night was deeply moving.",
      image: "https://readdy.ai/api/search-image?query=Sami%20people%20with%20reindeer%20in%20Norwegian%20Arctic%20landscape%2C%20traditional%20colorful%20clothing%2C%20authentic%20indigenous%20culture%2C%20snow%20covered%20tundra%2C%20cultural%20heritage%20scene%2C%20warm%20lighting%2C%20documentary%20photography&width=600&height=400&seq=norway-sami-story&orientation=landscape",
      readTime: "6 min read",
      category: "Culture"
    }
  ];

  return (
    <section id="nordic-chronicles" className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Nordic Chronicles
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Real stories from real travelers who experienced the magic of Norway
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.category}
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <span className="flex-shrink-0">{story.author}</span>
                  <span className="flex-shrink-0">{story.readTime}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {story.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                  {story.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex-shrink-0">{story.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
