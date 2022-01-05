import React from 'react'
import { Content, LogoWrap, Logo, LogoEmphasis, InfoWrap, Paragraph, SocialMedia, Link, LinkScrl, Github, Vercel, Instagram, Twitter, Youtube, Gmail, Site } from './elements'

const FootNote = () => {
  return (
    <Content>
      <InfoWrap>
        <SocialMedia>
          <Link target='_blank' href='https://github.com/calbertofilho'><Github /></Link>
          <Link target='_blank' href='https://vercel.com/calbertofilho'><Vercel /></Link>
          <Link target='_blank' href='https://www.instagram.com/cfilhoce/'><Instagram /></Link>
          <Link target='_blank' href='https://twitter.com/CFilhoCE'><Twitter /></Link>
          <Link target='_blank' href='https://www.youtube.com/channel/UCqzFzm1V9puvad_6Q0gvTRA'><Youtube /></Link>
          <Link target='_self' href='mailto:carlos@lberto.eti.br'><Gmail /></Link>
          <LinkScrl to='home'><Site /></LinkScrl>
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
