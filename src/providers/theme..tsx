import { PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle.styled";

export const theme = {
  color: {
    malibu: "#56CBF9",
    coral: "#fa7a52",
    pampas: "#f4f3ee",
    mine_shaft: "#202020",
    alabaster: "#fafafa",
    text_primary: "#202020",
  },
  fontSize: {
    xs: 16,
    s: 18,
    m: 20,
    l: 24,
    xl: 30,
    xll: 40,
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
