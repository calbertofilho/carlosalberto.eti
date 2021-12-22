import styled from 'styled-components';

export const Section = styled.section`
  background: linear-gradient(-45deg, rgb(41, 167, 251), rgb(1, 170, 147), rgb(1, 170, 147), rgb(1, 170, 147)) no-repeat;
  background-size: 2000% 2000%;
  background-attachment: fixed;
	width: 100%;
	height: 100vh;
  scroll-snap-align: center;
  overflow: hidden;
  position: relative;
  animation: gradient 5s ease-in-out alternate infinite;
  z-index: 1;

  @keyframes gradient {
    from {
      background-position: 0 50%;
    }
    to {
      background-position: 100% 50%;
    }
  }

  @media (hover: none), (any-hover: hover) and (pointer: coarse) {
    scroll-snap-align: none;
  }
`;
