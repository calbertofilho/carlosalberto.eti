import React from 'react'
import { menuData } from '../Data'
import { Side, CloseIcon, XIcon, SideBarMenu, SideBarItem, SideBarLink, SideBarButton, SideBarButtonLink } from './elements'

const SideBar = ({ isOpen, toggle }) => {
  return (
    <Side isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle}>
        <XIcon />
      </CloseIcon>
      <SideBarMenu>
        <SideBarItem>
          {menuData.map((item, index) => (
            <SideBarLink key={index} onClick={toggle} to={item.link}>{item.title}</SideBarLink>
          ))}
        </SideBarItem>
        <SideBarButton>
          <SideBarButtonLink to="/app">App</SideBarButtonLink>
        </SideBarButton>
      </SideBarMenu>
    </Side>
  )
}

export default SideBar
