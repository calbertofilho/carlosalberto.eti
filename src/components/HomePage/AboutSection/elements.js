import styled from 'styled-components';

export const Section = styled.section`
	width: 100%;
	height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
	box-sizing: border-box;
  scroll-snap-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media (hover: none), (any-hover: hover) and (pointer: coarse) {
    scroll-snap-align: none;
  }
`;
