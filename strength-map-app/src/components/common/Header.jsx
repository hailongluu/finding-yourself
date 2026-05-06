import React from 'react';
import { Map } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-white border-b border-primary-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-navy to-accent-purple rounded-lg flex items-center justify-center">
              <Map className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-primary-900">
                {t({ vi: 'Bản đồ Thế mạnh', en: 'Strength Map' })}
              </h1>
              <p className="text-xs text-text-secondary hidden md:block">
                {t({ vi: 'Kinh doanh Online', en: 'Online Business' })}
              </p>
            </div>
          </div>

          {/* Language Toggle */}
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
