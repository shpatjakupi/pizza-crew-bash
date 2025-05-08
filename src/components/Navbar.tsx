
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full py-4 px-4 lg:px-8 sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="logo-text text-2xl md:text-4xl text-pizza-orange">
            Pizza Crew
          </span>
        </a>
        
        {/* Language toggle - moved to the right side for all screen sizes */}
        
        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageToggle />
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
          <a 
            onClick={() => scrollToSection('services')} 
            className="text-foreground hover:text-pizza-orange font-medium transition-colors cursor-pointer"
          >
            {t('ourEvents')}
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className="text-foreground hover:text-pizza-orange font-medium transition-colors cursor-pointer"
          >
            {t('aboutUs')}
          </a>
          <a 
            onClick={() => scrollToSection('menu')} 
            className="text-foreground hover:text-pizza-orange font-medium transition-colors cursor-pointer"
          >
            {t('menu')}
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className="text-foreground hover:text-pizza-orange font-medium transition-colors cursor-pointer"
          >
            {t('contact')}
          </a>
          <LanguageToggle />
          <Button 
            className="gradient-orange text-white font-semibold hover:shadow-lg" 
            onClick={() => scrollToSection('contact')}
          >
            {t('bookNow')}
          </Button>
        </div>
      </div>
      
      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-slide-in p-4">
          <div className="flex flex-col space-y-4">
            <a 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-pizza-orange py-2 px-4 font-medium cursor-pointer"
            >
              {t('ourEvents')}
            </a>
            <a 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-pizza-orange py-2 px-4 font-medium cursor-pointer"
            >
              {t('aboutUs')}
            </a>
            <a 
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-pizza-orange py-2 px-4 font-medium cursor-pointer"
            >
              {t('menu')}
            </a>
            <a 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-pizza-orange py-2 px-4 font-medium cursor-pointer"
            >
              {t('contact')}
            </a>
            <Button 
              className="gradient-orange text-white font-semibold w-full"
              onClick={() => scrollToSection('contact')}
            >
              {t('bookNow')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
