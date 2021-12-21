import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
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
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoMovie = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: fixed;
  background: #122111;
  filter: hue-rotate(100deg);  /* Greenish Filter like Matrix Movie */
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

export const Content = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 1.125rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
