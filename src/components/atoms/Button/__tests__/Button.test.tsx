import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../../styles/theme';
import { Button } from '../Button';

describe('Button', () => {
  it('should render Button with children and handles onClick event', async () => {
    const mockOnClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={mockOnClick}>Click Me</Button>
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('shouled render Button with primary variant by default', () => {
    const mockOnClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={mockOnClick}>Primary Button</Button>
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: 'Primary Button' });

    expect(button).toHaveStyle(`background-color: ${theme.colors.light}`);
  });

  it('should render Button with secondary variant', () => {
    const mockOnClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={mockOnClick} variant="secondary">
          Secondary Button
        </Button>
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: 'Secondary Button' });
    expect(button).toHaveStyle(`background-color: transparent`);
  });

  it('should render Button with aria-label when provided', () => {
    const mockOnClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={mockOnClick} ariaLabel="Accessible Label">
          Accessible
        </Button>
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: 'Accessible Label' });
    expect(button).toBeInTheDocument();
  });
});
