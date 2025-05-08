
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'da' : 'en');
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white"
    >
      <Globe size={16} />
      {language === 'en' ? t('danish') : t('english')}
    </Button>
  );
};

export default LanguageToggle;
