
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventsCarousel from '@/components/EventsCarousel';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
//import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <EventsCarousel />
      <AboutSection />
      <MenuSection /> 
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
