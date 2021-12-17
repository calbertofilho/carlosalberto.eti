import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Container, HamburgerIcon, Nav, NavBarButton, NavBarButtonLink, NavBarContainer, NavBarItem, NavBarLink, NavBarLogo, NavBarMenu } from './elements';

const NavBar = () => {
  return (
    <Container>
      <Nav>
        <NavBarContainer>
          <NavBarLogo to="/">Carlos Alberto ETI</NavBarLogo>
          <HamburgerIcon>
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
    </Container>
  )
}

export default NavBar
