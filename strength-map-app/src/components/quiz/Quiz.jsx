import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useQuiz } from '../../context/QuizContext';
import { useLanguage } from '../../context/LanguageContext';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import Button from '../common/Button';

const Quiz = ({ onComplete }) => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    getCurrentAnswer,
    canProceed
  } = useQuiz();

  const { t } = useLanguage();

  const handleAnswer = (questionId, selectedOptions) => {
    answerQuestion(questionId, selectedOptions);
  };

  const handleNext = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      // Last question - complete quiz
      nextQuestion(); // This will trigger completeQuiz in context
      onComplete();
    } else {
      nextQuestion();
    }
  };

  const handlePrevious = () => {
    previousQuestion();
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-text-secondary">
          {t({ vi: 'Đang tải câu hỏi...', en: 'Loading questions...' })}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={totalQuestions}
            percentage={progress}
          />
        </div>

        {/* Question Card */}
        <div className="mb-8">
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            currentAnswer={getCurrentAnswer()}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4">
          <Button
            onClick={handlePrevious}
            variant="outline"
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">
              {t({ vi: 'Quay lại', en: 'Back' })}
            </span>
          </Button>

          <div className="text-center text-sm text-text-secondary">
            {t({
              vi: `Câu ${currentQuestionIndex + 1} / ${totalQuestions}`,
              en: `Question ${currentQuestionIndex + 1} / ${totalQuestions}`
            })}
          </div>

          <Button
            onClick={handleNext}
            variant="primary"
            disabled={!canProceed()}
            className="flex items-center gap-2"
          >
            <span className="hidden sm:inline">
              {currentQuestionIndex === totalQuestions - 1
                ? t({ vi: 'Hoàn thành', en: 'Complete' })
                : t({ vi: 'Tiếp theo', en: 'Next' })
              }
            </span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Help text */}
        {!canProceed() && (
          <div className="mt-4 text-center">
            <p className="text-sm text-accent-warning">
              {t({
                vi: 'Vui lòng chọn ít nhất một đáp án để tiếp tục',
                en: 'Please select at least one option to continue'
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
