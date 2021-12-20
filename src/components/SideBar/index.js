import React from 'react'
import { Side, CloseIcon, XIcon, SideBarMenu, SideBarItem, SideBarLink, SideBarButton, SideBarButtonLink } from './elements'

const SideBar = ({ isOpen, toggle }) => {
  return (
    <Side isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle}>
        <XIcon />
      </CloseIcon>
      <SideBarMenu>
        <SideBarItem>
          <SideBarLink onClick={toggle} to="about">Sobre</SideBarLink>
          <SideBarLink onClick={toggle} to="portfolio">Portfolio</SideBarLink>
          <SideBarLink onClick={toggle} to="downloads">Downloads</SideBarLink>
          <SideBarLink onClick={toggle} to="contato">Contato</SideBarLink>
        </SideBarItem>
        <SideBarButton>
          <SideBarButtonLink to="/app">App</SideBarButtonLink>
        </SideBarButton>
      </SideBarMenu>
    </Side>
  )
}

export default SideBar
