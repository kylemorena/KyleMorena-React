import React from 'react';
import {Navbar,Container,Button} from 'react-bootstrap'
import { FaSignOutAlt } from "react-icons/fa";
import NavBarScss from './navBar.module.scss';
import {useGlobalContext} from '../common/context';
import FormLogRegister from './navbarComponents/formLogRegister';
import SearchBar from './navbarComponents/searchBar';
import WhishButton from './navbarComponents/whishButton';
import Footer from './navbarComponents/footer';

const NavBar = () => {
  const { user, handleLogout, } = useGlobalContext();

  return (
    <Navbar className={`${NavBarScss['navbar']} bg-primary m-0 p-0 px-2`} variant="dark">
      <Navbar.Brand href="/" className="m-0 my-3 p-0">
        <h1 className="display-4">Bookssss</h1>
      </Navbar.Brand>
      {
        user ? (
          <Container className="d-flex flex-fill flex-column justify-content-between align-items-start">
            <div>
              <SearchBar />
              <WhishButton />
            </div>
            <Button className="text-primary" onClick={handleLogout}><FaSignOutAlt /> ESCI</Button>
          </Container>
        ) : (
          <FormLogRegister/>
        )
      }
      <Footer />
    </Navbar>
  )
}

export default NavBar;
