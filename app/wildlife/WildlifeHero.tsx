
'use client';

export default function WildlifeHero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Majestic%20reindeer%20herd%20with%20large%20antlers%20standing%20in%20pristine%20Arctic%20Norwegian%20tundra%20landscape%20at%20golden%20hour%2C%20dramatic%20snow-capped%20mountains%20in%20background%2C%20cinematic%20wildlife%20photography%20with%20warm%20golden%20lighting%2C%20professional%20Nordic%20nature%20documentation%2C%20peaceful%20Arctic%20wilderness%20scene%2C%20luxury%20wildlife%20tourism%20in%20Norway&width=1920&height=1080&seq=arctic-wildlife-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      
      <div className="relative z-10 text-center max-w-6xl w-full">
        <h1 className="cursor-hover text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 font-serif leading-tight">
          ARCTIC
          <br />
          <span className="text-blue-400">WILDLIFE</span>
        </h1>
        
        <p className="cursor-hover text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 font-light leading-relaxed max-w-4xl mx-auto px-4">
          Journey into Norway's pristine Arctic wilderness, where majestic reindeer roam free 
          and the northern lights dance across endless tundra landscapes
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16">
          {[
            { number: '200+', label: 'Species' },
            { number: '385K', label: 'sq km Area' },
            { number: '300K', label: 'Reindeer' },
            { number: '24h', label: 'Daylight' }
          ].map((stat, i) => (
            <div key={i} className="cursor-hover text-center group hover:scale-110 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 group-hover:text-blue-300 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-xs sm:text-sm tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
