import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.6);
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavBarLogo = styled(LinkScroll)`
  color: #01bf71;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  white-space: nowrap;
  font-family: 'Reality Hyper TTF', sans-serif;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (max-width: 400px) {
    white-space: normal;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 250px) {
    font-size: 0.5rem;
  }
`;

export const NavBarLogoEmphasis = styled.span`
  align-self: center;
  font-family: 'Reality Hyper TTF', sans-serif;
  font-weight: bold;
  font-size: 4.4rem;
  margin-left: 12px;

  @media screen and (max-width: 400px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 250px) {
    font-size: 1.8rem;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavBarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBarItem = styled.li`
  height: 80px;
`;

export const NavBarLink = styled(LinkScroll)`
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #01bf71;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
    padding-top: 3px;
    color: #01bf71;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0%;
    height: 3px;
    background: #01bf71;
    transition: 0.3s ease-in-out;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

export const NavBarButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBarButtonLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  padding: 10px 22px;
  color: #010606; 
  white-space: nowrap;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;
