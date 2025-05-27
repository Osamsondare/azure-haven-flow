
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to experience luxury? Contact us to plan your perfect getaway.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 transform">
              <h3 className="text-2xl font-bold text-white mb-6">Visit Azure Haven</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-blue-100">123 Paradise Beach, Azure Coast</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-blue-100">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-blue-100">info@azurehaven.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/15">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social, index) => (
                  <button
                    key={social}
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 transform"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-white text-lg">📱</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                  placeholder="Your Name"
                  required
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  focusedField === 'name' ? 'w-full' : 'w-0'
                }`}></div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                  placeholder="Your Email"
                  required
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  focusedField === 'email' ? 'w-full' : 'w-0'
                }`}></div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform focus:scale-105 resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  focusedField === 'message' ? 'w-full' : 'w-0'
                }`}></div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
