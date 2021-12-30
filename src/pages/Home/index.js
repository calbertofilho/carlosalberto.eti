import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MovieBackground, SideBar, NavBar, HeroSection, AboutSection, PortfolioSection, DownloadsSection, ContactSection, FootNote  } from '../../components/HomePage';
import { Content, Footer, Header, Main } from './elements';
import './styles.css';

const HomePage = () => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang : 'pt-br' }}>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Language" content="pt-br" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Especialista em Tecnologia da Informação" />
        <title>Carlos Alberto ETI</title>
      </Helmet>
      <Content>
        <Header>
          <SideBar isOpen={isOpen} toggle={toggle} />
          <NavBar toggle={toggle} />
        </Header>
        <Main>
          <MovieBackground />
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <DownloadsSection />
          <ContactSection />
        </Main>
        <Footer>
          <FootNote />
        </Footer>
      </Content>
    </HelmetProvider>
  )
}

export default HomePage
