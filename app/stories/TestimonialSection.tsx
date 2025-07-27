
'use client';

import { useEffect, useState } from 'react';

interface TestimonialSectionProps {
  isActive: boolean;
}

export default function TestimonialSection({ isActive }: TestimonialSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const testimonials = [
    {
      id: 1,
      name: "Anna Johansson",
      location: "Stockholm, Sweden",
      rating: 5,
      text: "Witnessing the northern lights dance across the Arctic sky was absolutely magical. Every moment in Norway felt like stepping into a fairy tale. The guides were incredibly knowledgeable about Arctic wildlife and Sami culture.",
      image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20smiling%20Scandinavian%20woman%20in%20her%2030s%2C%20friendly%20expression%2C%20natural%20lighting%2C%20clean%20background%2C%20portrait%20photography&width=100&height=100&seq=testimonial-anna&orientation=squarish"
    },
    {
      id: 2,
      name: "David Thompson",
      location: "London, UK",
      rating: 5,
      text: "From the moment we arrived in Tromsø, everything exceeded expectations. The fjord cruise was breathtaking and the Arctic wildlife encounters were simply unforgettable. Norway's natural beauty is unmatched!",
      image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20smiling%20British%20man%20in%20his%2040s%2C%20friendly%20expression%2C%20natural%20lighting%2C%20clean%20background%2C%20portrait%20photography&width=100&height=100&seq=testimonial-david&orientation=squarish"
    },
    {
      id: 3,
      name: "Ingrid Hansen",
      location: "Copenhagen, Denmark",
      rating: 5,
      text: "Norway changed my perspective on nature and life. The cultural immersion with Sami families was as enriching as the Arctic adventures. An experience I'll treasure forever in the land of the midnight sun.",
      image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20smiling%20Danish%20woman%20in%20her%2030s%2C%20friendly%20expression%2C%20natural%20lighting%2C%20clean%20background%2C%20portrait%20photography&width=100&height=100&seq=testimonial-ingrid&orientation=squarish"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center w-full">
        <div className={`mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            What Travelers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Hear from adventurers who experienced the magic of Norway's Arctic wilderness
          </p>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0 p-6 sm:p-8 md:p-12'
                }`}
              >
                <div className="flex justify-center mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 md:w-6 h-5 md:h-6 flex items-center justify-center text-blue-400">
                      <i className="ri-star-fill text-lg md:text-xl"></i>
                    </div>
                  ))}
                </div>

                <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-3 md:space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 md:w-16 h-12 md:h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-base md:text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 md:space-x-3 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 md:w-3 h-2.5 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentTestimonial ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
          }
