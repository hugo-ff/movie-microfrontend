import { useCallback, useState } from 'react';

import styled from './styles';

interface SearchInputProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
      onSearch(event.target.value);
    },
    [onSearch]
  );

  return (
    <styled.Input
      type="search"
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleSearchChange}
      aria-label="Search"
    />
  );
};
