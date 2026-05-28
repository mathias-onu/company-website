import React, { createContext, useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import enMessages from '@/translations/en.json';
import roMessages from '@/translations/ro.json';

export type LanguageCode = 'en' | 'ro';

const translations = {
  en: enMessages,
  ro: roMessages,
} as const;

type TranslationMap = typeof translations;
export type Translations = TranslationMap[LanguageCode];

const getLanguageFromSearchParams = (searchParams: URLSearchParams): LanguageCode => {
  const value = searchParams.get('language')?.toLowerCase();
  return value === 'ro' ? 'ro' : 'en';
};

const getValueByPath = (messages: Translations, path: string): string => {
  return path.split('.').reduce<any>((current, part) => {
    if (current && typeof current === 'object') {
      return current[part];
    }
    return undefined;
  }, messages) ?? path;
};

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  messages: Translations;
  t: (path: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const language = getLanguageFromSearchParams(searchParams);
  const messages = translations[language];

  const setLanguage = (nextLanguage: LanguageCode) => {
    const nextSearchParams = new URLSearchParams(searchParams.toString());
    nextSearchParams.set('language', nextLanguage);
    setSearchParams(nextSearchParams, { replace: true });
  };

  const t = (path: string, fallback?: string) => {
    const result = getValueByPath(messages, path);
    return typeof result === 'string' ? result : fallback ?? path;
  };

  const value = useMemo(
    () => ({ language, setLanguage, messages, t }),
    [language, messages]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
