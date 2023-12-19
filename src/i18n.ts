import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { localeEn, localeEs } from './locales';

const resources = {
  en: { translation: localeEn },
  es: { translation: localeEs },
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
