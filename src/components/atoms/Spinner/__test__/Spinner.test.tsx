import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../../styles/theme';
import Spinner from '../Spinner';

describe('Spinner', () => {
  it('should render without errors', () => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    );
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should have the "Loading..." text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    );
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});
