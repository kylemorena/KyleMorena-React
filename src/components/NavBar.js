import React,{useState,useEffect,useRef} from 'react';
import {Navbar,Button} from 'react-bootstrap'
import { FaSignOutAlt,FaBars } from "react-icons/fa";

import NavBarScss from './navBar.module.scss';
import {useGlobalContext} from '../common/context';
import FormLogRegister from './navbarComponents/formLogRegister';
import SearchBar from './navbarComponents/searchBar';
import WhishButton from './navbarComponents/whishButton';
import Footer from './navbarComponents/footer';

const NavBar = () => {
  const { user, handleLogout } = useGlobalContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sideBar = useRef(null)

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleClickOutside = (e) => {
    if(sideBar.current && !sideBar.current.contains(e.target)){
      setIsSidebarOpen(false);
    }
  };

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  return (
    <Navbar bg="primary" variant="dark" className={NavBarScss['navbar']}>
      <Navbar.Brand href="/" className={`${NavBarScss['logo']} display-4`}>Bookssss</Navbar.Brand>
      {
        user ? (
          <div className={NavBarScss['search-whislist']}>
            <div>
              <SearchBar />
              <WhishButton />
            </div>
            <Button onClick={handleLogout}><FaSignOutAlt /> ESCI</Button>
          </div>
        ) : (
          <FormLogRegister/>
        )
      }
      <Footer />
    </Navbar>
  )
}

export default NavBar;
