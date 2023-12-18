import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { Movie } from './components/pages/Movie/Movie';
import { HP_API_BASE_URL } from './features/movie-characters-list/infrastructure/hp/constants';
import { HPApiCharactersRepository } from './features/movie-characters-list/infrastructure/hp/hp-api-repository-implementation';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const charactersRepository = new HPApiCharactersRepository(HP_API_BASE_URL);

export const App = () => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <Movie movie={{ title: 'Harry Potter' }} charactersRepository={charactersRepository} />
  </ThemeProvider>
);
