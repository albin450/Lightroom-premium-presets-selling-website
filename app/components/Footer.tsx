
'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-pacifico text-2xl text-blue-400 mb-4">Norway Awaits</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Experience the breathtaking landscapes and natural beauty of Norway. From the Northern Lights to the midnight sun, discover Scandinavia's most incredible destinations.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
                <i className="ri-instagram-line text-white"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
                <i className="ri-twitter-fill text-white"></i>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/wildlife" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Arctic Wildlife</a></li>
              <li><a href="/culture" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Nordic Heritage</a></li>
              <li><a href="/stories" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Travel Stories</a></li>
              <li><a href="/plan-safari" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Plan Your Journey</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-blue-400"></i>
                </div>
                <span className="text-gray-300">+47 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-blue-400"></i>
                </div>
                <span className="text-gray-300">info@norwayawaits.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-blue-400"></i>
                </div>
                <span className="text-gray-300">Oslo, Norway</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Norway Awaits. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
