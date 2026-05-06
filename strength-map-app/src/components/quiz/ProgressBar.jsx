import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ProgressBar = ({ current, total, percentage }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Progress text */}
      <div className="flex items-center justify-between mb-2 text-sm">
        <span className="font-medium text-text-secondary">
          {t({ vi: 'Tiến độ', en: 'Progress' })}
        </span>
        <span className="font-semibold text-primary-navy">
          {current} / {total}
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative w-full h-3 bg-primary-100 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-purple to-accent-green rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Percentage text */}
      <div className="mt-1 text-right">
        <span className="text-xs font-medium text-accent-purple">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
