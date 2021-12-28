import { createGlobalStyle } from "styled-components";
import RealityHyperTTF from '../../assets/fonts/Reality Hyper Regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Reality Hyper';
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    src: local('Reality Hyper'), url('${RealityHyperTTF}') format('truetype');
  }

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

  body {
    user-select: none;
  }

  ::-moz-selection { /* Code for Firefox */
    background: #01bf71;
    color: #010606; 
  }

  ::selection {
    background: #01bf71;
    color: #010606; 
  }
`;

export default GlobalStyles;