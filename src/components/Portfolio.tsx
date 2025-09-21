import React from 'react';
import { ExternalLink, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Portfolio: React.FC = () => {
  const { language, t } = useLanguage();

  const projects = [
    {
      title: t('portfolio.ecommerce.title'),
      description: t('portfolio.ecommerce.desc'),
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      isAI: false
    },
    {
      title: t('portfolio.education.title'),
      description: t('portfolio.education.desc'),
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800',
      isAI: false
    },
    {
      title: t('portfolio.ai.title'),
      description: t('portfolio.ai.desc'),
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      isAI: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
          >
            {t('portfolio.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.isAI && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Zap size={16} />
                    AI
                  </div>
                )}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ExternalLink className="text-blue-600" size={20} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="text-gray-600 leading-relaxed mb-4"
                  style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                >
                  {project.description}
                </p>

                {project.isAI && (
                  <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                    <p 
                      className="text-sm text-gray-700 italic"
                      style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
                    >
                      {t('portfolio.ai.note')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;