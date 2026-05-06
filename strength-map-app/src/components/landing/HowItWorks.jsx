import React from 'react';
import { ClipboardList, Map, Compass } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { landingContent } from '../../data/content';

const iconMap = {
  ClipboardList,
  Map,
  Compass
};

const HowItWorks = () => {
  const { t, language } = useLanguage();
  const howItWorks = landingContent.howItWorks;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {language === 'vi' ? howItWorks.titleVi : howItWorks.titleEn}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple via-accent-green to-accent-purple opacity-30"></div>

          {howItWorks.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={index} className="relative">
                <div className="card text-center bg-white relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-accent-purple to-accent-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  <div className="w-20 h-20 mx-auto mb-4 mt-4 bg-gradient-to-br from-primary-50 to-accent-purple/10 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-accent-purple" />
                  </div>

                  <h3 className="text-xl font-bold text-primary-900 mb-3">
                    {language === 'vi' ? step.titleVi : step.titleEn}
                  </h3>
                  <p className="text-text-secondary">
                    {language === 'vi' ? step.descriptionVi : step.descriptionEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-text-secondary">
            {t({
              vi: 'Đơn giản, nhanh chóng và hiệu quả. Bắt đầu ngay hôm nay!',
              en: 'Simple, fast, and effective. Start today!'
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
