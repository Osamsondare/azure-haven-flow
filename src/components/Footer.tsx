
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors duration-300">
              Azure Haven Resort
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Experience the pinnacle of luxury hospitality where azure waters meet pristine beaches, 
              creating unforgettable memories in paradise.
            </p>
            <div className="flex space-x-4 mt-6">
              {['📘', '📷', '🐦'].map((icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-lg">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Rooms', 'Dining', 'Gallery', 'Contact'].map((link, index) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="hover:text-white transition-colors duration-300">
                📍 123 Paradise Beach, Azure Coast
              </p>
              <p className="hover:text-white transition-colors duration-300">
                📞 +1 (555) 123-4567
              </p>
              <p className="hover:text-white transition-colors duration-300">
                ✉️ info@azurehaven.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 transition-colors duration-300 hover:text-white">
            © {currentYear} Azure Haven Resort. All rights reserved. Crafted with ❤️ for luxury hospitality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
