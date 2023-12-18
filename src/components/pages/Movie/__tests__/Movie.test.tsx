import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Movie } from '../Movie';
import { CharacterMother, CharactersMother } from './CharactersMother';
import { MovieMother } from './MovieMother';

describe('Movie', () => {
  const movieCharacters = CharactersMother.create(20, CharacterMother);
  const movie = MovieMother.create();
  it('should render without errors', () => {
    render(<Movie movie={movie} movieCharacters={movieCharacters} />);

    expect(screen.getByRole('heading', { name: movie.title })).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should filter characters on search input', async () => {
    render(<Movie movie={movie} movieCharacters={movieCharacters} />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, movieCharacters[0].name);

    expect(
      await screen.findByRole('listitem', { name: movieCharacters[0].name })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('listitem', { name: movieCharacters[1].name })
    ).not.toBeInTheDocument();
  });

  it('should show message when no results are found', async () => {
    render(<Movie movie={movie} movieCharacters={movieCharacters} />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'NonExistingCharacter');

    expect(screen.getByText(/no characters found/i)).toBeInTheDocument();
  });

  it('should navigate through pages', async () => {
    render(<Movie movie={movie} movieCharacters={movieCharacters} />);

    const firstCharacter = await screen.findByRole('listitem', { name: movieCharacters[0].name });
    const secondCharacter = await screen.findByRole('listitem', { name: movieCharacters[1].name });

    expect(firstCharacter).toBeInTheDocument();
    expect(secondCharacter).toBeInTheDocument();

    const nextPageButton = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextPageButton);

    expect(firstCharacter).not.toBeInTheDocument();
    expect(secondCharacter).not.toBeInTheDocument();

    expect(
      await screen.findByRole('listitem', { name: movieCharacters[11].name })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('listitem', { name: movieCharacters[12].name })
    ).toBeInTheDocument();
  });
});
