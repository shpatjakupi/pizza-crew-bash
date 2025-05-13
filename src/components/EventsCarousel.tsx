
import React from 'react';
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
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EventsCarousel = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

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

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: isMobile ? 1 : 3,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {events.map((event) => (
                <CarouselItem key={event.id} className={`pl-2 md:pl-4 ${isMobile ? 'basis-full' : 'basis-1/3'}`}>
                  <Card className="event-card h-full border-2 hover:border-pizza-orange transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className={`${event.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 mt-2`}>
                        <event.icon size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title()}</h3>
                      <p className="text-gray-600">{event.description()}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
            </div>
          </Carousel>

          {isMobile && (
            <div className="flex justify-center gap-2 mt-6">
              <button 
                className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                aria-label="Previous event"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button 
                className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                aria-label="Next event"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
