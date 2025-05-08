
import React from 'react';
import { Pizza } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop" 
                  alt="Pizza being made" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
                  alt="Pizza oven" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop" 
                  alt="Fresh pizza" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1000&auto=format&fit=crop" 
                  alt="Pizza ingredients" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
                />
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
          
          <div className="lg:w-1/2">
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
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">
                  <span className="text-pizza-orange">100%</span> {t('freshLabel')}
                </h3>
                <p className="text-gray-600">{t('freshDesc')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">
                  <span className="text-pizza-orange">50+</span> {t('eventsLabel')}
                </h3>
                <p className="text-gray-600">{t('eventsDesc')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">
                  <span className="text-pizza-orange">15+</span> {t('pizzaTypesLabel')}
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
