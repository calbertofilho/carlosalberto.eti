import React from 'react'
import { SideBar, NavBar, HeroSection, AboutSection, PortfolioSection, DownloadsSection, ContactSection  } from '../components/HomePage';

const HomePage = () => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <DownloadsSection />
      <ContactSection />
    </div>
  )
}

export default HomePage
