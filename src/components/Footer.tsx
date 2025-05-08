
import React from 'react';
import { Pizza, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-10">
            <a href="/" className="inline-block mb-6">
              <span className="logo-text text-3xl text-pizza-orange">
                Pizza Crew
              </span>
            </a>
            <p className="text-gray-300 mb-6 max-w-xs">
              Mobile pizza catering for all your events. We bring the ultimate pizza experience directly to your location.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-pizza-orange transition-colors p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-pizza-orange transition-colors p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-pizza-orange transition-colors p-2 rounded-full">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/4 mb-10">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-pizza-orange transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-pizza-orange transition-colors">Our Events</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-pizza-orange transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-pizza-orange transition-colors">Menu</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-pizza-orange transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3 mb-10">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="text-pizza-orange mr-3 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-pizza-orange mr-3 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">bookings@pizzacrew.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-pizza-orange mr-3 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                  Mobile throughout the greater metro area. 
                  Contact us to check availability in your location!
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Pizza Crew. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-pizza-orange">Privacy Policy</a>
            <a href="#" className="hover:text-pizza-orange">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
