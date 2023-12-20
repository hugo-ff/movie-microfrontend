import logoPng from '../../../assets/logo.png';
import type { CharactersRepository } from '../../../features/movie-characters-list/application/characters-repository';
import type { Movie as MovieInterface } from '../../../features/movie-characters-list/domain/movie';
import { useMovieTranslation } from '../../../hooks/useMovieTranslation';
import { Spinner } from '../../atoms/Spinner';
import { CharactersList } from '../../organisms/CharactersList';
import { CHARACTERS_PER_PAGE } from './constants';
import { useCharactersRepository } from './hooks/useCharactersRepository';
import styled from './styles';

interface MovieProps {
  movie: MovieInterface;
  charactersRepository: CharactersRepository;
}

export const Movie: React.FC<MovieProps> = ({ movie, charactersRepository }) => {
  const t = useMovieTranslation();
  const { charactersData, isLoadingCharacters } = useCharactersRepository(charactersRepository);

  if (isLoadingCharacters) {
    return <Spinner loadingText={t('LOADING_TEXT')} />;
  }

  // ts-ignore for logoPng "any" type error
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  return (
    <styled.Movie>
      <div className="movie__logo">
        <img src={logoPng} alt={movie.title} />
      </div>
      <CharactersList charactersData={charactersData} charactersPerPage={CHARACTERS_PER_PAGE} />
    </styled.Movie>
  );
};
