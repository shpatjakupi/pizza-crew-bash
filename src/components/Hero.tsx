
import React from 'react';
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0yMCAyNWMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1 z-10">
            <h1 className="logo-text text-4xl md:text-6xl lg:text-7xl text-pizza-orange mb-6">
              {language === 'da' ? (
                <>
                  Mobil Pizza<br />catering Til Enhver Fejring
                </>
              ) : (
                t('heroTitle')
              )}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="gradient-orange text-white font-semibold text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all pulse-grow"
                onClick={() => scrollToSection('contact')}
              >
                <PartyPopper className="mr-2" /> {t('bookPizzaCrew')}
              </Button>
              <Button 
                variant="outline" 
                className="text-pizza-orange border-pizza-orange hover:bg-pizza-orange/10 font-medium text-lg py-6 px-8"
                onClick={() => scrollToSection('menu')}
              >
                {t('seeOurMenu')}
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-2xl float-animation">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop"
                alt="Delicious pizza made by Pizza Crew" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <span className="inline-block bg-yellow-300 text-yellow-800 font-bold px-4 py-1 rounded-full text-sm">
                  {t('freshHot')}
                </span>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-pizza-yellow rounded-full opacity-60 blur-lg"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-pizza-red rounded-full opacity-40 blur-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
