import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './NavComponents/SearchBar';
import NavBarScss from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={`${NavBarScss['Navbar']} navbar navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        ><span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-between collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to='/'>Home</Link></li>
            <li className="nav-item"><Link to='/Detail'>Detail</Link></li>
            <li className="nav-item"><Link to='/Contacts'>Contacts</Link></li>
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
