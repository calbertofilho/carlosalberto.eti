import styled from 'styled-components';

export const Section = styled.section`
  background: rgba(0, 255, 0, 0.07);
	width: 100%;
	min-height: 100vh;
  padding: 80px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media (hover: none), (any-hover: hover) and (pointer: coarse) {
    scroll-snap-align: none;
  }
`;
