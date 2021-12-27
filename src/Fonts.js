import { css } from 'styled-components';
import { RealityHyperTTF } from './assets/fonts';

const LogoFont = css`
  @font-face {
    font-family: 'Reality Hyper';
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    src: local('Reality Hyper'), url('${RealityHyperTTF}/Reality Hyper Regular.ttf') format('truetype');
  }
`;

export default LogoFont;