import React from 'react';
import {Navbar,Button } from 'react-bootstrap'
import logo from '../assets/KM_logo.svg';
import NavBarScss from './NavBar.module.scss';
import SearchBar from './NavBarComponents/SearchBar';

const NavBar = () => {
  return (
    <>
      <Navbar className={`${NavBarScss['navbar']} bg-primary`} variant="dark">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div className="d-flex flex-column">
          <Button  className="bg-secondary mb-1">Accedi</Button>
          <Button className="bg-secondary">Registrato</Button>
        </div>
        <SearchBar />
      </Navbar>
    </>
  )
}

export default NavBar;
