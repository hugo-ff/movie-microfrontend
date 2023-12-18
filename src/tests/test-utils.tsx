import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

const render = (ui: ReactElement, renderOptions?: Omit<RenderOptions, 'queries'>) => {
  const Wrapper = ({ children }: { children?: React.ReactNode }) => (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
