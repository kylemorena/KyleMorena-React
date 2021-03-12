import React from 'react';
import {Form, FormControl } from 'react-bootstrap';
// import SearchBarSCSS from './SearchBar.module.scss';
import { useGlobalContext } from '../context.js';

const SearchBar = () => {
  const { setKeyword } = useGlobalContext();
  const searchValue = React.useRef(null)
  
  const handleChange= () => {
    setKeyword(searchValue.current.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <Form className="d-flex p-3" onSubmit={handleSubmit}>
        <FormControl 
          type="text" 
          placeholder="Search" 
          className="mr-sm-2" 
          ref={searchValue}
          onChange={handleChange}
        />
      </Form>
    </>
  )
}

export default SearchBar;
