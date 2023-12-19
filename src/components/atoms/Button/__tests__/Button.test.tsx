import userEvent from '@testing-library/user-event';

import { theme } from '../../../../styles/theme';
import { render, screen } from '../../../../tests/test-utils';
import { Button } from '../Button';

describe('Button', () => {
  it('should render Button with children and handles onClick event', async () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Click Me</Button>);

    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('shouled render Button with primary variant by default', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Primary Button</Button>);

    const button = screen.getByRole('button', { name: 'Primary Button' });

    expect(button).toHaveStyle(`background-color: ${theme.colors.light}`);
  });

  it('should render Button with secondary variant', () => {
    const mockOnClick = jest.fn();
    render(
      <Button onClick={mockOnClick} variant="secondary">
        Secondary Button
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Secondary Button' });
    expect(button).toHaveStyle(`background-color: transparent`);
  });

  it('should render Button with aria-label when provided', () => {
    const mockOnClick = jest.fn();
    render(
      <Button onClick={mockOnClick} ariaLabel="Accessible Label">
        Accessible
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Accessible Label' });
    expect(button).toBeInTheDocument();
  });
});
