import { Character } from '../../../features/movie-characters-list/domain/character';
import { useMovieTranslation } from '../../../hooks/useMovieTranslation';
import { PLACEHOLDER_IMAGE_URL } from './constants';
import styled from './styles';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const t = useMovieTranslation();

  const { actor, imageUrl, location, name, skill } = character;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = PLACEHOLDER_IMAGE_URL;
  };

  return (
    <styled.CharacterCard aria-label={name}>
      <article className="character-card">
        <img
          src={imageUrl}
          alt={name}
          className="character-card__image"
          loading="lazy"
          onError={handleImageError}
        />
        <div className="character-card__content">
          <h1 className="character-card__name">{name}</h1>
          <ul className="character-card__attributes">
            {location && (
              <li className="character-card__attribute">
                <span>{t('HOUSE')}</span>
                {location}
              </li>
            )}
            {skill && (
              <li className="character-card__attribute">
                <span>{t('PATRONUS')}</span>
                {skill}
              </li>
            )}
            {actor && (
              <li className="character-card__attribute">
                <span>{t('ACTOR')}</span>
                {actor}
              </li>
            )}
          </ul>
        </div>
      </article>
    </styled.CharacterCard>
  );
};
