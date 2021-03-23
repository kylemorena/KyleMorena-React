import React from 'react';
import {Navbar,Button } from 'react-bootstrap'
import logo from '../assets/KM_logo.svg';
import NavBarScss from './NavBar.module.scss';
import SearchBar from './NavBarComponents/SearchBar';
import firebase from '../base';

const NavBar = () => {
  return (
    <Navbar className={`${NavBarScss['navbar']} bg-primary m-0 p-0`} variant="dark">
      <Navbar.Brand href="/">
        <h1>Bookssss</h1>
      </Navbar.Brand>
      <div className="d-flex flex-column">
        <Button  className="bg-secondary mb-1">Accedi</Button>
        <Button className="bg-secondary" onClick={()=>firebase.auth().singOut()}>Registrati</Button>
      </div>
      <SearchBar />
    </Navbar>
  )
}

export default NavBar;
