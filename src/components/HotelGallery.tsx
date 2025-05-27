
import React, { useState, useEffect } from 'react';

const HotelGallery = () => {
  const [visibleImages, setVisibleImages] = useState(new Set());

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Hotel Exterior",
      category: "exterior"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Luxury Suite",
      category: "rooms"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Hotel Pool",
      category: "amenities"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Restaurant",
      category: "dining"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Hotel Lobby",
      category: "interior"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Spa Area",
      category: "amenities"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beach View",
      category: "exterior"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Ocean View Room",
      category: "rooms"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Conference Room",
      category: "business"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Garden Area",
      category: "exterior"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1587985064135-0366536eab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fitness Center",
      category: "amenities"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Presidential Suite Bedroom",
      category: "rooms"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = (entry.target as HTMLElement).dataset.imageId;
            if (imageId) {
              setVisibleImages(prev => new Set(prev).add(imageId));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = document.querySelectorAll('[data-image-id]');
    images.forEach(image => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 transform hover:scale-105">
            Hotel Gallery
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 transition-all duration-300 hover:w-32"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the beauty and luxury of Azure Haven Resort through our stunning collection of images
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              data-image-id={image.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${
                visibleImages.has(image.id.toString()) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } ${index % 3 === 0 ? 'md:row-span-2' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">{image.alt}</h3>
                <p className="text-sm text-blue-200 capitalize">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelGallery;
