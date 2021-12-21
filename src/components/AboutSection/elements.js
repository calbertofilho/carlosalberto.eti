import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

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

export const Content = styled.div`
  background: #122111;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 30px 0;
  overflow: hidden;
  position: absolute;
  z-index: 3;
`;

export const Row = styled.div``;
export const Column1 = styled.div``;
export const Wrapper = styled.div``;
export const TopEmphasis = styled.span``;
export const Heading = styled.h1``;
export const Paragraph = styled.p``;
export const BtnWrapper = styled.div``;
export const Button = styled(LinkScroll)``;
export const Column2 = styled.div``;
export const ImgWrapper = styled.div``;
export const Img = styled.img``;
