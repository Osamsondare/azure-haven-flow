
import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Luxury Amenities",
      description: "World-class spa, infinity pools, and premium dining experiences",
      icon: "🏖️"
    },
    {
      title: "Personalized Service",
      description: "24/7 concierge service and dedicated staff for every guest",
      icon: "🛎️"
    },
    {
      title: "Prime Location",
      description: "Beachfront paradise with stunning azure waters and white sands",
      icon: "🌊"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            id="about-section"
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience 
              <span className="text-blue-600 block">Azure Haven</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nestled along pristine coastlines, Azure Haven Resort offers an unparalleled luxury experience 
              where sophisticated elegance meets tropical paradise. Our commitment to excellence ensures 
              every moment of your stay exceeds expectations.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start space-x-4 transition-all duration-700 transform hover:translate-x-2 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Azure Haven Resort"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-gray-600">Luxury Suites</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
