import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Section = styled.section`
  background: #010606;
  width: 100%;
	height: 100vh;
  scroll-snap-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media (hover: none), (any-hover: hover) and (pointer: coarse) {
    scroll-snap-align: none;
  }

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const Content = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 80px 30px 0;
  justify-content: center;
  /* overflow: hidden; */
`;

export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Wrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Emphasis = styled.span`
  color: #01bf71;
  display: block;
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.1em;
  font-weight: 600;
  color: #f7f8fa;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  max-width: 440px;
  margin-bottom: 2.15rem;
  font-size: 1.15rem;
  line-height: 1.5rem;
  color: #fff;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 12px 30px;
  color: #010606;
  font-size: 1.25rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
