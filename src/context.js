import React, { useState, useContext, useEffect, useReducer, useCallback } from 'react'
import axios from 'axios';
import reducer from './reducers/Reducer';
import {searching,noTyping, bookDetail} from './actions/Actions';


const apiKey = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext()

const defaultState = {
  books:[],
  isOpen:false
}

const AppProvider = ({ children }) => {
  const [autocomplete, dispatch] = useReducer(reducer, defaultState)
  const [loading, setLoading] = useState(true);
  const [sendId,setSendId] = useState('');
  const [book,setBook] = useState({});

  const fetchBook = useCallback( async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${sendId}`);
      setBook(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[sendId])

  useEffect(()=>{
    if(sendId!==''){
      fetchBook()
    }
  },[sendId,fetchBook])


  return (
    <AppContext.Provider value={{ loading, apiKey, autocomplete, book, setSendId, dispatch, searching, noTyping }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
