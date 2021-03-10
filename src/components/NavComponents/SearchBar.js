import React, {useEffect} from 'react';
import axios from 'axios';
import SearchBarSCSS from './SearchBar.module.scss';

const SearchBar = () => {
  const api = process.env.REACT_APP_API_KEY;
  useEffect(()=>{
    getBooksApi();
  },[])

  const getBooksApi = async () => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${api}`)
    console.log(response.data);
  };
  return (
    <div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" />
        <button 
          className={`${SearchBarSCSS["btn"]} btn btn-outline-success`} 
          type="submit"
        >Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar;
