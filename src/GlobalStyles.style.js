import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";

export const GlobalStyles = createGlobalStyle`
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
    
    //? this is to unset all default styling of these elements
    //? the background-color is just to know the element is there
    //? when I place it in a component
    input,
    textarea,
    button {
        all: unset;
        background-color: lightgray;
    }

    img {
        width: 100%;
        height: auto;
    }
`;
