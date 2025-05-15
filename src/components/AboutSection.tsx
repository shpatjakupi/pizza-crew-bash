import React, { useState } from 'react';
import { Pizza, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    { src: "/images/pizzabianco.jpeg", alt: "Pizza being made" },
    { src: "/images/pizzalined.jpeg", alt: "Pizza oven" },
    { src: "/images/pizzaplace.jpeg", alt: "Fresh pizza" },
    { src: "/images/pizzahjerte.jpeg", alt: "Pizza ingredients" }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
 
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Images grid */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* For desktop view - unchanged */}
              <div className="hidden md:grid grid-cols-12 gap-4">
                {/* Pizza being made - 5 columns */}
                <div className="col-span-5">
                  <img
                    src="/images/pizzabianco.jpeg"
                    alt="Pizza being made"
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </div>
                
                {/* Pizza oven - 7 columns and taller */}
                <div className="col-span-7 mt-8">
                  <img
                    src="/images/pizzalined.jpeg"
                    alt="Pizza oven"
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
                
                {/* Fresh pizza - 7 columns and taller */}
                <div className="col-span-7">
                  <img
                    src="/images/pizzaplace.jpeg"
                    alt="Fresh pizza"
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
                
                {/* Pizza ingredients - 5 columns */}
                <div className="col-span-5 mt-8">
                  <img
                    src="/images/pizzahjerte.jpeg"
                    alt="Pizza ingredients"
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              {/* For mobile view - IMPROVED: Carousel with navigation */}
              <div className="block md:hidden">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <div className="flex transition-transform duration-300 ease-in-out" 
                       style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {images.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-96 object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation buttons */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full text-pizza-orange hover:bg-white"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full text-pizza-orange hover:bg-white"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                          currentSlide === index ? 'bg-pizza-orange' : 'bg-white/70'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-pizza-orange rounded-full flex items-center justify-center text-white">
                <Pizza size={24} />
              </div>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-pizza-red rounded-full flex items-center justify-center text-white">
                <Pizza size={24} />
              </div>
            </div>
          </div>
          
          {/* Text content - unchanged */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <h2 className="logo-text text-3xl md:text-4xl text-pizza-orange mb-6">
              {t('thePizzaCrewStory')}
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              {t('aboutParagraph1')}
            </p>
            <p className="text-lg mb-6 text-gray-700">
              {t('aboutParagraph2')}
            </p>
            <p className="text-lg mb-6 text-gray-700">
              {t('aboutParagraph3')}
            </p>
            
            {/* Stats boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">
                  <span className="text-pizza-orange">100%</span> {t('freshLabel')}
                </h3>
                <p className="text-gray-600">{t('freshDesc')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">
                  <span className="text-pizza-orange"></span> {t('eventsLabel')}
                </h3>
                <p className="text-gray-600">{t('eventsDesc')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">
                  <span className="text-pizza-orange">10+</span> {t('pizzaTypesLabel')}
                </h3>
                <p className="text-gray-600">{t('pizzaTypesDesc')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">
                  <span className="text-pizza-orange">100%</span> {t('funLabel')}
                </h3>
                <p className="text-gray-600">{t('funDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;