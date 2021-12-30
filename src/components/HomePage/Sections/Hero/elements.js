import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link as LinkScroll } from 'react-scroll';

export const Section = styled.section`
  background: rgba(0, 0, 0, 0.6);
	width: 100%;
	min-height: 100vh;
  padding: 80px 30px 0;
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
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  position: relative;
  /* --text-width: 391.3px; */
  color: #fff;
  font-family: 'Nova Mono', monospace;
  font-size: 3rem;
  --text-width: 377.34px;
  --text-reflect: -25px;
  animation: typing 8s steps(14) infinite;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  text-align: center;
  min-width: 1px;
  margin-bottom: 36px;
  -webkit-box-reflect: below var(--text-reflect) linear-gradient(transparent, rgba(255, 255, 255, 0.15));

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    --text-width: 314.45px;
    --text-reflect: -20px;
    /* --text-width: 325.967px; */
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    --text-width: 251.56px;
    --text-reflect: -15px;
    /* --text-width: 260.867px; */
  }

  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
    --text-width: 188.67px;
    --text-reflect: -10px;
    /* --text-width: 260.867px; */
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
  margin-bottom: 12px;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;
  pointer-events: none;

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
