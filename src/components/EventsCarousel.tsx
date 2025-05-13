
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  PartyPopper, 
  Users, 
  Cake, 
  Calendar, 
  CalendarCheck, 
  Utensils 
} from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

const EventsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { t } = useLanguage();

  const events = [
    {
      id: 1,
      title: () => t('birthdays'),
      description: () => t('birthdaysDesc'),
      icon: Cake,
      color: "bg-pink-500"
    },
    {
      id: 2,
      title: () => t('confirmations'),
      description: () => t('confirmationsDesc'),
      icon: CalendarCheck,
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: () => t('studentCelebrations'),
      description: () => t('studentCelebrationsDesc'),
      icon: PartyPopper,
      color: "bg-green-500"
    },
    {
      id: 4,
      title: () => t('blueMonday'),
      description: () => t('blueMondayDesc'),
      icon: Calendar,
      color: "bg-indigo-500"
    },
    {
      id: 5,
      title: () => t('networkingEvents'),
      description: () => t('networkingEventsDesc'),
      icon: Users,
      color: "bg-orange-500"
    },
    {
      id: 6,
      title: () => t('privateGatherings'),
      description: () => t('privateGatheringsDesc'),
      icon: Utensils,
      color: "bg-red-500"
    }
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // swipe left
      goToNext();
    } else if (touchStart - touchEnd < -75) {
      // swipe right
      goToPrev();
    }
  };

  const goToPrev = () => {
    const newIndex = activeIndex === 0 ? Math.ceil(events.length / 3) - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex === Math.ceil(events.length / 3) - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  // Auto scroll the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  const getVisibleEvents = () => {
    // For mobile, show 1 at a time
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return events.slice(activeIndex, activeIndex + 1);
    }
    // For tablets, show 2 at a time
    else if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return events.slice(activeIndex * 2, activeIndex * 2 + 2);
    }
    // For desktop, show 3 at a time
    else {
      return events.slice(activeIndex * 3, activeIndex * 3 + 3);
    }
  };

  return (
    <section id="services" className="pt-28 pb-20 -mt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="logo-text text-3xl md:text-4xl text-pizza-orange mb-4">
            {t('weCaterAllEvents')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('eventsSectionSubtitle')}
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / 3)}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {events.map((event) => (
              <Card 
                key={event.id} 
                className="event-card min-w-[280px] sm:min-w-[320px] flex-1 border-2 hover:border-pizza-orange"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`${event.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4`}>
                    <event.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title()}</h3>
                  <p className="text-gray-600">{event.description()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
            aria-label="Previous event"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
            aria-label="Next event"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {[...Array(Math.ceil(events.length / 3))].map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 mx-1 rounded-full ${
                activeIndex === i ? 'bg-pizza-orange' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
