import { TKeys } from '.';

export type Language = string;
export type Locales = Record<string, string>;
export type I18nTranslation = Record<Language, Locales>;
export type MovieLocaleKeys = TKeys;
