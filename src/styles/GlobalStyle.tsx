import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export default GlobalStyle;
