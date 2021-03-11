import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('a')
  const [books, setBooks] = useState([])

  const fetchBooks = useCallback( async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${apiKey}&maxResults=5`)
      setBooks(response.data.items) 
      console.log(books)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[keyword])
  useEffect(() => {
    fetchBooks()
  }, [keyword,fetchBooks])
  return (
    <AppContext.Provider value={{ loading, books, keyword, setKeyword }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
