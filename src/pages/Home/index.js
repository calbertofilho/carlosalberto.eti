import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MovieBackground, SideBar, NavBar, HeroSection, AboutSection, PortfolioSection, DownloadsSection, ContactSection  } from '../../components/HomePage';
import GlobalStyles from './styles';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Encode Sans Expanded: 100,200,300,400,500,600,700,800,900', 'Syne Mono', 'Nova Mono', 'Material Icons', 'Material Icons Outlined', 'Material Icons Two Tone', 'Material Icons Round', 'Material Icons Sharp']
  }
});

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
      <GlobalStyles />
      <>
        <MovieBackground />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <DownloadsSection />
        <ContactSection />
      </>
    </HelmetProvider>
  )
}

export default HomePage
