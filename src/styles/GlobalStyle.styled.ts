import { createGlobalStyle } from "styled-components";
import { ResetCss } from "./reset.styled";

export const GlobalStyle = createGlobalStyle`
${ResetCss}

* ,body , html {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;

}

body {
    background-color: #f4f3ee;
}
`;
