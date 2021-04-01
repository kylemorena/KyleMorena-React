import React,{useEffect,useState,useRef} from 'react';
import {Form, FormControl } from 'react-bootstrap';
import { FaSistrix } from "react-icons/fa";
import axios from 'axios';
import SearchBarSCSS from './searchBar.module.scss';
import { useGlobalContext } from '../../common/context';
import Autocomplete from './autocomplete';

const SearchBar = () => {
  const { apiKey, data, dispatch, Searching, ResetData } = useGlobalContext();
  const searchBar = useRef(null)
  const [error,setError] = useState(false);

  const handleChange = async (e) => {
    if(e.target.value!==''){
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&langRestrict=it&key=${apiKey}&maxResults=5`);
        dispatch(Searching(response.data.items))
        setError(false)
      } catch (error) {
        setError(true)
      }
      
    }
    if(e.target.value===''){
      dispatch(ResetData([]));
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  const handleClickOutside = (e) => {
    if(searchBar.current && !searchBar.current.contains(e.target) && e.target.className!=='p-1 text-info bookBtn'){
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
      <Form className={`${SearchBarSCSS['SearchForm']} position-relative`} onSubmit={handleSubmit} ref={searchBar}>
        <FaSistrix className="text-primary"/>
        <FormControl 
          type="text" 
          className={`${SearchBarSCSS['Input']}`}
          placeholder="Search..."
          onChange={handleChange}
        />
        {
          error ? (<div>Riprova più tardì</div>) : (
            data.isOpen && <Autocomplete books={data.books}/>
          )
        }
      </Form>
    </>
  )
}
export default SearchBar;