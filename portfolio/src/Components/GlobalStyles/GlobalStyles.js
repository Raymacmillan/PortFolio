import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

   body {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        background: ${({theme}) => theme.backgroundColor};

        font-family: "Merriweather", serif;

        width: 100%;


    transition: ease-in-out 250ms;

        
    }
`;

export default GlobalStyles;
