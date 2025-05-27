
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
      features: ["Ocean View", "Private Balcony", "King Bed", "Spa Bath"],
      category: "luxury"
    },
    {
      id: 2,
      name: "Garden Villa",
      description: "Private villa surrounded by tropical gardens with pool access",
      price: "$449",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Garden View", "Private Pool", "Outdoor Shower", "Terrace"],
      category: "luxury"
    },
    {
      id: 3,
      name: "Presidential Suite",
      description: "Ultimate luxury with premium amenities and personalized service",
      price: "$799",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Panoramic View", "Butler Service", "Private Dining", "Jacuzzi"],
      category: "luxury"
    },
    {
      id: 4,
      name: "Standard Twin Room",
      description: "Comfortable twin beds with modern amenities and city views",
      price: "$129",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Twin Beds", "City View", "WiFi", "Mini Bar"],
      category: "standard"
    },
    {
      id: 5,
      name: "Standard Double Room",
      description: "Cozy double room perfect for couples with elegant furnishings",
      price: "$159",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Double Bed", "Balcony", "WiFi", "Room Service"],
      category: "standard"
    },
    {
      id: 6,
      name: "Deluxe Room",
      description: "Spacious room with upgraded amenities and partial ocean view",
      price: "$189",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Queen Bed", "Partial Ocean View", "Sitting Area", "Upgraded Bath"],
      category: "normal"
    },
    {
      id: 7,
      name: "Family Room",
      description: "Perfect for families with connecting rooms and extra space",
      price: "$219",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Connecting Rooms", "Family Size", "Kitchenette", "Play Area"],
      category: "normal"
    },
    {
      id: 8,
      name: "Business Room",
      description: "Ideal for business travelers with work desk and conference access",
      price: "$199",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Work Desk", "Conference Access", "Business Lounge", "High-Speed WiFi"],
      category: "normal"
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'luxury': return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 'standard': return 'bg-gradient-to-r from-blue-400 to-blue-600';
      case 'normal': return 'bg-gradient-to-r from-green-400 to-green-600';
      default: return 'bg-blue-600';
    }
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 transform hover:scale-105">
            Our Accommodations
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 transition-all duration-300 hover:w-32"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From luxury suites to comfortable standard rooms, discover the perfect accommodation 
            for your stay at Azure Haven Resort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              data-card-id={room.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                visibleCards.has(room.id.toString()) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {room.price}/night
                </div>
                <div className={`absolute top-4 left-4 text-white px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(room.category)}`}>
                  {room.category.charAt(0).toUpperCase() + room.category.slice(1)}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {room.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {room.features.slice(0, 3).map((feature, featureIndex) => (
                    <span
                      key={feature}
                      className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs transition-all duration-300 hover:bg-blue-200 transform hover:scale-105"
                      style={{ animationDelay: `${featureIndex * 100}ms` }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {room.price}
                    <span className="text-sm text-gray-500">/night</span>
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                    Book
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
