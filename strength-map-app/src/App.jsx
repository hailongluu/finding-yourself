import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { QuizProvider } from './context/QuizContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HeroSection from './components/landing/HeroSection';
import ProblemSection from './components/landing/ProblemSection';
import MethodSection from './components/landing/MethodSection';
import HowItWorks from './components/landing/HowItWorks';
import AssessmentIntro from './components/quiz/AssessmentIntro';
import Quiz from './components/quiz/Quiz';
import AnalysisLoading from './components/quiz/AnalysisLoading';
import ResultDashboard from './components/result/ResultDashboard';

// View states
const VIEWS = {
  LANDING: 'landing',
  ASSESSMENT_INTRO: 'assessment_intro',
  QUIZ: 'quiz',
  LOADING: 'loading',
  RESULT: 'result'
};

function App() {
  const [currentView, setCurrentView] = useState(VIEWS.LANDING);

  const handleStartAssessment = () => {
    setCurrentView(VIEWS.ASSESSMENT_INTRO);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = () => {
    setCurrentView(VIEWS.QUIZ);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizComplete = () => {
    setCurrentView(VIEWS.LOADING);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadingComplete = () => {
    setCurrentView(VIEWS.RESULT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviewResults = () => {
    // For demo purposes, could show a sample result
    alert('Preview feature - would show sample results');
  };

  const handleBackToHome = () => {
    setCurrentView(VIEWS.LANDING);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <QuizProvider>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">
            {/* Landing Page */}
            {currentView === VIEWS.LANDING && (
              <>
                <HeroSection
                  onStartAssessment={handleStartAssessment}
                  onPreviewResults={handlePreviewResults}
                />
                <ProblemSection />
                <MethodSection />
                <HowItWorks />
              </>
            )}

            {/* Assessment Intro */}
            {currentView === VIEWS.ASSESSMENT_INTRO && (
              <AssessmentIntro onStart={handleStartQuiz} />
            )}

            {/* Quiz */}
            {currentView === VIEWS.QUIZ && (
              <Quiz onComplete={handleQuizComplete} />
            )}

            {/* Loading/Analysis */}
            {currentView === VIEWS.LOADING && (
              <AnalysisLoading onComplete={handleLoadingComplete} duration={3000} />
            )}

            {/* Results */}
            {currentView === VIEWS.RESULT && (
              <ResultDashboard />
            )}
          </main>

          {/* Only show footer on landing page */}
          {currentView === VIEWS.LANDING && <Footer />}
        </div>
      </QuizProvider>
    </LanguageProvider>
  );
}

export default App;
