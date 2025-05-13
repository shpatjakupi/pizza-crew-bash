
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/context/LanguageContext';

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
// In the handleSubmit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    
    if (data.success) {
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
    } else {
      throw new Error(data.message || 'Failed to send email');
    }
  } catch (error) {
    toast({
      title: "Error sending request",
      description: "Please try again or contact us directly.",
      variant: "destructive",
    });
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="logo-text text-3xl md:text-4xl text-pizza-orange mb-4">
            {t('bringThePizzaParty')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('yourName')}
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
                    {t('emailAddress')}
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
                    {t('phoneNumber')}
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
                    {t('eventDate')}
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
                    {t('eventType')}
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  >
                    <option value="" disabled>{t('selectEventType')}</option>
                    <option value="birthday">{t('birthday')}</option>
                    <option value="confirmation">{t('confirmation')}</option>
                    <option value="student">{t('student')}</option>
                    <option value="corporate">{t('corporate')}</option>
                    <option value="privateParty">{t('privateParty')}</option>
                    <option value="other">{t('other')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('numberOfGuests')}
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
                  {t('additionalDetails')}
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder={t('tellUsMore')}
                  className="min-h-[120px]"
                />
              </div>
              
            <Button
              type="submit"
              className="w-full gradient-orange text-white font-semibold py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (t('sending') || 'Sending...') : t('bookPizzaCrewNow')}
            </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 bg-orange-50 rounded-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">{t('contactInfo')}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-pizza-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{t('location')}</h4>
                    <p className="text-gray-600">{t('locationDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-pizza-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{t('email')}</h4>
                    <p className="text-gray-600">bookings@pizzacrew.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-pizza-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{t('phone')}</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="text-pizza-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{t('availability')}</h4>
                    <p className="text-gray-600">{t('availabilityDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">{t('ourServiceAreas')}</h3>
              <div className="bg-white p-4 rounded-lg">
                <img 
                  src="https://placehold.co/600x400/orange/white?text=Service+Area+Map"
                  alt="Map of our service areas" 
                  className="rounded-lg w-full h-auto mb-4"
                />
                <p className="text-gray-600">
                  {t('serviceAreasDesc')}
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
