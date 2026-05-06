import React, { useState } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useQuiz } from '../../context/QuizContext';
import { archetypes } from '../../data/archetypes';
import { landingContent } from '../../data/content';
import Button from '../common/Button';
import StrengthCard from './StrengthCard';
import CapabilityBars from './CapabilityBars';
import OpportunityCard from './OpportunityCard';
import LeadCaptureModal from './LeadCaptureModal';

const ResultDashboard = () => {
  const { language, t } = useLanguage();
  const { result } = useQuiz();
  const resultContent = landingContent.result;

  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-text-secondary">
          {t({ vi: 'Đang tải kết quả...', en: 'Loading results...' })}
        </p>
      </div>
    );
  }

  const primaryArchetype = archetypes[result.primaryArchetype];
  const secondaryArchetype = archetypes[result.secondaryArchetype];

  const handleLeadSubmit = (formData) => {
    console.log('Lead captured:', formData);
    setEmailSubmitted(true);
    setShowLeadCapture(false);
    // In production, send to backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {language === 'vi' ? resultContent.titleVi : resultContent.titleEn}
          </h1>
          <p className="text-lg text-text-secondary">
            {t({
              vi: 'Dưới đây là phân tích chi tiết về thế mạnh và hướng kinh doanh phù hợp với bạn',
              en: 'Below is a detailed analysis of your strengths and suitable business directions'
            })}
          </p>
        </div>

        {/* Primary Archetype Card */}
        <div className="mb-8">
          <div className="card bg-gradient-to-br from-white to-accent-purple/5 border-2 border-accent-purple/30">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-purple to-accent-green rounded-2xl flex items-center justify-center text-4xl">
                  {primaryArchetype.icon === 'UserCheck' && '👤'}
                  {primaryArchetype.icon === 'BookOpen' && '📚'}
                  {primaryArchetype.icon === 'Settings' && '⚙️'}
                  {primaryArchetype.icon === 'Users' && '👥'}
                  {primaryArchetype.icon === 'Briefcase' && '💼'}
                  {primaryArchetype.icon === 'TrendingUp' && '📈'}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-accent-purple bg-accent-purple/10 px-3 py-1 rounded-full">
                    {t({ vi: 'HỒ SƠ CHÍNH', en: 'PRIMARY PROFILE' })}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
                    {language === 'vi' ? primaryArchetype.nameVi : primaryArchetype.nameEn}
                  </h2>
                </div>
                <p className="text-lg text-text-secondary mb-4">
                  {language === 'vi' ? primaryArchetype.detailVi : primaryArchetype.detailEn}
                </p>
                {secondaryArchetype && (
                  <p className="text-sm text-accent-purple font-medium">
                    {t({ vi: 'Hồ sơ phụ:', en: 'Secondary profile:' })} {language === 'vi' ? secondaryArchetype.nameVi : secondaryArchetype.nameEn}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Top Strengths */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            {language === 'vi' ? resultContent.strengthsTitleVi : resultContent.strengthsTitleEn}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {result.topStrengths.slice(0, 5).map((strength, index) => (
              <StrengthCard key={strength.key} strength={strength} index={index} />
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-8">
          <div className="card">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              {language === 'vi' ? resultContent.capabilitiesTitleVi : resultContent.capabilitiesTitleEn}
            </h3>
            <CapabilityBars capabilityScores={result.capabilityScores} />
          </div>
        </div>

        {/* Available Assets & Blocker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Assets */}
          <div className="card bg-gradient-to-br from-accent-green/5 to-white">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              {language === 'vi' ? resultContent.assetsTitleVi : resultContent.assetsTitleEn}
            </h3>
            <ul className="space-y-2">
              {result.availableAssets.map((asset, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent-green text-lg">✓</span>
                  <span className="text-text-secondary">
                    {language === 'vi' ? asset.vi : asset.en}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Blocker */}
          <div className="card bg-gradient-to-br from-accent-warning/5 to-white">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              {language === 'vi' ? resultContent.blockerTitleVi : resultContent.blockerTitleEn}
            </h3>
            <p className="text-text-secondary">
              {language === 'vi' ? result.mainBlocker.vi : result.mainBlocker.en}
            </p>
          </div>
        </div>

        {/* Recommended Directions */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            {language === 'vi' ? resultContent.directionsTitleVi : resultContent.directionsTitleEn}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.recommendedDirections.map((direction, index) => (
              <OpportunityCard key={index} direction={direction} rank={index + 1} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="card bg-gradient-to-br from-accent-purple/10 to-accent-green/10 border-2 border-accent-purple/30 text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            {language === 'vi' ? resultContent.nextStepTitleVi : resultContent.nextStepTitleEn}
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            {t({
              vi: 'Nhận lộ trình 30 ngày chi tiết để biến thế mạnh của bạn thành hướng kinh doanh online đầu tiên',
              en: 'Get a detailed 30-day roadmap to turn your strengths into your first online business direction'
            })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setShowLeadCapture(true)}
              variant="primary"
              size="large"
              className="group"
            >
              {language === 'vi' ? resultContent.ctaVi : resultContent.ctaEn}
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {emailSubmitted && (
              <Button variant="secondary" size="large">
                <Mail className="inline-block mr-2 w-5 h-5" />
                {t({ vi: 'Gửi vào Email', en: 'Send to Email' })}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={showLeadCapture}
        onClose={() => setShowLeadCapture(false)}
        onSubmit={handleLeadSubmit}
      />
    </div>
  );
};

export default ResultDashboard;
