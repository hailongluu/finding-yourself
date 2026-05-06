import React from 'react';
import { TrendingUp, Clock, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const OpportunityCard = ({ direction, rank }) => {
  const { language } = useLanguage();

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'low':
        return 'text-accent-green bg-accent-green/10';
      case 'medium':
        return 'text-accent-warning bg-accent-warning/10';
      case 'high':
        return 'text-accent-purple bg-accent-purple/10';
      default:
        return 'text-primary-500 bg-primary-100';
    }
  };

  const getDifficultyLabel = (difficulty) => {
    const labels = {
      low: { vi: 'Dễ', en: 'Easy' },
      medium: { vi: 'Trung bình', en: 'Medium' },
      high: { vi: 'Khó', en: 'Hard' }
    };
    return language === 'vi' ? labels[difficulty]?.vi : labels[difficulty]?.en;
  };

  return (
    <div className="card bg-white border-2 border-primary-100 hover:border-accent-purple/50 hover:shadow-lg transition-all">
      {/* Rank badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-accent-purple to-accent-green rounded-full flex items-center justify-center text-white font-bold text-sm">
            {rank}
          </div>
          <h3 className="text-xl font-bold text-primary-900">
            {language === 'vi' ? direction.nameVi : direction.nameEn}
          </h3>
        </div>
        <div className="flex items-center gap-1 text-accent-green">
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-bold">{direction.fit}%</span>
        </div>
      </div>

      {/* Reason */}
      <p className="text-text-secondary mb-4">
        {language === 'vi' ? direction.reasonVi : direction.reasonEn}
      </p>

      {/* Meta info */}
      <div className="flex flex-wrap gap-3 text-sm">
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${getDifficultyColor(direction.difficulty)}`}>
          <AlertCircle className="w-4 h-4" />
          <span className="font-medium">{getDifficultyLabel(direction.difficulty)}</span>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 rounded-full text-primary-700 bg-primary-100">
          <Clock className="w-4 h-4" />
          <span className="font-medium">{direction.timeToLaunch}</span>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
