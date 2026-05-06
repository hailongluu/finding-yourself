import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const StrengthCard = ({ strength, index }) => {
  const { language } = useLanguage();

  return (
    <div className="card bg-gradient-to-br from-white to-primary-50 border-2 border-primary-100 hover:border-accent-purple/50 transition-all">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-green rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-accent-purple bg-accent-purple/10 px-2 py-1 rounded">
              #{index + 1}
            </span>
            <h3 className="text-lg font-bold text-primary-900">
              {language === 'vi' ? strength.nameVi : strength.nameEn}
            </h3>
          </div>

          {/* Score bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-text-secondary">
                {language === 'vi' ? 'Điểm số' : 'Score'}
              </span>
              <span className="text-sm font-bold text-accent-purple">
                {strength.score}/100
              </span>
            </div>
            <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent-purple to-accent-green rounded-full transition-all duration-500"
                style={{ width: `${strength.score}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrengthCard;
