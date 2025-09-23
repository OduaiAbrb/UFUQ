import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.title': 'Ufuq — Handcrafted Web & Mobile Apps',
    'header.subtitle': 'with AI-Powered Innovation',
    'header.description': 'Transform your ideas into reliable, scalable applications — crafted from scratch for Arabic users.',
    'header.cta': 'Contact Me',
    
    // About
    'about.title': 'About Ufuq',
    'about.tagline': 'Every line of code is written with precision to bring your vision to life.',
    'about.handcrafted': 'Handcrafted Development',
    'about.handcrafted.desc': 'No templates, no auto-generated code. Every application is built from scratch with meticulous attention to performance, security, and clean code architecture.',
    'about.ai': 'Custom AI & ML Models',
    'about.ai.desc': 'Design and train custom machine learning models, deploy production-ready APIs, and build intelligent agents including chatbots, automation systems, and recommendation engines.',
    'about.affordable': 'Highly Affordable',
    'about.affordable.desc': 'Professional quality at prices more accessible than typical alternatives. Get premium handcrafted solutions without breaking the budget.',
    
    // Services
    'services.title': 'Services',
    'services.web.title': 'Custom Web Apps',
    'services.web.desc': 'Responsive, scalable, enterprise-ready web applications built with modern technologies and optimized for Arabic users.',
    'services.mobile.title': 'Mobile Apps',
    'services.mobile.desc': 'Native and cross-platform mobile applications for Android and iOS with seamless Arabic language support.',
    'services.ai.title': 'AI Integration & Custom Models',
    'services.ai.desc': 'Custom ML model development, AI agent creation, chatbots, predictive analytics, and intelligent automation systems.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.description': 'Ready to bring your vision to life? Get in touch for a friendly consultation.',
    'contact.privacy': 'Contact details are masked for privacy — click the icons to reach us.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Project Description',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.sent': 'Message Sent!',
    'contact.form.retry': 'Try Again',
    'contact.form.success': 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
    'contact.form.fallback': 'Email service temporarily unavailable. Opening your email client as backup...',
    'contact.form.validation.name': 'Please enter your name',
    'contact.form.validation.email.required': 'Please enter your email address',
    'contact.form.validation.email.invalid': 'Please enter a valid email address',
    'contact.form.validation.message': 'Please enter your message',
    'contact.location': 'Amman, Jordan',
    
    // Footer
    'footer.copyright': '© 2025 Ufuq. Handcrafted with Passion.',
    
    // Accessibility
    'accessibility.email': 'Email (click to send)',
    'accessibility.phone': 'Phone (click to call)',
    'accessibility.whatsapp': 'WhatsApp (click to chat)',
    'accessibility.facebook': 'Facebook (opens in new tab)',
    'accessibility.language': 'Switch to Arabic',
  },
  ar: {
    // Header
    'header.title': 'أفق — تطبيقات ويب وهاتف مصنوعة يدوياً',
    'header.subtitle': 'مع الابتكار المدعوم بالذكاء الاصطناعي',
    'header.description': 'حوّل أفكارك إلى تطبيقات موثوقة وقابلة للتطوير — مصممة من الصفر للمستخدمين العرب.',
    'header.cta': 'اتصل بي',
    
    // About
    'about.title': 'حول أفق',
    'about.tagline': 'كل سطر من الكود مكتوب بدقة لتحقيق رؤيتك.',
    'about.handcrafted': 'تطوير يدوي متقن',
    'about.handcrafted.desc': 'لا قوالب، لا كود مولد تلقائياً. كل تطبيق مبني من الصفر مع اهتمام دقيق بالأداء والأمان وهندسة الكود النظيف.',
    'about.ai': 'نماذج ذكاء اصطناعي مخصصة',
    'about.ai.desc': 'تصميم وتدريب نماذج تعلم آلي مخصصة، نشر واجهات برمجة جاهزة للإنتاج، وبناء وكلاء أذكياء تشمل الدردشة الآلية وأنظمة التشغيل الآلي.',
    'about.affordable': 'أسعار معقولة جداً',
    'about.affordable.desc': 'جودة احترافية بأسعار أكثر إتاحة من البدائل التقليدية. احصل على حلول مصنوعة يدوياً ممتازة دون كسر الميزانية.',
    
    // Services
    'services.title': 'الخدمات',
    'services.web.title': 'تطبيقات الويب المخصصة',
    'services.web.desc': 'تطبيقات ويب متجاوبة وقابلة للتطوير ومناسبة للشركات، مبنية بتقنيات حديثة ومحسنة للمستخدمين العرب.',
    'services.mobile.title': 'تطبيقات الهاتف',
    'services.mobile.desc': 'تطبيقات هاتف أصلية ومتعددة المنصات لأندرويد و iOS مع دعم سلس للغة العربية.',
    'services.ai.title': 'تكامل الذكاء الاصطناعي والنماذج المخصصة',
    'services.ai.desc': 'تطوير نماذج تعلم آلي مخصصة، إنشاء وكلاء ذكاء اصطناعي، دردشة آلية، تحليلات تنبؤية، وأنظمة تشغيل ذكية.',
    
    // Contact
    'contact.title': 'التواصل',
    'contact.description': 'مستعد لتحقيق رؤيتك؟ تواصل معنا للحصول على استشارة ودية.',
    'contact.privacy': 'تفاصيل التواصل مخفية للخصوصية — انقر على الأيقونات للتواصل معنا.',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.message': 'وصف المشروع',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.sending': 'جاري الإرسال...',
    'contact.form.sent': 'تم الإرسال!',
    'contact.form.retry': 'حاول مرة أخرى',
    'contact.form.success': 'شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
    'contact.form.fallback': 'خدمة البريد الإلكتروني غير متاحة مؤقتاً. فتح برنامج البريد الإلكتروني كبديل...',
    'contact.form.validation.name': 'يرجى إدخال اسمك',
    'contact.form.validation.email.required': 'يرجى إدخال عنوان بريدك الإلكتروني',
    'contact.form.validation.email.invalid': 'يرجى إدخال عنوان بريد إلكتروني صحيح',
    'contact.form.validation.message': 'يرجى إدخال رسالتك',
    'contact.location': 'عمّان، الأردن',
    
    // Footer
    'footer.copyright': '© 2025 أفق. مصنوع بشغف.',
    
    // Accessibility
    'accessibility.email': 'البريد الإلكتروني (انقر للإرسال)',
    'accessibility.phone': 'الهاتف (انقر للاتصال)',
    'accessibility.whatsapp': 'واتساب (انقر للدردشة)',
    'accessibility.facebook': 'فيسبوك (يفتح في نافذة جديدة)',
    'accessibility.language': 'Switch to English',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}