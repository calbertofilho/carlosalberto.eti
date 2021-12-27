import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0; padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    outline: 0; border: none;
    font-family: 'Encode Sans Expanded', sans-serif;
  }

  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
    scrollbar-width: none; /* Firefox */
  }

  html::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;