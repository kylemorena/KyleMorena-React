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

  return (
    <AppContext.Provider value={{apiKey, data, dispatch, searching, resetData }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
