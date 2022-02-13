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
