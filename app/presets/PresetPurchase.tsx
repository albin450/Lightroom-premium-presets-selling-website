
'use client';

import { useState } from 'react';

interface PresetPurchaseProps {
  preset: any;
  onClose: () => void;
}

export default function PresetPurchase({ preset, onClose }: PresetPurchaseProps) {
  const [selectedFormat, setSelectedFormat] = useState('both');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const formatOptions = [
    { id: 'both', label: 'Desktop + Mobile', price: preset.price, popular: true },
    { id: 'desktop', label: 'Desktop Only', price: preset.price - 5 },
    { id: 'mobile', label: 'Mobile Only', price: preset.price - 8 }
  ];

  const handlePurchase = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Purchase successful! Check your email for download links.');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Purchase Preset</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl text-gray-600"></i>
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start space-x-4 mb-6">
            <img
              src={preset.afterImage}
              alt={preset.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{preset.name}</h3>
              <p className="text-gray-600 capitalize">{preset.category} preset</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-star-fill text-amber-400"></i>
                </div>
                <span className="text-sm text-gray-600">{preset.rating} ({preset.downloads} downloads)</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Choose Format</h4>
            <div className="space-y-3">
              {formatOptions.map((option) => (
                <div
                  key={option.id}
                  className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedFormat === option.id
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedFormat(option.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
                        selectedFormat === option.id
                          ? 'border-amber-500 bg-amber-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedFormat === option.id && (
                          <i className="ri-check-line text-white text-sm"></i>
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">${option.price}</div>
                    </div>
                  </div>
                  {option.popular && (
                    <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              placeholder="Enter your email for download links"
              required
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium">${formatOptions.find(f => f.id === selectedFormat)?.price}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Discount</span>
              <span className="font-medium text-green-600">-${preset.originalPrice - preset.price}</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">
                  ${formatOptions.find(f => f.id === selectedFormat)?.price}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handlePurchase}
            disabled={!email || isProcessing}
            className={`w-full py-4 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
              !email || isProcessing
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-amber-500 hover:bg-amber-600 text-white hover:scale-105'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : (
              'Purchase & Download'
            )}
          </button>

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>Secure payment powered by Stripe • 30-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
      }
