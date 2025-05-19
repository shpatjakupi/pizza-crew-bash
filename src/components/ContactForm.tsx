import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Mail, Phone, Clock, CreditCard, Check } from "lucide-react";
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
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            <div className="bg-orange-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CreditCard className="text-pizza-orange mr-2" />
                {t('pricing')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-pizza-orange mr-2 mt-1 flex-shrink-0" />
                  <span><strong>{t('hourlyRate')}:</strong> {t('priceByAgreement')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-pizza-orange mr-2 mt-1 flex-shrink-0" />
                  <span><strong>{t('pizzaCapacity')}:</strong> {t('maxPizzaPerHour')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-pizza-orange mr-2 mt-1 flex-shrink-0" />
                  <span><strong>{t('minimumOrder')}:</strong> 20 {t('pizzas')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-pizza-orange mr-2 mt-1 flex-shrink-0" />
                  <span>{t('setupTime')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-pizza-orange mr-2 mt-1 flex-shrink-0" />
                  <span>{t('pizzaSelectionTime')}</span>
                </li>
              </ul>
            </div>
            
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
                    placeholder="+45 12345678" 
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
                    <p className="text-gray-600">booking@pizzacrew.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-pizza-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{t('phone')}</h4>
                    <p className="text-gray-600">+45 53630347</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-pizza-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{t('bookingDeadline')}</h4>
                    <p className="text-gray-600">{t('bookingDeadlineDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-orange-100">
              <h3 className="text-xl font-bold mb-3 text-pizza-orange">{t('questions')}</h3>
              <p className="text-gray-700 mb-4">{t('questionsDesc')}</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm italic text-gray-700">{t('responseTimeNote')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;