import type { CharactersRepository } from '../../application/characters-repository';
import type { Character } from '../../domain/character';
import { charactersAdapter } from './characters-adapter';
import type { HPApiCharacter } from './interfaces';

export class HPApiCharactersRepository implements CharactersRepository {
  private cache: Character[] | null = null;
  private readonly endpoint: string;

  constructor(apiBaseUrl: string) {
    this.endpoint = `${apiBaseUrl}/characters`;
  }

  async getAll(): Promise<Character[]> {
    if (this.cache) {
      return [...this.cache];
    }

    try {
      const response = await fetch(this.endpoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch characters. Status: ${response.status}`);
      }
      const data = (await response.json()) as HPApiCharacter[];
      const adaptedData = charactersAdapter(data);
      this.cache = adaptedData;

      return adaptedData;
    } catch (error) {
      console.error(`API Error: ${(error as Error).message}`);
      throw error;
    }
  }
}
