import styled from 'styled-components';

const CharactersList = styled.section`
  margin-top: ${(props) => props.theme.spacing.lg};

  .characters-list {
    &__results {
      margin-top: ${(props) => props.theme.spacing.lg};
      margin-bottom: 4.5rem;
    }

    &__no-characters-found {
      font-size: ${(props) => props.theme.typography.fontSizeBase};
      font-weight: ${(props) => props.theme.typography.fontWeightLight};
      color: ${(props) => props.theme.colors.lightGray};
    }

    &__list {
      /* display: grid;
        grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr)); */
      gap: 1.5rem;
      column-width: 18rem;

      list-style: 'none';
      margin: 0;
      padding: 0;
    }
  }
`;

export default { CharactersList };
