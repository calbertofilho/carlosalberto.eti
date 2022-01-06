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
  z-index: 1;
`;

export const InfoWrap = styled.div`
  height: 100%;
  width: 50%;
  padding: 24px;
  align-self: flex-end;
`;

export const SocialMedia = styled.div`
  position: relative;
  display: table;
  border-collapse: separate;
  border-spacing: 12px;
  margin-bottom: 40px;
`;

const Links = css`
  cursor: pointer;
  color: #bdffe4;
  position: relative;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  overflow: hidden;
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
`;

export const LogoWrap = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: right;
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
`;

export const LogoEmphasis = styled.span`
  font-family: 'Reality Hyper TTF', sans-serif;
  font-weight: bold;
  font-size: 4.4rem;
  margin-left: 12px;
`;
