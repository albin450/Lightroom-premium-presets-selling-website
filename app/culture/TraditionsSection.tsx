
'use client';

export default function TraditionsSection() {
  const traditions = [
    {
      title: "Midsummer Celebration",
      description: "Join the magical Nordic Midsummer festivities with traditional bonfire lighting, flower crown making, and ancient folk dances under the midnight sun.",
      image: "https://readdy.ai/api/search-image?query=Norwegian%20midsummer%20celebration%20with%20traditional%20bonfire%2C%20people%20dancing%20in%20traditional%20folk%20costumes%2C%20midnight%20sun%20lighting%2C%20flower%20crowns%2C%20festive%20Nordic%20atmosphere%2C%20scenic%20Norwegian%20countryside%20background%2C%20warm%20golden%20hour%20lighting%2C%20cultural%20heritage%20celebration&width=800&height=600&seq=midsummer-norway&orientation=landscape"
    },
    {
      title: "Viking Feasts",
      description: "Experience authentic Viking dining traditions with medieval banquets, traditional Nordic cuisine, and ancient storytelling around roaring fires.",
      image: "https://readdy.ai/api/search-image?query=Traditional%20Viking%20feast%20in%20authentic%20Norse%20hall%2C%20medieval%20banquet%20table%20with%20traditional%20Nordic%20food%2C%20roaring%20fireplace%2C%20ancient%20wooden%20architecture%2C%20atmospheric%20candlelight%2C%20historical%20reenactment%20setting%2C%20rustic%20Nordic%20cuisine%20display&width=800&height=600&seq=viking-feast&orientation=landscape"
    },
    {
      title: "Sami Heritage",
      description: "Discover the rich culture of the indigenous Sami people through traditional reindeer herding, handicrafts, and ancient spiritual connections to the Arctic wilderness.",
      image: "https://readdy.ai/api/search-image?query=Sami%20people%20in%20traditional%20colorful%20clothing%20with%20reindeer%20herd%2C%20Arctic%20tundra%20landscape%2C%20traditional%20Sami%20tent%2C%20indigenous%20Nordic%20culture%2C%20northern%20lights%20in%20background%2C%20authentic%20cultural%20heritage%2C%20snow-covered%20wilderness%20setting&width=800&height=600&seq=sami-culture&orientation=landscape"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-900 to-blue-900 text-white px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-serif">
            Ancient Traditions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in centuries-old Nordic customs and celebrations that continue to shape Norwegian culture today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {traditions.map((tradition, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/80 to-blue-800/60 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div 
                className="h-48 sm:h-56 md:h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${tradition.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-blue-300 font-serif">
                  {tradition.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  {tradition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                  }
