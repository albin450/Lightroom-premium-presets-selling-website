
'use client';

import { useState } from 'react';

export default function PlanningForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '',
    duration: '',
    budget: '',
    interests: [],
    travelDates: '',
    accommodation: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('Thank you! Your personalized Norwegian adventure plan is being crafted. We\'ll contact you within 24 hours.');
      setFormData({ 
        name: '', email: '', phone: '', travelers: '', duration: '', budget: '', 
        interests: [], travelDates: '', accommodation: '', message: '' 
      });
    } catch (error) {
      setSubmitStatus('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestOptions = [
    'Northern Lights', 'Fjord Cruises', 'Mountain Hiking', 'Wildlife Safari',
    'Cultural Heritage', 'Photography Tours', 'Arctic Adventures', 'City Exploration'
  ];

  return (
    <section id="planning-form-section" className="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 font-serif">Design Your Perfect Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tell us about your dream Norwegian adventure and we'll create a personalized itinerary that captures the magic of the Nordic wilderness, from aurora-lit nights to fjord-kissed days.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
          <form id="norway-planning-form" onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-3 text-lg">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-3 text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-3 text-lg">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  placeholder="+47 123 45 678"
                />
              </div>

              <div>
                <label htmlFor="travelers" className="block text-white font-medium mb-3 text-lg">
                  Number of Travelers
                </label>
                <div className="relative">
                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 pr-8 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-slate-800">Select number of travelers</option>
                    <option value="1" className="bg-slate-800">Solo Traveler</option>
                    <option value="2" className="bg-slate-800">2 People</option>
                    <option value="3-4" className="bg-slate-800">3-4 People</option>
                    <option value="5-8" className="bg-slate-800">5-8 People</option>
                    <option value="9+" className="bg-slate-800">9+ People</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-white text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Trip Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="duration" className="block text-white font-medium mb-3 text-lg">
                  Trip Duration
                </label>
                <div className="relative">
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 pr-8 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-slate-800">Select duration</option>
                    <option value="3-5 days" className="bg-slate-800">3-5 Days</option>
                    <option value="1 week" className="bg-slate-800">1 Week</option>
                    <option value="2 weeks" className="bg-slate-800">2 Weeks</option>
                    <option value="3 weeks" className="bg-slate-800">3 Weeks</option>
                    <option value="1 month+" className="bg-slate-800">1 Month+</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-white text-xl"></i>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-white font-medium mb-3 text-lg">
                  Budget Range (per person)
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 pr-8 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-slate-800">Select budget range</option>
                    <option value="$1,000-2,500" className="bg-slate-800">$1,000 - $2,500</option>
                    <option value="$2,500-5,000" className="bg-slate-800">$2,500 - $5,000</option>
                    <option value="$5,000-10,000" className="bg-slate-800">$5,000 - $10,000</option>
                    <option value="$10,000+" className="bg-slate-800">$10,000+</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-white text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-white font-medium mb-4 text-lg">
                What interests you most? (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestChange(interest)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all cursor-pointer whitespace-nowrap ${
                      formData.interests.includes(interest)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                    } border`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="travelDates" className="block text-white font-medium mb-3 text-lg">
                  Preferred Travel Dates
                </label>
                <input
                  type="text"
                  id="travelDates"
                  name="travelDates"
                  value={formData.travelDates}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  placeholder="e.g., March 2024, Summer 2024, Flexible"
                />
              </div>

              <div>
                <label htmlFor="accommodation" className="block text-white font-medium mb-3 text-lg">
                  Accommodation Preference
                </label>
                <div className="relative">
                  <select
                    id="accommodation"
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 pr-8 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-slate-800">Select accommodation type</option>
                    <option value="luxury-hotels" className="bg-slate-800">Luxury Hotels</option>
                    <option value="boutique-lodges" className="bg-slate-800">Boutique Lodges</option>
                    <option value="traditional-cabins" className="bg-slate-800">Traditional Cabins</option>
                    <option value="mixed-options" className="bg-slate-800">Mixed Options</option>
                    <option value="budget-friendly" className="bg-slate-800">Budget Friendly</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-white text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-3 text-lg">
                Additional Details & Special Requests
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                maxLength={500}
                rows={6}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-lg"
                placeholder="Tell us about any specific experiences you're dreaming of, accessibility needs, dietary requirements, or special occasions we should know about..."
              />
              <div className="text-right text-gray-400 text-sm mt-2">
                {formData.message.length}/500 characters
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Creating Your Adventure...' : 'Create My Norwegian Journey'}
              </button>
            </div>

            {submitStatus && (
              <div className={`text-center p-4 rounded-xl ${
                submitStatus.includes('Thank you') 
                  ? 'bg-green-600/20 text-green-300 border border-green-500/30' 
                  : 'bg-red-600/20 text-red-300 border border-red-500/30'
              }`}>
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
            }
