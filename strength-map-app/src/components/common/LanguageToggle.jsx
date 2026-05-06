import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage, isVietnamese } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-primary-200 hover:border-primary-navy hover:bg-primary-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-navy focus:ring-offset-2"
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5 text-primary-navy" />
      <span className="font-medium text-primary-navy">
        {isVietnamese ? 'EN' : 'VI'}
      </span>
    </button>
  );
};

export default LanguageToggle;
