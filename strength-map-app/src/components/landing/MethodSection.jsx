import React from 'react';
import { Sparkles, Briefcase, Heart, Wallet, Target } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { landingContent } from '../../data/content';

const iconMap = {
  Sparkles,
  Briefcase,
  Heart,
  Wallet,
  Target
};

const MethodSection = () => {
  const { t, language } = useLanguage();
  const solution = landingContent.solution;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {language === 'vi' ? solution.titleVi : solution.titleEn}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {language === 'vi' ? solution.subtitleVi : solution.subtitleEn}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {solution.layers.map((layer, index) => {
            const Icon = iconMap[layer.icon];
            return (
              <div
                key={index}
                className="card text-center hover:scale-105 transition-transform duration-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-purple to-accent-green rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  {language === 'vi' ? layer.titleVi : layer.titleEn}
                </h3>
                <p className="text-sm text-text-secondary">
                  {language === 'vi' ? layer.descriptionVi : layer.descriptionEn}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border-2 border-accent-purple/20">
            <p className="text-lg font-medium text-primary-900">
              {t({
                vi: '5 lớp phân tích này giúp chúng tôi tạo ra bản đồ thế mạnh chính xác và cá nhân hóa cho bạn.',
                en: 'These 5 analysis layers help us create an accurate and personalized strength map for you.'
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
