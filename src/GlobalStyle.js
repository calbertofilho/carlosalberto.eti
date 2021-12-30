import { createGlobalStyle } from "styled-components";
import RealityHyperTTF from './assets/fonts/Reality Hyper Regular.ttf';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0; padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    outline: 0; border: none;
    font-family: 'Encode Sans Expanded', sans-serif;
  }

  @font-face {
    font-family: 'Reality Hyper TTF';
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    src: local('Reality Hyper TTF'), url('${RealityHyperTTF}') format('truetype');
  }
`;

export default GlobalStyles;