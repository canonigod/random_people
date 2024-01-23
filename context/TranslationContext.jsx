'use client';

import React, { createContext, useState, useEffect } from 'react';
import translations from '../translation';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  const setLang = (lang) => {
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContext;

