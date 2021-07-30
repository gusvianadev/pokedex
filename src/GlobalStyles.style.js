import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';

const GlobalStyles = createGlobalStyle`
    :root {
        --clr-yellow: #FFDE00;
        --clr-yellow-dark: #B3A125;
        --clr-yellow-shadow: #8C7D1D;
        --clr-blue: #3B4CCA;
        --clr-red: #FF0000;
        --clr-red-dark: #CC0000;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
        scroll-behavior: smooth
    }

    body {
        font-family: "Pixel Art", Arial, Helvetica, sans-serif;
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6 {
        margin: 0;
    }
    
    //? the background-color is to know that the element is in fact there
    input,
    textarea,
    button {
        all: unset;
        background-color: lightgray;

       :focus {
            border: 3px solid darkblue;
        }
    }
    

    img {
        width: 100%;
        height: auto;
    }
`;

export default GlobalStyles;
