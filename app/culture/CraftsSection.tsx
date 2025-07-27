
'use client';

import Link from 'next/link';

export default function CraftsSection() {
  const crafts = [
    {
      title: "Traditional Woodcarving",
      description: "Master the ancient art of Nordic woodcarving with skilled artisans. Learn traditional patterns and techniques passed down through generations.",
      skills: ["Rosemaling Patterns", "Stave Church Designs", "Viking Motifs"],
      icon: "🪵"
    },
    {
      title: "Nordic Textile Weaving",
      description: "Create beautiful traditional textiles using authentic Nordic techniques. Work with natural wool and ancient loom methods.",
      skills: ["Traditional Patterns", "Natural Dyeing", "Loom Techniques"],
      icon: "🧶"
    },
    {
      title: "Metalwork & Jewelry",
      description: "Forge authentic Nordic jewelry and tools using Viking-era techniques. Work with silver, bronze, and traditional materials.",
      skills: ["Viking Jewelry", "Traditional Tools", "Metal Forging"],
      icon: "⚒️"
    },
    {
      title: "Pottery & Ceramics",
      description: "Shape clay using ancient Nordic pottery methods. Create functional and decorative pieces inspired by archaeological finds.",
      skills: ["Traditional Glazing", "Nordic Patterns", "Functional Pottery"],
      icon: "🏺"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-900 to-slate-900 text-white px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-serif">
            Traditional Crafts
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Learn authentic Nordic craftsmanship from master artisans and connect with centuries of cultural heritage
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {crafts.map((craft, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-slate-800/60 to-blue-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-center mb-6">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {craft.icon}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300 font-serif mb-3 sm:mb-4">
                  {craft.title}
                </h3>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                {craft.description}
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-semibold text-blue-400 text-sm sm:text-base">Skills You'll Learn:</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {craft.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-xs sm:text-sm text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <Link href="/plan-safari">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 whitespace-nowrap cursor-pointer">
              Book Cultural Workshop
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
