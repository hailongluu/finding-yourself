import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi'); // Default to Vietnamese

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  const t = (textObj) => {
    if (typeof textObj === 'string') return textObj;
    if (!textObj) return '';

    // Handle objects with vi/en keys
    if (textObj.vi && textObj.en) {
      return language === 'vi' ? textObj.vi : textObj.en;
    }

    // Handle objects with labelVi/labelEn keys
    if (textObj.labelVi && textObj.labelEn) {
      return language === 'vi' ? textObj.labelVi : textObj.labelEn;
    }

    // Handle objects with nameVi/nameEn keys
    if (textObj.nameVi && textObj.nameEn) {
      return language === 'vi' ? textObj.nameVi : textObj.nameEn;
    }

    // Handle objects with descriptionVi/descriptionEn keys
    if (textObj.descriptionVi && textObj.descriptionEn) {
      return language === 'vi' ? textObj.descriptionVi : textObj.descriptionEn;
    }

    return textObj[language] || textObj.vi || textObj.en || '';
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t, // Translation helper function
    isVietnamese: language === 'vi',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
