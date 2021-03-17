import React,{useEffect} from 'react';
import {Form, FormControl } from 'react-bootstrap';
import { useGlobalContext } from '../../context';
import SearchBarSCSS from './SearchBar.module.scss';
import Autocomplete from './Autocomplete';
import axios from 'axios'

const SearchBar = () => {
  const { apiKey, autocomplete, dispatch, searching, noTyping } = useGlobalContext();
  const searchBar = React.useRef(null)

  const handleChange = async (e) => {
    if(e.target.value!==''){
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&key=${apiKey}&maxResults=5`);
      dispatch(searching(response.data.items))
    }
    if(e.target.value===''){
      dispatch(noTyping([]));
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  const handleClickOutside = (e) => {
    if(searchBar.current && !searchBar.current.contains(e.target) && e.target.className!=='bookBtn'){
      dispatch(noTyping([]));
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
      <Form className={`${SearchBarSCSS['SearchForm']} d-flex p-1`} onSubmit={handleSubmit} ref={searchBar}>
        <FormControl 
          type="text" 
          placeholder="Search" 
          className="m-0" 
          onChange={handleChange}
        />
      </Form>
      {autocomplete.isOpen ? <Autocomplete books={autocomplete.books}/> : null}
    </>
  )
}
export default SearchBar;