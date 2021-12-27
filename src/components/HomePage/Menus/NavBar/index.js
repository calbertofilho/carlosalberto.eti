import React from 'react';
import { FaBars } from 'react-icons/fa';
import { menuData } from '../Data';
import { HamburgerIcon, Nav, NavBarButton, NavBarButtonLink, NavBarContainer, NavBarItem, NavBarLink, NavBarLogo, NavBarLogoEmphasis, NavBarMenu } from './elements';

const NavBar = ({ toggle }) => {
  const changeMenuActive = () => {
    const sections = document.querySelectorAll('section');
    const navList = document.querySelectorAll('#menuLinks a');

    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;

      if (window.pageYOffset >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navList.forEach(a => {
      a.classList.remove('active');
      if (a.classList.contains(currentSection)) {
        a.classList.add('active');
      }
    });
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeMenuActive);
  })

  return (
    <Nav>
      <NavBarContainer>
        <NavBarLogo to='home' className='home'>Carlos<br />Alberto <NavBarLogoEmphasis>ETI</NavBarLogoEmphasis></NavBarLogo>
        <HamburgerIcon onClick={toggle}>
          <FaBars />
        </HamburgerIcon>
        <NavBarMenu id='menuLinks'>
          {menuData.map((item, index) => (
            <NavBarItem key={index}>
              <NavBarLink to={item.link} className={item.link}>{item.title}</NavBarLink>
            </NavBarItem>
          ))}
        </NavBarMenu>
        <NavBarButton>
          <NavBarButtonLink to="/app">App</NavBarButtonLink>
        </NavBarButton>
      </NavBarContainer>
    </Nav>
  )
}

export default NavBar
