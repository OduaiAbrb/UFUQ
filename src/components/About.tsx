import React from 'react';
import { Code, Brain, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Code,
      title: t('about.handcrafted'),
      description: t('about.handcrafted.desc')
    },
    {
      icon: Brain,
      title: t('about.ai'),
      description: t('about.ai.desc')
    },
    {
      icon: DollarSign,
      title: t('about.affordable'),
      description: t('about.affordable.desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
          >
            {t('about.title')}
          </h2>
          <p 
            className="text-xl text-blue-600 italic max-w-3xl mx-auto"
            style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
          >
            {t('about.tagline')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Decorative separator */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default About;