import React from 'react';
import { Map, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { landingContent } from '../../data/content';

const Footer = () => {
  const { t, language } = useLanguage();
  const footer = landingContent.footer;

  return (
    <footer className="bg-primary-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-green rounded-lg flex items-center justify-center">
                <Map className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">
                {t({ vi: 'Bản đồ Thế mạnh', en: 'Strength Map' })}
              </h3>
            </div>
            <p className="text-primary-200 text-sm">
              {language === 'vi' ? footer.descriptionVi : footer.descriptionEn}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {t({ vi: 'Liên kết', en: 'Links' })}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-200 hover:text-white transition-colors">
                  {language === 'vi' ? footer.privacyVi : footer.privacyEn}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white transition-colors">
                  {language === 'vi' ? footer.contactVi : footer.contactEn}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">
              {t({ vi: 'Liên hệ', en: 'Contact' })}
            </h4>
            <div className="flex items-center gap-2 text-primary-200 text-sm">
              <Mail className="w-4 h-4" />
              <span>contact@strengthmap.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-sm text-primary-300">
          {language === 'vi' ? footer.copyrightVi : footer.copyrightEn}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
