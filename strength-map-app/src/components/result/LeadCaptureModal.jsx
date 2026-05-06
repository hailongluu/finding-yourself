import React, { useState } from 'react';
import { X, Mail, User, Lock } from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { landingContent } from '../../data/content';

const LeadCaptureModal = ({ isOpen, onClose, onSubmit }) => {
  const { language } = useLanguage();
  const leadCapture = landingContent.leadCapture;

  const [formData, setFormData] = useState({
    email: '',
    name: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = language === 'vi' ? 'Vui lòng nhập email' : 'Please enter email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === 'vi' ? 'Email không hợp lệ' : 'Invalid email';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-primary-50 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-text-secondary" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-purple to-accent-green rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-primary-900 mb-2">
            {language === 'vi' ? leadCapture.titleVi : leadCapture.titleEn}
          </h2>
          <p className="text-text-secondary">
            {language === 'vi' ? leadCapture.subtitleVi : leadCapture.subtitleEn}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
              {language === 'vi' ? 'Email *' : 'Email *'}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={language === 'vi' ? leadCapture.emailPlaceholderVi : leadCapture.emailPlaceholderEn}
                className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple transition-colors ${
                  errors.email ? 'border-red-500' : 'border-primary-200'
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Name field (optional) */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
              {language === 'vi' ? 'Tên (tùy chọn)' : 'Name (optional)'}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={language === 'vi' ? leadCapture.namePlaceholderVi : leadCapture.namePlaceholderEn}
                className="w-full pl-10 pr-4 py-3 border-2 border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple transition-colors"
              />
            </div>
          </div>

          {/* Privacy note */}
          <div className="p-3 bg-primary-50 rounded-lg">
            <p className="text-xs text-text-secondary">
              {language === 'vi' ? leadCapture.privacyVi : leadCapture.privacyEn}
            </p>
          </div>

          {/* Submit button */}
          <Button type="submit" variant="primary" className="w-full">
            {language === 'vi' ? leadCapture.ctaVi : leadCapture.ctaEn}
          </Button>

          {/* Skip button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full text-center text-sm text-text-secondary hover:text-primary-900 transition-colors"
          >
            {language === 'vi' ? leadCapture.skipVi : leadCapture.skipEn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
