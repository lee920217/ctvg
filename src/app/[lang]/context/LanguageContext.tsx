"use client"

import { createContext, useContext } from 'react';

const LanguageContext = createContext<string | undefined>('en');

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
