
'use client';

export default function ConservationStory() {
  return (
    <section 
      className="py-16 sm:py-20 bg-emerald-900 relative"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Pristine%20Norwegian%20Arctic%20conservation%20landscape%20with%20protected%20tundra%20ecosystem%2C%20sustainable%20wildlife%20management%2C%20indigenous%20Sami%20reindeer%20herding%20practices%2C%20environmental%20protection%20in%20Arctic%20wilderness%2C%20snow-covered%20mountains%2C%20research%20stations%20in%20background%2C%20northern%20lights%20in%20sky%2C%20community-based%20conservation%20success%2C%20eco-tourism%20sustainability%2C%20professional%20nature%20photography%2C%20peaceful%20Arctic%20habitat%20preservation&width=1920&height=1080&seq=arctic-conservation&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-emerald-900/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="mb-12 sm:mb-16">
          <h2 className="cursor-hover text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 font-serif leading-tight">
            ARCTIC<br />
            <span className="text-emerald-400">CONSERVATION</span>
          </h2>
          <p className="cursor-hover text-base sm:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8">
            Every Arctic expedition contributes to protecting Norway's incredible wildlife for future generations. Your visit directly supports conservation efforts and indigenous Sami communities.
          </p>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-emerald-100 max-w-3xl mx-auto">
            <p className="cursor-hover hover:text-emerald-300 transition-colors duration-300">
              ❄️ Sustainable Arctic tourism protecting fragile ecosystems
            </p>
            <p className="cursor-hover hover:text-emerald-300 transition-colors duration-300">
              🛡️ Climate research initiatives monitoring Arctic changes
            </p>
            <p className="cursor-hover hover:text-emerald-300 transition-colors duration-300">
              👥 Sami community partnerships preserving traditional knowledge
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="cursor-hover bg-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="ri-shield-check-line text-2xl sm:text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors"></i>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 group-hover:text-emerald-300 mb-1 sm:mb-2 transition-colors">
              65,000
            </div>
            <div className="text-white/70 text-xs sm:text-sm leading-tight">Protected Areas (sq km)</div>
          </div>
          
          <div className="cursor-hover bg-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="ri-group-line text-2xl sm:text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors"></i>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 group-hover:text-emerald-300 mb-1 sm:mb-2 transition-colors">
              150+
            </div>
            <div className="text-white/70 text-xs sm:text-sm leading-tight">Research Scientists</div>
          </div>
          
          <div className="cursor-hover bg-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="ri-funds-line text-2xl sm:text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors"></i>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 group-hover:text-emerald-300 mb-1 sm:mb-2 transition-colors">
              20%
            </div>
            <div className="text-white/70 text-xs sm:text-sm leading-tight">Tourism Revenue to Conservation</div>
          </div>
          
          <div className="cursor-hover bg-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="ri-heart-line text-2xl sm:text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors"></i>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 group-hover:text-emerald-300 mb-1 sm:mb-2 transition-colors">
              25+
            </div>
            <div className="text-white/70 text-xs sm:text-sm leading-tight">Sami Communities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
