import React from 'react'
import SearchBarSCSS from './SearchBar.module.scss';

const SearchBar = () => {
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
