import React from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Arabic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="arabicPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <polygon points="50,0 100,50 50,100 0,50" fill="#3B82F6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#arabicPattern)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center">
          <img 
            src="/Screenshot_2025-09-21_160639-removebg-preview.png" 
            alt={language === 'ar' ? 'أفق' : 'Ufuq'} 
            className="h-12 w-auto"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            aria-label={t('accessibility.language')}
          >
            <Globe size={20} />
            <span className="font-medium">{language === 'ar' ? 'EN' : 'ع'}</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-blue-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('about.title')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('services.title')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('portfolio.title')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('header.cta')}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden border-t">
            <div className="flex flex-col p-6 space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                {t('about.title')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                {t('services.title')}
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                {t('portfolio.title')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('header.cta')}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
          >
            {t('header.title')}
            <br />
            <span className="text-blue-600">{t('header.subtitle')}</span>
          </h1>
          
          <p 
            className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
          >
            {t('header.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg"
            >
              {t('header.cta')}
            </button>
            <div className="text-sm text-gray-500 px-4">
              {t('footer.pricing')}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;