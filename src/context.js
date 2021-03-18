import React, { useState, useContext, useEffect, useReducer, useCallback } from 'react'
import axios from 'axios';
import reducer from './reducers/Reducer';
import {searching,resetData} from './actions/Actions';


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
  const [downloadEbooks,setDownloadEbooks] = useState({title:'', books:[]})

  return (
    <AppContext.Provider 
      value={{apiKey, data, freeEbooks, paidEbooks, downloadEbooks, dispatch, searching, resetData, setFreeEbooks,setPaidEbooks,setDownloadEbooks }}>
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
