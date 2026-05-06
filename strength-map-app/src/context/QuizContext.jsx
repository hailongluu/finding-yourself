import { createContext, useContext, useState } from 'react';
import { questions } from '../data/questions.js';
import { generateResult } from '../logic/resultGenerator.js';

const QuizContext = createContext();

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
};

export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const answerQuestion = (questionId, selectedOptions) => {
    // Handle both single and multiple choice
    const answerData = Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions];

    // Store answer with question context
    const newAnswer = {
      questionId,
      question: currentQuestion,
      selectedOptions: answerData,
      // Flatten scores from all selected options
      score: answerData.reduce((acc, option) => {
        if (option.score) {
          Object.keys(option.score).forEach(key => {
            acc[key] = (acc[key] || 0) + option.score[key];
          });
        }
        return acc;
      }, {}),
      value: answerData[0]?.value, // For single choice compatibility
      timestamp: new Date().toISOString()
    };

    // Update or add answer
    setAnswers(prev => {
      const existingIndex = prev.findIndex(a => a.questionId === questionId);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = newAnswer;
        return updated;
      }
      return [...prev, newAnswer];
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      completeQuiz();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const goToQuestion = (index) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentQuestionIndex(index);
    }
  };

  const completeQuiz = () => {
    // Generate result from answers
    const generatedResult = generateResult(answers);
    setResult(generatedResult);
    setIsCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setIsCompleted(false);
  };

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === currentQuestion?.id);
  };

  const isQuestionAnswered = (questionId) => {
    return answers.some(a => a.questionId === questionId);
  };

  const canProceed = () => {
    // Check if current question is answered
    return isQuestionAnswered(currentQuestion?.id);
  };

  const value = {
    // State
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    answers,
    result,
    isCompleted,

    // Actions
    answerQuestion,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    completeQuiz,
    resetQuiz,

    // Helpers
    getCurrentAnswer,
    isQuestionAnswered,
    canProceed
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
