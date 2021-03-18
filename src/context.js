import React, { useState, useContext, useEffect, useReducer } from 'react'
import axios from 'axios';
import reducer from './reducers/Reducer';
import {searching,resetData} from './actions/Actions';
import {dataFilter} from './dataFilter';


const apiKey = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext()

const defaultState = {
  books:[],
  isOpen:false
}

const AppProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, defaultState)
  const [freeEbooks,setFreeEbooks] = useState({title:'', books:[]})
  const [paidEbooks,setPaidEbooks] = useState({title:'', books:[]})
  const [downloadEbooks,setDownloadEbooks] = useState({title:'', books:[]});
  const [loading,setLoading] = useState(true);

  const getBooks = () => {
    setLoading(true)
    dataFilter.map(async (res) => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${res.filter}&key=${apiKey}&maxResults=3`);
      //get api data depending on filter from links
        switch(res.title){
          case 'free-ebooks':
            setFreeEbooks({title:res.title,books:response.data.items});
            setLoading(false);
            break;
          case 'paid-ebooks':
            setPaidEbooks({title:res.title,books:response.data.items});
            setLoading(false);
            break;
          case 'download':
            setDownloadEbooks({title:res.title,books:response.data.items});
            setLoading(false);
            break;
          default:
            throw new Error ('filter not found')
        }
      } catch (error) {
        setLoading(true);
        console.log(error)
      }
    });
  }

  useEffect(()=>{
    getBooks();
  },[setDownloadEbooks, setFreeEbooks, setPaidEbooks])

  return (
    <AppContext.Provider 
      value={{loading, apiKey, data, freeEbooks, paidEbooks, downloadEbooks, dispatch, searching, resetData, setFreeEbooks,setPaidEbooks,setDownloadEbooks }}>
      {children}
    </AppContext.Provider>
  )
}

// Export all props of AppContext
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
