
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 lg:px-8 sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="logo-text text-2xl md:text-4xl text-pizza-orange">
            Pizza Crew
          </span>
        </a>
        
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-pizza-orange font-medium transition-colors">
            Our Events
          </a>
          <a href="#about" className="text-foreground hover:text-pizza-orange font-medium transition-colors">
            About Us
          </a>
          <a href="#menu" className="text-foreground hover:text-pizza-orange font-medium transition-colors">
            Menu
          </a>
          <a href="#contact" className="text-foreground hover:text-pizza-orange font-medium transition-colors">
            Contact
          </a>
          <Button className="gradient-orange text-white font-semibold hover:shadow-lg">
            Book Now
          </Button>
        </div>
      </div>
      
      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-slide-in p-4">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-foreground hover:text-pizza-orange py-2 px-4 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Events
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-pizza-orange py-2 px-4 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#menu" 
              className="text-foreground hover:text-pizza-orange py-2 px-4 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-pizza-orange py-2 px-4 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="gradient-orange text-white font-semibold w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
