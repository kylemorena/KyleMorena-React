import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/KM_logo.svg';
import NavBarScss from './NavBar.module.scss';


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
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/detail">Detail</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar;
