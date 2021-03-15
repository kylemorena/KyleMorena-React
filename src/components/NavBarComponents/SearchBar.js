import React from 'react';
import {Form, FormControl } from 'react-bootstrap';
import { useGlobalContext } from '../../context';
import SearchBarSCSS from './SearchBar.module.scss';
import SearchList from './SearchList';

const SearchBar = () => {
  const { books , setKeyword } = useGlobalContext();
  const searchValue = React.useRef(null)
  
  const handleChange= () => {
    setKeyword(searchValue.current.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <Form className={`${SearchBarSCSS['SearchForm']} d-flex p-3`} onSubmit={handleSubmit}>
        <FormControl 
          type="text" 
          placeholder="Search" 
          className="mr-sm-2" 
          ref={searchValue}
          onChange={handleChange}
        />
      </Form>
      <div className={`${SearchBarSCSS['listSearch']} position-relative rounded overflow-hidden p-2`}>
        {
          '' || books.map((res)=> { return( <SearchList key={res.id} title={res.volumeInfo.title}/> )})
        }
      </div>
    </>
  )
}

export default SearchBar;