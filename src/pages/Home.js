import React from 'react'
import { NavBar, SideBar } from '../components';

const Home = () => {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
    </div>
  )
}

export default Home
