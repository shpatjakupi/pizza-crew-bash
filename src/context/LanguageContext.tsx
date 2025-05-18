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
  "freshHot": { en: "Lavet med kærlighed! ❤️", da: "Made with love! ❤️" },
  
// Events section
  "weCaterAllEvents": { en: "We Cater All Events", da: "Vi Caterer Alle Arrangementer" },
  "eventsSectionSubtitle": {
    en: "From birthday celebrations to corporate gatherings, we bring the pizza party to you. Our mobile pizza catering service is perfect for any occasion, creating unforgettable experiences with authentic wood-fired pizzas.",
    da: "Fra fødselsdagsfester til firmasammenkomster bringer vi pizzafesten til dig. Vores mobile pizzacatering er perfekt til enhver lejlighed og skaber uforglemmelige oplevelser med autentiske træfyrede pizzaer."
  },
  "birthdays": { en: "Birthdays", da: "Fødselsdage" },
  "birthdaysDesc": { 
    en: "Make your birthday celebration extraordinary with our artisanal pizzas made fresh right at your venue. Perfect for both kids and adults!", 
    da: "Gør din fødselsdagsfejring ekstraordinær med vores håndlavede pizzaer, der tilberedes friske direkte på dit feststed. Perfekt til både børn og voksne!" 
  },
  "confirmations": { en: "Confirmations", da: "Konfirmationer" },
  "confirmationsDesc": { 
    en: "Create a memorable confirmation celebration with our gourmet pizza experience. We'll impress your guests with delicious options for everyone.", 
    da: "Skab en mindeværdig konfirmationsfejring med vores gourmet pizza-oplevelse. Vi vil imponere dine gæster med lækre muligheder til alle." 
  },
  "studentCelebrations": { en: "Student Celebrations", da: "Studenterfejringer" },
  "studentCelebrationsDesc": { 
    en: "Celebrate academic achievements with a festive pizza party! Our catering is the perfect solution for graduation events and student gatherings.", 
    da: "Fejr akademiske præstationer med en festlig pizzafest! Vores catering er den perfekte løsning til dimissionsfester og studenterfejringer." 
  },
  "networkingEvents": { en: "Networking Events", da: "Netværksarrangementer" },
  "networkingEventsDesc": { 
    en: "Break the ice at your next professional gathering with our premium pizza catering. Impress clients and build connections over delicious food.", 
    da: "Bryd isen ved dit næste professionelle arrangement med vores premium pizzacatering. Imponér kunder og skab forbindelser over lækker mad." 
  },
  "privateGatherings": { en: "Private Gatherings", da: "Private Sammenkomster" },
  "privateGatheringsDesc": { 
    en: "From intimate family reunions to vibrant backyard parties - our mobile pizza oven transforms any gathering into a special culinary event.", 
    da: "Fra intime familiefester til livlige havefester - vores mobile pizzaovn forvandler enhver sammenkomst til en særlig kulinarisk begivenhed." 
  },
  "corporateEvents": { en: "Corporate Events", da: "Firmaevents" },
  "corporateEventsDesc": { 
    en: "Boost team morale and employee satisfaction with our unique pizza catering for meetings, team-building days, and company celebrations.", 
    da: "Boost teammoral og medarbejdertilfredshed med vores unikke pizzacatering til møder, teambuilding-dage og firmafester." 
  },
  "allParties": { en: "For All Celebrations", da: "Til Alle Festligheder" },
  "allPartiesDesc": { 
    en: "Whatever your occasion, our mobile pizza catering adds that special touch. Customizable menus and flexible service for any event you can imagine!", 
    da: "Uanset din anledning tilføjer vores mobile pizzacatering det særlige touch. Tilpassede menuer og fleksibel service til enhver begivenhed, du kan forestille dig!" 
  },
  // About section
"thePizzaCrewStory": { 
  "en": "The Pizza Crew Story", 
  "da": "Pizza Crew Historien" 
},
"aboutParagraph1": { 
  "en": "With over 20 years of combined experience baking stone oven pizzas – from the Italiano Pompei restaurant at Kultorvet to the unique Forno a Legna pizzeria in Ordrup – we now bring the craft to your backyard!", 
  "da": "Med over 20 års samlet erfaring i at bage stenovnspizzaer – fra restauranten Italiano Pompei på Kultorvet til det unikke pizzeria Forno a Legna i Ordrup – bringer vi nu håndværket direkte til din baghave!" 
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
"eventsLabel": { 
  en: "Perfect Texture 🤤", 
  da: "Perfekt Tekstur 🤤" 
},
"eventsDesc": {
  en: "48-hour raised dough for exceptional flavor", 
  da: "48-timers hævet dej for enestående smag" 
},
  "pizzaTypesLabel": { en: "Pizza Types", da: "Pizzatyper" },
  "pizzaTypesDesc": { en: "From classic to gourmet options", da: "Fra klassisk til gourmet muligheder" },
  "funLabel": { en: "Fun", da: "Sjov" },
  "funDesc": { en: "We bring the party with us!", da: "Vi bringer festen med os!" },
  
  // Menu section
  "ourPizzaMenu": { en: "Our Pizza Menu", da: "Vores Pizzamenu" },
 "menuSubtitle": { 
  en: "Neapolitan-inspired, handcrafted pizzas made fresh at your event with premium ingredients", 
  da: "Napolitansk-inspirerede, håndlavede pizzaer lavet friske til dit arrangement med førsteklasses ingredienser" 
},"classicPizzas": { en: "Classic Pizzas", da: "Klassiske Pizzaer" },
  "classicPizzasDesc": { en: "Our classic pizzas are made with traditional San Marzano tomato sauce and Fior de latte mozzarella base.", da: "Vores klassiske pizzaer er lavet med San Marzano tomatsauce og Fior de latte mozzarella som base." },
  "whitePizzas": { en: "White Pizzas", da: "Hvide Pizzaer" },
  "whitePizzasDesc": { en: "Our white pizzas are made with a creamy Mascarpone sauce base.", da: "Vores hvide pizzaer er lavet med en cremet Mascarpone sauce som base." },
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
"locationDesc": {
  "en": "We're mobile! We serve events throughout Greater Copenhagen.",
  "da": "Vi er mobile! Vi serverer ved arrangementer i hele Storkøbenhavn."
},

  "email": { en: "Email", da: "E-mail" },
  "phone": { en: "Phone", da: "Telefon" },
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

  "margherita": { en: "Margherita", da: "Margherita" },
"margheritaIngredients": { 
  en: "Fresh basil & olive oil", 
  da: "Frisk basilikum & olivenolie" 
},

"pepperoni": { en: "Pepperoni", da: "Pepperoni" },
"pepperoniIngredients": { 
  en: "Classik", 
  da: "Klassik" 
},

"hawaiian": { en: "Hawaiian", da: "Hawaii" },
"hawaiianIngredients": { 
  en: "Ham & fresh pineapple", 
  da: "Skinke & frisk ananas" 
},

"meatLovers": { en: "Capricciosa", da: "Capricciosa" },
"meatLoversIngredients": { 
  en: "Ham & mushrooms", 
  da: "Skinke & stegte blandet svampe" 
},

"diavola": { en: "Diavola", da: "Diavola" },
"diavolaIngredients": { 
  en: "Salame ventricina & chili", 
  da: "Salame ventricina & chili" 
},

"fourCheese": { en: "4 formaggi ", da: "4 formaggi" },
"fourCheeseIngredients": { 
  en: "Mascarpone, Fior di latte, mini mozzarella, gorgonzola, parmigiano reggiano", 
  da: "Mascarpone, Fior di latte, mini mozzarella, gorgonzola, parmigiano reggiano" 
},

"truffleMushroom": { en: "O sole mio", da: "O sole mio" },
"truffleMushroomIngredients": { 
  en: "Mascarpone, Fior de latte, mix fungi, pine nuts, truffle, pesto, parmigiano reggiano ", 
  da: "Mascarpone, Fior de latte, mix fungi, pinjekerner, trøffel, pesto, parmigiano reggiano ",
},

"prosciuttoArugula": { en: "Prosciutto & Arugula", da: "Parmaskinke & Rucola" },
"prosciuttoArugulaIngredients": { 
  en: "San Marzano tomato sauce and Fior de latte mozzarella, prosciutto di Parma, arugula, cherry tomatoes, parmigiano reggiano, pesto", 
  da: "San Marzano tomatsauce, Fior de latte mozzarella, parmaskinke, rucola, cherrytomater, parmigiano reggiano, pesto" 
},

"figGoatCheese": { en: "Sweet bresaola", da: "Sweet bresaola" },
"figGoatCheeseIngredients": { 
  en: "Mascarpone, bresaola, honey, parmigiano reggiano", 
  da: "Mascarpone, bresaola, honning, parmigiano reggiano" 
},
// Pricing section
"pricing": { en: "Our Pricing", da: "Vores Priser" },
"priceByAgreement": { 
  en: "Price by agreement. Contact us for a customized quote.", 
  da: "Pris efter aftale. Kontakt os for et tilpasset tilbud." 
},
"hourlyRate": { en: "Hourly Rate", da: "Timepris" },
"perPizza": { en: "per pizza", da: "pr. pizza" },
"pizzaCapacity": { en: "Capacity", da: "Kapacitet" },
"maxPizzaPerHour": { en: "Maximum 80 pizzas per hour", da: "Maksimalt 80 pizzaer pr. time" },
"minimumOrder": { en: "Minimum Order", da: "Minimum Bestilling" },
"pizzas": { en: "pizzas", da: "pizzaer" },
"setupTime": { en: "We arrive 45 minutes before to set up, warm up, and decorate - all free of charge", da: "Vi ankommer 45 minutter før for at gøre klar, varme op og pynte - helt gratis" },
"pizzaSelectionTime": { en: "You can choose your pizzas later - booking at least 3 days before the event is most important", da: "I kan altid vælge pizzaerne senere - det vigtigste er at bestille minimum 3 dage før eventet" },

// Questions section
"questions": { en: "Have Questions?", da: "Har I Spørgsmål?" },
"questionsDesc": { en: "If you have any questions about our services, pricing, or availability, feel free to reach out to us.", da: "Hvis I har spørgsmål om vores services, priser eller tilgængelighed, er I meget velkomne til at kontakte os." },
"responseTimeNote": { en: "We'll get back to you as soon as possible to help make your event a success!", da: "Vi vender tilbage hurtigst muligt for at hjælpe med at gøre jeres arrangement til en succes!" },
"bookingDeadline": { en: "Booking Deadline", da: "Bookingfrist" },
"bookingDeadlineDesc": { en: "Please book at least 3 days before your event", da: "Venligst book mindst 3 dage før dit arrangement" },
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('da');

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
