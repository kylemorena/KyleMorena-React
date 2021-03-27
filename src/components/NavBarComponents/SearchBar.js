import React,{useEffect,useRef} from 'react';
import {Form, FormControl } from 'react-bootstrap';
import { FaSistrix } from "react-icons/fa";
import axios from 'axios';
import SearchBarSCSS from './searchBar.module.scss';
import { useGlobalContext } from '../../common/context';
import Autocomplete from './autocomplete';


const SearchBar = () => {
  const { apiKey, data, dispatch, Searching, ResetData } = useGlobalContext();
  const searchBar = useRef(null)

  const handleChange = async (e) => {
    if(e.target.value!==''){
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&key=${apiKey}&maxResults=5`);
      dispatch(Searching(response.data.items))
    }
    if(e.target.value===''){
      dispatch(ResetData([]));
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  const handleClickOutside = (e) => {
    if(searchBar.current && !searchBar.current.contains(e.target) && e.target.className!=='bookBtn'){
      dispatch(ResetData([]));
    }
  }

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  return (
    <>
      <Form className={`${SearchBarSCSS['SearchForm']}`} onSubmit={handleSubmit} ref={searchBar}>
        <FaSistrix className="text-primary"/>
        <FormControl 
          type="text" 
          className={`${SearchBarSCSS['Input']}`}
          placeholder="Search..."
          onChange={handleChange}
        />
      </Form>
      {data.isOpen ? <Autocomplete books={data.books}/> : null}
    </>
  )
}
export default SearchBar;