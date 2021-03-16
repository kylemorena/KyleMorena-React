import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import {links} from './dataFilter';

const apiKey = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [books, setBooks] = useState([])

  //this run only when keyword change
  const fetchBooks = useCallback( async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${apiKey}&maxResults=5`);
      console.log(response.data.items);
      //after getting data, add it on books variable and set loading to false.
      setBooks(response.data.items);
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[keyword])

  useEffect(() => {
    if(keyword!==''){
      fetchBooks()
    }
    if(keyword===''){
      setBooks([])
    }
  }, [keyword,fetchBooks])
  return (
    <AppContext.Provider value={{ loading, books, keyword, links, setKeyword, setLoading }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
