import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Side = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  left: 0;
  top: ${({ isOpen }) => ( isOpen ? '0' : '-100%' )};
  opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0' )};
  z-index: 999;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const XIcon = styled(FaTimes)`
  color: #fff;
`;

// SidebarWrapper
export const SideBarMenu = styled.div`
  color: #fff;
`;

// SidebarMenu
export const SideBarItem = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

// SidebarLink
export const SideBarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

// SideBtnWrap
export const SideBarButton = styled.div`
  display: flex;
  justify-content: center;
`;

// SidebarRoute
export const SideBarButtonLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
