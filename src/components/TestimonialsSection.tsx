
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Jessica Miller",
    role: "Birthday Party Host",
    content: "Pizza Crew was the highlight of my daughter's 16th birthday party! Their setup was impressive, the pizza was amazing, and the staff was super friendly. All the kids loved watching their pizzas being made fresh!",
    avatar: "JM"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Corporate Event Planner",
    content: "We hired Pizza Crew for our company's summer party and they exceeded expectations. They handled 75+ people efficiently, offered great variety, and the quality was outstanding. Will definitely book again!",
    avatar: "MR"
  },
  {
    id: 3,
    name: "Sarah Thompson",
    role: "Wedding Coordinator",
    content: "Pizza Crew provided late-night snacks for our wedding reception. Our guests RAVED about the food, and it created such a fun atmosphere. Their team was professional from booking to cleanup.",
    avatar: "ST"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="logo-text text-3xl md:text-4xl text-pizza-orange mb-4">
            What People Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - here's what our happy customers have to say about the Pizza Crew experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="mb-4 text-pizza-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarFallback className="bg-pizza-orange text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-medium">
            Ready to create your own amazing experience? 
            <a href="#contact" className="text-pizza-orange font-bold ml-2 hover:underline">
              Book us today!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
