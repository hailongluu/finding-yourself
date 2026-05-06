import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const capabilityLabels = {
  expertise: { vi: 'Chuyên môn', en: 'Expertise' },
  creativity: { vi: 'Sáng tạo', en: 'Creativity' },
  communication: { vi: 'Giao tiếp', en: 'Communication' },
  sales: { vi: 'Bán hàng', en: 'Sales' },
  analysis: { vi: 'Phân tích', en: 'Analysis' },
  operations: { vi: 'Vận hành', en: 'Operations' },
  discipline: { vi: 'Kỷ luật', en: 'Discipline' },
  learning: { vi: 'Học hỏi', en: 'Learning' }
};

const CapabilityBars = ({ capabilityScores }) => {
  const { language } = useLanguage();

  const getColorClass = (score) => {
    if (score >= 80) return 'from-accent-green to-accent-green/80';
    if (score >= 60) return 'from-accent-purple to-accent-purple/80';
    return 'from-primary-400 to-primary-300';
  };

  return (
    <div className="space-y-4">
      {Object.entries(capabilityScores).map(([key, score]) => {
        const label = capabilityLabels[key];
        const colorClass = getColorClass(score);

        return (
          <div key={key} className="group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-primary-900">
                {language === 'vi' ? label.vi : label.en}
              </span>
              <span className="text-sm font-bold text-accent-purple">
                {score}
              </span>
            </div>
            <div className="h-3 bg-primary-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-700 ease-out group-hover:scale-x-105 origin-left`}
                style={{ width: `${score}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CapabilityBars;
