import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define available languages
export type Language = 'en' | 'da';

// Define translations interface
interface Translations {
  [key: string]: {
    en: string;
    da: string;
  };
}

// Context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Translations;
}

// Define all translations here
const translations: Translations = {
  // Navbar
  "ourEvents": { en: "Our Events", da: "Vores Arrangementer" },
  "aboutUs": { en: "About Us", da: "Om Os" },
  "menu": { en: "Menu", da: "Menu" },
  "contact": { en: "Contact", da: "Kontakt" },
  "bookNow": { en: "Book Now", da: "Book Nu" },
  
  // Hero
  "heroTitle": { en: "Mobile Pizza Catering For Any Celebration", da: "Mobil Pizza\ncatering Til Enhver Fejring" },
  "heroSubtitle": { 
    en: "We bring the ultimate pizza party to your event! Fresh, delicious pizzas made on-site with premium ingredients. Street food vibes meets Italian soul.", 
    da: "Vi bringer den ultimative pizzafest til dit arrangement! Friske, lækre pizzaer lavet på stedet med førsteklasses ingredienser. Street food stemning møder italiensk sjæl." 
  },
  "bookPizzaCrew": { en: "Book Pizza Crew", da: "Book Pizza Crew" },
  "seeOurMenu": { en: "See Our Menu", da: "Se Vores Menu" },
  "freshHot": { en: "Fresh & Hot Anywhere You Are!", da: "Frisk & Varm Overalt Hvor Du Er!" },
  
  // Events section
  "weCaterAllEvents": { en: "We Cater All Events", da: "Vi Caterer Alle Arrangementer" },
  "eventsSectionSubtitle": { 
    en: "From birthday celebrations to corporate gatherings, we bring the pizza party to you. Our mobile pizza catering service is perfect for any occasion.", 
    da: "Fra fødselsdagsfester til firmasammenkomster bringer vi pizzafesten til dig. Vores mobile pizzacatering er perfekt til enhver lejlighed." 
  },
  "birthdays": { en: "Birthdays", da: "Fødselsdage" },
  "birthdaysDesc": { en: "Make your birthday special with fresh pizza made on the spot", da: "Gør din fødselsdag speciel med frisk pizza lavet på stedet" },
  "confirmations": { en: "Confirmations", da: "Konfirmationer" },
  "confirmationsDesc": { en: "Celebrate your confirmation with delicious pizzas for all guests", da: "Fejr din konfirmation med lækre pizzaer til alle gæster" },
  "studentCelebrations": { en: "Student Celebrations", da: "Studenterfejringer" },
  "studentCelebrationsDesc": { en: "Perfect for graduation parties and student gatherings", da: "Perfekt til dimissionsfester og studenterfejringer" },
  "blueMonday": { en: "Blue Monday", da: "Blue Monday" },
  "blueMondayDesc": { en: "Turn Blue Monday into a delicious day with pizza for your team", da: "Gør Blue Monday til en lækker dag med pizza til dit team" },
  "networkingEvents": { en: "Networking Events", da: "Netværksarrangementer" },
  "networkingEventsDesc": { en: "Impress clients and partners with gourmet pizza catering", da: "Imponér kunder og partnere med gourmet pizzacatering" },
  "privateGatherings": { en: "Private Gatherings", da: "Private Sammenkomster" },
  "privateGatheringsDesc": { en: "From family reunions to backyard parties - we've got you covered", da: "Fra familiefester til havefester - vi har dig dækket" },
  
  // About section
  "thePizzaCrewStory": { en: "The Pizza Crew Story", da: "Pizza Crew Historien" },
  "aboutParagraph1": { 
    en: "We're not just another catering service – we're a crew of passionate pizza makers who believe that great food creates unforgettable moments.", 
    da: "Vi er ikke bare endnu en cateringservice – vi er et hold passionerede pizzabagere, der tror på, at god mad skaber uforglemmelige øjeblikke." 
  },
  "aboutParagraph2": { 
    en: "Pizza Crew was born from the idea that everyone deserves authentic, freshly-made pizza at their events. We bring our mobile pizza ovens to your location and prepare everything on-site.", 
    da: "Pizza Crew blev født af idéen om, at alle fortjener autentisk, frisklavet pizza til deres arrangementer. Vi bringer vores mobile pizzaovne til din lokation og forbereder alt på stedet." 
  },
  "aboutParagraph3": { 
    en: "From the dough we prepare daily to the premium ingredients we carefully select, everything is crafted with love and attention to detail. It's street food with Italian soul – casual, fun, and incredibly delicious!", 
    da: "Fra dejen vi forbereder dagligt til de førsteklasses ingredienser vi omhyggeligt udvælger, er alt håndlavet med kærlighed og sans for detaljer. Det er street food med italiensk sjæl – afslappet, sjovt og utroligt lækkert!" 
  },
  "freshLabel": { en: "Fresh", da: "Frisk" },
  "freshDesc": { en: "Made on-site with fresh ingredients", da: "Lavet på stedet med friske ingredienser" },
  "eventsLabel": { en: "Events", da: "Arrangementer" },
  "eventsDesc": { en: "Successfully catered each year", da: "Succesfuldt cateret hvert år" },
  "pizzaTypesLabel": { en: "Pizza Types", da: "Pizzatyper" },
  "pizzaTypesDesc": { en: "From classic to gourmet options", da: "Fra klassisk til gourmet muligheder" },
  "funLabel": { en: "Fun", da: "Sjov" },
  "funDesc": { en: "We bring the party with us!", da: "Vi bringer festen med os!" },
  
  // Menu section
  "ourPizzaMenu": { en: "Our Pizza Menu", da: "Vores Pizzamenu" },
  "menuSubtitle": { en: "Wood-fired, handcrafted pizzas made fresh at your event with premium ingredients", da: "Brændefyrede, håndlavede pizzaer lavet friske til dit arrangement med førsteklasses ingredienser" },
  "classicPizzas": { en: "Classic Pizzas", da: "Klassiske Pizzaer" },
  "classicPizzasDesc": { en: "Our classic pizzas are made with traditional tomato sauce and mozzarella cheese base.", da: "Vores klassiske pizzaer er lavet med traditionel tomatsauce og mozzarella som base." },
  "whitePizzas": { en: "White Pizzas", da: "Hvide Pizzaer" },
  "whitePizzasDesc": { en: "Our white pizzas are made with a creamy garlic sauce base instead of tomato sauce.", da: "Vores hvide pizzaer er lavet med en cremet hvidløgssauce som base i stedet for tomatsauce." },
  "gourmetPizzas": { en: "Gourmet Pizzas", da: "Gourmet Pizzaer" },
  "gourmetPizzasDesc": { en: "Our signature gourmet pizzas feature premium ingredients and unique flavor combinations.", da: "Vores signatur gourmetpizzaer har førsteklasses ingredienser og unikke smagskombinationer." },
  "veg": { en: "Veg", da: "Veg" },
  "spicy": { en: "Spicy", da: "Stærk" },
  
  // Testimonials section
  "whatPeopleAreSaying": { en: "What People Are Saying", da: "Hvad Folk Siger" },
  "testimonialsSubtitle": { en: "Don't just take our word for it - here's what our happy customers have to say about the Pizza Crew experience.", da: "Tag ikke bare vores ord for det - her er hvad vores glade kunder har at sige om Pizza Crew oplevelsen." },
  "birthdayHost": { en: "Birthday Party Host", da: "Fødselsdagsvært" },
  "corporatePlanner": { en: "Corporate Event Planner", da: "Firmaeventsplanlægger" },
  "weddingCoordinator": { en: "Wedding Coordinator", da: "Bryllupskoordinator" },
  "testimonial1": { 
    en: "Pizza Crew was the highlight of my daughter's 16th birthday party! Their setup was impressive, the pizza was amazing, and the staff was super friendly. All the kids loved watching their pizzas being made fresh!", 
    da: "Pizza Crew var højdepunktet til min datters 16-års fødselsdag! Deres setup var imponerende, pizzaerne var fantastiske, og personalet var super venligt. Alle børnene elskede at se deres pizzaer blive lavet friske!" 
  },
  "testimonial2": { 
    en: "We hired Pizza Crew for our company's summer party and they exceeded expectations. They handled 75+ people efficiently, offered great variety, and the quality was outstanding. Will definitely book again!", 
    da: "Vi hyrede Pizza Crew til vores firmas sommerfest, og de overgik forventningerne. De håndterede 75+ personer effektivt, tilbød stor variation, og kvaliteten var fremragende. Vil helt sikkert booke igen!" 
  },
  "testimonial3": { 
    en: "Pizza Crew provided late-night snacks for our wedding reception. Our guests RAVED about the food, and it created such a fun atmosphere. Their team was professional from booking to cleanup.", 
    da: "Pizza Crew leverede sene snacks til vores bryllupsreception. Vores gæster ELSKEDE maden, og det skabte en sjov atmosfære. Deres team var professionelt fra booking til oprydning." 
  },
  "readyToCreate": { en: "Ready to create your own amazing experience?", da: "Klar til at skabe din egen fantastiske oplevelse?" },
  "bookUsToday": { en: "Book us today!", da: "Book os i dag!" },
  
  // Contact section
  "bringThePizzaParty": { en: "Bring The Pizza Party", da: "Få Pizzafesten Hjem" },
  "contactSubtitle": { 
    en: "Ready to have the Pizza Crew at your next event? Fill out the form below and we'll get back to you within 24 hours.", 
    da: "Klar til at have Pizza Crew til dit næste arrangement? Udfyld formularen nedenfor, og vi vender tilbage til dig inden for 24 timer." 
  },
  "yourName": { en: "Your Name", da: "Dit Navn" },
  "emailAddress": { en: "Email Address", da: "E-mail Adresse" },
  "phoneNumber": { en: "Phone Number", da: "Telefonnummer" },
  "eventDate": { en: "Event Date", da: "Arrangementsdato" },
  "eventType": { en: "Event Type", da: "Arrangementstype" },
  "selectEventType": { en: "Select event type", da: "Vælg arrangementstype" },
  "birthday": { en: "Birthday", da: "Fødselsdag" },
  "confirmation": { en: "Confirmation", da: "Konfirmation" },
  "student": { en: "Student Celebration", da: "Studenterfejring" },
  "corporate": { en: "Corporate/Networking", da: "Firma/Netværk" },
  "privateParty": { en: "Private Party", da: "Privat Fest" },
  "other": { en: "Other", da: "Andet" },
  "numberOfGuests": { en: "Number of Guests", da: "Antal Gæster" },
  "additionalDetails": { en: "Additional Details", da: "Yderligere Detaljer" },
  "tellUsMore": { en: "Tell us more about your event...", da: "Fortæl os mere om dit arrangement..." },
  "bookPizzaCrewNow": { en: "Book Pizza Crew Now", da: "Book Pizza Crew Nu" },
  "contactInfo": { en: "Contact Information", da: "Kontaktinformation" },
  "location": { en: "Location", da: "Lokation" },
  "locationDesc": { en: "We're mobile! We serve events throughout the region.", da: "Vi er mobile! Vi serverer ved arrangementer i hele regionen." },
  "email": { en: "Email", da: "E-mail" },
  "phone": { en: "Phone", da: "Telefon" },
  "availability": { en: "Availability", da: "Tilgængelighed" },
  "availabilityDesc": { en: "7 days a week, bookings required at least 7 days in advance", da: "7 dage om ugen, bookinger kræves mindst 7 dage i forvejen" },
  "ourServiceAreas": { en: "Our Service Areas", da: "Vores Serviceområder" },
  "serviceAreasDesc": { 
    en: "We primarily serve a 50-mile radius but can travel further for larger events. Contact us to check availability for your location!", 
    da: "Vi betjener primært en radius på 80 km, men kan rejse længere for større arrangementer. Kontakt os for at tjekke tilgængelighed for din lokation!" 
  },
  
  // Footer
  "footerDesc": { 
    en: "Mobile pizza catering for all your events. We bring the ultimate pizza experience directly to your location.", 
    da: "Mobil pizzacatering til alle dine arrangementer. Vi bringer den ultimative pizzaoplevelse direkte til din lokation." 
  },
  "quickLinks": { en: "Quick Links", da: "Hurtige Links" },
  "home": { en: "Home", da: "Hjem" },
  "contactUs": { en: "Contact Us", da: "Kontakt Os" },
  "allRightsReserved": { en: "All rights reserved.", da: "Alle rettigheder forbeholdes." },
  "privacyPolicy": { en: "Privacy Policy", da: "Privatlivspolitik" },
  "termsOfService": { en: "Terms of Service", da: "Servicevilkår" },

  // Language toggle
  "english": { en: "English", da: "Engelsk" },
  "danish": { en: "Danish", da: "Dansk" }
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  // Apply language change to the document for accessibility
  useEffect(() => {
    document.documentElement.lang = language;
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  // Load language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'da')) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
