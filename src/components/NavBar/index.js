import React from 'react';
import { FaBars } from 'react-icons/fa';
import { HamburgerIcon, Nav, NavBarButton, NavBarButtonLink, NavBarContainer, NavBarItem, NavBarLink, NavBarLogo, NavBarMenu } from './elements';

const NavBar = ({ toggle }) => {
  return (
    <Nav>
      <NavBarContainer>
        <NavBarLogo to="/">Carlos Alberto ETI</NavBarLogo>
        <HamburgerIcon onClick={toggle}>
          <FaBars />
        </HamburgerIcon>
        <NavBarMenu>
          <NavBarItem>
            <NavBarLink to="about">Sobre</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="portfolio">Portfolio</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="downloads">Downloads</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to="contato">Contato</NavBarLink>
          </NavBarItem>
        </NavBarMenu>
        <NavBarButton>
          <NavBarButtonLink to="/app">App</NavBarButtonLink>
        </NavBarButton>
      </NavBarContainer>
    </Nav>
  )
}

export default NavBar
