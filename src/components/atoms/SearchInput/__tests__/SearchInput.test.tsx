import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchInput } from '../SearchInput';

describe('SearchInput', () => {
  it('should render search input with placeholder', () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} placeholder="Search..." />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('should update on change', async () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} placeholder="Search..." />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'search input test');

    expect(searchInput).toHaveValue('search input test');
  });

  it('should calls onSearch prop on change', async () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} placeholder="Search..." />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'test');

    expect(handleSearch).toHaveBeenCalledTimes(4); // 't', 'e', 's', 't'
  });
});
