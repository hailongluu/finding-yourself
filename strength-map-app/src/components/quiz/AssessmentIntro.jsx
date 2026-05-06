import React from 'react';
import { Clock, FileText, Target, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { landingContent } from '../../data/content';

const AssessmentIntro = ({ onStart }) => {
  const { t, language } = useLanguage();
  const intro = landingContent.assessmentIntro;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-primary-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-purple to-accent-green rounded-full flex items-center justify-center">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {language === 'vi' ? intro.titleVi : intro.titleEn}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {language === 'vi' ? intro.subtitleVi : intro.subtitleEn}
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
              <Clock className="w-6 h-6 text-accent-purple flex-shrink-0" />
              <span className="text-sm font-medium text-primary-900">
                {language === 'vi' ? intro.durationVi : intro.durationEn}
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
              <FileText className="w-6 h-6 text-accent-green flex-shrink-0" />
              <span className="text-sm font-medium text-primary-900">
                {language === 'vi' ? intro.questionsVi : intro.questionsEn}
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg">
              <Target className="w-6 h-6 text-accent-purple flex-shrink-0" />
              <span className="text-sm font-medium text-primary-900">
                {language === 'vi' ? intro.resultVi : intro.resultEn}
              </span>
            </div>
          </div>

          {/* Commitments */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">
              {t({ vi: 'Cam kết của chúng tôi', en: 'Our Commitment' })}
            </h3>
            <div className="space-y-3">
              {intro.commitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-accent-green/5 to-accent-purple/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">
                      {language === 'vi' ? commitment.titleVi : commitment.titleEn}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {language === 'vi' ? commitment.descriptionVi : commitment.descriptionEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mb-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-accent-purple flex-shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary">
                {t({
                  vi: 'Thông tin của bạn chỉ được dùng để tạo bản đồ thế mạnh và gửi kết quả nếu bạn yêu cầu. Chúng tôi không chia sẻ dữ liệu của bạn.',
                  en: 'Your information is only used to create your strength map and send results if you request. We do not share your data.'
                })}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              onClick={onStart}
              variant="primary"
              size="large"
              className="group"
            >
              {language === 'vi' ? intro.ctaVi : intro.ctaEn}
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="mt-4 text-sm text-text-secondary">
              {t({
                vi: 'Bạn có thể quay lại bất cứ lúc nào',
                en: 'You can go back anytime'
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentIntro;
