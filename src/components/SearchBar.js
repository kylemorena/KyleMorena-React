import React, {useEffect,useState} from 'react';
import {Button, Form, FormControl } from 'react-bootstrap';
import SearchBarSCSS from './SearchBar.module.scss';
import Data from '../data.js';

const SearchBar = () => {

  const handleSubmit=()=>{

  }
  return (
    <Form className="d-flex p-3" onSubmit={handleSubmit}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className={`${SearchBarSCSS["btn"]}`}  variant="outline-info">Search</Button>
    </Form>
  )
}

export default SearchBar;
