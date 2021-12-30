import styled from 'styled-components';
import { IoLogoGithub, IoLogoVercel, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { RiGlobalFill } from "react-icons/ri";
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
  align-self: flex-start;
  color: #fff;
  margin-bottom: 40px;
  font-size: 36px;
`;

export const Github = styled(IoLogoGithub)`
  margin: 8px;
`;

export const Vercel = styled(IoLogoVercel)`
  margin: 8px;
`;

export const Instagram = styled(IoLogoInstagram)`
  margin: 8px;
`;

export const Twitter = styled(IoLogoTwitter)`
  margin: 8px;
`;

export const Youtube = styled(IoLogoYoutube)`
  margin: 8px;
`;

export const Gmail = styled(SiGmail)`
  margin: 8px;
`;

export const Site = styled(RiGlobalFill)`
  margin: 8px;
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
