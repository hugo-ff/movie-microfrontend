import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import locales from './locales';

const resources = {
  en: { translation: locales.en },
  es: { translation: locales.es },
};

const appInstance = i18n.createInstance();

void appInstance.use(initReactI18next).init({
  resources,
  keySeparator: false,
  lng: 'en',
  fallbackLng: 'en',
  react: {
    useSuspense: true,
  },
});

export default appInstance;
