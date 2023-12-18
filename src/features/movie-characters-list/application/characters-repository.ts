import type { Character } from '../domain/character';

export interface CharactersRepository {
  getAll: () => Promise<Character[]>;
}
