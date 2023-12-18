import 'styled-components';

import { theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<keyof typeof theme.colors, string>;
    typography: {
      fontFamily: string;
      fontSizeBase: string;
      fontSizeLg: string;
      fontSizeSm: string;
      fontWeightLight: number;
      fontWeightNormal: number;
      fontWeightBold: number;
    };
    breakpoints: Record<keyof typeof theme.breakpoints, string>;
    border: Record<keyof typeof theme.border, string>;
    spacing: Record<keyof typeof theme.spacing, string>;
    lineHeights: Record<keyof typeof theme.lineHeights, string>;
  }
}
