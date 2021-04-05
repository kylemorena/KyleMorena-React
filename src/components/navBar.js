import React,{useEffect,useRef} from 'react';
import {Navbar,Button} from 'react-bootstrap'
import { FaSignOutAlt,FaBars } from "react-icons/fa";

import NavBarScss from './navBar.module.scss';
import {useGlobalContext} from '../common/context';
import FormLogRegister from './navbarComponents/formLogRegister';
import SearchBar from './navbarComponents/searchBar';
import WhishButton from './navbarComponents/whishButton';
import Footer from './navbarComponents/footer';

const NavBar = () => {
  const { user, handleLogout,isSidebarOpen,setIsSidebarOpen } = useGlobalContext();
  const sideBar = useRef(null)

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleClickOutside = (e) => {
    if(sideBar.current && !sideBar.current.contains(e.target)){
      setIsSidebarOpen(false);
    }
    //#region alternative solution to close sidebar
    // else if (sideBar.current && sideBar.current.contains(e.target) && e.target.className==="p-1 text-info bookBtn"){
    //   setTimeout(()=>{
    //     setIsSidebarOpen(false)
    //     },300
    //   )
    // }
    //#endregion
  };

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  return (
    <Navbar 
      bg="primary" 
      variant="dark" 
      className={isSidebarOpen ? `${NavBarScss['navbar']} show-sidebar` : `${NavBarScss['navbar']} hide-sidebar`}>
      <Navbar.Brand href="/" className={`${NavBarScss['logo']} display-4`}>BookMarks</Navbar.Brand>
      <aside ref={sideBar}>
        {
          user ? (
            <div className={NavBarScss['items']}>
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
      </aside>
      <Button className="sidebar-toggle" bg="trasparent" onClick={openSidebar}><FaBars /></Button>
    </Navbar>
  )
}

export default NavBar;
