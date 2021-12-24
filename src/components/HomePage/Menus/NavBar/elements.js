import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.6);
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

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
  font-family: 'Reality Hyper', sans-serif;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (max-width: 400px) {
    white-space: normal;
  }
`;

export const NavBarLogoEmphasis = styled.span`
  align-self: flex-start;
  font-family: 'Reality Hyper', sans-serif;
  font-weight: bold;
  font-size: 4.4rem;
  margin-left: 12px;
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
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #01bf71;
    padding-top: 3px;
    color: #01bf71;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
    padding-top: 3px;
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
