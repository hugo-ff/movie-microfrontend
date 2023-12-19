import styled from 'styled-components';

export const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.md};

  .pagination__button {
    background-color: transparent;
    border: ${(props) => props.theme.border.widthThick} solid
      ${(props) => props.theme.colors.primary};
    padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
    margin: 0 ${(props) => props.theme.spacing.sm};
    border-radius: ${(props) => props.theme.border.radiusSmall};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  .pagination__info {
    font-size: ${(props) => props.theme.typography.fontSizeBase};
  }
`;

export default { Pagination };
