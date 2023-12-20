import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { Movie } from './components/pages/Movie';
import { MOVIE_TITLE } from './constants';
import { HP_API_BASE_URL } from './features/movie-characters-list/infrastructure/hp/constants';
import { HPApiCharactersRepository } from './features/movie-characters-list/infrastructure/hp/hp-api-repository-implementation';
import appInstance from './i18n';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const charactersRepository = new HPApiCharactersRepository(HP_API_BASE_URL);

const App = () => (
  <I18nextProvider i18n={appInstance}>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Movie movie={{ title: MOVIE_TITLE }} charactersRepository={charactersRepository} />
    </ThemeProvider>
  </I18nextProvider>
);

export default App;
