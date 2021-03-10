import React, {useEffect} from 'react';
import SearchBar from './NavComponents/SearchBar';
import axios from 'axios';
import NavBarScss from './NavBar.module.scss';

const NavBar = () => {
  const api = process.env.REACT_APP_API_KEY;
  useEffect(()=>{
    getBooksApi();
  },[])

  const getBooksApi = async () => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${api}`)
    console.log(response.data);
  };
  return (
    <nav className={`${NavBarScss['Navbar']} my-3`}>
      <SearchBar />
    </nav>
  )
}

export default NavBar;
