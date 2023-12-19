import styled from 'styled-components';

const CharacterCard = styled.li`
  list-style-type: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 1.5rem;

  .character-card {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    padding: ${(props) => props.theme.spacing.lg};

    border-radius: ${(props) => props.theme.border.radiusLarge};
    background-color: ${(props) => props.theme.colors.light};
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.3);
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;

    &:hover,
    &:focus {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

      &::before {
        top: 0;
      }

      &::after {
        right: 0;
      }

      .character-card__image {
        transform: scale(1.03);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
        opacity: 1;
      }
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      background: ${(props) => props.theme.colors.light};
      transition: all 0.3s ease-in-out;
    }

    &::before {
      left: 0;
      top: -100%;
      height: ${(props) => props.theme.border.widthThick};
      width: 100%;
    }

    &::after {
      top: 0;
      right: -100%;
      height: 100%;
      width: ${(props) => props.theme.border.widthThick};
    }

    &__image {
      width: 100%;
      height: auto;
      object-fit: cover;
      opacity: 0.9;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

      border: 1px solid ${(props) => props.theme.colors.lightGray};
      border-radius: ${(props) => props.theme.border.radiusLarge};
    }

    &__name {
      font-size: ${(props) => props.theme.typography.fontSizeLg};
      font-weight: ${(props) => props.theme.typography.fontWeightBold};
      margin-top: ${(props) => props.theme.spacing.lg};
    }

    &__attributes {
      display: flex;
      flex-direction: column;
      list-style: none;
      font-size: ${(props) => props.theme.typography.fontSizeSm};
      color: ${(props) => props.theme.colors.dark};
      margin: ${(props) => props.theme.spacing.sm} 0;
      padding: 0;

      li {
        list-style: none;
        margin: ${(props) => props.theme.spacing.xs} 0;

        span {
          font-weight: ${(props) => props.theme.typography.fontWeightBold};
        }
      }
    }
  }
`;

export default { CharacterCard };
