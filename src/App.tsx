import { Movie } from './components/pages/Movie/Movie';
import { HP_API_BASE_URL } from './features/movie-characters-list/infrastructure/hp/constants';
import { HPApiCharactersRepository } from './features/movie-characters-list/infrastructure/hp/hp-api-repository-implementation';

const charactersRepository = new HPApiCharactersRepository(HP_API_BASE_URL);

export const App = () => (
  <div>
    <h1>Movies microfrontend</h1>
    <p>This is a microfrontend app that shows a list of characters of a movie</p>
    <Movie movie={{ title: 'Harry Potter' }} charactersRepository={charactersRepository} />
  </div>
);
