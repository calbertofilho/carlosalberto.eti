import styled from 'styled-components';

export const Section = styled.section`
  background: #010606;
  width: 100%;
	height: 100vh;
  padding: 100px 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media (hover: none), (any-hover: hover) and (pointer: coarse) {
    scroll-snap-align: none;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const Emphasis = styled.span`
  color: #01bf71;
  display: block;
  font-size: 2.5rem;
  line-height: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  padding: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  max-height: 300px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    pointer: cursor;
  }
`;

export const ImgDesign = styled.img`
  height: 150px;
  width: 250px;
  margin-bottom: 10px;
`;

export const Heading = styled.h1`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  text-align: center;
`;
