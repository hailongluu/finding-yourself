import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { landingContent } from '../../data/content';

const AnalysisLoading = ({ onComplete, duration = 3000 }) => {
  const { language } = useLanguage();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messages = landingContent.loading.messages;

  useEffect(() => {
    // Cycle through messages
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1000);

    // Complete after duration
    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete, messages.length]);

  const currentMessage = messages[currentMessageIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated loader */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-accent-purple/20 rounded-full"></div>

            {/* Spinning ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-accent-purple border-r-accent-green rounded-full animate-spin"></div>

            {/* Inner circle */}
            <div className="absolute inset-4 bg-gradient-to-br from-accent-purple to-accent-green rounded-full flex items-center justify-center">
              <Loader2 className="w-12 h-12 text-white animate-spin" />
            </div>
          </div>

          {/* Pulsing circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-accent-purple/10 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Loading message */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 animate-fade-in">
            {language === 'vi' ? currentMessage.vi : currentMessage.en}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-accent-purple rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-accent-green rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-accent-purple rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="max-w-md mx-auto">
          <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-accent-purple to-accent-green rounded-full animate-progress"></div>
          </div>
        </div>

        {/* Subtext */}
        <p className="mt-6 text-sm text-text-secondary">
          {language === 'vi'
            ? 'Đang tạo bản đồ thế mạnh cá nhân hóa cho bạn...'
            : 'Creating your personalized strength map...'
          }
        </p>
      </div>
    </div>
  );
};

export default AnalysisLoading;
