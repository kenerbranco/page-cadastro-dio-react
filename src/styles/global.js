import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        color: #ffffff;
        background-color: #1E192C;
        font-family: 'Open Sans', sans-serif;
    }
`