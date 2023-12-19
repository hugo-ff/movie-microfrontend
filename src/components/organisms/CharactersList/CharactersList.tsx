import { useEffect, useState } from 'react';

import { Character } from '../../../features/movie-characters-list/domain/character';
import { SearchInput } from '../../atoms/SearchInput';
import { CharacterCard } from '../../molecules/CharacterCard/CharacterCard';
import { Pagination } from '../../molecules/Pagination';
import styled from './styles';

interface CharactersListProps {
  charactersData: Character[];
  charactersPerPage: number;
}

export const CharactersList: React.FC<CharactersListProps> = ({
  charactersData,
  charactersPerPage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState(charactersData);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const goToNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const goToPreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  useEffect(() => {
    const results = charactersData.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTotalPages(Math.ceil(results.length / charactersPerPage));

    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    setFilteredCharacters(results.slice(startIndex, endIndex));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, charactersData, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const characters = filteredCharacters.map((character) => (
    <CharacterCard key={character.id} character={character} />
  ));

  return (
    <styled.CharactersList>
      <SearchInput onSearch={setSearchTerm} placeholder="Search your favorite character..." />
      <div className="characters-list__results">
        {filteredCharacters.length === 0 ? (
          <div className="characters-list__no-characters-found">No characters found.</div>
        ) : (
          <ul className="characters-list__list">{characters}</ul>
        )}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
        />
      )}
    </styled.CharactersList>
  );
};
