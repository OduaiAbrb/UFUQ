import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

// EmailJS Configuration - Replace with your actual values
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_04aaj0i',
  TEMPLATE_ID: 'template_default', // You may need to update this with your actual template ID
  PUBLIC_KEY: 'oduai'
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.validation.name');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.validation.email.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.validation.email.invalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.validation.message');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmailViaEmailJS = async (): Promise<boolean> => {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'oduaiabrb@gmail.com'
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      return true;
    } catch (error) {
      console.error('EmailJS failed:', error);
      return false;
    }
  };

  const sendEmailViaMailto = () => {
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:oduaiabrb@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    // Try EmailJS first
    const emailJSSuccess = await sendEmailViaEmailJS();

    if (emailJSSuccess) {
      setStatus('success');
      setStatusMessage(t('contact.form.success'));
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    } else {
      // Fallback to mailto
      setStatus('error');
      setStatusMessage(t('contact.form.fallback'));
      
      // Open mailto as fallback
      setTimeout(() => {
        sendEmailViaMailto();
        setStatus('idle');
        setStatusMessage('');
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader className="animate-spin" size={20} />;
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'error':
        return <AlertCircle className="text-yellow-500" size={20} />;
      default:
        return <Send size={20} />;
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'loading':
        return t('contact.form.sending');
      case 'success':
        return t('contact.form.sent');
      case 'error':
        return t('contact.form.retry');
      default:
        return t('contact.form.submit');
    }
  };

  const getButtonColor = () => {
    switch (status) {
      case 'success':
        return 'bg-green-600 hover:bg-green-700';
      case 'error':
        return 'bg-yellow-600 hover:bg-yellow-700';
      default:
        return 'bg-blue-600 hover:bg-blue-700';
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
          >
            {t('contact.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto"
            style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
          >
            {t('contact.description')}
          </p>
          <p 
            className="text-sm text-blue-600 italic"
            style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
          >
            {t('contact.privacy')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all ${
                    errors.name 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  }`}
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                  disabled={status === 'loading'}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600" style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all ${
                    errors.email 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  }`}
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                  disabled={status === 'loading'}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600" style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all resize-none ${
                    errors.message 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  }`}
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                  disabled={status === 'loading'}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600" style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full text-white px-6 py-3 rounded-lg font-semibold transform transition-all shadow-lg flex items-center justify-center gap-2 ${getButtonColor()} ${
                  status === 'loading' || status === 'success' 
                    ? 'cursor-not-allowed opacity-75' 
                    : 'hover:scale-105'
                }`}
                style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
              >
                {getStatusIcon()}
                {getButtonText()}
              </button>

              {/* Status Message */}
              {statusMessage && (
                <div className={`p-4 rounded-lg ${
                  status === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                }`}>
                  <p 
                    className="text-sm font-medium"
                    style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                  >
                    {statusMessage}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 
                className="text-2xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
              >
                {t('contact.title')}
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:oduaiabrb@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                  aria-label={t('accessibility.email')}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <Mail className="text-white" size={24} />
                  </div>
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {t('accessibility.email')}
                  </span>
                </a>

                <a
                  href="tel:+962796977413"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                  aria-label={t('accessibility.phone')}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <Phone className="text-white" size={24} />
                  </div>
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {t('accessibility.phone')}
                  </span>
                </a>

                <a
                  href="https://wa.me/962796977413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-green-50 transition-colors group"
                  aria-label={t('accessibility.whatsapp')}
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <span className="text-gray-600 group-hover:text-green-600 transition-colors">
                    {t('accessibility.whatsapp')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;