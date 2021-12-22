import styled from 'styled-components';
import AboutBg from '../../../assets/images/about.jpg';

export const Section = styled.section`
  background: url(${AboutBg});
  background-size: cover;
  background-attachment: fixed;
	width: 100%;
	height: 100vh;
  scroll-snap-align: center;
  overflow: hidden;
  position: relative;
  filter: hue-rotate(290deg) brightness(70%);  /* Greenish Filter like Matrix Movie */
  z-index: 1;

  @media (hover: none), (any-hover: hover) and (pointer: coarse) {
    scroll-snap-align: none;
  }
`;
