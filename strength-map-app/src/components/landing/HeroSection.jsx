import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { landingContent } from '../../data/content';

const HeroSection = ({ onStartAssessment, onPreviewResults }) => {
  const { t, language } = useLanguage();
  const hero = landingContent.hero;

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-purple opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-green opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
              {language === 'vi' ? hero.titleVi : hero.titleEn}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
              {language === 'vi' ? hero.subtitleVi : hero.subtitleEn}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={onStartAssessment}
                variant="primary"
                size="large"
                className="group"
              >
                {language === 'vi' ? hero.ctaPrimaryVi : hero.ctaPrimaryEn}
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={onPreviewResults}
                variant="secondary"
                size="large"
                className="group"
              >
                <Play className="inline-block mr-2 w-5 h-5" />
                {language === 'vi' ? hero.ctaSecondaryVi : hero.ctaSecondaryEn}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-accent-green text-xl">✓</span>
                <span>{t({ vi: 'Miễn phí 100%', en: '100% Free' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green text-xl">✓</span>
                <span>{t({ vi: '10 phút hoàn thành', en: '10 min to complete' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green text-xl">✓</span>
                <span>{t({ vi: 'Kết quả cá nhân hóa', en: 'Personalized results' })}</span>
              </div>
            </div>
          </div>

          {/* Right: Visual/Mockup */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-primary-200">
              {/* Mockup of result dashboard */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-primary-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-green rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-primary-100 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-primary-50 rounded w-1/2"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-primary-50 rounded-lg p-4">
                      <div className="h-3 bg-primary-200 rounded w-2/3 mb-2"></div>
                      <div className="h-6 bg-primary-300 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-accent-purple/10 to-accent-green/10 rounded-lg p-4">
                  <div className="h-3 bg-accent-purple/30 rounded w-1/2 mb-3"></div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-2 bg-accent-green/30 rounded" style={{ width: `${100 - i * 15}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent-green text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                {t({ vi: 'Kết quả mẫu', en: 'Sample Result' })}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-purple/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-green/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
