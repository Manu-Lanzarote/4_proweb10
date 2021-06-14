import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: f9f9f9;
        overflow-x:hidden;
    }
`;

export default GlobalStyle;
