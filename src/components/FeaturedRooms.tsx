import React, { useState, useEffect } from 'react';

const FeaturedRooms = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  const rooms = [
    {
      id: 1,
      name: "Ocean View Suite",
      description: "Luxurious suite with panoramic ocean views and private balcony",
      price: "$299",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Ocean View", "Private Balcony", "King Bed", "Spa Bath"]
    },
    {
      id: 2,
      name: "Garden Villa",
      description: "Private villa surrounded by tropical gardens with pool access",
      price: "$449",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Garden View", "Private Pool", "Outdoor Shower", "Terrace"]
    },
    {
      id: 3,
      name: "Presidential Suite",
      description: "Ultimate luxury with premium amenities and personalized service",
      price: "$799",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Panoramic View", "Butler Service", "Private Dining", "Jacuzzi"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = (entry.target as HTMLElement).dataset.cardId;
            if (cardId) {
              setVisibleCards(prev => new Set(prev).add(cardId));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="rooms" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 transform hover:scale-105">
            Featured Accommodations
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 transition-all duration-300 hover:w-32"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of luxury rooms and suites, 
            each designed to provide the ultimate comfort and elegance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              data-card-id={room.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                visibleCards.has(room.id.toString()) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {room.price}/night
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {room.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature, featureIndex) => (
                    <span
                      key={feature}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-blue-200 transform hover:scale-105"
                      style={{ animationDelay: `${featureIndex * 100}ms` }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-blue-600">
                    {room.price}
                    <span className="text-lg text-gray-500">/night</span>
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl">
            View All Rooms
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
