import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enUI } from './locales/enUI';
import { hrUI } from './locales/hrUI';
import { deUI } from './locales/deUI';
import { itUI } from './locales/itUI';
import { nlUI } from './locales/nlUI';
import { slUI } from './locales/slUI';

const resources = {
  en: { translation: enUI },
  hr: { translation: hrUI },
  de: { translation: deUI },
  it: { translation: itUI },
  nl: { translation: nlUI },
  sl: { translation: slUI }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
