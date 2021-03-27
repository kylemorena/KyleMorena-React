import React from 'react';
import {Navbar,Container,Button} from 'react-bootstrap'
import NavBarScss from './NavBar.module.scss';
import SearchBar from './NavBarComponents/SearchBar';
import {useGlobalContext} from '../common/context';
import WhishButton from './NavBarComponents/WhishButton';
import { FaSignOutAlt } from "react-icons/fa";
import Copyright from './NavBarComponents/Copyright';
import FormLogRegister from './NavBarComponents/FormLogRegister';

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
      <Copyright />
    </Navbar>
  )
}

export default NavBar;
