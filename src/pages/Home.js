import React from 'react'
import { AboutSection, HeroSection, NavBar, SideBar } from '../components';

const Home = () => {
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
    </div>
  )
}

export default Home
