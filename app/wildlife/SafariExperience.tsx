
'use client';

export default function SafariExperience() {
  const experiences = [
    {
      title: "Reindeer Expeditions",
      description: "Experience the magic of wild reindeer herds in their natural Arctic habitat",
      icon: "ri-roadster-line"
    },
    {
      title: "Arctic Trekking",
      description: "Explore pristine tundra landscapes on guided wilderness adventures",
      icon: "ri-walk-line"
    },
    {
      title: "Northern Lights",
      description: "Witness the spectacular Aurora Borealis dancing across Arctic skies",
      icon: "ri-moon-line"
    },
    {
      title: "Wildlife Photography",
      description: "Capture stunning Arctic wildlife moments with professional guidance",
      icon: "ri-camera-line"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div>
            <h2 className="cursor-hover text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-serif leading-tight">
              ARCTIC
              <br />
              <span className="text-blue-400">ADVENTURES</span>
            </h2>
            
            <p className="cursor-hover text-base sm:text-lg text-blue-100 font-light leading-relaxed mb-6 sm:mb-8">
              Every Arctic expedition is a unique story waiting to unfold. Choose your adventure 
              and let Norway's pristine wilderness reveal its secrets to you.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4 text-white/80 text-sm sm:text-base">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                <span>Expert Sami guides and naturalists</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 text-white/80 text-sm sm:text-base">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                <span>Heated Arctic vehicles and snowmobiles</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 text-white/80 text-sm sm:text-base">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                <span>Luxury Arctic lodges and glass igloos</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {experiences.map((exp, i) => (
              <div 
                key={i}
                className="cursor-hover bg-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                  <i className={`${exp.icon} text-2xl sm:text-3xl text-blue-400 group-hover:text-blue-300 transition-colors`}></i>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
