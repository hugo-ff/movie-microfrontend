import { faker } from '@faker-js/faker';

import { Movie } from '../../../../features/movie-characters-list/domain/movie';

export class MovieMother {
  static create(params?: Partial<Movie>): Movie {
    const defaultParams: Movie = {
      title: faker.lorem.word(),
      releaseDate: faker.date.birthdate(),
      ...params,
    };

    return defaultParams;
  }
}
