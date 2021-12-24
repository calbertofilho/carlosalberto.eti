import styled from 'styled-components';

export const Section = styled.section`
	width: 100%;
	height: 100vh;
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
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
