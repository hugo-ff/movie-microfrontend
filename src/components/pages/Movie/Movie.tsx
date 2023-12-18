import { useEffect, useState } from 'react';

import type { CharactersRepository } from '../../../features/movie-characters-list/application/characters-repository';
import type { Movie as MovieInterface } from '../../../features/movie-characters-list/domain/movie';
import { SearchInput } from '../../atoms/SearchInput';
import { CHARACTERS_PER_PAGE } from './constants';
import { useCharactersRepository } from './hooks/useCharactersRepository';

interface MovieProps {
  movie: MovieInterface;
  charactersRepository: CharactersRepository;
}

export const Movie: React.FC<MovieProps> = ({ movie, charactersRepository }) => {
  const { charactersData, isLoadingCharacters } = useCharactersRepository(charactersRepository);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState(charactersData);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const goToNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const goToPreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  useEffect(() => {
    const results = charactersData.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTotalPages(Math.ceil(results.length / CHARACTERS_PER_PAGE));

    const startIndex = (currentPage - 1) * CHARACTERS_PER_PAGE;
    const endIndex = startIndex + CHARACTERS_PER_PAGE;
    setFilteredCharacters(results.slice(startIndex, endIndex));
  }, [searchTerm, charactersData, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (isLoadingCharacters) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchInput onSearch={setSearchTerm} placeholder="Search characters..." />
      <h1>{movie.title}</h1>
      {filteredCharacters.length === 0 ? (
        <div>No characters found</div>
      ) : (
        <ul>
          {filteredCharacters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
      {totalPages > 1 && (
        <nav role="navigation" aria-label="Character Pagination">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </nav>
      )}
    </>
  );
};
