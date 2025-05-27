
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedRooms from '../components/FeaturedRooms';
import HotelGallery from '../components/HotelGallery';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedRooms />
      <HotelGallery />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
