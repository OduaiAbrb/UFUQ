import React from 'react';
import { Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src="/Screenshot_2025-09-21_160639-removebg-preview.png" 
                alt={language === 'ar' ? 'أفق' : 'Ufuq'} 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p 
              className="text-gray-400 leading-relaxed"
              style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
            >
              {t('about.tagline')}
            </p>
          </div>

          {/* Pricing Info */}
          <div></div>

          {/* Social & Contact */}
          <div>
            <h4 
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
            >
              {t('contact.title')}
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label={t('accessibility.facebook')}
              >
                <Facebook size={20} />
              </a>
              
              {/* Masked contact icons */}
              <a
                href="mailto:oduaiabrb@gmail.com"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors text-sm font-mono"
                aria-label={t('accessibility.email')}
              >
                @
              </a>
              
              <a
                href="tel:+962796977413"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors text-sm"
                aria-label={t('accessibility.phone')}
              >
                📞
              </a>
              
              <a
                href="https://wa.me/962796977413"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors text-sm"
                aria-label={t('accessibility.whatsapp')}
              >
                💬
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p 
            className="text-gray-400"
            style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'Roboto, sans-serif' }}
          >
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;