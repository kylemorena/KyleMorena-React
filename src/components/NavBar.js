import React from 'react';
import {Navbar,Button } from 'react-bootstrap'
import logo from '../assets/KM_logo.svg';
import NavBarScss from './NavBar.module.scss';
import SearchBar from './SearchBar';


const NavBar = () => {
  return (
    <>
      <Navbar className={NavBarScss['navbar']} bg="dark" variant="dark">
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
          <Button  className="mb-1">Accedi</Button>
          <Button >Registrato</Button>
        </div>
        <SearchBar />
      </Navbar>
    </>
  )
}

export default NavBar;
