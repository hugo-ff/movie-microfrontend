import styled, { css, DefaultTheme } from 'styled-components';

const primaryStyles = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  &:hover {
    background-color: ${theme.colors.primary};
  }
`;

const secondaryStyles = (theme: DefaultTheme) => css`
  background-color: transparent;
  color: ${theme.colors.primary};
  border-color: ${theme.colors.primary};
  &:hover {
    background-color: ${theme.colors.lightGray};
  }
`;

const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.border.radiusSmall};
  border: ${(props) => props.theme.border.widthThick} solid transparent;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;
  ${({ theme, variant }) =>
    variant === 'primary' ? primaryStyles(theme) : secondaryStyles(theme)};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default { Button };
