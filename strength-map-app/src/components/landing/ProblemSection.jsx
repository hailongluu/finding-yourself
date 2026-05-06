import React from 'react';
import { HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { landingContent } from '../../data/content';

const ProblemSection = () => {
  const { t, language } = useLanguage();
  const problem = landingContent.problem;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {language === 'vi' ? problem.titleVi : problem.titleEn}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problem.questions.map((question, index) => (
            <div
              key={index}
              className="card-interactive bg-gradient-to-br from-white to-primary-50 border-2 border-primary-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-accent-purple/10 rounded-full flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-accent-purple" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium text-primary-900">
                    {language === 'vi' ? question.vi : question.en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t({
              vi: 'Nếu bạn đang có những câu hỏi này, bạn không đơn độc. Hàng nghìn dân văn phòng cũng đang tìm kiếm câu trả lời.',
              en: 'If you have these questions, you\'re not alone. Thousands of office workers are also seeking answers.'
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
