import { TFunction } from 'i18next';

import appInstance from '../i18n';

type SwitchLanguage = () => (languageId: string) => Promise<TFunction<'translation', undefined>>;

const useSwitchLanguage: SwitchLanguage = (): ((
  languageId: string
) => Promise<TFunction<'translation', undefined>>) => {
  return (languageId: string) => appInstance.changeLanguage(languageId);
};

export default useSwitchLanguage;
