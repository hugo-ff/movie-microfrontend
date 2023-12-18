import { useEffect, useState } from 'react';

import type { CharactersRepository } from '../../../../features/movie-characters-list/application/characters-repository';
import type { Character } from '../../../../features/movie-characters-list/domain/character';

export const useCharactersRepository = (
  charactersRepository: CharactersRepository
): {
  charactersData: Character[];
  isLoadingCharacters: boolean;
  getCharactersError?: Error;
} => {
  const [isLoadingCharacters, setIsLoadingCharacters] = useState<boolean>(false);
  const [charactersData, setCharactersData] = useState<Character[]>([]);
  const [getCharactersError, setGetCharactersError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoadingCharacters(true);
        const res = await charactersRepository.getAll();
        setCharactersData(res);
      } catch (error) {
        console.error('Error fetching characters', error);
        setGetCharactersError(error as Error);
      } finally {
        setIsLoadingCharacters(false);
      }
    };

    void fetchData();
  }, [charactersRepository]);

  return {
    charactersData,
    isLoadingCharacters,
    getCharactersError,
  };
};
