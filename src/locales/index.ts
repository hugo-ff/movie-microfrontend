import { en } from './en';
import { es } from './es';
import { I18nTranslation } from './types';

export type TKeys = keyof typeof es;

const locales: I18nTranslation = { es, en };

export default locales;
