
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    // Show success toast
    toast({
      title: "Booking request sent!",
      description: "We'll contact you soon to confirm your event details.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      guestCount: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="logo-text text-3xl md:text-4xl text-pizza-orange mb-4">
            Bring The Pizza Party
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to have the Pizza Crew at your next event? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    required 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    required 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="+1 (555) 123-4567" 
                    required 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Date
                  </label>
                  <Input 
                    id="eventDate" 
                    name="eventDate" 
                    type="date" 
                    value={formData.eventDate} 
                    onChange={handleChange} 
                    required 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  >
                    <option value="" disabled>Select event type</option>
                    <option value="birthday">Birthday</option>
                    <option value="confirmation">Confirmation</option>
                    <option value="student">Student Celebration</option>
                    <option value="corporate">Corporate/Networking</option>
                    <option value="privateParty">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <Input 
                    id="guestCount" 
                    name="guestCount" 
                    type="number" 
                    value={formData.guestCount} 
                    onChange={handleChange} 
                    placeholder="50" 
                    required 
                    className="w-full"
                    min="10"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell us more about your event..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full gradient-orange text-white font-semibold py-6"
              >
                Book Pizza Crew Now
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 bg-orange-50 rounded-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-pizza-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">We're mobile! We serve events throughout the region.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-pizza-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">bookings@pizzacrew.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-pizza-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="text-pizza-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Availability</h4>
                    <p className="text-gray-600">7 days a week, bookings required at least 7 days in advance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Our Service Areas</h3>
              <div className="bg-white p-4 rounded-lg">
                <img 
                  src="https://placehold.co/600x400/orange/white?text=Service+Area+Map"
                  alt="Map of our service areas" 
                  className="rounded-lg w-full h-auto mb-4"
                />
                <p className="text-gray-600">
                  We primarily serve a 50-mile radius but can travel further for larger events.
                  Contact us to check availability for your location!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
