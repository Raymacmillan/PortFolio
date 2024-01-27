import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }
   body {

        background: ${({ theme }) => theme.backgroundColor};

        width: 100%;
        
        font-family: "Inter", "open sans";


    transition: ease-in-out 250ms;

        
    }
`;

export default GlobalStyles;
