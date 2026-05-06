import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const QuestionCard = ({ question, onAnswer, currentAnswer }) => {
  const { t, language } = useLanguage();
  const [selectedOptions, setSelectedOptions] = useState(
    currentAnswer?.selectedOptions || []
  );

  const isMultipleChoice = question.type === 'multiple_choice';
  const maxSelections = question.maxSelections || 3;

  const handleOptionClick = (option) => {
    if (isMultipleChoice) {
      // Multiple choice logic
      const isSelected = selectedOptions.some(o => o.value === option.value);

      if (isSelected) {
        // Deselect
        const newSelection = selectedOptions.filter(o => o.value !== option.value);
        setSelectedOptions(newSelection);
        onAnswer(question.id, newSelection);
      } else {
        // Select (if under max limit)
        if (selectedOptions.length < maxSelections) {
          const newSelection = [...selectedOptions, option];
          setSelectedOptions(newSelection);
          onAnswer(question.id, newSelection);
        }
      }
    } else {
      // Single choice logic
      setSelectedOptions([option]);
      onAnswer(question.id, option);
    }
  };

  const isOptionSelected = (option) => {
    return selectedOptions.some(o => o.value === option.value);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
          {language === 'vi' ? question.questionVi : question.questionEn}
        </h2>
        {isMultipleChoice && (
          <p className="text-sm text-text-secondary">
            {t({
              vi: `Chọn tối đa ${maxSelections} đáp án`,
              en: `Select up to ${maxSelections} options`
            })}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = isOptionSelected(option);

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`
                w-full text-left p-4 md:p-6 rounded-xl border-2 transition-all duration-200
                ${isSelected
                  ? 'border-accent-purple bg-accent-purple/5 shadow-md'
                  : 'border-primary-200 bg-white hover:border-accent-purple/50 hover:shadow-sm'
                }
                focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2
              `}
            >
              <div className="flex items-start gap-4">
                {/* Checkbox/Radio indicator */}
                <div className={`
                  flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                  ${isSelected
                    ? 'border-accent-purple bg-accent-purple'
                    : 'border-primary-300 bg-white'
                  }
                `}>
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>

                {/* Option text */}
                <div className="flex-1">
                  <p className={`font-medium ${isSelected ? 'text-accent-purple' : 'text-primary-900'}`}>
                    {language === 'vi' ? option.labelVi : option.labelEn}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selection count for multiple choice */}
      {isMultipleChoice && selectedOptions.length > 0 && (
        <div className="mt-4 text-center">
          <span className="text-sm text-text-secondary">
            {t({
              vi: `Đã chọn ${selectedOptions.length}/${maxSelections}`,
              en: `Selected ${selectedOptions.length}/${maxSelections}`
            })}
          </span>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
