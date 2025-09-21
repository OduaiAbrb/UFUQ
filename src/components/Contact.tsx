import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:oduaiabrb@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
                style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
              >
                <Send size={20} />
                {t('contact.form.submit')}
              </button>
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