import { Character } from '../../../features/movie-characters-list/domain/character';
import styled from './styles';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { actor, imageUrl, location, name, skill } = character;

  return (
    <styled.CharacterCardMain tabIndex={0} aria-label={`Información del personaje ${name}`}>
      <article className="character-card">
        <img src={imageUrl} alt={name} className="character-card__image" loading="lazy" />
        <div className="character-card__content">
          <h1 className="character-card__name">{name}</h1>
          <ul className="character-card__attributes">
            <li className="character-card__attribute">
              <span>Casa: </span>
              {location}
            </li>
            <li className="character-card__attribute">
              <span>Patronus: </span>
              {skill}
            </li>
            <li className="character-card__attribute">
              <span>Actor: </span>
              {actor}
            </li>
          </ul>
        </div>
      </article>
    </styled.CharacterCardMain>
  );
};
