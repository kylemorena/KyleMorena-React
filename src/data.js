import React,{useState, useEffect} from 'react';
import {createStore} from 'redux';
import axios from 'axios';


//REDUCER
const initialState = {
  data: []
}

const reducer = (state = initialState, action) => {
  return state;
}

//STORE
const store = createStore(reducer);