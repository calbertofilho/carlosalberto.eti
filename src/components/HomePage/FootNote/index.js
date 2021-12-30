import React from 'react'
import { Content, LogoWrap, Logo, LogoEmphasis, InfoWrap, Paragraph, SocialMedia, Github, Vercel, Instagram, Twitter, Youtube, Gmail, Site } from './elements'

const FootNote = () => {
  return (
    <Content>
      <InfoWrap>
        <SocialMedia>
          <Github />
          <Vercel />
          <Instagram />
          <Twitter />
          <Youtube />
          <Gmail />
          <Site />
        </SocialMedia>
        <Paragraph>Copyright &copy; { (new Date().getFullYear()) }  |  carlosalberto.eti.br &trade; 2006</Paragraph>
      </InfoWrap>
      <LogoWrap>
        <Logo to='home' className='home'>Carlos<br />Alberto<LogoEmphasis>ETI</LogoEmphasis></Logo>
      </LogoWrap>
    </Content>
  )
}

export default FootNote
