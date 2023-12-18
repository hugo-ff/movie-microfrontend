import { render, screen } from '../../../../tests/test-utils';
import { CharacterCard } from '../CharacterCard';

describe('CharacterCard', () => {
  const mockCharacter = {
    id: 'asd123',
    actor: 'Daniel Radcliffe',
    imageUrl: 'https://example.com/harry.jpg',
    location: 'Hogwarts',
    name: 'Harry Potter',
    skill: 'Quidditch',
  };

  it('should render with content', () => {
    render(<CharacterCard character={mockCharacter} />);

    const image = screen.getByRole('img', { name: mockCharacter.name });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockCharacter.imageUrl);

    const title = screen.getByRole('heading', { name: mockCharacter.name });
    expect(title).toBeInTheDocument();

    expect(screen.getByText(mockCharacter.location)).toBeInTheDocument();
    expect(screen.getByText(mockCharacter.skill)).toBeInTheDocument();
    expect(screen.getByText(mockCharacter.actor)).toBeInTheDocument();
  });
});
