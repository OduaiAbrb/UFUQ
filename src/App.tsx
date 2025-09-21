import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;