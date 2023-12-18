import type { Character } from '../../domain/character';
import type { HPApiCharacter } from './interfaces';

export function charactersAdapter(data: HPApiCharacter[]): Character[] {
  const characters: Character[] = [];

  data.forEach((hpCharacter) => {
    const character: Character = {
      id: hpCharacter.id,
      name: hpCharacter.name,
      imageUrl: hpCharacter.image,
      location: hpCharacter.house,
      skill: hpCharacter.patronus,
      actor: hpCharacter.actor,
    };
    characters.push(character);
  });

  return characters;
}
