import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mock } from 'jest-mock-extended';

import { CharactersRepository } from '../../../../features/movie-characters-list/application/characters-repository';
import { CHARACTERS_PER_PAGE } from '../constants';
import { Movie } from '../Movie';
import { CharacterMother, CharactersMother } from './CharactersMother';
import { MovieMother } from './MovieMother';

const mockCharactersRepository = mock<CharactersRepository>();

describe('Movie', () => {
  const movieCharacters = CharactersMother.create(20, CharacterMother);
  const movie = MovieMother.create();
  it('should render without errors', async () => {
    mockCharactersRepository.getAll.mockResolvedValue(movieCharacters);

    render(<Movie movie={movie} charactersRepository={mockCharactersRepository} />);

    expect(await screen.findByRole('heading', { name: movie.title })).toBeInTheDocument();
    expect(await screen.findByRole('searchbox')).toBeInTheDocument();
    expect(await screen.findByRole('navigation')).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(CHARACTERS_PER_PAGE);

    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(movieCharacters[index].name);
    });
  });

  it('should filter characters on search input', async () => {
    mockCharactersRepository.getAll.mockResolvedValue(movieCharacters);

    render(<Movie movie={movie} charactersRepository={mockCharactersRepository} />);

    const searchInput = await screen.findByRole('searchbox');
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, movieCharacters[0].name);

    expect(await screen.findByRole('listitem')).toHaveTextContent(movieCharacters[0].name);
    expect(await screen.findByRole('listitem')).not.toHaveTextContent(movieCharacters[1].name);
  });

  it('should show message when no results are found', async () => {
    mockCharactersRepository.getAll.mockResolvedValue(movieCharacters);

    render(<Movie movie={movie} charactersRepository={mockCharactersRepository} />);

    const searchInput = await screen.findByRole('searchbox');
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'NonExistingCharacter');

    expect(screen.getByText(/no characters found/i)).toBeInTheDocument();
  });

  it('should navigate through pages', async () => {
    mockCharactersRepository.getAll.mockResolvedValue(movieCharacters);

    render(<Movie movie={movie} charactersRepository={mockCharactersRepository} />);

    const prevPageButton = await screen.findByRole('button', { name: /prev/i });
    expect(prevPageButton).toBeInTheDocument();
    expect(prevPageButton).toBeDisabled();

    const nextPageButton = await screen.findByRole('button', { name: /next/i });
    expect(nextPageButton).toBeInTheDocument();
    expect(nextPageButton).toBeEnabled();

    await userEvent.click(nextPageButton);

    const updatedPrevPageButton = await screen.findByRole('button', { name: /prev/i });
    expect(updatedPrevPageButton).toBeInTheDocument();
    expect(updatedPrevPageButton).toBeEnabled();
  });
});
