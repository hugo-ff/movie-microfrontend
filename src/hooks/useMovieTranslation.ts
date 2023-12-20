import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import type { MovieLocaleKeys } from '../locales/types';
import type { CustomTFunction } from '../types/types';

export const useMovieTranslation = (): TFunction & CustomTFunction<MovieLocaleKeys> => {
  const { t }: { t: TFunction & CustomTFunction<MovieLocaleKeys> } = useTranslation();

  return t;
};
