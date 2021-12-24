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

  @media (hover: none), (any-hover: hover) and (pointer: coarse) {
    scroll-snap-align: none;
  }
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
  position: relative;
  --text-width: 374.44px;
  color: #fff;
  font-family: 'Nova Mono', monospace;
  font-size: 3rem;
  animation: typing 8s steps(14) infinite;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  text-align: center;
  min-width: 1px;
  -webkit-box-reflect: below -25px linear-gradient(transparent, #0004);

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    --text-width: 312.02px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    --text-width: 249.63px;
  }

  @keyframes typing {
    0%, 90%, 100% {
      width: 0;
    }
    30%, 60% {
      width: var(--text-width);
    }
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 80%;
    background: #01bf71;
    animation: blinkCursor 0.7s steps(3) infinite;

    @keyframes blinkCursor {
      0%, 75% {
        opacity: 1;
      }
      76%, 100% {
        opacity: 0;
      }
    }
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