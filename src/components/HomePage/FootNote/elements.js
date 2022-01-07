import styled, { css } from 'styled-components';
import { IoLogoGithub, IoLogoVercel, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { RiGlobalFill } from 'react-icons/ri';
import { Link as LinkScroll } from 'react-scroll';

export const Content = styled.div`
  background: #01bf71;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 710px) {
    flex-direction: column-reverse;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  height: 100%;
  width: 50%;
  padding: 24px;
  flex-direction: column;

  @media screen and (max-width: 852px) {
    width: 60%;
  }

  @media screen and (max-width: 710px) {
    width: 100%;
    padding: 12px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SocialMedia = styled.div`
  position: relative;
  margin-bottom: 40px;
  text-align: center;
`;

const Links = css`
  cursor: pointer;
  color: #bdffe4;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  padding: 6px;
  margin: 0 6px 12px 6px;
  box-shadow: -4px -4px 10px 0 rgba(0, 0, 0, 0.2);
  filter: blur(0.5px);
  transition: 0.5s all ease;

  &:hover {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    filter: blur(0);
    transform: scale(1.1);
    box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    width: 25px;
    height: 100%;
    transform: skewX(45deg) translateX(150px);
    transition: 1s;
  }

  &:hover:before {
    transform: skewX(45deg) translateX(-150px);
  }
`;

export const Link = styled.a`
  ${Links}
`;

export const LinkScrl = styled(LinkScroll)`
  ${Links}
`;

const Icons = css`
  font-size: 28px;
`;

export const Github = styled(IoLogoGithub)`
  ${Icons}
`;

export const Vercel = styled(IoLogoVercel)`
  ${Icons}
`;

export const Instagram = styled(IoLogoInstagram)`
  ${Icons}
`;

export const Twitter = styled(IoLogoTwitter)`
  ${Icons}
`;

export const Youtube = styled(IoLogoYoutube)`
  ${Icons}
`;

export const Gmail = styled(SiGmail)`
  ${Icons}
`;

export const Site = styled(RiGlobalFill)`
  ${Icons}
`;

export const Paragraph = styled.p`
  color: #000;
  font-size: 16px;
  text-align: center;
`;

export const LogoWrap = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: right;

  @media screen and (max-width: 852px) {
    width: 40%;
  }

  @media screen and (max-width: 710px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Logo = styled(LinkScroll)`
  cursor: pointer;
  color: #000;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding: 24px;
  white-space: nowrap;
  font-family: 'Reality Hyper TTF', sans-serif;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (max-width: 270px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 250px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 180px) {
    font-size: 0.75rem;
  }
`;

export const LogoEmphasis = styled.span`
  font-family: 'Reality Hyper TTF', sans-serif;
  font-weight: bold;
  font-size: 4.4rem;
  margin-left: 12px;

  @media screen and (max-width: 270px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 250px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 180px) {
    font-size: 2.5rem;
  }
`;
