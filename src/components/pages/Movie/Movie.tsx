import { Character } from '../../../features/movie-characters-list/domain/character';
import { Movie as MovieInterface } from '../../../features/movie-characters-list/domain/movie';

interface MovieProps {
  movie: MovieInterface;
  movieCharacters: Character[];
}

export const Movie: React.FC<MovieProps> = ({ movie, movieCharacters }) => {
  return <div>Movie</div>;
};
