
'use client';

import { useState } from 'react';

export default function PresetShowcase() {
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    {
      icon: 'ri-palette-line',
      title: 'Professional Quality',
      description: 'Created by award-winning photographers with years of experience'
    },
    {
      icon: 'ri-download-line',
      title: 'Instant Download',
      description: 'Get your presets immediately after purchase, no waiting time'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Compatible',
      description: 'Works seamlessly on desktop and mobile versions of Lightroom'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated support team'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Presets?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional-grade presets that transform your photography workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-500 rounded-full mx-auto mb-4">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('features')}
              className={`flex-1 py-4 px-6 font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'features'
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Key Features
            </button>
            <button
              onClick={() => setActiveTab('compatibility')}
              className={`flex-1 py-4 px-6 font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'compatibility'
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Compatibility
            </button>
            <button
              onClick={() => setActiveTab('installation')}
              className={`flex-1 py-4 px-6 font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'installation'
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Installation
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Professional .lrtemplate files</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Mobile DNG files for Lightroom Mobile</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Detailed installation guide</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Usage tips and recommendations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Works with RAW and JPEG files</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Fully adjustable settings</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Non-destructive editing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Lifetime updates included</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'compatibility' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Desktop Versions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Lightroom Classic CC</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Lightroom CC</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Lightroom 6</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Versions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Lightroom Mobile (iOS)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Lightroom Mobile (Android)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">Lightroom Web</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'installation' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Installation Guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Desktop Installation</h4>
                    <ol className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span className="text-gray-700">Download the .lrtemplate files</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span className="text-gray-700">Open Lightroom and go to Develop module</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span className="text-gray-700">Right-click on Presets panel and select Import</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span className="text-gray-700">Select the downloaded preset files</span>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Mobile Installation</h4>
                    <ol className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span className="text-gray-700">Download the DNG files to your device</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span className="text-gray-700">Import DNG files into Lightroom Mobile</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span className="text-gray-700">Copy settings from the DNG file</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span className="text-gray-700">Save as a new preset in your library</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
                          }
