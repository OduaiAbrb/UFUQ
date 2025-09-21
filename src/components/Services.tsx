import React from 'react';
import { Monitor, Smartphone, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { language, t } = useLanguage();

  const services = [
    {
      icon: Monitor,
      title: t('services.web.title'),
      description: t('services.web.desc'),
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.desc'),
      color: 'yellow'
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.desc'),
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-600',
          hover: 'group-hover:bg-blue-700',
          border: 'border-blue-200',
          text: 'text-blue-600'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-500',
          hover: 'group-hover:bg-yellow-600',
          border: 'border-yellow-200',
          text: 'text-yellow-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-600',
          hover: 'group-hover:bg-purple-700',
          border: 'border-purple-200',
          text: 'text-purple-600'
        };
      default:
        return {
          bg: 'bg-blue-600',
          hover: 'group-hover:bg-blue-700',
          border: 'border-blue-200',
          text: 'text-blue-600'
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
          >
            {t('services.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            
            return (
              <div 
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${colors.border} overflow-hidden relative`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform rotate-12">
                  <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#pattern-${index})`} className={colors.text} />
                  </svg>
                </div>

                <div className={`w-16 h-16 ${colors.bg} ${colors.hover} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 relative z-10`}>
                  <Icon className="text-white" size={32} />
                </div>
                
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4 relative z-10"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {service.title}
                </h3>
                
                <p 
                  className="text-gray-600 leading-relaxed relative z-10"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {service.description}
                </p>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;